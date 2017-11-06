class Api::FeedbacksController < Api::BaseController
  before_action :load_feedback, except: [:index, :create]
  before_action :load_day, only: [:index, :create]
  before_action :authenticate_professional!, except: [:index, :show]
  before_action :authenticate_any!, only: [:index, :show]

  def index
    render json: @day.feedbacks
  end

  def create
    feedback = @day.feedbacks.build(feedback_params)

    if feedback.save
      render json: feedback
    else
      render json: feedback.errors, status: :bad_request
    end
  end

  def show
    render json: @feedback
  end

  def update
    if @feedback.update(feedback_params)
      render json: @feedback
    else
      render json: @feedback.errors, status: :bad_request
    end
  end

  def destroy
    @feedback.destroy!
  end

  private

  def load_feedback
    @feedback = load_day.feedbacks.find(params.require(:id))
  end

  def feedback_params
    params.require(:feedback).permit(:description, :professional_id)
  end

  def load_day
    @day = User.find(params.require(:user_id))
                           .subscriptions.find(params.require(:subscription_id))
                           .days.find(params.require(:day_id))
  end
end
