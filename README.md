# SimpleChatWithActiveMQ

Here is a small chat program that can be used for building a rich chat application, or if you just want a very simple chat program for your friends. It contains sending and receiving STOMP messages from an Apache ActiveMQ topic.

Prerequisites:
* Apace ActiveMQ server which can be found here: https://activemq.apache.org/components/classic/download/ Usually no configuration needed. Just start the server (./activemq start) and everything should work ok
* Stomp.js. A helper script for handling the WebSocket communication between ActiveMQ and your javascript application. This script can be found here, courtesy of Jeff Mesnil and Mark Broadbent: https://github.com/jmesnil/stomp-websocket/tree/master/lib
