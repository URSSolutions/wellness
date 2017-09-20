class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    return if DeviseSanitizerService.perform(devise_parameter_sanitizer, resource_class)

    devise_parameter_sanitizer
  end
end
