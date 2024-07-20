/* eslint-disable */
import "./style.css";

window.onload = function() {
  //write your code here
  let randomNumber = Math.random() * 10;
  document.querySelector("#the-excuse").innerHTML = randomNumber;
  console.log("Hello Rigo from the console " + randomNumber);
};
