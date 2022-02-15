//This script creates a choose your own adventure functionality in the webpage.

/*
The left button is referenced when the parameter of the storyFunction function is choice == 1 and 
the right button is referenced when the parameter of the storyFunction function is choice == 2.

We can set different if/else text outputs for the two buttons and story div through differing 
the values of the answer1 and answer2 variables.

*/

function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML; 
    var answer2 = document.getElementById("choice2").innerHTML;
  
    if (choice == 1 && answer1 == "Go Study") {
        document.getElementById("story").innerHTML = "Ok.  I'll go study! " + " Where should I go?" ; //use of concatenation
        document.getElementById("choice1").innerHTML = "The Library";
        document.getElementById("choice2").innerHTML = "Back to my house";
    } else if (choice == 2 && answer2 == "Go to the bar") {
        document.getElementById("story").innerHTML = "Ok, I'll go to the bar.  Where should I go?";
        document.getElementById("choice1").innerHTML = "The Rhino";
        document.getElementById("choice2").innerHTML = "The Press Box";

    } else if (choice == 1 && answer1 == "The Library") {
        document.getElementById("story").innerHTML = "The Library is closed.  Oh well, I tried.  Which bar should I go to?";
        document.getElementById("choice1").innerHTML = "The Rhino";
        document.getElementById("choice2").innerHTML = "The Press Box";
    } else if (choice == 2 && answer2 == "Back to my house") {
        document.getElementById("story").innerHTML = "I forgot the key to my house - I'm locked out!  Which bar should I go to?";
        document.getElementById("choice1").innerHTML = "The Rhino";
        document.getElementById("choice2").innerHTML = "The Press Box";
    
    } else if (choice == 1 && answer1 == "The Rhino") {
        document.getElementById("story").innerHTML = "Hello, welcome to the Rhino. What would you like to order?'";
        document.getElementById("choice1").innerHTML = "A beer";
        document.getElementById("choice2").innerHTML = "A glass of wine";
    } else if (choice == 2 && answer2 == "The Press Box") {
        document.getElementById("story").innerHTML = "Hello, welcome to the Press Box. What would you like to order?'";
        document.getElementById("choice1").innerHTML = "A beer";
        document.getElementById("choice2").innerHTML = "A glass of wine";

    } else if (choice == 1 == 1 && answer1 == "A beer") {
        document.getElementById("story").innerHTML = "We are out of drinks but do have javascript homework assignments.  Would you like an assignment?'";
        document.getElementById("choice1").innerHTML = "Yes";
        document.getElementById("choice2").innerHTML = "No";

    } else if (choice == 2 && answer2 == "A glass of wine") {
        document.getElementById("story").innerHTML = "We are out of drinks but do have javascript homework assignments.  Would you like an assignment?'";
        document.getElementById("choice1").innerHTML = "Yes";
        document.getElementById("choice2").innerHTML = "No";

    } else if (choice == 2 && answer2 == "No") {
        document.getElementById("story").innerHTML = "Would you like to play again?";
        document.getElementById("choice1").innerHTML = "Yes, Play again";
        document.getElementById("choice2").innerHTML = "No";

    } else if (choice == 1 && answer1 == "Yes") {
        document.getElementById("chooseNumOfAssignmentsDiv").style.display = "block";
        document.getElementById("story").innerHTML = "How many assignments do you want to do?  Enter a number 0 - 3";

    
    } else if (choice == 1 && answer1 == "Yes, Play again") {
    document.getElementById("story").innerHTML = "I just got out of class!  What should I do now?";
    document.getElementById("choice1").innerHTML = "Go Study";
    document.getElementById("choice2").innerHTML = "Go to the bar";
}
}


function chooseNumberOfAssignments() {
var assignmentNum = document.getElementById("assignmentNum").value;
document.write(assignmentNum);

}

function returnSubTitle(){
    return "--------A choosse your adventure game--------"
}


//var x = document.getElementById("questionDiv");
//x.style.display = "block";
