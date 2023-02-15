var queryString = window.location.search;
console.log(queryString);

var urlParams = new URLSearchParams(queryString);
const Nombre = urlParams.get('Nombre')
document.getElementById(id="nom").innerHTML=Nombre

var Apellido = urlParams.get('Apellido')
console.log(Apellido);
document.getElementById(id="ape").innerHTML=Apellido

var Numero = urlParams.get('Numero')
console.log(Numero);
document.getElementById(id="num").innerHTML=Numero

var Cvs = urlParams.get('Cvs')
console.log(Cvs);
document.getElementById(id="cvs").innerHTML=Cvs