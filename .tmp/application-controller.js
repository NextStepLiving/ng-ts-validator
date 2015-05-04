export class ApplicationController {
    constructor($router) {
        console.log('ApplicationController instatiated');
        this.$router = $router;
        this.bindRoutes();
    }
    bindRoutes() {
        this.$router.config([
            { path: '/', component: 'todo' }
        ]);
    }
}
ApplicationController.$inject = ['$router'];

//# sourceMappingURL=.application-controller.js.map