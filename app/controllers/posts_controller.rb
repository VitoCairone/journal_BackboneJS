class PostsController < ApplicationController
  respond_to :json

  def create
    @post = Post.new(params[:post])
    if @post.save
      render :json => @post
    else
      render :json => @post.errors.full_messages, :status => 422
    end
  end

  def destroy
    @post = Post.find(params[:id])
    if @post
      @post.delete
      head :ok
    else
      render :json => "No post found, you suck", :status => 422
    end
  end

  def index
    @posts = Post.all
  end

  def update
    @post = Post.find(params[:id])
    if @post && @post.update_attributes(params[:post])
      render :json => @post
    else
      render :json => "You suck", :status => 422
    end
  end

end
