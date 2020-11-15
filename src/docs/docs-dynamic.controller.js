const Jiji = require("jiji-js");
const HttpClient = require("jiji-http-client");

module.exports = (markDownFilePath, controllerTitle) => {
    return {
        title: controllerTitle,
        dynamicalContent: "",
        constructor: function (callback) {
            console.log("construct");
            const controller = this;
            
            HttpClient.get({ url: `/public/${markDownFilePath}`, headers: { "Content-Type": "text/plain" }}, [
                (markdownContent) => {
                    const md = new Remarkable({
                        // Modify the generated HTML by highlighting the code directly
                        highlight: function (str, lang) {
                            if (lang && hljs.getLanguage(lang)) {
                                try {
                                    return hljs.highlight(lang, str).value;
                                } catch (err) {}
                            }
                    
                            try {
                                return hljs.highlightAuto(str).value;
                            } catch (err) {}
                            return ''; // use external default escaping
                        }
                    });
                    controller.dynamicalContent = md.render(markdownContent);
                    callback();
                },
                (err) => {
                    callback();
                }
            ]);
        },
        mounted: function () {
            console.log("mounted");
        },
        destroy: function () {
            console.log("destroy");
        },
        innerHTML: `${require('./left-nav-bar/left-navbar.html')}<div class="app-container">{{ this.dynamicalContent }}</div>`
    };
};