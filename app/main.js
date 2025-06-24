const start = document.querySelector('#start');
const screen = document.querySelectorAll('.screen')
const btnTime = document.querySelectorAll('.time-btn')
const timeList = document.querySelector('.time-list')

start.addEventListener('click',(event) => {
event.preventDefault()
screen[0].classList.add('up')
})

timeList.addEventListener('click',(event) => {
    startGame()
    if(event.target.classList.contains('time-btn')) {
        console.log(event.target.getAttribute('data-time'));
    }
})

function startGame() {
    screen[1].classList.add('up')
}