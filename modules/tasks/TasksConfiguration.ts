class TasksConfiguration {
    /**
     * Create the user configuration class
     *
     * @param stateProvider
     */
    constructor(private stateProvider:ng.ui.IStateProvider) {
        this.buildStates();
    }

    /**
     * Initialize the user module
     */
    public buildStates():void {
        this.stateProvider
            .state('app.welcome', {
                url: '/',
                templateUrl: 'pages/welcome.html',
                controller: 'indexController as vm'
            })
    }
}