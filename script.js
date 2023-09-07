console.log("Welcome here!")
const listContainer = document.querySelector(".listContainer")
const btn = document.querySelector(".btn button")
const ques = document.querySelector(".ques")
let currentQuestionIndex = 0;
let score;
let marked = false
const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Giraffe", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
        ],
        correctAns: "Blue Whale"
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            { text: "Vatican City", correct: true },
            { text: "Bhutan", correct: false },
            { text: "Nepal", correct: false },
            { text: "Shri Lanka", correct: false },
        ],
        correctAns: "Vatican City"
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Kalahari", correct: false },
            { text: "Gobi", correct: false },
            { text: "Sahara", correct: false },
            { text: "Antarctica", correct: true },
        ],
        correctAns: "Antarctica"
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia" },
            { text: "Austrlia" },
            { text: "Arctic" },
            { text: "Africa" },
        ],
        correctAns: "Austrlia"
    },
    {
        question: 'What does HTML stand for?',
        answers: [
            { text: "Hyper Text Markup Language" },
            { text: "High-level Text Manipulation Language" },
            { text: "Hyperlink and Text Markup Language" },
            { text: "Hyper Transfer Markup Language" },

        ],
        correctAns: 'Hyper Text Markup Language'
    },

    {
        question: 'Which of the following is NOT a programming language',
        answers: [{ text: 'Java' }, { text: 'HTML' }, { text: 'Python' }, { text: 'JavaScript' }],
        correctAns: 'HTML'
    },
    {
        question: 'Which programming paradigm focuses on reusability and separating concerns into classes and objects?',
        answers: [{ text: 'Imeerative'}, { text: 'OOPS'}, { text: 'Functional'}, { text: 'Procedural'}],
        correctAns: 'HTML'
    },
    {
        question: 'What does CSS stand for?',

        answers: [
            { text:'Computer Style Sheets'},
            { text:'Creative Styling System'},
            { text:'Cascading Style Sheets'},
            { text:'Colorful Styling Solutions'}],
        correctAns:'Cascading Style Sheets'
    },
    {
        question: 'In JavaScript, which keyword is used to declare a variable?',
        answers: [{ text: 'var'},
            { text: 'int'},
            { text: 'string'},
            { text: 'declare'}],
        correctAns: 'var'
    },
    {


        question: 'What data type would you use to store whole numbers in Python?',
        answers: [{ text: 'integer'},
            { text: 'double'},
            { text: 'char'},
            { text: 'boolean'}],
        correctAns: 'integer'
    },
    {
        question: 'Which operator is used for exponentiation in many programming languages?',
        answers: [{ text: '+'},
            { text: '*'},
            { text: '^'},
            { text: '/'}],
        correctAns: '^'
    },
    {
        question: 'Which of the following is an example of a backend programming language?',
        answers: [{ text: 'HTML'},
            { text: 'CSS'},
            { text: 'Python'},
            { text: 'jQuery'}],
        correctAns: 'Python'
    },
    {
        question: 'Which programming language is known for its speed and is often used in systems programming?',
        answers: [{ text: 'Java'},
            { text: 'Ruby'},
            { text: 'C++'},
            { text: 'PHP'}],
        correctAns: 'C++'
    },
    {
        question: 'What does SQL stand for?',
        answers: [{ text: 'Structured Query Language'},
            { text: 'Simple Query Language'},
            { text: 'Standard Question Language'},
            { text: 'System Query Language'}],
        correctAns: 'Structured Query Language'
    },
    {
        question: 'Which type of loop is executed at least once, even if the condition is false?',
        answers: [{ text: 'for loop'},
            { text: 'while loop'},

            { text: 'do-while loop'},
            { text: 'repeat-until loop'}
        ],
        correctAns: 'do-while loop'
    },
    {
        question: 'What is the result of 5 + "10" in JavaScript?',
        answers: [{ text: '15'},
            { text: '510'},
            { text: '510 (as a string)'},
            { text: 'Error'}
        ],
        correctAns: '510 (as a string)'
    },
    {
        question: 'Which data structure follows the Last-In-First-Out (LIFO) principle?',
        answers: [{ text: 'Queue'},
            { text: 'Linked List'},
            { text: 'Stack'},
            { text: 'Array'}],
        correctAns: 'Stack'
    },
    {
        question: 'What is the purpose of version control systems like Git?',
        answers: [{ text: 'Managing databases'},
            { text: 'Tracking changes in source code'},
            { text: 'Optimizing website performance'},
            { text: 'Creating graphical user interfaces'},],
        correctAns: 'Tracking changes in source code'
    },
    {
        question: 'What does API stand for?',
        answers: [{ text: 'Application Protocol Interface'},
            { text: 'Application Programming Interface'},
            { text: 'Advanced Programming Interface'},
            { text: 'Algorithmic Programming Interface'}],
        correctAns: 'Application Programming Interface'
    },
    {
        question: 'Which sorting algorithm has an average and worst-case time complexity of O(n log n)?',
        answers: [{ text: 'Bubble sort'},
            { text: 'Insertion sort'},
            { text: 'Quick sort'},
            { text: 'Selection sort'}],
        correctAns: 'Quick sort'
    },
    {
        question: 'What does DRY stand for in software development?',
        answers: [{ text: 'Dont Reveal Yourself'},
            { text: 'Dont Repeat Yourself'},
            { text: 'Develop, Review, Yield'},
            { text: 'Debug, Refactor, Yield'}],
        correctAns: 'Develop, Review, Yield'
    },
    {
        question: 'In object-oriented programming, what is the process of creating a new instance of a class called?',
        answers: [{ text: 'Inheritance'},
            { text: 'Polymorphism'},
            { text: 'Encapsulation'},
            { text: 'Instantiation'}],
        correctAns: 'Instantiation'
    },
    {
        question: 'Which keyword is used to define a function in Python?',
        answers: [{ text: 'def' },
        { text: 'function' },
        { text: 'define' },
        { text: 'func' }],
        correctAns: 'def'
    },
    {
        question: 'Which of the following is NOT a valid JavaScript variable name?',
        answers: [{ text: 'myVariable' },
        { text: '123variable' },
        { text: '_variable' },
        { text: '$variable' }
        ],
        correctAns: '123variable'
    }

];

console.log(questions.length)
function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1;
    if (currentQuestionIndex >= 24) {
        btn.innerHTML = "Play Again"
        ques.innerHTML = `your score is ${score} out of 24`;
    } else {
        ques.innerHTML = questionNo + "." + currentQuestion.question
        currentQuestion.answers.forEach((answer) => {
            const li = document.createElement("li")
            li.innerHTML = answer.text
            li.classList.add("option")
            listContainer.appendChild(li)
            li.addEventListener("click", () => {
                if (li.innerHTML == currentQuestion.correctAns && marked == false) {
                    score++;
                    // console.log(li.classList.length)
                    console.log(score + "score")
                    li.classList.add("correct")
                    marked = true
                } else if (li.innerHTML != currentQuestion.correctAns && marked == false) {
                    // console.log(li.classList.length)
                    li.classList.add("wrong")
                    marked = true
                }
            })
        });
    }


}
btn.addEventListener("click", () => {
    currentQuestionIndex++
    listContainer.innerHTML = ""
    marked = false
    showQuestion()
    if (currentQuestionIndex == 25) {
        startQuiz()
    }

})

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    btn.innerHTML = "Next"
    showQuestion()
}

startQuiz()
