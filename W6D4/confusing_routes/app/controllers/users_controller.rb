class UsersController < ApplicationController

    def index
        # render plain: "i'm in the index action!"

        users = User.all # get all users from DB and store in users variable
        # every controller action needs to either render or redirect
        render json: users # rails will turn our users into json
    end

    def create
        # render json: params

        # user[username]
        user = User.new(params.require(:user).permit(:username))
        # replace the `user_attributes_here` with the actual attribute keys
        if user.save
            render json: user
        else
            render json: user.errors.full_messages, status: :unprocessable_entity
        end
    end

    def show
        # user = User.find(params[:id])
        # render json: user
        render json: params
    end
    
end

