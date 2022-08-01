export async function getCars() {
  const response = await fetch('http://127.0.0.1:3000/garage');
  const data = await response.json();
  return data;
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