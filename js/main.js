//Adds an event listener on the click me button
document.querySelector('#clickMe').addEventListener('click', makeReq)

//Adds async function
async function makeReq(){

  const res = await fetch(`/api`)
  const data = await res.json()

//Stores player choice in a variable and makes it lower case
  let playerChoice = document.querySelector("#playerChoice").value.toLowerCase()
//Stores computer choice as a variable
  let computerChoice = document.querySelector("#serverChoice").textContent = data.computerChoice

//Client side logic for rock paper scissors game
  if(playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissors" && computerChoice === "paper"){
    document.querySelector("#result").innerText = "You Win!" //Places "You Win!" in the DOM

  } else if(playerChoice === "rock" && computerChoice === "rock" || playerChoice === "paper" && computerChoice === "paper" || playerChoice === "scissors" && computerChoice === "scissors"){
    document.querySelector("#result").innerText = "You Tie!" // Places "You Tie!" in the DOM

  } else{
    document.querySelector("#result").innerText = "You Lose!" // Places "You Lose!" in the DOM
  }

  console.log(data);

//Puts "Computer chose" + the computers choice in the DOM
  document.querySelector("#serverChoice").textContent = `Computer chose ${data.computerChoice}.`
//Puts "You chose" + the players choice in the DOM
  document.querySelector("#yourChoice").innerText = `You chose ${playerChoice}.`
 
}


