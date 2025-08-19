const favMovie = "boss";
let guess = prompt("Guess the movie");
while(guess != favMovie){
    if(guess=="quit"){
        console.log("You Quit");
        break;
    }
    guess = prompt("Wrong! please try again");
}

if(guess == favMovie){
    console.log("congrats!!");
}
else{
    console.log("You quit");
}