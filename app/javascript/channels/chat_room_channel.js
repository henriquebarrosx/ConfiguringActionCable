import consumer from "./consumer"

document.addEventListener('turbolinks:load', () => {

  consumer.subscriptions.create({ channel: "ChatRoomChannel", room_id: 1 }, {
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
})
