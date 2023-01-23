// TODO: Include packages needed for this application
const fs = require(`fs`)
const inquirer = require(`inquirer`);
const generateMarkdown = require("./utils/generateMarkdown");

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
        name: 'installation',
        message: 'What are the steps required to install your project? '
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for your projects use.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select License Information.',
        choices: ["MIT_License", "Boost_Software_License", "Eclipse_Public_License_2.0", "GNU_GPL_v3.0", "GNU_AGPL_v3.0", "Mozilla_Public_License_2.0", "The_Unlicense", "No license"]
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can others contribute to this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Are there any tests for your application? If so, how do you run them?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    }
];

// TODO: Create a function to write README file
const writeFile = data => {
    fs.writeFile('generatedREADME.md', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log(" ")
            console.log("Your README has been generated!")
        }
    })}; 


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        return generateMarkdown(answers);
    })
    .then(data => {
        return writeFile(data);
    })
    .catch(err => {
        console.log(err)
    })
};

init()
