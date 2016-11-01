/// <reference path="angular.min.js" />
/// <reference path="angular-route.js" />



var app = angular
       .module("Demo", ["ngRoute"])
       .config(function ($routeProvider, $locationProvider) {
           $routeProvider
               .when("/home", {
                   templateUrl: "Templates/home.html",
                   controller: "homeController",
                   controllerAs: "homeCtrl"
               })
               .when("/courses", {
                   templateUrl: "Templates/courses.html",
                   controller: "coursesController as coursesCtrl",
                   controllerAs: "coursesCtrl"
               })
               .when("/students", {
                   templateUrl: "Templates/students.html",
                   controller: "studentsController as studentsCtrl",
                   controllerAs: "studentsCtrl"

                   ,resolve: {
               studentslist: function ($http) {
                   return $http.get("StudentService.asmx/GetAllStudents")
                           .then(function (response) {
                               return response.data;
                           })
               }
           }
               })
               .when("/students/:id", {
                   templateUrl: "Templates/studentDetails.html",
                   controller: "studentDetailsController as studentDetailsCtrl",
                   controllerAs: "studentDetailsCtrl"
               })
               .otherwise({
                   redirectTo: "/home"
               })
           $locationProvider.html5Mode(true);
       })

            .controller("homeController", function () {
                this.message = "Home Page";
            })
            .controller("coursesController", function () {
               this.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server"];
            })
            .controller("studentsController", function ( $http) {
                  var vm = this;
                 $http.get("StudentService.asmx/GetAllStudents")
                                        .then(function (response) {
                                          vm.students = response.data;
                                        })
            })

     //.controller("studentsController", function (studentslist, $route, $location) {
     //    var vm = this;

     //    vm.studentSearch = function () {
     //        if (vm.name)
     //            $location.url("/studentsSearch/" + vm.name)
     //        else
     //            $location.url("/studentsSearch")
     //    }

     //    vm.reloadData = function () {
     //        $route.reload();
     //    }

     //    vm.students = studentslist;
     //})
        .controller("studentDetailsController", function ( $http, $routeParams) {
                  var vm = this;
             $http({
                 url: "StudentService.asmx/GetStudent",
                 method: "get",
                 params: { id: $routeParams.id }
             }).then(function (response) {
                vm.student = response.data;
             })
})












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

