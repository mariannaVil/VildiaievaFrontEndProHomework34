const board = document.querySelector('.game-board');
const block = document.querySelector('.block');
const step = 10; 

const scoreElement = document.getElementById('score');
let score = 0;

function updateScore(points) {
    score += points;
    scoreElement.textContent = score;
}

let canMove = true; 

function moveDown() {
    const currentTop = parseInt(getComputedStyle(block).top);
    const boardHeight = board.offsetHeight;
    const blockHeight = block.offsetHeight;

    if (currentTop + blockHeight < boardHeight && canMove) {
        block.style.top = currentTop + step + 'px';
    } else {
        canMove = false; 
    }
}

function moveLeft() {
    if (canMove) {
        const currentLeft = parseInt(getComputedStyle(block).left);
        if (currentLeft > 0) {
            block.style.left = currentLeft - step + 'px';

            updateScore(-10);
        }
    }
}

function moveRight() {
    if (canMove) {
        const currentLeft = parseInt(getComputedStyle(block).left);
        const boardWidth = board.offsetWidth;
        const blockWidth = block.offsetWidth;

        if (currentLeft < boardWidth - blockWidth) {
            block.style.left = currentLeft + step + 'px';

            updateScore(10);
        }
    }
}

function setStepToBlock(e) {
    switch (e.keyCode) {
        case 37: 
            moveLeft();
            break;
        case 39: 
            moveRight();
            break;
    }
}

document.addEventListener('keydown', setStepToBlock);
setInterval(moveDown, 1000);