/* eslint-disable */
import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console ");
};

let generateExcuse = () => {
  let pronoun = ["My", "Hers", "Your", "His"];
  let subject = ["Jogger", "Bottle", "Dog", "Driver", "Comedian"];
  let action = ["took my", "threw my", "yelled at my", "stole my", "bit my"];
  let possesion = ["homework", "toe", "car", "shoe"];
  let where = ["on the street", "in my house", "in my driveway"];

  let pronIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possIndex = Math.floor(Math.random() * possesion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    possesion[possIndex] +
    " " +
    where[whereIndex]
  );
};
