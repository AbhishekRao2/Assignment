/// <reference path="angular.min.js" />
/// <reference path="angular-ui-router.js" />



var app = angular
           .module("Demo", ["ui.router"])
           .config(function ($stateProvider) {

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
                .state("studentParent", {
                    url: "/students",
                    controller: "studentParentController",
                    controllerAs: "stdParentCtrl",
                    templateUrl: "Templates/studentParent.html",
                    resolve: {
                        studentTotals: function ($http) {
                            return $http.get("StudentService.asmx/GetStudentTotals")
                                    .then(function (response) {
                                        return response.data;
                                    })
                        }
                    },
                    abstract: true

                })
               .state("studentParent.students", {
                   url: "/",
                   templateUrl: "Templates/students.html",
                   controller: "studentsController",
                   controllerAs: "studentsCtrl",
                   resolve: {
                       studentslist: function ($http) {
                           return $http.get("StudentService.asmx/GetAllStudents")
                                   .then(function (response) {
                                       return response.data;
                                   })
                       }
                   }
               })
                .state("studentParent.studentDetails", {
                    url: "/:id",
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
        .controller("studentDetailsController", function ( $http, $stateParams) {
                  var vm = this;
             $http({
                 url: "StudentService.asmx/GetStudent",
                 method: "get",
                 params: { id: $stateParams.id }
             }).then(function (response) {
                vm.student = response.data;
             })
        })
         .controller("studentParentController", function (studentTotals) {
             this.males = studentTotals.males;
             this.females = studentTotals.females;
             this.total = studentTotals.total;
         })










