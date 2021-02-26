class MessageController < ApplicationController
  def index
    @messages = Message.includes(:room).where(room: { id: params[:room_id] })
    @room_id = params[:room_id]
  end

  def create
    @room = Room.find(params[:room_id])
    @message = @room.messages.create(message_params)

    render json: { errors: @message.errors } if @message.errors.present?
  end

  private
  def message_params
    params.require(:message).permit(:data, :data_type, :file, :room)
  end
end
