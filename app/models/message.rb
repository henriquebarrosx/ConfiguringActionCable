class Message < ApplicationRecord
  belongs_to :room
  after_create { broadcast_message }

  validates_presence_of :data, :data_type

  def broadcast_message
    ActionCable.server.broadcast("chat_room_channel_#{room_id}", self)
  end
end
