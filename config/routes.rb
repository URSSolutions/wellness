Rails.application.routes.draw do
  devise_for :users
  devise_for :professionals

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

  namespace :api, path: '/api' do
    get '/self', to: 'meta#myself'
    resources :users, only: [] do
      resources :subscriptions, only: [] do
        resources :days, only: [] do
          resources :feedbacks, except: [:new, :edit]
          resources :activities, except: [:new, :edit]
        end
      end
    end

    resources :events, only: [:show, :index]
  end
end
