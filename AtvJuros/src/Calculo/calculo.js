function calculojuros(dias){
	let resultado
	if (dias <= 30) {
		resultado = 5
	}

	if (dias >= 31 && dias < 60) {
		resultado = 10
	}

	if (dias >= 60) {
		resultado = 15
	}

	return resultado
}

module.exports.calculojuros = calculojuros