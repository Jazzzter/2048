var i, j, k, game;

function newGame() {
    game = [[0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]];
    addElements(game, 4);
    showGame(game);
    return game;
}

function addElements(game, n) {
    var iRand, jRand, zeroCell = 0;
    for (i = 0; i <= 3; i++) {
        for (j = 0; j <= 3; j++) {
            if (!game[i][j]) {
                zeroCell += 1;
            }
        }
    }

    for (k = 0; k < n; k++) {
        iRand = Math.round(Math.random() * 3);
        jRand = Math.round(Math.random() * 3);
        
        if (game[iRand][jRand]) k = k - 1;
        else game[iRand][jRand] = Math.random() < 0.9 ? 2 : 4;
    }
}

function showGame(game) {
    for (i = 0; i <= 3; i++) {
        for (j = 0; j <= 3; j++) {
            // document.getElementById(i + '-' + j).innerHTML = game[i][j];
            document.write(game[i][j] + ' ');
        }
        document.write('<br>');
    }
    document.write('<br>');
}

newGame();

function move(game, vertDirection, horDirection) {
    var x, y,
        s = vertDirection + horDirection;

    function mirror() {
        if (vertDirection === -1) {
            game.reverse();
        }
        else if (horDirection === -1) {
            game[i].reverse();
        }
        return game;
    }

    function shift() {
        for (x = 0; x <= 3; x += 1) {
            mirror();
            for (k = 0; k < 3; k += 1) {
                for (y = 0; y < 3; y += 1) {
                    i = vert ? y : x;
                    j = vert ? x : y;
                    if (game[i][j] == 0) {
                        game[i][j] = game[i + vertDirection][j + horDirection];
                        game[i + vertDirection][j + horDirection] = 0;
                    }
                }
            }
            mirror();
        }
        return game;
    }
}

move(game, 1, 0);

showGame(game);


    // //--------Up-------
    // for (j = 0; j <= 3; j += 1) {
    //     for (k = 0; k < 3; k += 1) {
    //         for (i = 0; i < 3; i += 1) {
    //             if (game[i][j] == 0) {
    //                 game[i][j] = game[i + 1][j];
    //                 game[i + 1][j] = 0;
    //             }
    //         }
    //     }
    // }


    // //--------Down-------
    // for (j = 0; j <= 3; j += 1) {
    //     game.reverse();
    //     for (k = 0; k < 3; k += 1) {
    //         for (i = 0; i < 3; i += 1) {
    //             if (game[i][j] == 0) {
    //                 game[i][j] = game[i + 1][j];
    //                 game[i + 1][j] = 0;
    //             }
    //         }
    //     }
    //     game.reverse();
    // }

    // //--------Left-------
    // for (i = 0; i <= 3; i += 1) {
    //     for (k = 0; k < 3; k += 1) {
    //         for (j = 0; j < 3; j += 1) {
    //             if (game[i][j] == 0) {
    //                 game[i][j] = game[i][j + 1];
    //                 game[i][j + 1] = 0;
    //             }
    //         }
    //     }
    // }

    // //--------Right-------
    // for (i = 0; i <= 3; i += 1) {
    //     game[i].reverse();
    //     for (k = 0; k < 3; k += 1) {
    //         for (j = 0; j < 3; j += 1) {
    //             if (game[i][j] == 0) {
    //                 game[i][j] = game[i][j + 1];
    //                 game[i][j + 1] = 0;
    //             }
    //         }
    //     }
    //     game[i].reverse();
    // }
    













//     for (i = 0; i <= 3; i += 1) {
//         if (!game[i]) {
//             game.splice(i, 1);
//             game.push(0);
//             i -= 1;
//     }
    
//     k += 1;
//     if (k > 2) break;
// }

// }















