let gameResults = JSON.parse(localStorage.getItem("gameResults")) || [];


const audio = document.querySelector("audio");
const cats = document.querySelectorAll('.cat');
let score = 0;


cats.forEach(function(cat) {
    cat.addEventListener('click', function() {
        // Здесь вы можете получить доступ к p_image и op_image для этого конкретного 'cat'
        const pImage = cat.querySelector('.p_image');
        const opImage = cat.querySelector('.op_image');
     
        pImage.style.display = 'none';
        opImage.style.display = 'block';

        // Воспроизведение звука
        audio.play();
        score++;

        // Обновление счета
        getScore();

        // Задержка на 1 секунду перед возвратом к начальному состоянию
        setTimeout(function() {
            pImage.style.display = 'block';
            opImage.style.display = 'none';
        }, 90); // 1000 миллисекунд = 1 секунда
    });
});

const scoreCount = document.querySelector('.score');
function getScore() {
    scoreCount.innerHTML = score;
}

// Вызываем getScore() в начале, чтобы отобразить начальное значение счета
getScore();

cats.forEach(function(cat) {
    cat.addEventListener('click', function() {
        setTimeout(function() {
                 
            // Восстанавливаем видимость блока '.cat'
            cat.style.display = 'none';
        }, 280); // 1000 миллисекунд = 1 секунда

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
    let min = 300;
    let max = 4000;
    let randomResult = randomTime(min, max);

    const randomSelectedCat = randomCat(cat); 
    const time = randomResult;
    randomSelectedCat.classList.add('cat_up');

    // Применяем класс 'cat_up' к каждому элементу с классом 'overlay_image2'
    shadow.forEach(function (element) {
        element.classList.add('cat_up');
    });

    setTimeout(function () {
        randomSelectedCat.classList.remove('cat_up');

        // Удаляем класс 'cat_up' у каждого элемента с классом 'overlay_image2'
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
let gamePlaying = false;

let intervalId; // Переменная для хранения идентификатора интервала
let currentTime = 0;

playButton.addEventListener("click", () => {
    if (!gamePlaying) {
        playButton.classList.remove("play");
        playButton.classList.add("pause");
        gamePlaying = true;
        intervalId = setInterval(() => {
            currentTime++;
            const progressTime = document.querySelector(".current");
            progressTime.textContent = getTime(currentTime);
        }, 100); // Интервал в 100 миллисекунд (0.1 секунды)
        // Вызывайте функцию `pop` только после нажатия кнопки play
        pop();
    } else {
        pauseTimer();
    }
    setTimeout(endGameAndSaveResults, 12000);
});

function endGameAndSaveResults() {
    if (gamePlaying === true) {
        playButton.classList.remove("pause");
        playButton.classList.add("play");
        modalUp.style.display = "flex";
        gameResults.push(score);
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

const oneResult = storedData[storedData.length - 2];
const oneScore = document.querySelector(".one");
oneScore.textContent = `1  you popped ${oneResult} cat`;

const twoResult = storedData[storedData.length - 3];
const twoScore = document.querySelector(".two");
twoScore.textContent = `2  you popped ${twoResult} cat`;

const threResult = storedData[storedData.length - 4];
const threScore = document.querySelector(".thre");
threScore.textContent = `3  you popped ${threResult} cat`;

const foreResult = storedData[storedData.length - 5];
const foreScore = document.querySelector(".fore");
foreScore.textContent = `4  you popped ${foreResult} cat`;

const fiveResult = storedData[storedData.length - 6];
const fiveScore = document.querySelector(".five");
fiveScore.textContent = `5  you popped ${fiveResult} cat`;

const sixResult = storedData[storedData.length - 7];
const sixScore = document.querySelector(".six");
sixScore.textContent = `6  you popped ${sixResult} cat`;

const sevenResult = storedData[storedData.length - 8];
const sevenScore = document.querySelector(".seven");
sevenScore.textContent = `7  you popped ${sevenResult} cat`;

const eightResult = storedData[storedData.length - 9];
const eightScore = document.querySelector(".eight");
eightScore.textContent = `8  you popped ${eightResult} cat`;

const nineResult = storedData[storedData.length - 10];
const nineScore = document.querySelector(".nine");
nineScore.textContent = `9  you popped ${nineResult} cat`;

const tenResult = storedData[storedData.length - 11];
const tenScore = document.querySelector(".ten");
tenScore.textContent = `10  you popped ${tenResult} cat`;
    }
}

function pauseTimer() {
    clearInterval(intervalId); // Остановить интервал
    intervalId = null; // Установить интервал в null
    playButton.classList.remove("pause");
    playButton.classList.add("play");
    gamePlaying = false;
    resetTimer(); // Сбросить таймер
    score = 0;
    getScore();
}

function resetTimer() {
    currentTime = 0;
    const progressTime = document.querySelector(".current");
    progressTime.textContent = getTime(currentTime);
    
}
// Функция для форматирования времени
function getTime(duration) {
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = Math.floor(duration % 60);
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
}


const exit = document.querySelector(".exit");

exit.addEventListener("click", () => {
    modalUp.style.display = "none";
});


