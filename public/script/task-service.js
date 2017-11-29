(function() {
    function TaskService($http) {

        return{
            addTask: addTask,
            deleteTask: deleteTask,
            editTask: editTask,
            getTasks: getTasks
        };

        function getTasks(){
            return $http({
                url: "/tasks",
                method: "GET"
            }).then(function(response) {
                return response;
            });
        }


        function addTask(newTask){
            console.log(newTask);
            return $http({
                url: "/tasks",
                method: "POST",
                data: {task: newTask}
            }).then(function(response){
                return response;
            })
        }

        function deleteTask(index){
            return $http({
                url:"/tasks/" + index,
                method: "DELETE"
            }).then(function(response){
                return response;
            });
        }


        function editTask(newTask, index){
            return $http({
                url: "/tasks/" + index,
                method: "PUT",
                data: {task: newTask}
            }).then(function(response){
                return response;
            });
        }

    }

    angular
            .module("app")
            .factory("TaskService", TaskService);
})();