import { countPage } from "../index";

export async function getCars() {
    let limit = 7;
  const response = await fetch(`http://127.0.0.1:3000/garage/?_page=${countPage}&_limit=${limit}`);
  const totalCount = await response.headers.get('X-Total-Count');
  const data = await response.json();
  return {data, totalCount};
}

export async function getCar(id) {
  const response = await fetch(`http://127.0.0.1:3000/garage/${id}`);
  const data = await response.json();
  return data;
}

export async function createCar(body) {
  const response = await fetch(`http://127.0.0.1:3000/garage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  const car = await response.json();
  return car;
}

export async function deleteCar(id) {
  const response = await fetch(`http://127.0.0.1:3000/garage/${id}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  return data;
}

export async function updateCar(id, body) {
  const response = await fetch(`http://127.0.0.1:3000/garage/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  const car = await response.json();
  return car;
}

export async function startStopCarEngine(id, status) {
  const response = await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=${status}`, {
    method: 'PATCH',
  });
  const car = await response.json();
  return car;
}

export async function switchCarEngine(id, status) {
    const response = await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=${status}`, {
      method: 'PATCH',
    });
    const car = await response.json();
    return car;
  }

  export async function getWinners() {
    let limit = 10;
  const response = await fetch(`http://127.0.0.1:3000/winners`);
  console.log(response)
//   const totalCount = await response.headers.get('X-Total-Count');
  const data = await response.json();
  return data;
}

export async function getWinner(id) {
  const response = await fetch(`http://127.0.0.1:3000/winners/${id}`);
  const data = await response.json();
  return data;
}

export async function createWinner(body) {
    const response = await fetch(`http://127.0.0.1:3000/winners`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    const data = await response.json();
    return data;
  }



  export async function deleteWinner(id) {
    const response = await fetch(`http://127.0.0.1:3000/winners/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  }

  export async function updateWinner(id, body) {
    const response = await fetch(`http://127.0.0.1:3000/winners/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    const data = await response.json();
    return data;
  }