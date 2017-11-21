module.exports = function (io) {
    io.on('connection', function(socket) {
        console.log('Connected');

        socket.on('chat message', function(msg) {
            io.emit('chat message', msg);
        });

        socket.on("new user", function(username) {
            console.log("new client with username " + username);
            io.emit("new user", username);
        });

        socket.on('disconnect', function() {
            console.log('user disconnected');
        });
    });
};
