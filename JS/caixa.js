const { exit } = require("process");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let notas = [1, 5, 10, 50, 100];
var qtdNotas = [0, 0, 0, 0, 0];
var it=0;
var novoSaque;

function calcNotas(x){
    for(var i=0;i<qtdNotas.length;i++)
        qtdNotas[i]=0;
    while(x>0){
        if(x>=100){
            x -= 100;
            qtdNotas[4]++;
        }else if(x>=50){
            x -= 50;
            qtdNotas[3]++;
        }else if(x>=10){
            x -= 10;
            qtdNotas[2]++;
        }else if(x>=5){
            x -= 5;
            qtdNotas[1]++;
        }else if(x>=1){
            x --;
            qtdNotas[0]++;
        }
    }
    return qtdNotas;
}

var recursiveReadLine = function(){
    rl.question("Olá Senhor(a), qual o valor do saque?\n", function(answer){
        if(isNaN(answer)==false){
            var x = parseInt(answer);
            x = Math.abs(x);
            console.log("Calculando a quantidade de notas..\n");
            calcNotas(x);
            it=0;
            qtdNotas.forEach(function(i){
                console.log("Notas de "+ notas[it] + ": " +i);
                it++;
            });
            recursiveReadLine2();
        }else{
            console.log("\nSaque inválido, favor inserir um digito válido!");
            recursiveReadLine();
        }
    });
}

var recursiveReadLine2 = function(){
    rl.question("\nDeseja fazer um novo saque?\nS para Sim e N para Não\n\n", function(answer2){
        if(answer2=="N" || answer2=="n"){
            console.log("Até mais!");
            rl.close();
        }else if(answer2=="S" || answer2=="s"){
            recursiveReadLine();
        }else{
            console.log("Essa não é uma opção válida!")
            recursiveReadLine2();
        }
    });
}

recursiveReadLine();