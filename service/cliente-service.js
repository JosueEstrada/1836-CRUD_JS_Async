console.log('client-service');
const http = new XMLHttpRequest();

// Abrir http (método, url)
// CRUD
// Create   POST
// Read     GET
// Update   PUT/PATCH
// Delete   DELETE
http.open('GET', 'http://localhost:5000/perfil');
http.send();
http.onload = () => {
    const data = http.response;
    console.log(data);

}

console.log(http);