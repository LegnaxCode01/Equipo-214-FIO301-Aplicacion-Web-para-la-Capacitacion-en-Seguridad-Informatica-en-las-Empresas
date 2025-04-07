$(document).ready(function () {
    // Eliminar validación HTML5 nativa
    $('#questionnaire-form input, #questionnaire-form select').attr('novalidate', true);
    $('#questionnaire-form').attr('novalidate', true);
    $('#answer-form').attr('novalidate', true);

    // Función para mostrar errores personalizados
    function showError(element, message) {
        // Eliminar mensajes de error anteriores
        $(element).siblings('.error-message').remove();
        
        // Agregar nuevo mensaje de error y clase de error
        $(`<div class="error-message text-danger">${message}</div>`).insertAfter(element);
        $(element).addClass('is-invalid');
    }
    
    // Función para eliminar mensajes de error
    function clearError(element) {
        $(element).siblings('.error-message').remove();
        $(element).removeClass('is-invalid');
    }

    // Validación al escribir en los campos
    $('#questionnaire-form input, #questionnaire-form select').on('input change', function() {
        if ($(this).val().trim() !== '') {
            clearError(this);
        }
    });

    // Validación del formulario de cuestionario
    $('#questionnaire-form').on('submit', function (event) {
        event.preventDefault();
        let isValid = true;
        
        // Limpiar mensajes de error previos
        $('.error-message').remove();
        $('.is-invalid').removeClass('is-invalid');
        
        // Validar título
        if ($('#questionnaire-title').val().trim() === '') {
            showError('#questionnaire-title', 'Ingresa un título para el cuestionario');
            isValid = false;
        }
        
        // Validar preguntas y opciones
        for (let i = 1; i <= 3; i++) {
            // Validar pregunta
            if ($(`#question${i}`).val().trim() === '') {
                showError(`#question${i}`, 'Ingresa la pregunta');
                isValid = false;
            }
            
            // Validar opciones
            for (let j = 1; j <= 3; j++) {
                if ($(`#option${i}_${j}`).val().trim() === '') {
                    showError(`#option${i}_${j}`, 'Ingresa la opción');
                    isValid = false;
                }
            }
        }
        
        // Si todos los campos están completos
        if (isValid) {
            // Cerrar modal inmediatamente
            $('#questionnaireModal').modal('hide');
            // Limpiar el formulario
            $('#questionnaire-form').trigger('reset');
            $('.error-message').remove();
            $('.is-invalid').removeClass('is-invalid');
        } else {
            // Scroll al primer error
            $('html, body').animate({
                scrollTop: $('.is-invalid').first().offset().top - 100
            }, 200);
        }
    });

    // Validación del formulario de respuestas
    $('#answer-form').on('submit', function (event) {
        event.preventDefault();
        let isValid = true;
        
        // Limpiar mensajes de error previos
        $('.error-message').remove();
        
        // Verificar si se seleccionó una respuesta
        if ($('input[name="answer"]:checked').length === 0) {
            $('<div class="error-message text-danger">Por favor, selecciona una respuesta.</div>')
                .insertAfter('.form-check:last');
            isValid = false;
        }
        
        // Si se seleccionó una respuesta
        if (isValid) {
            $('#answerModal').modal('hide');
            $('.error-message').remove();
        }
    });

    // Limpiar formulario al abrir el modal
    $('#create-questionnaire').on('click', function() {
        $('#questionnaire-form').trigger('reset');
        $('.error-message').remove();
        $('.is-invalid').removeClass('is-invalid');
    });
    
    // Redirección al inicio
    $('#go-to-page').click(function() {
        window.location.href = 'index.html';
    });
});