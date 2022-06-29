function sayhello() {
    document.querySelector(".cont").innerHTML = 'Musir Paqir';
}

function glo() {
    document.body.style.background = "black";
    document.body.style.color = "white";
}

function gla() {
    document.body.style.background = "white";
    document.body.style.color = "black";
    document.body.style.display = "grid";
    document.body.style.alignItems = "center";
    document.body.style.justifyContent = "center";
    document.body.style.height = "100vh";
}

function samar(name) {
    document.write("Твоё имя - " + name)
}