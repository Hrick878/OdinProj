console.log("TS");

function getComputerChoice(){
	let num=Math.floor(Math.random()*(3))
    let cthrow;
	if(num==0){
       cthrow="Rock"
	}

	else if (num==1){
		cthrow="Scissor"
	}

	else
		cthrow="Paper"
	
	return(cthrow.toLowerCase())
}



let word="";
const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

async function getHumanChoice() {
    const answer = await rl.question('Enter a single word: ');
    const word = answer.trim().split(/\s+/)[0];

    console.log(`Your word is: ${word}`);
    return word.toLowerCase();
}

function secondFunction(word) {
    console.log(`The second function received: ${word}`);
}

async function main() {
    const word = await getHumanChoice();
let HC=word
let CC=getComputerChoice()


if(CC===HC)
console.log("It is a draw"+" CC "+CC+" HC "+HC)

else if(CC=="paper" && HC=="rock" )
    console.log("Human wins")

else if(CC=="paper" && HC=="scissor" )
    console.log("Human wins")

else if(CC=="rock" && HC=="scissor" )
    console.log("Computer wins")

else if(CC=="rock" && HC=="paper" )
    console.log("Computer Wins")

else if(HC=="rock" && CC=="scissor" )
    console.log("Hanuman wins")

else if(HC=="paper" && CC=="scissor" )
    console.log("Computer wins")

else
    console.log("Wrong strings"+" CC "+CC+" HC "+HC)
    
console.log(" CC "+CC+" HC "+HC)

}

main();



