let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let contacto = document.querySelector('#btn-contacto');
let sobreMi = document.querySelector('#btn-sobreMi')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


contacto.onclick = () => {
    document.getElementById("contacto").scrollIntoView({
        behavior:"smooth"
    });
}


sobreMi.onclick = () => {
    document.getElementById("sobreMi").scrollIntoView({
        behavior:"smooth"
    });
}