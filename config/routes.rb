Rails.application.routes.draw do
  devise_for :users

  root 'events#index'

  namespace :app, path: '', constraints: { format: :html } do
    get '/*path', to: 'users#app'
  end
end
