 function genNum (max, range) {
   return Math.floor((Math.random() * min) + range + 1);
 }

let totalpoint = 0;
let stage = 0
let range = 0;
let min = 2
let max = 5
let gameCont = true;
const username = prompt("Enter your username:");
while(gameCont) {
  let num = genNum(max, range);
  console.log(num);
  let guesNum = prompt("Enter a number between " + min + " to " + max);

  if (guesNum == num){
    totalpoint += 2;
    range ++; 
    stage ++;
    min ++;
    max++
    guesNum = 
    console.log(username + " you guessed right, your point is " + totalpoint + " you leveled up to stage " + stage)
  } else {
    console.log(username + " you guessed wrong, try again!")
    gameCont = false;
  }
  
}