const html = document.querySelector('html');

const btnFocus = document.querySelector('.app__card-button--foco');
const btnShort = document.querySelector('.app__card-button--curto');
const btnLong = document.querySelector('.app__card-button--longo');
const btnStart = document.querySelector('.app__card-primary-butto-icon');
const arrayBtn = document.querySelectorAll('.app__card-button');

const timerElement = document.getElementById('timer');
const imageElement = document.querySelector('.app__image');
const titleElement = document.querySelector('.app__title');

const timerFocus = 1500;
const timerShortRest = 300;
const timerLongRest = 900;

btnFocus.addEventListener('click', () => {
    changeContext('foco');
});

btnShort.addEventListener('click', () => {
    changeContext('descanso-curto');
});

btnLong.addEventListener('click', () => {
    changeContext('descanso-longo');
});

function changeContext(value) {
    html.setAttribute('data-contexto', value);
    imageElement.setAttribute('src', `/imagens/${value}.png`);
}
