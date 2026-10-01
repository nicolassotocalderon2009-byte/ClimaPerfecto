document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Funcionalidad de Menú Hamburguesa para Móviles
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic en un enlace (en móviles)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // 2. Modo Oscuro / Claro
    const darkModeBtn = document.getElementById('darkModeToggle');
    
    // Comprobar si el usuario ya tenía preferencia guardada en su navegador
    if(localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        darkModeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>'; // Cambia icono a sol
    }

    darkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Guardar preferencia y cambiar el ícono visualmente
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            darkModeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        } else {
            localStorage.setItem('theme', 'light');
            darkModeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
    });

    // 3. Validación de Formulario de Contacto
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita que la página se recargue

        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        // Validar que no haya campos vacíos
        if (nombre === '' || email === '' || mensaje === '') {
            formMessage.textContent = '⚠️ Por favor, completa todos los campos.';
            formMessage.className = 'form-message error-text';
            return;
        }

        // Validación simple de formato de correo usando expresión regular
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            formMessage.textContent = '⚠️ Por favor, ingresa un correo electrónico válido.';
            formMessage.className = 'form-message error-text';
            return;
        }

        // Si todo está correcto (Simulación de envío)
        formMessage.textContent = '✅ ¡Gracias por tu mensaje! Nos pondremos en contacto muy pronto.';
        formMessage.className = 'form-message success-text';
        
        // Limpiar el formulario
        contactForm.reset();

        // Borrar el mensaje de éxito después de 5 segundos
        setTimeout(() => {
            formMessage.textContent = '';
        }, 5000);
    });
});