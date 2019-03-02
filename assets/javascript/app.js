var quiz = [
    { q: "Actress Betty White plays which of the following characters?", a: "Sophia", b: "Rose", c: "Dorothy", answer: "b" },
    { q: "Golden Girls is set in which city?", a: "Los Angeles", b: "San Francisco", c: "Miami", answer: "c" },
    { q: "What dessert are the girls obsessed with?", a: "Cheesecake", b: "Apple Pie", c: "Strawberry Shortcake", answer: "a" },
    { q: "What is the name of the retirement home that Sophia lived in?", a: "Shady Pines", b: "Torrey Pines", c: "Lovely Pines", answer: "a" },
    { q: "Where is Rose from?", a: "Sicily", b: "Georgia", c: "St. Olaf", answer: "c" },
    { q: "What was Sophia's husband's name?", a: "Charlie", b: "Sal", c: "Vinny", answer: "b" },
    { q: "What is Sophia's nickname for Dorothy?", a: "Pussycat", b: "Crankypants", c: "Cupcake", answer: "a" },
    { q: "Which actress played the role of Blanche?", a: "Bea Arthur", b: "Rue McClanahan", c: "Estelle Getty", answer: "b" },
    { q: 'The Golden Girls theme song proclaims: "Thank you for being _____', a: "There for me", b: "A friend", c: "So kind", answer: "b" },
    { q: "What is Sophia's catchphrase?", a: '"Imagine it..."', b: '"I can see it now..."', c: '"Picture it..."', answer: "c" }
]
var timer = 120;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
//when the start button is clicked...
$("#start").click(function () {
    //change css properties
    $("#home").css({"padding-top":"20px","height":"100%", "margin-top":"20px", "padding-bottom":"20px"})
    $("h1").css({"font-size":"48px", "margin-bottom":"5px"})
    //hide the start button
    $("#start").hide();
    //...show and start the timer
    $("#timer").html("<p>Time Remaining: " + timer + " seconds</p>")
    var intervalId = setInterval(function () {
        timer--;
        $("#timer").html("<p>Time Remaining: " + timer + " seconds</p>")
        //if the timer reaches 0 end the quiz
        if (timer === 0) {
            end();
            clearInterval(intervalId);
        }
    }, 1000);
    //...generate questions and options
    for (var i = 0; i < quiz.length; i++) {
        var question = "<p class='question'>" + quiz[i].q + "</p><br>"
        var choice1 = '<input type="radio" value="a" name=' + i + ">" + quiz[i].a
        var choice2 = '<input type="radio" value="b" name=' + i + ">" + quiz[i].b
        var choice3 = '<input type="radio" value="c" name=' + i + ">" + quiz[i].c
        //display questions and options
        $("#quiz").append("<div>" + question + choice1 + choice2 + choice3 + "</div>")
    }
    //.. and show the done button
    $("#quiz").append("<button id='done'>Done</button>");

    //when the done button is clicked end the quiz and stop timer
    $("#done").click(function () {
        end();
        clearInterval(intervalId);
    })
})

//when the quiz ends...
function end() {
    //compute the results
    for (var i = 0; i < quiz.length; i++) {
        //if the correct answer was chosen:
        if ($('input[name=' + i + ']:checked').val() === quiz[i].answer) {
            correct++;
        }
        //if none of the options were checked it was unanswered
        else if ($('input[name=' + i + ']:checked').length === 0) {
            unanswered++;
        }
        //otherwise the answer is wrong
        else {
            incorrect++;
        }
    //change css
    $("#home").css("margin-top", "100px")    
    }
    //...hide the quiz and timer
    $("#quiz").hide();
    $("#timer").hide();
    //...show the results
    $("#results").html("<p>All Done!</p><p>Correct Answers: " + correct + "</p><p>Incorrect Answers: " + incorrect + "</p><p>Unanswered Questions: " + unanswered + "</p>")
    //...and show the video
    $("#home").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/HV7AXRABSng?start=8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
}

