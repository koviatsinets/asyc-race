//-------------------- SPA ---------------------//

export function switchToStateFromURLHash() {
	let SPAState={};
	let contentGarage = document.querySelector('.content-garage');
	let contentWinners = document.querySelector('.content-winners');
  let URLHash=window.location.hash;
  let stateStr=URLHash.substring(1);
  if ( stateStr!="" ) {
    let parts=stateStr.split("_")
    SPAState = {pagename: parts[0]};
  } else
    SPAState = {pagename:'Garage'};
	switch (SPAState.pagename) {
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

export function switchToState(newState) {
 	let stateStr=newState.pagename;
  location.hash=stateStr;
}

export function switchToGarage() {
  switchToState({pagename:'Garage'});
}

export function switchToWinners() {
  switchToState({pagename:'Winners'});
}
