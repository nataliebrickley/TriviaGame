var quiz = [
    {q: "Question 1", a: "choice 1", b: "choice2", c: "choice3", answer: "answer1"},
    {q: "Question 2", a: "choice 1", b: "choice2", c: "choice3", answer: "answer2"},
    {q: "Question 3", a: "choice 1", b: "choice2", c: "choice3", answer: "answer3"},
    {q: "Question 4", a: "choice 1", b: "choice2", c: "choice3", answer: "answer4"},
    {q: "Question 5", a: "choice 1", b: "choice2", c: "choice3", answer: "answer5"}
]
var timer = 60;
var correct = 0;
var incorrect = 0;
var unanswered = 0; 
//when the start button is clicked...
$("#start").click(function(){
//hide the start button
    $("#start").hide();
//...show and start the timer
    $("#timer").html("<p>Time Remaining: " + timer + " seconds</p>")
    var intervalId = setInterval(function(){
        timer--;
        $("#timer").html("<p>Time Remaining: " + timer + " seconds</p>")
    }, 1000);
//...show questions and options
    for (var i = 0; i<quiz.length; i++) {
       // $("#quiz").append("<p>" + quiz[i].q + "</p>")
       var question = "<p>" + quiz[i].q + "</p>"
       var choice1 = '<label class="radio-inline"><input type="radio" name=' + i + "'>"+quiz[i].a + '</label>'
       var choice2 = '<label class="radio-inline"><input type="radio" name=' + i + "'>"+quiz[i].b + '</label>'
       var choice3 = '<label class="radio-inline"><input type="radio" name=' + i + "'>"+quiz[i].c + '</label>'
       $("#quiz").append("<div>" + question + choice1 + choice2 + choice3 + "</div>")
    }
//..show the done button
    $("#quiz").append("<button id='done'>Done</button>");
})