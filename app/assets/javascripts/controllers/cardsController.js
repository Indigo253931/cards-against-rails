angular.module('CardsAgainstRails')
	.controller('CardsController', CardsController)

CardsController.$inject = ['$routeParams', 'CardsFactory']
function CardsController($routeParams, CardsFactory) {
	var vm = this;
	vm.cards = CardsFactory;
	vm.all = vm.cards.all();
	vm.notFound = false;
	vm.card = findCard($routeParams.id);

	function findCard(id){
		var found = vm.cards.find(id);
		if (found === undefined) {
			vm.notFound = true;		
			return {}
		} else {
			vm.notFound = false;
			return found;
		}
	}
}
