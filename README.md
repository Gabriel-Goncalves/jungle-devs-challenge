# Jungle Devs - Challenge #001

## Link for application deployed

This application was deployed using the [heroku](https://www.heroku.com/) platform

<a href="https://gabriel-jungle-devs-challenge.herokuapp.com/" target="_blank">Click here</a> to access the application deployed

## Description

The purpose of this challenge is to give a general idea of how React works and how you can use it to create simple reactive applications. Has been implemented a simplified version of Hapu’s ‘Become a Nanny Share Host’ view. The concepts applied were:

- JSX;
- Components, props and state;
- Lifecycle Methods;
- Responsive design with CSS media-queries;
- API calls;
- Error handling;
- Loading states;
- SEO & accessibility;
- A/B tests;
- Production builds.

___

## How to run the application in development mode without Docker

Considering that you have Node.js installed, to run this application you need to follow these steps:

- Clone this repository 

- In the project root, run this command to install all dependencies:
```shell
npm install
```

- After all dependencies it's already installed, run the command:

```shell
npm start
```

- Wait the execution and you already can access the application in the link and port specified.
___

## How to run the application in development mode with Docker

- Considering that you have docker installed and running, to run this application  with docker you need to follow these steps:

- Pull the image from docker hub with the command:
```shell
docker pull gabriel2898/challenge-jungle-devs
```

- After pull the image run the command, make sure that your port 3000 is available or change both 3000 for the port you prefer:
```shell
docker run -d -p 3000:3000 gabriel2898/challenge-jungle-devs
```
___

## How to create production builds

After clone this repository in the root folder, run the command:

```shell
npm run build
```

```npm run build``` Creates a build directory with a production build of your app. Inside the build/static directory will be your JavaScript and CSS files. Each filename inside of build/static will contain a unique hash of the file contents. [Source](https://create-react-app.dev/docs/production-build/)

___

## How to run the tests

After clone this repository in the root folder, run the command:

```shell
npm run test
```
___