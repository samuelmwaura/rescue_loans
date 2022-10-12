class UsersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_errors
rescue_from ActiveRecord::RecordInvalid, with: :render_errors
    #POST /users
    def create
        user = User.create(user_params)
        if user.valid?
            render json:user, status: :created
        else
            render json: {error:["Username must exist and password and confirm-password must match!"]}, status: :unprocessable_entity
        end
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

    def render_errors(exception)
        render json:{errors:exception.record.errors.full_messages}, status: :not_found
    end
end
