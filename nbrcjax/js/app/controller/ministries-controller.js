(function() {
    var app = angular.module("nbrcjax");
    app.controller("ministriesController", ['$scope', '$http', '$location', '$window', 'jQuery', '$log', '$controller', ministriesController]);
    app.controller("ministriesAdultController", ['$scope', '$http', '$location', '$window', 'jQuery', '$log', '$controller', ministriesAdultController]);
    app.controller("ministriesWorshipController", ['$scope', '$http', '$location', '$window', 'jQuery', '$log', '$controller', ministriesWorshipController]);
    app.controller("ministriesYouthController", ['$scope', '$http', '$location', '$window', 'jQuery', '$log', '$controller', ministriesYouthController]);
    app.controller("ministriesChildrenController", ['$scope', '$http', '$location', '$window', 'jQuery', '$log', '$controller', ministriesChildrenController]);
    app.controller("ministriesChildrenScheduleController", ['$scope', '$http', '$location', '$window', 'jQuery', '$log', '$controller', ministriesChildrenScheduleController]);
        
    function ministriesController($scope, $http, $location, $window, $, $log, $controller) {
    	$controller('baseController', {$scope: $scope});
    }
    
    function ministriesAdultController($scope, $http, $location, $window, $, $log, $controller) {
    	$controller('baseController', {$scope: $scope});
    }
    
    function ministriesWorshipController($scope, $http, $location, $window, $, $log, $controller) {
    	$controller('baseController', {$scope: $scope});
    }
    
    function ministriesYouthController($scope, $http, $location, $window, $, $log, $controller) {
    	$controller('baseController', {$scope: $scope});
    }
    
    function ministriesYouthController($scope, $http, $location, $window, $, $log, $controller) {
    	$controller('baseController', {$scope: $scope});
	}
    
    function ministriesChildrenController($scope, $http, $location, $window, $, $log, $controller) {
    	$controller('baseController', {$scope: $scope});
	}
    
    function ministriesChildrenScheduleController($scope, $http, $location, $window, $, $log, $controller) {
    	$controller('baseController', {$scope: $scope});
	}
}());