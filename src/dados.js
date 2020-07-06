// Dados utilizados para "simular" o banco de dados
var listaAmbientes = [
    { nome: "Escritório 1", qtdMod:4, cor:"#80908A",ehFavorito:true,cod:"1A"},
    { nome: "Escritório 2", qtdMod:2, cor:"#80908A",ehFavorito:true,cod:"1B"},
    { nome: "Escritório 3", qtdMod:6, cor:"#80908A",ehFavorito:true,cod:"1C"},
    { nome: "Descompressão", qtdMod:2, cor:"#6888CF",ehFavorito:false,cod:"1D"},
    { nome: "RH", qtdMod:2, cor:"#6888CF",ehFavorito:true,cod:"1E"},
    { nome: "Estacionamento", qtdMod:0, cor:"#CD9C44",ehFavorito:true,cod:"1F"},
    { nome: "Copa", qtdMod:3, cor:"#CD9C44",ehFavorito:true,cod:"1G"},
];
var listaAutomacoes = [
    {nome:"Expediente",horario:"08:00 as 18:00",proxEvento:"00:17:34",mensagem:"Encerrará em breve"},
    {nome:"Hora Extra",horario:" ",proxEvento:"Sábado, 08:00 as 18:00",mensagem:"Daqui a 3 dias"}
]
export default listaAmbientes;