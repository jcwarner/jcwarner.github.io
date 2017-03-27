(function() {
    var app = angular.module("nbrcjax");
    app.controller("contactController", ['$scope', '$http', '$location', '$window', 'jQuery', '$log', '$controller', 'config', contactController]);
    
        
    function contactController($scope, $http, $location, $window, $, $log, $controller, config) {
    	$controller('baseController', {$scope: $scope});
    	$scope.contactSubmit = contactSubmit;
    	$scope.contact = {};
    	$scope.alertClass = "hidden";
    	
    	function contactSubmit(){
    		$.ajax({
    		    type: 'POST',
    		    url: config.contactEmailService,
    		    async: false,
    		    crossDomain: true,
    		    data: $scope.contact,
    		    dataType: 'jsonp',
    		    success: onSubmitContactSuccess,
    		    error: onSubmitContactError
    		});
    		$("#alertMessage").focus();
    		//$http.post(config.contactEmailService + "&callback=x", $scope.contact).then(onSubmitContactSuccess, onSubmitContactError);
    		//open('POST', config.contactEmailService, $scope.contact, 'contactSend');
    		//$scope.contact = {};
    	}
    	
    	function x(e){
    		console.log(e);
    	}
    	
    	function onSubmitContactSuccess(){
    		$scope.contact = {};
    		$scope.alertClass = "success";
    		$scope.alertMessage = "Thank you for your inquiry. We will get back to you soon.";
    		$("#alertMessage").focus();
    	}
    	
    	function onSubmitContactError() {
    		$scope.alertClass = "error";
    		$scope.alertMessage = "There was an error sending your contact request. Please try again later or call the church office.";
    	}
    	
    	function open(verb, url, data, target) {
    		  var form = document.createElement("form");
    		  form.action = url;
    		  form.method = verb;
    		  form.target = target || "_self";
    		  if (data) {
    		    for (var key in data) {
    		      var input = document.createElement("textarea");
    		      input.name = key;
    		      input.value = typeof data[key] === "object" ? JSON.stringify(data[key]) : data[key];
    		      form.appendChild(input);
    		    }
    		  }
    		  form.style.display = 'none';
    		  document.body.appendChild(form);
    		  form.submit();
    	};
    }   
    
}());