let user_score = 0;
let comp_score = 0;
const userscore_span = document.getElementById("user-score");
const compscore_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function convertToword(letter){
    if(letter === "r") return "ROCK";
    if(letter === "p") return "PAPER";
    return "SCISSOR"
}

function getcompchoice(){
    const choice = ["r","p","s"];
    const random_choice = Math.floor(Math.random() *3);
    return choice[random_choice];
}

function win(user_choice,comp_choice){
    const smalluserword = 'user'.fontsize(3).sub();
    const smallcompword = 'comp'.fontsize(3).sub();
    const userchoice_div = document.getElementById(user_choice);
    user_score++;
    userscore_span.innerHTML = user_score;
    compscore_span.innerHTML = comp_score;
    result_div.innerHTML = convertToword(user_choice)+ smalluserword + " beats " + convertToword(comp_choice) + smallcompword + ". YOU WIN..! "; 
    userchoice_div.classList.add('green-glow');
    setTimeout(() => userchoice_div.classList.remove('green-glow'),300);
}

function lose(user_choice,comp_choice){
    const smalluserword = 'user'.fontsize(3).sub();
    const smallcompword = 'comp'.fontsize(3).sub();
    const userchoice_div = document.getElementById(user_choice);
    comp_score++;
    userscore_span.innerHTML = user_score;
    compscore_span.innerHTML = comp_score;
    result_div.innerHTML = convertToword(user_choice)+ smalluserword + " loses to  " + convertToword(comp_choice) + smallcompword + ". YOU LOST..! ";
    userchoice_div.classList.add('red-glow');
    setTimeout(() => userchoice_div.classList.remove('red-glow'),300);
}

function draw(user_choice,comp_choice){
    const smalluserword = 'user'.fontsize(3).sub();
    const smallcompword = 'comp'.fontsize(3).sub();
    const userchoice_div = document.getElementById(user_choice);
    result_div.innerHTML = convertToword(user_choice)+ smalluserword + " equals " + convertToword(comp_choice) + smallcompword + ". IT'S A DRAW..! ";
    userchoice_div.classList.add('gray-glow');
    setTimeout(() => userchoice_div.classList.remove('gray-glow'),300);
}


function game(user_choice){
    const comp_choice = getcompchoice();
    switch (user_choice + comp_choice){
        case "rs":
        case "pr":
        case "sp":
            win(user_choice,comp_choice);
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(user_choice,comp_choice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(user_choice,comp_choice);
            break;
        }
}


function main(){
    rock_div.addEventListener('click',() => game("r"))
    paper_div.addEventListener('click',() => game("p"))
    scissor_div.addEventListener('click',() => game("s"))
}

main();