const exercises = {
    earthquake: {
        questions: [
            {
                question: "What is the primary purpose of conducting mock earthquake exercises?",
                options: ["To predict when an earthquake will occur", "To assess the damage caused by a recent earthquake", "To test and improve emergency response procedures","To study the geological causes of earthquakes"],
                correctAnswer: 2,
                backgroundImage: "img/earthquake-questions/1.png"
            },
            {
                question: "During an earthquake, what should you do if you are indoors?",
                options: ["Stay put and hide under a table or desk", "Immediately run outside of the building", "Stand in a doorway", "Turn off all lights and electrical appliances"],
                correctAnswer: 0,
                backgroundImage: "img/earthquake-questions/2.png"
            },
            {
                question: "Which of the following is NOT a recommended safety practice during an earthquake?",
                options: ["Stay away from windows and glass", "Use elevators to evacuate the building quickly", "Drop, Cover, and Hold On", "If outside, move away from buildings, streetlights, and utility wires"],
                correctAnswer: 1,
                backgroundImage: "img/earthquake-questions/3.png"
            },
            {
                question: "What is the 'Triangle of Life' concept in earthquake safety?",
                options: ["A safe location within a building during an earthquake", "A method for predicting earthquake magnitude", "A myth debunked by experts, not a safe practice", "A type of earthquake-resistant building design"],
                correctAnswer: 2,
                backgroundImage: "img/earthquake-questions/4.png"
            },
            {
                question: "Which emergency supply is essential to have in a disaster kit for earthquake preparedness?",
                options: ["Extra clothing for different seasons", "Canned food with a manual can opener", "A collection of rare and valuable books", "A pet turtle for companionship"],
                correctAnswer: 1,
                backgroundImage: "img/earthquake-questions/5.png"
            },
            {
                question: "What does the Richter scale measure in relation to earthquakes?",
                options: ["Earthquake intensity", "Earthquake duration", "Earthquake depth", "Earthquake frequency"],
                correctAnswer: 0,
                backgroundImage: "img/earthquake-questions/6.png"
            },
            {
                question: "What should you do if you are driving a vehicle during an earthquake?",
                options: ["Speed up to get away from the earthquake zone", "Pull over to the side of the road and stay in the vehicle", "Exit the vehicle and seek shelter under an overpass", "Honk your horn to warn other drivers"],
                correctAnswer: 1,
                backgroundImage: "img/earthquake-questions/7.png"
            },
            {
                question: "Which government agency is typically responsible for earthquake preparedness and response in India",
                options: ["ISRO (Indian Space and Research Organization)", "CBI (Central Bureau of Investigation)", "NDMA (National Disaster Management Authority)", "IRS (Internal Revenue Service)"],
                correctAnswer: 2,
                backgroundImage: "img/earthquake-questions/8.png"
            },
            {
                question: "What is the 'Drop, Cover, and Hold On' technique used for during an earthquake?",
                options: ["To avoid paying attention to the earthquake", "To perform a gymnastics routine", "To protect yourself from falling objects and debris", "To take shelter in a basement"],
                correctAnswer: 2,
                backgroundImage: "img/earthquake-questions/9.png"
            },
            {
                question: "Which type of earthquake waves are the fastest and arrive first during an earthquake?",
                options: ["S-waves (Shear waves)", "P-waves (Primary waves)", "L-waves (Love waves)", "R-waves (Rayleigh waves)"],
                correctAnswer: 1,
                backgroundImage: "img/earthquake-questions/10.png"
            },
        ]
    },
    hurricane: {
        // Questions for the hurricane exercise
    },
    flood: {
        // Questions for the flood exercise
    }
};

let currentExercise = null;
let currentQuestionIndex = 0;
let correctAnswers = 0;

function loadMockExercise(disaster) {
    const disasterBlockList = document.getElementById('disaster-block-list');
    disasterBlockList.style.display = "none";
    currentExercise = exercises[disaster];
    currentQuestionIndex = 0;
    correctAnswers = 0;
    showNextQuestion();
}

function showNextQuestion() {
    if (currentExercise && currentQuestionIndex < currentExercise.questions.length) {
        const questionData = currentExercise.questions[currentQuestionIndex];
        const exerciseContainer = document.getElementById('exercise-container');
        exerciseContainer.innerHTML = `
            <div class="questions-block mb-5 text-light" style="background-image: url('${questionData.backgroundImage}'); background-repeat: no-repeat; background-size: cover;">
                <h2 class="home-heading">Question ${currentQuestionIndex + 1}</h2>
                <p>${questionData.question}</p>
                <ul class="options">
                    ${questionData.options.map((option, index) => `
                        <li><input type="radio" name="answer" value="${index}">${option}</li>
                    `).join('')}
                </ul>
                <button onclick="submitAnswer()" id="submit-button">Submit</button>
            </div>
        `;
    } else {
        showExerciseResult();
    }
}

function submitAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        const selectedAnswer = parseInt(selectedOption.value);
        const correctAnswer = currentExercise.questions[currentQuestionIndex].correctAnswer;
        if (selectedAnswer === correctAnswer) {
            correctAnswers++;
        }
        currentQuestionIndex++;
        showNextQuestion();
    }
}

function showExerciseResult() {
    const exerciseContainer = document.getElementById('exercise-container');
    exerciseContainer.innerHTML = `
        <div class="result questions-block">
            <h2>Exercise Completed!</h2>
            <p>You answered ${correctAnswers} out of ${currentExercise.questions.length} questions correctly.</p>
        </div>
    `;
}

document.getElementById('earthquake-block').addEventListener('click', () => loadMockExercise('earthquake'));
document.getElementById('hurricane-button').addEventListener('click', () => loadMockExercise('hurricane'));
document.getElementById('flood-button').addEventListener('click', () => loadMockExercise('flood'));
