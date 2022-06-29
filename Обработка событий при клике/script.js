const testBTN = document.querySelector(".btn-1");

testBTN.addEventListener("click" , function(){
    document.body.style.backgroundColor = "lightblue";
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";
    document.querySelector(".btn-1").style.padding = "15px";
    document.querySelector(".btn-1").style.backgroundColor = "yellow";
    document.querySelector(".btn-1").style.border = "0px";
    document.querySelector(".btn-1").style.fontSize = "25px";
})