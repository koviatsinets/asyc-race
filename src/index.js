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
// createCar({
//   name: 'AUDI',
// })
// getCars().then(res => console.log(res));
// startStopCarEngine(2, "started").then(res => console.log(res))
// await getCars()
// console.log(obj)
let buttonToGarage = document.querySelector('.buttonToGarage');
buttonToGarage.addEventListener('click', switchToGarage);
let buttonToWinners = document.querySelector('.buttonToWinners');
buttonToWinners.addEventListener('click', switchToWinners);
let contentGarage = document.querySelector('.content-garage');
let contentWinners = document.querySelector('.content-winners');

//-------------------- SPA ---------------------//
window.location.hash='Garage'
window.onhashchange=switchToStateFromURLHash;
  let SPAState={};

function switchToStateFromURLHash() {
    let URLHash=window.location.hash;
    console.log(URLHash)
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



