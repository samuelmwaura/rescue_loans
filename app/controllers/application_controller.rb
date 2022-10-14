class ApplicationController < ActionController::API
  include ActionController::Cookies
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
#before_action :authorize

private

#Handle raised exceptions for all the controllers
 def render_not_found(exception)
  render json:{error:exception}, status: :not_found
 end

 def render_invalid(exception)
  render json:{errors:exception.record.errors.full_messages},status: :unprocessable_entity
 end

 def authorize
  render json:{error:["You must be logged in first!"]}, status: :unauthorized unless session.include? :user_id
end
end
