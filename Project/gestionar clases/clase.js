$(document).ready(function () {
    // Función para validar URLs
    function isValidUrl(url) {
        // Verificar si contiene espacios
        if (url.includes(' ')) {
            return false;
        }
        try {
            new URL(url);
            return true;
        } catch (e) {
            return false;
        }
    }

    // Función para validar el formato del título (solo letras, números, puntos y paréntesis)
    function isValidTitle(title) {
        // Expresión regular que permite letras, números, puntos y paréntesis
        const titleRegex = /^[a-zA-Z0-9.()\s]+$/;
        return titleRegex.test(title);
    }

    // Validación del campo de URL en tiempo real
    $('#video-url').on('input', function() {
        const url = $(this).val();
        if (url && !isValidUrl(url)) {
            $(this).addClass('is-invalid');
            // Mensaje específico si contiene espacios
            if (url.includes(' ')) {
                $(this).next('.invalid-feedback').text('La URL no puede contener espacios.');
            } else {
                $(this).next('.invalid-feedback').text('Por favor, ingrese una URL válida (debe comenzar con http:// o https://)');
            }
        } else {
            $(this).removeClass('is-invalid');
        }
    });

    // Validación del campo de título en tiempo real
    $('#video-title').on('input', function() {
        const title = $(this).val().trim();
        if (!title) {
            $(this).addClass('is-invalid');
            $(this).next('.invalid-feedback').text('Por favor, ingrese un título válido.');
        } else if (!isValidTitle(title)) {
            $(this).addClass('is-invalid');
            $(this).next('.invalid-feedback').text('El título solo puede contener letras, números, puntos y paréntesis.');
        } else {
            $(this).removeClass('is-invalid');
        }
    });

    // Validación del formulario al enviar
    $('#video-form').on('submit', function (event) {
        event.preventDefault();
        
        const title = $('#video-title').val().trim();
        const url = $('#video-url').val().trim();
        let isValid = true;

        // Validar título
        if (!title) {
            $('#video-title').addClass('is-invalid');
            $('#video-title').next('.invalid-feedback').text('Por favor, ingrese un título válido.');
            isValid = false;
        } else if (!isValidTitle(title)) {
            $('#video-title').addClass('is-invalid');
            $('#video-title').next('.invalid-feedback').text('El título solo puede contener letras, números, puntos y paréntesis.');
            isValid = false;
        } else {
            $('#video-title').removeClass('is-invalid');
        }

        // Validar URL
        if (!url || !isValidUrl(url)) {
            $('#video-url').addClass('is-invalid');
            // Mensaje específico si contiene espacios
            if (url.includes(' ')) {
                $('#video-url').next('.invalid-feedback').text('La URL no puede contener espacios.');
            } else {
                $('#video-url').next('.invalid-feedback').text('Por favor, ingrese una URL válida (debe comenzar con http:// o https://)');
            }
            isValid = false;
        } else {
            $('#video-url').removeClass('is-invalid');
        }

        // Si todo es válido, cerrar el modal
        if (isValid) {
            $('#videoModal').modal('hide');
        }
    });

    // Botón para crear video (solo abre el modal)
    $('#create-video').click(function () {
        $('#video-form').trigger("reset");
        $('#videoModalLabel').text("Crear Video");
        $('#videoModal').modal('show');
    });

    // Botón para ir a la página de inicio
    $('#go-to-page').click(function () {
        window.location.href = 'index.html';
    });

    // Búsqueda (sin funcionalidad real)
    $('#search-input').on('input', function() {
        const searchTerm = $(this).val().toLowerCase().trim();
        if (searchTerm === '') {
            // No se realiza ninguna acción real
        } else {
            // No se realiza ninguna acción real
        }
    });
});