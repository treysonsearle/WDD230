
let start = new Date();
let year = start.getFullYear();
document.querySelector('time').innerHTML = year
let lastEdited = document.lastModified;

document.querySelector('#updated').innerHTML = lastEdited