// fetch('http://127.0.0.1:3000/garage').then((res) => {
//   console.log(res.json());
// });
getCars().then(res => console.log(res));
deleteCar(1).then(res => console.log(res))
// getCar(1);
// updateCar(1, {
//   name: 'Tesla',
//   color: '#000000'
// })
// createCar({
//   name: 'AUDI',
// })
getCars().then(res => console.log(res));
// startStopCarEngine(2, "started").then(res => console.log(res))


async function getCars() {
  const response = await fetch('http://127.0.0.1:3000/garage');
  const data = await response.json();
  return data;
}

async function getCar(id) {
  const response = await fetch(`http://127.0.0.1:3000/garage/${id}`);
  const data = await response.json();
  return data;
}

async function createCar(body) {
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

async function deleteCar(id) {
  const response = await fetch(`http://127.0.0.1:3000/garage/${id}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  return data;
}

async function updateCar(id, body) {
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

async function startStopCarEngine(id, status) {
  const response = await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=${status}`, {
    method: 'PATCH',
  });
  const car = await response.json();
  return car;
}