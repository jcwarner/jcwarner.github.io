(function() {
    var app = angular.module("nbrcjax");
    app.controller("aboutController", ['$scope', '$http', '$location', '$window', 'jQuery', '$log', '$controller', aboutController]);
    app.controller("aboutFindController", ['$scope', '$http', '$location', '$window', 'jQuery', '$log', '$controller', aboutFindController]);
    app.controller("aboutBelieveController", ['$scope', '$http', '$location', '$window', 'jQuery', '$log', '$controller', aboutBelieveController]);
    app.controller("aboutStaffController", ['$scope', '$http', '$location', '$window', 'jQuery', '$log', '$controller', aboutStaffController]);
    app.controller("aboutStaffSPController", ['$scope', '$http', '$location', '$window', 'jQuery', '$log', '$controller', aboutStaffSPController]);
    app.controller("aboutStaffWLController", ['$scope', '$http', '$location', '$window', 'jQuery', '$log', '$controller', aboutStaffWLController]);
    app.controller("aboutStaffVTController", ['$scope', '$http', '$location', '$window', 'jQuery', '$log', '$controller', aboutStaffVTController]);
    
    
    
    function aboutController($scope, $http, $location, $window, $, $log, $controller) {
    	$controller('baseController', {$scope: $scope});
//    	$scope.nav.about();
    }
    
    function aboutFindController($scope, $http, $location, $window, $, $log, $controller) {
    	$controller('baseController', {$scope: $scope});
//    	$scope.nav.about();
    }
    
    function aboutBelieveController($scope, $http, $location, $window, $, $log, $controller) {
    	$controller('baseController', {$scope: $scope});
//    	$scope.nav.about();
    }
    
    function aboutStaffController($scope, $http, $location, $window, $, $log, $controller) {
    	$controller('baseController', {$scope: $scope});
//    	$scope.nav.about();
    }
    
    function aboutStaffSPController($scope, $http, $location, $window, $, $log, $controller) {
    	$controller('baseController', {$scope: $scope});
//    	$scope.nav.about();
    }
    function aboutStaffWLController($scope, $http, $location, $window, $, $log, $controller) {
    	$controller('baseController', {$scope: $scope});
//    	$scope.nav.about();
    }
    function aboutStaffVTController($scope, $http, $location, $window, $, $log, $controller) {
    	$controller('baseController', {$scope: $scope});
//    	$scope.nav.about();
    }
}());