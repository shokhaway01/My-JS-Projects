let header;
const body = document.querySelector("body");

document.write(body + " querySelector");

const container = document.getElementById("container");
document.write("<br> <hr> <br>" + container + "getElementById")

const container1 = document.getElementsByClassName("   container");
document.write("<br> <hr> <br>" + container1 + "   getElementByClassName")
document.write("<br> <hr> <br>")

const glava = document.querySelectorAll(".glava");
console.log(glava + " querySelectorAll");