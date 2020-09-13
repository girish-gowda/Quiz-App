const quizData = [
    {
        question: 'How old is India?',
        a: '1000',
        b: '1500',
        c: '1700',
        d: '3000',
        correct: 'd'
    }, {
        question: 'What is the best programming language in 2020?',
        a: 'Java',
        b: 'Python',
        c: 'C/C++',
        d: 'Javascript',
        correct: 'b'
    }, {
        question: 'Who is the president of US?',
        a: 'Biden',
        b: 'Obama',
        c: 'Donald Trump',
        d: 'George W.Bush',
        correct: 'c'
    }, {
        question: 'What does html stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading style sheet',
        c: 'Object notation',
        d: 'Application Programming Interface',
        correct: 'a'
    }, {
        question: 'What year JAVA launched?',
        a: '2019',
        b: '1980',
        c: '2000',
        d: '1996',
        correct: 'd'
    }
];

const questionEl = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submitbtn = document.getElementById('submit');
const answersEls = document.querySelectorAll(".answer");
const Quiz = document.getElementById("quiz");

let currentQuiz = 0;
let score = 0;

loadQuiz()

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {
    let answer = undefined;

    answersEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitbtn.addEventListener('click', () => {
    

    const answer = getSelected()
    console.log(answer);
    if(answer) {

        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++;

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            Quiz.innerHTML = `<h2>You answered correcly ${score}/${quizData.length} questions</h2>`
        }
    }
    
    
})

