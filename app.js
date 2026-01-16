// 1. Validación de Nombre
document.getElementById("nombre").addEventListener("input", function () {
    var nombreInput = this;
    var msgNombre = document.getElementById("msgNombre");

    // Eliminar números del valor
    var nombre = nombreInput.value.replace(/[0-9]/g, '');
    nombreInput.value = nombre;

    // Validar longitud y contenido
    if (nombre.length < 2 || nombre.length > 16) {
        nombreInput.style.borderColor = "#ff6b6b";
        nombreInput.style.backgroundColor = "#fff5f5";
        msgNombre.style.color = "#d62323";
        msgNombre.textContent = "Debe contener 2 caracteres mínimo y no más de 16 caracteres";
    } else {
        nombreInput.style.borderColor = "#33c446ff";
        nombreInput.style.backgroundColor = "#f0fff8";
        msgNombre.style.color = "#0c7a3c";
        msgNombre.textContent = "Válido";
    }
});

// 2. Validación de Apellido
document.getElementById("apellido").addEventListener("input", function () {
    var apellidoInput = this
    var msgApellido = document.getElementById("msgApellido")

    var apellido = apellidoInput.value.replace(/[0-9]/g, '');
    apellidoInput.value = apellido;

    if (apellido.length < 2 || apellido.length > 32) {
        apellidoInput.style.borderColor = "#ff6b6b";
        apellidoInput.style.backgroundColor = "#fff5f5";
        msgApellido.style.color = "#d62323";
        msgApellido.textContent = "Debe contener 2 caracteres mínimo y no mas de 16 caracteres"
    } else {
        apellidoInput.style.borderColor = "#33c446ff";
        apellidoInput.style.backgroundColor = "#f0fff8";
        msgApellido.style.color = "#0c7a3c";
        msgApellido.textContent = "Válido";
    }
})

// 3. Validación de Edad
document.getElementById("edad").addEventListener("input", function () {
    var edadInput = this;
    var msgEdad = document.getElementById("msgEdad");
    var edad = parseInt(edadInput.value);

    if (isNaN(edad) || edad < 16 || edad > 121) {
        edadInput.style.borderColor = "#ff6b6b";
        edadInput.style.backgroundColor = "#fff5f5";
        msgEdad.style.color = "#d62323";
        msgEdad.textContent = "Debe ser número entre 16 y 121";
    } else {
        edadInput.style.borderColor = "#33c446ff";
        edadInput.style.backgroundColor = "#f0fff8";
        msgEdad.style.color = "#0c7a3c";
        msgEdad.textContent = "Válido";
    }
});


// 4. Validación de Email
document.getElementById("email").addEventListener("input", function () {
    var emailInput = this;
    var msgEmail = document.getElementById("msgEmail");
    var email = emailInput.value;

    if (email.length < 6 || !email.includes("@") || !email.includes(".")) {
        emailInput.style.borderColor = "#ff6b6b";
        emailInput.style.backgroundColor = "#fff5f5";
        msgEmail.style.color = "#d62323";
        msgEmail.textContent = "Debe tener @ y ., min 6 chars, no yahoo";
    } else {
        emailInput.style.borderColor = "#33c446ff";
        emailInput.style.backgroundColor = "#f0fff8";
        msgEmail.style.color = "#0c7a3c";
        msgEmail.textContent = "Válido";
    }
});

// 5. Validación de Teléfono 
function validarTelefono() {
    var telefono = document.getElementById('telefono');
    var msgTelefono = document.getElementById('msgTelefono');
    var telefonoValue = telefono.value.trim();

    // Si no hay mensaje container, lo creamos
    if (!msgTelefono) {
        msgTelefono = document.createElement('small');
        msgTelefono.id = 'msgTelefono';
        msgTelefono.className = 'msg';
        telefono.parentNode.appendChild(msgTelefono);
    }

    // Expresión regular para teléfono español (9 dígitos)
    var telefonoRegex = /^[679][0-9]{8}$/;

    if (telefonoValue === '') {
        telefono.style.borderColor = "#ff6b6b";
        telefono.style.backgroundColor = "#fff5f5";
        msgTelefono.style.color = '#d62323';
        msgTelefono.textContent = 'El teléfono es obligatorio';
        return false;
    } else if (!telefonoRegex.test(telefonoValue)) {
        telefono.style.borderColor = "#ff6b6b";
        telefono.style.backgroundColor = "#fff5f5";
        msgTelefono.style.color = '#d62323';
        msgTelefono.textContent = 'Teléfono no válido (9 dígitos, empezando por 6, 7 o 9)';
        return false;
    } else {
        telefono.style.borderColor = "#33c446ff";
        telefono.style.backgroundColor = "#f0fff8";
        msgTelefono.style.color = '#0c7a3c';
        msgTelefono.textContent = '✓ Teléfono válido';
        return true;
    }
}

// Event listener para validar en tiempo real mientras se escribe
document.getElementById('telefono').addEventListener('input', validarTelefono);

// También validar al perder el foco
document.getElementById('telefono').addEventListener('blur', validarTelefono);



// 6. Validación checkboxes
function validarCheckboxes() {
    var checkboxes = document.querySelectorAll('input[name="deportes"]:checked');
    var msgMods = document.getElementById('msgMods');
    var seleccionados = checkboxes.length;

    if (seleccionados < 1) {
        msgMods.style.color = '#d62323';
        msgMods.textContent = 'Debe seleccionar al menos 1 deporte';
        return false;
    } else if (seleccionados > 3) {
        msgMods.style.color = '#d62323';
        msgMods.textContent = 'No puedes seleccionar mas de 3 deportes';
        return false;
    } else {
        msgMods.style.color = '#0c7a3c';
        msgMods.textContent = 'Válido (' + seleccionados + ' seleccionados)';
        return true;
    }
}

// Event listener corregido
document.getElementById('listDeportes').addEventListener('change', validarCheckboxes);


// PARTE CREACIÓN Y ELIMINACIÓN DINÁMICA DE ELEMENTOS (DOM)

let deportes = ["Golf", "Boxeo", "Bádminton", "Frontón", "Hockey"];
let deportesAñadidos = []; // Array para rastrear qué deportes se añadieron

// Añadir deporte
document.getElementById("añadirBOM").addEventListener("click", function (e) {
    e.preventDefault();
    var msgMods = document.getElementById('msgMods');

    if (deportesAñadidos.length < deportes.length) {
        let lista = document.getElementById("listDeportes");
        let deporte = deportes[deportesAñadidos.length];

        let label = document.createElement("label");
        let input = document.createElement("input");
        
        input.type = "checkbox";
        input.className = "deporte añadido"; 
        input.name = "deportes"; 
        input.value = deporte.toLowerCase();
        
        input.addEventListener('change', validarCheckboxes);

        label.appendChild(input);
        label.appendChild(document.createTextNode(" " + deporte));
        lista.appendChild(label);

        deportesAñadidos.push({
            deporte: deporte,
            label: label
        });
        validarCheckboxes(); 
    } else {
        msgMods.style.color = '#d62323';
        msgMods.textContent = 'Llegaste al límite, no hay más deportes :(';
    }
});

// Eliminar deporte (AHORA SÍ ELIMINA UNO POR UNO)
document.getElementById("eliminarBOM").addEventListener("click", function (e) {
    e.preventDefault();
    const msgMods = document.getElementById('msgMods');

    if (deportesAñadidos.length > 0) {
        let ultimo = deportesAñadidos.pop();
        ultimo.label.remove(); // Elimina el label y el checkbox dentro

        // Volver a contar después de eliminar
        validarCheckboxes(); 
    }
});

/* Metodo submit */

// 6. Botón Enviar
document.getElementById('Enviar').addEventListener('click', function (e) {
    e.preventDefault();

    // Variables para almacenar errores
    var hayErrores = false;
    var erroresTexto = "";

    // 1. Validar Nombre
    var nombre = document.getElementById('nombre').value.trim();
    if (nombre.length < 2 || nombre.length > 16) {
        hayErrores = true;
        erroresTexto = erroresTexto + "• Nombre\n";
    }

    // 2. Validar Apellido
    var apellido = document.getElementById('apellido').value.trim();
    if (apellido.length < 2 || apellido.length > 32) {
        hayErrores = true;
        erroresTexto = erroresTexto + "• Apellido\n";
    }

    // 3. Validar Edad
    var edad = parseInt(document.getElementById('edad').value);
    if (isNaN(edad) || edad < 16 || edad > 121) {
        hayErrores = true;
        erroresTexto = erroresTexto + "• Edad\n";
    }

    // 4. Validar Email
    var email = document.getElementById('email').value;
    if (email.length < 6 || !email.includes('@') || !email.includes('.')) {
        hayErrores = true;
        erroresTexto = erroresTexto + "• Email\n";
    }

    // 5. Validar Teléfono
    var telefono = document.getElementById('telefono').value.trim();
    var telefonoRegex = /^[679][0-9]{8}$/;
    if (!telefonoRegex.test(telefono)) {
        hayErrores = true;
        erroresTexto = erroresTexto + "• Teléfono\n";
    }

    // 6. Validar Checkboxes (deportes)
    // Contar todos los checkboxes con name="deportes" (originales)
    var checkboxesOriginales = document.querySelectorAll('input[name="deportes"]:checked');
    var totalSeleccionados = checkboxesOriginales.length;

    // Contar checkboxes añadidos dinámicamente
    var checkboxesAñadidos = document.querySelectorAll('.deporte.añadido:checked');
    totalSeleccionados += checkboxesAñadidos.length;

    if (totalSeleccionados < 1 || totalSeleccionados > 3) {
        hayErrores = true;
        erroresTexto = erroresTexto + "• Deportes\n";
    }

    // 7. Validar select de discapacidad
    var discapacidad = document.querySelector('select[name="discapacidades"]');
    if (discapacidad && discapacidad.value === "") {
        hayErrores = true;
        erroresTexto = erroresTexto + "• Discapacidad\n";
    }

    // 8. Mostrar alerta si hay errores
    if (hayErrores) {
        alert('ERROR: Campos no válidos:\n' + erroresTexto);
        return;
    }

    // Si no hay errores, enviar el formulario
    alert('Formulario enviado correctamente');
    // Para enviar realmente el formulario:
    // document.querySelector('form').submit();
});

// GUARDAR datos automáticamente
function guardarDatos() {
    const datos = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        edad: document.getElementById('edad').value,
        email: document.getElementById('email').value,
        telefono: document.getElementById('telefono').value
    };
    localStorage.setItem('formDatos', JSON.stringify(datos));
}

// CARGAR datos al abrir la página
window.addEventListener('load', function () {
    const guardado = localStorage.getItem('formDatos');
    if (guardado) {
        const datos = JSON.parse(guardado);

        // Rellenar campos
        document.getElementById('nombre').value = datos.nombre || '';
        document.getElementById('apellido').value = datos.apellido || '';
        document.getElementById('edad').value = datos.edad || '';
        document.getElementById('email').value = datos.email || '';
        document.getElementById('telefono').value = datos.telefono || '';
    }
});

// Escuchar cambios en los inputs
document.querySelectorAll('#nombre, #apellido, #edad, #email, #telefono').forEach(input => {
    input.addEventListener('input', guardarDatos);
});

// LIMPIAR localStorage al enviar el formulario
document.getElementById('Enviar').addEventListener('click', function (e) {
    // Tu código de validación aquí...

    // Si todo está bien y envías:
    localStorage.removeItem('formDatos'); // Opcional: limpiar después de enviar
});

// Eliminar formulario los 2 formularios y limpiar secciones no eliminadas
document.getElementById("Reset").addEventListener("click", () => {
    document.querySelectorAll("form").forEach(form => {
        form.reset();
    });

    document.querySelectorAll(".msg").forEach(msg => {
        msg.textContent = "";
    });

    document.querySelectorAll("input").forEach(input => {
        input.className = "DefaultBorder"
    });
})
