Rails.application.routes.draw do

  namespace :api do
    resources :questions
    resources :answers, only: [:index, :create]

    get "/questions", to: "questions#index"
    get "/questions/id", to: "questions#show"
    post "/questions", to: "questions#create"
    delete "/questions/id", to: "questions#destroy"
    get "/answers", to: "answers#index"
  end
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  #login setup
  root 'sessions#home'

  resources :users, only: [:new, :create, :update, :show, :destroy]

  # Login routes
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"

end
