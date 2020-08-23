module.exports = {
    soma: notes => {

        if( Math.min(...notes)){
            const resulte = notes.reduce((acc, note) => {
                acc += note
                return acc
            }, 0)
            return notes.length > 5 ? resulte * 2 : resulte
        }
        return 0
    }
}