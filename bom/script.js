let myNodelist = document.getElementsByTagName("LI");
for (let i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

async function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;

  if (inputValue === '') {
    alert("Enter Book and Chapter!");
  } else {
    document.getElementById("to-do-list").appendChild(li);
  }
  let t = document.createTextNode(inputValue);
  li.appendChild(t);

  document.getElementById("myInput").value = "";
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close"; w
  span.appendChild(txt);
  li.appendChild(span);

  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}
