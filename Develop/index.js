const inquirer = require("inquirer");
const fs = require("fs");
const questions = ["Here's a question", "Here's another question"

];

console.log(questions);

// Command line questions
inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is your project called?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description of your project"
    },
    {
        type: "input",
        name: "table of contents",
        message: "Please enter a table of contents to describe your project's structure"
    }
]).then(function(data) {

    var fileName = data.title.toLowerCase().split(' ').join('') + ".json";

    fs.writeFile(fileName, JSON.stringify(data, null, '\t'), function(err) {

        if (err) {
            return console.log(err);
        }

        console.log("Success!");
    });
});



// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
