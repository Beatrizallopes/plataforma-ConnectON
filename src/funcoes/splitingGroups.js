// This code gets the rooms from the roomsList and split them in groups based on their first letter
import {roomsList} from './../data';
var groups = [];
var qtyRooms = roomsList.length;
var firstLetter;
var groupA=[0]; groupB=[0];groupC=[0];groupD=[0];groupE=[0];groupF=[0];groupG=[0];groupH=[0];groupI=[0];groupJ=[0];groupK=[0];groupL=[0];groupM=[0];groupN=[0];groupO=[0];groupP=[0];groupQ=[0];groupR=[0];groupS=[0];groupT=[0];groupU=[0];groupV=[0];groupW=[0]; groupX=[0];groupY=[0];groupZ=[0];

// If the group has at least one room, it is added to the groups arrays. This is done to prevent showing empty groups.
function verifyAndAdd(group){
  if (group.length>1){
    groups.push(group);
  }
}

// Verifys the first letter of each room and adds it in their respective group
for(var i = 0; i < qtyRooms; i++){
  firstLetter = roomsList[i].name.substring(0,1);
  if (firstLetter == "A" ||firstLetter == "a" ){
    groupA.push(roomsList[i]);
  
  }
  if (firstLetter == "B" ||firstLetter == "b" ){
    groupB.push(roomsList[i]);
   
  }
  if (firstLetter == "C" ||firstLetter == "c" ){
    groupC.push(roomsList[i]);
  
  }
  if (firstLetter == "D" ||firstLetter == "d" ){
    groupD.push(roomsList[i]);
  
  }
  if (firstLetter == "E" ||firstLetter == "e" ){
    groupE.push(roomsList[i]);
  
  }
  if (firstLetter == "F" ||firstLetter == "f" ){
    groupF.push(roomsList[i]);
  
  }
  if (firstLetter == "G" ||firstLetter == "g" ){
    groupG.push(roomsList[i]);
 
  }
  if (firstLetter == "H" ||firstLetter == "h" ){
    groupH.push(roomsList[i]);
  }
  if (firstLetter == "I" ||firstLetter == "i" ){
    groupI.push(roomsList[i]);
  }
  if (firstLetter == "J" ||firstLetter == "j" ){
    groupJ.push(roomsList[i]);
  }
  if (firstLetter == "K" ||firstLetter == "k" ){
    groupK.push(roomsList[i]);
  }
  if (firstLetter == "L" ||firstLetter == "l" ){
    groupL.push(roomsList[i]);
  }
  if (firstLetter == "M" ||firstLetter == "m" ){
    groupM.push(roomsList[i]);
  }
  if (firstLetter == "N" ||firstLetter == "n" ){
    groupN.push(roomsList[i]);
  }
  if (firstLetter == "O" ||firstLetter == "o" ){
    groupO.push(roomsList[i]);
  }
  if (firstLetter == "P" ||firstLetter == "p" ){
    groupP.push(roomsList[i]);
 
  }
  if (firstLetter == "Q" ||firstLetter == "q" ){
    groupQ.push(roomsList[i]);
  }
  if (firstLetter == "R" ||firstLetter == "r" ){
    groupR.push(roomsList[i]);
  }
  if (firstLetter == "S" ||firstLetter == "s" ){
    groupS.push(roomsList[i]);
  }
  if (firstLetter == "T" ||firstLetter == "t" ){
    groupT.push(roomsList[i]);
  }
  if (firstLetter == "U" ||firstLetter == "u" ){
    groupU.push(roomsList[i]);
  }
  if (firstLetter == "V" ||firstLetter == "v" ){
    groupV.push(roomsList[i]);
  }
  if (firstLetter == "W" ||firstLetter == "w" ){
    groupW.push(roomsList[i]);
  }
  if (firstLetter == "X" ||firstLetter == "x" ){
    groupX.push(roomsList[i]);
  }
  if (firstLetter == "Y" ||firstLetter == "y" ){
    groupY.push(roomsList[i]);
  }
  if (firstLetter == "Z" ||firstLetter == "z" ){
    groupZ.push(roomsList[i]);
  }
  }

  verifyAndAdd(groupA);
  verifyAndAdd(groupB);
  verifyAndAdd(groupC);
  verifyAndAdd(groupD);
  verifyAndAdd(groupE);
  verifyAndAdd(groupF);
  verifyAndAdd(groupG);
  verifyAndAdd(groupH);
  verifyAndAdd(groupI);
  verifyAndAdd(groupJ);
  verifyAndAdd(groupK);
  verifyAndAdd(groupL);
  verifyAndAdd(groupM);
  verifyAndAdd(groupN);
  verifyAndAdd(groupO);
  verifyAndAdd(groupP);
  verifyAndAdd(groupQ);
  verifyAndAdd(groupR);
  verifyAndAdd(groupS);
  verifyAndAdd(groupT);
  verifyAndAdd(groupU);
  verifyAndAdd(groupV);
  verifyAndAdd(groupX);
  verifyAndAdd(groupY);
  verifyAndAdd(groupZ); 

// Now gives each room an unique id, in order to use it in the key params in lists components
for(var x=0;x<groups.length;x++){ 
  for(var y=0;y<groups[x].length;y++){
    groups[x][y].id = (y-1).toString();
  }
  groups[x].splice(0,1);
}
export default groups;
