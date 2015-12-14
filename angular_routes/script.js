// Create the route module and name it routeApp
var routeApp = angular.module("routeApp", ['ngRoute']);
// Config the routes
routeApp.config(function($routeProvider){

    $routeProvider
         // route for the home page
        .when('/', {
            templateUrl: "pages/home.html",
            controller: "mainCtrl"
        })
        // route for the about page
        .when('/about', {
            templateUrl: "pages/about.html",
            controller: "aboutCtrl"
        })
        // route for the contact page
        .when('/contact', {
            templateUrl:"pages/contact.html",
            controller: "contactCtrl"
        })
        .otherwise({
            redirectTo: '/'
        });
});
// Create the controllers for the different pages below
routeApp.controller("routeCtrl", function($scope){
    $scope.message = "lorem ipsum";
});

// home page controller
    // Create a message to display in the view
routeApp.controller("mainCtrl", function($scope){
    $scope.message = "lorem ipsum";
});
// about page controller
    // Create a message to display in the view
routeApp.controller("aboutCtrl", function($scope){
    $scope.message = "lorem ipsum";
});
// contact page controller
    // Create a message to display in the view
routeApp.controller("contactCtrl", function($scope){
    $scope.message = "lorem ipsum";
});