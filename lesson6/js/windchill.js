let temp = document.getElementById('temp').innerHTML
let speed = document.getElementById('speed').innerHTML
let windchill = 35.74 + 0.6215 * temp - 35.75 * speed ** 0.16 + .4275 * temp * speed ** 0.16
document.getElementById('temp').innerHTML = temp + '°F'
document.getElementById('speed').innerHTML = speed + 'mph'
document.getElementById('windchill').innerHTML = Math.round(windchill) + '°F'