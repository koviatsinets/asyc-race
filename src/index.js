import { doc } from "prettier";
import { getCars, getCar, createCar, deleteCar, updateCar, startStopCarEngine } from "./components/api"
import './global.css';

// import { getCars } from "./components/api";

// fetch('http://127.0.0.1:3000/garage').then((res) => {
//   console.log(res.json());
// });
// getCars().then(res => console.log(res));
// deleteCar(1).then(res => console.log(res))
// getCar(1);
// updateCar(1, {
//   name: 'Tesla',
//   color: '#000000'
// })

// let res = getCars().then(res => console.log(res));
// console.log(res);
// startStopCarEngine(2, "started").then(res => console.log(res))
// await getCars()
// console.log(obj)


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
// (async () => {
//   const obj = await getCars();
//   return obj
// })()

// console.log(obj)

render();

async function render() {
  let blockCars = '';
  const obj = await getCars();
  console.log(obj)
  obj.forEach(el => {
    blockCars += 
            `<div class="block" data-id="${el.id}">
                <div class="block-row-1">
                    <button class="buttonSelect">SELECT</button>
                    <button class="buttonRemove">REMOVE</button>
                    <div>${el.name}</div>
                </div>
                <div class="block-row-2">
                    <button>A</button>
                    <button>B</button>
                    <div class="car-img" style="background-color: ${el.color};"></div>
                </div>
            </div>
            `
  })
  main.innerHTML = blockCars;
  amountCars.innerText = obj.length
  addListener();
}

//-------------------- Add listener ---------------------//

function addListener() {
  document.querySelectorAll('.buttonSelect').forEach(el => {el.addEventListener('click', selectCarButton)})
  document.querySelectorAll('.buttonRemove').forEach(el => {el.addEventListener('click', removeCarButton)})
}
//-------------------- Create cars button ---------------------//

let buttonCreate = document.querySelector('.button-create');
let inputCreate = document.querySelector('.input-create');
buttonCreate.addEventListener('click', createCarButton);

async function createCarButton() {
  await createCar({
    name: `${inputCreate.value}`,
    color: '#89ff00'
  });
  render();
  inputCreate.value = '';
}

//-------------------- Select cars button ---------------------//

function selectCarButton(EO) {
  console.log(EO)
}

//-------------------- Delete cars button ---------------------//

async function removeCarButton() {
 let idCar = this.parentNode.parentNode.dataset.id;
 await deleteCar(idCar);
 render();
}
