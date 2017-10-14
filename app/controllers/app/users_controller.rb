class App::UsersController < ApplicationController
  def app
    unless current_user || current_professional
      redirect_to '/'
    end
  end
end
