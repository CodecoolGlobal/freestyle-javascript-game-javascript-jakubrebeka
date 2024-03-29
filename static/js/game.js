let score = 0;
const button = document.querySelector("#button")


initGame();

function initGame() {
    const modal = document.getElementById("myModal");
    const btn = document.getElementById("myBtn");

    btn.onclick = function () {
        let audio = new Audio('../static/music/background.mp3');
        audio.play()
        modal.style.display = "block";
        alert('Hit only the ALERT button as many times as possible. Do not let the other alerts to trick you!')
    }
    count_score();
    moveMinesAfterButtonPress()
    pressButton(modal)
    pressWrongAlert(modal)
    restart()
}


function getRandomInt(max) {
    return `${Math.floor(Math.random() * max)}%`;
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
            document.getElementById("save-button").disabled = false;
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
    let asd = document.querySelector("#result")
    pop.addEventListener("click", () => {
        let sound = new Audio('../static/music/success.wav');
        sound.play();
        score += 1;
        score_num.innerText = "Score: " + score;
        asd.setAttribute('value', `${score}`);
    })
    decrementScore(score_num, asd);
    return score
}

function decrementScore(score_num, asd){
    let mineClick = document.getElementsByClassName("mine");
    let hardMineClick = document.getElementsByClassName("hardMine");
    for (let i = 0; i < mineClick.length; i++) {
        mineClick[i].addEventListener('click', () => {
            let sound2 = new Audio('../static/music/miss.wav');
            sound2.play();
            score -= 1;
            score_num.innerText = "Score: " + score;
        })
    }
    for (let i = 0; i < hardMineClick.length; i++) {
        hardMineClick[i].addEventListener('click', () => {
            let sound2 = new Audio('../static/music/miss.wav');
            sound2.play();
            score -= 1;
            score_num.innerText = "Score: " + score;
        })
    }}


function restart() {
    let restart = document.getElementsByClassName("restart")
    restart[0].addEventListener('click', () => {
        initGame()
    })
}


function goPhaseTwo(button) {
    let hardMinesClass = document.getElementsByClassName("hardMine-Phase-Two")
    if (score === 5) {
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


function goPhaseThree(button) {
    let hardMinePhaseThree = document.getElementsByClassName("hardMine-Phase-Three")
    if (score === 10) {
        for (let hard = 0; hard < hardMinePhaseThree.length; hard++) {
            button.addEventListener("click", function () {
                let top = getRandomInt(98);
                let left = getRandomInt(98);
                hardMinePhaseThree[hard].style.top = top;
                hardMinePhaseThree[hard].style.left = left;
                hardMinePhaseThree[hard].style.opacity = "100"
            });
        }
    }
}


function pressWrongAlert(modal) {
    let mines = document.getElementsByClassName("mine")
    let hardMineClick = document.getElementsByClassName("hardMine");
    for (let i = 0; i < mines.length; i++) {
        mines[i].addEventListener("click", function () {
            let top = getRandomInt(98);
            let left = getRandomInt(98);
            modal.style.display = "block";
            mines[i].style.top = top;
            mines[i].style.left = left;
        })
    }
    for (let i = 0; i < hardMineClick.length; i++) {
        hardMineClick[i].addEventListener("click", function () {
            let top = getRandomInt(98);
            let left = getRandomInt(98);
            modal.style.display = "block";
            hardMineClick[i].style.top = top;
            hardMineClick[i].style.left = left;
        })
    }}


function pressButton(modal) {
    button.addEventListener("click", function () {
        let top = getRandomInt(98);
        let left = getRandomInt(98);
        modal.style.display = "block";
        button.style.top = top;
        button.style.left = left;
    });
}

function moveMinesAfterButtonPress(){
    let mines = document.getElementsByClassName("mine")
    for (let i = 0; i < mines.length; i++) {
        button.addEventListener("click", function () {
            goPhaseTwo(button)
            goPhaseThree(button)
            let top = getRandomInt(98);
            let left = getRandomInt(98);
            mines[i].style.top = top;
            mines[i].style.left = left;
            mines[i].style.opacity = "100";
        });
    }}


function success() {
    if (document.getElementById("name").value === "") {
        document.getElementById('myBtn').disabled = true;
    } else {
        document.getElementById('myBtn').disabled = false;
    }
}