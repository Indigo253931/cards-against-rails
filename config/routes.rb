Rails.application.routes.draw do
	root to: 'home#index' 

	namespace :api, except: [:new, :edit] do
		resources :cards, except: [:edit, :delete]
	end
end
