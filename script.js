// Manejo del menú desplegable móvil
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Cerrar menú móvil al hacer clic en un enlace
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Lógica de Pestañas Académicas (Inicial, Primaria, Secundaria)
function cambiarNivel(nivel) {
    // Ocultar todos los contenidos
    const contents = document.querySelectorAll('.nivel-content');
    contents.forEach(el => el.classList.add('hidden'));

    // Remover clases activas de todos los botones
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.classList.remove('bg-primary', 'text-white', 'shadow');
        btn.classList.add('bg-white', 'text-slate-600', 'shadow-sm');
    });

    // Mostrar el contenido seleccionado
    const activeContent = document.getElementById(`content-${nivel}`);
    if (activeContent) {
        activeContent.classList.remove('hidden');
    }

    // Activar el botón correspondiente
    const activeBtn = document.getElementById(`btn-${nivel}`);
    if (activeBtn) {
        activeBtn.classList.remove('bg-white', 'text-slate-600', 'shadow-sm');
        activeBtn.classList.add('bg-primary', 'text-white', 'shadow');
    }
}

// Envío del formulario de admisión y visualización del modal personalizado
function enviarFormulario(event) {
    event.preventDefault();

    // Obtener valores (puedes usarlos para enviar a una base de datos o API en el futuro)
    const nombre = document.getElementById('nombre-padre').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const nivel = document.getElementById('nivel-postula').value;

    console.log("Datos de admisión registrados:", { nombre, telefono, email, nivel });

    // Mostrar el modal de éxito
    const modal = document.getElementById('modal-exito');
    if (modal) {
        modal.classList.remove('hidden');
    }

    // Limpiar el formulario
    document.getElementById('form-admision').reset();
}

// Cerrar el modal de éxito
function cerrarModal() {
    const modal = document.getElementById('modal-exito');
    if (modal) {
        modal.classList.add('hidden');
    }
}

// Simulación de Portal de Padres
function abrirPortal() {
    alert("Redirigiendo al sistema académico del Portal de Padres...");
}