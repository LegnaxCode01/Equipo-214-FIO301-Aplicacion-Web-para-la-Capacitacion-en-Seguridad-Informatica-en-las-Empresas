$(document).ready(function() {
    $("#username").on("input", function(e) {
        var input = $(this).val();
        // Eliminar caracteres no permitidos
        var sanitized = input.replace(/[^a-zA-Z0-9]/g, '');
        $(this).val(sanitized);
    });

    $("#registroForm").on("submit", function(event) {
        event.preventDefault();

        var username = $("#username").val().trim();
        var password = $("#password").val().trim();

        if (username === "") {
            alert("Por favor, ingrese un nombre de usuario.");
            return;
        }

        if (!username.match(/^[a-zA-Z0-9]+$/)) {
            alert("El usuario solo puede contener letras y números.");
            return;
        }

        if (password === "") {
            alert("Por favor, ingrese una contraseña.");
            return;
        }

        // Mostrar mensaje de formulario enviado
        alert("Formulario enviado correctamente");
        
        // Limpiar los campos del formulario
        $("#username").val("");
        $("#password").val("");
    });
});