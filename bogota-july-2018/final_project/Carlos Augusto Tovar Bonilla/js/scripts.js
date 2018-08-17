const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('POST', 'https://siabog.unal.edu.co/buscador/JSON-RPC', true);
//request.withCredentials = true;
request.setRequestHeader("Content-Type", "text/plain");
//request.setRequestHeader("Content-Type", "application/json");
request.onreadystatechange = function() {
    if (request.status >= 200 && request.status < 400) { 
       //aqui obtienes la respuesta de tu peticion
       alert(request.responseText);
    }
}

//request.onreadystatechange = function () {
//
//  // Begin accessing JSON data here
//  var data = JSON.parse(this.response);
//  if (request.status >= 200 && request.status < 400) {
//    data.forEach(movie => {
//      const card = document.createElement('div');
//      card.setAttribute('class', 'card');
//
//      const h1 = document.createElement('h1');
//      h1.textContent = movie.nombre;
//
//      const p = document.createElement('p');
//      movie.description = movie.id_asignatura;
//      p.textContent = `${movie.description}...`;
//
//      container.appendChild(card);
//      card.appendChild(h1);
//      card.appendChild(p);
//    });
//  } else {
//    const errorMessage = document.createElement('marquee');
//    errorMessage.textContent = `Gah, it's not working!`;
//    app.appendChild(errorMessage);
//  }
//}
//request.send({ 'request': "authentication token" });
request.send(JSON.stringify({"method": "buscador.obtenerAsignaturas", "params": ["calculo", "PRE", "", "PRE", "2879", "", 1, 10]}))

//request.send();