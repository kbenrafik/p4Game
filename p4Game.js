// P4 Module
var p4Game = (function () {

    var p4 = [];
    var count = 0;
    var color = red;
    var winColor = "";
    var red = "RED";
    var yellow = "YELLOW";
    //var row = 7;

    /**
     * @desc color is win
     * @param {*} row 
     * @param {*} color 
     * @return {boolean}
     */
    function isWin(row, color) {
        // Horizontal
        var count = 0;
        for (var j = 0; j < 7; j++) {
            count = (p4[row][j] == color) ? count + 1 : 0;
            if (count >= 4)
                return true;
        }

        // Vertical
        count = 0;
        for (var i = 0; i < 6; i++) {
            count = (p4[i][row] == color) ? count + 1 : 0;
            if (count >= 4)
                return true;
        }

        // Diagonal

        return false;
    }

    /**
     * @desc init the p4 game with filled colors
     * @param {*} array 
     */

    function initp4(array) {
        p4 = array;
    }

    /**
     * @desc get the winner :D
     * @return {boolean}
     */
    function getWinner() {
        for (var row = 0; row <= 6; row++) {

            if (isWin(row, red)) {
                winColor = red;
                break;
            }
            if (isWin(row, red)) {
                winColor = yellow;
                break;
            }
        }
        return winColor;
    }

    return {
        initp4: initp4,
        getWinner: getWinner
    };

})();


// mock
var red = "RED";
var yellow = "YELLOW";
var p4 = [
    [red, red, red, 0, 0, 0, 0],
    [red, 0, 0, 0, 0, 0, 0],
    [red, 0, 0, 0, 0, 0, 0],
    [red, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
];

// init p4 module
p4Game.initp4(p4);

// get the winner
p4Game.getWinner();
