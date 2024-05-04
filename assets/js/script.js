
const inputPesquisaPlayer = document.querySelector("#pesquisa");

const botaoInputPesquisa = document.querySelector(".btnInputPesquisa");

const containerMain = document.querySelector(".container-main");

const statusPlayer =[ 
    "ferro","bronze","prata","prata","prata","ouro", "ouro","ouro","diamante","lendário","imortal"
]

let infoPlayers=[];

async function buscaDadosApiPlayers() {
    try {
        const api = await fetch("apiPlayers.json");
        const data = await api.json();

        infoPlayers = data.players;

        renderizarCards(infoPlayers);

    } catch (error) {
        console.log(error);
    }
}

function renderizarCards(players){
    containerMain.innerHTML = ""; 

    players.forEach((player) => {
            let nivelPlayer = Math.floor(player.xp /100);
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img class="card-img" src="${player.foto}" alt="jogador">
                <img  class="escudo" src="/assets/img/escudos/${statusPlayer[nivelPlayer]}.png" alt="escudo">
                <h4 class="xpStatus">${statusPlayer[nivelPlayer].toUpperCase()}<h4/>
                <div class="card-info">
                    <h3>Name:</h3>
                    <h3 class="nome">${player.name.toUpperCase()}</h3>
                </div>
            
                <div class="card-info">
                    <h3>Victories: </h3>
                    <h3>${player.victories}</h3>
                </div>
            
                <div class="card-info">
                    <h3>Defeats: </h3>
                    <h3>${player.defeats}</h3>
                </div>
            
                <div class="card-info">
                    <h3>Score: </h3>
                    <h3>${player.score}</h3>
                </div>`
            ;
            containerMain.appendChild(card);
            
        });
    }  
   
buscaDadosApiPlayers();

inputPesquisaPlayer.addEventListener('input',(event)=>{
    const filtro = event.target.value.trim().toLowerCase(); 
    
    const jogadoresFiltrados = infoPlayers.filter((player) => {
        return player.name.toLowerCase().includes(filtro);
    });

    renderizarCards(jogadoresFiltrados);
});



botaoInputPesquisa.addEventListener('click',()=>{
    location. reload();
   
});

const bgSound = new Audio("/assets/sfx/winning-elevation-111355.mp3");
const tiro = new Audio("/assets/sfx/9mm-pistol-shoot-short-reverb-7152.mp3");
const bonus = new Audio("/assets/sfx/bonus-points-190035.mp3");
bgSound.volume= 0.3;
tiro.volume = 0.5;
bonus.volume = 0.5;

document.addEventListener('mouseover',()=> bgSound.play());
document.addEventListener("click",()=> tiro.play());
const bonusSound = document.querySelectorAll(".container-main");

bonusSound.forEach((card)=>{
    
    card.addEventListener("mouseover",()=> bonus.play())
})
    


function showImage(event) {
    const img = document.querySelector('.vidro');
    img.style.display = 'block';
    img.style.left = (event.clientX - (img.width / 2)) + 'px';
    img.style.top = (event.clientY - (img.height / 2)) + 'px';
    setTimeout(()=>{
        img.style.display = "none";
    },500);
}

// Adiciona um listener de clique no documento
document.addEventListener('click', showImage);






















//pega dados input apos botao clicado
botaoInputPesquisa.addEventListener("click",()=>{
    let dadosInput = inputPesquisaPlayer.value;
    console.log(dadosInput);
    inputPesquisaPlayer.value = "";
    
})


























//teste2
// inputPesquisaPlayer.addEventListener("input",filtrarPesquisa);

// function filtrarPesquisa(){
//     const mostraInfoPlayer = document.querySelectorAll(".card");
//     if(inputPesquisaPlayer !== ""){
//         for(let card in mostraInfoPlayer){
//             let titulo = document.querySelector("#name").textContent.toLowerCase();
//             console.log(titulo);
//             let filtro = inputPesquisaPlayer.value.toLowerCase();
//             console.log(filtro);
//         }
//         if(!titulo.includes(filtro)){
//             mostraInfoPlayer.style.display ="none";
//         }else{
//             mostraInfoPlayer.style.display ="block";
//         }
//     }else{
//         mostraInfoPlayer.style.display ="block";
//     }
   
// }








