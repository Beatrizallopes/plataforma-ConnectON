// O que irei receber do servidor
var listaAutomacoes = [
    {tipo: "Automação",nome:"Expediente", dias:["SEG","TER","QUA"], horario:"08:00/18:00",ehPersistente:true,ambientes:["Escritório 3","Descompressão","Brahma"],cod:"1"},
    {tipo: "Gatilho",nome:"Hora Extra",dias:"07/13/2020", horario:"13:00",ehPersistente:false,ambientes:["Escritório 1","Escritório 2","Brahma"],cod:"2"},
    {tipo: "Automação",nome:"Intervalo", dias:["SEG","TER","QUA","QUI","SEX"], horario:"14:00",ehPersistente:false,ambientes:["Copa","Descompressão","Estacionamento"],cod:"3"},
     {tipo: "Gatilho",nome:"Teste",dias:"07/08/2020", horario:"18:30",ehPersistente:false,ambientes:["Escritório 1","Escritório 2","Escritório 3", "Estacionamento","Copa","Descompressão","Brahma"],cod:"4"},
    {tipo: "Automação",nome:"Automação 2", dias:["SEG","QUA","QUI","SEX"], horario:"01:00",ambientes:["RH"], ehPersistente:false,cod:"5"},
  ]
  var data = "07/08/2020"; // Por enquanto a data está no formato MM/DD/AA
  var hora = "17:00";
  var diaSemana = "QUA";

// Código
var j=0;
for (var i=0;i<listaAutomacoes.length;i++){
    if(listaAutomacoes[i].tipo == "Automação"){
        var ehHoje = HojeTem(listaAutomacoes[i]);
        var jaPassou = JaPassou(listaAutomacoes[i].horario);
        if(ehHoje && !jaPassou){
           listaAutomacoes[i].tempoRestante = AnalisaHorario(listaAutomacoes[i].horario);
           j = j +1;
        } else {  // Ou n é hoje ou é hoje e já passou
          horaExecução = listaAutomacoes[i].horario.split("/")[0];
          if(listaAutomacoes[i].horario.split("/")[0]<hora && listaAutomacoes[i].ehPersistente && listaAutomacoes[i].horario.split("/")[1]>hora ){
            horaExecução = listaAutomacoes[i].horario.split("/")[1];
          }
            faltamDias = parseInt(AnalisaDia(listaAutomacoes[i]));
            faltamMinutos = transformaHora(horaExecução) - transformaHora(hora);
            if(faltamDias == -1){
              // Nesse caso, se faltamDias e -1, significa que a próxima ocorrência é no dia seguinte. Ai ele soma a quantidade de minutos que faltam para acabar o dia com a qtd de minutos do inicio do evento no próx dia
              faltam = (1440 - transformaHora(hora)) + transformaHora(listaAutomacoes[i].horario.split("/")[0])
             // faltam = faltamMinutos
            } else {
            faltam = parseInt(faltamDias) + parseInt(faltamMinutos);
            }
            listaAutomacoes[i].tempoRestante = faltam;
            listaAutomacoes[i].mensagem = "Executa em";
        }
         if(listaAutomacoes[i].ehPersistente && transformaHora(listaAutomacoes[i].horario.split("/")[1])>transformaHora(hora)){
            listaAutomacoes[i].mensagem = "Encerra em";
           } else {
              listaAutomacoes[i].mensagem = "Executa em";
           }
    } 
    else {
       // Se for Gatilho
       dataAtual = Date.parse(data)
       dataEvento = Date.parse(listaAutomacoes[i].dias)
       diferencaMinutos = parseInt((dataEvento - dataAtual)/60000)
       diferencaMinutos = diferencaMinutos + parseInt((transformaHora(listaAutomacoes[i].horario)-transformaHora(hora)))
       listaAutomacoes[i].tempoRestante = diferencaMinutos;
       listaAutomacoes[i].mensagem = "Executa em"

    }
    }
   //console.log(listaAutomacoes);
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
   // console.log(listaAutomacoesOrd)
// Agora vamos tirar os eventos que já passaram da lista
     for(var i=0;i<listaAutomacoesOrd.length;i++){
         if(listaAutomacoesOrd[i].tempoRestante == -1){
             listaAutomacoesOrd.splice(i,1)
         }
     }
     console.log(listaAutomacoesOrd)
// Agora vamos alterar o formato de tempo restante
     for(var i =0;i<listaAutomacoesOrd.length;i++){
         listaAutomacoesOrd[i].tempoRestante = alteraFormatoHora(listaAutomacoesOrd[i])
         listaAutomacoesOrd[i].ambientes = alteraFormatoAmbientes(listaAutomacoesOrd[i])
        }
    console.log(listaAutomacoesOrd)


// Funções usadas://///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Função utilizada para verificar se a automação/gatilho será executada hoje
function HojeTem (automacao){
    var sim = false;
    for(var j=0;j<automacao.dias.length;j++){
        if (automacao.dias[j] == diaSemana){
            sim = true;
        }
    }
    return sim;
}
function JaPassou (horario){
   var sim = false;
   horas = horario.split("/");
   if(transformaHora(horas[0])<transformaHora(hora)){
       sim = true;
   }
   return sim;
}
// Função que pega a string no formato "HH:MM" e transforma na quantidade de minutos
function transformaHora (horario1){
    var horaMinuto = horario1.split(":");
    var qtdHoras = parseInt(horaMinuto[0]);
    var qtdMinutos = parseInt(horaMinuto[1]);
    qtdMinutos = (qtdHoras*60) + qtdMinutos;
    return qtdMinutos
}
// Função que vai calcular quantos minutos faltam para ocorrer o evento (sendo ele no mesmo dia)
function AnalisaHorario (horario){
    var qtdMinutosAtual = transformaHora(hora);
    var ehPersistente = horario.split("/");
    if (ehPersistente.length==1){
        var qtdMinutos = transformaHora(horario)
        if(qtdMinutos>qtdMinutosAtual){
            var faltam = qtdMinutos - qtdMinutosAtual; // Se for n persistente e se ainda for acontecer, quantos minutos faltam para executar
        } else {
            var faltam = -1; // Se já passou do horário
        }
    ;}
    else { // Se for persistente, ou seja, tem horário de início e fim
        qtdMinutosInicio = transformaHora(ehPersistente[0]);
        qtdMinutosFim = transformaHora(ehPersistente[1]);
    if (qtdMinutosAtual>qtdMinutosFim){
        var faltam = -1; // Já passou
    }
    if(qtdMinutosAtual<qtdMinutosInicio){
        var faltam = qtdMinutosInicio - qtdMinutosAtual; // Quantos minutos faltam para iniciar
    }
    if(qtdMinutosAtual>qtdMinutosInicio && qtdMinutosAtual<qtdMinutosFim){
        var faltam = qtdMinutosFim - qtdMinutosAtual; // Quantos minutos faltam para encerrar
    }
 }
    return faltam   
}
// Função que calcula a quantidade de dias inteiros para a próxima execução
function AnalisaDia (automacao){
    diasAuto = automacao.dias;
    semana = ["DOM","SEG","TER","QUA","QUI","SEX","SAB"] // Tenho q ver a questão de transição do SÁB pro DOM
    diaHoje = semana.indexOf(diaSemana);
    var diasFaltam = 0;
    for(var i =0; i<diasAuto.length; i++){
        diaAuto = semana.indexOf(diasAuto[i]);
        if(diaAuto>diaHoje){
            diasFaltam = diaAuto - diaHoje;
            if(diasFaltam==1){
             var faltam = -1 // Se falta menos de um dia para a execução
            } else {
            var faltam = parseInt(diasFaltam*60*24)
            //console.log(faltam)
            }
            i = diasAuto.length;
        } else { // Se o dia da semana já passou
        if(diaAuto!=diaHoje){
        if(i== diasAuto.length-1 ){
         diaAuto = semana.indexOf(diasAuto[0])
         console.log(automacao.nome + diaAuto)
        }
        diasFaltam = 7 - diaHoje + diaAuto;
        var faltam = parseInt(diasFaltam*60*24)
        // i = diasAuto.length;
        } else { // Ou seja, se for o mesmo dia
        var faltam = 0;
        }
        }
    }
    return faltam; // retorna a quantidade de dias inteiros (em minutos) que faltam para ser executado
}
// Função para transformar o tempo restante (POR ENQUANTO NÃO ESTOU LEVANDO EM CONSIDERAÇÃO OS SEGUNDOS)
function alteraFormatoHora(automação){
   var tempo = parseInt(automação.tempoRestante);
   var horas = parseInt(tempo/60);
   var minutos = tempo - horas*60;
   if(minutos<10){
     minutos = "0" + minutos
   }
   if(horas<10){
     horas = "0" + horas
   }
   var novoTempo = horas + ":" + minutos + ":00"; // Esse + ":00" é uma gambiarra enquanto não considero segundos
    return novoTempo;
  }
  function alteraFormatoAmbientes(automação){
      var ambientes = "";
      if(automação.ambientes.length<4){
      for(var i=0;i<automação.ambientes.length;i++){
        if(i!=automação.ambientes.length - 1){
            ambientes = ambientes + automação.ambientes[i] + ", "
        } else {
            ambientes = ambientes + automação.ambientes[i] 
        }   
      } 
    }
    if(automação.ambientes.length>4){
        for(var i=0;i<4;i++){
          if(i!=3){
              ambientes = ambientes + automação.ambientes[i] + ", "
          } else {
              var ambFaltaram = automação.ambientes.length - 4;
              ambientes = ambientes + automação.ambientes[i] + " +" + ambFaltaram
          }   
        } 
      }
      return ambientes;
  }
// Exportando o array reorganizado
export default listaAutomacoesOrd;