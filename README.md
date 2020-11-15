<h1 align="center">Jiji-js.io</h1>

<p align="center">
  <img src="https://github.com/jguyet/jiji-framework-syntax-vsce/raw/master/docs/jiji-framework-logo.png" width="120px" height="120px"/>
  <br>
  <i>Jiji-js.io is a desktop web applications for expose documentation
    <br> of Jiji-js Framework
    <br> writed with Jiji-js Framework</i>
  <br>
  <a href="https://jiji-js.io">Live Jiji.io</a>
</p>

<p align="center">
<a href="https://travis-ci.com/github/jguyet/jiji-js.io">
<img src="https://travis-ci.com/jguyet/jiji-js.io.svg">
</a>&nbsp;
<a href="https://tldrlegal.com/license/mit-license">
<img src="https://img.shields.io/npm/l/express.svg">
</a>
</p>

## Requirements
`node >= v10.19.0` 
`npm cli >= 6.13.4`
`jiji-cli >= 0.0.20` (`npm install -g jiji-cli`)

## Development Setup

##### Sample file structuration :

````shell
src/
src/index.html
src/main.index.js
````
In src directory you are free to manage your js controllers and other js files.

index.html file are the single page of your application projet

````html
<!DOCTYPE html>
<html>
    <head>
        <script src="./index.js"></script>
    </head>
    <body>
        <div class="router"></div>
    </body>
</html>
````
main.index.js file are the main of your application

````js
const Jiji = require("jiji-js");
Jiji.initialize(() => {/** code */});
````

##### Sample Routing structuration :

main.js
````js
const Jiji = require("jiji-js");
Jiji.initialize(() => {
    Jiji.Router.init([
        /** array of controller objects */
    ]);
    Jiji.Router.route();// apply default route "/" by map provided in array at init Router
});
````

Controller provided in Router.init example Hello World :
````js
...
Jiji.Router.init([
    {
        path: "/",
        controller: {
            constructor: (controller, callback) => {
                callback();// call the callback to signal that your load is complete
            },
            destroy: (controller) => {
                console.log('destroyed called');
            },
            innerHTML: `<div>Hello World</div>`
        }
    }
]);
...
````

## Debug

````shell
ji debug
````

go to http://localhost:8080
<img src="https://github.com/jguyet/jiji-ji.io/raw/master/img/captured-jiji-min.gif"/>


## Build application

````shell
ji build
````

## Issues
Please drop file Developer Guide, Cookbook, and code sample issues only in this [Jiji.io](https://github.com/jguyet/jiji.io/issues) github repo.

Technical questions concerning Jiji-js itself belong in the [jiji-js source code](https://github.com/jguyet/jiji-io/) github repo.

## License
MIT License
