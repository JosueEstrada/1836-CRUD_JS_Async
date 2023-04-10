console.log('client-service');
const crearNuevaLinea = (nombre, email) => {
    const linea = document.createElement('tr');
    const contenido = `
        <td class="td" data-td>${nombre}</td>
        <td>${email}</td>
        <td>
            <ul class="table__button-control">
                <li>
                    <a
                        href="../screens/editar_cliente.html"
                        class="simple-button simple-button--edit"
                    >Editar</a
                    >
                </li>
                <li>
                    <button
                        class="simple-button simple-button--delete"
                        type="button"
                    >
                        Eliminar
                    </button>
                </li>
            </ul>
    `;
    linea.innerHTML = contenido;
    return linea;
};

const table = document.querySelector('[data-table]');
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

listaClientes().then((data) => {
    console.log(data);
    data.forEach(perfil => {
        const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
        table.appendChild(nuevaLinea);
    });
}).catch((error) => alert("Ocurrió un error"));

