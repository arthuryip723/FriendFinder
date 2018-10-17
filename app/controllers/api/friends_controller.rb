class Api::FriendsController < ApplicationController
    def index
        @friends = Friend.all
    end

    def show
        @friend = Friend.find(params[:id])
    end

    def create
        @friend = Friend.create!(friend_params)
        render :show
    end

    def friend_params
        params.require(:friend).permit(:name, :age)
    end
end
