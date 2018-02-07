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
            document.getElementById(i + '-' + j).innerHTML = game[i][j];
            // document.write(game[i][j] + ' ');
        }
        // document.write('<br>');
    }
    // document.write('<br>');
}



function move(game, vertDirection, horDirection) {
    var x, y;

    function mirror() {
        if (vertDirection < 0) {
            game.reverse();
        }
        else if (horDirection < 0) {
            game[x].reverse();
        }
        return game;
    }

    function shift() {
        for (x = 0; x <= 3; x += 1) {
            mirror();
            for (k = 0; k < 3; k += 1) {
                for (y = 0; y < 3; y += 1) {
                    i = vertDirection ? y : x;
                    j = vertDirection ? x : y;
                    if (game[i][j] === 0) {
                        game[i][j] = game[i + Math.abs(vertDirection)][j + Math.abs(horDirection)];
                        game[i + Math.abs(vertDirection)][j + Math.abs(horDirection)] = 0;
                    }
                }
            }
            mirror();
        }
        return game;
    }

    function sum() {
        for (x = 0; x <= 3; x += 1) {
            mirror();
            
                for (y = 0; y < 3; y += 1) {
                    i = vertDirection ? y : x;
                    j = vertDirection ? x : y;
                    if (game[i][j] === game[i + Math.abs(vertDirection)][j + Math.abs(horDirection)]) {
                        game[i][j] += game[i + Math.abs(vertDirection)][j + Math.abs(horDirection)];
                        game[i + Math.abs(vertDirection)][j + Math.abs(horDirection)] = 0;
                    }
                }
            
            mirror();
        }
        return game;
    }
    

    shift();
    sum();
    shift();
    addElements(game, 2);
    showGame(game);
}

// move(game, 1, 0);

// showGame(game);

// move(game, -1, 0);

// showGame(game);

// move(game, 0, 1);

// showGame(game);

// move(game, 0, -1);

// showGame(game);



//     //--------Up-------
// function moveUp(game) {
//     for (j = 0; j <= 3; j += 1) {
//         for (k = 0; k < 3; k += 1) {
//             for (i = 0; i < 3; i += 1) {
//                 if (game[i][j] == 0) {
//                     game[i][j] = game[i + 1][j];
//                     game[i + 1][j] = 0;
//                 }
//             }
//         }
//     }
// }


//     //--------Down-------
// function moveDown(game) {
//     for (j = 0; j <= 3; j += 1) {
//         game.reverse();
//         for (k = 0; k < 3; k += 1) {
//             for (i = 0; i < 3; i += 1) {
//                 if (game[i][j] == 0) {
//                     game[i][j] = game[i + 1][j];
//                     game[i + 1][j] = 0;
//                 }
//             }
//         }
//         game.reverse();
//     }
// }

//     //--------Left-------
// function moveLeft(game) {
//     for (i = 0; i <= 3; i += 1) {
//         for (k = 0; k < 3; k += 1) {
//             for (j = 0; j < 3; j += 1) {
//                 if (game[i][j] == 0) {
//                     game[i][j] = game[i][j + 1];
//                     game[i][j + 1] = 0;
//                 }
//             }
//         }
//     }
// }

//     //--------Right-------
// function moveRight(game) {
//     for (i = 0; i <= 3; i += 1) {
//         game[i].reverse();
//         for (k = 0; k < 3; k += 1) {
//             for (j = 0; j < 3; j += 1) {
//                 if (game[i][j] == 0) {
//                     game[i][j] = game[i][j + 1];
//                     game[i][j + 1] = 0;
//                 }
//             }
//         }
//         game[i].reverse();
//     }
// }


// moveUp(game);
// showGame(game);
// moveDown(game);
// showGame(game);
// moveLeft(game);
// showGame(game);
// moveRight(game);
// showGame(game);







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















