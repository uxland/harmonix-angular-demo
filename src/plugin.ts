import { createApplication } from '@angular/platform-browser';
import { PrimariaApi, PrimariaMenuItem, shellRegions } from '@uxland/primary-shell';
import { AppComponent } from './app/app.component';
import { ApplicationRef, NgZone, Type } from '@angular/core';
import { ToolBarActionComponent } from './app/tool-bar-action/tool-bar-action.component';

const viewAngularFactory = <C>(app: ApplicationRef, component: Type<C>): () => Promise<HTMLElement> => () => {
  const host = document.createElement('host-component');
  app.injector.get(NgZone).run(() => app.bootstrap(component, host));
  return Promise.resolve(host);
}

export const initialize = (api: PrimariaApi) => {
  console.log('Plugin loaded', api.pluginInfo.pluginId);
  console.log("Started correctly")

  createApplication().then((app) => {
    api.regionManager.registerView( shellRegions.main,  {
      id: "main-plugin-view",
      factory: viewAngularFactory(app, AppComponent),
    } as any);


    api.regionManager.registerView( shellRegions.headerActions, {
      factory: viewAngularFactory(app, ToolBarActionComponent),
      options: {
        sortHint: '001'
      }
    } as any);
    api.regionManager.registerQuickAction({
      id: api.pluginInfo.pluginId,
      factory: () => Promise.resolve( new PrimariaMenuItem("add_circle_outline", "My plugin", () => {
        api.regionManager.activateView(shellRegions.main, "main-plugin-view" )
      })),
    });
  });

};

export const dispose = (api: PrimariaApi) => {
  api.regionManager.removeView( shellRegions.main,`${api.pluginInfo.pluginId}-1`);
}