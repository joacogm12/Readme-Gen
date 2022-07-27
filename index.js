const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
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
]

async function runQuery() {
    return inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers);
            return answers
        })
        .catch((error) => {
            console.log(error)
        })
}

runQuery();