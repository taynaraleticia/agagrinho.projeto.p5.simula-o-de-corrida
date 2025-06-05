// Lista de jogadores
let xJogadores = [450, 450, 450, 450];
let yJogadores = [100, 200, 300, 400];
let jogadores = ["🚶‍♂️", "🚶‍♀️", "🚜", "🛻"];
let velocidadeJogadores = [2, 3, 4, 5];
let vencedor = null;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  ativaJogo();
  criaJogadores();
  criaChegada();
  movimentaJogadores(); // Adicionada função para movimentação automática
  verificaGanhador();
}

// Cor de fundo da Tela ativado/desativado
function ativaJogo() {
  if (focused == true) {
    background("green");
  } else {
    background("red");
  }
}

// Cria os jogadores
function criaJogadores() {
  textSize(30);
  for (let i = 0; i < 4; i++) {
    text(jogadores[i], xJogadores[i], yJogadores[i]);
  }
}

// Cria linha de chegada
function criaChegada() {
  fill("white");
  rect(50, 0, 10, 500);

  fill("black");
  for (let yAtual = 10; yAtual < 500; yAtual += 20) {
    rect(50, yAtual, 10, 10);
  }
}

// Movimenta os jogadores automaticamente
function movimentaJogadores() {
  if (!vencedor) { // Só move se não houver vencedor
    for (let i = 0; i < 4; i++) {
      xJogadores[i] -= velocidadeJogadores[i] * random(0.5, 1.5); // Adiciona variação aleatória na velocidade
    }
  }
}

// Verifica quem ganhou
function verificaGanhador() {
  for (let i = 0; i < 4; i++) {
    if (xJogadores[i] < 50 && !vencedor) {
      vencedor = jogadores[i];
      fill("white");
      textSize(60);
      text(vencedor + " venceu!", 80, 250);
      noLoop();
      break; // Para o loop quando encontrar o primeiro vencedor
    }
  }
}

// Função original de movimentação por tecla (mantida, mas não necessária)
function keyReleased() {
  if (key === "5") {
    xJogadores[0] -= random(20);
  }
  if (key === "5") {
    xJogadores[0] -= random(20);
  }
  if (key === "5") {
    xJogadores[0] -= random(20);
  }
  if (key === "5") {
    xJogadores[0] -= random(20);
  }
}