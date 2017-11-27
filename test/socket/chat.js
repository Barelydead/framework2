var assert = require("assert");

// ioClient
var ioClient = require('socket.io-client');

// Start server
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

//io functions
var chat = require("../../src/socket/chat");



var socketURL = 'http://localhost:3000';
var options = {
    transports: ['websocket'],
    'force new connection': true
};


describe("test chat", function() {
    before(function() {
        server.listen(3000);
        chat(io);
    });

    it('should broadcast to all except OG', function(done){
        var client = ioClient.connect(socketURL, options);
        var client2 = ioClient.connect(socketURL, options);


        client.on("connect", function() {
            client2.on("connect", function() {
                client.emit("chat message", {from: "svensson"});
                client.disconnect();
            });
        });

        client2.on("chat message", function(data) {
            assert.equal(data.from, "svensson");
            client2.disconnect();
            done();
        })
    });

    it('should broadcast username to all', function(done){
        //init client
        var client = ioClient.connect(socketURL, options);

        client.on('connect', function(data){
            client.emit('new user', "jansson");
        });

        client.on("new user", function(data) {
            assert.equal(data, "jansson");
            client.disconnect();
            done();
        });
    });
});
