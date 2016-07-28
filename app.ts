/// <reference path="./typings/index.d.ts" />
'use strict'

import './RootController'
import './modules/tasks/_module'

let modules = [
    'app.tasks'
]

let app:any = angular.module('app', [
    'ui.router'
].concat(modules))

app.config(function ($stateProvider:ng.ui.IStateProvider, $urlRouterProvider:ng.ui.IUrlRouterProvider) {
    $urlRouterProvider.otherwise("/")
    $stateProvider.state('app', {
        abstract: true,
        templateUrl: 'layouts/app.html',
        controller: 'RootController as vm'
    })
})

app.run(['app.tasks', function (tasks:any) {
    //
}])