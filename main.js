var acertos = 0;
var erros = 0;
var npergunta = 0;
var acertosTotais = 0;
var errosTotais = 0;
var difi = 60;
var stent = 1;
var pergunt;
var boyscoins = 0;
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
var input = document.getElementById("nome");
var limiteCaracteres = 12;
var segundos = 0;
var timer;
var dica = false;
var dicaAperta = false;
var bonuS = 0;
var arraytext;
var remover1;
var remover2;
var cortado = false;

input.addEventListener("input", function () {
    if (input.value.length > limiteCaracteres) {
        input.value = input.value.slice(0, limiteCaracteres);
    }
});

function pergunta() {
    if (npergunta == 5) {
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
    document.getElementById("dicaText").innerHTML = pergunt.dica;

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
            boyscoins = boyscoins + 100;
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
            boyscoins = boyscoins - 30;
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
    statusFunc();
};

function proximo() {
    cortado = false;
    dica = false;
    dicaAperta = false;
    if (npergunta == 5) {
        fim();
        for (let index = 0; index < arrayElemt.length; index++) {
            let element = arrayElemt[index];
            element.style.cssText = 'background: ;' + 'color: #ffffff;' + 'transform: ;';
            respondido = false;

        }
        return;
    }
    if (respondido == true) {
        for (let index = 0; index < arrayElemt.length; index++) {
            let element = arrayElemt[index];
            element.style.cssText = 'background: ;' + 'color: #ffffff;' + 'transform: ;';
        }
        pergunta();
        respondido = false;
        document.getElementById("n-pergunt").innerHTML = npergunta + '/5';
    } else {

    }
};

function iniciarTemporizador() {
    timer = setInterval(function () {
        segundos++;
        document.getElementById("tempo").innerHTML = segundos + 's';
    }, 1000);
}

function pararTemporizador() {
    clearInterval(timer);
    segundos = 0;
    document.getElementById("tempo").innerHTML = segundos + 's';
};

function statusFunc() {
    document.getElementById("nm").innerHTML = nome;
    document.getElementById("boyscoins").innerHTML = boyscoins;
    document.getElementById("acertos").innerHTML = acertos;
}

function bonus() {
    if (bonuS == 1) {
        if (boyscoins >= 25) {
            boyscoins = boyscoins - 25;
            respondido = true;
            statusFunc();
            proximo();
        }
    }
    if (bonuS == 2) {
        if (boyscoins >= 40) {
            if (cortado = false){
            boyscoins = boyscoins - 40;
            document.getElementById("boyscoins").innerHTML = boyscoins;
            arrayElemt = [document.getElementById("a"), document.getElementById("b"), document.getElementById("c"), document.getElementById("d")];  
            arraytext = [document.getElementById("a").innerHTML, document.getElementById("b").innerHTML, document.getElementById("c").innerHTML, document.getElementById("d").innerHTML];  
            
            var indice = arraytext.indexOf(pergunt.resposta);
            arrayElemt.splice(indice, 1);

            remover1 = Math.floor(Math.random() * arrayElemt.length);
            arrayElemt[remover1].style.cssText = 'background: transparent;' + 'color: transparent;';
            arrayElemt.splice(remover1, 1);

            remover2 = Math.floor(Math.random() * arrayElemt.length);
            arrayElemt[remover2].style.cssText = 'background: transparent;' + 'color: transparent;';
            arrayElemt.splice(remover2, 1);
            cortado = true;
        }
    }
    }
    if (bonuS == 3) {
        bonuS == 0;
        if (dica == true) {
            if (dicaAperta == true) {
                var display = 'display: none;'
                dicaAperta = false;
            } else {
             var display = 'display: block;'
                dicaAperta = true;
            }
            document.getElementById("dicaText").style.cssText = display;
                document.getElementById("triangulo").style.cssText = display;
        } else {
            if (boyscoins >= 75) {
                boyscoins = boyscoins - 75;
                document.getElementById("boyscoins").innerHTML = boyscoins;
                dica = true;
                dicaAperta = true;
                document.getElementById("dicaText").style.cssText = 'display: block;';
                document.getElementById("triangulo").style.cssText = 'display: block;';
            }
        }
    }
};

function iniciar() {
    nome = document.getElementById("nome").value;
    if (nome == '') {
        nome = 'Ser sem nome';
    }
    statusFunc();
    iniciarTemporizador();
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
            boyscoins = 0;
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
    pararTemporizador();
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