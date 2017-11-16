(function () {
    var taskForm = {
        controller: "FormController",
        template: ` 
    <div class="container">
        <h1>TODO List</h1>
        <h2>A place to store the things you have to do!</h2>

        <task-list list-item="$ctrl.listItem"></task-list>
   
        <input type="text" ng-model="$ctrl.newItem" placeholder="Add your to do" value="">

        <button hover-button ng-click="$ctrl.addItem($ctrl.newItem)">Add</button>

    </div>
    `
    };

    angular
        .module("app")
        .component("taskForm", taskForm);
})();