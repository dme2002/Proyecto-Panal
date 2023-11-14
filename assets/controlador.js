
document.getElementById('contenedor-tabla').style.display = 'block'
document.getElementById('contenedor-carpetas').style.display = 'none'




function mostrarModalUsuario() {
    const logoUsuario = document.getElementById('logo-usuario');
    const modalUsuario = new bootstrap.Modal(document.getElementById('modalUsuario'));
  
    // Agrega un evento de clic al logo de usuario
    logoUsuario.addEventListener('click', () => {
      // Muestra el modal al hacer clic
      modalUsuario.show();
  
      // Cambia el color de fondo y agrega la clase 'activo' al logo-usuario
      logoUsuario.style.backgroundColor = '#B3BC47CC'; // El mismo color del modal
      logoUsuario.classList.add('activo');
    });
  
    // Agrega un evento de ocultación al modal para limpiar el estado
    modalUsuario._element.addEventListener('hidden.bs.modal', () => {
      // Limpia el fondo y la clase 'activo' del logo-usuario al cerrar el modal
      logoUsuario.style.backgroundColor = '';
      logoUsuario.classList.remove('activo');
    });
  }


  function mostrarModalNuevoProyecto() {
    var modalNuevoProyecto = new bootstrap.Modal(
        document.getElementById("modalNuevoProyecto")
      );

      // Mostrar la modal
      modalNuevoProyecto.show();
  }


  function MostrarContenidoProyecto(){
    document.getElementById('contenedor-tabla').style.display = 'none';
    document.getElementById('contenedor-carpetas').style.display = 'block';
    

  }


  function mostrarModalConfiguracion(){
    var modalConfiguracion = new bootstrap.Modal(
      document.getElementById("preprocesadoresModal")
    );

    // Mostrar la modal
    modalConfiguracion.show();
  }