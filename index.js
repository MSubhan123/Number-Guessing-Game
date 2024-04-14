#! /usr/ bin/env node
import inquirer from "inquirer";
const computerGeneratednumber = Math.floor(Math.random() * 10);
const answer = await inquirer.prompt([
    {
        message: "Guesing A number from 1 Till 10",
        type: "number",
        name: "userGuess"
    }
]);
const { UserGuess } = answer;
if (UserGuess === computerGeneratednumber) {
    console.log(UserGuess, "Username", computerGeneratednumber);
    console.log("correct number,you win");
}
else
    (console.log(UserGuess, "UserGuess", computerGeneratednumber),
        console.log("incorrect number,pls try Again"));
