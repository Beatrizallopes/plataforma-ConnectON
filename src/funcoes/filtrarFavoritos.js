// import grupos from './separarGruposAlfa';

// var gruposFav =[];
// for (var x=0;x<grupos.length;x++){
//     gruposFav.push(grupos[x]);
// }
// for(var i=0;i<gruposFav.length;i++){
//     for(var j=0;j<gruposFav[i].length;j++){
//         if(gruposFav[i][j].ehFavorito == false){
//             gruposFav[i].splice(j,1);
//             if(gruposFav[i].length===0){
//                 gruposFav.splice(i,1);
//             }
//         }
//     }
// }
import listaAmbientes from '../dados';

var qtdAmbientes = listaAmbientes.length;
var primeiraLetra;
var grupoAfav=[0]; grupoBfav=[0];grupoCfav=[0];grupoDfav=[0];grupoEfav=[0];grupoFfav=[0];grupoGfav=[0];grupoHfav=[0];grupoIfav=[0];grupoJfav=[0];grupoKfav=[0];grupoLfav=[0];grupoMfav=[0];grupoNfav=[0];grupoOfav=[0];grupoPfav=[0];grupoQfav=[0];grupoRfav=[0];grupoSfav=[0];grupoTfav=[0];grupoUfav=[0];grupoVfav=[0];grupoWfav=[0]; grupoXfav=[0];grupoYfav=[0];grupoZfav=[0];
var gruposFav=[];
for(var i=0;i<qtdAmbientes;i++){
  primeiraLetra = listaAmbientes[i].nome.substring(0,1);
  favorito = listaAmbientes[i].ehFavorito;
  if(favorito){
    if (primeiraLetra == "A" ||primeiraLetra == "a" ){
        grupoAfav.push(listaAmbientes[i]);
    }
    if (primeiraLetra == "B" ||primeiraLetra == "b" ){
        grupoBfav.push(listaAmbientes[i]);
    }
    if (primeiraLetra == "C" ||primeiraLetra == "c" ){
        grupoCfav.push(listaAmbientes[i]);
    }
    if (primeiraLetra == "D" ||primeiraLetra == "d" ){
        grupoDfav.push(listaAmbientes[i]);
    }
    if (primeiraLetra == "E" ||primeiraLetra == "e" ){
        grupoEfav.push(listaAmbientes[i]);
    }
    if (primeiraLetra == "F" ||primeiraLetra == "f" ){
        grupoAfav.push(listaAmbientes[i]);
    }
    if (primeiraLetra == "G" ||primeiraLetra == "g" ){
        grupoGfav.push(listaAmbientes[i]);
    }
    if (primeiraLetra == "H" ||primeiraLetra == "h" ){
        grupoHfav.push(listaAmbientes[i]);
    }
    if (primeiraLetra == "I" ||primeiraLetra == "i" ){
        grupoIfav.push(listaAmbientes[i]);
    }
    if (primeiraLetra == "J" ||primeiraLetra == "j" ){
        grupoJfav.push(listaAmbientes[i]);
    }
    if (primeiraLetra == "K" ||primeiraLetra == "k" ){
        grupoKfav.push(listaAmbientes[i]);
    }
    if (primeiraLetra == "L" ||primeiraLetra == "l" ){
        grupoLfav.push(listaAmbientes[i]);
    }
    if (primeiraLetra == "M" ||primeiraLetra == "m" ){
        grupoMfav.push(listaAmbientes[i]);
    }
    if (primeiraLetra == "N" ||primeiraLetra == "n" ){
        grupoNfav.push(listaAmbientes[i]);
    }
    if (primeiraLetra == "O" ||primeiraLetra == "o" ){
        grupoOfav.push(listaAmbientes[i]);
    }
    if (primeiraLetra == "P" ||primeiraLetra == "p" ){
        grupoPfav.push(listaAmbientes[i]);
    }
    if (primeiraLetra == "Q" ||primeiraLetra == "q" ){
        grupoQfav.push(listaAmbientes[i]);
    }
    if (primeiraLetra == "R" ||primeiraLetra == "r" ){
        grupoRfav.push(listaAmbientes[i]);
    }
    if (primeiraLetra == "S" ||primeiraLetra == "s" ){
        grupoSfav.push(listaAmbientes[i]);
    }
    if (primeiraLetra == "T" ||primeiraLetra == "t" ){
        grupoTfav.push(listaAmbientes[i]);
    }
    if (primeiraLetra == "U" ||primeiraLetra == "u" ){
        grupoUfav.push(listaAmbientes[i]);
    }
    if (primeiraLetra == "V" ||primeiraLetra == "v" ){
        grupoVfav.push(listaAmbientes[i]);
    }
    if (primeiraLetra == "W" ||primeiraLetra == "w" ){
        grupoWfav.push(listaAmbientes[i]);
    }
    if (primeiraLetra == "X" ||primeiraLetra == "x" ){
        grupoXfav.push(listaAmbientes[i]);
    }
    if (primeiraLetra == "Y" ||primeiraLetra == "y" ){
        grupoYfav.push(listaAmbientes[i]);
    }
    if (primeiraLetra == "Z" ||primeiraLetra == "z" ){
        grupoZfav.push(listaAmbientes[i]);
    }
  }
}
  function verificaEadiciona(grupo){
    if (grupo.length>1){
      gruposFav.push(grupo);
    }
  }
  verificaEadiciona(grupoAfav);
  verificaEadiciona(grupoBfav);
  verificaEadiciona(grupoCfav);
  verificaEadiciona(grupoDfav);
  verificaEadiciona(grupoEfav);
  verificaEadiciona(grupoFfav);
  verificaEadiciona(grupoGfav);
  verificaEadiciona(grupoHfav);
  verificaEadiciona(grupoIfav);
  verificaEadiciona(grupoJfav);
  verificaEadiciona(grupoKfav);
  verificaEadiciona(grupoLfav);
  verificaEadiciona(grupoMfav);
  verificaEadiciona(grupoNfav);
  verificaEadiciona(grupoOfav);
  verificaEadiciona(grupoPfav);
  verificaEadiciona(grupoQfav);
  verificaEadiciona(grupoRfav);
  verificaEadiciona(grupoSfav);
  verificaEadiciona(grupoTfav);
  verificaEadiciona(grupoUfav);
  verificaEadiciona(grupoVfav);
  verificaEadiciona(grupoXfav);
  verificaEadiciona(grupoYfav);
  verificaEadiciona(grupoZfav); 

    for(var x=0;x<gruposFav.length;x++){ 
      for(var y=0;y<gruposFav[x].length;y++){
        gruposFav[x][y].id = (y-1).toString();
      }
      gruposFav[x].splice(0,1);
    }
export default gruposFav;