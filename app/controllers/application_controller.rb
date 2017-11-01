class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    return if DeviseSanitizerService.perform(devise_parameter_sanitizer, resource_class)

    devise_parameter_sanitizer
  end

  def after_sign_in_path_for(resource)
    if request.referer.to_s.last(7) == 'sign_up'
      super
    else
      '/app'
    end
  end
end
