let nomes = [];

function adicionarAmigo() {
  let nome = document.getElementById('amigo').value.trim().toLowerCase();

  if (nome === '') return;

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
    resultado.innerHTML = '<li>Nenhum nome para sortear.</li>';
    return;
  }

  let indice = Math.floor(Math.random() * nomes.length);
  let nomeSorteado = nomes[indice];

  nomes.splice(indice, 1);

  let itemResultado = document.createElement('li');
  itemResultado.textContent = `🎉 Amigo sorteado: ${capitalizar(nomeSorteado)}`;
  resultado.appendChild(itemResultado);
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

document.getElementById('amigo').focus();



//! Anotações
// 🧩 Math.random()
// Gera um número decimal aleatório entre 0 (inclusive) e 1 (exclusivo).

// Exemplo: 0.123, 0.6789, 0.99999

// 🧩 Math.random() * nomes.length
// Multiplica esse número aleatório pela quantidade de nomes.

// Suponha que nomes.length = 3 → vai gerar algo entre 0 e 2.999.

// Exemplo: 0.6789 * 3 = 2.0367

// 🧩 Math.floor(...)
// Arredonda para baixo o número decimal para o inteiro mais próximo.

// Exemplo: Math.floor(2.0367) resulta em 2.

// 🧩 nomes[...]
// Agora temos um índice aleatório inteiro entre 0 e nomes.length - 1.

// Usamos esse índice para acessar um elemento do array.

// ✅ Resultado final:
// A variável nomeSorteado recebe um nome aleatório do array nomes.

// 🧠 Exemplo completo:
// Se o array for:
// let nomes = ['Maria', 'Carlos', 'Ana'];
// E o número gerado for 0.76 →
// 0.76 * 3 = 2.28 →
// Math.floor(2.28) = 2 →
// nomes[2] = 'Ana'
