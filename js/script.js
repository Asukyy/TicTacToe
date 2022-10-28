const cell = document.querySelectorAll('.cell');
const scoreplayer1 = document.querySelector('.scorePlayer1');
const scoreplayer2 = document.querySelector('.scorePlayer2');

const restartBtn = document.querySelector('.restart').addEventListener('click', restart);

const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let flag = true;

let player1 =[];
let player2 =[];

let score = {
    player1: 0,
    player2: 0
}

function drawScore(){
    scoreplayer1.innerHTML = "Player 1: " + score.player1;
    scoreplayer2.innerHTML = "Player 2: " + score.player2;
}

for(let i = 0; i < cell.length ; i++){
    cell[i].addEventListener('click', function(){
        if(flag === true ){
            cell[i].innerHTML = 'X';
            player1.push(i);
            flag = false;
        }
        else if(flag === false && cell[i].innerHTML === 'X' || flag === true && cell[i].innerHTML === 'O'){
            alert('Case déjà remplie');
        }
        else{
            cell[i].innerHTML = 'O';
            player2.push(i);
            flag = true;
        }
        checkwinner();

    });
}


function restart(){
    clearBoard();
    score.player1 = 0;
    score.player2 = 0;
    drawScore();
}

function checkwinner(){
    winCombos.find((item) => {
        if(item.filter((i) => player1.includes(i)).length === 3){
            score.player1++;
            alert('Player 1 won the game');
            clearBoard();
            drawScore();
        }
        else if(item.filter((i) => player2.includes(i)).length === 3){
            alert('Player 2 won the game');
            score.player2++;
            clearBoard();
            drawScore();
        }
        else if(player1.length + player2.length === 9) {
            alert('Game Draw');
            clearBoard();
        }
        
    });
}


function clearBoard(){
    player1 = [];
    player2 = [];
    for(let i = 0; i < cell.length ; i++){
        cell[i].innerHTML = '';
    }
}

drawScore();



