class SessionsController < ApplicationController
    before_action :authorize
    skip_before_action :authorize,only:[:create]
    #POST /login
    def create
        user = User.find_by(username:params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json:{errors:["Invalid user or password!"]}
        end
    end


    #DELETE /logout
    def destroy
        session.delete :user_id
        head :no_content
    end

    def authorize
        render json:{error:["You are not logged in!"]}, status: :unauthorized unless session.include? :user_id
    end
end
