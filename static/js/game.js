function success() {
    if (document.getElementById("name").value === "") {
        document.getElementById('myBtn').disabled = true;
    } else {
        document.getElementById('myBtn').disabled = false;
    }
}

let score = 0;

initGame();


function getRandomInt(max) {
    return `${Math.floor(Math.random() * max)}%`;
}

let audio = new Audio('../static/music/background.mp3');
audio.play()

function initGame() {
    const modal = document.getElementById("myModal");
    const btn = document.getElementById("myBtn");

    btn.onclick = function () {
        modal.style.display = "block";
        alert('Hit only the ALERT button as many times as possible. Do not let the alerts to trick you!')
    }
    const button = document.querySelector("#button")
    let mines = document.getElementsByClassName("mine")
    let hardMinesClass = document.getElementsByClassName("hardMine")
    let endScore = count_score();
    for (let i = 0; i < mines.length; i++) {
        button.addEventListener("click", function () {
            goHardMode(hardMinesClass, button)
            let top = getRandomInt(98);
            let left = getRandomInt(98);
            mines[i].style.top = top;
            mines[i].style.left = left;
            mines[i].style.opacity = "100";
        });
        mines[i].addEventListener("click", function () {
            let top = getRandomInt(98);
            let left = getRandomInt(98);
            modal.style.display = "block";
            mines[i].style.top = top;
            mines[i].style.left = left;
        })
    }
    button.addEventListener("click", function () {
        let top = getRandomInt(98);
        let left = getRandomInt(98);
        modal.style.display = "block";
        button.style.top = top;
        button.style.left = left;
    });
    restart()
}

function countdown(duration, display) {
    let timer = duration, minutes, seconds;
    let openedWindow = document.getElementById("myModal")
    let restart = document.getElementsByClassName("restart")
    let start = document.getElementById("myBtn")
    let save_btn = document.getElementById("save-button")
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.innerText = minutes + ":" + seconds;


        if (--timer === 0) {
            let game_over = new Audio('../static/music/game_over.mp3');
            game_over.play();
            openedWindow.style.display = "none";
            start.style.display = "none";

            restart[0].classList.remove("hide_button");
            save_btn.classList.remove("hide_button");
        }
    }, 1000);
}

window.onload = function () {
    let time = document.getElementById("myBtn")
    time.addEventListener('click', (duration) => {
        let oneMinute = 60,
            display = document.querySelector('#time');
        countdown(oneMinute, display)


    })
}


function count_score() {
    let score_num = document.getElementById("score-num")
    let pop = document.getElementById("button");
    let mineClick = document.getElementsByClassName("mine");

    let asd = document.querySelector("#result")
    pop.addEventListener("click", () => {
        let sound = new Audio('../static/music/success.wav');
        sound.play();
        score += 1;
        score_num.innerText = "Score: " + score;
        asd.setAttribute('value', `${score}`);
    })

    for (let i = 0; i < mineClick.length; i++) {
        mineClick[i].addEventListener('click', () => {

            let sound2 = new Audio('../static/music/miss.wav');
            sound2.play();
            score -= 1;
            score_num.innerText = "Score: " + score;
            asd.setAttribute('value', `${score}`);
        })
    }
    return score
}

function restart() {
    let restart = document.getElementsByClassName("restart")
    restart[0].addEventListener('click', () => {
        initGame()
    })
}

function goHardMode(hardMinesClass, button) {
    if (score === 10) {
        console.log('here')
        for (let hard = 0; hard < hardMinesClass.length; hard++) {
            button.addEventListener("click", function () {
                let top = getRandomInt(98);
                let left = getRandomInt(98);
                hardMinesClass[hard].style.top = top;
                hardMinesClass[hard].style.left = left;
                hardMinesClass[hard].style.opacity = "100"
            });
        }
    }
}