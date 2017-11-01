class Api::DaysController < Api::BaseController
  before_action :authenticate_any!

  def index
    load_subscription

    render json: @subscription.days
  end

  def show
    load_day

    render json: @day
  end

  private

  def load_day
    @day = load_subscription.days.find(params.require(:id))
  end

  def load_subscription
    @subscription = User.find(params.require(:user_id)).subscriptions
                        .find(params.require(:subscription_id))
  end
end
