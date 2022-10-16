class UsersController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_errors
skip_before_action :authorize,only:[:create]

    #POST /users
    def create
        user = User.create!(user_params)
        render json:{success:"You have been created successfully!"}, status: :created
    end


    #GET /users/:id
    def show
        if session[:user_id]
            user = User.find(session[:user_id])
            render json: user
        else
            render json: {errors:["You are not logged in"]},status: :unauthorized
        end
    end

    private
    def user_params
        params.permit(:username,:password,:password_confirmation)
    end

    def render_errors(exception)
        render json:{errors:exception.record.errors.full_messages}, status: :unauthorized
    end
end
