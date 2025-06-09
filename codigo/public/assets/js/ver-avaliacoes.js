// ver-avaliacoes.js
document.addEventListener('DOMContentLoaded', function () {
  const API_URL = 'http://localhost:3000/aval'; // Note o .json no final
  const tbody = document.getElementById('avaliacoes-tabela-body');

  fetch(API_URL)
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then(data => {
      const avals = data.aval; // Acessa o array dentro da propriedade "aval"
      tbody.innerHTML = '';

      if (avals.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5">Nenhuma avaliação encontrada.</td></tr>';
        return;
      }

      avals.forEach(aval => {
        const tr = document.createElement('tr');
        
        // Converte nota numérica em estrelas (★) e vazios (☆)
        const estrelas = '★'.repeat(aval.nota) + '☆'.repeat(5 - aval.nota);
        
        tr.innerHTML = `
          <td>${aval.nome}</td>
          <td>${aval.curso}</td>
          <td>${aval.periodo}</td>
          <td><span class="estrelas">${estrelas}</span> (${aval.nota}/5)</td>
          <td>${aval.comentario}</td>
        `;
        tbody.appendChild(tr);
      });
    })
    .catch(err => {
      console.error('Erro ao carregar avaliações:', err);
      tbody.innerHTML = '<tr><td colspan="5">Erro ao carregar avaliações. Tente recarregar a página.</td></tr>';
    });
});