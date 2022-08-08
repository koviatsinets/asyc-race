import { buttonStartRace, buttonStopRace, isWin } from "./index"

//-------------------- Start Race ---------------------//

export function startRace() {
    let arr = document.querySelectorAll('.button-start-car');
    arr.forEach(el => {
      (el as HTMLElement).click();
    });
    buttonStartRace.disabled = true;
    isWin.state = false;
  }

  //-------------------- Stop Race ---------------------//

 export function stopRace() {
    let arr = document.querySelectorAll('.button-stop-car');
    arr.forEach(el => {
      (el as HTMLElement).click();
    })
    buttonStopRace.disabled = true;
    buttonStartRace.disabled = false;
  }