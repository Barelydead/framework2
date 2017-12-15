// const helper = require("../utils/helper");
let users = {};

function stripTags(text) {
    return text.replace(/(<([^>]+)>)/ig, "");
}

module.exports = function (io) {
    io.on('connection', function(socket) {
        console.log('Connected to main');

        socket.on('chat message', function(data) {
            console.log("normal chat message");
            data.message = stripTags(data.message);
            socket.broadcast.emit('chat message', data);
        });

        socket.on("new user", function(username) {
            username = stripTags(username);
            socket.username = username;

            //save username to easli get socket.
            users[socket.username] = socket;
            io.emit("new user", username);
        });

        socket.on("private message", function(data) {
            console.log("private message");
            data.class = "private";
            data.message = stripTags(data.message);

            if (typeof users[data.to] !== "undefined") {
                socket.to(users[data.to].id).emit("recieve private", data);
            }
        });

        socket.on('disconnect', function() {
            console.log('user disconnected');
        });
    });
};
