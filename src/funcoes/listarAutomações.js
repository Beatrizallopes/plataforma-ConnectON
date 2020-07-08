// O que irei receber do servidor
var listaAutomacoes = [
    {tipo: "Automação",nome:"Expediente", dias:["SEG","TER","QUA"], horario:"08:00/18:00",cod:"1"},
    {tipo: "Gatilho",nome:"Hora Extra",dias:"09/07/2020", horario:"13:00",cod:"2"},
    {tipo: "Automação",nome:"Intervalo", dias:["SEG","TER","QUA","QUI","SEX"], horario:"14:00",cod:"3"},
    {tipo: "Gatilho",nome:"Teste",dias:"09/07/2020", horario:"15:00",cod:"4"},
    {tipo: "Automação",nome:"Automação 2", dias:["SEG","QUA","QUI","SEX"], horario:"01:00",cod:"5"},

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
        } else {
            faltamDias = AnalisaDia(listaAutomacoes[i].dias);
            console.log("Dias")
            console.log(faltamDias)
            faltamMinutos = AnalisaHorario(listaAutomacoes[i].horario);
            console.log("Minutos")
            console.log(faltamMinutos)
            if(faltamDias == -1){
              // Nesse caso, se faltamDias e -1, significa que a próxima ocorrência é no dia seguinte. Ai ele soma a quantidade de minutos que faltam para acabar o dia com a qtd de minutos do inicio do evento no próx dia
              faltam = (1440 - transformaHora(hora)) + transformaHora(listaAutomacoes[i].horario.split("/")[0])
            }
            faltam = parseInt(faltamDias) + parseInt(faltamMinutos);
            listaAutomacoes[i].tempoRestante = faltam;
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

function AnalisaDia (diasAuto){
    semana = ["DOM","SEG","TER","QUA","QUI","SEX","SAB"]
    diaHoje = semana.indexOf(diaSemana);
    console.log("O dia de hoje é: " + diaHoje)
    var diasFaltam = 0;
    for(var i =0; i<diasAuto.length; i++){
        diaAuto = semana.indexOf(diasAuto[i]);
        if(diaAuto>diaHoje){
            console.log("O dia da auto é " + diaAuto)
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


