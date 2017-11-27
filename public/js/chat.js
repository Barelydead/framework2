(function() {
    console.log("Socket client running");

    var chat = document.getElementById("chat-window");
    var input = document.getElementById("chat-input");
    var name = document.getElementById("name-input");
    var members = document.getElementById("chat-members");
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

    function sendMessage() {
        let data = {};

        data.message = input.value;
        data.from = username;
        data.to = "all";

        console.log(data.from);

        socket.emit('chat message', data);
        input.value = "";
        input.focus();

        var msgHolder = chat.appendChild(document.createElement("div"));

        msgHolder.innerHTML = "you: " + data.message;
    }

    function sendPrivate() {
        let data = {};
        let to = input.value.split(" ")[0];

        data.message = input.value;
        data.from = username;
        data.to = to.slice(1);

        input.value = "";
        input.focus();

        var msgHolder = chat.appendChild(document.createElement("div"));

        msgHolder.innerHTML = "you to " + data.to + ": " + data.message;

        socket.emit('private message', data);
    }

    socket.on('chat message', function(data) {
        var msgHolder = chat.appendChild(document.createElement("div"));

        msgHolder.innerHTML = data.from + ": " + data.message;
    });

    socket.on('new user', function(username) {
        var msgHolder = chat.appendChild(document.createElement("div"));
        var membersHolder = members.appendChild(document.createElement("div"));

        msgHolder.innerHTML = "User " + username + " conncted to the chat";
        membersHolder.innerHTML = username;
    });

    socket.on('recieve private', function(data) {
        var msgHolder = chat.appendChild(document.createElement("div"));

        msgHolder.innerHTML = "private " + data.from + ": " + data.message;
        msgHolder.classList.add(data.class);
    });

    window.onkeydown = function(e) {
        const key = e.keyCode;

        switch (key) {
            case 13:
                if (input.value[0] === "@") {
                    sendPrivate();
                } else {
                    sendMessage();
                }
                break;

            default:
                break;
        }
    };
})();
