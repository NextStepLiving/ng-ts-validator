console.log('application-config.ts was run');
var applicationConfig = function ($componentLoaderProvider) {
    setControllerNameMapping($componentLoaderProvider);
};
applicationConfig.$inject = ['$componentLoaderProvider'];
function setControllerNameMapping($componentLoaderProvider) {
    $componentLoaderProvider.setTemplateMapping(function (name) {
        let dashName = dashCase(name);
        return 'components/' + dashName + '/' + dashName + '.html';
    });
}
function dashCase(name) {
    return name.replace(/([A-Z])/g, function ($1) {
        return '-' + $1.toLowerCase();
    });
}
export default applicationConfig;

//# sourceMappingURL=.application-config.js.map