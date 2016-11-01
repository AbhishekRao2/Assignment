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
        controllerAs: "homeCtrl",
        data: {
            customData1: "Home State Custom Data 1",
            customData2: "Home State Custom Data 2"
        }
    })
    .state("courses", {
        url: "/courses",
        templateUrl: "Templates/courses.html",
        controller: "coursesController",
        controllerAs: "coursesCtrl",
        data: {
            customData1: "Courses State Custom Data 1",
            customData2: "Courses State Custom Data 2"
        }
    })
           })

             .controller("homeController", function ($state) {
                 this.message = "Home Page";

                 this.homeCustomData1 = $state.current.data.customData1;
                 this.homeCustomData2 = $state.current.data.customData2;

                 this.coursesCustomData1 = $state.get("courses").data.customData1;
                 this.coursesCustomData2 = $state.get("courses").data.customData2;
             })












