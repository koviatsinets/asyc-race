import { countPage } from "./index";

export async function getCars() {
  let limitItemsOnPage = 7;
  const response = await fetch(`http://127.0.0.1:3000/garage/?_page=${countPage.page}&_limit=${limitItemsOnPage}`);
  const totalCount = await response.headers.get('X-Total-Count');
  const data = await response.json();
  return {data, totalCount};
}

export async function getCar(id: number) {
  const response = await fetch(`http://127.0.0.1:3000/garage/${id}`);
  const data = await response.json();
  return data;
}

export async function createCar(body: { name: string; color: string; }) {
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

export async function deleteCar(id: number) {
  const response = await fetch(`http://127.0.0.1:3000/garage/${id}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  return data;
}

export async function updateCar(id: number, body: { name: string; color: string; }) {
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

export async function startStopCarEngine(id: number, status: string) {
  const response = await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=${status}`, {
    method: 'PATCH',
  });
  const car = await response.json();
  return car;
}

export async function switchCarEngine(id: number, status: string) {
    const response = await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=${status}`, {
      method: 'PATCH',
    });
    const car = await response.json();
    return car;
  }

  export async function getWinners() {
  const response = await fetch(`http://127.0.0.1:3000/winners`);
  const data = await response.json();
  return data;
}

export async function getWinner(id: number) {
  const response = await fetch(`http://127.0.0.1:3000/winners/${id}`);
  const data = await response.json();
  return data;
}

export async function createWinner(body: { id: number; wins: number; time: number; }) {
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

export async function deleteWinner(id: number) {
  const response = await fetch(`http://127.0.0.1:3000/winners/${id}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  return data;
}

export async function updateWinner(id: number, body: any) {
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