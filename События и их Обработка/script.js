function hello(a , b) {
    let valli = a + b;
    return valli;
}

let value = hello(122 , 255)
document.write(value)



const cont = document.querySelector(".cont");

window.addEventListener("scroll" , function() {
    let scrollPosition = window.scrollY

    if(scrollPosition > 10) {
        cont.classList.add("red");
    } else {
        cont.classList.remove("red")
    };

    // console.log("scrolled")
    // cont.classList.add("red")
});