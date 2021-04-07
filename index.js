// Packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const { makeBadge, ValidationError } = require('badge-maker');

const runTests = false;

// An array of questions for user input
const questions = [
	{
		type: 'input',
		name: 'title',
		message: 'Project title:',
	},
	{
		type: 'input',
		name: 'description',
		message: 'Brief description:',
	},
	{
		type: 'input',
		name: 'installation',
		message: 'Installation instructions:',
	},
	{
		type: 'input',
		name: 'usage',
		message: 'Usage information:',
	},
	{
		type: 'input',
		name: 'contribution',
		message: 'Contribution guidelines:',
	},
	{
		type: 'input',
		name: 'tests',
		message: 'Test instructions:',
	},
	{
		type: 'checkbox',
		message: 'License:',
		name: 'license',
		choices: ['none', 
				'GNU General Public License (GPL)', 
				'The Apache License', 
				'Microsoft Public Licenses (Ms-PL)', 
				'Berkeley Software Distribution (BSD)',
				'Common Development and Distribution License (CDDL)',
				'Eclipse Public License (EPL)',
				'MIT License'
			],
	},
	{
		type: 'input',
		name: 'email',
		message: 'Email:',
	},
	{
		type: 'input',
		name: 'github',
		message: 'GitHub:',
	},
	];

function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (err) =>
		err ? console.log(err) : console.log('README Generated!')
	);
}

// Initialze the app
function init() {
	if(runTests){
		test();
	} else {
		inquirer.prompt(questions).then((data) =>{
			const markdown = generateMarkdown(data);
			writeToFile('README_out.md', markdown);
		});
	}
}

function test(){
	data = {};
	data.title = "ReadMe Maker";
	data.description = "A node app that uses command line prompts to generate a README.md for projects.";
	data.installation = "Clone this repo and run npm install to install the required dependancies.";
	data.usage = "Run `npm install` in the project directory to install the required dependancies. Then run `npm start` and answer the prompts in the command line.";
	data.contribution = "If you wish to contribute to this project, email me at hello@n8blake.com or open an issue on the [Github](https://github.com/n8blake) page.";
	data.tests = "To test, set runTest to true on line 7 of index.js. This will regenerate this README.md.";
	data.license = "MIT License";
	data.email = "hello@n8blake.com";
	data.github = "n8blake";
	const markdown = generateMarkdown(data);
	writeToFile('README.md', markdown);
}

// Function call to initialize app
init();