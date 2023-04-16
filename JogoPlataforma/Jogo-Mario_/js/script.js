const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const scoreElement = document.querySelector('.score') // adiciona uma referência ao elemento de pontuação

let score = 0; // inicia a pontuação em 0

const jump = () => {
    mario.classList.add('jump')
    score++;
    scoreElement.innerText = score; 

    setTimeout(() => {
        mario.classList.remove('jump')
    },520)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 93 && pipePosition > 0 && marioPosition < 67) {
        var gameOver = document.getElementById("over")
        gameOver.style.display = "block"

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = '../Jogo-Mario_/img/game-over.png';
        mario.style.width = '76px';
        mario.style.marginLeft = '19px';

        clearInterval(loop);

        document.getElementById("over").addEventListener("click", function(){
            location.reload();
        });
    }

}, 10)

document.addEventListener('keydown', jump)
