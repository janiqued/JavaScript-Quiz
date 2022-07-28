var right = document.getElementById("true").addEventListener("click", right)
var wrong = document.getElementById("false").addEventListener("click", wrong)
// var startButton = document.getElementById("start-button").addEventListener("click", timer)

// QUESTION FUNCTIONS
function right (){
    console.log ("hi")
    displayQuestions++
}
function wrong (){
    console.log ("bye")
    counter = counter - 10
    displayQuestions++
};
 
// TIMER
var counter = 60
var timer = function(){
    console.log(counter);
    document.getElementById("timer").innerHTML = counter; 
    counter--;
        if(counter <= 0){
            ("time's up!");
            clearInterval(startTimer)
        };
    
};


var startTimer = setInterval(timer, 1000);

// QUESTIONS 
// var questions = ["In JavaScript, the appendChild() method allows you to add a node to the end of the list of child nodes of a specified parent node.", "A JavaScript for loop executes a block of code as long as a specified condition is true", "The querySelector() is a method allows you to select the first element that matches one or more CSS selectors.", "Q4"];

var displayQuestions = function(){
    // var text = "";
    // var questions = localStorage.getItem("questions");
//     var questionsArray = JSON.parse(questions);
    for (var i=0; i < questionsArray.length; i++) {
        text += questions[i] + "<br>";
    };
    
}
document.getElementById("questions").innerHTML = questions


// FORM ELEMENT
// function myFunction() {
//     document.getElementById("form").submit();
//   }

//     var taskNameInput = document.querySelector("input[name='name']");
//     console.log(name);

var nameEnter = document.querySelector("input[name='name'").value;
document.querySelector("input[name='name']").value = "";

var nameEnter = document.querySelector("")

var nameObj = {
    name: nameEnter
}

var enterName = function(nameObj){
    //create list item
    var scoreBoardEl = document.createElement("li");
    //   listItemEl.className = "task-item";

    // create div to hold name entered and add to highscore list
    var highscoreEl = document.createElement("div")
    highscoreEl.innerHTML = nameObj
    scoreBoardEl.appendChild(highscoreEl);

    console.dir(scoreBoardEl)

    // add list item to list
    highscoreEl.appendChild(scoreBoardEl)
};