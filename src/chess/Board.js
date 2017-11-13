/**
 * A Chess board module
 * @module
 */
"use strict";

/**
 * Board class contains methods for setting up a chess board
 */
class Board {
    /**
     * Prepare board properties and init empty board
     */
    constructor() {
        this.board = {
            0: [],
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
            7: [],
        };

        this.setUpEmptyTable();
    }

    /**
     * Set up empty board
     */
    setUpEmptyTable() {
        for (var key in this.board) {
            this.board[key] = ["#", "#", "#", "#", "#", "#", "#", "#"];
        }
    }


    /**
     * get the full board
     *
     * @returns {object} - current board state
     */
    getBoard() {
        return this.board;
    }


    /**
     * get a value for a specific square
     *
     * @returns {string}
     */
    getSquare(row, col) {
        return this.board[row][col];
    }


    /**
     * change the value of a square
     *
     * @returns {null}
     */
    updateSquare(row, col, value) {
        this.board[row][col] = value;
    }
}


module.exports = Board;
