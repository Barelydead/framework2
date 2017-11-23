// ioClient
var ioClient = require('socket.io-client');

// // Start server
// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io').listen(http);
// var chat = require('../../src/socket/chat');
// chat(io);


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

        // Set up event listener.  This is the actual test we're running
        client1.on('message', function(msg){
          expect(msg).to.equal('test');

          // Disconnect both client connections
          client1.disconnect();
          client2.disconnect();
          done();
        });
    });
});
