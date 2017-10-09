class Api::FeedbacksController < Api::BaseController
  before_action :load_feedback, except: [:index, :create]

  def index
    authenticate_user!

    render json: current_user.feedbacks
  end

  def create
    authenticate_professional!

    feedback = current_professional.feedbacks.build(activity_params)

    if feedback.save
      render json: feedback
    else
      render json: feedback.errors, status: :bad_request
    end
  end

  def show
    authenticate_user!

    render json: @feedback
  end

  def update
    authenticate_professional!

    if @feedback.update(activity_params)
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
    @feedback = Feedback.find(params.require(:id))
  end

  def feedback_params
    params.require(:feedback).permit(:description, :user_id, :event_id)
  end
end
