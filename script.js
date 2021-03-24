// global constants
//const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [1,3,5,2,4,1];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be btwn 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000

function startGame(){
    //initialize game variables
    for(let i=0;i<6;i++){
      pattern[i] = Math.floor(Math.random() * (5 - 1 + 1) + 1); //reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    }
    console.log(pattern)
    progress = 0;
    guessCounter = 0;
    gamePlaying = true;
    clueHoldTime = 1000
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}

function stopGame(){
    gamePlaying = false;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  var guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  clueHoldTime = clueHoldTime - 150
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}
function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  console.log("correct answer: " + pattern[guessCounter])
  console.log("guess #" + guessCounter)
  console.log(pattern)

  if(!gamePlaying){
    return;
  }

  if(pattern[guessCounter] == btn){
    //guessed correctly
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //win game
        winGame();
      }else{
        //correct pattern, continue to next sequence
        progress++;
        guessCounter = 0;
        playClueSequence();
      }
    }else{
      //check next guess to be clicked
      guessCounter++;
    }
  }else{
    //guessed incorrectly = lose game
    loseGame();
  }
}   

/// Sound Synthesis Functions
const freqMap = {
  1: 250,
  2: 280,
  3: 312, //312
  4: 335, //374
  5: 374
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)