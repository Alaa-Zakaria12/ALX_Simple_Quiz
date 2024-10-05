//The Function Declaration:
function checkAnswer(){
    //Identify the Correct Answer:
    const correctAnswer = "4";
    //Retrieve the User’s Answer:
    const userAnswer = document.querySelector('input[name ="quiz"]:checked').value
    //Compare the User’s Answer with the Correct Answer:
    const feedback = document.getElementById('feedback');
    if(correctAnswer===userAnswer){
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";

    } else{
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";
    }
}
//Add an Event Listener to the Submit Button:
document.getElementById("submit-answer").addEventListener("click", checkAnswer);