const Shape = require('./library/shapes');
const inquirer = require("inquirer");

inquirer
    .prompt([
    {
        name: "shape",
        message: "Choose the shape of your logo:",
        type: "list",
        choices: ['circle', 'triangle', 'square']
    },
    {
        name: "test",
        message: "Enter the three lettered text for your logo",
        type: "input",
    },
    {
        name: "color",
        message: "Enter the color of your logo's text",
        type: "input",
    },
    {
        name: "bgColor",
        message: "Enter the background color for your logo:",
        type: "input",
    },
])
    .then((responses)=>{
return(responses);
});