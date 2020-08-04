// Simulating the database
var automationsList = [
    {type: "Automação",name:"Expediente", days:["SEG","TER","QUA"], schedule:"08:00/18:00",isPersistent:true,rooms:["Escritório 1","Escritório 2","Escritório 3"],cod:"1",active:true},
    {type: "Gatilho",name:"Hora Extra",days:"07/13/2020", schedule:"13:00",isPersistent:false,rooms:["Escritório 1","Escritório 2","Brahma"],cod:"2",active:true},
    {type: "Automação",name:"Intervalo", days:["SEG","TER","QUA","QUI","SEX"], schedule:"14:00",isPersistent:false,rooms:["Copa","Descompressão","Estacionamento"],cod:"3",active:true},
     {type: "Gatilho",name:"Teste",days:"07/08/2020", schedule:"18:30",isPersistent:false,rooms:["Escritório 1","Escritório 2","Escritório 3", "Estacionamento","Copa","Descompressão","Brahma"],cod:"4",active:true},
    {type: "Gatilho",name:"Automação 2", days:"08/08/2020", schedule:"01:00",rooms:["RH"], isPersistent:false,cod:"5",active:true},
  ]
// FIXIT: date is in MM/DD/YY format
var date = "07/08/2020"; 
var hour = "17:00";
var weekDay = "QUA";
var j=0;

for (var i = 0; i < automationsList.length; i++){
    if(automationsList[i].type === "Automação"){ // If it is an automation, then:
        var isToday = checkToday(automationsList[i]); // Checks if the automation will run today
        var alreadyPassed = checkIfPassed(automationsList[i].schedule); // Checks if the automation was already executed
        if(isToday && !alreadyPassed){ // If the automation is supposed to run today and it didn't was executed yet
           automationsList[i].timeLeft = checkSchedule(automationsList[i].schedule); // Calculates how many time is left before that automation runs
           j = j +1;
        } 
        else {  // If the automation is not going to run today OR it is today but already was executed
          hourExecution = automationsList[i].schedule.split("/")[0];
          if(automationsList[i].schedule.split("/")[0]<hour && automationsList[i].isPersistent && automationsList[i].schedule.split("/")[1]>hour ){
            hourExecution = automationsList[i].schedule.split("/")[1]; // this is the case where is a persistent automation and the current time is not in the interval of the automation
          }
          daysLeft = parseInt(analyzesDay(automationsList[i]));
          minutesLeft = turnIntoMinutes(hourExecution) - turnIntoMinutes(hour);
          if(daysLeft == -1){ // In this case, if dayLeft = -1, it means that the next ocurrence is in the next day. Then it adds the amount of minutes left to end the day with the amount of minutes (counting from 00:00 of the day) to the event starts
              left = (1440 - turnIntoMinutes(hour)) + turnIntoMinutes(automationsList[i].schedule.split("/")[0])
             // left = minutesLeft
            } else {
            left = parseInt(daysLeft) + parseInt(minutesLeft); // Calculate the time left
            }
            automationsList[i].timeLeft = left;
            automationsList[i].message = "Executa em";
        }
         if(automationsList[i].isPersistent && turnIntoMinutes(automationsList[i].schedule.split("/")[1])>turnIntoMinutes(hour)){
            automationsList[i].message = "Encerra em";
           } else {
              automationsList[i].message = "Executa em";
           }
    } 
    else { // If is a trigger:
       dateNow = Date.parse(date)
       dateEvent = Date.parse(automationsList[i].days)
       differenceMinutes = parseInt((dateEvent - dateNow)/60000)
       differenceMinutes = differenceMinutes + parseInt((turnIntoMinutes(automationsList[i].schedule)-turnIntoMinutes(hour)))
       automationsList[i].timeLeft = differenceMinutes;
       automationsList[i].message = "Executa em";

    }
    }
// Now the code will order the automations and trigger by the amount of time left for their next event and store in a array called automationsListOrd
   var automationsListOrd = automationsList.sort(
    function (a, b) {
        if (a.timeLeft > b.timeLeft) {
        return 1;
        }
        if (a.timeLeft < b.timeLeft) {
        return -1;
        }
        return 0;
        }
        )
// Now we will take the eventis that already happened 
     for(var i=0;i<automationsListOrd.length;i++){
         if(automationsListOrd[i].timeLeft == -1){
             automationsListOrd.splice(i,1)
         }
     }
     console.log(automationsListOrd)
// Altering the format of the info about the automation to display 
     for(var i =0;i<automationsListOrd.length;i++){
         automationsListOrd[i].timeLeft = alterFormatHour(automationsListOrd[i])
         automationsListOrd[i].roomsInfo = alterFormatRooms(automationsListOrd[i])
        }
    console.log(automationsListOrd)


//Functions:
// Function checkToday(automation) = checks if the automation/trigger is going to run today
function checkToday (automation){
    var yes = false;
    for(var j=0;j<automation.days.length;j++){
        if (automation.days[j] == weekDay){
            yes = true;
        }
    }
    return yes;
}
// Function checkIfPassed(schedule) = checks if the time of the schedule already passed today
function checkIfPassed (schedule){
   var yes = false;
   hours = schedule.split("/");
   if(turnIntoMinutes(hours[0])<turnIntoMinutes(hour)){
       yes = true;
   }
   return yes;
}
// Function turnIntoMinutes(schedule1) = transforms the string initially in the "HH:MM" format to a number of minutes
function turnIntoMinutes (schedule1){
    var hourMinutes = schedule1.split(":");
    var qtyHoursSch = parseInt(hourMinutes[0]);
    var qtyMinutesSch= parseInt(hourMinutes[1]);
    qtyMinutesSch= (qtyHoursSch*60) + qtyMinutesSch;
    return qtyMinutesSch;
}
// Function checkSchedule(schedule) = calculates the amount of minutes left to the event start (with the event happening in the same day)
function checkSchedule (schedule){
    var qtyMinutesNow = turnIntoMinutes(hour);
    var isPersistent = schedule.split("/");
    if (isPersistent.length === 1){
        var qtyMinutesSch= turnIntoMinutes(schedule)
        if(qtyMinutesSch>qtyMinutesNow){
            var left = qtyMinutesSch- qtyMinutesNow; // If it isnt persistent and it will still happen, calculates the qty of minutes left
        } else {
            var left = -1; // If already passed
        }
    }
    else { // If it is persistent:
        qtyMinutesStart = turnIntoMinutes(isPersistent[0]);
        qtyMinutesEnd = turnIntoMinutes(isPersistent[1]);
    if (qtyMinutesNow>qtyMinutesEnd){
        var left = -1; // Already passed
    }
    if(qtyMinutesNow<qtyMinutesStart){
        var left = qtyMinutesStart - qtyMinutesNow; // How many minutes left to start
    }
    if(qtyMinutesNow>qtyMinutesStart && qtyMinutesNow<qtyMinutesEnd){
        var left = qtyMinutesEnd - qtyMinutesNow; // How many minutes left to end
    }
 }
    return left   
}
// Function analyzesDay(automation) = calculates the amount of entire days until the next event
function analyzesDay(automation){
    daysAuto = automation.days;
    // FIXME: the transition between saturday and sunday
    week = ["DOM","SEG","TER","QUA","QUI","SEX","SAB"] 
    dayNow = week.indexOf(weekDay);
    var daysLeft = 0;
    for(var i =0; i < daysAuto.length; i++) {
        dayAuto = week.indexOf(daysAuto[i]);
        if(dayAuto > dayNow){
            daysLeft = dayAuto - dayNow;
            if(daysLeft === 1) {
             var left = -1 // If there is less than a day left
            } else {
            var left = parseInt(daysLeft*60*24)
            }
            i = daysAuto.length;
        } else { // If the day of the week already passed
                if(dayAuto != dayNow) {
                     if(i === daysAuto.length-1 ) {
                        dayAuto = week.indexOf(daysAuto[0])
                    }
                    daysLeft = 7 - dayNow + dayAuto;
                    var left = parseInt(daysLeft*60*24)
                } else { // If is in the same day
                    var left = 0;
                    }
                }
    }
    return left; //returns the amount of days left (in minutes)
}
// Function: alterFormatHour(automation) = transforms the remaining time in the formart we want to display
// FIXME: for now I am not using the seconds
function alterFormatHour(automation){
   var time = parseInt(automation.timeLeft);
   var hours = parseInt(time/60);
   var minutes = time - hours*60;
   if(minutes < 10) {
     minutes = "0" + minutes
   }
   if(hours < 10) {
     hours = "0" + hours
   }
   var displayTime = hours + ":" + minutes + ":00"; // FIXME: This + "00" is just temporary, I will fix it later
    return displayTime;
  }
// Function: alterFormatRooms(automation) = transforms the rooms that are registered in the automation in the formart we want to display
  function alterFormatRooms(automation){
      var rooms = "";
      if(automation.rooms.length < 4){
      for(var i=0 ; i < automation.rooms.length ; i++){
        if(i!=automation.rooms.length - 1){
            rooms = rooms + automation.rooms[i] + ", "
        } else {
            rooms = rooms + automation.rooms[i] 
        }   
      } 
    }
    if(automation.rooms.length>4){
        for(var i=0;i<4;i++){
          if(i!=3){
              rooms = rooms + automation.rooms[i] + ", "
          } else {
              var roomsLeft = automation.rooms.length - 4;
              rooms = rooms + automation.rooms[i] + " +" + roomsLeft
          }   
        } 
      }
      return rooms;
  }

// Exporting the array
export default automationsListOrd;