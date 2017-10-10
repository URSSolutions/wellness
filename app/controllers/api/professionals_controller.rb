class Api::ProfessionalsController < Api::BaseController
  def events
    authenticate_professional!

    render json: current_professional, serializer: ProfessionalWithEventSerializer
  end
end
