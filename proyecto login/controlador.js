const seleccionarOpcionMenu = (opcion, etiqueta) => {
    document.querySelectorAll('.opcion-menu').forEach(item =>{
        item.classList.remove('seleccionado');
    });
    etiqueta.classList.add('seleccionado');

    document.getElementById('seccion-0').style.display = 'none';   
    document.getElementById('seccion-1').style.display = 'none';
    document.getElementById('seccion-2').style.display = 'none';
    document.getElementById('seccion-3').style.display = 'none';
    document.getElementById('seccion-4').style.display = 'none';
    document.getElementById('seccion-5').style.display = 'none';
    document.getElementById('seccion-' + opcion).style.display = 'block'

};