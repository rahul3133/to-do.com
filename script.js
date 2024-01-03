const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTast(){
    if(inputBox.value == ''){
        alert("You must write somthing")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
        SaveData()
    }
    inputBox.value = ""
}

listContainer.addEventListener("click",function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        SaveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        SaveData()
    }
},false)

let SaveData = () => {
    localStorage.setItem("data", document.getElementById("list-container").innerHTML)
}

let ShowData = () => {
    document.getElementById("list-container").innerHTML = localStorage.getItem("data")
}

ShowData()