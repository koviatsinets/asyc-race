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
let buttonToGarage = document.querySelector('.buttonToGarage') as HTMLInputElement;
buttonToGarage.addEventListener('click', switchToGarage);
let buttonToWinners = document.querySelector('.buttonToWinners') as HTMLInputElement;
buttonToWinners.addEventListener('click', switchToWinners);

window.location.hash='Garage'
window.onhashchange=switchToStateFromURLHash;
switchToStateFromURLHash();

render();

let buttonPrev = document.querySelector('.button-prev') as HTMLInputElement;
let buttonNext = document.querySelector('.button-next') as HTMLInputElement;
buttonPrev.addEventListener('click', pagePrev);
buttonNext.addEventListener('click', pageNext);

let buttonCreate = document.querySelector('.button-create') as HTMLInputElement;
let inputCreate = document.querySelector('.input-create') as HTMLInputElement;
let colorCreate = document.querySelector('.color-create') as HTMLInputElement;
buttonCreate.addEventListener('click', createCarButton);


let inputUpdate = document.querySelector('.input-update') as HTMLInputElement;

let buttonUpdate = document.querySelector('.button-update') as HTMLInputElement;
buttonUpdate.addEventListener('click', updateCarButton)
let colorUpdate = document.querySelector('.color-update') as HTMLInputElement;

let buttonStartRace = document.querySelector('.start-race') as HTMLInputElement;
buttonStartRace.addEventListener('click', startRace);

let buttonStopRace = document.querySelector('.stop-race') as HTMLInputElement;
buttonStopRace.addEventListener('click', stopRace);
buttonStopRace.disabled = true;


let isWin = {state: false};
let modalWindow = document.querySelector('.modal-window') as HTMLElement;
let modalText = document.querySelector('.modal-text')as HTMLElement;

let buttonModalClose = document.querySelector('.button-modal-close') as HTMLInputElement;
buttonModalClose.addEventListener('click', closeModal);


renderWinners()