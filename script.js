//How should I create a condition for whack a mole game in code?
//Change the layout of the game 
//Add life point and fail condition

let rannum;
let previousNum;
let score = 0;
let lp = 3;
let fail;
let counter;

// Hit sfx and Miss sfx
let hitfx;
let missfx;


//Moles D F J K
const MoleD = document.getElementById("MoleD")
const MoleF = document.getElementById("MoleF")
const MoleJ = document.getElementById("MoleJ")
const MoleK = document.getElementById("MoleK")

//ScoreCounter
const scoreCounter = document.getElementById("Score")
const scoreTitle = document.getElementById("scoreTitle")
const overText =  document.getElementById("GameOver")

//restart button
const restartBut = document.getElementById("restartBut")
//restart game when click
restartBut.onclick = () => {
  lp = 3
  fail = false
  score = 0
  randomized()
  overText.style.display = 'none'
  scoreTitle.style.display = "block"
  clearTimeout(counter);
  timer()
}



setup = () => {

  // load sound through p5.js sound
  hitfx = loadSound('Assets/Audio/Hammer_Hit.mp3');
  missfx = loadSound('Assets/Audio/Hammer_Miss.mp3');

  //change the voluem of the sound
  hitfx.amp(0.5);
  missfx.amp(0.5);
  randomized()
  timer()
  }
  
  draw = () => {

    scoreCounter.innerHTML = score;

    if(lp == 0 || score < 0)
    {
      overText.style.display = "block"
      scoreTitle.style.display = "none"
      fail = true
    }


  }
  
  let randomized = () => {
  if(fail){//check if the state of the game is fail, if it is stop the game if not keep running
    console.log("gamestop")
  }
  else{
    
    // Math.round use to round up the decimal to a round number
    rannum = Math.round(random(1, 4))
    
    //if else condition to prevent the randomizer to random a the same number
    if (previousNum == rannum){
      if(rannum == 1){
        rannum += 1
        previousNum = rannum
      }
      else{
        rannum -= 1
        previousNum = rannum
      }
      console.log(rannum)
    }
    else{
      console.log(rannum)
      previousNum = rannum
    }
  
    //switch condition to change appearance of the Moles
    switch(rannum){
      case 1:
        MoleD.className = "moleUp";
        MoleF.className = "moleDown";
        MoleJ.className = "moleDown";
        MoleK.className = "moleDown";
        break;
      case 2:
        MoleD.className = "moleDown";
        MoleF.className = "moleUp";
        MoleJ.className = "moleDown";
        MoleK.className = "moleDown";
        break;
      case 3:
        MoleD.className = "moleDown";
        MoleF.className = "moleDown";
        MoleJ.className = "moleUp";
        MoleK.className = "moleDown";
        break;
      case 4:
        MoleD.className = "moleDown";
        MoleF.className = "moleDown";
        MoleJ.className = "moleDown";
        MoleK.className = "moleUp";
        break;
    }
  }
  
  keyPressed = () => {
    switch (keyCode) {
      case 68:
        rannumCheck(keyCode)
      break;
      case 70:
        rannumCheck(keyCode)
      break;
      case 74:
        rannumCheck(keyCode)
      break;
      case 75:
        rannumCheck(keyCode)
      break;
      case 38:
        rannumCheck(keyCode)
      break;
      case 37:
        rannumCheck(keyCode)
      break;
      case 39:
        rannumCheck(keyCode)
      break;
      case 40:
        rannumCheck(keyCode)
      break;
    }
  }
}


//check random number and compare with with keypress if correct increase score and play hit sfx
//and continue random if not decrease score play miss sfx and random again
let rannumCheck = (keyCode) =>{


  if(fail){
    console.log('stop')
  }
  else{
    if (rannum == 1 && keyCode === 68 || rannum == 1 && keyCode == 38){//d up
      score += 1
      hitfx.play();
    }
    else if (rannum == 2 && keyCode === 70 || rannum == 2 && keyCode == 37){ //f left
      score += 1
      hitfx.play();
    }
    else if( rannum == 3 && keyCode === 74 || rannum == 3 && keyCode == 39){//j right
      score +=1
      hitfx.play();
    }
    else if( rannum == 4 && keyCode === 75 || rannum == 4 && keyCode == 40){//k down
      score +=1
      hitfx.play();
    }
    else{
      score -= 1
      lp -= 1
      missfx.play();
    }
  
    randomized()
  
  }
}

//Timer for the game if the time ranout will show game over text and hide scoretitle
let timer = () => {
  counter = setTimeout(() => {
    overText.style.display = "block"
    scoreTitle.style.display = "none"
    fail= true
  }, 10000)
}