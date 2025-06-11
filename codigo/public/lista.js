// lista.js
const listaContainer = document.getElementById('lista-locais');
const inputPesquisa = document.getElementById('pesquisa');

// Função para criar um card de local
function criarCard(local) {
  const card = document.createElement('div');
  card.className = 'card-local';
  card.innerHTML = `
    <h3>${local.nome}</h3>
    <p>${local.filtro}</p>
  `;
  return card;
}

// Função para carregar e exibir os locais
async function carregarLocais() {
  try {
    const resposta = await fetch('../locais.json');
    const dados = await resposta.json();

    exibirLocais(dados);

    inputPesquisa.addEventListener('input', () => {
      const termo = inputPesquisa.value.toLowerCase();
      const filtrados = dados.filter(local =>
        local.nome.toLowerCase().includes(termo)
      );
      exibirLocais(filtrados);
    });

  } catch (erro) {
    console.error('Erro ao carregar locais:', erro);
    listaContainer.innerHTML = '<p>Erro ao carregar os locais.</p>';
  }
}

// Função para exibir os locais no DOM
function exibirLocais(lista) {
  listaContainer.innerHTML = '';
  if (lista.length === 0) {
    listaContainer.innerHTML = '<p>Nenhum local encontrado.</p>';
    return;
  }

  lista.forEach(local => {
    const card = criarCard(local);
    listaContainer.appendChild(card);
  });
}

carregarLocais();