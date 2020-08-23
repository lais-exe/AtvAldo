const chai = require('chai')
expect = chai.expect
const calcular = require('../src/Calculo/calculo')

describe('TesteDeJurosParcela', () => {
	it('paga-se 5% de juros até 30 dias de atraso', () => {
        expect(calcular.calculojuros(5)).to.equal(5)
    })

    it('paga-se 10% de juros de 31 até 60 dias de atraso', () => {
        expect(calcular.calculojuros(31)).to.equal(10)
    })

    it('paga-se 15% de juros a partir de 60 dias de atraso', () => {
        expect(calcular.calculojuros(60)).to.equal(15)
    })
})