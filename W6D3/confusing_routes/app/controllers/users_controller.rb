class UsersController < ApplicationController

    def index
        render plain: "i'm in the index action!"
    end

    def create
        render json: params
    end

    def show
        # user = User.find(params[:id])
        # render json: user
        render json: params
    end
    
end

