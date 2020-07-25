let allStackButton = document.querySelector("#stack-all");
let langStackButton = document.querySelector("#stack-langs");
let toolStackButton = document.querySelector("#stack-tools");

let stackLang = document.querySelectorAll(".stack-lang");

let stackTool = document.querySelectorAll(".stack-tool");

let allStack = document.querySelectorAll(".all-stack");

let selectedStackButton = "transform: scale(0.9); color: white; box-shadow: 0px 0px 5px 5px rgb(20, 20, 20), 3px 3px 5px 5px black, inset 0px 0px 5px 5px rgb(7, 7, 7);";

allStackButton.style = selectedStackButton;

function stackButtonPress(button, show, hide) {
  allStackButton.style = "";
  langStackButton.style = "";
  toolStackButton.style = "";
  button.style = selectedStackButton;


for (let i = 0; i < show.length; i++) {
  show[i].style = "display: block"
  }




for (let j = 0; j < hide.length; j++) {
  hide[j].style = "display: none"
  }
}