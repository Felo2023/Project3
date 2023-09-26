// Carga los datos de Netflix (puedes usar una API o un archivo JSON)
function cargarDatosGlobales() {
    fetch('/api/v1.0/global1')
        .then(response => response.json())
        .then(data => {
            function actualizarTablaTop10(topMovies) {
                // Supongamos que tienes una tabla HTML con el id 'tablaTop10'
                const tablaTop10 = document.getElementById('tablaTop10');
            
                // Limpia la tabla actual
                tablaTop10.innerHTML = '';
            
                // Crea encabezados de columna
                const encabezados = ['No', 'Película', 'Semana en el Top 10', 'Horas Vistas'];
                const encabezadoFila = document.createElement('tr');
                encabezados.forEach(encabezado => {
                    const th = document.createElement('th');
                    th.textContent = encabezado;
                    encabezadoFila.appendChild(th);
                });
                tablaTop10.appendChild(encabezadoFila);
            
                // Llena la tabla con los datos recibidos
                topMovies.forEach((movie, index) => {
                    const fila = document.createElement('tr');
                    
                    // No
                    const columnaNo = document.createElement('td');
                    columnaNo.textContent = index + 1; // Sumamos 1 para tener un número de índice basado en 1
                    fila.appendChild(columnaNo);
                    
                    // Película
                    const columnaPelicula = document.createElement('td');
                    columnaPelicula.textContent = movie.movie;
                    fila.appendChild(columnaPelicula);
            
                    // Semana en el Top 10
                    const columnaSemana = document.createElement('td');
                    columnaSemana.textContent = movie.week_at_Top10;
                    fila.appendChild(columnaSemana);
            
                    // Horas Vistas
                    const columnaHorasVistas = document.createElement('td');
                    columnaHorasVistas.textContent = movie.hours_seen;
                    fila.appendChild(columnaHorasVistas);
            
                    tablaTop10.appendChild(fila);
                });
            }
            
        })
        .catch(error => {
            console.error('Error al cargar datos globales:', error);
        });
}

// Función para cargar datos de Canadá
function cargarDatosCanada() {
    fetch('/api/v1.0/canada')
        .then(response => response.json())
        .then(data => {
            // Actualiza las tablas, mapas y gráficas con los datos de Canadá
            // Implementa esta función según tus necesidades
        })
        .catch(error => {
            console.error('Error al cargar datos de Canadá:', error);
        });
}

// Función para cargar datos del Reino Unido
function cargarDatosReinoUnido() {
    fetch('/api/v1.0/united_kingdom')
        .then(response => response.json())
        .then(data => {
            // Actualiza las tablas, mapas y gráficas con los datos del Reino Unido
            // Implementa esta función según tus necesidades
        })
        .catch(error => {
            console.error('Error al cargar datos del Reino Unido:', error);
        });
}

// Función para cargar datos de Australia
function cargarDatosAustralia() {
    fetch('/api/v1.0/australia')
        .then(response => response.json())
        .then(data => {
            // Actualiza las tablas, mapas y gráficas con los datos de Australia
            // Implementa esta función según tus necesidades
        })
        .catch(error => {
            console.error('Error al cargar datos de Australia:', error);
        });
}

// Función para cargar datos de Egipto
function cargarDatosEgipto() {
    fetch('/api/v1.0/egypt')
        .then(response => response.json())
        .then(data => {
            // Actualiza las tablas, mapas y gráficas con los datos de Egipto
            // Implementa esta función según tus necesidades
        })
        .catch(error => {
            console.error('Error al cargar datos de Egipto:', error);
        });
}

// Función para cargar datos de todos los países
function cargarDatosPaises() {
    fetch('/api/v1.0/countries')
        .then(response => response.json())
        .then(data => {
            // Actualiza las tablas, mapas y gráficas con los datos de todos los países
            // Implementa esta función según tus necesidades
        })
        .catch(error => {
            console.error('Error al cargar datos de todos los países:', error);
        });
}

// Eventos para cargar datos cuando se carga la página
window.addEventListener('load', function() {
    cargarDatosGlobales();
    cargarDatosCanada();
    cargarDatosReinoUnido();
    cargarDatosAustralia();
    cargarDatosEgipto();
    cargarDatosPaises();
    // Puedes llamar a otras funciones según sea necesario para otras rutas
});



// Función para mostrar el mapa interactivo
function mostrarMapa() {
    // Código para mostrar el mapa de Netflix utilizando Leaflet
}

// Función para mostrar las gráficas
function mostrarGraficas(pelicula) {
    // Código para mostrar gráficas de views por película a través del tiempo
}

// Evento para manejar el cambio en el menú desplegable de semanas
document.getElementById('menu').addEventListener('change', function(event) {
    const semana = event.target.value;
    actualizarTablas(semana);
});

// Llama a la función de carga de datos cuando se carga la página
window.addEventListener('load', function() {
    cargarDatos();
});
