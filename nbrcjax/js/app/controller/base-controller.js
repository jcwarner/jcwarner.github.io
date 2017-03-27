(function() {
    var app = angular.module("nbrcjax");
    app.controller("baseController", ['$scope', 'jQuery', baseController]);

    function baseController($scope, $) {
    	$scope.runResize = $scope.runResize + 1;
    	$scope.$watch("runResize", function () { resize($); });
    	
    	$(".br-tt").remove();
    }
    function resize($){
        var interval = setInterval(function() {
        	var height = 0;
        	
            $("ui-view").children().each(function(){height += $(this).innerHeight()})
            height += $("#info_bar").innerHeight();
            height += 30;
            
            $("#wrapper").css("height", height);
        }, 1000);
    }
}());