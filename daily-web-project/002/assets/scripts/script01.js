function displayForm() {
  document.getElementById("nonote").style = "display: none";
  document.getElementById("add-form").style = "display: block"
}


function clearForm() {
  document.getElementById("form-title-text").value = "";
  document.getElementById("form-details-text").value = "";
  noNoteFunction();
}

function hideForm() {
  document.getElementById("add-form").style = "display: none"
  clearForm()
}

let mainBox = document.getElementById("main");
let allNotesBox = document.createElement("div");
mainBox.appendChild(allNotesBox);

let allNotes = []

function addNote() {
  let title = document.getElementById("form-title-text").value;
  let details = document.getElementById("form-details-text").value;

  if (title !== "" && details !== "") {
    let currentNote = []
    currentNote[0] = title;
    currentNote[1] = details;
    allNotes[allNotes.length] = currentNote;
    let noteBox = document.createElement("div");
    noteBox.classList.add("note-box");


    let titleBox = document.createElement("div");
    let detailsBox = document.createElement("div");
    let titleHeader = document.createElement("h3");
    let titleText = document.createElement("p");
    titleText.classList.add("text-box");


    let detailsHeader = document.createElement("h3");
    let detailsText = document.createElement("p");
    detailsText.classList.add("text-box");

    
    let deleteButton = document.createElement("button")
    deleteButton.innerHTML = "DELETE";
    deleteButton.addEventListener("click", deleteNote);

    titleHeader.innerHTML = "Title:";
    detailsHeader.innerHTML = "Details:";

    titleText.innerHTML = currentNote[0];
    detailsText.innerHTML = currentNote[1];


    titleBox.appendChild(titleHeader);
    titleBox.appendChild(titleText);


    detailsBox.appendChild(detailsHeader);
    detailsBox.appendChild(detailsText);

    noteBox.appendChild(titleBox);
    noteBox.appendChild(detailsBox);
    noteBox.appendChild(deleteButton);

    allNotesBox.appendChild(noteBox);

    hideForm()
    noNoteFunction();
  }
}

function noNoteFunction() {
  if (allNotesBox.innerHTML == "") {
    document.getElementById("nonote").style = "display: block";
  }
}

function deleteNote(e) {
  e.target.parentNode.remove();
  noNoteFunction();
}