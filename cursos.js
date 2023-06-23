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
