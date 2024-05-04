//teste 1
const statusPorXp = [
    "ferro","bronze","prata","prata","prata","ouro","ouro","ouro","diamante","lendario","imortal"
];
const namePlayer = prompt("Insira nome do jogador!");
let xpPlayer = parseInt(prompt("Insira experiencia(xp) do player!"));
const win = parseInt(prompt("Insira suas vitorias!"));
const defeat = parseInt(prompt("Insira suas derrotas!"));
if(xpPlayer < 0){
    xpPlayer = 0;
}else if(xpPlayer>1000){
    xpPlayer = 10;
}

function defineStatus(){
    let saldo = win - defeat;
    let resultado = Math.floor(xpPlayer /100);
    if(saldo > 0){
        console.log(`O Herói ${namePlayer.toUpperCase()} tem de saldo de ${saldo} vitórias.\n Seu nível é ${statusPorXp[resultado]}!`)
    }else{
        console.log("Voce tem mais derrotas que vitórias! Treine mais!!!")
    }
    
}

defineStatus();


//teste 2
// const vitorias = Math.floor(Math.random()*60);
// const derrotas = Math.floor(Math.random()*60);
// const resultado = vitorias - derrotas;

// switch(resultado){

//     case resultado < 0:
//         console.log("Voce tem mais derrotas que vitorias. Treine mais para entrar no ranking!");
//         break;
//     case resultado > -1 && resultado < 10:
//         console.log("Nível Ferro");
//         break;
//     case resultado > 9 && resultado < 21:
//         console.log("Nivel Bronze");
//         break;
//     case resultado > 20 && resultado < 51:
//         console.log("Nivel Prata");
//         break;
//     case resultado > 50 && resultado < 81:
//         console.log("Nivel Ouro");
//         break;
//     case resultado > 80 && resultado < 91:
//         console.log("Nivel Diamante");
//         break;
//     case resultado > 90 && resultado < 101:
//         console.log("Nivel Lendário");
//         break;
//     case resultado > 100 :
//         console.log("Nivel Imortal!");
//         break;
// }

