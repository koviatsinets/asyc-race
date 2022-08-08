import { doc } from "prettier";
import { switchToStateFromURLHash, switchToGarage, switchToWinners } from "./store"
import { render, renderWinners } from "./ui";
import { createCarButton, updateCarButton } from "./car";
import { startRace, stopRace } from "./race";
import { closeModal, pageNext, pagePrev } from "./utils"
import './global.css';
export { countPage, buttonCreate, inputCreate, colorCreate, inputUpdate, buttonUpdate, colorUpdate,
   cashSelectCar, buttonStartRace, buttonStopRace, isWin, modalWindow, modalText};

let countPage = {page: 1};
let cashSelectCar = {name: '', color: '', id: 0};
let buttonToGarage = document.querySelector('.buttonToGarage');
buttonToGarage.addEventListener('click', switchToGarage);
let buttonToWinners = document.querySelector('.buttonToWinners');
buttonToWinners.addEventListener('click', switchToWinners);

window.location.hash='Garage'
window.onhashchange=switchToStateFromURLHash;
switchToStateFromURLHash();

render();

let buttonPrev = document.querySelector('.button-prev');
let buttonNext = document.querySelector('.button-next');
buttonPrev.addEventListener('click', pagePrev);
buttonNext.addEventListener('click', pageNext);

let buttonCreate = document.querySelector('.button-create');
let inputCreate = document.querySelector('.input-create');
let colorCreate = document.querySelector('.color-create');
buttonCreate.addEventListener('click', createCarButton);


let inputUpdate = document.querySelector('.input-update');

let buttonUpdate = document.querySelector('.button-update');
buttonUpdate.addEventListener('click', updateCarButton)
let colorUpdate = document.querySelector('.color-update');

let buttonStartRace = document.querySelector('.start-race');
buttonStartRace.addEventListener('click', startRace);

let buttonStopRace = document.querySelector('.stop-race');
buttonStopRace.addEventListener('click', stopRace);
buttonStopRace.disabled = true;


let isWin = {state: false};
let modalWindow = document.querySelector('.modal-window');
let modalText = document.querySelector('.modal-text');

let buttonModalClose = document.querySelector('.button-modal-close');
buttonModalClose.addEventListener('click', closeModal);


renderWinners()