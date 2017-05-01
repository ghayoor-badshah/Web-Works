var myApp = angular.module("myApp", []);
myApp.controller("myCtrl", function ($scope){
		$scope.pendding = [];
		$scope.finished = [];
		$scope.counter_one = 0;
		$scope.counter_two = 0;
	$scope.add = function (){
		$scope.pendding.push($scope.text_one);
		$scope.text_one = "";
		console.log($scope.pendding);
		$scope.counter_one++;
		}
	$scope.complete_one = function (index){
		$scope.task = $scope.pendding.join('')+" completed";
		$scope.finished.push($scope.task);
		$scope.pendding.splice(index,1);
		$scope.counter_two++;
		$scope.counter_one--;
	}
	$scope.remove = function (index){
		$scope.finished.splice(index,1);
		$scope.counter_two--;
	}
});
