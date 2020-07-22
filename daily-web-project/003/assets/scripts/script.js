let allActivities = document.querySelector("#list-div");
let listNumber = 0

function addActivity() {
  let currentActivity = document.querySelector("#add-input").value;
  if (currentActivity == "") {
    document.querySelector("#add-input").placeholder = "NOTE CANNOT BE EMPTY!!!";
  }
  else {
    listNumber += 1
    let newActivityCreate = document.createElement("div");
    newActivityCreate.classList.add("list-item")

    let activityNumber = document.createElement("p")
    activityNumber.style = "color: black"
    activityNumber.innerHTML = `${listNumber}. `;

    newActivityCreate.appendChild(activityNumber);

    let newActivity = document.createElement("p");

    newActivity.innerHTML = currentActivity;

    newActivityCreate.appendChild(newActivity);

    let newActivityDeleteButton = document.createElement("i");
    newActivityDeleteButton.classList.add("fa");
    newActivityDeleteButton.classList.add("fa-times");
    newActivityDeleteButton.addEventListener("click", activityDelete)

    let activityDeleteUndoButton = document.createElement("i");
    activityDeleteUndoButton.classList.add("fa");
    activityDeleteUndoButton.classList.add("fa-undo");
    activityDeleteUndoButton.style = "display: none"
    activityDeleteUndoButton.addEventListener("click", activityDeleteUndo)

    newActivityCreate.appendChild(newActivityDeleteButton);

    newActivityCreate.appendChild(activityDeleteUndoButton);

    allActivities.appendChild(newActivityCreate);
  }
}


function activityDelete(e) {
  e.target.parentNode.children[1].style  = "text-decoration: line-through";
  e.target.parentNode.lastChild.style = "display: block; color: #CBBF7A"
  e.target.style = "display: none"
}

function activityDeleteUndo(e) {
  e.target.parentNode.children[1].style = "text-decoration: none";
  e.target.parentNode.children[2].style = "display: block";
  e.target.style = "display: none"
}

function clearAll() {
  allActivities.innerHTML = ""
  listNumber = 0
}