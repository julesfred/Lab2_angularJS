(function () {
    var taskList = {
        bindings: {
            toDo: "<"
        },
        template: `
        <input class="fixInput" type="text" ng-model="itemFilter" placeholder="Filter your to-dos"> 
        <ol>
            <li ng-repeat="thing in $ctrl.toDo | filter: itemFilter track by $index">
                <input ng-model="thing" ng-blur="$ctrl.editTask(thing, $index);" class="removeBorder">
                <i class="material-icons" ng-click="$ctrl.removeToDo($index);" hover-state>clear</i>
            </li>
        </ol>
        `,
        controller: function(TaskService){
            var $ctrl = this
            $ctrl.editTask= function(newTask, index){
                console.log(newTask, index);
                TaskService.editTask(newTask, index).then(function(response){
                    console.log(response);
                });
            };
            $ctrl.removeToDo= function(index){
                $ctrl.toDo.splice(index, 1);
                TaskService.deleteTask(index).then(function(response){
                    console.log(response);
                })
            }
        }
    };

    angular
        .module("app")
        .component("taskList", taskList);
})();

