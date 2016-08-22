angular.module('CardsAgainstRails')
	.config(function($routeProvider){
		$routeProvider
			.when('/', {
                templateUrl: 'cards-index.html',
                controller: 'CardsController',
                controllerAs: 'cards'
            })
            .when('/cards/:id',{
            	templateUrl: 'cards-show.html',
            	controller: 'CardsController',
            	controllerAs: 'cards'
            })
    });
