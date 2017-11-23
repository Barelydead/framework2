(function() {
    console.log("Socket client running");

    var chat = document.getElementById("chat-window");
    var send = document.getElementById("chat-button-send");
    var input = document.getElementById("chat-input");
    var name = document.getElementById("name-input");
    var nameBtn = document.getElementById("name-button-send");
    var username;

    /* eslint-disable */
    var socket = io();
    /* eslint-enable */

    nameBtn.addEventListener("click", function() {
        var chatApp = document.getElementsByClassName("chat-wrap")[0];
        var nameApp = document.getElementsByClassName("user-wrap")[0];

        username = name.value;

        chatApp.style.display = "block";
        nameApp.style.display = "none";

        socket.emit("new user", username);
    });

    send.addEventListener("click", function() {
        var msg = "<span class='username'>" + username + "</span>" + ": " + input.value + "\n";

        socket.emit('chat message', msg);
        input.value = "";
        input.focus();
    });

    socket.on('chat message', function(msg) {
        var msgHolder = chat.appendChild(document.createElement("div"));

        msgHolder.innerHTML = msg;
    });

    socket.on('new user', function(username) {
        var msgHolder = chat.appendChild(document.createElement("div"));

        msgHolder.innerHTML = "User " + username + " conncted to the chat";
    });
})();
