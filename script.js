const html = document.querySelector('html');

const btnFocus = document.querySelector('.app__card-button--foco');
const btnShort = document.querySelector('.app__card-button--curto');
const btnLong = document.querySelector('.app__card-button--longo');
const btnStartPause = document.getElementById('start-pause');
const arrayBtn = document.querySelectorAll('.app__card-button');

const musicInput = document.getElementById('alternar-musica');
const music = new Audio('/sons/luna-rise-part-one.mp3');
const musicPlay = new Audio('/sons/play.wav');
const musicPause = new Audio('/sons/pause.mp3');
const musicZero = new Audio('/sons/beep.mp3');
music.loop = true;

const timerElement = document.getElementById('timer');
const imageElement = document.querySelector('.app__image');
const titleElement = document.querySelector('.app__title');
const startPauseText = document.querySelector('#start-pause span');
const startPauseIcon = document.querySelector('#start-pause img');
const timerText = document.getElementById('timer');

const timerShortRest = 300;
const timerLongRest = 900;
let timerFocus = 1500;
let timeBreak = null;

btnFocus.addEventListener('click', () => {
    timerFocus = 1500;
    changeContext('foco');
    btnFocus.classList.add('active');
});

btnShort.addEventListener('click', () => {
    timerFocus = 300;
    changeContext('descanso-curto');
    btnShort.classList.add('active');
});

btnLong.addEventListener('click', () => {
    timerFocus = 900;
    changeContext('descanso-longo');
    btnLong.classList.add('active');
});

musicInput.addEventListener('change', () => {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
})

function changeContext(value) {
    showTimerUI();
    arrayBtn.forEach(function(value){
        value.classList.remove('active');
    });
    html.setAttribute('data-contexto', value);
    imageElement.setAttribute('src', `/imagens/${value}.png`);

    switch (value) {
        case 'foco':
            titleElement.innerHTML = `
                Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`;
            break;
        case 'descanso-curto':
            titleElement.innerHTML = `
                Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>`;
            break;
        case 'descanso-longo':
            titleElement.innerHTML = `
                Hora de voltar à superfície.<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>`;
            break;            
        default:
            break;
    }    
}

const countdown = () => {
    if(timerFocus <= 0) {
        musicZero.play();
        startPauseText.textContent = 'Começar';
        startPauseIcon.setAttribute('src', '/imagens/play_arrow.png');
        alert('Tempo finalizado!');
        resetTimer();
        timerFocus = 5;
        return;
    }
    timerFocus -= 1;
    showTimerUI();
}

btnStartPause.addEventListener('click', startPause);

function startPause() {
    startPauseText.textContent = 'Pausar';
    startPauseIcon.setAttribute('src', '/imagens/pause.png');
    if(timeBreak){
        startPauseText.textContent = 'Continuar';
        startPauseIcon.setAttribute('src', '/imagens/play_arrow.png');
        musicPause.play();
        resetTimer();
        return;
    }
    musicPlay.play();
    timeBreak = setInterval(countdown, 1000);
}

function resetTimer() {
    clearInterval(timeBreak);
    timeBreak = null;
}

function showTimerUI() {
    const time = new Date(timerFocus * 1000);
    const timeFormat = time.toLocaleTimeString('pt-br', {minute: '2-digit', second: '2-digit'})
    timerText.innerHTML = `${timeFormat}`;
}

showTimerUI()
