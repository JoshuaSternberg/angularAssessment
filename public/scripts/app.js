var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/heroEntry', {
            templateUrl: '/views/templates/heroEntry.html',
            controller: 'HeroEntryController'
        })
        .when('/heroList', {
            templateUrl: '/views/templates/heroList.html',
            controller: 'HeroListController'
        })
        .otherwise({
            redirectTo: 'heroEntry'
        });

}]);