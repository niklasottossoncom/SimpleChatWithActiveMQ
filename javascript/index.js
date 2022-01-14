// Setup websocket connection
const client = Stomp.client("ws://localhost:61614/stomp", "v11.stomp");
// Setup header options
const headers = {id: 'JUST.FCX', ack: 'client'};

// Connect to ActiveMQ (via websocket)
client.connect("admin", "admin", function () {
    // Setup subscription of topic (/topic/chat)
    client.subscribe("/topic/chat",
        function (message) {
            // Add message to textarea
            document.getElementById("chat").value += message.body + "\n";
            // Acknowledge the message
            message.ack();
        }, headers);
});

function send() {
    const message = document.getElementById("message");
    //client.send("test", { priority: 9, persistent: true}, message);
    // Send message to topic (/topic/chat)
    client.send("/topic/chat", {}, message.value);
    // Reset input
    message.value = "";
}
