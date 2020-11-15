const Jiji = require("jiji-js");

module.exports = {
    title: "example",
    constructor: function (callback) {
        console.log("construct");
        callback();
    },
    mounted: function () {
        console.log("mounted");
    },
    destroy: function () {
        console.log("destroy");
    },
    innerHTML: require("./examples.html")
};
