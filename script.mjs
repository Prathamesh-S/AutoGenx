import fetch from 'node-fetch';
fetch('https://private-0c7bf5-carsapi1.apiary-mock.com/cars/<car_id>')
.then(res => res.json())
.then(data=> console.log(data))