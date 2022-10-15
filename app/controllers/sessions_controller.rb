class SessionsController < ApplicationController
    #skip_before_action :authorize,only:[:create]
    #POST /login
    def create
        user = User.find_by(username:params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json:{errors:["Invalid user or password!"]}, status: :unauthorized
        end
    end


    #DELETE /logout
    def destroy
        session.delete :user_id
        head :no_content
    end
end

#This has really been a time of revelation for me on the usage of sessions
#First for the session to work for this app. I had to strictly proxy my requests in the package.json to the backend server
#This is however problematic since the server errors are never shown in any terminal and so you may not see the proxie server logs
#The session cookie once set stays set unless deleted manually.
#The encoding of the logged in user information is however different from the cookie setting.
#The session- cookie remains present even when there is no user in the session
#When you logout by deleting the cookie at user_id, the user information is just deleted from the cookie but the cookie remains.SO though you look at developer tools and see the session cookie, It doesnt have any user information.
#This is all something I learnt myself.Eeeish and implemented.