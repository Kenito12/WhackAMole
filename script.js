//How should I create a condition for whack a mole game in code?

let rannum;
let previousNum;
let score = 0;

// declare variable to handle the color of of each circle by Object
let up = {
  red: 255,
  green: 255,
  blue: 255
}

let down = {
  red: 255,
  green: 255,
  blue: 255
}

let left = {
  red: 255,
  green: 255,
  blue: 255
}

let right = {
  red: 255,
  green: 255,
  blue: 255
}

setup = () => {
    createCanvas (windowWidth, windowHeight);
    //Create a button to start the game
    let button = createButton('start');
    button.position(windowWidth/2, windowHeight/2);
    
    let restartBut = createButton('restart')
    restartBut.position(windowWidth/2, windowHeight/2 + 50)
    restartBut.hide()
    
    //run randomized function and hide the button after hide;
    button.mousePressed(() => {
      randomized()
      button.hide()
      restartBut.show()
      
    })
    
    restartBut.mousePressed(() =>{
      randomized()
      score = 0
    })
  }
  
  draw = () => {
    background(255)
    // UP
    fill(up.red,up.green,up.blue)
    noStroke()
    circle(windowWidth/2, windowHeight/2 - 400, 200)
    
    // Down
    fill(down.red,down.green,down.blue)
    noStroke()
    circle(windowWidth/2, windowHeight/2 - 150, 200)
    
    // Right
    fill(right.red,right.green,right.blue)
    noStroke()
    circle(windowWidth/2 + 250, windowHeight/2 - 150, 200)
    
    // Left
    fill(left.red,left.green,left.blue)
    noStroke()
    circle(windowWidth/2 - 250, windowHeight/2 - 150, 200)

    textSize(22);
    fill('red');
    text(score, windowWidth/2, windowHeight/2 + 100);

  }

let randomized = () => {

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

  //switch condition to change the color of each circle 
  switch(rannum){
    case 1:
      up.red = 0
      up.green = 255
      up.blue = 0

      down.red = 255
      down.green = 0
      down.blue = 0

      left.red = 255
      left.green = 0
      left.blue = 0

      right.red = 255
      right.green = 0
      right.blue = 0
      break;
    case 2:
      up.red = 255
      up.green = 0
      up.blue = 0

      down.red = 0
      down.green = 255
      down.blue = 0

      left.red = 255
      left.green = 0
      left.blue = 0

      right.red = 255
      right.green = 0
      right.blue = 0
      break;
    case 3:
      up.red = 255
      up.green = 0
      up.blue = 0

      down.red = 255
      down.green = 0
      down.blue = 0

      left.red = 0
      left.green = 255
      left.blue = 0

      right.red = 255
      right.green = 0
      right.blue = 0
      break;
    case 4:
      up.red = 255
      up.green = 0
      up.blue = 0

      down.red = 255
      down.green = 0
      down.blue = 0

      left.red = 255
      left.green = 0
      left.blue = 0

      right.red = 0
      right.green = 255
      right.blue = 0
      break;
  }
}

keyPressed = () => {
  switch (keyCode) {
    case UP_ARROW:
      rannumCheck(keyCode)
    break;
    case DOWN_ARROW:
      rannumCheck(keyCode)
    break;
    case LEFT_ARROW:
      rannumCheck(keyCode)
    break;
    case RIGHT_ARROW:
      rannumCheck(keyCode)
    break;
  }

}


//check random number and compare with with keypress if correct increase score 
//and continue random if not decrease score and random again
let rannumCheck = (keyCode) =>{
  if (rannum == 1 && keyCode === UP_ARROW){
    score += 1
  }
  else if (rannum == 2 && keyCode === DOWN_ARROW){
    score += 1
  }
  else if( rannum == 3 && keyCode === LEFT_ARROW){
    score +=1
  }
  else if( rannum == 4 && keyCode === RIGHT_ARROW){
    score +=1
  }
  else{
    score -= 1
  }

  randomized()

}
