var acertos = 0;
var erros = 0;
var npergunta = 0;
var acertosTotais = 0;
var errosTotais = 0;
var difi = 60;
var stent = 1;
var pergunt;
var boyscoins = 50;
var quest = document.getElementById("sec-quest");
var inicio = document.getElementById("inicio");
var fimSection = document.getElementById("fim");
var nome;
var nmData;
var doisJog = false;
var inicioTest = true;
var respondido = false;
var arrayElemt = [];
var certoElemt;
var gambiarra_m = [];
var gambiarra_l = [];

// setTimeout(minhaFuncao, 1000);

function pergunta() {
    if (npergunta == 5) {
        fim();
        return;
    }
    npergunta++;

    if (difi == 60) {
        pergunt = quest_m[Math.floor(Math.random() * gambiarra_m.length)];
        var index = quest_m.indexOf(pergunt);
        quest_m.splice(index, 1);
        gambiarra_m.push(pergunt);
    }
    else {
        pergunt = quest_l[Math.floor(Math.random() * gambiarra_l.length)];
        var index = quest_l.indexOf(pergunt);
        quest_l.splice(index, 1);
        gambiarra_l.push(pergunt);
    };
    document.getElementById("quest").innerHTML = pergunt.ptexto;

    pergunt.opcoes = shuffle(pergunt.opcoes);

    document.getElementById("a").innerHTML = pergunt.opcoes[0];
    document.getElementById("b").innerHTML = pergunt.opcoes[1];
    document.getElementById("c").innerHTML = pergunt.opcoes[2];
    document.getElementById("d").innerHTML = pergunt.opcoes[3];
};

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function res(rel, elemento) {
    statusFunc();

    if (respondido == false) {
        respondido = true;

        if (rel == pergunt.resposta) {
            arrayElemt = [document.getElementById("a"), document.getElementById("b"), document.getElementById("c"), document.getElementById("d")];
            acertos++;
            boyscoins = boyscoins + 50;
            console.log("acertou");

            elemento.style.cssText =
                'background: rgb(1, 214, 1);' + 'transform: scale(1.03);'
                ;
                for (let i = 0; i < arrayElemt.length; i++) {
                    if (arrayElemt[i].innerHTML === pergunt.resposta) {
                    } else {
                            arrayElemt[i].style.cssText = 'background: transparent;' + 'color: transparent;';
                        }
                    };

        } else {
            erros++;
            console.log("errou");
            elemento.style.cssText =
                'background: red;' + 'transform: scale(1.03);'
                ;
            arrayElemt = [document.getElementById("a"), document.getElementById("b"), document.getElementById("c"), document.getElementById("d")];

            for (let i = 0; i < arrayElemt.length; i++) {
                if (arrayElemt[i].innerHTML === pergunt.resposta) {
                    certoElemt = arrayElemt[i];
                    certoElemt.style.cssText = 'background: rgb(1, 214, 1);' + 'transform: scale(1.03);';
                } else {
                    if (arrayElemt[i] == elemento) {

                    } else {
                        arrayElemt[i].style.cssText = 'background: transparent;' + 'color: transparent;';
                    }
                };
            }

        }
    }
};

function proximo() {
    if (respondido == true) {
        for (let index = 0; index < arrayElemt.length; index++){
            let element = arrayElemt[index];
            element.style.cssText = 'background: orange;' + 'color: #ffffff;' + 'transform: scale(1.03);';
        }
        pergunta();
        respondido = false;
    } else {

    }
};

function statusFunc() {
    document.getElementById("nm").innerHTML = nome;
    document.getElementById("boyscoins").innerHTML = boyscoins;
    document.getElementById("tempo").innerHTML = 0;
    document.getElementById("n-pergunt").innerHTML = npergunta + '/5';
    document.getElementById("acertos").innerHTML = acertos;
}

function iniciar() {
    nome = document.getElementById("nome").value;
    if (nome == '') {
        nome = 'Ser sem nome';
    }
    statusFunc();
    if (inicioTest == true) {
        nmData = nome;
        inicioTest = false;
    } else {
        if (nmData == nome) {
            doisJog = false;
        } else {
            doisJog = true;
            stent = 1;
            acertosTotais = 0;
            errosTotais = 0;
            boyscoins = 50;
            nmData = nome;
        }
    }

    inicio.style.cssText =
        'display: none;'
        // animaçao
        ;
    pergunta();
    quest.style.cssText =
        'display: block;'
        // animaçao
        ;
};

function table() {
    formatarNum();

    let tbod = document.getElementById('tbody');
    var tr = tbod.insertRow();

    let td_rodada = tr.insertCell();
    let td_jovem = tr.insertCell();
    let td_boys = tr.insertCell();
    let td_acertos = tr.insertCell();
    let td_erros = tr.insertCell();

    td_rodada.innerText = stent;
    td_jovem.innerText = nome;
    td_boys.innerText = boyscoins;
    td_acertos.innerText = acertos;
    td_erros.innerText = erros;

    //  total
    if (doisJog == true) {
        return;
    } else {
        if (stent > 1) {
            if (stent > 2) {
                document.getElementById("tr").remove();

            }
            var trTotal = tbod.insertRow();
            trTotal.id = "tr";

            let td_total = trTotal.insertCell();
            let td_jovemTotal = trTotal.insertCell();
            let td_boysTotal = trTotal.insertCell();
            let td_acertosTotal = trTotal.insertCell();
            let td_errosTotal = trTotal.insertCell();

            td_total.innerText = "total";
            td_jovemTotal.innerText = nome;
            td_boysTotal.innerText = boyscoins;
            td_acertosTotal.innerText = acertosTotais;
            td_errosTotal.innerText = errosTotais;
        }
    }
}

function formatarNum() {
    if (doisJog == true) {
        return;
    } else {
        acertosTotais = acertosTotais + acertos;
        errosTotais = errosTotais + erros;
    };
}

function fim() {
    table();
    fimSection.style.cssText =
        'display: block;'
        // animaçao
        ;

    quest.style.cssText =
        'display: none;'
        // animaçao
        ;
};

function reset() {
    npergunta = 0;
    acertos = 0;
    erros = 0;
    stent++;
    quest_m = quest_m.concat(gambiarra_m);
    quest_l = quest_l.concat(gambiarra_l);
    gambiarra_m = [];
    gambiarra_l = [];
    fimSection.style.cssText =
        'display: none;'
        // animaçao
        ;
    inicio.style.cssText =
        'display: block;'
        // animaçao
        ;
}