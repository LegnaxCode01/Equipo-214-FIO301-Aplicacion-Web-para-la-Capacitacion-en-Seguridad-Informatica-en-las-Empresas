$(document).ready(function() {
    // Prevenir el comportamiento predeterminado de validación HTML5
    document.addEventListener('invalid', (function(){
        return function(e) {
            e.preventDefault();
        };
    })(), true);

    // Sanitar entrada de usuario en tiempo real
    $("#username").on("input", function(e) {
        var input = $(this).val();
        // Eliminar caracteres no permitidos
        var sanitized = input.replace(/[^a-zA-Z0-9]/g, '');
        $(this).val(sanitized);
    });

    // Función para mostrar errores
    function mostrarError(elemento, mensaje) {
        $(elemento).addClass("is-invalid");
        $(elemento + "-error").text(mensaje).show();
    }

    // Función para limpiar errores
    function limpiarError(elemento) {
        $(elemento).removeClass("is-invalid");
        $(elemento + "-error").text("").hide();
    }

    // Validar formulario al enviar
    $("#registroForm").on("submit", function(event) {
        event.preventDefault();
        
        // Limpiar errores previos
        limpiarError("#username");
        limpiarError("#password");

        var formValido = true;
        var username = $("#username").val().trim();
        var password = $("#password").val().trim();

        // Validar username
        if (username === "") {
            mostrarError("#username", "Por favor, ingrese un nombre de usuario.");
            formValido = false;
        } else if (!username.match(/^[a-zA-Z0-9]+$/)) {
            mostrarError("#username", "El usuario solo puede contener letras y números.");
            formValido = false;
        }

        // Validar password
        if (password === "") {
            mostrarError("#password", "Por favor, ingrese una contraseña.");
            formValido = false;
        }

        // Si el formulario es válido
        if (formValido) {
            // Aquí se enviaría el formulario a través de AJAX
            console.log("Formulario válido, datos:", { username, password });
            
            // Limpiar los campos del formulario
            $("#username").val("");
            $("#password").val("");
            
            // Mostrar mensaje de éxito
            alert("Registro completado correctamente");
        }
    });

    // Limpiar error al escribir en el campo
    $("#username, #password").on("input", function() {
        limpiarError("#" + $(this).attr("id"));
    });
});