const squares = document.querySelectorAll('.square');
const howToPlay = document.querySelector('.how-btn');
const popupContainer = document.querySelector('.popup-container');
const controlsPopup = document.querySelector('.controls-popup');
const controlsOverlay = document.querySelector('.controls-overlay');
const closeBtn = document.querySelector('.close-btn');

controlsOverlay.addEventListener('click', togglePopup);
closeBtn.addEventListener('click', togglePopup);
howToPlay.addEventListener('click', togglePopup);

function togglePopup() {
    controlsPopup.classList.toggle('active');
    controlsOverlay.classList.toggle('active');
}
