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
function randomTime(minValue, maxValue) {
    return Math.round(Math.random() * (maxValue - minValue) + minValue);
}

let min = 150;
let max = 1000;

let randomResult = randomTime(min, max);


const cat = document.querySelectorAll('.cat');
const holl = document.querySelectorAll('.column');

function randomHoll(holl) {
    const i = Math.floor(Math.random() * holl.length);
    resultHoll = holl[i];
    return resultHoll;
}

const randomColumn = randomHoll(holl);
console.log(randomColumn);












const playButton = document.querySelector(".play-button");


playButton.addEventListener("click", () => {
    if (!songPlaying) {
        playButton.classList.remove("play");
        playButton.classList.add("pause");
      
    } else {
        playButton.classList.remove("pause");
        playButton.classList.add("play");
      
    }
});
