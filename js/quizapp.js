

//QUESTIONS
var questions = [
    {
        question: "when did Ghana gain Independence?",
        choices: ['1900', '1901', '1879', '1957'],
        correct: 3
    },
    {
        question: "what is the capital city of Ghana?",
        choices: ['Tema', 'Accra', 'Kumasi', 'Cape Coast'],
        correct: 1
    },
    {
        question: "How many regions are in Ghana?",
        choices: ['12', '11', '10', '9'],
        correct: 2
    },
    {
        question: "When did Ghana became a republic?",
        choices: ['1981', '1960', '1961', '1957'],
        correct: 1
    },
    {
        question: "when did Ghana gain Independence?",
        choices: ['1900', '1901', '1879', '1957'],
        correct: 3
    },
];
//
var counter = 0;

//Displaying The Questions
var showQuestion = function (index) {
    var questionHeader = document.getElementById('questionHeading');
    questionHeader.innerHTML = questions[index].question;
}

showQuestion(counter);

//Displaying The Options
//ul element for displaying options as list
var ul = document.getElementById('options-container');

var radio = document.createElement('input');
radio.type = 'radio';
radio.setAttribute('name', 'ansSelector');
var showOptions = function (questionIndex) {
    //Question Holder
    var listOptions = questions[questionIndex];
    //Looping through the Options
    for (var x = 0; x < listOptions.choices.length; x++) {
        var listItem = document.createElement('li');
        listItem.setAttribute('class', 'ansList');
        var listValue = document.createTextNode(listOptions.choices[x]);
        var radio = document.createElement('input');
        radio.type = 'radio';
        radio.setAttribute('name', 'ansSelector');


        //Appending 
        ul.appendChild(listItem);
        listItem.appendChild(radio);
        listItem.appendChild(listValue);


        listItem.style.listStyle = "none";
    }
};

showOptions(counter);


//Accessing the next button
var nextBtn = document.getElementById('nextBtn');

//Add function to the next button
nextBtn.addEventListener('click', displayNext);

//Displaying next questions
function displayNext() {
    var index = counter += 1;

    //remove the previous options
    ul.innerHTML = "";

    if (index == questions.length) {
        alert('End of questions');
        return false;
    }

    showQuestion(index);
    showOptions(index);
}


//Accessing the previous button
var prevBtn = document.getElementById('prevBtn');

//Add function to the previous button
prevBtn.addEventListener('click', displayPrev);

//Display previous questions
function displayPrev() {
    var index = counter -= 1;

    ul.innerHTML = "";

    if (index < 0) {
        alert("Can't go back!!!")
    }

    showQuestion(index);
    showOptions(index);
}


//Accessing the reset button
var resetBtn = document.getElementById('resetBtn');

//Adding reset function
resetBtn.addEventListener("click", resetQuiz);

function resetQuiz() {
    var index = counter = 0;

    ul.innerHTML = "";

    showQuestion(index);
    showOptions(index);
}
