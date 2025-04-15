$(document).ready(function () {
    // Deshabilitar validación nativa en todos los formularios
    $('form').attr('novalidate', 'novalidate');
    
    // Validación del formulario de dudas
    $('#create-question').click(function () {
        $('#question-form').trigger("reset");
        $('#questionModalLabel').text("Crear Duda");
        $('#questionModal').modal('show');
        // Eliminar cualquier mensaje de error previo
        $('.error-message').remove();
        $('.is-invalid').removeClass('is-invalid');
    });

    // Función para mostrar errores personalizados
    function showCustomError(element, message) {
        // Eliminar mensajes de error previos para este elemento
        $(element).next('.error-message').remove();
        
        // Agregar mensaje de error personalizado
        $('<div class="error-message text-danger mt-1">' + message + '</div>').insertAfter(element);
        
        // Agregar clase de error al elemento
        $(element).addClass('is-invalid');
    }
    
    // Función para limpiar errores
    function clearError(element) {
        $(element).next('.error-message').remove();
        $(element).removeClass('is-invalid');
    }

    // Evitar que el navegador haga su propia validación en los inputs
    $('input, textarea').on('invalid', function(e) {
        e.preventDefault();
        if ($(this).val().trim() === '') {
            showCustomError(this, 'Este campo es obligatorio');
        }
    });

    // Validación para el título
    $('#question-title').on('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            if ($(this).val().trim() === '') {
                showCustomError(this, 'Por favor, ingrese un título para la duda');
            }
            return false;
        }
    });
    
    $('#question-title').on('blur', function() {
        if ($(this).val().trim() === '') {
            showCustomError(this, 'Por favor, ingrese un título para la duda');
        } else {
            clearError(this);
        }
    });
    
    $('#question-title').on('input', function() {
        if ($(this).val().trim() !== '') {
            clearError(this);
        }
    });

    // Validación para la descripción
    $('#question-description').on('blur', function() {
        if ($(this).val().trim() === '') {
            showCustomError(this, 'Por favor, ingrese una descripción de la duda');
        } else {
            clearError(this);
        }
    });

    $('#question-description').on('input', function() {
        if ($(this).val().trim() !== '') {
            clearError(this);
        }
    });

    // Validación del formulario de dudas al enviar
    $('#question-form').on('submit', function (event) {
        // Prevenir el comportamiento por defecto
        event.preventDefault();
        
        let isValid = true;
        
        // Validar título
        if ($('#question-title').val().trim() === '') {
            showCustomError('#question-title', 'Por favor, ingrese un título para la duda');
            isValid = false;
        }
        
        // Validar descripción
        if ($('#question-description').val().trim() === '') {
            showCustomError('#question-description', 'Por favor, ingrese una descripción de la duda');
            isValid = false;
        }
        
        // Si todo es válido, proceder con el envío
        if (isValid) {
            $('#questionModal').modal('hide');
            // Aquí iría el código para enviar los datos al servidor
        }
    });

    // Validación del formulario de respuestas
    $('#answer-description').on('blur', function() {
        if ($(this).val().trim() === '') {
            showCustomError(this, 'Por favor, ingrese una respuesta');
        } else {
            clearError(this);
        }
    });

    $('#answer-description').on('input', function() {
        if ($(this).val().trim() !== '') {
            clearError(this);
        }
    });

    // Validación del formulario de respuestas al enviar
    $('#answer-form').on('submit', function (event) {
        // Prevenir el comportamiento por defecto
        event.preventDefault();
        
        let isValid = true;
        
        // Validar respuesta
        if ($('#answer-description').val().trim() === '') {
            showCustomError('#answer-description', 'Por favor, ingrese una respuesta');
            isValid = false;
        }
        
        // Si todo es válido, proceder con el envío
        if (isValid) {
            $('#answerModal').modal('hide');
            // Aquí iría el código para enviar los datos al servidor
        }
    });

    // Navegación a página principal
    $('#go-to-page').click(function () {
        window.location.href = 'index.html';
    });
});