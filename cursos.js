const cursos = [
    {
        id: '2023_1_SJ_ENCAV040_23944016_PCT',
        imagen: 'img/cursos/encantamientos2.jpg',
        titulo: 'Encantamientos avanzados',
        instructor: 'Filius Flitwick',
        descripcion: 'Esta es la descripción completa del curso de Encantamientos avanzados. Aquí puedes proporcionar detalles, objetivos, requisitos y cualquier otra información relevante sobre el curso.',
        unidades: [
            {
                titulo: 'Unidad 1: Introducción',
                detalles: [
                    'Detalles 1',
                    'Detalles 2',
                    'Detalles 3'
                ]
            },
            {
                titulo: 'Unidad 2: Tema 2',
                detalles: [
                    'Detalles 4',
                    'Detalles 5'
                ]
            }
        ]
    },
    // Agrega más cursos aquí
];

// Función para generar el contenido de los cursos
function generarCursos() {
    const cursosContainer = document.getElementById('cursos-container');

    cursos.forEach((curso) => {
        const cursoCard = document.createElement('div');
        cursoCard.className = 'col-md-4';

        const cursoContent = `
        <div class="card h-100" data-bs-toggle="modal" data-bs-target="#curso-modal" onclick="mostrarCurso('${curso.id}')">
          <img src="${curso.imagen}" class="card-img-top w-100" style="object-fit: cover; height: 200px;" alt="${curso.titulo}">
          <div class="card-body">
            <span style="color: #666666;">${curso.id}</span>
            <h5 class="card-title fw-bold">${curso.titulo}</h5>
            <p class="card-text">${curso.instructor}</p>
          </div>
        </div>
      `;

        cursoCard.innerHTML = cursoContent;
        cursosContainer.appendChild(cursoCard);
    });
}

// Función para mostrar el contenido completo del curso en el modal
function mostrarCurso(cursoId) {
    const curso = cursos.find((curso) => curso.id === cursoId);

    const modalTitle = document.getElementById('vistaRapidaModalLabel');
    const modalContent = document.getElementById('curso-modal-content');

    modalTitle.textContent = curso.titulo;

    modalContent.innerHTML = `
  <img src="${curso.imagen}" class="card-img-top w-100" style="object-fit: cover; height: 300px;" alt="${curso.titulo}">
  <h6>Descripción del curso:</h6>
  <p>${curso.descripcion}</p>
  <h6>Contenido del curso:</h6>
  ${generarUnidades(curso.unidades)}
  <h6>Información adicional:</h6>
  <p>Aquí puedes agregar cualquier información adicional que desees mostrar sobre el curso.</p>
`;

    // Mostrar el modal
    const cursoModal = new bootstrap.Modal(document.getElementById('curso-modal'));
    cursoModal.show();
}

// Función para generar las unidades del curso
function generarUnidades(unidades) {
    let unidadesContent = '';

    unidades.forEach((unidad) => {
        const detallesContent = generarDetalles(unidad.detalles);

        const unidadContent = `
        <div class="unidad">
          <div class="unidad-titulo" onclick="mostrarContenido('unidad-${unidad.titulo}')">${unidad.titulo}</div>
          <div class="unidad-contenido" id="unidad-${unidad.titulo}" style="display: none;">
            ${detallesContent}
          </div>
        </div>
      `;

        unidadesContent += unidadContent;
    });

    return unidadesContent;
}

// Función para generar los detalles de una unidad
function generarDetalles(detalles) {
    let detallesContent = '';

    detalles.forEach((detalle) => {
        const detalleContent = `
        <div class="subcontenido" data-detalle-id="detalle-${detalle}" onclick="mostrarOcultarDetalle('${detalle}')">${detalle}</div>
      `;

        detallesContent += detalleContent;
    });

    return detallesContent;
}

// Función para mostrar u ocultar el detalle del curso
function mostrarOcultarDetalle(event) {
    const detalleId = event.target.getAttribute('data-detalle-id');
    const detalleElement = document.getElementById(detalleId);
    detalleElement.style.display = detalleElement.style.display === 'block' ? 'none' : 'block';
}

// Generar los cursos
generarCursos();

function mostrarContenido(idContenido) {
    var contenido = document.getElementById(idContenido);

    // Cambia la visibilidad del contenido
    if (contenido.style.display === 'none') {
        contenido.style.display = 'block';
    } else {
        contenido.style.display = 'none';
    }
}

function mostrarDetalle(idDetalle) {
    // Aquí puedes implementar la lógica para mostrar los detalles del contenido
    alert('Has hecho clic en el detalle ' + idDetalle);
}