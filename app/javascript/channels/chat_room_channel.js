import consumer from "./consumer"

document.addEventListener('turbolinks:load', () => {

  const element = document.getElementById('room-id');
  const room_id = element.getAttribute('data-room-id');

  consumer.subscriptions.create({ channel: "ChatRoomChannel", room_id}, {
    connected() {
      // Called when the subscription is ready for use on the server
      console.log('Channel Connected - ' + room_id + "!!!");
    },

    disconnected() {
      // Called when the subscription has been terminated by the server
      console.log('Channel Disconnected!!!');
    },

    received(message) {
      // Called when there's incoming data on the websocket for this channel
      const x = document.createElement('span')
      const y = document.createTextNode(` -> ${message.data}`);
      x.appendChild(y);
      document.querySelector('.messages-content').appendChild(x)
      console.log('Message: ', message);
    }
  });
});
