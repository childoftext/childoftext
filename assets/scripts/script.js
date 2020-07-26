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
  show[i].style = "display: block";
  }




for (let j = 0; j < hide.length; j++) {
  hide[j].style = "display: none";
  }
}

let themeBoxDisplay = "flex";

function themeBoxToggle(){
  document.getElementById("theme-slider-box").style = `display: ${themeBoxDisplay}`;
  if (themeBoxDisplay == "flex") {
    themeBoxDisplay = "none";
  }
  else themeBoxDisplay = "flex";
}

let mehTheme = {
  "titleStyle": "",
  "gridStyle": "",
  "headerStyle": "",
  "workSpaceStyle": "",
  "bodyStyle": "",
  "linksStyle": ""
};


let lightTheme = {
  "titleStyle": "background-color: rgb(14, 14, 14)",
  "gridStyle": "background-color: white; color: black; box-shadow: none",
  "headerStyle": "color: black",
  "workSpaceStyle": "background-color: white; color: black",
  "bodyStyle": "background-color: black",
  "linksStyle": "color: red;"
};

let darkTheme = {
  "titleStyle": "background-color: rgb(14, 14, 14)",
  "gridStyle": "background-color: black; color: white;",
  "headerStyle": "color: white",
  "workSpaceStyle": "background-color: black",
  "bodyStyle": "background-color: black",
  "linksStyle": ""
};

document.getElementById("theme-slider").value = 2

let header2 = document.querySelectorAll(".header-colors");
let gridItem = document.querySelectorAll(".grid-item");
let workspace = document.querySelectorAll(".workspace");
let titleBox = document.querySelector(".title-div");
let links = document.querySelectorAll("a");


function themeChange(theme){

titleBox.style = `${theme.titleStyle}`;


document.querySelector("body").style = `${theme.bodyStyle}`;

for (let k = 0; k < gridItem.length; k++) {
  gridItem[k].style = `${theme.gridStyle}`;
};

for (let l = 0; l < header2.length; l++) {
  header2[l].style = `${theme.headerStyle}`;
};

for (let n = 0; n < links.length; n++) {
  links[n].style = `${theme.linksStyle}`
};

for (let m = 0; m < workspace.length; m++) {
  workspace[m].style = `${theme.workSpaceStyle}`;
};

let socialLink = document.querySelectorAll("span > a")

for (let o = 0; o < socialLink.length; o++) {
  socialLink[o].style = "background-color: none"
}

document.querySelector("footer > a").style = "background-color: none"

document.getElementById("blog-link").style = "color: khaki"

};


let currentTheme = localStorage.getItem('theme');

if (currentTheme == "1") {
  themeChange(darkTheme);
  document.getElementById("theme-slider").value = 1
};

if (currentTheme == "2") {
  themeChange(mehTheme);
  document.getElementById("theme-slider").value = 2
};

if (currentTheme == "3") {
  themeChange(lightTheme);
  document.getElementById("theme-slider").value = 3
};



function themeToggle() {
  let themeValue = document.getElementById("theme-slider").value;
  if (themeValue == 1) {
    themeChange(darkTheme);
    localStorage.setItem('theme', '1');
  }

  else if (themeValue == 2) {
    themeChange(mehTheme);
    localStorage.setItem('theme', '2');
  }

  else if (themeValue == 3) {
    themeChange(lightTheme);
    localStorage.setItem('theme', '3');
  };
};