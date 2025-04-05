$(document).ready(function () {
    // Validación del formulario de dudas
    $('#create-question').click(function () {
        $('#question-form').trigger("reset");
        $('#questionModalLabel').text("Crear Duda");
        $('#questionModal').modal('show');
    });

    // Prevenir envío con Enter en los campos de texto
    $('#question-title').on('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const errorAlert = $('<div class="alert alert-danger">Por favor, complete este campo.</div>').appendTo('.modal-body');
            setTimeout(function() {
                errorAlert.remove();
            }, 1500);
            return false;
        }
    });

    // Permitir saltos de línea con Enter en el campo de descripción
    $('#question-description').on('keydown', function(event) {
        if (event.key === 'Enter') {
            // Solo prevenir el envío del formulario, permitir el salto de línea cuando hay contenido
            const value = $(this).val().trim();
            if (value === '') {
                event.preventDefault();
                $(this).addClass('is-invalid');
                const errorAlert = $('<div class="alert alert-danger">Por favor, complete este campo.</div>').appendTo('.modal-body');
                setTimeout(function() {
                    errorAlert.remove();
                }, 1500);
                return false;
            }
            // No prevenir el evento si hay texto, permitiendo el salto de línea
        }
    });

    // Validación personalizada para el campo de descripción
    $('#question-description').on('input', function() {
        const value = $(this).val().trim();
        if (value === '') {
            $(this).addClass('is-invalid');
        } else {
            $(this).removeClass('is-invalid');
        }
    });

    $('#question-form').on('submit', function (event) {
        // No prevenir el comportamiento por defecto si hay campos vacíos
        // Esto permitirá que se muestre la validación nativa del navegador
        const description = $('#question-description').val().trim();
        const title = $('#question-title').val().trim();
        
        // Si todos los campos están completos, prevenir el envío y cerrar el modal
        if (description !== '' && title !== '' && $('#question-form')[0].checkValidity()) {
            event.preventDefault();
            $('#questionModal').modal('hide');
        }
    });

    // Validación del formulario de respuestas
    // Prevenir envío con Enter en el campo de respuesta
    $('#answer-description').on('keydown', function(event) {
        if (event.key === 'Enter') {
            // Solo prevenir el envío del formulario, permitir el salto de línea cuando hay contenido
            const value = $(this).val().trim();
            if (value === '') {
                event.preventDefault();
                $(this).addClass('is-invalid');
                const errorAlert = $('<div class="alert alert-danger">Por favor, complete este campo.</div>').appendTo('.modal-body');
                setTimeout(function() {
                    errorAlert.remove();
                }, 1500);
                return false;
            }
            // No prevenir el evento si hay texto, permitiendo el salto de línea
        }
    });

    // Validación personalizada para el campo de respuesta
    $('#answer-description').on('input', function() {
        const value = $(this).val().trim();
        if (value === '') {
            $(this).addClass('is-invalid');
        } else {
            $(this).removeClass('is-invalid');
        }
    });

    $('#answer-form').on('submit', function (event) {
        // No prevenir el comportamiento por defecto si hay campos vacíos
        // Esto permitirá que se muestre la validación nativa del navegador
        const description = $('#answer-description').val().trim();
        
        // Si todos los campos están completos, prevenir el envío y cerrar el modal
        if (description !== '' && $('#answer-form')[0].checkValidity()) {
            event.preventDefault();
            $('#answerModal').modal('hide');
        }
    });

    // Navegación a página principal
    $('#go-to-page').click(function () {
        window.location.href = 'index.html';
    });
});