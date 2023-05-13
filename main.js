var acertos = 0;
var npergunta = 5;
var rcerta = 0;
var difi = 60;

// perguntas:
   var  p1 = {
    quest: 'cavalo',
    op_erradas: ['cachorro', 'sla', 'sla2'],
    op_certa: 'cavalo',
   }

   var p2 = {
    quest: 'cachorro',
    op_erradas: ['sla1','sla4','ssl5'],
    op_certa: 'cachorro'
   }
// cabo. (20 questoes)

// var n = document.querySelector("#nome").value; por algum  motivo nn funciona usa o query sla doq;

function res(resposta) {
    if (resposta == rcerta) {
        acertos++;
        console.log("acertou")
    } else {
        console.log("errou")
    }
    pergunta()
};

function pergunta() {
    if (npergunta == 0) {
        fim();
        return;
    }
    npergunta--;

    var ranp = Math.round(Math.random() * difi);
    if (difi  = 60) {
        
    } else{
        //perguntas nivel luiz
    }
}

function fim() {

}

function reset() {
    npergunta = 5;
    acertos = 0;
    difi = 0;
}