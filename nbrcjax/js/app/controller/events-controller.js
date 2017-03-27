(function() {
    var app = angular.module("nbrcjax");
    app.controller("eventsCalendarController", ['$scope', '$http', '$location', '$window', 'jQuery', '$log', '$controller', 'config', '$sce', eventsCalendarController]);
    app.controller("eventsAnnouncementController", ['$scope', '$http', '$location', '$window', 'jQuery', '$log', '$controller', 'config', eventsAnnouncementController]);
    
    function eventsCalendarController($scope, $http, $location, $window, $, $log, $controller, config, $sce) {
    	$controller('baseController', {$scope: $scope});
    	$scope.calUrl = $sce.trustAsResourceUrl(config.calendarService);
    }
    
    function eventsAnnouncementController($scope, $http, $location, $window, $, $log, $controller, config) {
    	$controller('baseController', {$scope: $scope});
    	$http.get(config.announcementService + "&callback=x").then(onGetAnnouncementSuccess, onGetAnnouncementFail);
    	$scope.announcements = [];
    	
    	function onGetAnnouncementSuccess(response){
    		var innerResponse = eval(response.data);
    		
    		//filter these by [0] GTE today
    		var test = mapEntries(innerResponse, null , 2);
    		$log.log(test);
    	}
    	
    	function x(data){
    		return data;
    	}
    	
    	function mapEntries(json, realrowlength, skip){
    		  if (!skip) skip = 0;
    		  var dataframe = new Array();
    		  
    		  var row = new Array();
    		  for (var i=0; i < json.feed.entry.length; i++) {

    		    var entry = json.feed.entry[i];
    		    if (entry.gs$cell.col == '1') {
    		      if (row != null) {
    		        if ((!realrowlength || row.length === realrowlength) && (skip  === 0)){
    		           dataframe.push(row);
    		        } else {
    		           if (skip > 0) skip--;
    		        }
    		      }

    		      var row = new Array();
    		    }
    		    row.push(entry.content.$t);
    		  } 
    		  dataframe.push(row);
    		  
    		  return dataframe;
    		}
    	
    	function onGetAnnouncementFail(){
    		alert("Failed to retrieve announcements. Please try again later.");
    	}
    }
    
    
}());