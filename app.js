import inquirer from "inquirer";
let numberGenrat = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt({
    name: "numberGuessing",
    type: "input",
    message: "please guess a number betwen 1-5",
});
if (answer.numberGuessing == numberGenrat) {
    console.log("cogratulation! you guest rigght number");
}
else {
    console.log("you guest wrong number.");
}
