class Api::BaseController < ApplicationController
  devise_group :any, contains: [:user, :professional]
end
