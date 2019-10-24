// select all elements
// select all elements
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge");
var progress = document.getElementById("progress");
var scoreDiv = document.getElementById("scoreContainer");
var formDiv = document.getElementById("formContainer");
var nameInput = document.querySelector("#name");
var submitButton = document.querySelector("#submit");
var highscoresDiv = document.getElementById("hghtscoresContainer");

var submitEl = document.querySelector("#submit");
var nameInput = document.querySelector("#name");

var submissionResponseEl = document.querySelector("#response");
// create our questions
let questions = [
    {
        question : "What major river flows through the Grand Canyon?",
        choiceA : "Colorado river",
        choiceB : "Arkansas",
        choiceC : "Green river",
        choiceD : "North platte",
        correct : "A",
    },{
        question : "What is the largest lake in Africa called?",
        
        choiceA : "Lake tanganyaka",
        choiceB : "Lake victoria",
        choiceC : "Lake volta",
        choiceD : "Lake kariba",
        correct : "B",
    },{
        question : " Which African nation has the most pyramids?",
        choiceA : "Egypt",
        choiceB : "Algria",
        choiceC : "Sudan",
        choiceD : "Libya",
        correct : "C",
    },{
        question : "What is the largest island in the Mediterranean Sea?",
       
        choiceA : "Malta",
        choiceB : "Alicudi",
        choiceC : "Sicily",
        choiceD : "Panarea",
        correct : "C",
    },{
        question : "What canal connects the Red and Mediterranean Seas?",
    
        choiceA : "Panama Canal",
        choiceB : "Suez Canal",
        choiceC : "Grand Canal",
        choiceD : "Grand Union Canal",
        correct : "B",
    }
];

// create some variables

var lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
var questionTime = 75; // 75s
var gaugeWidth = 150; // 150px
var gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;
let form = 1;
// let Highscores = 1;
// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

//counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender()
        }
    }
}


// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
    
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        
        scoreRender();
        formRender();
        clearInterval(TIMER);
        highscoresRender();
        
    }
}

// answer is correct
function answerIsCorrect(){

    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    //form render
}
        function formRender(){
            formDiv.style.display = "block";

    
    // calculate the amount of question percent answered by the user
    var scorePerCent = Math.round(100 * score/questions.length);
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}

submitEl