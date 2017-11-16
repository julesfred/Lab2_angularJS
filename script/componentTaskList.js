(function () {
    var taskList = {
        bindings: {
            listItem: "<"
        },
        controller: "FormController",
        template: `
        <input class="fixInput" type="text" ng-model="itemFilter" placeholder="Filter your to-dos"> 
        <ol>
            <li ng-repeat="items in $ctrl.listItem | filter: itemFilter track by $index">{{items}}
                <i class="material-icons" ng-click="$ctrl.removeItem($index);" hover-state>clear</i>
            </li>
        </ol>
        `
    };

    angular
        .module("app")
        .component("taskList", taskList);
})();

