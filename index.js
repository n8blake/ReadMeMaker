// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (err) =>
		err ? console.log(err) : console.log('README Generated!')
	);
}

// TODO: Create a function to initialize app
function init() {
	inquirer.prompt(questions).then((data) =>{
		const markdown = generateMarkdown(data);
		writeToFile('README_out.md', markdown);
	});
}

// Function call to initialize app
//init();

function test(){
	data = {};
	data.title = "Project Title";
	data.description = "This is a brief description of the project. It is only a few lines to talk about what it does.";
	data.installation = "";
	data.usage = "";
	data.contribution = "If you wish to contribute to this project, email me at hello@n8blake.com or open an issue on the GitHub page.";
	data.tests = "";
	data.license = "MIT License";
	data.email = "hello@n8blake.com";
	data.github = "n8blake";

	const markdown = generateMarkdown(data);
	writeToFile('README_out.md', markdown);
}

test();
