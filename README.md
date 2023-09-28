# poke-server

Simple backend service application using Node.js and Express.js to serves some functionalities of [poke-app](https://github.com/tbetmen/poke-app) ios application.

## Features

 * REST API `GET /catch` to return probability is 50% when catching Pokemon.
 * REST API `POST /release` to release pokemon. This API should return a random number, if the number returned by the API is not a prime number, then release will fail and vice versa.
 * REST API `POST /rename` to rename pokemon. This function should return a combination of first name (from request body) assigned combined with Fibonacci sequence, e.g.:
 
    * First name assigned is `Mighty Pikachu`, first time renamed should be: `Mighty Pikachu-0`
    * Second time renamed should be: `Mighty Pikachu-1`
    * Third time renamed should be: `Mighty Pikachu-1`
    * Fourth time renamed should be: `Mighty Pikachu-2`, and so on.

## Recording

<video width="700" height="500" src="https://github.com/tbetmen/poke-server/assets/40412728/e5da03bf-5e0f-45be-b80a-54912dee2e63"></video>

## Running Project using npm

    1. npm install

    2. npm start

## Running Project using Docker

    1. docker build -t poke-server .

    2. docker run -p 3000:3000 poke-server

## cURL examples

    1. catch
    curl localhost:3000/catch

    2. release
    curl -X POST localhost:3000/release \
    -H "Content-Type: application/json" \
    -d '{"current_name": "pokename-1"}'

    3. rename
    curl -X POST localhost:3000/rename \
    -H "Content-Type: application/json" \
    -d '{"current_name": "pokename"}'

## Author

Muhammad M. Munir [muhammadmmunir24@gmail.com](mailto:muhammadmmunir24@gmail.com)

## License

**MIT** : http://opensource.org/licenses/MIT