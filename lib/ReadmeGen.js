class ReadmeGen {


    static generateReadMe(answers) {
        return `
# ${answers.title}

## Table of Content
- [Project Content](#Description)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Installation](#Instalation)
- [Question](#Question)
- [License](#License)

## Description
${answers.description}

## Usage
${answers.usage}

## Installation
${answers.installation}

## Contributing
${answers.contribution}

## Question
email: ${answers.email}

github: ${answers.github}

## License
${answers.license}
    `
    }
}

module.exports = ReadmeGen