// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	return `<img src=https://img.shields.io/static/v1?label=License&message=${license}&color=blue>`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
	if(!license){
		return `<a href="">${renderLicenseBadge(license)}</a>`;
	}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
	let licenseStr = "";
	if(license != 'none'){
		licenseStr = `## License

${license}
		`;
	}
	return licenseStr;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents
[Description](#description)

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
Email me at [${data.email}](mailto:${data.email})

[Github](https://github.com/${data.github})  
`;
}

module.exports = generateMarkdown;
