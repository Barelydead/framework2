var assert = require('assert');
const Board = require("../../src/chess/Board");


describe('getBoard', function() {
    describe('Check that board returns', function() {
        it("board == getBoard", function() {
            let board = new Board();

            assert.equal(board.board, board.getBoard());
        });
    });
});


describe('getSquare', function() {
    describe('check the value of an empty square', function() {
        it("Should return '#' if empty", function() {
            let board = new Board();

            assert.equal("#", board.getSquare(1, 1));
        });
    });
});


describe('updateSquare', function() {
    describe('Check that square updated', function() {
        it("should change to 'T'", function() {
            let board = new Board();
            board.updateSquare(1, 1, "T");

            assert.equal("T", board.getSquare(1, 1));
        });
    });
});
