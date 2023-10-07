
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
    setTimeout(() => {
        playButton.classList.remove("pause");
        playButton.classList.add("play");
        modalUp.style.display = "flex";
        score = 0;
        gamePlaying = false;
        resetTimer();
    }, 10000); // Сброс через 1 минуту (60000 миллисекунд)
});

function pauseTimer() {
    clearInterval(intervalId); // Остановить интервал
    playButton.classList.remove("pause");
    playButton.classList.add("play");
    gamePlaying = false;
}

function resetTimer() {
    pauseTimer();
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