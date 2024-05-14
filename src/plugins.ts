export const plugins = [{ pluginId: 'angular-plugin' }];
export const pluginLoader = (mi: { pluginId: string }) => {
    return import(`./plugin`);
}
