# Jiji.io
[Jiji.io](http://jiji-js.io) is site for Jiji documentation.

## Requirements
`node >= v10.19.0` 
`npm cli >= 6.13.4` 
(Temporarly need (rm, cp, mkdir) command lines)

## Development Setup

##### Sample file structuration :

````shell
src/
index.html
main.js
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
main.js file are the main of your application

````js
const Jiji = require("jiji-js");
Jiji.initialize("browser", () => {/** code */});
````

##### Sample Routing structuration :

main.js
````js
const Jiji = require("jiji-js");
Jiji.initialize("browser", () => {
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

Work in progress

## Build application

````shell
$ npm run compile
````

## Issues
Please drop file Developer Guide, Cookbook, and code sample issues only in this [Jiji.io](https://github.com/jguyet/jiji.io/issues) github repo.

Technical questions concerning Jiji-js itself belong in the [jiji-js source code](https://github.com/jguyet/jiji-io/) github repo.

## License
MIT License
