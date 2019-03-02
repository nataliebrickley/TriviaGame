var quiz = [
    { q: "Question 1", a: "choice1", b: "choice2", c: "choice3", answer: "b" },
    { q: "Question 2", a: "choice1", b: "choice2", c: "choice3", answer: "c" },
    { q: "Question 3", a: "choice1", b: "choice2", c: "choice3", answer: "a" },
    { q: "Question 4", a: "choice1", b: "choice2", c: "choice3", answer: "a" },
    { q: "Question 5", a: "choice1", b: "choice2", c: "choice3", answer: "c" }
]
var timer = 60;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
//when the start button is clicked...
$("#start").click(function () {
    //hide the start button
    $("#start").hide();
    //...show and start the timer
    $("#timer").html("<p>Time Remaining: " + timer + " seconds</p>")
    var intervalId = setInterval(function () {
        timer--;
        $("#timer").html("<p>Time Remaining: " + timer + " seconds</p>")
    }, 1000);
    //...generate questions and options
    for (var i = 0; i < quiz.length; i++) {
        // $("#quiz").append("<p>" + quiz[i].q + "</p>")
        var question = "<p>" + quiz[i].q + "</p>"
        var answer = quiz[i].answer;
        var choice1 = '<input type="radio" value="a" name=' + i + ">" + quiz[i].a 
        var choice2 = '<input type="radio" value="b" name=' + i + ">" + quiz[i].b 
        var choice3 = '<input type="radio" value="c" name=' + i + ">" + quiz[i].c
        //display questions and options
        $("#quiz").append("<div>" + question + choice1 + choice2 + choice3 + "</div>")
        }


    $("input").click(function(){
        console.log($('input[name=' + 0 + ']:checked').val())
        
    })
    // for (var i=0; i<quiz.length; i++) {
    //     //if the option is the correct answer, give it an id of correct
    //     var check = quiz[i].answer;
    //     if (quiz[i].a === check) {
    //         $(".c1").addClass("correct")
    //     }
    //     if (quiz[i].b === check) {
    //         $(".c2").addClass("correct")
    //     }
    //     if (quiz[i].c === check) {$(".c3").addClass("correct")}
    // }

    //..show the done button
    $("#quiz").append("<button id='done'>Done</button>");

    //when the done button is clicked...
    $("#done").click(function () {
        //compute results
        for(var i = 0; i < quiz.length; i++) {
            //if the correct answer was chosen:
            if ($('input[name=' + i + ']:checked').val() === quiz[i].answer){
                correct++;
            }
            //if none of the options were checked it was unanswered
            else if($('input[name=' + i + ']:checked').length === 0) {
                unanswered++;
            }
            //otherwise the answer is wrong
            else {
                incorrect++;
            }
            
        }
        //...hide the quiz and timer
        $("#quiz").hide();
        $("#timer").hide();
        //...and show the results
        $("#results").html("<p>All Done!</p><p>Correct Answers: " + correct + "</p><p>Incorrect Answers: " + incorrect + "</p><p>Unanswered Questions: " + unanswered + "</p>")
    })
})

