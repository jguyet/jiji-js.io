## Indexs

### An index is a declaration area for your controllers

![](/public/index.png)

The indexes are the parking lot with controllers

In all Jiji-js projects you have an main index named `main.index.js`.
The main index are always placed in src folder

### Two way :

#### Main Index struct

path `src/main.index.js`
````js
const Jiji = require("jiji-js");

Jiji.initialize(() => {

    Jiji.Router.initialize([
        { path: "/docs", index: () => require("./docs/docs.index") }, // call custom index
        { path: "/examples", controller: require("./examples/examples.controller") },
        { path: "/", controller: require("./home/home.controller") }
    ]);

    Jiji.Router.route();
});
````

#### Custom Index struct

path `src/docs/docs.index.js`
````js
module.exports = [
    {
        path: "/getting-started",
        controller: require("./getting-started/getting-started.controller")
    },
    {
        path: "/contributors",
        controller: require("./contributors/contributors.controller")
    },
    {
        path: "/",
        redirect: "/docs/getting-started" // redirection
    }
];
````

The first example 