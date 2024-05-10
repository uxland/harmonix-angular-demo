export const modules = [{ moduleId: 'angular-module' }];
export const moduleLoader = (mi: { moduleId: string }) => {
    return import(`./module`);
}
