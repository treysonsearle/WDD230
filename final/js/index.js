function toggleMenu() {
   document.getElementsByClassName("menu")[0].classList.toggle("responsive");
};


const options = {
   weekday: 'long',
   day: 'numeric',
   month: 'long',
   year: 'numeric'
};
let oLastModif = new Date(document.lastModified);
document.getElementById("current-date").textContent = oLastModif.toLocaleDateString('en-uk', options);
