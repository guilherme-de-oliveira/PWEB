function computerChoice() {
    var computerChoice = '';
    var auxiliarChoice = Math.random();
    auxiliarChoice = auxiliarChoice * 100;

    if ( auxiliarChoice < 33 )
        computerChoice = 'Pedra';
    else if ( auxiliarChoice < 66 )
        computerChoice = 'Papel';
    else
        computerChoice = 'Tesoura';
    // console.log(atributo)

    return calcWinner(computerChoice);
}

function calcWinner(computerChoice) {
    var userChoice = document.getElementById('user_choice').value;

    var winner = '';
    if (userChoice == 'Pedra') {
        if (computerChoice == 'Pedra') {
            winner = 'empate';
        } else if (computerChoice == 'Papel') {
            winner = 'computador';
        } else if (computerChoice == 'Tesoura') {
            winner = 'jogador';
        }
    } else if (userChoice == 'Papel') {
        if (computerChoice == 'Pedra') {
            winner = 'jogador';
        } else if (computerChoice == 'Papel') {
            winner = 'empate';
        } else if (computerChoice == 'Tesoura') {
            winner = 'computador';
        }
    } else if (userChoice == 'Tesoura') {
        if (computerChoice == 'Pedra') {
            winner = 'computador';
        } else if (computerChoice == 'Papel') {
            winner = 'jogador';
        } else if (computerChoice == 'Tesoura') {
            winner = 'empate';
        }
    }
    
    return responseComputer(computerChoice), responseWinner(winner);
}

function responseComputer(computerChoice) {
    var responseComputer = document.getElementById('responseComputer');
    
    responseComputer.innerHTML = `O computador escolheu <strong>${computerChoice}</strong>`;
}

function responseWinner(winner) {
    var responseComputer = document.getElementById('responseWinner');
    
    if(winner == 'jogador') {
        responseComputer.innerHTML = 'Você é o VENCEDOR :)';
    } else {
        responseComputer.innerHTML = 'Você perdeu :(';
    }
}


