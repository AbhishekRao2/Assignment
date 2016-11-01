/// <reference path="angular.js" />
var myApp = angular
                .module("myModule", [])
    .contr
                .controller("myController", function ($scope) {
                    var country = {
                        name: "India, Hindustan, Bharat",
                        capital: "New Delhi",
                        flag: "/Images/india-flag.png"
                    };
                    $scope.country = country;
                });