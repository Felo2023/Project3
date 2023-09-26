

// Carga los datos de Netflix (puedes usar una API o un archivo JSON)

    d3.json("http://127.0.0.1:5000/api/v1.0/global1").then(function(data) {
        console.log(data);
      });
           
            
/*            
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
*/
