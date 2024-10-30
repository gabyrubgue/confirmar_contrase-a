document.getElementById('passwordForm').addEventListener('submit', function(event) {
    const newPassword = document.getElementById('new_password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    const passwordError = document.getElementById('passwordError');

    // Expresión regular para validar contraseñas alfanuméricas con al menos 8 caracteres
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    // Verifica si la nueva contraseña cumple con los requisitos
    if (!passwordRegex.test(newPassword)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'La contraseña debe tener al menos 8 caracteres y ser alfanumérica.',
            confirmButtonText: 'Intentar nuevamente'
        });
        event.preventDefault();  // Evita el envío del formulario
        return;
    }

    // Verifica si las contraseñas coinciden
    if (newPassword !== confirmPassword) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Las contraseñas no coinciden. Intenta nuevamente.',
            confirmButtonText: 'Intentar nuevamente'
        });
        event.preventDefault();  // Evita el envío del formulario
        return;
    }

    // Si todo está bien, mostrar mensaje de éxito
    Swal.fire({
        icon: 'success',
        title: 'Contraseña cambiada con éxito',
        showConfirmButton: false,
        timer: 1500
    }).then(() => {
        // Redirigir a la página principal después del éxito
        window.location.href = "../inicio_logueado/inicio_logueado.html";
    });

    event.preventDefault();  // Evita el envío inmediato del formulario
});

// Funcionalidad para mostrar/ocultar contraseñas
document.getElementById('showPassword').addEventListener('change', function() {
    const newPasswordInput = document.getElementById('new_password');
    const confirmPasswordInput = document.getElementById('confirm_password');

    // Cambia el tipo de los inputs a "text" o "password"
    if (this.checked) {
        newPasswordInput.setAttribute('type', 'text');
        confirmPasswordInput.setAttribute('type', 'text');
    } else {
        newPasswordInput.setAttribute('type', 'password');
        confirmPasswordInput.setAttribute('type', 'password');
    }
});

