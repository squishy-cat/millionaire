Rails.application.routes.draw do

  namespace :api do
    resources :questions, only: [:index, :show, :create, :delete]
    resources :answers, only: [:index]

    get "/questions", to: "questions#index"
    get "/questions/id", to: "questions#show"
    post "/questions", to: "questions#create"
    delete "/questions/id", to: "questions#destroy"
    get "/answers", to: "answers#index"
  end
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
