///<reference path="/home/rajputs/Angularjs/angular.min.js" />

var myApp = angular.module("myApp", []) //creating module for angular

var myController = function($scope, $http) //creating controller for angular
	{ // controller start
	var employee = {
		firstname : "Uday",
		lastname : "Singh",
		image : "/home/rajputs/Desktop/pikachu.png",
	};
	
	var family = [
		{name : "Uday" , gender : "Male", siblings : [{ name :"Sapna" ,Gender : "Female"},{name: "Pradeep", Gender :"Male" }]},
		{name : "Sapna" , gender : "female", siblings : [{ name :"Uday" ,Gender : "male"},{name: "Pradeep", Gender :"Male" }]},
		{name : "Pradeep" , gender : "Male", siblings : [{ name :"Sapna" ,Gender : "Female"},{name: "Uday", Gender :"Male" }]},
	]; // to check ng-repeat

	var technologies = [
		{ name : "C#" , likes : 0, dislikes : 0, price : 600.9},
		{ name : "Java" , likes : 0, dislikes : 0, price : 8900.9},
		{ name : "python", likes : 0, dislikes : 0, price : 60.9},
	];
	
	$scope.incrementlikes = function(technology)
		{
			technology.likes++;
		}
	$scope.incrementdislikes = function(technology)
		{
			technology.dislikes++;
		}

	$scope.status = function()
      {
        $http.get('http://dev.oms.fetchr.us/order/',{
          headers:{
             'Authorization': 'Token ',
          }
        })
        .success(function(result) {
            console.log("Success", result);
            $scope.data_result = result;
            alert("success");
        })
        .error(function(result) {
            alert(result);
        });
    }

	$scope.technologies = technologies;
	$scope.family = family;
	$scope.employee = employee;
	$scope.sortby = "-name";  //sorting

	$scope.message = "Wass up"; // two way binding
	
	} //controller ends

myApp.controller("myController" , myController) //Assigning controller(myController) to module(myApp)
