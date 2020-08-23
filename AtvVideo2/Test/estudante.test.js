const estudante = require('../src/estudante')

describe('Alunos', () => {
    it('Deve retonar 10 quando as notas forem 5, 3 e 2', () => {
        const notes = [5, 3, 2]
        expect(estudante.soma(notes)).toEqual(10)
    })

    it('Deve retornar 0 quando uma das notas for 0', () => {
        const notes = [1, 2, 3, 0]
        expect(estudante.soma(notes)).toEqual(0)
    })

    it('Deve dobrar a nota quando o aluno tiver mais de 5 notas', () => {
        const notes = [1, 2, 3, 4, 5, 6, 7]
        expect(estudante.soma(notes)).toEqual(56)
    })

})