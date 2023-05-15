const { Circle, Triangle, Square } = require("./library/shapes");

const inquirer = require("inquirer");
const fs = require("fs");

function writeToFile(fileName, answers) {
  // initial file is an empty string
  let svgString = "";
  // Sets width and height of logo container
  svgString =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

  svgString += "<g>";

  svgString += `${answers.shape}`;

  let shapeChoice;
  if (answers.shape === "Triangle") {
    shapeChoice = new Triangle();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
  } else if (answers.shape === "Square") {
    shapeChoice = new Square();
    svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
  } else {
    shapeChoice = new Circle();
    svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
  }

  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
  // Closing </g> tag
  svgString += "</g>";
  svgString += "</svg>";

  fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}

function promptUser() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the three lettered text for your logo",
        name: "text",
      },
      {
        type: "input",
        message: "Enter the color of your logo's text",
        name: "textColor",
      },
      {
        type: "list",
        message: "Choose the shape of your logo:",
        choices: ["Circle", "Triangle", "Square"],
        name: "shape",
      },
      {
        type: "input",
        message: "Enter the background color for your logo:",
        name: "shapeBackgroundColor",
      },
    ])
    .then((answers) => {
      // Error handling for svg text length
      if (answers.text.length > 3) {
        console.log("Must enter a value of no more than 3 characters");
        promptUser();
      } else {
        // Calling write file function to generate SVG file
        writeToFile("logo.svg", answers);
      }
    });
}

promptUser();
