(function(){
    function hoverState(){
        return{
            restrict: "A",
            template:"<a>clear</a>",
            link: function($scope, $element, $attrs) {
                $element.on("mouseenter", function() {
                    $element.css("color", "#ff0000");
                });

                $element.on("mouseleave", function() {
                    $element.css("color", "black");
                });

                
            }
        }
    }
    angular
    .module("app")
    .directive("hoverState", hoverState);
})();