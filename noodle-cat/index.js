const pImage = document.querySelector('.p_image');
const opImage = document.querySelector('.op_image');
const audio = document.querySelector("audio");

pImage.addEventListener('click', function() {
    pImage.style.display = 'none';
    opImage.style.display = 'block';

    // Воспроизведение звука
    audio.play();

    // Задержка на 1 секунду перед возвратом к начальному состоянию
    setTimeout(function() {
        pImage.style.display = 'block';
        opImage.style.display = 'none';
    }, 100); // 1000 миллисекунд = 1 секунда
});

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

// Пример использования:
let minTime = 2000;
let maxTime = 10000;
let randomResult = randomTime(minTime, maxTime);

