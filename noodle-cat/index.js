
const audio = document.querySelector("audio");
const cats = document.querySelectorAll('.cat');

cats.forEach(function(cat) {
    cat.addEventListener('click', function() {
        // Здесь вы можете получить доступ к p_image и op_image для этого конкретного 'cat'
        const pImage = cat.querySelector('.p_image');
        const opImage = cat.querySelector('.op_image');
     
        pImage.style.display = 'none';
        opImage.style.display = 'block';

        // Воспроизведение звука
        audio.play();

        // Задержка на 1 секунду перед возвратом к начальному состоянию
        setTimeout(function() {
            pImage.style.display = 'block';
            opImage.style.display = 'none';
        }, 200); // 1000 миллисекунд = 1 секунда
    });
});


cats.forEach(function(cat) {
    cat.addEventListener('click', function() {
        setTimeout(function() {
                 
            // Восстанавливаем видимость блока '.cat'
            cat.style.display = 'none';
        }, 250); // 1000 миллисекунд = 1 секунда

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
    let max = 9000;
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


const playButton = document.querySelector(".play-button");
let gamePlaying = false;

playButton.addEventListener("click", () => {
    if (!gamePlaying) {
        playButton.classList.remove("play");
        playButton.classList.add("pause");
        gamePlaying = true;
        // Вызывайте функцию `pop` только после нажатия кнопки play
        pop();
    } else {
        playButton.classList.remove("pause");
        playButton.classList.add("play");
        gamePlaying = false;
    }
});