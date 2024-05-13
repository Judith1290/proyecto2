function mostrarDatos() {
    let usuario = JSON.parse(localStorage.getItem("usuarioAgregado"));

    document.getElementById("nombreUser").innerHTML = usuario.name;
}

mostrarDatos();