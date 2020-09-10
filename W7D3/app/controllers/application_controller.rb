class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token
    helper_method :logged_in?, :login!, :current_user
      #CRLLL

    def login!(user)
      user.reset_session_token!
      session[:session_token] = user.session_token
      # redirect_to user_url(user)
    end

    def require_logged_in
      redirect_to new_session_url if !logged_in?
    end
    
    def require_logged_out
      redirect_to users_url if logged_in?
    end

    def logout!
      current_user.reset_session_token!
      session[:session_token] = nil
      # redirect_to new_session_url
    end

    def current_user
      @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
      # debugger
      !!current_user
    end
end
