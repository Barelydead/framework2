// ioClient
var ioClient = require('socket.io-client');

// Start server
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io').listen(http);
var chat = require('../../src/socket/chat');
chat(io);


var socketURL = 'http://localhost:3000';
var options = {
    transports: ['websocket'],
    'force new connection': true
};

describe("Connect to chat server", function() {
    it('Should broadcast new user once they connect',function(done){
        var client = ioClient.connect(socketURL, options);

        client.on('connect',function(data){
            client.emit("connected");
        });

        client.on('new user',function(usersName){
            // usersName.should.be.type('string');
            // usersName.should.equal(chatUser1.name + " has joined.");
            // /* If this client doesn't disconnect it will interfere
            // with the next test */
            client.disconnect();
            done();
        });
    });
});
