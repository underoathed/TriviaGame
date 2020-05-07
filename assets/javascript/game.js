//Step 1 Declare Variables
    //question[], answer[], timer, correctAnswers[], incorrectAnswers[]
    var question = [];
    var answer = [];
    var timer = 60;
    var correctAnswers = [];
    var incorrectAnswers = [];
//Step 2 For all questions in the array create an element and append element to the page
$(document).ready(function(){
$("#question").text("What is a man?");
$("input").click(function(){
    console.log(this);
})
//Step 2.5 Create function to grade and display when form is submitted
//Step 3 Create funtion to display answers when score is determined
//Step 4 When page loads display timer on page
//Step 5 Create function to start timer when the page loads
//Step 6 Call functions
});