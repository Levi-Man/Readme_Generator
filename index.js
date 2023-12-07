// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
    message: 'What is the title of your project?',
    name: 'title'
    },
    {
      type: 'input',
    message: 'Describe your project.',
    name: 'description'
    },
    {
      type: 'input',
    message: 'How do you install your project?',
    name: 'installation'
    },
    {
      type: 'input',
    message: 'How do you use your project?',
    name: 'usage'
    },
    {
      type: 'list',
    message: 'What license are you using?',
    name: 'license',
    choices: ['MIT', 'GNU GPLv3', 'Apache 2.0']
    },
    {
      type: 'input',
    message: 'How do others contribute to your project?',
    name: 'contribution'
    },
    {
      type: 'input',
    message: 'What tests have you written for your project?',
    name: 'tests'
    },
    {
      type: 'input',
    message: 'What is your GitHub username?',
    name: 'github'
    },
    {
      type: 'input',
    message: 'What is your email address?',
    name: 'email'
    },
  ])
  .then((data) => {
    const fileName = `${data.title}.md`;
    const readmeContent = generateReadmeContent(data);
    // TODO: Create a function to write README file
    writeFile(fileName, readmeContent);
  });

  function writeFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("README successfully created!");
      }
    })
  };


// Function to generate README content
function generateReadmeContent(data) {
return `
# ${data.title}

## Description
${data.description}

## Table of Contents

[Installation](#installation)

[Usage](#usage)

[License](#license)

[Contribution](#contribution)

[Tests](#tests)

[Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is protected under the ${data.license} license.

## Contribution
${data.contribution}

## Tests
${data.tests}

## Questions
For any questions or suggestions, please reach me at github.com/${data.github} or at ${data.email}.
`;
}


