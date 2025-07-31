let nomes = [];

function adicionarAmigo() {
  let nome = document.getElementById('amigo').value.trim().toLowerCase();

  if (nome === '') {
    alert('Você precisa inserir um nome válido');
    return;
  }

  if (nomes.includes(nome)) {
    alert('Esse nome já foi adicionado!');
    return;
  }

  nomes.push(nome);

  let lista = document.getElementById('listaAmigos');
  let itemLista = document.createElement('li');
  itemLista.textContent = capitalizar(nome);
  lista.appendChild(itemLista);

  limparCampo();
  exporBotao(".button-clear", "button-aparece");
}

function sortearAmigo() {
  let resultado = document.getElementById('resultado');
  resultado.innerHTML = '';

  if (nomes.length === 0) {
    resultado.innerHTML = '<li>Nenhum nome para sortear</li>';
    falarTexto('Nenhum nome para sortear');
    return;
  }

  let indice = Math.floor(Math.random() * nomes.length);
  let nomeSorteado = nomes[indice];

  nomes.splice(indice, 1);

  let itemResultado = document.createElement('li');
  itemResultado.textContent = `🎉 Amigo sorteado: ${capitalizar(nomeSorteado)}`;
  resultado.appendChild(itemResultado);
  falarTexto(`O amigo sorteado foi: ${capitalizar(nomeSorteado)}`);
}

function limparCampo() {
  const input = document.getElementById('amigo');
  input.value = '';
  input.focus();
}

function limparLista() {
  nomes = [];
  document.getElementById('listaAmigos').innerHTML = '';
  document.getElementById('resultado').innerHTML = '';
  esconderBotao(".button-clear", "button-aparece");
  limparCampo();
}

function exporBotao(seletor, classe) {
  const elemento = document.querySelector(seletor);
  if (elemento) {
    elemento.classList.add(classe);
  }
}

function esconderBotao(seletor, classe) {
  const elemento = document.querySelector(seletor);
  if (elemento) {
    elemento.classList.remove(classe);
  }
}

function capitalizar(nome) {
  return nome
    .split(' ')
    .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
    .join(' ');
}

function verificaEnter(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    adicionarAmigo();
  }
}

function falarTexto(texto, velocidade = 1, tom = 1) {
  if (!'speechSynthesis' in window) {
    console.warn('Este navegador não suporta síntese de voz');
    return;
  }

  let mensagem = new SpeechSynthesisUtterance();
  mensagem.text = texto;
  mensagem.lang = 'pt-BR';
  mensagem.rate = velocidade;
  mensagem.pitch = tom;

  speechSynthesis.speak(mensagem);
}

document.getElementById('amigo').focus();
