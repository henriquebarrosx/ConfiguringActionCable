# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version: 3.0.0


* System dependencies:
    * Redis: 4.2.5
    * postgreSQL


* Database creation:
  ( We will using simple settings for a objective getting started )
    * host: localhost
    * user: postgres
    * password: postgres


* Database initialization:
```bash
  rake db:craete
  rake db:migrate
  rails server
  ```

## Building own real time

- Add redis gem in your Gemfile and run ```bundle install ```

```bash
    gem 'redis'
```

- Configure the development settings in cable.yml file:

```yaml
development:
  adapter: redis
  url: redis://localhost:6379/1
```

- Generate a new channel. This will also generate a consumer (See the .js file). Define a string id that represents this channel.

```bash
rails g channel chat_room  
```

```ruby
def subscribed
  stream_from "chat_room_channel"
end
```

OBS: With some consoles, you can test the connectivity just by opening the Rails console and pasting the following command

```javascript
/* app/javascript/chanels/chat_room_channel */

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

```


```bash
Bash: rails console
```

```ruby
ActionCable.server.broadcast("channel_name", { message: 'Hello world', type: 'text' })
```