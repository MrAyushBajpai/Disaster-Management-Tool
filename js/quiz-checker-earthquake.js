const correctAnswers = {
    q1: 'c',
    q2: 'a',
    q3: 'b',
    q4: 'c',
    q5: 'b',
    q6: 'a',
    q7: 'b',
    q8: 'c',
    q9: 'c',
    q10: 'b',
};

// Function to calculate and display the results
function calculateResults() {
    const form = document.getElementById('quiz-form');
    let score = 0;

    // Loop through each question and check the selected answer
    for (let i = 1; i <= 10; i++) {
        const selectedAnswer = form.elements['q' + i].value;
        if (selectedAnswer === correctAnswers['q' + i]) {
            score++;
        }
    }

    // Display the score
    if (score>5){
        alert('Your score: ' + score + ' out of 10 \n YOU WILL SURVIVE');    
    }
    else{
        alert('Your score: ' + score + ' out of 10 \n YOU WILL NOT SURVIVE\n TAKE SUBSCRIPTION');    
    }
  
}

// Attach an event listener to the submit button
const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', calculateResults);
