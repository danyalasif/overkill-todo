# Introduction

A simple todo app that's using libraries and techniques that are way too overkill for such a small app, in fact, it's such a small thing that it can't even be called an app. But since I am out of ideas and overkilling is better than overthinking, I'm doing this. YARP!

## Using

* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Redux-Saga](https://github.com/redux-saga/redux-saga)
* [Styled-Components](https://www.styled-components.com/docs)
* [Docker](https://docs.docker.com/)
* [Jest](https://jestjs.io/docs/en/getting-started.html) (Maybe!)
* [OpenCV](https://opencv.org/)


## Roadmap

* Basic Todo Listing
  * CRUD Operations
* Redux integration
* Firebase integration
* Redux Saga integration
* Docker setup
* Kubernetes setup
* Upload Images and Videos
* OpenCV for facial recognition and creating tags of people faces so if the same person is added next time it's recognized


## Setup and Run
* Install yarn/npm
* Do `yarn start` or `npm start`
* Enjoy

OR

* Install and run docker service
* Build the docker image: `docker build ./ --tag=overkill-todo`
* Run the image: `docker run -p 3000:8080 overkill-todo`
* Access it from `localhost:3000`







This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
