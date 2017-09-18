Rails.application.routes.draw do
  devise_for :users

  namespace :app, path: '', constraints: { format: :html } do
    get '/*path', to: 'users#app'
  end
end
