# Getting Started

Head on to [https://manjoy.in](https://manjoy.in) to see it live.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and Dockerized.

[![Build](https://github.com/manjoybera/manjoy.in/actions/workflows/build.yml/badge.svg)](https://github.com/manjoybera/manjoy.in/actions/workflows/build.yml)

## Available Scripts
This project can run with Docker. The Image uses NODE to build the app and NGINX to serve the webpage

### `docker build -t manjoy.in .`

Builds the Docker image as per `Dockerfile`

### `docker run --rm -it -p 8080:80 manjoy.in`

Runs a Docker container with host port 8080 pointed to docker 80.
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.


For Development you can run

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
