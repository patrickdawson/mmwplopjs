"use strict";

module.exports = (plop) => {
    plop.setGenerator("module", {
        description: "Create a new module with tests",

        // inquirer prompts
        prompts: [
            {
                type: "input",
                name: "name",
                message: "Module name?",
            },
        ],

        // actions to perform
        actions: [
            {
                type: "add",
                path: "src/{{camelCase name}}.js",
                templateFile: "templates/module.hbs",
            },
            {
                type: "add",
                path: "test/{{name}}.spec.js",
                templateFile: "templates/module.spec.hbs",
            },
        ],
    });

    plop.setGenerator("module (no test)", {
        description: "Create a new module without tests",

        // inquirer prompts
        prompts: [
            {
                type: "input",
                name: "name",
                message: "Module name?",
            },
        ],

        // actions to perform
        actions: [
            {
                type: "add",
                path: "src/{{camelCase name}}.js",
                templateFile: "templates/module.hbs",
            },
        ],
    });
};
