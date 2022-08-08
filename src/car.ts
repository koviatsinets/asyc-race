
import { createCar, getCar, deleteCar, updateCar, startStopCarEngine, switchCarEngine, createWinner, deleteWinner } from "./api";
import { inputCreate, colorCreate, inputUpdate, buttonUpdate, colorUpdate, cashSelectCar, isWin, buttonStopRace } from "./index";
import { showWinner, generateCarsName, generateRGB } from "./utils"
import { renderWinners } from "./ui";
import { render } from "./ui";

//-------------------- Create cars button ---------------------//

export async function createCarButton() {
  await createCar({
    name: `${inputCreate.value}`,
    color: colorCreate.value,
  });
  render();
  inputCreate.value = '';
}

//-------------------- Select cars button ---------------------//

export async function selectCarButton(this: HTMLElement) {
    let idCar = Number(((this.parentNode as HTMLElement).parentNode as HTMLElement).dataset.id);
    let cash = await getCar(idCar);
    cashSelectCar.name = cash.name;
    cashSelectCar.color = cash.color;
    cashSelectCar.id = cash.id
    inputUpdate.value = cashSelectCar.name;
    colorUpdate.value = cashSelectCar.color;
    inputUpdate.disabled = false;
    buttonUpdate.disabled = false;
    colorUpdate.disabled = false;
  }

//-------------------- Delete cars button ---------------------//

export async function removeCarButton(this: HTMLElement) {
    let idCar = Number(((this.parentNode as HTMLElement).parentNode as HTMLElement).dataset.id);
    await deleteCar(idCar);
    render();
    await deleteWinner(idCar);
  }
  
  //-------------------- Update cars button ---------------------//



export async function updateCarButton() {
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

let buttonGenerateCars = document.querySelector('.button-generate-cars') as HTMLInputElement;
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

//-------------------- Start car ---------------------//

export async function startCar(this: HTMLInputElement) {
    let thisStartBut = this;
    thisStartBut.disabled = true;
    let idCar = Number(((this.parentNode as HTMLElement).parentNode as HTMLElement).dataset.id);
    let start = await startStopCarEngine(idCar, "started");
    let speedSec = (start.distance / start.velocity) / 1000;
    let endX = document.documentElement.clientWidth - 150;
    let currentX = 0;
    let elem = (this.nextElementSibling as HTMLElement).nextElementSibling as HTMLElement;
    let idReq = 0;
    let stopBut = this.nextElementSibling as HTMLInputElement;
    stopBut.disabled = false;
    stopBut.addEventListener('click', stopCar);
    requestAnimationFrame(tick);
    let speed = document.documentElement.clientWidth / (speedSec * 60);
    try {
      let statusEngine = await switchCarEngine(idCar, "drive");
      if (isWin.state === false) {
        createWinner({
          id: Number(idCar),
          wins: Number(1),
          time: Number(speedSec.toFixed(1))
        })
      }
      showWinner(idCar);
      renderWinners();
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
  