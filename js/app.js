var myApp = angular.module("myApp", ['ngRoute']);
    myApp.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: "home.html"
                
            })
            .when("/about-me", {
                templateUrl: "aboutMe.html"
            })
            .when("/my-education", {
                templateUrl: "education1.html"
            })
            .when("/my-workexperience", {
                templateUrl: "workExperience.html"
            })
            .when("/my-projects", {
                templateUrl: "projects1.html"
            })
            .when("/my-contact", {
                templateUrl: "contact1.html"
            })
            .when("/play-game", {
                templateUrl: "game.html"
            })
            
    });
    