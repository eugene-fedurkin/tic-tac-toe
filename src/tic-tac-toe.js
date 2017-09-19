class TicTacToe {
    constructor() {
        this.currentPlayer = 'x';
        this.field = [[null, null, null],
                      [null, null, null], 
                      [null, null, null]];
        this.winLines = [ // diagonal
            [{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }], 
            [{ x: 0, y: 2 }, { x: 1, y: 1 }, { x: 2, y: 0 }],
            // horizontal
            [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }],
            [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }], 
            [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }],
            // vertical
            [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }],
            [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
            [{ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }]];
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex]) return;
        this.field[rowIndex][columnIndex] = this.currentPlayer;
        this.currentPlayer === 'x' ? this.currentPlayer = 'o' : this.currentPlayer = 'x';
    }

    isFinished() {
        return this.getWinner() || this.noMoreTurns() ? true : false;
    }

    getWinner() {
        for (let i = 0; i < this.winLines.length; i++) {
            let l = this.winLines[i];
            if (this.field[l[0].x][l[0].y] === this.field[l[1].x][l[1].y]
                && this.field[l[0].x][l[0].y] === this.field[l[2].x][l[2].y])
                return this.field[l[0].x][l[0].y];
        }
        return null;
    }

    noMoreTurns() {
        let field = [].concat(...this.field);
        return !field.includes(null);
    }

    isDraw() {
        return this.noMoreTurns() && this.getWinner() === null;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
