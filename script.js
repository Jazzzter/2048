var game, score, muveNumber;

var cellColor = ['#d8daf3', '#cdcfef', '#c2c4eb', '#b7b9e8', '#abaee4',
                       '#a0a3e0', '#9598dc', '#8a8dd8', '#7f83d4',
                       '#7478d0', '#696dcc', '#5e63c8', '#5458c4',
                       '#494ec0', '#4146b9', '#3d42ad', '#3a3ea2'];

var fontSize = [null, '30px', '30px', '30px', '30px',
                      '30px', '30px', '30px', '30px',
                      '30px', '25px', '25px', '25px',
                      '25px', '20px', '20px', '20px'];

// Обработчик событий
document.addEventListener('keydown', function() {
    if (event.keyCode === 38) {
        move(game, 1, 0);
    } else if (event.keyCode === 40) {
        move(game, -1, 0);
    } else if (event.keyCode === 37) {
        move(game, 0, 1);
    } else if (event.keyCode === 39) {
        move(game, 0, -1);
    }
});


function newGame(n) {
    // Создаем пустой(нулевой) массив game размером nxn
    var i, j;
    // Обнуляем результаты
    score = 0,
    muveNumber = -1;
    game = new Array(n);
    for (i = 0; i < n; i += 1) {
        game[i] = new Array(n);
        for (j = 0; j < n; j += 1) {
            game[i][j] = 0;
        }
    }
    // Добавляем 4 числа в массив game
    addElements(game, 4);
    // game = [[2, 4, 8, 16],
    //         [32, 64, 128, 256],
    //         [512, 1024, 2048, 4096],
    //         [8192, 16384, 32768, 65536]];
    // Выводим результаты
    showGame(game);
    // Возвращаем массив game
    return game;
}

function addElements(game, p) {
    var randCell, i, j, k,
        zeroCells = [];
        
// Создаем массив zeroCells с координатами пустых(нулевых) ячеек массива game
    for (i = 0; i <= 3; i += 1) {
        for (j = 0; j <= 3; j += 1) {
            if (game[i][j] === 0) {
                zeroCells.push([i, j]);
            }
        }
    }
//---------------------Проверка возможности хода. ДОПИЛИТЬ!!!--------------
// Если массив zeroCells пустой(т.е. нет пустых ячеек в массиве game), делаем проверку на возможночть хода
    // if (zeroCells.length === 0) {
        
    //     for (i = 0; i <= 3; i += 1) {
    //         for (j = 0; j <= 3; j += 1) {
               
    //         // Eсли в массиве game есть хоть одна пара соседних ячеек с равными значениями, 
    //         // возвращаем game, тем самым прерываем виполнение функции
    //             if (game[i][j] === game[i][j + 1] || game[i][j] === game[i + 1][j]) {
    //                 console.log('i=' + i + ' j=' + j);
    //                 p = 0;
    //                 return game;                   
    //             }
    //         // Eсли в массиве game нет пары соседних ячеек с равными значениями - игра окончена,
    //         // прерываем виполнение функции
    //             else return alert('GameOver');
                
    //         }
    //     }
    // }

// Если массив zeroCells имеет одну ячейку(т.е. в массиве game есть одна пустая ячейка),
// то колличество добавляемых чисел в массив game равно 1
//     else if (zeroCells.length === 1) {
//         p = 1;
//     }

    if (zeroCells.length === 0) { 
        p = 0;
    }

    else if (zeroCells.length === 1) {
        p = 1;
    }   

//----------------------------------------------------------------------------  

// Добавляем в пустые(нулевые) ячейки массива game p чисел 2 или 4, с вероятностью 90% и 10% соответственно
    for (k = 0; k < p; k += 1) {
        randCell = Math.round(Math.random() * (zeroCells.length - 1)); // Выбираем случайную ячейку из массива zeroCells
        i = zeroCells[randCell][0];
        j = zeroCells[randCell][1];
        game[i][j] = Math.random() < 0.9 ? 2 : 4; // В нулевую ячейку массива game добавляем число 2 или 4
        zeroCells.splice(randCell, 1); // Из массива с координатамы пустых(нулевых) ячеек удаляем элемент(он уже не пустой)
    }
    muveNumber += (p) ? 1 : 0; // инкрементируем колличество ходов
    
}

function showGame(game) {
    var i, j, num, cell;
    for (i = 0; i <= 3; i++) {
        for (j = 0; j <= 3; j++) {
            cell = document.getElementById(i + '-' + j);
            num = Math.log2(game[i][j]);
    
            if (game[i][j] === 0) {
                cell.innerHTML = '';
                cell.style.background = cellColor[0];
            } else {
                cell.innerHTML = game[i][j];
                cell.style.background = cellColor[num];
                cell.style.fontSize = fontSize[num];
            }
        }

    }
    document.getElementById('score').innerHTML = 'Score: ' + score;
    document.getElementById('muveNumber').innerHTML = 'MuveNumber: ' + muveNumber;
}

function move(game, vertDirection, horDirection) {
    var v = Math.abs(vertDirection),
        h = Math.abs(horDirection),
        i, j, k, x, y;

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
                        game[i][j] = game[i + v][j + h];
                        game[i + v][j + h] = 0;
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
                if (game[i][j] === game[i + v][j + h]) {
                    game[i][j] += game[i + v][j + h];
                    game[i + v][j + h] = 0;
                    score += game[i][j];
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













