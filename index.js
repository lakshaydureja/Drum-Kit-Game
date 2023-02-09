//to detect click
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var bName = this.innerHTML;
    handleClick(bName);
    buttonAnimation(bName);
  });
}
//to detect keypress
document.addEventListener("keydown", function (event) {
  handleClick(event.key);
  buttonAnimation(event.key);
});

//function to play sound

function handleClick(x) {
  switch (x) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio1 = new Audio("sounds/tom-2.mp3");
      audio1.play();
      break;
    case "s":
      var audio2 = new Audio("sounds/tom-3.mp3");
      audio2.play();
      break;
    case "d":
      var audio3 = new Audio("sounds/tom-4.mp3");
      audio3.play();
      break;
    case "j":
      var audio4 = new Audio("sounds/crash.mp3");
      audio4.play();
      break;
    case "k":
      var audio5 = new Audio("sounds/kick-bass.mp3");
      audio5.play();
      break;
    case "l":
      var audio6 = new Audio("sounds/snare.mp3");
      audio6.play();
      break;
    default:
      console.log("nothing");
  }
}

//function for button animation
function buttonAnimation(currentKey){
    var activeButtons = document.querySelector("."+currentKey);
    activeButtons.classList.add("pressed");
    setTimeout(function(){
      activeButtons.classList.remove("pressed");
    },100);
}