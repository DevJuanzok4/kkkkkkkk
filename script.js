


var hist = 0;
var hist2 = 0;
var hist3 = 0;
var hist4 = 0;
var hist5 = 0;

function calcular() {



	var valor1 = parseFloat(document.getElementById("valor1").value);
	var valor2 = parseFloat(document.getElementById("valor2").value);
	var valor3 = parseFloat(document.getElementById("valor3").value);
	var valor4 = parseFloat(document.getElementById("valor4").value);
	var valor5 = parseFloat(document.getElementById("valor5").value);

	var vl6 = (valor2 * valor5);
	var vl7 = (valor3 * valor4) * valor1;
	var resultado = (vl7 / vl6);

	document.getElementById("resultado").value = resultado;

	hist6 = hist5;
	hist5 = hist4;
	hist4 = hist3;
	hist3 = hist2;
	hist2 = hist;
	hist = resultado;

	document.getElementById("hist").innerHTML = "Historico: " + hist;
	document.getElementById("hist2").innerHTML = "Historico2: " + hist2;
	document.getElementById("hist3").innerHTML = "Historico3: " + hist3;
	document.getElementById("hist4").innerHTML = "Historico4: " + hist4;
	document.getElementById("hist5").innerHTML = "Historico5: " + hist5;


}

const clearButton = document.getElementById('clear-button');
const inputField = document.getElementByID('valor1');


clearButton.addEventListener('click', () => {
	inputField.value = ''; // Limpa o valor do campo de entrada
	// i'm gay // i'm gay you are gay juan, is the off the lake off my side is back roll left nex to i ' dont penis really pika is of the neymar
});

