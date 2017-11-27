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
    resources :users, only: [:index, :show] do
      resources :subscriptions, only: [:index, :show] do
        get '/current_day', to: 'days#current'
        resources :days, only: [:index, :show] do
          resources :feedbacks, except: [:new, :edit]
          resources :activities, except: [:new, :edit]
        end
      end
    end

    resources :events, only: [:show, :index] do
      resources :professionals, only: [:show, :index]
    end
  end
end
