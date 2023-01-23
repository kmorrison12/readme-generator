// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function licenseName (license) {
//   switch (license) {
//     case "MIT License":
//       "MIT_License"
//       break;
//     case "Boost Software License":
//       "Boost_Software_License"
//       break;
//     case "Eclipse Public License 2.0":
//       "Eclipse_Public_License_2.0"
//       break;
//     case "GNU GPL v3.0":
//       "GNU_GPL_v3.0"
//       break;
//     case "GNU AGPL v3.0":
//       "GNU_AGPL_v3.0"
//       break;
//     case "Mozilla Public License 2.0":
//       "Mozilla_Public_License_2.0"
//       break;
//     case "The Unlicense":
//       "The_Unlicense"
//       break;                 
//   }
// }

// function licenseBadge () {
//   if (data.license === "No license") {
//     return ``; 
//   } else {
//  return `![License](https://img.shields.io/badge/License-${data.license}-blue.svg)`
//   }
// }

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg)

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## License 
  ${data.license}

  ## Contributing 
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions, please contact me at ${data.email}. You can view my other projects at https://github.com/${data.github}.`
}

module.exports = generateMarkdown;
