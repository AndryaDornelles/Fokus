const html = document.querySelector('html');
const btnFocus = document.querySelector('.app__card-button--foco');
const btnShort = document.querySelector('.app__card-button--curto');
const btnLong = document.querySelector('.app__card-button--longo');

btnFocus.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco');
});

btnShort.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto');
});

btnLong.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo');
});