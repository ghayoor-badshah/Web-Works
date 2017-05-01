/*Main Angular module for book site*/
var myApp = angular.module("myApp", ['ngRoute']);
/*Routing configuration*/
myApp.config(function ($routeProvider){
	$routeProvider
		.when("/#", {
			templateUrl: "index.html",
			controller: "myCtrl",
	})	
		.when("/web", {
			templateUrl: "web.html",
			controller: "myCtrl",
	})
		.when("/prog", {
			templateUrl: "prog.html",
			controller: "myCtrl",
	})
		.when("/os", {
			templateUrl: "os.html",
			controller: "myCtrl",
	})
		.otherwise({
			redirectTo: "/"
	});
});
myApp.service("myService", function($http){ 
	return{
			myData: function (callback){
				$http.get("bookdata.json").success(callback);
			}
		}
});
/*Servie for common data sharing among controller*/ 
myApp.factory("myfactory", function (myService){
	return {
		counter: 0,
		image: ["images/000.png","images/001.png","images/002.png","images/003.png"],
		os: ["images/os01.jpg","images/os02.jpg","images/os03.jpg","images/os04.jpg","images/os05.jpg","images/os06.jpg","images/os07.jpg","images/os08.jpg","images/os09.jpg"],
		pro: ["images/pro01.jpg","images/pro02.jpg","images/pro03.jpg","images/pro04.jpg","images/pro05.jpg","images/pro06.jpg","images/pro07.jpg","images/pro08.jpg","images/pro09.jpg"],
		web: ["images/web01.jpg","images/web02.jpg","images/web03.jpg","images/web04.jpg","images/web05.jpg","images/web06.jpg","images/web07.jpg","images/web08.jpg","images/web09.jpg"],
		};
});
/*view controller for main page and index page*/
myApp.controller("myCtrl", function ($scope, myService, myfactory){
		$scope.myBooks = myfactory;
		myService.myData(function(data){
			$scope.books = data;
		});
		/*function for next button on carsoul*/
		$scope.next = function (){
			if ($scope.myBooks.counter < $scope.myBooks.web.length-1){
				$scope.myBooks.counter++;
			}else return false;
		};
		/*function for previous button on carsoul*/
		$scope.previous = function (){
			if ($scope.myBooks.counter > 0){
				$scope.myBooks.counter--;
			}else return false;
		};
});
