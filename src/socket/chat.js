let users = {};

function strip_tags(text) {
    return text.replace(/(<([^>]+)>)/ig, text);
}

module.exports = function (io) {
    io.on('connection', function(socket) {
        console.log('Connected to main');

        socket.on('chat message', function(data) {
            console.log("normal chat message");
            data.message = strip_tags(data.message);
            socket.broadcast.emit('chat message', data);
        });

        socket.on("new user", function(username) {
            socket.username = strip_tags(username);
            //save username to easli get socket.
            users[socket.username] = socket;
            io.emit("new user", username);
        });

        socket.on("private message", function(data) {
            console.log("private message");
            data.class = "private";
            data.message = strip_tags(data.message);

            if (typeof users[data.to] !== "undefined") {
                socket.to(users[data.to].id).emit("recieve private", data);
            }
        });

        socket.on('disconnect', function() {
            console.log('user disconnected');
        });
    });
};
