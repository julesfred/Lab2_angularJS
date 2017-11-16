(function(){
    function hoverButton(){
        return{
            restrict: "A",
            template:"<div>Add</div>",
            link: function($scope, $element, $attrs) {
                $element.on("mouseenter", function() {
                    $element.css("backgroundColor", "#f857a6");
                });

                $element.on("mouseleave", function() {
                    $element.css("backgroundColor", "rgba(248, 87, 170, 0.40)");
                });
                
            }
        }
    }
    angular
    .module("app")
    .directive("hoverButton", hoverButton);
})();