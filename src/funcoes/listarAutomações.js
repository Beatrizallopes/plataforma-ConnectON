// O que irei receber do servidor
var listaAutomacoes = [
    {tipo: "Automação",nome:"Expediente", dias:["SEG","TER","QUA"], horario:"08:00/18:00",cod:"1"},
    {tipo: "Gatilho",nome:"Hora Extra",dias:"07/09/2020", horario:"13:00",cod:"2"},
    {tipo: "Automação",nome:"Intervalo", dias:["SEG","TER","QUA","QUI","SEX"], horario:"14:00",cod:"3"},
    {tipo: "Gatilho",nome:"Teste",dias:"07/09/2020", horario:"15:00",cod:"4"},
    {tipo: "Automação",nome:"Automação 2", dias:["SEG","QUA","QUI","SEX"], horario:"01:00",cod:"5"},

  ]
  var data = "07/08/2020"; // Por enquanto a data está no formato MM/DD/AA
  var hora = "11:00";
  var diaSemana = "QUA";

// Código
var j=0;
for (var i=0;i<listaAutomacoes.length;i++){
    if(listaAutomacoes[i].tipo == "Automação"){
        var ehHoje = HojeTem(listaAutomacoes[i]);
        if(ehHoje){
           listaAutomacoes[i].tempoRestante = AnalisaHorario(listaAutomacoes[i].horario);
           j = j +1;
        } else {
            faltamDias = AnalisaDia(listaAutomacoes[i].dias);
            faltamMinutos = AnalisaHorario(listaAutomacoes[i].horario);
            if(faltamDias == -1){
              // Nesse caso, se faltamDias e -1, significa que a próxima ocorrência é no dia seguinte. Ai ele soma a quantidade de minutos que faltam para acabar o dia com a qtd de minutos do inicio do evento no próx dia
              faltam = (1440 - transformaHora(hora)) + transformaHora(listaAutomacoes[i].horario.split("/")[0])
            } else {
            faltam = parseInt(faltamDias) + parseInt(faltamMinutos);
            }
            listaAutomacoes[i].tempoRestante = faltam;
        }
    } 
    else {
       // Se for Gatilho
       dataAtual = Date.parse(data)
       dataEvento = Date.parse(listaAutomacoes[i].dias)
       diferencaMinutos = parseInt((dataEvento - dataAtual)/60000)
       diferencaMinutos = diferencaMinutos + parseInt((transformaHora(listaAutomacoes[i].horario)-transformaHora(hora)))
       listaAutomacoes[i].tempoRestante = diferencaMinutos;

    }
    }
   console.log(listaAutomacoes);
   var listaAutomacoesOrd = listaAutomacoes.sort(
    function (a, b) {
        if (a.tempoRestante > b.tempoRestante) {
        return 1;
        }
        if (a.tempoRestante < b.tempoRestante) {
        return -1;
        }
        return 0;
        }
        )
    console.log(listaAutomacoesOrd)
// Agora vamos tirar os eventos que já passaram da lista
    for(var i=0;i<listaAutomacoesOrd.length;i++){
        if(listaAutomacoesOrd[i].tempoRestante == -1){
            listaAutomacoesOrd.splice(i,1)
        }
    }
    console.log(listaAutomacoesOrd)


// Funções usadas://///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function HojeTem (automacao){
    var sim = false;
    for(var j=0;j<automacao.dias.length;j++){
        if (automacao.dias[j] == diaSemana){
            sim = true;
        }
    }
    return sim;
}

function transformaHora (horario1){
    var horaMinuto = horario1.split(":");
    var qtdHoras = parseInt(horaMinuto[0]);
    var qtdMinutos = parseInt(horaMinuto[1]);
    qtdMinutos = (qtdHoras*60) + qtdMinutos;
    return qtdMinutos
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
        }
    ;}
    else {
        qtdMinutosInicio = transformaHora(ehPersistente[0]);
        qtdMinutosFim = transformaHora(ehPersistente[1]);
    if (qtdMinutosAtual>qtdMinutosFim){
        var faltam = -1;
    }
    if(qtdMinutosAtual<qtdMinutosInicio){
        var faltam = qtdMinutosInicio - qtdMinutosAtual;
    }
    if(qtdMinutosAtual>qtdMinutosInicio && qtdMinutosAtual<qtdMinutosFim){
        var faltam = qtdMinutosFim - qtdMinutosAtual;
    }
 }
    return faltam   
}

function AnalisaDia (diasAuto){
    semana = ["DOM","SEG","TER","QUA","QUI","SEX","SAB"]
    diaHoje = semana.indexOf(diaSemana);
    var diasFaltam = 0;
    for(var i =0; i<diasAuto.length; i++){
        diaAuto = semana.indexOf(diasAuto[i]);
        if(diaAuto>diaHoje){
            diasFaltam = diaAuto - diaHoje;
            if(diasFaltam==1){
             var faltam = -1
            } else {
            var faltam = parseInt(diasFaltam*60*24)
            }
            i = diasAuto.length;
        }
    }
    return faltam;
}





