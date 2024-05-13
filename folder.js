// Selecciona el formulario por su clase "RegistroDeFormulario"
const formularioRegistro = document.querySelector(".Registro");

// Agrega un evento de escucha para el evento 'submit' en el formulario
formularioRegistro.addEventListener('submit', (e) => {
    // Previene el comportamiento por defecto de envío del formulario
    e.preventDefault();

    // Obtiene el valor del input de nombre
    const name = document.querySelector("input[type='text']").value;

    // Obtiene el valor del input de email
    const mail = document.querySelector("input[type='email']").value;

    // Obtiene el valor del input de contraseña
    const contraseña = document.querySelector("input[type='password']").value;

    // Obtiene los usuarios del localStorage o crea un array vacío si no hay ninguno
    const Users = JSON.parse(localStorage.getItem("users")) || [];

    // Busca si el usuario ya está registrado por su email
    const isUserRegistered = Users.find(user => user.mail === mail);

    // Si el usuario ya está registrado, muestra una alerta y sale de la función
    if (isUserRegistered) {
        return alert("El usuario ya está registrado!");
    }

    // Si el usuario no está registrado, agrega un nuevo usuario al array Users
    Users.push({ name: name, mail: mail, contraseña: contraseña });

    // Guarda el array Users actualizado en el localStorage
    localStorage.setItem('users', JSON.stringify(Users));

    // Muestra una alerta indicando que el registro fue exitoso
    alert("Registro Exitoso");
});
