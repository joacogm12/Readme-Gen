//packages
const inquirer = require('inquirer');
const fs = require('fs');

//ReadmeGen class
const ReadmeGen = require('./lib/ReadmeGen');

//app questions
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Project title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project description:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instruction:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Project usage:',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'credits:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'For question(email):',
    },
    {
        type: 'input',
        name: 'github',
        message: 'For question(github):',
    },
    {
        type: 'list',
        name: 'license',
        message: 'License?',
        choices: ["MIT", "ISC", "GNUPLv3", "noLicense"],
        filter(val) {
            return val.toLowerCase();
        }
    }
]).then((answers) => {
    //write file READNE.md getting the data from the method generateReadMe
    fs.writeFile('readmefile/Readme.md', ReadmeGen.generateReadMe(answers), function (err) {
        if (err) {
            console.log('could not save file', err);
        } else {
            console.log('Succes: new README.md file generated inside the current folder');
        }
    })
})