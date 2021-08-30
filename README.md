# Jungle Devs - Challenge #001

## Link for application deployed

This application was deployed using the [heroku](https://www.heroku.com/) platform

[Click here](https://gabriel-jungle-devs-challenge.herokuapp.com/) to access the aplication

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

Considering that you have Node.js installed, to run this application you need to follow this steps:

- Clone this repository 

- In the project root run this comand to install all dependencies:
```shell
npm install
```

- After all dependencies it's already installed run the comand:

```shell
npm start
```

- Wait the execution and you already can access the application in the link and port specified.
___

## How to run the application in development mode with Docker

___

## How to create production builds

After clone this repository in the root folder run the comand:

```shell
npm run build
```

```npm run build``` creates a build directory with a production build of your app. Inside the build/static directory will be your JavaScript and CSS files. Each filename inside of build/static will contain a unique hash of the file contents. [source](https://create-react-app.dev/docs/production-build/)

___

## How to run the tests

After clone this repository in the root folder run the comand:

```shell
npm run test
```
___