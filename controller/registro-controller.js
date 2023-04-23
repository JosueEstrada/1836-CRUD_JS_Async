import {clientServices} from "../service/cliente-service.js";

const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector('[data-nombre]').value;
    const email = document.querySelector('[data-email]').value;
    console.log('formulario:' + nombre + " - " + email)
    clientServices
        .crearCliente(nombre, email)
        .then(() => {
            //console.log(respuesta);
            window.location.href = "../screens/registro_completado.html";
        })
        .catch(err => console.log(err));
    /*clientServices.crearCliente(nombre, email).then(respuesta => {
        window.location.href = "/screens/registro_completado.html"; // Esto da error por la ruta
    }).catch((err) => console.log(err));*/
});