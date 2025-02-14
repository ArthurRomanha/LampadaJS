let lampada = document.getElementById("lampada");
let estadoLampada = "desligada";
const ligada = () => {
    if (!(estadoLampada == "quebrada")) {
        lampada.src = "IMG/ligada.jpg";
        estadoLampada = "ligada";
    }
}
const desligada = () => {
    if (!(estadoLampada == "quebrada")) {
        lampada.src = "IMG/desligada.jpg";
        estadoLampada = "desligada";
    }
}
const quebra = () => {
    lampada.src = "IMG/quebrada.jpg";
    estadoLampada = "quebrada"
}
lampada.addEventListener("dblclick", quebra);
lampada.addEventListener("onmouseover", () => {
    if (!(estadoLampada == "quebrada")) {
        lampada.src = "IMG/ligada.jpg";
        estadoLampada = "ligada";
    }
})
lampada.addEventListener("onmouseout", () => {
    if (!(estadoLampada == "quebrada")) {
        lampada.src = "IMG/desligada.jpg";
        estadoLampada = "desligada";
    }
})
