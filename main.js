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


// setTimeout(minhaFuncao, 1000);

var gambiarra_m = quest_m;
var gambiarra_l = quest_l;

function pergunta() {
    if (npergunta == 5) {
        fim();
        return;
    }
    npergunta++;

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

function res(rel) {
    statusFunc();
    if (rel == pergunt.resposta) {
        acertos++;
        boyscoins = boyscoins + 50;
        console.log("acertou")
    } else {
        erros++;
        console.log("errou")
    }
    pergunta()
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
            nmData == nome;
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

            var trTotal = tbod.insertRow();

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
    gambiarra_m = quest_m;
    gambiarra_l = quest_l;
    fimSection.style.cssText =
        'display: none;'
        // animaçao
        ;
    inicio.style.cssText =
        'display: block;'
        // animaçao
        ;
};
