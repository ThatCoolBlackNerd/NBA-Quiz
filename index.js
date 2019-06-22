
// Array that stores the Quiz question and answers 
const triviaQuestion = [
    {
        question: 'Who is the all-time leading scorer in NBA history?',
        choices: [
            'Michael Jordan',
            'Kareem Abdul-Jabbar',
            'Karl Malone',
            'Lebron James'
            ],
        rightAnswer: 'Kareem Abdul-Jabbar'
    },
    {
        question: 'Which NBA team has the most Championships?',
        choices: [
            'Los Angeles Lakers',
            'San Antonio Spurs',
            'New York Knicks',
            'Boston Celtics'
            ],
        rightAnswer: 'Boston Celtics'
    },
    {
        question: 'What Arena is known as "The Worlds Most Famous Arena"?',
        choices: [
            'Barclays Center',
            'Boston Garden',
            'Madison Square Garden',
            'Staples Centers'
            ],
        rightAnswer: 'Madison Square Garden'
    },
    {
        question: 'How many Championships have the Golden State Warriors Won?',
        choices: [
            'Four',
            'Three',
            'Six',
            'Two'
            ],
        rightAnswer: 'Four'
    },
    {
        question: 'What College did Michael Jordan play for?',
        choices: [
            'Duke University',
            'University of Kentucky',
            'University of North Carolina',
            'Georgetown University'
            ],
        rightAnswer: 'University of North Carolina'
    },
    {
        question: 'What year was Charles Barkely drafted?',
        choices: [
            '1990',
            '1984',
            '1986',
            '1979'
            ],
        rightAnswer: '1984'
    },
    {
        question: 'Which player is known for choking his coach?',
        choices: [
            'Dennis Rodman',
            'Charles Oakley',
            'Charles Barkley',
            'Latrell Sprewell'
            ],
        rightAnswer: 'Latrell Sprewell'
    },
    {
        question: 'Which of these players DID attend college?',
        choices: [
            'Lebron James',
            'Kevin Garnett',
            'Josh Smith',
            'Dwayne Wade'
            ],
        rightAnswer: 'Dwayne Wade'
    },
    {
        question: 'Which of these is the nickbame of Gary Payton?',
        choices: [
            'The Answer',
            'The Glove',
            'The Klaw',
            'The Iceman'
            ],
        rightAnswer: 'The Glove'
    },
    {
        question: 'How high is a regulation NBA Basket?',
        choices: [
            '10 Feet',
            '11 Feet',
            '9 Feet',
            '12 Feet'
            ],
        rightAnswer: '10 Feet'
    },
];


let questionNumber = 0;
let scoreCount = 0;
let questionCount = 1;

function renderQuiz () {
    return `
    <h2>${triviaQuestion[questionNumber].question}</h2>  
        <form id="js-question-form" name="triviaForm">
            <fieldset>
                <label class="answerChoices"><input type="radio" name="answer" value="${triviaQuestion[questionNumber].choices[0]}" required /><span>${triviaQuestion[questionNumber].choices[0]}</span>
                </label>
                <label class="answerChoices"><input type="radio" name="answer" value="${triviaQuestion[questionNumber].choices[1]}" required /><span>${triviaQuestion[questionNumber].choices[1]}</span>
                </label>
                <label class="answerChoices"><input type="radio" name="answer" value="${triviaQuestion[questionNumber].choices[2]}" required /><span>${triviaQuestion[questionNumber].choices[2]}</span>
                </label>
                <label class="answerChoices"><input type="radio" name="answer" value="${triviaQuestion[questionNumber].choices[3]}" required /><span>${triviaQuestion[questionNumber].choices[3]}</span>
                </label>
                <button type="submit" class="submitButton">Submit</button>
            </fieldset>
        </form>
    `
}

function startQuiz () {
    $('button').on('click', function () {
        $('.quizInfo').remove();
        $('.mainQuiz').html(renderQuiz);
        $('.actionButton').remove();
        $('.questionNumber').text(1);
    });
}

function submitAnswer () {
$('main').submit(event => {
    let checkedAnswer = $('input:checked');
    let correctAnswer = triviaQuestion[questionNumber].rightAnswer;
    let answerSelected = checkedAnswer.val();

     if (answerSelected === correctAnswer) {
        $('.mainQuiz').html(youGotItRight);
        $('.totalScore').text(updateScoreCount);
        }
    else {
        $('.mainQuiz').html(youGotItWrong);
        }
    event.preventDefault();
});    
}

function youGotItRight () {
    return `<div class="feedback_results"><img src="circlecheck.png" class="checkMark" alt="Correct Answer">
                <div class="innerFeedback"><span class="feedback_results_text">Correct: You Scored 2 Points!</span>
                </div>
            </div>
            <button type="button" class="nextButton">Next Question</button>
    `
}

function youGotItWrong () {
    return `<div class="feedback_results"><img src="cross-512.png" class="xMark" alt="Wrong Answer">
                <div class="innerFeedback2"><span class="feedback_results_text">Incorrect: The Correct Answer is ${triviaQuestion[questionNumber].rightAnswer}</span></div>
            </div>
            <button type="button" class="nextButton">Next Question</button>
    `
}

function nextQuestion () {
    $('.mainQuiz').on('click','.nextButton', function (){
        if (questionCount < 10) {
        questionNumber++;
        $('.mainQuiz').html(renderQuiz);
        $('.questionNumber').text(updateQuestionCount);
        } else {
            $('.mainQuiz').html(showResults);
        }
    });
}

function updateQuestionCount () {
    questionCount++;
    return questionCount;
}

function updateScoreCount () {
    scoreCount +=2;
    return scoreCount;
}

function showResults () {
   if (scoreCount >= 18) {
       return `<div class="feedback_results"><img src="NBA_Trophy.png" class="nbaTrophy" alt="You are a Champion">
                    <div class="innerResults"><span class="feedback_results_text"> With a score of ${scoreCount} Points: You are an NBA Chamption</span></div>
               </div>
               <button type="button" class="resetButton">Take Another Shot</button>
       `
   } else if (scoreCount >= 14 && scoreCount < 18) {
        return `<div class="feedback_results"><img src="nbaplayoffs.png" class="nbaPlayoffs" alt="You made the Playoffs">
                    <div class="innerResults"><span class="feedback_results_text"> With a score of ${scoreCount} Points: You made the NBA Playoffs</span></div>
                </div>
                <button type="button" class="resetButton">Take Another Shot</button>
        `
   } else if (scoreCount >=8 && scoreCount < 12) {
        return `<div class="feedback_results"><img src="draftlottery.gif" class="draftLottery" alt="You are picking in the Lottery">
                    <div class="innerResults"><span class="feedback_results_text"> With a score of ${scoreCount} Points: You are unfortunately picking in the Lottery </span></div>
                </div>
                <button type="button" class="resetButton">Take Another Shot</button>
        `
   } else {
        return `<div class="feedback_results"><img src="nfllogo.png" class="nflLogo" alt="Maybe Football is your Sport">
                    <div class="innerResults"><span class="feedback_results_text"> With a score of ${scoreCount} Points: Maybe Football is your Sport </span></div>
                </div>
                <button type="button" class="resetButton">Take Another Shot</button>
        `
   }
}

function restartQuiz () {
    $('main').on('click','.resetButton', event => {
        document.location.reload();
    });
}

function runAtStart () {
    startQuiz();
    renderQuiz();
    submitAnswer();
    nextQuestion();
    showResults();
    restartQuiz();
}

$(runAtStart);
