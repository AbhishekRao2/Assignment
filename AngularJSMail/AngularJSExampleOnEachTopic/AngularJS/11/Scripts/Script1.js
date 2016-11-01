/// <reference path="angular.min.js" />
/// <reference path="angular-route.js" />

var app = angular
            .module("Demo", ["ngRoute"])
            .config(function ($routeProvider, $locationProvider) {
                $routeProvider
                    .when("/home", {
                        templateUrl: "Templates/home.html",
                        controller: "homeController"
                    })
                    .when("/courses", {
                        templateUrl: "Templates/courses.html",
                        controller: "coursesController"
                    })
                    .when("/students", {
                        templateUrl: "Templates/students.html",
                        controller: "studentsController"
                    })
                    .when("/students/:id", {
                     templateUrl: "Templates/studentDetails.html",
                     controller: "studentDetailsController"
                    })
                 .otherwise({
                     redirectTo: "/home"
                 })
                $locationProvider.html5Mode(true);
            })

//var app = angular
//       .module("Demo", ["ngRoute"])
//       .config(function ($routeProvider, $locationProvider) {
//           $routeProvider
//               .when("/home", {
//                   templateUrl: "Templates/home.html",
//                   controller: "homeController",
//                   controllerAs: "homeCtrl"
//               })
//               .when("/courses", {
//                   templateUrl: "Templates/courses.html",
//                   controller: "coursesController as coursesCtrl",
//                   controllerAs: "coursesCtrl"
//               })
//               .when("/students", {
//                   templateUrl: "Templates/students.html",
//                   controller: "studentsController as studentsCtrl",
//                   controllerAs: "studentsCtrl"
//               })
//               .when("/students/:id", {
//                   templateUrl: "Templates/studentDetails.html",
//                   controller: "studentDetailsController as studentDetailsCtrl",
//                   controllerAs: "studentDetailsCtrl"
//               })
//               .otherwise({
//                   redirectTo: "/home"
//               })
//           $locationProvider.html5Mode(true);
//       })




            .controller("homeController", function ($scope) {
                $scope.message = "Home Page";
            })
            .controller("coursesController", function ($scope) {
                $scope.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server"];
            })
             .controller("studentsController", function ($scope, $http) {
                 $http.get("StudentService.asmx/GetAllStudents")
                                        .then(function (response) {
                                            $scope.students = response.data;
                                        })
             })
         .controller("studentDetailsController", function ($scope, $http, $routeParams) {
             $http({
                 url: "StudentService.asmx/GetStudent",
                 method: "get",
                 params: { id: $routeParams.id }
             }).then(function (response) {
                 $scope.student = response.data;
             })
         })



         //   .controller("homeController", function () {
         //       this.message = "Home Page";
         //   })
         //   .controller("coursesController", function () {
        //       this.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server"];
         //   })
        //    .controller("studentsController", function ( $http) {
        //          var vm = this;
         //        $http.get("StudentService.asmx/GetAllStudents")
         //                               .then(function (response) {
//                                          vm.students = response.data;
         //                               })
         //    })
        //.controller("studentDetailsController", function ( $http, $routeParams) {
        //          var vm = this;
         //    $http({
         //        url: "StudentService.asmx/GetStudent",
         //        method: "get",
         //        params: { id: $routeParams.id }
         //    }).then(function (response) {
        //        vm.student = response.data;
         //    })
//})












//route service reload method
 //.controller("studentsController", function ($http, $route) {
 //    var vm = this;

 //    vm.reloadData = function () {
 //        $route.reload();
 //    }

 //    $http.get("StudentService.asmx/GetAllStudents")
 //                .then(function (response) {
 //                    vm.students = response.data;
 //                })
//})

