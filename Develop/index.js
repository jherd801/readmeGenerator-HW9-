const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");


// Command line questions to build readme content from user responses
inquirer.prompt([
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
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
        name: "installation",
        message: "Please describe how this software should be installed"
    },
    {
        type: "input",
        name: "usage",
        message: "How is your app supposed to be used?"
    },
    {
        type: "input",
        name: "contributors",
        message: "Did any other developers contribute to this project?"
    },
    {
        type: "checkbox",
        name: "license",
        message: "What sort of license would you like to select with this project?",
        choices: [
            "Apache 2.0",
            "BSD 3.0",
            "GPLv2",
            "GPLv3",
            "ISC",
            "MIT",
            "None"
        ]
    },
]).then(function(data) {

    let gitHubUsername = data.username;

    const queryUrl = `https://api.github.com/users/${gitHubUsername}`;

    axios.get(queryUrl).then(function(res) {

      const avatarURL = res.data.avatar_url;

      console.log(avatarURL);
  });
});
  
//   .then(function(data) {

//     var fileName = data.title.toLowerCase().split(' ').join('') + ".md";

//     fs.writeFile(fileName, JSON.stringify(data, null, '\t'), function(err) {

//         if (err) {
//             return console.log(err);
//         }
//     });

//     var username = data.username;
//     console.log(username);
// });


// Function to input user responses into structured markdown file
// function generateMarkdown(data) {
//     `
//     # Project Title: ${data.title}

//     ## Project Description:
//     ${data.description}

//     ## Table of Contents
//     * [Installation](#installation)
//     * [Usage](#usage)
//     * [Contributors](#contributors)
//     * [License](#license)
    
//     ## Installation
//     ${data.installation}

//     ## Usage
//     ${data.usage}

//     ## Contributors
//     ${data.contributors}

//     ## License
//     ${data.license}


//     ## Github Information
//     * [Username](#username)
//     * https://avatars2.githubusercontent.com/u/60113759?s=460&u=520757564a6f39cd937d3c631712a52e94eb9f9f&v=4
//     `
// };

// generateMarkdown();


// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
