// 1. Ask the user for input via a pop-up window

function getHumanChoice(){
let userInput = prompt("Your Throw:");

// 2. Check if the user typed something or cancelled
if (userInput) {
    // 3. Display the result in a second pop-up window
    alert("Throw was " + userInput + "!");
} else {
    alert("You didn't enter anything!");
}
return userInput;
}



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

let round=0,HCpoints=0,CCpoints=0,winner=-1;

//1 is Human winner

while(round<=3){
winner=-2;
let CC=getComputerChoice().toLowerCase();
let HC=getHumanChoice().toLowerCase();

if(CC===HC)
winner=-1;

else if(CC=="paper" && HC=="rock" )
    winner=1

else if(CC=="paper" && HC=="scissor" )
    winner=1

else if(CC=="rock" && HC=="scissor" )
    winner=0

else if(CC=="rock" && HC=="paper" )
    winner=0

else if(HC=="rock" && CC=="scissor" )
    winner=1

else if(HC=="paper" && CC=="scissor" )
    winner=0

else
    console.log("Wrong strings"+" CC "+CC+" HC "+HC)
    
console.log(" CC "+CC+" HC "+HC)

if(winner==1){
    alert("Human wins" + " CC "+CC+" HC "+HC)
    HCpoints++;
}
else if (winner==0){
    alert("Computer Wins"+ " CC "+CC+" HC "+HC)
    CCpoints++;
}
else
    alert("Just Draw"+ " CC "+CC+" HC "+HC)


round++;
}

alert("Points"+ " CCpoints "+CCpoints+" HCpoints "+HCpoints)