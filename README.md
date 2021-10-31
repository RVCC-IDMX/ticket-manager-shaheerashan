# Ticket Manager APP

In this App, we learn how to develop a Ticket Manager using Node.js's Event Emitter class. I followed the instructions from [Using Event Emitters in Node.js](http://feitingair.com/using-event-emitters-in-node-js.html)

As soon as a ticket is purchased the details are then sent by the buy method to the ticketManager class.

The eventListener will only send a confirmation email and upload the purchase information into the database service after listening for the buy event. All of the data is then printed into the console.

When the tickets are out of stock or unavailable for purchasing, the 'error' message will appear. An error method event, like the purchase method, will be listened for by the listener and printed out on the console.
