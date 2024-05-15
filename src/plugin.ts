import { createApplication } from '@angular/platform-browser';
import { PrimariaApi, regions } from '@uxland/primary-shell';
import { AppComponent } from './app/app.component';
import { ApplicationRef, Type } from '@angular/core';
import { ToolBarActionComponent } from './app/tool-bar-action/tool-bar-action.component';

const viewAngularFactory = <C>(app: ApplicationRef, component: Type<C>): () => Promise<HTMLElement> => () => {
  const host = document.createElement('host-component');
  app.bootstrap(component, host);
  return Promise.resolve(host);
}

export const initialize = (api: PrimariaApi) => {
  console.log('Plugin loaded', api.pluginInfo.pluginId);

  createApplication().then((app) => {
    api.regionManager.registerView(regions.main, {
      factory: viewAngularFactory(app, AppComponent),
    } as any);

    
    
    api.regionManager.registerView(regions.actionsToolbar, {
      factory: viewAngularFactory(app, ToolBarActionComponent),
      options: {
        sortHint: '001'
      }
    } as any);
  });

};

export const dispose = (api: PrimariaApi) => {
  api.regionManager.removeView(regions.main,`${api.pluginInfo.pluginId}-1`);
}