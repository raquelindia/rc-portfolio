var app = angular.module('portfolioApp', ["ngRoute", "ngCookies"]);

app.controller('appCtrl', function($scope, $filter, $timeout, $cookies){






 //functions to save state 
//to save state of app
 $scope.saveAppState = function() {
    // Save the state of your app using $cookies.put
    $cookies.putObject('appState', {
      
        // Add other properties you want to save
    });
};

//to load state of app
$scope.loadAppState = function() {
    // Load the saved state from cookies using $cookies.getObject
    var savedState = $cookies.getObject('appState');
    if (savedState) {
        // Restore the state of your app
        
        // Restore other properties
    };
};

//to call saveAppState whenever the state of the app changes 
$scope.$watchGroup([

], function(newValues, oldValues) {
    // Check if the arrays are different
    if (newValues[0] !== oldValues[0] || newValues[1] !== oldValues[1]) {
        $scope.saveAppState();
    }
});


//call loadAppState whenever controller initializes
$scope.loadAppState();

$scope.getUpdatedValues = function () {
   
}; 

});

app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl : "home.html",
        controller: 'appCtrl'
    })
    .when("/home", {
        templateUrl : "home.html",
        controller: 'appCtrl'
    })
    .when("/about", {
        templateUrl : "about.html",
        controller: 'appCtrl'
    })
    .when("/projects", {
        templateUrl : "projects.html",
        controller: 'appCtrl'
    })
    .otherwise({
        templateUrl : "home.html",
        controller: 'appCtrl'
    });
});
