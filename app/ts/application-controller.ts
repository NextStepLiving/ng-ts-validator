

export class ApplicationController {
    public static $inject = ['$router'];
    private $router;

    constructor($router) {
        console.log('ApplicationController instatiated');
        this.$router = $router;
        this.bindRoutes();
    }

    private bindRoutes(): void {
        this.$router.config([
            { path: '/', component: 'example' }
        ]);
    }
}

