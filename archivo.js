// Almacenar los datos de los archivos en un objeto para persistencia
var fileData = [];

// Seleccionar el botón de subir
const subirButton = document.getElementById('subir');

// Agregar un evento de clic al botón de subir
subirButton.addEventListener('click', function () {
    // Obtener los valores de los campos de entrada
    const fileName = document.getElementById("fileName").value;
    const descripcion = document.getElementById("fileDescription").value;
    const QR = document.getElementById("QR").value;

    // Verificar si se han proporcionado los datos necesarios
    if (!fileName || !descripcion || !QR) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Almacenar información del archivo en la lista
    fileData.push({ name: fileName, description: descripcion, url: QR });

    // Mostrar el archivo en la lista de archivos subidos
    displayUploadedFile(fileName, descripcion, QR);

    // Guardar los datos en el almacenamiento local
    localStorage.setItem("uploadedFiles", JSON.stringify(fileData));
});

// Función para mostrar archivos subidos desde localStorage al cargar la página
window.onload = function () {
    var storedFiles = JSON.parse(localStorage.getItem("uploadedFiles")) || [];
    storedFiles.forEach(function (file) {
        displayUploadedFile(file.name, file.description, file.url);
    });
};

// Función para mostrar un archivo subido en la lista
function displayUploadedFile(fileName, fileDescription, fileUrl) {
    // Crear elemento <li> para mostrar el archivo subido
    var listItem = document.createElement("li");

    // Mostrar el nombre y la descripción del archivo
    listItem.textContent = fileName + " - " + fileDescription;

    // Crear el enlace de descarga (en este caso, solo para visualizar)
    var viewLink = document.createElement("a");
    viewLink.textContent = "Ver";
    viewLink.href = fileUrl;
    viewLink.target = "_blank"; // Abrir en una nueva pestaña
    listItem.appendChild(viewLink);

    // Agregar botón de eliminar
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.onclick = function () {
        deleteUploadedFile(fileName);
        listItem.parentNode.removeChild(listItem); // Eliminar el elemento de la lista
    };
    listItem.appendChild(deleteButton);

    // Mostrar el archivo subido en la lista de archivos subidos
    document.getElementById("selectedFiles").appendChild(listItem);
}

// Función para eliminar un archivo subido
function deleteUploadedFile(fileName) {
    // Filtrar el archivo a eliminar
    fileData = fileData.filter(function (file) {
        return file.name !== fileName;
    });

    // Actualizar el almacenamiento local
    localStorage.setItem("uploadedFiles", JSON.stringify(fileData));
}
