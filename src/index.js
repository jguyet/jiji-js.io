const Jiji = require("jiji-js");

Jiji.DetectChange.interval = 200; // set interval detection of 200 is 100 by default

Jiji.initialize(() => {

    Jiji.Router.initialize([
        { path: "/docs", index: () => require("./docs/docs.index") },
        { path: "/examples", controller: require("./examples/examples.controller") },
        { path: "/", controller: require("./home/home.controller") }
    ]);

    Jiji.Router.route();
});

Jiji.globals.myFunction = () => { // add global function example
    var x = document.getElementById("navDemo");
    x.classList.toggle("w3-show");
};

Jiji.globals.isActiveUrl = (element) => { // add global function example
    if (Jiji.Router.getCurrentPage() == element.pathname) {
        element.classList.add("w3-orange");
    } else {
        element.classList.remove("w3-orange");
    }
};

Jiji.globals.ActiveByUrlContainsWord = (element, word) => { // add global function example
    if (Jiji.Router.getCurrentPage().includes(word)) {
        element.classList.add("w3-orange");
    } else {
        element.classList.remove("w3-orange");
    }
};