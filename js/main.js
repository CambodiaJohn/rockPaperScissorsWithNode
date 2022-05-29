document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const res = await fetch(`/api`)
  const data = await res.json()

  let playerChoice = document.querySelector("#playerChoice").value.toLowerCase()
  let computerChoice = document.querySelector("#serverChoice").textContent = data.computerChoice

  if(playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissors" && computerChoice === "paper"){
    document.querySelector("#result").innerText = "You Win!"

  } else if(playerChoice === "rock" && computerChoice === "rock" || playerChoice === "paper" && computerChoice === "paper" || playerChoice === "scissors" && computerChoice === "scissors"){
    document.querySelector("#result").innerText = "You Tie!"

  } else{
    document.querySelector("#result").innerText = "You Lose!"
  }

  console.log(data);

  document.querySelector("#serverChoice").textContent = `Computer chose ${data.computerChoice}.`
  document.querySelector("#yourChoice").innerText = `You chose ${playerChoice}.`
 
}


