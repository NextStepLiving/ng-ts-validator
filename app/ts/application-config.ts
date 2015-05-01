console.log('application-config.ts was run');

var applicationConfig = function($componentLoaderProvider) {
    setControllerNameMapping($componentLoaderProvider);
};

applicationConfig.$inject = ['$componentLoaderProvider'];

function setControllerNameMapping($componentLoaderProvider) {

    $componentLoaderProvider.setTemplateMapping(function (name: string) {

        let dashName = dashCase(name);
        return 'js/' + dashName + '/' + dashName + '.html';
    });
}

function dashCase(name: string): string {
    return name.replace(/([A-Z])/g , function ($1) {
        return '-' + $1.toLowerCase();
    })
}

export default applicationConfig;

