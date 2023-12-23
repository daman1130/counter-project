// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const random = document.querySelector(".random");
 
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
      //count decreases to 10
    if (styles.contains("decrease")) {
      count -= 10;
      //count increases to 10
    } else if (styles.contains("increase")) {
      count += 10;
      //reset
    } else if (styles.contains("reset")) {
      count = 0;
      //random
    } else {
      random.addEventListener("click", function () {
         const randomNumber = getRandomNumber();
         count -= random1[randomNumber];
      });
    }
   
 
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});

//random array and function
 
const random1 = ["-50", "-40", "-30", "-20", "-10", "0", "10", "20", "30", "40", "50"]
 
function getRandomNumber() {
  return Math.floor(Math.random() * random1.length);
}