const start = document.querySelector('#start');
const screen = document.querySelectorAll('.screen');
const btnTime = document.querySelectorAll('.time-btn');
const timeList = document.querySelector('.time-list');
const board =document.querySelector('.board');
let timeDisplay = document.querySelector('#time');
let time = 10;

start.addEventListener('click',(event) => {
event.preventDefault()
screen[0].classList.add('up')
})

timeList.addEventListener('click',(event) => {
    if(event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
        screen[1].classList.add('up')
    }
})

startGame()
// game launch function

function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}

function decreaseTime () {
    if(time === 0) {
        finishGame()
    } else {
        let current = --time
        if(current < 10) {
           current = `0`+ current
        }
        setTime(current)
    }
}

function setTime(value) {
    timeDisplay.innerHTML= `00:${value}`
}

function createRandomCircle() {
    const circle = document.createElement('div');
    circle.classList.add('circle')
    const size = getRandomSize(10,60)

    circle.style.width=`${size}px`
    circle.style.height=`${size}px`
    board.append(circle)
}

function getRandomSize(min, max) {
    return Math.round(Math.random() * (max-min) + min)
}