import {roomsList} from '../data';
var qtyRooms = roomsList.length;
var firstLetter;
var groupAfav=[0]; groupBfav=[0];groupCfav=[0];groupDfav=[0];groupEfav=[0];groupFfav=[0];groupGfav=[0];groupHfav=[0];groupIfav=[0];groupJfav=[0];groupKfav=[0];groupLfav=[0];groupMfav=[0];groupNfav=[0];groupOfav=[0];groupPfav=[0];groupQfav=[0];groupRfav=[0];groupSfav=[0];groupTfav=[0];groupUfav=[0];groupVfav=[0];groupWfav=[0]; groupXfav=[0];groupYfav=[0];groupZfav=[0];
var groupsFav=[];
for(var i=0;i<qtyRooms;i++){
  firstLetter = roomsList[i].name.substring(0,1);
  favorite = roomsList[i].isFavorite;
  if(favorite){
    if (firstLetter == "A" ||firstLetter == "a" ){
        groupAfav.push(roomsList[i]);
    }
    if (firstLetter == "B" ||firstLetter == "b" ){
        groupBfav.push(roomsList[i]);
    }
    if (firstLetter == "C" ||firstLetter == "c" ){
        groupCfav.push(roomsList[i]);
    }
    if (firstLetter == "D" ||firstLetter == "d" ){
        groupDfav.push(roomsList[i]);
    }
    if (firstLetter == "E" ||firstLetter == "e" ){
        groupEfav.push(roomsList[i]);
    }
    if (firstLetter == "F" ||firstLetter == "f" ){
        groupAfav.push(roomsList[i]);
    }
    if (firstLetter == "G" ||firstLetter == "g" ){
        groupGfav.push(roomsList[i]);
    }
    if (firstLetter == "H" ||firstLetter == "h" ){
        groupHfav.push(roomsList[i]);
    }
    if (firstLetter == "I" ||firstLetter == "i" ){
        groupIfav.push(roomsList[i]);
    }
    if (firstLetter == "J" ||firstLetter == "j" ){
        groupJfav.push(roomsList[i]);
    }
    if (firstLetter == "K" ||firstLetter == "k" ){
        groupKfav.push(roomsList[i]);
    }
    if (firstLetter == "L" ||firstLetter == "l" ){
        groupLfav.push(roomsList[i]);
    }
    if (firstLetter == "M" ||firstLetter == "m" ){
        groupMfav.push(roomsList[i]);
    }
    if (firstLetter == "N" ||firstLetter == "n" ){
        groupNfav.push(roomsList[i]);
    }
    if (firstLetter == "O" ||firstLetter == "o" ){
        groupOfav.push(roomsList[i]);
    }
    if (firstLetter == "P" ||firstLetter == "p" ){
        groupPfav.push(roomsList[i]);
    }
    if (firstLetter == "Q" ||firstLetter == "q" ){
        groupQfav.push(roomsList[i]);
    }
    if (firstLetter == "R" ||firstLetter == "r" ){
        groupRfav.push(roomsList[i]);
    }
    if (firstLetter == "S" ||firstLetter == "s" ){
        groupSfav.push(roomsList[i]);
    }
    if (firstLetter == "T" ||firstLetter == "t" ){
        groupTfav.push(roomsList[i]);
    }
    if (firstLetter == "U" ||firstLetter == "u" ){
        groupUfav.push(roomsList[i]);
    }
    if (firstLetter == "V" ||firstLetter == "v" ){
        groupVfav.push(roomsList[i]);
    }
    if (firstLetter == "W" ||firstLetter == "w" ){
        groupWfav.push(roomsList[i]);
    }
    if (firstLetter == "X" ||firstLetter == "x" ){
        groupXfav.push(roomsList[i]);
    }
    if (firstLetter == "Y" ||firstLetter == "y" ){
        groupYfav.push(roomsList[i]);
    }
    if (firstLetter == "Z" ||firstLetter == "z" ){
        groupZfav.push(roomsList[i]);
    }
  }
}
  function verifyAndAdd(group){
    if (group.length>1){
      groupsFav.push(group);
    }
  }
  verifyAndAdd(groupAfav);
  verifyAndAdd(groupBfav);
  verifyAndAdd(groupCfav);
  verifyAndAdd(groupDfav);
  verifyAndAdd(groupEfav);
  verifyAndAdd(groupFfav);
  verifyAndAdd(groupGfav);
  verifyAndAdd(groupHfav);
  verifyAndAdd(groupIfav);
  verifyAndAdd(groupJfav);
  verifyAndAdd(groupKfav);
  verifyAndAdd(groupLfav);
  verifyAndAdd(groupMfav);
  verifyAndAdd(groupNfav);
  verifyAndAdd(groupOfav);
  verifyAndAdd(groupPfav);
  verifyAndAdd(groupQfav);
  verifyAndAdd(groupRfav);
  verifyAndAdd(groupSfav);
  verifyAndAdd(groupTfav);
  verifyAndAdd(groupUfav);
  verifyAndAdd(groupVfav);
  verifyAndAdd(groupXfav);
  verifyAndAdd(groupYfav);
  verifyAndAdd(groupZfav); 

for(var x=0;x<groupsFav.length;x++){ 
    for(var y=0;y<groupsFav[x].length;y++){
    groupsFav[x][y].id = (y-1).toString();
    }
    groupsFav[x].splice(0,1);
}
export default groupsFav;