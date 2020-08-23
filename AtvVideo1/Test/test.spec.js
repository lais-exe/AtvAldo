const chai = require('chai')
expect = chai.expect
const verifica = require('../src/verificacao')

describe('verificação de vogal', () => {
    it('deveria retonar true letra A', () => {
        expect(verifica.verificavogal('a')).to.equal(true)
    })
    it('deveria retonar false letra B', () => {
        expect(verifica.verificavogal('b')).to.equal(false)
    })
    it('deveria retonar false true letra E', () => {
        expect(verifica.verificavogal('e')).to.equal(true)
    })
    it('deveria retonar false letra Z', () => {
        expect(verifica.verificavogal('z')).to.equal(false)
    })
})

describe('verificação de consoante', () => {
    it('deveria retonar true letra B', () => {
        expect(verifica.verificaconsoante('b')).to.equal(true)
    })
    it('deveria retonar false letra A', () => {
        expect(verifica.verificaconsoante('a')).to.equal(false)
    })

})