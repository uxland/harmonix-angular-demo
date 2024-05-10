import { createApplication } from '@angular/platform-browser';
import { shellLitRegionManager } from '@uxland/fim-core';
import { regions } from '@uxland/primary-shell';
import { AppComponent } from './app/app.component';
import { ApplicationRef, Type } from '@angular/core';
import { ToolBarActionComponent } from './app/tool-bar-action/tool-bar-action.component';

const viewAngularFactory = <C>(app: ApplicationRef, component: Type<C>): () => Promise<HTMLElement> => () => {
  const host = document.createElement('host-component');
  app.bootstrap(component, host);
  return Promise.resolve(host);
}

export const initialize = (mi: { moduleId: string }) => {
  console.log('Module loaded', mi);

  createApplication().then((app) => {
    shellLitRegionManager.registerViewWithRegion(regions.main, `${mi.moduleId}-1`, {
      factory: viewAngularFactory(app, AppComponent),
    });

    
    
    (regions.actionsToolbar, `${mi.moduleId}-2`, {
      factory: viewAngularFactory(app, ToolBarActionComponent),
      sortHint: '001',
    });
  });

};

export const dispose = (mi: { moduleId: string }) => {
  shellLitRegionManager.getRegion(regions.main).removeView(`${mi.moduleId}-1`);
}