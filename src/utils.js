import { selectCarButton, startCar, removeCarButton } from "./car"
import { getCar } from "./api"
import { isWin, modalText, modalWindow } from "./index"
import { render } from "./ui"
import { countPage } from "./index";
import { stopRace } from "./race"

//-------------------- Generate RGB-colors ---------------------//

export function generateRGB() {
    function generateRandomNumberBefore255()  {
      return Math.floor(Math.random() * (255 - 0)) + 0;
    }
    return `rgb(${generateRandomNumberBefore255()}, ${generateRandomNumberBefore255()}, ${generateRandomNumberBefore255()})`;
  }

//-------------------- Generate name cars ---------------------//

export function generateCarsName() {
    let hashNameManufacture = ['Audi', 'BMW', 'Volkswagen', 'Mercedes', 'Porshe', 'Opel', 'Ferrari', 'Bugatti', 'Fiat', 'Lanica', 'Alfa-Romeo'] 
    let hashNameModel = ['A6', 'Polo', 'S-classe', '911', '3-series', 'Vectra', 'Rome', 'Veyron', '500', 'Dedra', 'Giulia'];
    function generateRandomNumberBefore11() {
      return Math.floor(Math.random() * (11 - 0)) + 0;
    }
    return `${hashNameManufacture[generateRandomNumberBefore11()]} ${hashNameModel[generateRandomNumberBefore11()]}`;
  }

//-------------------- Add listener ---------------------//

export function addListener() {
    document.querySelectorAll('.buttonSelect').forEach(el => {el.addEventListener('click', selectCarButton)})
    document.querySelectorAll('.buttonRemove').forEach(el => {el.addEventListener('click', removeCarButton)})
    document.querySelectorAll('.button-start-car').forEach(el => {el.addEventListener('click', startCar)});
  }

//-------------------- Show modal ---------------------//

export async function showWinner(id) {
    if (isWin.state === false) {
      let car = await getCar(id);
      modalWindow.style.display='flex';
      modalText.innerText=`Winner: ${car.name}`
      isWin.state = true;
    }
  }
  
//-------------------- Close modal ---------------------//

export function closeModal() {
    modalWindow.style.display='none';
    stopRace();
  }

//-------------------- Navigate button Prev and Next ---------------------//

export function pagePrev() { 
  countPage.page = countPage.page - 1;
  if (countPage.page < 1 ) {
    countPage.page = 1;
  }
  render();
}

export function pageNext() {
  countPage.page = countPage.page + 1;
  render();
}
