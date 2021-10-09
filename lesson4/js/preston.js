let d = new Date()
const options = {
   weekday: 'long',
   day: 'numeric',
   month: 'long',
   year: 'numeric'
};
console.log(d.toLocaleDateString('en-uk', options))
document.getElementById("current-date").textContent = d.toLocaleDateString('en-uk', options);

function toggleMenu() {
   document.getElementsByClassName("menu")[0].classList.toggle("responsive");
};