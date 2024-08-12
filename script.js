document.addEventListener('DOMContentLoaded', () => {
    const choices = document.querySelectorAll('.choice');
    const userChoiceSpan = document.querySelector('#user-choice span');
    const computerChoiceSpan = document.querySelector('#computer-choice span');
    const outcomeSpan = document.querySelector('#outcome span');

    choices.forEach(choice => {
        choice.addEventListener('click', () => {
            const userChoice = choice.id;
            const computerChoice = getComputerChoice();
            const outcome = determineWinner(userChoice, computerChoice);

            userChoiceSpan.textContent = capitalize(userChoice);
            computerChoiceSpan.textContent = capitalize(computerChoice);
            outcomeSpan.textContent = outcome;
        });
    });

    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * 3);
        return choices[randomIndex];
    }

    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return 'It\'s a tie!';
        }

        if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return 'You win!';
        } else {
            return 'You lose!';
        }
    }

    function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
});
