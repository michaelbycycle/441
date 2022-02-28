var imageNames = ["image1", "image2", "image3", "image4","image5", "image6", "image7", "image8","image9", "image10"];
var blankImagePath = "images/cover.jpg";
var firstNumber = -1;
var secondNumber = -1;
var score = 0;
var allFound = 0;
// JSON declaration
var player = {"firstname":"", "lastname":"", "age":0, "score":0};

// create a variable with the blank image name
// create a empty array for the actual images
var actualImages = new Array();
    
function printBlanks()
{
   // call our random image creation function
    createRandomImageArray();
    // create a for loop
    for(var i = 0; i < imageNames.length; i++)
    {
    // iterate through the image tag ids and sets the source 
        document.getElementById(imageNames[i]).src= blankImagePath;
    }
         
}

// add to the JSON from the textboxes
function addToPlayer()
{
    var firstName = document.getElementById("txtFirstName").value;
    var lastName = document.getElementById("txtLastName").value;
    var age = document.getElementById("txtAge").value;
   
    player.firstname = firstName;
    player.lastname = lastName;
    player.age = age;
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "practice2.html";
}