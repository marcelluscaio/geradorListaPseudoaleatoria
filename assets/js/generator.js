const secaoAmo = document.querySelector('#amo');
const secaoOdeio = document.querySelector('#odeio');
const gerarLista = document.querySelector('.gerar-lista');

const listaGeralAmo = ['música (ouvir e tocar)', 'cinema', 'ler', 'show (especialmente underground)', 'karaokê', 'jogo de tabuleiro', 'café', 'cozinhar', 'podcast', 'newsletters'];

const listaGeralOdeio = ['linkedin', 'gente arrogante', 'música eletrônica', '"Olha o meu setup"', 'discuro meritocrático descolado da realidade', 'pipoca', 'quem conserta as pessoas na frente dos outros (muitas vezes estando eles mesmos errados)'];

const listaFinalAmo = [];
const listaFinalOdeio = [];

function fazSorteio(listaGeral, listaFinal){
   const sorteio = Math.floor(Math.random() * listaGeral.length);
   listaFinal.push(listaGeral[sorteio]);
   listaGeral.splice(sorteio, 1);
}

let contador = 0;
while(contador < 5){
   fazSorteio(listaGeralAmo, listaFinalAmo);
   fazSorteio(listaGeralOdeio, listaFinalOdeio);
   contador ++;
};

function renderizaLista(lista, destino){
   destino.lastChild.remove();
   const ul = document.createElement('ul');
   
   lista.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
   });
   destino.appendChild(ul);
};

renderizaLista(listaFinalAmo, secaoAmo);
renderizaLista(listaFinalOdeio, secaoOdeio);

gerarLista.addEventListener("click", () => {
   const listaGeralAmo = ['música (ouvir e tocar)', 'cinema', 'ler', 'show (especialmente underground)', 'karaokê', 'jogo de tabuleiro', 'café', 'cozinhar', 'podcast', 'newsletters'];

   const listaGeralOdeio = ['linkedin', 'gente arrogante', 'música eletrônica', '"Olha o meu setup"', 'discuro meritocrático descolado da realidade', 'pipoca', 'quem conserta as pessoas na frente dos outros (muitas vezes estando eles mesmos errados)'];

   const listaFinalAmo = [];
   const listaFinalOdeio = [];

   let contador = 0;
   while(contador < 5){
      fazSorteio(listaGeralAmo, listaFinalAmo);
      fazSorteio(listaGeralOdeio, listaFinalOdeio);
      contador ++;
   };

   renderizaLista(listaFinalAmo, secaoAmo);
   renderizaLista(listaFinalOdeio, secaoOdeio);
})
