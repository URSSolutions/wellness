Rails.application.routes.draw do

  # namespace :authetication

  devise_for :users
  devise_for :profissionals

  root 'events#index'

  namespace :app, path: '/app', constraints: { format: :html } do
    get '/*path', to: 'users#app'
  end
end
