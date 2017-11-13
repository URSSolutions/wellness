class Api::DaysController < Api::BaseController
  before_action :authenticate_any!
  before_action :load_subscription, only: [:index, :current]

  def index
    render json: @subscription.days.pluck(:id, :date)
  end

  def show
    load_day

    render json: @day
  end

  def current
    render json: @subscription.days.where(date: Time.current).first
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
