const { exit } = require("process");
const question = require("prompt-sync")();

let notas = [200, 100, 50, 20, 10, 5, 1];
var qtdNotas= [];
var novoSaque, saque;
var it=0;

function calcNotas(x){
    for(var i=0;i<notas.length;i++)
        qtdNotas[i]=0;
    while(x>0){
        for(var i=0;i<notas.length;i++){
            if(x>=notas[i]){
                x -= notas[i];
                qtdNotas[i]++;
                break;
            }
        }
    }
    return qtdNotas;
}

do{
    console.log("Olá Senhor(a), qual o valor do saque?")
    saque = question("> ");
    while(isNaN(saque)){
        console.log("Esse não é um valor válido! Por favor digite um número");
        saque = question("> ");
    }
    var x = parseInt(saque);
    x = Math.abs(x);
    console.log("Calculando a quantidade de notas..\n");
    calcNotas(x);
    it=0;
    qtdNotas.forEach(function(i){
        console.log("Notas de "+ notas[it] + ": " +i);
        it++;
    });

    console.log("Deseja sacar novamente?")
    novoSaque = question("> ");
    while(novoSaque != "N" && novoSaque !="n" && novoSaque != "S" && novoSaque != "s"){
        console.log("Essa não é uma opção válida! Deseja sacar novamente?");
        novoSaque = question("> ");
    }

}while(novoSaque!='N' && novoSaque!="n");

console.log("Até mais!!");
return;
