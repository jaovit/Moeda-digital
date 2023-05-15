
var acertos = 0;
var npergunta = 5;
var difi = 60;
var stent = false;
var pergunt;

// setTimeout(minhaFuncao, 1000);

var gambiarra_m = quest_m;
var gambiarra_l = quest_l;

function pergunta() {
    if (npergunta == 0) {
        fim();
        return;
    }
    npergunta--;

    if (difi == 60) {
        pergunt = gambiarra_m[Math.floor(Math.random() * gambiarra_m.length)];
        var index = gambiarra_m.indexOf(pergunt);
        gambiarra_m.splice(index, 1);
    }
    else {
        pergunt = gambiarra_l[Math.floor(Math.random() * gambiarra_l.length)];
        var index = gambiarra_l.indexOf(pergunt);
        gambiarra_l.splice(index, 1);

    };
    document.getElementById("quest").innerHTML = pergunt.ptexto;

    pergunt.opcoes = shuffle(pergunt.opcoes);

    document.getElementById("a").value = pergunt.opcoes[0];
    document.getElementById("b").value = pergunt.opcoes[1];
    document.getElementById("c").value = pergunt.opcoes[2];
    document.getElementById("d").value = pergunt.opcoes[3];
};

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


function res(rel) {
    if (rel == pergunt.resposta) {
        acertos++;
        console.log("acertou")
    } else {
        console.log("errou")
    }
    pergunta()
};

function iniciar() {
    if (stent == false) {
        // stytles do inicio
    }
    pergunta();
    // styles da quest;
};

function fim() {

};

function reset() {
    npergunta = 5;
    acertos = 0;
    difi = 0;
    stent = true;
    gambiarra_m = quest_m;
    gambiarra_l = quest_l;
    iniciar();
};
