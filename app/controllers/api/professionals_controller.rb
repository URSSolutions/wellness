class Api::ProfessionalsController < Api::BaseController
  before_action :authenticate_any!, only: [:index, :show]

  def index
    render json: event.professionals
  end

  def show
    render json: event.professionals.find(params.require(:id))
  end

  private

  def event
    Event.find(params.require(:event_id))
  end
end
