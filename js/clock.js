'use strict'


const myVar = setInterval(myClock, 1000);

function myClock() {
  const myDate = new Date();
  document.querySelector('.clock').innerHTML = myDate.toLocaleTimeString('hu-HU');
}