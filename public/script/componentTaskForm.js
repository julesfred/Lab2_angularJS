(function () {
    var taskForm = {
        template: ` 
    <div class="container">
        <h1>TODO List</h1>
        <h2>A place to store the things you have to do!</h2>

        <task-list to-do="$ctrl.toDo"></task-list>
   
        <input type="text" ng-model="$ctrl.add" placeholder="Add your to do" value="">

        <button hover-button ng-click="$ctrl.click($ctrl.add)">Add</button>

    </div>
    `,
        controller: function (TaskService) {
            var $ctrl = this;

            TaskService.getTasks().then(function(response){
                console.log(response);
            });
            $ctrl.toDo = ["jog","get gas","cook dinner"];
            
            $ctrl.click=function(add){
                TaskService.addTask(add).then(function(response){
                    console.log(response);
                    $ctrl.toDo.push(add);
                    $ctrl.add="";
                })
            };
    }}

    angular
        .module("app")
        .component("taskForm", taskForm);
})();