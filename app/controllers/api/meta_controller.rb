class Api::MetaController < Api::BaseController
  def myself
    render json: current_user || current_professional
  end
end
