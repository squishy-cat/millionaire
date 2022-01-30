class SessionsController < ApplicationController

    def create
        user = User.find_by(username: params[:username])
        #authenticate user credentials
        if !!user &&user.authenticate(params[:password])
            session[:user_id] = user.id
            redirect_to user_path
        else
            message = "Something went wrong! Make sure your username and password are correct"
            redirect_to login_path, notice: message
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end

end