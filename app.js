var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RootController = (function () {
    function RootController($scope) {
        this.$scope = $scope;
        //
    }
    return RootController;
}());
var TasksConfiguration = (function () {
    /**
     * Create the user configuration class
     *
     * @param stateProvider
     */
    function TasksConfiguration(stateProvider) {
        this.stateProvider = stateProvider;
        this.buildStates();
    }
    /**
     * Initialize the user module
     */
    TasksConfiguration.prototype.buildStates = function () {
        this.stateProvider
            .state('app.welcome', {
            url: '/',
            templateUrl: 'pages/welcome.html',
            controller: 'indexController as vm'
        });
    };
    return TasksConfiguration;
}());
