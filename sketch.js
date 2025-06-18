// Array para armazenar as árvores
let arvores = [];

function setup() {
  createCanvas(600, 400);
  // Criar algumas árvores aleatórias
  for (let i = 0; i <100; i++) {
    arvores.push({
      x: random(50, width - 50),
      y: random(50, height - 50),
      desmatada: false
    });
  }
}

function draw() {
  background(95, 55, 34); // Cor do fundo marrom floresta

  // Desenhar as árvores
  for (let arvore of arvores) {
    if (!arvore.desmatada) {
      fill(34, 139, 34); // Verde das árvores
      ellipse(arvore.x, arvore.y, 30, 50); // Tronco e copa
    }
  }

  // Mostrar mensagem
  fill(255);
  textSize(16);
  text("Clique nas árvores para desmatá-las!", 10, 20);
}

function mousePressed() {
  // Verificar se clicou em alguma árvore
  for (let arvore of arvores) {
    if (!arvore.desmatada) {
      let d = dist(mouseX, mouseY, arvore.x, arvore.y);
      if (d < 20) {
        arvore.desmatada = true; // Marcar como desmatada
      }
    }
  }
}