const game = () => {
    let pScore = 0;
    let cScore = 0;


  // start the Game
    const startGame = () =>{
        const playBtn = document.querySelector('.intro>section>button');
 

        const introScreen = document.querySelector('.intro');

        const match = document.querySelector('.match');
            

        
        playBtn.addEventListener("click", () => {

            introScreen.classList.add('fadeOut')

             match.classList.add("fadeIn")
         })
    }
     // play Match

     const playMatch = () =>{
        const _options = document.querySelectorAll('.option>button')

       // console.log(options);
        const playerHand = document.querySelector('.player-h')
        const computerHand = document.querySelector('.computer-h')
        
         const hands = document.querySelectorAll('.hands>img')

         hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation = ''
            })
         })

        //computer options
         const  computerOption = ["rock", "paper", "scissors"];
          
   _options.forEach(option=> {
           option.addEventListener('click', function(){
            const computerNumber = Math.floor(Math.random() * 3)
            const computerChoise = computerOption[computerNumber]


             //update Images
         setTimeout(() => {
            computerHands(this.textContent, computerChoise);
            /// change images
                 playerHand.src =  `./img/${this.textContent}.png`;
                 computerHand.src = `./img/${computerChoise}.png`;
                 
         }, 2000)

             playerHand.style.animation = ' shkpalyer 2s ease'
             computerHand.style.animation = 'shkcomputer 2s ease'
           })
        })    
     }

     // Update
   const updateScore = () =>{
    const playerS = document.querySelector('.player-s>p')
    const computerS = document.querySelector('.computer-s>p')

    playerS.textContent = pScore
    computerS.textContent = cScore
   }

     const computerHands = (playerChoise, computerChoise) =>{

        const winner = document.querySelector(".winner")
        if(playerChoise === computerChoise){
            winner.textContent = ' It is  a tie'
            return;
           
        }  
         // checked  rock
        if(playerChoise === 'rock'){
                if(computerChoise === 'scissors'){
                    winner.textContent = " Player wins"
                    pScore++
                    updateScore()
                    return;
                } else{
                    winner.textContent = ' computer wins'
                    cScore++
                    updateScore()
                    return
                }
        }
        // checked paper 
        if(playerChoise === 'paper'){
            if(computerChoise === 'scissors'){
                winner.textContent = "computer wins"
                cScore++
                updateScore()
                return;
            } else{
                winner.textContent = 'Player wins'
                pScore++
                updateScore()
                return
            }      
        }
        //checked scissors
        if(playerChoise === 'scissors'){
            if(computerChoise === 'rock'){
                winner.textContent = "computer wins"
                cScore++
                updateScore()
                return;
            } else{
                winner.textContent = 'Player wins'
                pScore++
                updateScore()
                return
            }      
        }
     }

    /// call inner function
    startGame();
    playMatch();
}
game();