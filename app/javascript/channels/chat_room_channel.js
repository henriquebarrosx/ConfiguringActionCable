import consumer from "./consumer"

consumer.subscriptions.create("ChatRoomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log('Channel Connected!!!');
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
    console.log('Channel Disconnected!!!');
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    console.log('Message: ', data);
  }
});
