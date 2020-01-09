"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Dominic Torres
   Date: 1/6/20

*/
runClock();
setInterval("runClock()", 1000)

function runClock(){

//created a variable for today's date
var currentYear = new Date();
//changed today's date
var thisDate = currentYear.toLocaleDateString(); //thisDate == 1/7/20
var thisTime = currentYear.toLocaleTimeString(); //thisTime == 4:46:39 PM

document.getElementById("dateNow").innerHTML = thisDate + "<br/>" + thisTime;

//calculate the days until Jan 1st
var newYear = new Date("January 1, 2020");
var nextYear = currentYear.getFullYear()+1;
newYear.setFullYear(nextYear);
var daysLeft = (newYear - currentYear)/(1000*60*60*24);
var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;
var minLeft = (hrsLeft - Math.floor(hrsLeft))*60;
var secLeft = (minLeft - Math.floor(minLeft))*60;
//changed the countdown clock
document.getElementById("days").innerHTML = Math.floor(daysLeft);
document.getElementById("hrs").innerHTML = Math.floor(hrsLeft);
document.getElementById("mins").innerHTML = Math.floor(minLeft);
document.getElementById("secs").innerHTML = Math.ceil(secLeft);
}


function rectArea(length, width){
   var area = length * width;
   return area;
}
var rect = rectArea(5, 2);
console.log(rect);
console.log(rectArea(200, 40));



function circArea(radius){
   var area = Math.PI*Math.pow(radius, 2)
   return area;
}
console.log(circArea(10));


function distance(x1, y1, x2, y2){
   var dist = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y1-y2, 2));
   return dist;
}

console.log(distance(2,3,5,7));//5