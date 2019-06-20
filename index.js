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
let score = 0;

function renderQuiz () {
    return `
    <h2>${triviaQuestion[questionNumber].question}</h2>  
        <form>
            <fieldset>
                <label class="answerChoices"><input type="radio" name="answer" value="${triviaQuestion[questionNumber].choices[0]}"><span>${triviaQuestion[questionNumber].choices[0]}</span>
                </label>
                <label class="answerChoices"><input type="radio" name="answer" value="${triviaQuestion[questionNumber].choices[1]}"><span>${triviaQuestion[questionNumber].choices[1]}</span>
                </label>
                <label class="answerChoices"><input type="radio" name="answer" value="${triviaQuestion[questionNumber].choices[2]}"><span>${triviaQuestion[questionNumber].choices[2]}</span>
                </label>
                <label class="answerChoices"><input type="radio" name="answer" value="${triviaQuestion[questionNumber].choices[3]}"><span>${triviaQuestion[questionNumber].choices[3]}</span>
                </label>
                <button type="submit" class="submitButton">Submit</button>
            </fieldset>
        </form>
    `
}

function submitAnswer () {
$('form').on('submit', function (event) {
    event.preventDefault();

    let checkedAnswer = $('input:checked');
    let correctAnswer = triviaQuestion[0].rightAnswer;
    let answerSelected = checkedAnswer.val()

        if (answerSelected === correctAnswer) {
            $('.mainQuiz').html(youGotItRight);
        }
        else {
            $('.mainQuiz)').html(youGotItWrong);
        }
    });
}

function startQuiz () {
    $('button').on('click', function () {
        $('.quizInfo').remove();
        $('.mainQuiz').html(renderQuiz);
        $('.actionButton').remove();
        $('.questionNumber').text(1);
    });
}

function youGotItRight () {
    return `<p>Your Got It Right</p>`
}



function runAtStart () {
    startQuiz();
}

$(runAtStart);
