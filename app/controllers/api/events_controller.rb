class Api::EventsController < Api::BaseController
  def index
    render json: Event.all
  end

  def show
    render json: Event.find(params.require(:id))
  end
end
