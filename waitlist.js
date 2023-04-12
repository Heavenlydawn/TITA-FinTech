const dropDown = document.getElementById("dropdown");
const answer = document.querySelector(".answer");

dropDown.addEventListener("click", function () {
  answer.classList.toggle("show-answer");
  console.log(answer.classList);
});