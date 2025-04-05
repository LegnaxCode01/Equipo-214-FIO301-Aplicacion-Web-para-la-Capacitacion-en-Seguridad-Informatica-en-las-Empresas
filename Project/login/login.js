$(document).ready(function() {
    $("#username").on("input", function(e) {
        var input = $(this).val();
        // Eliminar caracteres no permitidos
        var sanitized = input.replace(/[^a-zA-Z0-9]/g, '');
        $(this).val(sanitized);
    });

    $("#loginForm").on("submit", function(event) {
        event.preventDefault();

        var username = $("#username").val().trim();
        var password = $("#password").val().trim();

        if (username === "") {
            alert("Por favor, ingrese su nombre de usuario.");
            return;
        }

        if (!username.match(/^[a-zA-Z0-9]+$/)) {
            alert("El usuario no puede contener símbolos especiales.");
            return;
        }

        if (password === "") {
            alert("Por favor, ingrese su contraseña.");
            return;
        }

        // Simular envío exitoso
        alert("Formulario enviado con éxito");
        $("#loginForm")[0].reset();
    });
});