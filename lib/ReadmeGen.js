class ReadmeGen {

    //render license badge at the top of the readme
    static renderLicenseBadge(license) {
        const badges = {
            mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)',
            isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
            gnuplv3: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://gnu.org/licenses/lgpl-3.0)',
            nolicense: ''
        }
        return badges[license]
    }

    //render the license link 
    static renderLicenseLink(license) {
        const licenseLink = {
            mit: '[MIT](https://chooseaLicense.com/licenses/mit/)',
            isc: '[ISC](https://chooseaLicense.com/licenses/isc/)',
            gnuplv3: '[GNUGPLv3](https://chooseaLicense.com/licenses/gpl-3.0/)',
            nolicense: ''
        }
        return licenseLink[license]
    }

    //validation to check if there is a license 
    static renderLicenseSection(license) {
        if (license === "nolicense") {
            return ''
        } else {
            if (license) {
                return `
## License
Licensed under the ${this.renderLicenseLink(license)} license
`
            }
            else {
                return ''
            }
        }

    }

    //render the arrey as a list 
    static listArray(contribution) {
        const names = contribution.split(',');
        let aux = `${names[0]}`;
        if (names.length > 0) {
            for (let i = 1; i < names.length; i++) {
                let myString = `
- ${aux}
- ${names[i]}`
                aux = myString;
            }
            aux = aux.slice(3 * names.length - 5)
        }
        return aux
    }

    //put together all the parts to make the readme.file
    static generateReadMe(answers) {
        return `
# ${answers.title}

${this.renderLicenseBadge(answers.license)}

## Table of Content
- [Project Content](#Description)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Installation](#Instalation)
- [Question](#Question)
- [License](#License)

## Project Description
${answers.description}

## Installation
${answers.installation}

## Usage Infromation
${answers.usage}

## Contributing
${this.listArray(answers.contribution)}

## Question

email: ${answers.email}

github: ${answers.github}


${this.renderLicenseSection(answers.license)}
    `
    }
}

//export class to index.js
module.exports = ReadmeGen