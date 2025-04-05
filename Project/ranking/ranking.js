$(document).ready(function() {
    let userRating = 0;

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
    });

    function updateStars(rating) {
        $('.star').each(function() {
            const starRating = $(this).data('rating');
            $(this).toggleClass('active', starRating <= rating);
        });
    }

    // Manejo del formulario
    $('#evaluationForm').submit(function(e) {
        e.preventDefault();
        
        if (userRating === 0) {
            alert('Por favor, selecciona una calificación');
            return;
        }

        if ($('#comentario').val().trim() === '') {
            alert('Por favor, ingresa un comentario');
            return;
        }

        // Solo validación, sin guardar datos
        alert('Formulario validado correctamente');
        resetForm();
    });

    function resetForm() {
        userRating = 0;
        updateStars(0);
        $('#comentario').val('');
    }
});