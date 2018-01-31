var i, j, k, n, game;

function newGame() {         
    game = [[0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]];

    addElements(game, 4);
    showGame(game);
    return game;            
}

function shift(vertical, horizontal) {                          // функция сдвига, принимает аргументы:
    if (!game[i][j]) {                                          //  1,  0 -- сдвиг вверх
        game[i][j] = game[i + vertical][j + horizontal];        // -1,  0 -- сдвиг вниз
        game[i + vertical][j + horizontal] = 0;                 //  0,  1 -- сдвиг влево
    }                                                           //  0, -1 -- сдвиг вправо
    return game;
}

function sum(vertical, horizontal) {                            // функция суммирования, принимает аргументы:
    if (game[i][j] == game[i + vertical][j + horizontal]) {     //  1,  0 -- суммирование при сдвиге вверх
        game[i][j] += game[i + vertical][j + horizontal];       // -1,  0 -- суммирование при сдвиге вниз
        game[i + vertical][j + horizontal] = 0;                 //  0,  1 -- суммирование при сдвиге влево
        i += vertical;                                          //  0, -1 -- суммирование при сдвиге вправо
        j += horizontal;
    }
    return game;
}

// Сдвиг вверх
    function moveUp(game) {
        if (game) {
            for (j = 0; j <= 3; j++) {
                for (k = 1; k <= 3; k++) {
                    for (i = 0; i <= 2; i++) shift(1, 0);
                }
                for (i = 0; i <= 2; i++) sum(1, 0);

                for (k = 1; k <= 3; k++) {
                    for (i = 0; i <= 2; i++) shift(1, 0);
                }
            }
            addElements(game, 2);
            showGame(game);
            return game;
        }
        else alert('Press New Game');
    }

// Сдвиг вниз
    function moveDown(game) {
        if (game) {
            for (j = 0; j <= 3; j++) {
                for (k = 1; k <= 3; k++) {
                    for (i = 3; i >= 1; i--) shift(-1, 0);
                }
                for (i = 3; i >= 1; i--) sum(-1, 0);
                for (k = 1; k <= 3; k++) {
                    for (i = 3; i >= 1; i--) shift(-1, 0);
                }
            }
            addElements(game, 2);
            showGame(game);
            return game;
        }
        else alert('Press New Game');
    }

// Сдвиг влево
    function moveLeft(game) {
        if (game) {
            for (i = 0; i <= 3; i++) {
                for (k = 1; k <= 3; k++) {
                    for (j = 0; j <= 2; j++) shift(0, 1);
                }
                for (j = 0; j <= 2; j++) sum(0, 1);
                for (k = 1; k <= 3; k++) {
                    for (j = 0; j <= 2; j++) shift(0, 1);
                }
            }
            addElements(game, 2);
            showGame(game);
            return game;
        } 
        else alert('Press New Game');
    }

// Сдвиг вправо
    function moveRight(game) {
        if (game) {
            for (i = 0; i <= 3; i++) {
                for (k = 1; k <= 3; k++) {
                    for (j = 3; j >= 1; j--) shift(0, -1);
                }
                for (j = 3; j >= 1; j--) sum(0, -1);
                for (k = 1; k <= 3; k++) {
                    for (j = 3; j >= 1; j--) shift(0, -1);
                }
            }
            addElements(game, 2);
            showGame(game);
            return game;
        }
        else alert('Press New Game');
    }

// Добавление n новых элементов
    function addElements(game, n) {
        var p = 0;
        for (i = 0; i <= 3; i++) {
            for (j = 0; j <= 3; j++) {
                if (game[i][j] == 0) {
                    p++
                }
            }
        }
        if (p > 1) {
            for (k = 0; k <= n - 1; k++) {
                var x = Math.round(Math.random() * 3);
                var y = Math.round(Math.random() * 3);

                if (game[x][y]) {
                    k = k - 1;
                } else {
                    game[x][y] = Math.random() < 0.9 ? 2 : 4;
                }
            }
        }
        else if (p == 1) {
            game[i][j] = Math.random() < 0.5 ? 2 : 4;
        }
        else {
            alert('Game Over');
        }
    }

// Вывод результата
    function showGame(game) {
        for (i = 0; i <= 3; i++) {
            for (j = 0; j <= 3; j++) {
                document.getElementById(i + '-' + j).innerHTML = game[i][j];
            }
        }
    }






