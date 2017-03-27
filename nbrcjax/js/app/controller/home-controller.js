(function() {
    var app = angular.module("nbrcjax");
    app.controller("homeController", ['$scope', '$http', '$location', '$window', 'jQuery', '$log', '$controller', homeController]);

    function homeController($scope, $http, $location, $window, $, $log, $controller) {
    	$controller('baseController', {$scope: $scope});
    }
}());