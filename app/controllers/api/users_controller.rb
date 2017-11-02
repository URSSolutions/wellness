class Api::UsersController < Api::BaseController
  before_action :authenticate_any!

  def index
    render json: User.all
  end

  def show
    render json: User.find(params.require(:id))
  end
end
