//declaring the variables that will be used
var heading;
var fortuneButton;
var fortuneInput;
var fortuneOutput;

//random fortunes
var fortuneList = [
"a beautiful, smart, and loving person will be coming into your life",
"a golden egg of opportunity falls into your lap this month",
"a good time to finish up old tasks",
"a lifetime of happiness lies ahead of you",
"a pleasant surprise is waiting for you",
"a smile is your personal welcome mat",
"all will go well with your new project",
"be careful or you could fall for some tricks today",
"carve your name on your heart and not on marble",
"do not let ambitions overshadow small success",
"everyday in your life is a special occasion"
];

//things that will be executed once the page is ready
window.addEventListener('DOMContentLoaded', function () {

    heading = document.getElementById("title");
    fortuneButton = document.getElementById("fortune-button");
    fortuneInput = document.getElementById("fortune-input");
    fortuneOutput = document.getElementById("fortune-output");

    fortuneButton.addEventListener("click", demonstrationFunction);

});

function demonstrationFunction () {

    console.log("Called function...");


    //choose a random fortune in fortuneList
    var randomIndex = Math.floor( Math.random() * fortuneList.length);

    //retreive the input (name)
    var currentInputText = fortuneInput.value;

    //text that shows up when there is no input
    if (currentInputText == "" || currentInputText == null){
      fortuneOutput.innerText = "Please enter your first name for a fortune";
    }

    //when there is an input...
    else {
      console.log("Name is: " + currentInputText);

      fortuneOutput.innerText = currentInputText + ", your fortune cookie says: "+ fortuneList[randomIndex];

      //creating a random color every time
      var randomRed = Math.random() * 225;
      var randomGreen = Math.random() * 225;
      var randomBlue = Math.random() * 225;

      var outputColorString = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
      heading.style.color = outputColorString;
      fortuneOutput.style.color = outputColorString;

      //make the heading bold and oblique every other time you press the button
      console.log("Class list BEFORE:");
      console.log(heading.classList);

      heading.classList.toggle("specialTitle");

      console.log("Class list AFTER:");
      console.log(heading.classList);
    }

};
