// Outra possível solução é ordenar na ordem alfabetica. Compara a primeira leitra com o anterior. Se for igual, fica no grupo j. Se for direrente, grupo j+1.
// Função para agrupar os nomes dos ambientes de acordo com a primeira letra
import listaAmbientes from './dados';
var grupos = [];
// function organizaGrupos(){
var qtdAmbientes = listaAmbientes.length;
var primeiraLetra;
var grupoA=[0]; grupoB=[0];grupoC=[0];grupoD=[0];grupoE=[0];grupoF=[0];grupoG=[0];grupoH=[0];grupoI=[0];grupoJ=[0];grupoK=[0];grupoL=[0];grupoM=[0];grupoN=[0];grupoO=[0];grupoP=[0];grupoQ=[0];grupoR=[0];grupoS=[0];grupoT=[0];grupoU=[0];grupoV=[0];grupoW=[0]; grupoX=[0];grupoY=[0];grupoZ=[0];
for(var i=0;i<qtdAmbientes;i++){
  primeiraLetra = listaAmbientes[i].nome.substring(0,1);
  if (primeiraLetra == "A" ||primeiraLetra == "a" ){
    grupoA.push(listaAmbientes[i]);
  }
  if (primeiraLetra == "B" ||primeiraLetra == "b" ){
    grupoB.push(listaAmbientes[i]);
  }
  if (primeiraLetra == "C" ||primeiraLetra == "c" ){
    grupoC.push(listaAmbientes[i]);
  }
  if (primeiraLetra == "D" ||primeiraLetra == "d" ){
    grupoD.push(listaAmbientes[i]);
  }
  if (primeiraLetra == "E" ||primeiraLetra == "e" ){
    grupoE.push(listaAmbientes[i]);
  }
  if (primeiraLetra == "F" ||primeiraLetra == "f" ){
    grupoF.push(listaAmbientes[i]);
  }
  if (primeiraLetra == "G" ||primeiraLetra == "g" ){
    grupoG.push(listaAmbientes[i]);
  }
  if (primeiraLetra == "H" ||primeiraLetra == "h" ){
    grupoH.push(listaAmbientes[i]);
  }
  if (primeiraLetra == "I" ||primeiraLetra == "i" ){
    grupoI.push(listaAmbientes[i]);
  }
  if (primeiraLetra == "J" ||primeiraLetra == "j" ){
    grupoJ.push(listaAmbientes[i]);
  }
  if (primeiraLetra == "K" ||primeiraLetra == "k" ){
    grupoK.push(listaAmbientes[i]);
  }
  if (primeiraLetra == "L" ||primeiraLetra == "l" ){
    grupoL.push(listaAmbientes[i]);
  }
  if (primeiraLetra == "M" ||primeiraLetra == "m" ){
    grupoM.push(listaAmbientes[i]);
  }
  if (primeiraLetra == "N" ||primeiraLetra == "n" ){
    grupoN.push(listaAmbientes[i]);
  }
  if (primeiraLetra == "O" ||primeiraLetra == "o" ){
    grupoO.push(listaAmbientes[i]);
  }
  if (primeiraLetra == "P" ||primeiraLetra == "p" ){
    grupoP.push(listaAmbientes[i]);
  }
  if (primeiraLetra == "Q" ||primeiraLetra == "q" ){
    grupoQ.push(listaAmbientes[i]);
  }
  if (primeiraLetra == "R" ||primeiraLetra == "r" ){
    grupoR.push(listaAmbientes[i]);
  }
  if (primeiraLetra == "S" ||primeiraLetra == "s" ){
    grupoS.push(listaAmbientes[i]);
  }
  if (primeiraLetra == "T" ||primeiraLetra == "t" ){
    grupoT.push(listaAmbientes[i]);
  }
  if (primeiraLetra == "U" ||primeiraLetra == "u" ){
    grupoU.push(listaAmbientes[i]);
  }
  if (primeiraLetra == "V" ||primeiraLetra == "v" ){
    grupoV.push(listaAmbientes[i]);
  }
  if (primeiraLetra == "W" ||primeiraLetra == "w" ){
    grupoW.push(listaAmbientes[i]);
  }
  if (primeiraLetra == "X" ||primeiraLetra == "x" ){
    grupoX.push(listaAmbientes[i]);
  }
  if (primeiraLetra == "Y" ||primeiraLetra == "y" ){
    grupoY.push(listaAmbientes[i]);
  }
  if (primeiraLetra == "Z" ||primeiraLetra == "z" ){
    grupoZ.push(listaAmbientes[i]);
  }
  }
  if (grupoA.length>1){
    grupos.push(grupoA);
  }
  if (grupoB.length>1){
    grupos.push(grupoB);
  }
  if (grupoC.length>1){
    grupos.push(grupoC);
  }
  if (grupoD.length>1){
    grupos.push(grupoD);
  }
  if (grupoE.length>1){
    grupos.push(grupoE);
  }
  if (grupoF.length>1){
    grupos.push(grupoF);
  }
  if (grupoG.length>1){
    grupos.push(grupoG);
  }
  if (grupoH.length>1){
    grupos.push(grupoH);
  }
  if (grupoI.length>1){
    grupos.push(grupoI);
  }
  if (grupoJ.length>1){
    grupos.push(grupoJ);
  }
  if (grupoK.length>1){
    grupos.push(grupoK);
  }
  if (grupoL.length>1){
    grupos.push(grupoL);
  }
  if (grupoM.length>1){
    grupos.push(grupoM);
  }
  if (grupoN.length>1){
    grupos.push(grupoN);
  }
  if (grupoO.length>1){
    grupos.push(grupoO);
  }
  if (grupoP.length>1){
    grupos.push(grupoP);
  }
  if (grupoQ.length>1){
    grupos.push(grupoQ);
  }
  if (grupoR.length>1){
    grupos.push(grupoR);
  }
  if (grupoS.length>1){
    grupos.push(grupoS);
  }
  if (grupoT.length>1){
    grupos.push(grupoT);
  }
  if (grupoU.length>1){
    grupos.push(grupoU);
  }
  if (grupoV.length>1){
    grupos.push(grupoV);
  }
  if (grupoX.length>1){
    grupos.push(grupoX);
  }
  if (grupoY.length>1){
    grupos.push(grupoY);
  }
  if (grupoZ.length>1){
    grupos.push(grupoZ);
  }
export default grupos;