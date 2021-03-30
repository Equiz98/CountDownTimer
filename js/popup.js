var btnAbrirPopup = document.getElementById('informacion-ticket-boton'),
    overlay = document.getElementById('overlay'), 
    popup = document.getElementById('pop-up'),
    btncerrarpopup = document.getElementById('btn-cerrar-popup');

    btnAbrirPopup.addEventListener('click', function(){
        overlay.classList.add('active');
        popup.classList.add('active')
    });

    btncerrarpopup.addEventListener('click', function(){
        overlay.classList.remove('active');
        popup.classList.remove('active')
    });


