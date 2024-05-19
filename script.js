var app = angular.module('portfolioApp', ["ngRoute", "ngCookies"]);

app.controller('appCtrl', function($scope, $filter, $timeout, $cookies){
    $scope.route = '';

$scope.projectsCarousel = [
    {
        image: "./projects-files/images/ai-project-conversation.png",
        title: "AI Assistant",
        caption: `I used the ChatGpt API to create this.
         I didn't fine tune it for anything and the only instructions 
         I gave it were to be helpful and speak in a formal tone because I wanted it to 
         mostly be like the regular ChatGPT but with themes.
        `,
        stack: `
        AngularJS,
        Tailwind,
        Render,
        NodeJS,
        Google Material Icons,
        ChatGpt API,
        `
    },
    {
        image: "./projects-files/images/mobile-mars-weather-app.png",
        title: "Mars Weather App",
        caption: `For this project I tried to create something that looks similar to the Apple 
        Weather App. I thought the idea of a weather app would be cool but I also am really interested in space. I used NASAs Curiosity Rover API to get the data I needed for it.`,
        stack: `
        AngularJS,
        Tailwind,
        Render,
        Google Material Icons
        `
    }
];


$scope.displaySelectedProject = function () {
    $scope.selectedProject = $scope.projects.find(project => project.title === $scope.selectedTitle);
};



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
