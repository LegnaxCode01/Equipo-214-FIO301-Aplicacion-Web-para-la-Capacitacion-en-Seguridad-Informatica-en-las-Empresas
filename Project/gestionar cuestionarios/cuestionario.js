$(document).ready(function () {
    // Validación del formulario de cuestionario
    $('#questionnaire-form').on('submit', function (event) {
        event.preventDefault();
        
        // Obtener valores de los campos
        const title = $('#questionnaire-title').val();
        const question1 = $('#question1').val();
        const option1_1 = $('#option1_1').val();
        const option1_2 = $('#option1_2').val();
        const option1_3 = $('#option1_3').val();
        const correctOption1 = $('#correct-option1').val();
        
        const question2 = $('#question2').val();
        const option2_1 = $('#option2_1').val();
        const option2_2 = $('#option2_2').val();
        const option2_3 = $('#option2_3').val();
        const correctOption2 = $('#correct-option2').val();
        
        const question3 = $('#question3').val();
        const option3_1 = $('#option3_1').val();
        const option3_2 = $('#option3_2').val();
        const option3_3 = $('#option3_3').val();
        const correctOption3 = $('#correct-option3').val();
        
        // Validar que todos los campos estén completos
        if (!title || !question1 || !option1_1 || !option1_2 || !option1_3 || !correctOption1 ||
            !question2 || !option2_1 || !option2_2 || !option2_3 || !correctOption2 ||
            !question3 || !option3_1 || !option3_2 || !option3_3 || !correctOption3) {
            $('<div class="alert alert-danger">Por favor, completa todos los campos.</div>')
                .appendTo('.modal-body')
                .delay(2000)
                .fadeOut();
            return;
        }
        
        // Si todos los campos están completos - cerrar modal inmediatamente
        $('#questionnaireModal').modal('hide');
        // Limpiar el formulario
        $('#questionnaire-form').trigger('reset');
        $('.alert').remove();
    });

    // Validación del formulario de respuestas
    $('#answer-form').on('submit', function (event) {
        event.preventDefault();
        
        // Verificar si se seleccionó una respuesta
        if ($('input[name="answer"]:checked').length === 0) {
            $('<div class="alert alert-danger">Por favor, selecciona una respuesta.</div>')
                .appendTo('.modal-body')
                .delay(2000)
                .fadeOut();
            return;
        }
        
        // Si se seleccionó una respuesta
        $('#answerModal').modal('hide');
        $('.alert').remove();
    });

    // Limpiar formulario al abrir el modal
    $('#create-questionnaire').on('click', function() {
        $('#questionnaire-form').trigger('reset');
    });
    
    // Redirección al inicio
    $('#go-to-page').click(function() {
        window.location.href = 'index.html';
    });
});