// O que irei receber do servidor
var listaAutomacoes = [
    {tipo: "Automação",nome:"Expediente", dias:["SEG","TER","QUA"], horario:"08:00/18:00",cod:"1"},
    {tipo: "Gatilho",nome:"Hora Extra",dias:"09/07/2020", horario:"13:00",cod:"2"},
    {tipo: "Automação",nome:"Intervalo", dias:["SEG","TER","QUA","QUI","SEX"], horario:"14:00",cod:"3"},
    {tipo: "Gatilho",nome:"Teste",dias:"09/07/2020", horario:"15:00",cod:"4"},
  ]
  var data = "07/07/2020";
  var hora = "13:30";
  var diaSemana = "TER";

// Código
var j=0;
for (var i=0;i<listaAutomacoes.length;i++){
    if(listaAutomacoes[i].tipo == "Automação"){
        var ehHoje = HojeTem(listaAutomacoes[i]);
        if(ehHoje){
           listaAutomacoes[i].tempoRestante = AnalisaHorario(listaAutomacoes[i].horario);
           j = j +1;
        }
    } 
    else {
       // console.log("Gatilho")
    }
    }
   console.log(listaAutomacoes);

// Funções usadas:

function HojeTem (automacao){
    var sim = false;
    for(var j=0;j<automacao.dias.length;j++){
        if (automacao.dias[j] == diaSemana){
            sim = true;
        }
    }
    return sim;
}
function AnalisaHorario (horario){
    var qtdMinutosAtual = transformaHora(hora);
    var ehPersistente = horario.split("/");
    if (ehPersistente.length==1){
        var qtdMinutos = transformaHora(horario)
        if(qtdMinutos>qtdMinutosAtual){
            var faltam = qtdMinutos - qtdMinutosAtual;
        } else {
            var faltam = -1;
            // console.log("Já passou")
        }
    ;}
    else {
        qtdMinutosInicio = transformaHora(ehPersistente[0]);
        qtdMinutosFim = transformaHora(ehPersistente[1]);
    if (qtdMinutosAtual>qtdMinutosFim){
        var faltam = -1;
        // console.log("Já passou")
    }
    if(qtdMinutosAtual<qtdMinutosInicio){
        var faltam = qtdMinutosInicio - qtdMinutosAtual;
        // console.log("Faltam " + faltam + "minutos para começar")
    }
    if(qtdMinutosAtual>qtdMinutosInicio && qtdMinutosAtual<qtdMinutosFim){
        var faltam = qtdMinutosFim - qtdMinutosAtual;
        // Para exibição
        // if(faltam>60){
        //     var horasFaltam = parseInt(faltam/60);
        //     var minutosFaltam = faltam - (horasFaltam*60);
        //     console.log("Faltam " + horasFaltam + " horas e " + minutosFaltam + " minutos para acabar")
        // }
        // else{
        //     console.log("Faltam " + faltam + "minutos para acabar")
        // }
        //
    }
 }
    //console.log(faltam)
    return faltam
    
}

function transformaHora (horario1){
    var horaMinuto = horario1.split(":");
    var qtdHoras = parseInt(horaMinuto[0]);
    var qtdMinutos = parseInt(horaMinuto[1]);
    qtdMinutos = (qtdHoras*60) + qtdMinutos;
    return qtdMinutos
}
