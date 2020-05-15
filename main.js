var carbos = ["Pan", "Fideos", "Ravioles", "Ñoquis", "Pizzas<br>Pizzetas", "Fajitas", "Tacos", "Polenta",
"Arroz blanco", "Arroz integral", "Calzones", "Lasagna", "Sánguche", "Spratzel", "Wickel-noodle", "Tarta"];

var verduras = ["Apio", "Acelga", "Alcachofa", "Berenjenas", "Berro", "Batata", "Calabaza", "Cebolla",
"Espinaca", "Espárragos", "Hinojo", "Lechuga", "Papa", "Quirola", "Zapallo", "Brócoli", "Repollo", "Coliflor",
"Escarola", "Endivias", "Kale", "Pepinos", "Morrón", "Tomate", "Zanahoria", "Choclo", "Rabanitos", "Remolacha"];


var coccion = ["Al horno", "Al vapor", "Hervido", "A las brasas", "A la cacerola", "En Ensalada"];

var acompa = ["Tuco", "Caldo", "Puré", "Salsa blanca", "Salsa rosa", "Portuguesa", "Huevos", "Hummus", "Queso"];

var planB = ["Guiso", "Fideos con tuco", "Arroz con manteca", "Hambur-<br>guesas", "Milanesas", "Panchos", "Empanadas"];

var cantidadCarbos = carbos.length;
var cantidadVerdus = verduras.length;
var cantidadCoccion = coccion.length;
var cantidadAcompa = acompa.length;
var cantidadPlanB = planB.length;

const div = document.getElementById("graf");
const img = document.getElementById("imagen");
const btnCar = document.getElementById("carbo");
const btnVer = document.getElementById("verdu");
const btnCocc = document.getElementById("coccion");
const btnAcompa = document.getElementById("guarni");
const planBe = document.getElementById("planB");


btnCar.onclick = function () {	
	var n = Math.floor(Math.random()*cantidadCarbos);
	this.innerHTML = (carbos[n])
	};
	
btnVer.onclick = function () {	
	var n = Math.floor(Math.random()*cantidadVerdus);
	this.innerHTML = verduras[n]
	};
	
	btnAcompa.onclick = function () {	
	var n = Math.floor(Math.random()*cantidadAcompa);
	this.innerHTML = acompa[n]
	};
	
	btnCocc.onclick = function () {	
	var n = Math.floor(Math.random()*cantidadCoccion);
	this.innerHTML = coccion[n]
	};
	
	planBe.onclick = function () {	
	var n = Math.floor(Math.random()*cantidadPlanB);
	this.innerHTML = planB[n]
	};
	
	div.onclick = function () {
		img.style.display = "block";
		}
	