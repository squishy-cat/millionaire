Rails.application.routes.draw do

  resources :questions, only: [:index]
  resources :answers, only: [:index, :show]
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  get "/questions", to: "questions#index"
  get "/answers", to: "answers#index"
  get "/answers/question_id", to: "answers#show"
end
