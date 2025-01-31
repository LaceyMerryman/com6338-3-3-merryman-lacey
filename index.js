// Your code here
var questionsArr = [
    {
        question: 'Honolulu is located on the island of Oahu.', 
        answer: true
    },
    {
        question: 'Pineapples grow on trees.',
        answer: false
    },
    {
        question: 'Rainbows are always in the same order of colors.',
        answer: true
    },
    {
        question: 'The word Aloha means hello and goodbye in the Hawaiian language.',
        answer: true
    },
    {
        question: 'Sharks are mammals.',
        answer: false
    }
];

// Function to run the quiz
function runQuiz() {
    let correctAnswers = 0; //To keep track of correct answers

    //Loop through the questions array
    for (let i = 0; i < questionsArr.length; i++) {
        //Ask the question using the confirm dialog, which returns truw or false
        let userAnswer = confirm(questionsArr[i].question);

        //Check if the user's answer matches the correct answer
        if (userAnswer === questionsArr[i].answer) {
            correctAnswers++;
        }
    }

    //Calculate percentage of correct answers
    let percentage = Math.round((correctAnswers / questionsArr.length) * 100);

    //Display results using alert
    alert('You answered ' + percentage + '% of the questions correctly!');
}