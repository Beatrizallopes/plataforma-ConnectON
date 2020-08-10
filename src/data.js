// Simulating the database
const user = {
    name:"Usuário",
    password:"1234",
};
const roomsList = [
    { name: "Escritório 1", qtyMod:4, color:"#80908A",isFavorite:true,cod:"1A"},
    { name: "Escritório 2", qtyMod:2, color:"#80908A",isFavorite:true,cod:"1B"},
    { name: "Escritório 3", qtyMod:6, color:"#80908A",isFavorite:true,cod:"1C"},
    { name: "Descompressão", qtyMod:2, color:"#6888CF",isFavorite:false,cod:"1D"},
    { name: "RH", qtyMod:2, color:"#6888CF",isFavorite:true,cod:"1E"},
    { name: "Estacionamento", qtyMod:0, color:"#CD9C44",isFavorite:true,cod:"1F"},
    { name: "Copa", qtyMod:3, color:"#CD9C44",isFavorite:true,cod:"1G"},
    { name: "Brahma", qtyMod:1, color:"#CD9C44",isFavorite:false,cod:"1H"},
];
const devicesList = [
    {name:"Ar-Condicionado Digital Inverter 17,000 Btu/h Frio 8-Polo", brand:"Sansung", model:"AR18NVFPCWKNAZ", cod:"1", temperature: 24, speed:3},
    {name:"Ar-Condicionado Split Hi Wall LG Dual Inverter Voice 12000 ", brand:"Sansung", model:"S4-W12JA31A", cod:"2", temperature:17,speed:2},
    {name:"Ar-Condicionado Split Hi Wall LG  Inverter ", brand:"Sansung", model:"S4-W12JA31B", cod:"3", temperature:18,speed:2},
    {name:"Teste Digital Inverter 17,000 Btu/h Frio 8-Polo", brand:"Sansung", model:"AR18NVFPCWKNAZ", cod:"4", temperature: 24, speed:3},
    {name:"Ar-Condicionado Teste Hi Wall LG Dual Inverter Voice 12000 ", brand:"Sansung", model:"S4-W12JA31A", cod:"5", temperature:17,speed:2},
    {name:"Ar-Condicionado Split TesteWall LG  Inverter ", brand:"Sansung", model:"S4-W12JA31B", cod:"6", temperature:18,speed:2},
];
const automationsList = [
    {type: "Automação",name:"Expediente", days:["SEG","TER","QUA"], schedule:"08:00/18:00",isPersistent:true,rooms:["Escritório 1","Escritório 2","Escritório 3"],cod:"1",active:true,nextEvent:"00:17:34", message:"Encerrará em breve",},
    {type: "Gatilho",name:"Hora Extra",days:"07/13/2020", schedule:"13:00",isPersistent:false,rooms:["Escritório 1","Escritório 2","Brahma"],cod:"2",active:true,nextEvent:"Sábado, 08:00 as 18:00", message:"Daqui a 3 dias",},
    {type: "Automação",name:"Intervalo", days:["SEG","TER","QUA","QUI","SEX"], schedule:"14:00",isPersistent:false,rooms:["Copa","Descompressão","Estacionamento"],cod:"3",active:true,nextEvent:"Segunda, 12:00 as 14:00", message:"Daqui a 5 dias",},
    {type: "Gatilho",name:"Teste",days:"07/08/2020", schedule:"18:30",isPersistent:false,rooms:["Escritório 1","Escritório 2","Escritório 3", "Estacionamento","Copa","Descompressão","Brahma"],cod:"4",active:true,nextEvent:"00:17:34", message:"Encerrará em breve",},
    {type: "Gatilho",name:"Automação 2", days:"08/08/2020", schedule:"01:00",rooms:["RH"], isPersistent:false,cod:"5",active:true},
];

export {roomsList,devicesList,automationsList};