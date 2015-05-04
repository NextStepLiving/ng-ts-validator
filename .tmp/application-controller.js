export class ApplicationController {
    constructor($router) {
        console.log('ApplicationController instatiated');
        this.$router = $router;
        this.bindRoutes();
    }
    bindRoutes() {
        this.$router.config([
            { path: '/', component: 'example' }
        ]);
    }
}
ApplicationController.$inject = ['$router'];

//# sourceMappingURL=.application-controller.js.map