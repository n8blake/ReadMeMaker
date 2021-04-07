const { makeBadge, ValidationError } = require('badge-maker');
const fs = require('fs');

function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (err) => { 
			if(err) console.log(err)
		}
	)
}

function renderLicenseBadge(license) {
	const licenseStr = license.toString();
	const format = {
		label: 'license',
		message: licenseStr,
		color: 'blue',
	}
	const svg = makeBadge(format);
	writeToFile('./badge.svg', svg);
	return 'badge.svg';
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
	let link = "";
	link = "https://opensource.org/licenses";
	if(license){
		return `<a href="${link}"><img src="${renderLicenseBadge(license)}" /></a>`;
	} else {
		return license;
	}
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
	let licenseStr = "";
	if(license != 'none'){
		licenseStr = `## License Information

${renderLicenseLink(license)}

${generateLicenseText(license)}
		`;
	}
	return licenseStr;
}

function generateLicenseText(license) {
	let text = "";
	switch(license){
		case 'GNU General Public License (GPL)':
			text = "This project is licensed under  the " + license;
			break;
	 	case 'The Apache License':
	 		text = "This project is licensed under  the " + license;
			break;
		case 'Microsoft Public Licenses (Ms-PL)':
			text = "This project is licensed under  the " + license;
			break;
		case 'Berkeley Software Distribution (BSD)':
			text = "This project is licensed under  the " + license;
			break;
		case 'Common Development and Distribution License (CDDL)':
			text = "This project is licensed under  the " + license;
			break;
		case 'Eclipse Public License (EPL)':
			text = "This project is licensed under  the " + license;
			break;
		case 'MIT License':
			text = "This project is licensed under  the " + license;
			break;
		break;
	}
	return text;
}

function renderTestSection(testInstructions){
	if(testInstructions){
		return `## Test Instructions
${testInstructions}`
	} else {
		return "";
	}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseLink(data.license)}

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

## Testing
${data.tests}

${renderLicenseSection(data.license)}

## Questions
Email [${data.email}](mailto:${data.email})
or create an issue on [Github](https://github.com/${data.github})  
`;
}

module.exports = generateMarkdown;
