class SessionsController < ApplicationController
    def create
        # current_user.reset_session_token!
        # session[:session_token] = current_user.session_token
        # redirect_to user_url(current_user)
        # debugger
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            login!(@user)
            redirect_to user_url(@user)
        else
            flash[:errors] = @user.errors.full_messages
            redirect_to new_session_url
        end
    end

    def destroy
        logout!
        redirect_to new_session_url
    end

    def new
        render "/session/new"
        # render :new
    end
end
