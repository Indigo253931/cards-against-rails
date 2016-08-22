module Api
	class CardsController < ActionController::Base
		
		class << self 
			attr_accessor :cards, :next_card_id
		end

		self.cards = [
			{question: 'Where do the files for ActiveSuck classes go?' , id: 1}, 
			{question: "How come there's a skynet gem dependency in my project?", id: 2},
			{question: '_____ changed from development to production?', id: 3},
			{question: "Why isn't hogwarts a good name for the base application class?", id: 4},
			{question: "rails g _______ ", id: 5}
		]

		self.next_card_id = 6

		def index 
			render json: CardsController.cards
		end

		def show
			card = CardsController.cards.select { |card| card[:id] == params[:id].to_i }
			render json: card 
		end

		def create
			new_card = {question: params[:question], id: CardsController.next_card_id}
			CardsController.next_card_id += 1
			CardsController.cards.push new_card
			render json: new_card
		end
	end
end 