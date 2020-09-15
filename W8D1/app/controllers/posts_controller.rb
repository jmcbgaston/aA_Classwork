class PostsController < ApplicationController

    before_action :require_logged_in, only: [:new, :create, :edit, :update, :destroy]

    def new
        @post = Post.new
        # ? ^
        # will we ever need to access @post in the new form if we are never prefilling values
        render :new
    end

    def create 
        @post = Post.new(post_params)
        @post.user_id = params[:user_id]

        if @post.save
            redirect_to user_posts_url(@post.user_id)
            # or pass in @post.author? @post.author.id?
        else
            flash.now[:errors] = @post.errors.full_messages
            render :new
        end
    end

    def show
        @post = current_user.posts.find_by(id: params[:id])
        render :show
    end

    def edit
        @post = Post.find(params[:id])
        render :edit
    end

    def update
        @post = current_user.posts.find_by(id: params[:id])
        if @post && @post.update(post_params)
            redirect_to post_url(@post)
        else
            flash.now[:errors] = @post.errors.full_messages
            render :edit
        end
    end

    def destroy
        # let's assume nested routes are determining which action a user has access to
        @post = current_user.posts.find_by(id: params[:id])

        @post.delete
        # .destroy vs .delete
        redirect_to sub_url(@post.sub_id)

        # above vs conditional
        if @post && @post.delete
            redirect_to sub_url(@post.sub_id)
        end
    end


    def post_params
        params.require(:post).permit(:title, :content)
    end
end
