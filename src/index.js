import { doc } from "prettier";
import { getCars, getCar, createCar, deleteCar, updateCar, startStopCarEngine, switchCarEngine } from "./components/api"
import './global.css';
export { countPage };
let countPage = 1;

let hashNameManufacture = ['Audi', 'BMW', 'Volkswagen', 'Mercedes', 'Porshe', 'Opel', 'Ferrari', 'Bugatti', 'Fiat', 'Lanica', 'Alfa-Romeo'] 
let hashNameModel = ['A6', 'Polo', 'S-classe', '911', '3-series', 'Vectra', 'Rome', 'Veyron', '500', 'Dedra', 'Giulia'];

let buttonToGarage = document.querySelector('.buttonToGarage');
buttonToGarage.addEventListener('click', switchToGarage);
let buttonToWinners = document.querySelector('.buttonToWinners');
buttonToWinners.addEventListener('click', switchToWinners);
let contentGarage = document.querySelector('.content-garage');
let contentWinners = document.querySelector('.content-winners');
let amountCars = document.querySelector('.amount-cars')

//-------------------- SPA ---------------------//

window.location.hash='Garage'
window.onhashchange=switchToStateFromURLHash;
  let SPAState={};

function switchToStateFromURLHash() {
    let URLHash=window.location.hash;
    let stateStr=URLHash.substring(1);
    if ( stateStr!="" ) {
        let parts=stateStr.split("_")
        SPAState={ pagename: parts[0] };
    }
    else
         SPAState={pagename:'Garage'};

    switch ( SPAState.pagename ) {
        case 'Garage':
            contentGarage.classList.remove('hidden');
            contentWinners.classList.add('hidden');
            break;
        case 'Winners':
          contentGarage.classList.add('hidden');
          contentWinners.classList.remove('hidden');
            break;
    }

  }

  function switchToState(newState) {
    let stateStr=newState.pagename;
    location.hash=stateStr;
  }

  function switchToGarage() {
    switchToState( { pagename:'Garage' } );
  }

  function switchToWinners() {
    switchToState( { pagename:'Winners' } );
  }

  switchToStateFromURLHash();

//-------------------- Render cars ---------------------//

const main = document.querySelector('.main');

render();

async function render() {
  let blockCars = '';
  const obj = await getCars();
  obj.data.forEach(el => {
    blockCars += 
            `<div class="block" data-id="${el.id}">
                <div class="block-row-1">
                    <button class="buttonSelect">SELECT</button>
                    <button class="buttonRemove">REMOVE</button>
                    <div>${el.name}</div>
                </div>
                <div class="block-row-2">
                    <button class="button-start-car">A</button>
                    <button class="button-stop-car">B</button>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="70" height="70" viewBox="0 0 256 256" xml:space="preserve">

                      <defs>
                      </defs>
                      <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${el.color}; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                        <circle cx="70.735" cy="56.775" r="1.955" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${el.color}; fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
                        <circle cx="19.765" cy="56.775" r="1.955" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${el.color}; fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
                        <path d="M 75.479 36.045 l -7.987 -1.22 l -2.35 -2.574 c -5.599 -6.132 -13.571 -9.649 -21.874 -9.649 h -6.245 c -1.357 0 -2.696 0.107 -4.016 0.296 c -0.022 0.004 -0.044 0.006 -0.066 0.01 c -7.799 1.133 -14.802 5.468 -19.285 12.106 C 5.706 37.913 0 45.358 0 52.952 c 0 3.254 2.647 5.9 5.9 5.9 h 3.451 c 0.969 4.866 5.269 8.545 10.416 8.545 s 9.447 -3.679 10.416 -8.545 h 30.139 c 0.969 4.866 5.27 8.545 10.416 8.545 s 9.446 -3.679 10.415 -8.545 H 84.1 c 3.254 0 5.9 -2.646 5.9 -5.9 C 90 44.441 83.894 37.331 75.479 36.045 z M 43.269 26.602 c 7.065 0 13.848 2.949 18.676 8.094 H 39.464 l -3.267 -8.068 c 0.275 -0.009 0.55 -0.026 0.826 -0.026 H 43.269 z M 32.08 27.118 l 3.068 7.578 H 18.972 C 22.429 30.813 27.018 28.169 32.08 27.118 z M 19.767 63.397 c -3.652 0 -6.623 -2.971 -6.623 -6.622 c 0 -3.652 2.971 -6.623 6.623 -6.623 s 6.623 2.971 6.623 6.623 C 26.39 60.427 23.419 63.397 19.767 63.397 z M 70.738 63.397 c -3.652 0 -6.623 -2.971 -6.623 -6.622 c 0 -3.652 2.971 -6.623 6.623 -6.623 c 3.651 0 6.622 2.971 6.622 6.623 C 77.36 60.427 74.39 63.397 70.738 63.397 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: ${el.color}; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                      </g>
                      </svg>
                </div>
            </div>
            `
  })
  main.innerHTML = blockCars;
  amountCars.innerText = obj.totalCount
  amountPage.innerText = countPage;
  addListener();
}

//-------------------- Add listener ---------------------//

function addListener() {
  document.querySelectorAll('.buttonSelect').forEach(el => {el.addEventListener('click', selectCarButton)})
  document.querySelectorAll('.buttonRemove').forEach(el => {el.addEventListener('click', removeCarButton)})
  document.querySelectorAll('.button-start-car').forEach(el => {el.addEventListener('click', startCar)});
  // document.querySelectorAll('.button-stop-car').forEach(el => {el.addEventListener('click', stopCar)});
}

//-------------------- Create cars button ---------------------//

let buttonCreate = document.querySelector('.button-create');
let inputCreate = document.querySelector('.input-create');
let colorCreate = document.querySelector('.color-create');
buttonCreate.addEventListener('click', createCarButton);

async function createCarButton() {
  await createCar({
    name: `${inputCreate.value}`,
    color: colorCreate.value,
  });
  render();
  inputCreate.value = '';
}

//-------------------- Select cars button ---------------------//

let inputUpdate = document.querySelector('.input-update');
let buttonUpdate = document.querySelector('.button-update');
let colorUpdate = document.querySelector('.color-update');

let cashSelectCar = {};

async function selectCarButton() {
  let idCar = this.parentNode.parentNode.dataset.id;
  cashSelectCar = await getCar(idCar);
  inputUpdate.value = cashSelectCar.name;
  colorUpdate.value = cashSelectCar.color;
  inputUpdate.disabled = false;
  buttonUpdate.disabled = false;
  colorUpdate.disabled = false;
}

//-------------------- Delete cars button ---------------------//

async function removeCarButton() {
  let idCar = this.parentNode.parentNode.dataset.id;
  await deleteCar(idCar);
  render();
}

//-------------------- Update cars button ---------------------//

buttonUpdate.addEventListener('click', updateCarButton)

async function updateCarButton() {
  if (inputUpdate.value !== '') {
    cashSelectCar.name = inputUpdate.value;
  }
  await updateCar(cashSelectCar.id, {name: inputUpdate.value, color: colorUpdate.value});
  inputUpdate.value = '';
  inputUpdate.disabled = true;
  buttonUpdate.disabled = true;
  colorUpdate.disabled = true;
  render();
}

//-------------------- Generate cars button ---------------------//

let buttonGenerateCars = document.querySelector('.button-generate-cars');
buttonGenerateCars.addEventListener('click', generateCarsButton);

async function generateCarsButton() {
  for (let i = 1; i <= 100; i++) {
      await createCar({
        name: generateCarsName(),
        color: generateRGB()
      });
    }
    render();
}

//-------------------- Generate RGB-colors ---------------------//

function generateRGB() {
  function generateRandomNumberBefore255()  {
    return Math.floor(Math.random() * (255 - 0)) + 0;
  }
  return `rgb(${generateRandomNumberBefore255()}, ${generateRandomNumberBefore255()}, ${generateRandomNumberBefore255()})`;
}

//-------------------- Generate name cars ---------------------//

function generateCarsName() {
  function generateRandomNumberBefore11() {
    return Math.floor(Math.random() * (11 - 0)) + 0;
  }
  return `${hashNameManufacture[generateRandomNumberBefore11()]} ${hashNameModel[generateRandomNumberBefore11()]}`;
}

//-------------------- Navigate button Prev ---------------------//


let amountPage = document.querySelector('.amount-page');
let buttonPrev = document.querySelector('.button-prev');
let buttonNext = document.querySelector('.button-next');
buttonPrev.addEventListener('click', pagePrev);
buttonNext.addEventListener('click', pageNext);

function pagePrev() { 
  countPage--;
  if (countPage < 1 ) {
    countPage = 1;
  }
  render();
}

function pageNext() {
  countPage++;
  render();
}

//-------------------- Start car ---------------------//

async function startCar() {
  let thisStartBut = this;
  thisStartBut.disabled = true;
  let idCar = this.parentNode.parentNode.dataset.id;
  let start = await startStopCarEngine(idCar, "started");
  let speedSec = (start.distance / start.velocity) / 1000;
  let endX = document.documentElement.clientWidth - 150;
  let currentX = 0;
  let elem = this.nextElementSibling.nextElementSibling;
  let idReq = 0;
  let stopBut = this.nextElementSibling;
  stopBut.disabled = false;
  stopBut.addEventListener('click', stopCar);
  requestAnimationFrame(tick);
  let speed = document.documentElement.clientWidth / (speedSec * 60);
  try {
    let statusEngine = await switchCarEngine(idCar, "drive");
    console.log(statusEngine)
    console.log(idCar, 'победитель!')
    showWinner(idCar);
    buttonStopRace.disabled = false;
  } catch {
    cancelAnimationFrame(idReq);
  }
  
  async function stopCar() {
    thisStartBut.disabled = false
    stopBut.disabled = true;
    let stop = await startStopCarEngine(idCar, "stopped");
    cancelAnimationFrame(idReq);
    elem.style.cssText = `transform: translateX(0px)`;
  }

  function tick() {
     elem.style.cssText = `transform: translateX(${currentX}px)`;
    currentX += speed;
    if (currentX <= endX) { 
      idReq = requestAnimationFrame(tick);
    } else {
      cancelAnimationFrame(idReq);
    }
  }
}



//-------------------- Start Race ---------------------//

let buttonStartRace = document.querySelector('.start-race');
buttonStartRace.addEventListener('click', startRace);

function startRace() {
  let arr = document.querySelectorAll('.button-start-car');
  arr.forEach(el => {
    el.click();
  });
  buttonStartRace.disabled = true;
}

//-------------------- Stop Race ---------------------//

let buttonStopRace = document.querySelector('.stop-race');
buttonStopRace.addEventListener('click', stopRace);
buttonStopRace.disabled = true;

function stopRace() {
  let arr = document.querySelectorAll('.button-stop-car');
  arr.forEach(el => {
    el.click();
  })
  buttonStopRace.disabled = true;
  buttonStartRace.disabled = false;
}

//-------------------- Show winner ---------------------//

let isWin = false;
let modalWindow = document.querySelector('.modal-window');
let modalText = document.querySelector('.modal-text');

async function showWinner(id) {
  if (isWin === false) {
    let car = await getCar(id);
    console.log(car)
    modalWindow.style.display='flex';
    modalText.innerText=`Winner: ${car.name}`
  }
  isWin = true;
  
}

//-------------------- Close modal ---------------------//

let buttonModalClose = document.querySelector('.button-modal-close');
buttonModalClose.addEventListener('click', closeModal);

function closeModal() {
  modalWindow.style.display='none';
  isWin = false;
  stopRace();
}

