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
        }
    }
}

function move(game, vert, hor) {
    var x, y, i, j,
        s = vert + hor,
        m = s > 0 ? 0 : 3,
        n = s > 0 ? 3 : 0;


    function shift() {
        for (k = 0; k <= 3; k++) {
            for (y = m; y != n; y += s) {
                    
                i = vert ? y : x;
                j = vert ? x : y;
                   
                if (!game[i][j]) {                                      
                    game[i][j] = game[i + vert][j + hor];
                    game[i + vert][j + hor] = 0;
                }  
            }      
        }
        return game;
    }

    function sum() {
        for (y = m; y > 0 && y != n && y < 4; y += s) {
            
            i = vert ? y : x;
            j = vert ? x : y;

            console.log(i + ' ' + j);

            if (game[i][j] == game[i + vert][j + hor]) {
                game[i][j] += game[i + vert][j + hor];
                game[i + vert][j + hor] = 0;
                y += s;
            }
        }
        return game;
    }

    for (x = 0; x <= 3; x++) {
        shift();
        sum();
        shift();
    }

    addElements(game, 2);
    showGame(game);
    
    return game;
}