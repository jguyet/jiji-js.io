module.exports = [{
        path: "/event-methods",
        controller: require("./docs-dynamic.controller")("docs/event-methods.md", "event-methods")
    },
    {
        path: "/contributors",
        controller: require("./docs-dynamic.controller")("docs/contributors.md", "contributors")
    },
    {
        path: "/history",
        controller: require("./docs-dynamic.controller")("docs/history.md", "history")
    },
    {
        path: "/globals",
        controller: require("./docs-dynamic.controller")("docs/globals.md", "globals")
    },
    {
        path: "/databinding",
        controller: require("./docs-dynamic.controller")("docs/databinding.md", "databinding")
    },
    {
        path: "/controllers",
        controller: require("./docs-dynamic.controller")("docs/controllers.md", "controllers")
    },
    {
        path: "/indexs",
        controller: require("./docs-dynamic.controller")("docs/indexs.md", "indexs")
    },
    {
        path: "/getting-started",
        controller: require("./docs-dynamic.controller")("docs/getting-started.md", "getting-started")
    },
    {
        path: "/",
        redirect: "/docs/getting-started"
    }
];