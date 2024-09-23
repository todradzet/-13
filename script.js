let topic = Number(prompt('Welcome to the Quiz Game! Choose a topic:\n1. strings\n2. variable\n3. math'));

let question = '';
let answer = '';

switch (topic) {
    case 1:
        question = "What is typeof(5)?";
        answer = prompt(question);
        
        if (answer.toLowerCase() === 'number') {
            console.log("Correct!");
        } else {
            console.log("Unfortunately, you can't guess.");
        }
        break;

    case 2:
        question = "Is it possible to redeclare let?";
        answer = prompt(question);
        
        
        if (answer.toLowerCase() === 'yes') {
            console.log("Correct!");
        } else {
            console.log("Unfortunately, you can't guess.");
        }
        break;

    case 3:
        question = "What does console.log(Math.floor(2.1)) return?";
        answer = prompt(question);
        
      
        if (answer.toLowerCase() === 'ori') {
            console.log("Correct!");
        } else {
            console.log("Unfortunately, you can't guess.");
        }
        break;

    default:
        console.log("Invalid choice, please choose 1, 2, or 3.");
        break;
}
