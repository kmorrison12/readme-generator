// TODO: Include packages needed for this application
const fs = require(`fs`)
const inquirer = require(`inquirer`)

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project.'
    },
    {
        type: 'input',
        name: 'contents',
        message: "Provide your project's Table of Contents."
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Are there any installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: "Describe your project's usage."
    },
    {
        type: 'input',
        name: 'license',
        message: 'Enter License Information.'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Are there any tests?'
    },
    // "Project Title",
    // "Projection decsiption",
    // "Table of Contents",
    // "Installation insctructions",
    // "Project usage",
    // "License information",
    // "Contributors",
    // "Tests",
    // "Questions"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("Your README.md file has been generated")
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        console.log()
    })
}

// Function call to initialize app
init();
