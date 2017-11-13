/**
 * All the Chess pieces
 * @module
 */
"use strict";

/**
 * Piece class contains logic for all the pieces
 */
class Piece {
    /**
     * Prepare board properties and init empty board
     */
    constructor() {
        this.pieces = ["Pawn", "Rook", "Bishop", "Knight", "Queen", "King"];
    }
}


module.exports = Piece;
