// var game = new Array(4);
// for (var i = 0; i <= 3; i++) {
//     game[i] = new Array(4);
//     for (var j = 0; j <= 3; j++) {
//         game[i][j] = 0;
//     }
// }

var i, j, k, n, game;

function newGame() {        // Начало новой игры 
    game = [[0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]];     // Заполняем массив нулевыми значениями

    addElements(game, 4);   // Добавляем 4 элемента
    showGame(game);         // Выводим результат на екран
    return game;            
}

function moveUp(game) {
    if (game) { // Если масив заполнен элементами
        for (j = 0; j <= 3; j++) {
            
            // Сдвигаем элементы массива вверх
            for (k = 0; k <= 3; k++) {
                if (!game[0][j]) {
                    game[0][j] = game[1][j];
                    game[1][j] = game[2][j];
                    game[2][j] = game[3][j];
                    game[3][j] = 0;
                } 
                else if (!game[1][j]) {
                    game[1][j] = game[2][j];
                    game[2][j] = game[3][j];
                    game[3][j] = 0;
                }
                else if (!game[2][j]) {
                    game[2][j] = game[3][j];
                    game[3][j] = 0;
                }
            }
            

            // Суммируем одинаковые соседние элементы
                if (game[0][j] === game[1][j]) {
                    game[0][j] += game[1][j];
                    game[1][j] = game[2][j];
                    game[2][j] = game[3][j];
                    game[3][j] = 0;
                } 
                else if (game[1][j] === game[2][j]) {
                    game[1][j] += game[2][j];
                    game[2][j] = game[3][j];
                    game[3][j] = 0;
                }
                else if (game[2][j] === game[3][j]) {
                    game[2][j] += game[3][j];
                    game[3][j] = 0;
                }
            }   

        addElements(game, 2);   // Добавляем 2 элемента
        showGame(game);         // Выводим результат на екран
        return game;
    } else alert('Press New Game') // Если масив не заполнен элементами (не нажата кнопка New Game) выводим сообщение
}

function moveDown(game) {
    if (game) { // Если масив заполнен элементами
        for (j = 0; j <= 3; j++) {
            
            // Сдвигаем элементы массива вниз
            for (k = 0; k <= 3; k++) {
                if (!game[3][j]) {
                    game[3][j] = game[2][j];
                    game[2][j] = game[1][j];
                    game[1][j] = game[0][j];
                    game[0][j] = 0;
                } 
                else if (!game[2][j]) {
                    game[2][j] = game[1][j];
                    game[1][j] = game[0][j];
                    game[0][j] = 0;
                }
                else if (!game[1][j]) {
                    game[1][j] = game[0][j];
                    game[0][j] = 0;
                }
            }

            // Суммируем одинаковые соседние элементы
            if (game[3][j] === game[2][j]) {
                game[3][j] += game[2][j];
                game[2][j] = game[1][j];
                game[1][j] = game[0][j];
                game[0][j] = 0;
            } 
            else if (game[2][j] === game[1][j]) {
                game[2][j] += game[1][j];
                game[1][j] = game[0][j];
                game[0][j] = 0;
            }
            else if (game[1][j] === game[0][j]) {
                game[1][j] += game[0][j];
                game[0][j] = 0;
            }
        }
        addElements(game, 2);
        showGame(game);
        return game;
    } else alert('Press New Game') // Если масив не заполнен элементами (не нажата кнопка New Game) выводим сообщение
}

function moveLeft(game) {
    if (game) { // Если масив заполнен элементами
        for (i = 0; i <= 3; i++) {
            
            // Сдвигаем элементы массива влево
            for (k = 0; k <= 3; k++) {
                if (!game[i][0]) {
                    game[i][0] = game[i][1];
                    game[i][1] = game[i][2];
                    game[i][2] = game[i][3];
                    game[i][3] = 0;
                }
                else if (!game[i][1]) {
                    game[i][1] = game[i][2];
                    game[i][2] = game[i][3];
                    game[i][3] = 0;
                }
                else if (!game[i][2]) {
                    game[i][2] = game[i][3];
                    game[i][3] = 0;
                }
            }

            // Суммируем одинаковые соседние элементы
            if (game[i][0] === game[i][1]) {
                game[i][0] += game[i][1];
                game[i][1] = game[i][2];
                game[i][2] = game[i][3];
                game[i][3] = 0;
            } 
            else if (game[i][1] === game[i][2]) {
                game[i][1] += game[i][2];
                game[i][2] = game[i][3];
                game[i][3] = 0;
            }
            else if (game[i][2] === game[i][3]) {
                game[i][2] += game[i][3];
                game[i][3] = 0;
            }
        }
        addElements(game, 2);   // Добавляем 2 элемента
        showGame(game);         // Выводим результат на екран
        return game;
    } else alert('Press New Game') // Если масив не заполнен элементами (не нажата кнопка New Game) выводим сообщение
}

function moveRight(game) {
    if (game) { // Если масив заполнен элементами
        for (i = 0; i <= 3; i++) {
            
            // Сдвигаем элементы массива вниз
            for (k = 0; k <= 3; k++) {
                if (!game[i][3]) {
                    game[i][3] = game[i][2];
                    game[i][2] = game[i][1];
                    game[i][1] = game[i][0];
                    game[i][0] = 0;
                } 
                else if (!game[i][2]) {
                    game[i][2] = game[i][1];
                    game[i][1] = game[i][0];
                    game[i][0] = 0;
                }
                else if (!game[i][1]) {
                    game[i][1] = game[i][0];
                    game[i][0] = 0;
                }
            }

            // Суммируем одинаковые соседние элементы
            if (game[i][3] === game[i][2]) {
                game[i][3] += game[i][2];
                game[i][2] = game[i][1];
                game[i][1] = game[i][0];
                game[i][0] = 0;
            } 
            else if (game[i][2] === game[i][1]) {
                game[i][2] += game[i][1];
                game[i][1] = game[i][0];
                game[i][0] = 0;
            }
            else if (game[i][1] === game[i][0]) {
                game[i][1] += game[i][0];
                game[i][0] = 0;
            }
        }
        addElements(game, 2);
        showGame(game);
        return game;
    } else alert('Press New Game') // Если масив не заполнен элементами (не нажата кнопка New Game) выводим сообщение
}


function addElements(game, n) { // Функция добавления элементов
    var p = 0;
    for (i = 0; i <= 3; i++) {
        for (j = 0; j <= 3; j++) {
            if (game[i][j] == 0) {
                p++
            }
        }
    }

    console.log(p);

    if (p > 1) {
        for (k = 0; k <= n - 1; k++) {
            var x = Math.round(Math.random() * 3);
            var y = Math.round(Math.random() * 3);

            if (game[x][y]) {
                k = k - 1;
            } else {
                game[x][y] = Math.random() < 0.5 ? 2 : 4;
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

function showGame(game) { // Функция вывода массива на экран
    for (i = 0; i <= 3; i++) {
        for (j = 0; j <= 3; j++) {
            document.getElementById(i + '-' + j).innerHTML = game[i][j];
        }
    }
}

