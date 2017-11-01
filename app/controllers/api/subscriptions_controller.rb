class Api::SubscriptionsController < Api::BaseController
  before_action :authenticate_any!

  def index
    load_user

    render json: @user.subscriptions
  end

  def show
    load_subscription

    render json: @subscription
  end

  private

  def load_subscription
    @subscription = load_user.subscriptions.find(params.require(:id))
  end

  def load_user
    @user = User.find(params.require(:user_id))
  end
end
