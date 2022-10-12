class UsersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    #POST /users
    def create
        user = user.create!(user_params)
        if user.valid?
            render json:user, status: :created
        else
            render json: {error:["Bad username or Unmatching passwords."]}, status: :unprocessable_entity
    end


    #GET /users/:id
    def show
        user = User.find(session[:user_id])
        render json: user
    end

    private
    def user_params
        params.permit(:username,:password,:password_confirmation)
    end

    def render_not_found(exception)
        render json:{errors:exception.record.errors.full_messages}, status: :not_found
    end
end
