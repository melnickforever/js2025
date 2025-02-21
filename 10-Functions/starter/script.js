'use strict';

const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),
    registerNewAnswers() {
        const answer = Number(prompt("what is your favourite programming language? \n0: JavaScript\n1: Python\n2: Rust\n3: C++\n(write option number)"));
        const correcAnsers = new Set([0, 1, 2, 3]);
        if (!correcAnsers.has(answer)) {
            alert("Please enter a valid option");
        } else {
            this.answers[answer]++;
            this.displayResults()
        }
    },
    displayResults() {
        console.log(this.answers);
    }
}

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswers.bind(poll));