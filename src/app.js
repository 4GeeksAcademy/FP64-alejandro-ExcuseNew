/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = message();
  });
  const getRamdonElement = array => {
    const ramdonIndex = Math.floor(Math.random() * array.length);
    return array[ramdonIndex];
  };

  const getGuilty = () => {
    const who = ["The dog", "My grandma", "The mailman", "My bird"];
    return getRamdonElement(who);
  };

  const getAction = () => {
    const action = ["ate", "peed", "crushed", "broke"];
    return getRamdonElement(action);
  };

  const getTarget = () => {
    const target = ["my homework", "my phone", "the car"];
    return getRamdonElement(target);
  };

  const getWhen = () => {
    const when = [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying"
    ];
    return getRamdonElement(when);
  };

  const getMessage = (guilty, action, target, when) => {
    return `${guilty} ${action} ${target} ${when}`;
  };

  const printMessage = message => {
    console.log(message);
  };

  function main() {
    const guilty = getGuilty();
    const action = getAction();
    const target = getTarget();
    const when = getWhen();

    const message = getMessage(guilty, action, target, when);
    printMessage(message);
  }

  main();
};
