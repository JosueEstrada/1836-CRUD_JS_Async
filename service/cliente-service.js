//console.log('client-service');

// 4 formas de escribir una promise
// 1. Callback con promise de manera default.
/*
const listaClientes = () => {
    const promise = new  Promise((resolve,reject) => {
        const http = new XMLHttpRequest();
        // Abrir http (método, url)
        http.open('GET', 'http://localhost:5000/perfil');
        http.send();
        http.onload = () => {
            //const data = http.response;
            // console.log(data); // Esto no es un objeto, solo es texto plano
            // Parsear el data a un objeto tipo JSON
            const response = JSON.parse(http.response);
            if (http.status >= 400){
                reject(response);
            } else{
                resolve(response);
            }
        };
    });
    return promise;
};
 */
// 2. Promise con fetch API
/*const listaClientes = () => {
    // Genera una promesa y se retorna la respuesta en formato json
    return fetch('http://localhost:5000/perfil').then((respuesta) => {
        return respuesta.json();
    });
};*/
// 3. Promise con fetch API en con un return
/*const listaClientes = () => {
    return fetch('http://localhost:5000/perfil').then((respuesta) => respuesta.json());
}*/
// 4. Promise con fetch API en una sola linea
const listaClientes = () => fetch('http://localhost:5000/perfil').then(respuesta => respuesta.json());

const crearCliente = (nombre, email) => {
    return fetch("http://localhost:5000/perfil", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({nombre, email, id: uuid.v4()}),
    });
};

export const clientServices = {
    // listaClientes: listaClientes, las ultimas versiones ya esta definido clave:valor
    listaClientes,
    crearCliente,
};


