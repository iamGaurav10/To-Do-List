const inputbBox = document.getElementById("inputBox");
const listContainer = document.querySelector("#list-Container");
const main = document.querySelector(".main");

function addTask() {
    if (inputbBox.value === '') {
        alert("Please fill the task to proceed");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbBox.value;
        listContainer.append(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.append(span)
    }
    inputbBox.value = '';
}


listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
})


main.addEventListener("click", (e) => {
    if (e.target.id === "clearAll") {
        listContainer.innerHTML = ''
    }
})


var today = new Date();
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var formattedDate = today.toLocaleDateString('en-US', options);

document.getElementById('currentDate').innerHTML =  formattedDate;


