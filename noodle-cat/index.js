let gameResults = JSON.parse(localStorage.getItem("gameResults")) || [];

const audio = document.querySelector("audio");
const cats = document.querySelectorAll('.cat');
let score = 0;

cats.forEach(function(cat) {
    cat.addEventListener('click', function() {
        const pImage = cat.querySelector('.p_image');
        const opImage = cat.querySelector('.op_image');
     
        pImage.style.display = 'none';
        opImage.style.display = 'block';

        audio.play();
        score++;
        getScore();

        setTimeout(function() {
            pImage.style.display = 'block';
            opImage.style.display = 'none';
        }, 130);
    });
});

const scoreCount = document.querySelector('.score');
function getScore() {
    scoreCount.innerHTML = score;
}

getScore();

cats.forEach(function(cat) {
    cat.addEventListener('click', function() {
        setTimeout(function() {
            cat.style.display = 'none';
        }, 350);
    })
});

function randomTime(minValue, maxValue) {
    return Math.round(Math.random() * (maxValue - minValue) + minValue);
}

const cat = document.querySelectorAll('.cat');
const shadow = document.querySelectorAll('.overlay_image2');

function randomCat(cat) {
    const i = Math.floor(Math.random() * cat.length);
    const result = cat[i];
    return result;
}

function pop() {
    let min = 450;
    let max = 1500;
    let randomResult = randomTime(min, max);

    const randomSelectedCat = randomCat(cat); 
    const time = randomResult;
    randomSelectedCat.classList.add('cat_up');

    shadow.forEach(function (element) {
        element.classList.add('cat_up');
    });

    setTimeout(function () {
        randomSelectedCat.classList.remove('cat_up');

        shadow.forEach(function (element) {
            element.classList.remove('cat_up');
        });

        if (gamePlaying) {
            pop();
        }
    }, time);
}

const modalUp = document.querySelector(".modal");
const playButton = document.querySelector(".play-button");

let intervalId;
let timeout; 
let currentTime = 0;
let gamePlaying = false; 

playButton.addEventListener("click", () => {
    if (!gamePlaying) {
        currentTime = 0;
        playButton.classList.remove("play");
        playButton.classList.add("pause");
        
        if (timeout) {
            clearTimeout(timeout);
        }

        gamePlaying = true;
        intervalId = setInterval(() => {
            currentTime++;
            const progressTime = document.querySelector(".current");
            progressTime.textContent = getTime(currentTime);
        }, 100);
        pop();
        

        timeout = setTimeout(() => {
            endGameAndSaveResults();
        }, 12000);
        } else {

        gamePlaying = false;
        if (timeout) {
            clearTimeout(timeout);
        }

        pauseTimer();
    }
});


function endGameAndSaveResults() {
    if (gamePlaying === true) {
        playButton.classList.remove("pause");
        playButton.classList.add("play");
        modalUp.style.display = "flex";
        gameResults.push(score);

        if (gameResults.length > 11) {
                 gameResults.shift();
        }

        localStorage.setItem("gameResults", JSON.stringify(gameResults));
        score = 0;
        getScore();
        gamePlaying = false;
        clearInterval(intervalId);
        intervalId = null;
        resetTimer();
        const storedData = JSON.parse(localStorage.getItem("gameResults"));
        const lastResult = storedData[storedData.length - 1];
        const finalScore = document.querySelector(".final_score");
        finalScore.textContent = `You popped ${lastResult} cat for 2 seconds`;

        const oneScore = document.querySelector(".one");
        if (storedData.length > 1) {
            const oneResult = storedData[storedData.length - 2];
            oneScore.textContent = `1 - you popped ${oneResult} cat`;
        } else {
            oneScore.textContent = `1 - you popped _ cat`;
        }
   
        const twoScore = document.querySelector(".two");
        if (storedData.length > 2) {
            const twoResult = storedData[storedData.length - 3];
            twoScore.textContent = `2 - you popped ${twoResult} cat`;
        } else {
            twoScore.textContent = `2 - you popped _ cat`;
        }

        const threScore = document.querySelector(".thre");
        if (storedData.length > 3) {
            const threResult = storedData[storedData.length - 4];
            threScore.textContent = `3 - you popped ${threResult} cat`;
        } else {
            threScore.textContent = `3 - you popped _ cat`;
        }
        
        const foreScore = document.querySelector(".fore");
        if (storedData.length > 4) {
            const foreResult = storedData[storedData.length - 5];
            foreScore.textContent = `4 - you popped ${foreResult} cat`;
        } else {
            foreScore.textContent = `4 - you popped _ cat`;
        }
        
        const fiveScore = document.querySelector(".five");
        if (storedData.length > 5) {
            const fiveResult = storedData[storedData.length - 6];
            fiveScore.textContent = `5 - you popped ${fiveResult} cat`;
        } else {
            fiveScore.textContent = `5 - you popped _ cat`;
        }

        const sixScore = document.querySelector(".six");
        if (storedData.length > 6) {
            const sixResult = storedData[storedData.length - 7];
            sixScore.textContent = `6 - you popped ${sixResult} cat`;
        } else {
            sixScore.textContent = `6 - you popped _ cat`;
        }

        const sevenScore = document.querySelector(".seven");
        if (storedData.length > 7) {
            const sevenResult = storedData[storedData.length - 8];
           sevenScore.textContent = `7 - you popped ${sevenResult} cat`;
        } else {
            sevenScore.textContent = `7 - you popped _cat`;
        }

        const eightScore = document.querySelector(".eight");
        if (storedData.length > 8) {
            const eightResult = storedData[storedData.length - 9];
            eightScore.textContent = `8 - you popped ${eightResult} cat`;
        } else {
            eightScore.textContent = `8 - you popped _ cat`;
        }

        const nineScore = document.querySelector(".nine");
        if (storedData.length > 9) {
           const nineResult = storedData[storedData.length - 10];
           nineScore.textContent = `9 - you popped ${nineResult} cat`;
        } else {
            nineScore.textContent = `9 - you popped _ cat`;
        }
       
        const tenScore = document.querySelector(".ten");
        if (storedData.length > 10) {
            const tenResult = storedData[storedData.length - 11];
            tenScore.textContent = `10 - you popped ${tenResult} cat`;
        } else {
            tenScore.textContent = `10 - you popped _ cat`;
        }

    }
}

function pauseTimer() {
    currentTime = 0;
    clearInterval(intervalId);
    intervalId = null;
    playButton.classList.remove("pause");
    playButton.classList.add("play");
    gamePlaying = false;
    resetTimer();
    score = 0;
    getScore();
  }

function resetTimer() {
    gamePlaying = false;
    currentTime = 0;
    const progressTime = document.querySelector(".current");
    progressTime.textContent = getTime(currentTime);
 }

function getTime(duration) {
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = Math.floor(duration % 60);
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
}

const exit = document.querySelector(".exit");

exit.addEventListener("click", () => {
      window.location.href = "https://rolling-scopes-school.github.io/gbrjo-JSFEPRESCHOOL2023Q2/noodle-cat/";
});