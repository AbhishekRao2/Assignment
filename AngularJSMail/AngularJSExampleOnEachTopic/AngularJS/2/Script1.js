/// <reference path="angular.min.js" />


//Create module
var myApp = angular.module("myModule", []);

// Register controller with the module
//myApp.controller("myController", function ($scope) {
//    $scope.message = "AngularJS Tutorial";
//});






myApp.controller("myController", function ($scope) {

    var employee = {
        firstName: 'Mark',
        lastName: 'Hastings',
        gender: 'Male'
    };

    $scope.employee = employee;
});














//myApp.controller("myController", function ($scope) {

//    var employee = {
//        firstName: 'Mark',
//        lastName: 'Hastings',
//        gender: 'Male'
//    };

//    $scope.employee = employee;
//});