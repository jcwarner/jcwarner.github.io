(function() {
    var app = angular.module("nbrcjax", [
        'ui.router',
        "ngRoute"]);
    
    app.constant('config', {
    	contactEmailService: 'https://script.google.com/macros/s/AKfycbwTA5fsM8Yfx9fZTTe8OQZeW1fA68QUwnbdkhA8bxNMAIua7Bs/exec',
    	calendarService: 'https://churchtraconline.com/public_calendar?ui=3D11E3',
    	announcementService: 'https://spreadsheets.google.com/feeds/cells/1nmjXnWF6zIWITOAIO9yZKRqdGomcQDo9yZYmzXGAoI8/1/public/values?alt=json-in-script'
    	//announcementService: 'https://spreadsheets.google.com/feeds/cells/1nmjXnWF6zIWITOAIO9yZKRqdGomcQDo9yZYmzXGAoI8/1/public/basic?alt=json'
    });

    app.factory('jQuery', ['$window', function ($window) {
        return $window.jQuery;
    }]);

    app.config(['$httpProvider', function($httpProvider) {
        //initialize get if not there
        if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};    
        }    

        //disable IE ajax request caching
        //$httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
        // extra
        //$httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
        //$httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
    }]);

    app.filter('ctime', function () {

        return function (jsonDate) {
            if (angular.isDate(jsonDate)) {
                return jsonDate;
            } else {
                var date = new Date(parseInt(jsonDate.substr(6)));
                return date;
            }
            
        };

    });
    app.directive('title', ['$rootScope', '$timeout',
        function($rootScope, $timeout) {
          return {
            link: function() {

              var listener = function(event, toState) {

                $timeout(function() {
                  $rootScope.title = (toState && toState.pageTitle) 
                  ? toState.pageTitle 
                  : 'Default title';
                });
              };

              $rootScope.$on('$stateChangeSuccess', listener);
            }
          };
        }
      ]);
}());