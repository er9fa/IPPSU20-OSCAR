# Satellite tracker

Satellite tracker is a Node.js app using [Express 4](http://expressjs.com/) and JavaScript templating engine [EJS](https://ejs.co/).


This website allows a user to specify a location by coordinates, address, or pin on an embedded Goole Map. The user will also select a satellite at the top of the application. Once both are selected and the compute button is pressed, the application will present the user with information about the satellites whereabouts, whether the user could see it from the specified location or not, and if the satellite will be within view of the specified location within the next 24 hours. History is recorded and displayed, but not saved.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed. Permission is required to alter this repository.

```sh
$ git clone https://github.com/er9fa/IPPSU20-OSCAR # or clone your own fork
$ cd node-js-getting-started
$ npm install
$ npm start
```
Your app should now be running on [localhost:5000](http://localhost:5000/).
