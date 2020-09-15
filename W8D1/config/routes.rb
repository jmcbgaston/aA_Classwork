Rails.application.routes.draw do

  resources :posts, only: [:new, :create, :show, :destroy]

  resources :subs

  resources :users, only: [:new, :create, :index, :show] do 
    resources :posts, only: [:edit, :update]
  end

  resource :session, only: [:new, :create, :destroy]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
