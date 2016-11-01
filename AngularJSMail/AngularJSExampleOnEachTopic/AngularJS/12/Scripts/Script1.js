//var app = angular
//           .module("Demo", [])
//           .controller("countryController", function ($scope) {
//               $scope.name = "India";
//           })
//           .controller("stateController", function ($scope) {
//               $scope.name = "Maharashtra";
//           })
//           .controller("cityController", function ($scope) {
//               $scope.name = "Mumbai";
//           });










var app = angular
           .module("Demo", [])
           .controller("countryController", function () {
               this.name = "India";
           })
           .controller("stateController", function () {
               this.name = "Maharashtra";
           })
           .controller("cityController", function () {
               this.name = "Mumbai";
           });

