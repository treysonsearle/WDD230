let lastVisit
const daysToMilliseconds = 86400000;

if ("lastVisit" in localStorage) {
    lastVisit = localStorage.getItem("lastVisit");
}
else {
    lastVisit = Date.now();
}

let timeDifference = Math.round((Date.now() - lastVisit) / daysToMilliseconds);
localStorage.lastVisit = Date.now();
console.log(timeDifference)
document.getElementById("timeDifference").textContent = timeDifference + " Day/s since last visit";