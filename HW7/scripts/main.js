// let's create an empty array. We will add to this later
var myViewFinderArray = new Array();

// this is the main ViewFinder class
class ViewFinder
{
    // the constructor requires only one title, the description, imagePath, etc.
    // we will create multiple objects from this class
    constructor(title, author,year,image,description)
    {
        this.title = title;
        this.author = author
        this.year = year
        this.image = image
        this.description = description
    }

    // this just returns the title concatenated with the string "Title"
    // keep in mind only one return statement can exist in a function
    toString()
    {
        return "Title: " + this.title ;    
    }

    // this is the property theTitle which returns the title as well only the title
    get theTitle()
    {
        return this.title;
    }

    displayDescription()
    {
        return "Description: " + this.description
    }

    displayAuthor()
    {
        return "Author: " + this.author
    }

    displayYear()
    {
        return "Year: " + this.year
    }

    displayImage()
    {
        return this.image
    }

}

// this function is called in the body of the HTML page so that the objects are created and added to the 
// array myViewFinderArray
function initializeArray()
{
    // create the first object from the class ViewFinder
    var myViewFinder = new ViewFinder("Taking A Stand In Baton Rouge", "Jonathon Bachman","2016", "images/standBatonRouge.jpg", "In 2016, police shot Alton Sterling and Philando Castile. Protests began around the country, including Baton Rouge, Louisiana, where Sterling had been killed. Ieshia Evans, a nurse, traveled from Pennsylvania to participate in her first protest. She wore a flowing black and silver dress with black shoes. The photo, taken by Reuters photographer Jonathon Bachman, shows Evans standing tall, perfectly calm, as two riot officers charge forward to handcuff her. The photo went viral and many compared it to “Tank Man.” It’s one of the most circulated photos of the Black Lives Matter movement.");
    // create a second object from the class ViewFinder
    var myViewFinder1 = new ViewFinder("Free Hong Kong Series", "Reuters Photography Team","2019", "images/hongKong.jpg", "Protesters march through the streets of Hong Kong, China, demanding for its leaders to step down and withdraw the proposed extradition bill on June 16, 2019.");
      // create the first object from the class ViewFinder
    var myViewFinder2 = new ViewFinder("Flower Power", "Bernie Boston","1967", "images/flowerPower.jpg", "In 1967, photojournalist Bernie Boston arrived at an antiwar protest at the Pentagon. It was late October and thousands of demonstrators marched in protest of the Vietnam War. Boston sat on a wall at the Mall Entrance, watching as soldiers surrounded the group. Guns drawn, the scene was tense. A man with a mop of fair hair and a sweater stuck carnation blooms into the rifle barrels. Boston snapped the photo. When he presented it to his editor, the photo ended up hidden deep in the newspaper. It didn’t receive attention until the photo began winning photography competitions. It was nominated for the 1967 Pulitzer Prize. Who was the young man in the photo, whose image became a symbol of the “Flower Power” movement? He’s most commonly identified as George Harris, an actor who went by the stage name “Hibiscus.” He died in the early 1980s.");
      // create a second object from the class ViewFinder
    var myViewFinder3 = new ViewFinder("Stonewall Pioneers", "Diana Davies","1973", "images/stoneWall.jpg", "Rally for gay rights in New York City in 1973");
        // create the first object from the class ViewFinder
    var myViewFinder4 = new ViewFinder("Rosa Parks", "Nicholas Chriss","1955", "images/rosaParks.jpg", "He said Mrs. Parks told him she was reluctant to take part in the picture, but both the journalists and members of the civil rights community wanted an image that would dramatize what had occurred.");
    // add the first object to the array
    myViewFinderArray.push(myViewFinder);
    myViewFinderArray.push(myViewFinder1);
    myViewFinderArray.push(myViewFinder2);
    myViewFinderArray.push(myViewFinder3);
    myViewFinderArray.push(myViewFinder4);
    myViewFinderArray.push(myViewFinder5);
    
    

}

// this function gets an object from the array and puts it into the element with the id title 
function accessInformation()
{
    // get a random number
    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);
    // get a random object from the array
    // calling the toString, but we could have gotten the property theTitle as well
    document.getElementById("title").innerHTML = myViewFinderArray[randomNumber].toString();
    document.getElementById("author").innerHTML = myViewFinderArray[randomNumber].displayAuthor();
    document.getElementById("year").innerHTML = myViewFinderArray[randomNumber].displayYear();
    document.getElementById("image").src = myViewFinderArray[randomNumber].displayImage();
    document.getElementById("description").innerHTML = myViewFinderArray[randomNumber].displayDescription();

}



