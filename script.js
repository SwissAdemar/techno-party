
const audio = document.querySelector("audio");
audio.volume = 0.1;
const muteBtn = document.getElementById("mute-btn");
muteBtn.addEventListener('click', () => {
    audio.muted === true ? audio.muted = false : audio.muted = true;
})
const items = document.querySelectorAll(".timer p");
const countDownDate = new Date("Sep 2, 2023 08:00:00").getTime();
let counter = setInterval( () => {
    let now = new Date().getTime();
    let timeLeft = countDownDate - now;

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const values = [days, hours, minutes, seconds];

    const format = (item) => {
        return item < 10 ? item = `0${item}` : item;
    }

    items.forEach((item, index) => {
        item.innerHTML = format(values[index]);
    })

    if(timeLeft < 0){
        clearInterval(counter);
        
    }

}, 1000);