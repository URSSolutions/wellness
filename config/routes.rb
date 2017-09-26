Rails.application.routes.draw do
  devise_for :users
  devise_for :profissionals

  root 'events#index'

  resource :events, only: [] do
    member do
      get '/:id/checkout', to: 'events#checkout'
      post '/:id/buy', to: 'events#buy'
    end
  end

  namespace :app, path: '/app', constraints: { format: :html } do
    get '/', to: 'users#app'
    get '/*path', to: 'users#app'
  end
end
