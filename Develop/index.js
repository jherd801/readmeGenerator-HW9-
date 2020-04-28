const inquirer = require("inquirer");
const fs = require("fs");
// const axios = require("axios");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// Command line questions to build readme content from user responses
function promptUser() {
    return inquirer.prompt([
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
]);
};

// .then(function(data) {

//     let gitHubUsername = data.username;

//     const queryUrl = `https://api.github.com/users/${gitHubUsername}`;

//     axios.get(queryUrl).then(function(res) {

//       const avatarURL = res.data.avatar_url;

//       console.log(avatarURL);
//   });

//   return data;
  
// })


// Function to input user responses into structured markdown file
function generateMarkdown(answers) {
    return `
    # Project Title: ${answers.title}

    ## Project Description:
    ${answers.description}

    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributors](#contributors)
    * [License](#license)
    
    ## Installation
    ${answers.installation}

    ## Usage
    ${answers.usage}

    ## Contributors
    ${answers.contributors}

    ## License
    ${answers.license}


    ## Github Information
    * [Username](#username)
    * https://avatars2.githubusercontent.com/u/60113759?s=460&u=520757564a6f39cd937d3c631712a52e94eb9f9f&v=4
    `
};

promptUser()
.then(function(answers) {
    const markdown = generateMarkdown(answers);

    return writeFileAsync("README.md", markdown);
})
.then(function() {
})
.catch(function(err) {
});