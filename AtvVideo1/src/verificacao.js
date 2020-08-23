function verificavogal(letras){
   return ['a', 'e', 'i', 'o', 'u'].indexOf(letras) > -1;
}

function verificaconsoante(letras){
   return !verificavogal(letras);
   }
module.exports.verificavogal = verificavogal;
module.exports.verificaconsoante = verificaconsoante;