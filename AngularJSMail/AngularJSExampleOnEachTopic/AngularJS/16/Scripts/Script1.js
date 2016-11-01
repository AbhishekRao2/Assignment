/// <reference path="angular.min.js" />
/// <reference path="angular-ui-router.js" />



var app = angular
           .module("Demo", ["ui.router"])
           .config(function ($stateProvider, $urlRouterProvider) {
               $urlRouterProvider.otherwise("/home"),
               $stateProvider
                   .state("home", {
                       url: "/home",
                       templateUrl: "Templates/home.html",
                       controller: "homeController",
                       controllerAs: "homeCtrl"
                   })
                   .state("courses", {
                       url: "/courses",
                       templateUrl: "Templates/courses.html",
                       controller: "coursesController",
                       controllerAs: "coursesCtrl"
                   })

                   .state("students", {
                       url: "/students",
                       templateUrl: "Templates/students.html",
                       controller: "studentsController",
                       controllerAs: "studentsCtrl",
                       resolve: {
                           studentslist: function ($http, $location) {
                               return $http.get("StudentService.asmx/GetAllStudents")
                                       .then(function (response) {
                                           return response.data;
                                       })
                           }
                       }
                   })
                .state("studentDetails", {
                    url: "/students/:id",
                    templateUrl: "Templates/studentDetails.html",
                    controller: "studentDetailsController",
                    controllerAs: "studentDetailsCtrl"
                })
           })

            .controller("homeController", function () {
                this.message = "Home Page";
            })
            .controller("coursesController", function () {
               this.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server"];
            })
             .controller("studentsController", function (studentslist, $state, $location) {
                 var vm = this;

                 vm.studentSearch = function () {
                     if (vm.name)
                         $location.url("/studentsSearch/" + vm.name)
                     else
                         $location.url("/studentsSearch")
                 }

                 vm.reloadData = function () {
                     $state.reload();
                 }

                 vm.students = studentslist;
             })
         .controller("studentDetailsController", function ($http, $stateParams) {
    var vm = this;
    $http({
        url: "StudentService.asmx/GetStudent",
        method: "get",
        params: { id: $stateParams.id }
    }).then(function (response) {
        vm.student = response.data;
    })
})












