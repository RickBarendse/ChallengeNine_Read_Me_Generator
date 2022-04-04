const fs = require('fs');

// function renderLicenseBadge(license) {}
function licenseBadge(data) {
  const licenseType = data.licenses;
  let licenseString = " "
    if (licenseType === "MIT") {
      licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    };
    if (licenseType === "GNU 2.0") {
      licenseString = `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-purple.svg)`
    };
    if (licenseType === "Apache 2.0") {
      licenseString = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
    };
    if (licenseType === "GNU 3.0") {
      licenseString = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-green.svg)`
    };
    if (licenseType === "NPM") {
      licenseString = `![License: GPL v3](https://img.shields.io/badge/License-NPM-yellow.svg)`
    };
    if (licenseType === "ISC") {
      licenseString = `![License: GPL v3](https://img.shields.io/badge/License-ISC-red.svg)`
    };
    return licenseString
    };


// Function to generate markdown for README
function generateMarkdown(data) {

  return `${licenseBadge(data)}
  
  # ${data.title}
 
  ## Description
  ${data.description}

  ## Table of Contents
  * [Instatallation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribute](#contribute)
  * [Tests](#tests)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  The application is covered by the following license:  ${data.licenses}
    
  ## Contribute
  ${data.contribute}
    
  ## Tests
  ${data.tests}
    
  ## Questions
  Please visit my GitHub Overview page at: https://github.com/${data.github}
  If you have any questions regardinmg this application please email me at [${data.email}](${data.email})
  `;
}

module.exports = generateMarkdown;