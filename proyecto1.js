const formularioAcceso = document.querySelector(".RegistroDeFormulario");
const acceder = document.querySelector("#acceder")
acceder.addEventListener("click", function () {
    const mail = document.querySelector("input[type='email']").value;
    const contraseña = document.querySelector("input[type='password']").value;

    console.log(mail + contraseña)
    // Verificar que el correo electrónico y la contraseña no estén vacíos
    if (!mail || !contraseña) {
        return alert("Por favor, ingrese su correo electrónico y contraseña.");
    }

    const Users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = Users.find(user => user.mail === mail && user.contraseña === contraseña);

    if (!validUser || validUser.contraseña !== contraseña) {
        return alert("El usuario o la contraseña son incorrectos o no están registrados.");
    }
    localStorage.setItem("usuarioAgregado", JSON.stringify(validUser))
    alert('¡Bienvenido ' + validUser.name + '!');
    window.location.href= "folder2.html"
})