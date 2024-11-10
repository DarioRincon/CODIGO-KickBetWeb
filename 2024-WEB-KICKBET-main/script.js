    // Evento para el botón de "Iniciar Sesión"
    document.querySelector(".login-btn").addEventListener("click", function() {
        // Aquí puedes redirigir a la página de login
        window.location.href = "login.html"; 
    });

    // Evento para el botón de "Registrarse"
    document.querySelector(".register-btn").addEventListener("click", function() {
        // Aquí puedes redirigir a la página de registro
        window.location.href = "register.html";
    });

    // Evento para el botón de "Ver Pronósticos"
    document.querySelector(".promo-btn").addEventListener("click", function() {
        alert("Redirigiendo a la sección de pronósticos...");
        // Aquí puedes redirigir a la sección de pronósticos
        window.location.href = "pronosticos.html";
    });

    // Eventos para los botones "Ver Detalles" en los partidos destacados
    document.querySelectorAll(".pronostico-btn").forEach(function(button) {
        button.addEventListener("click", function() {
            alert("Mostrando detalles del partido...");
            // Aquí podrías mostrar un modal o redirigir a una página de detalles del partido
        });
    });
    document.querySelectorAll(".nav-links a").forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Evitar que el enlace recargue la página
            const sectionId = this.getAttribute("href").substring(1);
            document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
        });
    });
    // Añadir funcionalidad de desplazamiento suave para los enlaces del menú de navegación
    document.querySelectorAll(".nav-links a").forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Evitar que el enlace recargue la página
            const sectionId = this.getAttribute("href").substring(1); // Obtener el ID de la sección
            document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" }); // Desplazamiento suave
        });
    });
    document.getElementById("switch-to-register").addEventListener("click", function(e) {
        e.preventDefault();
        document.getElementById("login-form").classList.add("hidden");
        document.getElementById("register-form").classList.remove("hidden");
    });

    document.getElementById("switch-to-login").addEventListener("click", function(e) {
        e.preventDefault();
        document.getElementById("register-form").classList.add("hidden");
        document.getElementById("login-form").classList.remove("hidden");
    });
    document.getElementById("register-link").addEventListener("click", function(e) {
        e.preventDefault();
        document.getElementById("login-form").classList.add("hidden");
        document.getElementById("register-form").classList.remove("hidden");
    });

    document.getElementById("login-link").addEventListener("click", function(e) {
        e.preventDefault();
        document.getElementById("register-form").classList.add("hidden");
        document.getElementById("login-form").classList.remove("hidden");
        
    });
    document.querySelectorAll(".nav-links a").forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Evitar que el enlace recargue la página
            const sectionId = this.getAttribute("href").substring(1); // Obtener el ID de la sección
            document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" }); // Desplazamiento suave
        });
    });


    // Evento para el botón de "Iniciar Sesión"
    document.querySelector(".login-btn").addEventListener("click", function() {
        window.location.href = "login.html"; 
    });

    // Evento para el botón de "Registrarse"
    document.querySelector(".register-btn").addEventListener("click", function() {
        window.location.href = "register.html"; 
    });

    // Evento para el botón de "Ver Detalles" en partidos
    const pronosticoBtns = document.querySelectorAll('.pronostico-btn');
    pronosticoBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            alert("Detalles del partido aún no disponibles."); // Aquí podrías redirigir a una página con más detalles.
        });
    });
    // script.js

    // Evento para el botón de "Iniciar Sesión"
    document.querySelector(".login-btn").addEventListener("click", function() {
        window.location.href = "login.html"; 
    });

    // Evento para el botón de "Registrarse"
    document.querySelector(".register-btn").addEventListener("click", function() {
        window.location.href = "register.html";
    });

    // Evento para el botón de "Ver Pronósticos"
    document.querySelector(".promo-btn").addEventListener("click", function() {
        alert("Redirigiendo a la sección de pronósticos...");
        window.location.href = "pronosticos.html";
    });

    // Eventos para los botones "Ver Detalles" en los partidos destacados
    document.querySelectorAll(".pronostico-btn").forEach(function(button) {
        button.addEventListener("click", function() {
            alert("Mostrando detalles del partido...");
        });
    });

    // Función para guardar el pronóstico en localStorage
    function guardarPronostico(partido, pronostico) {
        const pronosticos = JSON.parse(localStorage.getItem('pronosticos')) || {};
        pronosticos[partido] = pronostico;
        localStorage.setItem('pronosticos', JSON.stringify(pronosticos));
    }

    // Evento para los botones "Guardar Pronóstico"
    document.querySelectorAll(".guardar-btn").forEach(function(button) {
        button.addEventListener("click", function() {
            const partido = this.getAttribute("data-partido");
            const pronosticoInput = document.getElementById(`pronostico-${Array.from(button.parentNode.parentNode.children).indexOf(button.parentNode) + 1}`);
            const pronostico = pronosticoInput.value;

            // Validar el pronóstico
            if (pronostico.match(/^\d+-\d+$/)) {
                guardarPronostico(partido, pronostico);
                alert(`Pronóstico para ${partido} guardado: ${pronostico}`);
                pronosticoInput.value = ''; // Limpiar el campo de entrada
            } else {
                alert('Por favor, ingresa un pronóstico válido (Ej: 2-1)');
            }
        });
    });

    // Desplazamiento suave para los enlaces del menú de navegación
    document.querySelectorAll(".nav-links a").forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute("href").substring(1);
            document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
        });
    });

    const { Pool } = require('pg');

    const pool = new Pool({
    user: 'tu_usuario', // Reemplaza con tu usuario de PostgreSQL
    host: 'localhost',  // Reemplaza con tu host de PostgreSQL
    database: 'kickbet', // Reemplaza con el nombre de tu base de datos
    password: 'tu_contraseña', // Reemplaza con tu contraseña
    port: 5432, // Puerto por defecto de PostgreSQL
    });

    module.exports = pool;

    const pool = require('./dbConfig');

    async function insertPrediction(matchId, userId, predictedScoreHome, predictedScoreAway) {
    const query = `
        INSERT INTO predictions (match_id, user_id, predicted_score_home, predicted_score_away)
        VALUES ($1, $2, $3, $4)
        RETURNING id;
    `;

    try {
        const res = await pool.query(query, [matchId, userId, predictedScoreHome, predictedScoreAway]);
        console.log('Prediction inserted with ID:', res.rows[0].id);
    } catch (err) {
        console.error('Error inserting prediction:', err);
    }
    }

    // Ejemplo de uso
    insertPrediction(1, 1, 2, 1);