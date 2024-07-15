
let guessNumber = 100
let highScore = 0;
let score = 12;
let rightNumber = 0


getRightNumber()
function getRightNumber(){
    let right_Number = Math.trunc(Math.random()*20)+1;
    console.log(right_Number)
    rightNumber = right_Number
    
}



// score update
function scoreUpdate(){
    score--;
    document.querySelector(".score").textContent=score

}
// score refresh
function scoreRefresh(){
    score = 12;
    document.querySelector(".score").textContent=score;
}

// highest score update
function highestScoreUpdate(){
    highScore = Math.max(score, highScore);
    document.querySelector(".highscore").textContent = highScore;
}
// win color update to green
function greenScreen (){
    document.querySelector("body").classList.add("win");
    document.querySelector(".input-box").classList.add("win");
}

// loose color update to red
function loose(){
    document.querySelector("body").classList.add("loose");
    document.querySelector(".input-box").classList.add("loose");
}

// win color remove green
function greenScreenRemove(){
    document.querySelector("body").classList.remove("win");
    document.querySelector(".input-box").classList.remove("win");
}
// loose color remove red
function redScreenRemove(){
    document.querySelector("body").classList.remove("loose");
    document.querySelector(".input-box").classList.remove("loose");
}


// check inputed value 
function checkAndUpdate(){
    guessNumber = document.querySelector(".input-box").value;
    console.log(guessNumber);
    if (guessNumber == ""){
        // debugging
        alert("Number must be filled");
    }
    else if(score == 0){
        loose()
    }
    else{
        let difference = rightNumber - guessNumber;
    if (difference == 0){
        document.querySelector(".number").textContent = rightNumber;
        document.querySelector(".message").textContent = "Correct guess🎉";
        highestScoreUpdate();
        greenScreen();
        console.log("right guess woohooo!!!..");
    }
    else if(difference >= -2 && difference <= 2){
        document.querySelector(".message").textContent = "Close...try again"
        console.log("close... try again")
        scoreUpdate();
    }

    else if(difference > 2){
        document.querySelector(".message").textContent = "Too low, try Higher"
        console.log("too low.. try higher")
        scoreUpdate();
    }

    else if(difference < -2){
        document.querySelector(".message").textContent = "Too high, try Lower"
        console.log("too high try ..try lower")
        scoreUpdate();
    }
    }
    
}



// add event listener to check 
document.querySelector(".check").addEventListener("click", function(){
    checkAndUpdate();
})
// add listener to Again
document.querySelector(".again").addEventListener("click", function(){
    getRightNumber();
    scoreRefresh();
    greenScreenRemove();
    redScreenRemove();
    highScore = Math.max(highScore, 0);
    document.querySelector(".number").textContent = "?";
    document.querySelector(".message").textContent = "🤔Start Guessing...🎉";
    document.querySelector(".input-box").value = '';
    

})

