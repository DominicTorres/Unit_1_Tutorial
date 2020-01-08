"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Dominic Torres
   Date: 1/6/20

*/

document.getElementById("dateNow").innerHTML="m/d/y<br/>h:m:s";

//created a variable for today's date
var date = new Date("January 7, 2020 4:46:39");
//changed today's date
var thisDate = date.toLocaleDateString(); //thisDate == 1/7/20
var thisTime = date.toLocaleTimeString(); //thisTime == 4:46:39 PM

document.getElementById("dateNow").innerHTML = thisDate + "<br/>" + thisTime;

//changed the countdown clock
document.getElementById("days").innerHTML = "DD";
document.getElementById("hrs").innerHTML = "HH";
document.getElementById("mins").innerHTML = "MM";
document.getElementById("secs").innerHTML = "SS";

var daysTill = 365 - date.getDate() -1;
var hoursTill = 24 - date.getHours() -1;
var minTill = 60 - date.getMinutes() -1;
var secTill = 60 - date.getSeconds();

document.getElementById("days").innerHTML = daysTill;
document.getElementById("hrs").innerHTML = hoursTill;
document.getElementById("mins").innerHTML = minTill;
document.getElementById("secs").innerHTML = secTill;

