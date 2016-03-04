myApp.factory('HeroFactory', ['$http', function($http) {

    var heroes;


    var getHeroes = function(power) {
        var promise = $http.get('/hero' + power).then(function(response) {
            heroes = response.data;
        });
        return promise;
    };

    var saveHero = function(hero) {
        $http.post('/hero', hero).then(function(response) {
        });
    };


    var publicFunctions = {
        factoryGetHeroes: function(power) {
            return getHeroes(power);
        },
        factorySaveHero: function(hero) {
            return saveHero(hero);
        }
    };

    return publicFunctions;

}]);