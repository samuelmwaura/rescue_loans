class ApplicationController < ActionController::API
  include ActionController::Cookies
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

private

#Handle raised exceptions for all the controllers
 def render_not_found(exception)
  render json:{error:exception}, status: :not_found
 end

 def render_invalid(exception)
  render json:{error:exception.record.errors.full_messages}
 end
end
