
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const section__video1 = document.getElementById("section__video");

button1.addEventListener("click", function () {
  section__video1.currentTime -= 15;
});

button2.addEventListener("click", function () {
  section__video1.play();
});

button3.addEventListener("click", function () {
  section__video1.currentTime += 15;
});

button4.addEventListener("click", function () {
  section__video1.pause();
});