myApp.controller('HeroListController', ['$scope', '$http', 'HeroFactory', function($scope, $http, HeroFactory) {
    console.log('Hello from the HeroListController');

    $scope.heroFactory = HeroFactory;
    $scope.heroes = '';
    $scope.powerName = [
        {type: 'invisibility', label: 'Invisibility'},
        {type: 'flight', label: 'Flight'},
        {type: 'superSpeed', label: 'Super Speed'},
        {type: 'headVision', label: 'Heat Vision'},
        {type: 'superStrength', label: 'Super Strength'},
        {type: 'acceleratedHealing', label: 'Accelerated Healing'},
        {type: 'powerBlast', label: 'Power Blast'},
        {type: 'animalAffinity', label: 'Animal Affinity'}
    ];

    $scope.postFactory.factoryGetHeroes().then(function(){
        $scope.posts = $scope.heroFactory.factoryHeroesList(powerName);
    });


}]);