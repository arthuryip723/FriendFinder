class Api::ReviewsController < ApplicationController
  def show
    @review = Review.find(params[:id])
  end

  def create
    @review = Review.create!(review_params)
    render :show
  end

  def review_params
    params.require(:review).permit(:friend_id, :content)
  end
end
