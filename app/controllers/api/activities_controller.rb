class Api::ActivitiesController < Api::BaseController
  before_action :load_activity, except: [:index, :create]
  before_action :load_day, only: [:index, :create]
  before_action :authenticate_user!, except: [:index, :show]
  before_action :authenticate_any!, only: [:index, :show]

  def index
    render json: @day.activities
  end

  def create
    activity = @day.build(activity_params)

    if activity.save
      render json: activity
    else
      render json: activity.errors, status: :bad_request
    end
  end

  def show
    render json: @activity
  end

  def update
    if @activity.update(activity_params)
      render json: @activity
    else
      render json: @activity.errors, status: :bad_request
    end
  end

  def destroy
    @activity.destroy!
  end

  private

  def load_activity
    @activity = load_day.activities.find(params.require(:id))
  end

  def activity_params
    params.require(:activity).permit(:name, :description, :photo,
                                     :category)
  end

  def load_day
    @day = User.find(params.require(:user_id))
                           .subscriptions.find(params.require(:subscription_id))
                           .days.find(params.require(:day_id))
  end
end
