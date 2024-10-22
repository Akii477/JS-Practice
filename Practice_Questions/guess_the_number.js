let x;
let score = 0;
let y = Math.floor(Math.random() * 100);
do{
    x = Number.parseInt(prompt("Enter your guess number: "));
    if(x>y){
        console.log(`${x} is greater than the Random Number`);
    } else if(x<y){
        console.log(`${x} is smaller than the Random Number`);
    } else if(x==y){
        console.log(`You Win The Match!!`);
    }
    score += 1;
}while(x!=y)
console.log("Time to play the match:", score);
console.log(`Your Score is: ${(100 - score)}`);