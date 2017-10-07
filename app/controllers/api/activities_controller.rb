class Api::ActivitiesController < Api::BaseController
  before_action :load_activity, except: [:index, :create]

  def index
    render json: current_user.activities
  end

  def create
    activity = current_user.activities.build(activity_params)

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
      render json: activity
    else
      render json: activity.errors, status: :bad_request
    end
  end

  def destroy
    @activity.destroy!
  end

  private

  def load_activity
    @activity = Activity.find(params.require(:id))
  end

  def activity_params
    params.require(:activity).permit(:name, :description, :photo,
                                     :category, :event_id)
  end
end
