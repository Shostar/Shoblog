var menu = document.getElementById("menu");
var opciones = ['Inicio', 'Sobre nosotros', 'Servicios', 'Contacto'];
opciones.forEach(function(opcion) {
  var li = document.createElement("li");
  var link = document.createElement("a");
  link.href = opcion.toLowerCase('index.html');
  link.textContent = opcion;
  li.appendChild(link);
  menu.appendChild(li);
});

var links = document.getElementsByTagName("a");

for (var i = 0; i < links.length; i++) {
  links[i].onclick = function() {
    window.location = this.getAttribute("href");
    return false;
  };
}

