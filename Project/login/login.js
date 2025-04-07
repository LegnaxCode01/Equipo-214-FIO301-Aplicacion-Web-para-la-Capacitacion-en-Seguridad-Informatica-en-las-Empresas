$(document).ready(function() {
    // Desactivar validación HTML5 nativa para usar nuestras validaciones personalizadas
    $("#loginForm").attr("novalidate", "novalidate");

    // Validación para el campo de usuario
    $("#username").on("input", function(e) {
        var input = $(this).val();
        // Eliminar caracteres no permitidos
        var sanitized = input.replace(/[^a-zA-Z0-9]/g, '');
        $(this).val(sanitized);
    });

    // Mostrar feedback de validación
    function showValidationFeedback(element, isValid, message) {
        var feedbackId = element.attr("id") + "Feedback";
        $("#" + feedbackId).remove();
        
        element.removeClass("is-valid is-invalid");
        if (isValid === true) {
            element.addClass("is-valid");
        } else if (isValid === false) {
            element.addClass("is-invalid");
            element.after('<div id="' + feedbackId + '" class="invalid-feedback">' + message + '</div>');
        }
    }

    // Validar formulario completo
    $("#loginForm").on("submit", function(event) {
        event.preventDefault();
        let formIsValid = true;

        var username = $("#username").val().trim();
        var password = $("#password").val().trim();

        // Validar usuario
        if (username === "") {
            showValidationFeedback($("#username"), false, "Por favor, ingrese su nombre de usuario.");
            formIsValid = false;
        } else if (!username.match(/^[a-zA-Z0-9]+$/)) {
            showValidationFeedback($("#username"), false, "El usuario no puede contener símbolos especiales.");
            formIsValid = false;
        } else {
            showValidationFeedback($("#username"), true, "");
        }

        // Validar contraseña
        if (password === "") {
            showValidationFeedback($("#password"), false, "Por favor, ingrese su contraseña.");
            formIsValid = false;
        } else {
            showValidationFeedback($("#password"), true, "");
        }

        // Enviar formulario si todo es válido
        if (formIsValid) {
            // Simular envío exitoso
            alert("Formulario enviado con éxito");
            $("#loginForm")[0].reset();
            // Limpiar estados de validación
            $(".is-valid, .is-invalid").removeClass("is-valid is-invalid");
            $(".invalid-feedback").remove();
        }
    });
});