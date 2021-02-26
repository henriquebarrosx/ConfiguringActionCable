class RoomController < ApplicationController
  def index
    @room = Room.all.order('updated_at')
  end

  def show
    @room = Room.find(params[:id])
  end

  def new
    @room = Room.new
  end

  def create
    @room = Room.new(room_params)

    if @room.save
      redirect_to :room_path
    else
      render :new
    end
  end

  private

  def room_params
    params.require(:room).permit(:title)
  end
end
