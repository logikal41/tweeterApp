class Api::PostsController < ApplicationController

  def index
    render json: Post.all.order(id: :desc)
  end

  def show
    render json: Post.find(params[:id])
  end

  def update
    post = Post.find(params[:id])
    post.update(post_params)
    render json: post
  end

  def create
    post = current_user.posts.new(post_params)
    if post.save
        render json: post
    else
        render json: {errors: post.errors}, status: :unprocessable_entity
    end
  end
    
  def destroy
    Post.find(params[:id]).destroy
  end

  private
    def post_params
        params.require(:post).permit(:message)
    end
  
end