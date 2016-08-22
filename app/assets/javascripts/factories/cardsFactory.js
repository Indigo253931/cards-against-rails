angular.module('CardsAgainstRails')
	.factory('CardsFactory', CardsFactory);

function Cards() {
	this.currentCards = [];
	this.nextId = 6;
}

Cards.prototype.add = function(card){
	if(card.question !== undefined) {
		card.id = this.nextId;
		this.nextId++;
		this.currentCards.push(card);
	}
}

Cards.prototype.all = function(){
	if(this.currentCards.length === 0){
		this.currentCards = ALL_CARDS;
	}
	return this.currentCards;
}

Cards.prototype.find = function(id){
	localFind = this.currentCards.find(function(card) {
		return card.id == id
	});
	if(localFind !== undefined){
		return localFind
	} else {
		this.all();
		this.currentCards.find(function(card) {
			return card.id == id
		})
	}
}

function CardsFactory(){
	return new Cards();
}

ALL_CARDS = [
	{question: 'Where do the files for ActiveSuck classes go?' , id: 1}, 
	{question: "How come there's a skynet gem dependency in my project?", id: 2},
	{question: '_____ changed from development to production?', id: 3},
	{question: "Why isn't hogwarts a good name for the base application class?", id: 4},
	{question: "rails g _______ ", id: 5}
] 