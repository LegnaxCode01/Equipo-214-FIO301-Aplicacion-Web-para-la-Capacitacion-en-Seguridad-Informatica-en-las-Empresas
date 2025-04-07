$(document).ready(function() {
    let userRating = 0;
    let formValidated = false;

    // Manejo de estrellas
    $('.star').hover(
        function() {
            const rating = $(this).data('rating');
            updateStars(rating);
        },
        function() {
            updateStars(userRating);
        }
    );

    $('.star').click(function() {
        userRating = $(this).data('rating');
        updateStars(userRating);
        removeError('rating');
    });

    function updateStars(rating) {
        $('.star').each(function() {
            const starRating = $(this).data('rating');
            $(this).toggleClass('active', starRating <= rating);
        });
    }

    // Quitar mensaje de error al escribir en el campo de comentario
    $('#comentario').on('input', function() {
        if($(this).val().trim() !== '') {
            removeError('comentario');
        }
    });

    // Validación personalizada
    function showError(field, message) {
        if (field === 'rating') {
            if ($('#rating-error').length === 0) {
                $('.rating-stars').after('<div id="rating-error" class="text-danger mt-2">' + message + '</div>');
            }
        } else if (field === 'comentario') {
            if ($('#comentario-error').length === 0) {
                $('#comentario').after('<div id="comentario-error" class="text-danger mt-2">' + message + '</div>');
            }
        }
        formValidated = false;
    }

    function removeError(field) {
        if (field === 'rating') {
            $('#rating-error').remove();
        } else if (field === 'comentario') {
            $('#comentario-error').remove();
        }
    }

    // Manejo del formulario
    $('#evaluationForm').submit(function(e) {
        e.preventDefault();
        formValidated = true;
        
        if (userRating === 0) {
            showError('rating', 'Por favor, selecciona una calificación');
            formValidated = false;
        } else {
            removeError('rating');
        }

        if ($('#comentario').val().trim() === '') {
            showError('comentario', 'Por favor, ingresa un comentario');
            formValidated = false;
        } else {
            removeError('comentario');
        }

        // Si el formulario está validado
        if (formValidated) {
            alert('Formulario validado correctamente');
            resetForm();
        }
    });

    function resetForm() {
        userRating = 0;
        updateStars(0);
        $('#comentario').val('');
        removeError('rating');
        removeError('comentario');
    }
});