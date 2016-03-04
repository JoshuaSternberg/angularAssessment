myApp.controller('HeroEntryController', ['$scope', '$http', 'HeroFactory', function($scope, $http, HeroFactory) {
    console.log('Hello from the HeroEntryController');

    $scope.heroFactory = HeroFactory;
    var hero = {};
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

    $scope.addHero = function() {
        var hero = {
            alias: $scope.alias,
            first_name: $scope.firstName,
            last_name: $scope.lastName,
            city: $scope.city,
            primary_power: $scope.powerName
        };

        $scope.heroFactory.factorySaveHero(hero);

        $scope.alias = '';
        $scope.firstName = '';
        $scope.lastName = '';
        $scope.city = '';
        $scope.primaryPower = '';
    };


}]);