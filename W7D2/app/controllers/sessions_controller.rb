class SessionsController < ApplicationController
    before_action :require_logged_out, only: [:new, :create]
    before_action :require_logged_in, only: [:destroy]

    def new
        render :new
    end

    def create
        @user = User.find_by_credentials(
            params[:user][:username], 
            params[:user][:password]
        )
        # @user.session_token = @user.reset_session_token!
        # redirect_to cats_url(@user)

        if @user
            login!(@user)
            redirect_to cats_url(@user)
        else
            render :new
        end

        # MAYBE WORKS
    end

    def destroy
        logout!
        redirect_to new_session_url
    end

end
