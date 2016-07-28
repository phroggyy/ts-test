'use strict'
/**
 * A decorator for meta binding a class as an angular controller
 *
 * @param moduleOrName
 * @param controllerName
 * @param controller
 * @returns {function(Function): undefined}
 * @constructor
 */
export function Controller(moduleOrName:string | ng.IModule, controllerName:string, controller:Function):Function {
    'use strict'
    return ():void => {
        let module:any = typeof moduleOrName === 'string' ? angular.module(moduleOrName) : moduleOrName
        module.controller(controllerName, controller)
    };
}