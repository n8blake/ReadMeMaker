const { makeBadge, ValidationError } = require('badge-maker');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	const format = {
		label: 'license',
		message: license,
		color: 'blue',
	}
	const svg = makeBadge(format);
	return svg;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
	let link = "";
	link = "https://opensource.org/licenses";
	if(license){
		return `[${renderLicenseBadge(license)}](${link})`;
	} else {
		return license;
	}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
	let licenseStr = "";
	if(license != 'none'){
		licenseStr = `## License

${renderLicenseLink(license)}
		`;
	}
	return licenseStr;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents
* [Description](#description)
* [Installation Instructions](#installation-instructions)
* [Usage Information](#usage-information)
* [Contribution Guidelines](#contribution-guidelines)
* [Test Instructions](#test-instructions)
* [License Information](#license-information)
* [Questions](#questions)

## Description
${data.description}

## Installation Instructions
${data.installation}

## Usage Information
${data.usage}

## Contribution Guidelines
${data.contribution}

## Test Instructions
${data.tests}

${renderLicenseSection(data.license)}

## Questions
Email [${data.email}](mailto:${data.email})
or create an issue on [Github](https://github.com/${data.github})  
`;
}

module.exports = generateMarkdown;
