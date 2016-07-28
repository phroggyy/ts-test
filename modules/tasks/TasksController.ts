'use strict'
import {Controller} from '../../decorators/Controller'

@Controller('app.tasks', TasksController.IID, TasksController)
class TasksController {
    static IID:string = 'TasksController'
    static $inject:Array<string> = ['$scope']
}