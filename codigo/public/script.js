// Cria o mapa com os controles de zoom desativados
const map = L.map('map', {
  center: [-19.9227917, -43.9925170],
  zoom: 16,
  zoomControl: false // desativa os controles padrão
});

// Adiciona os botões de zoom no canto superior direito
L.control.zoom({
  position: 'topleft' // posições: 'topleft', 'topright', 'bottomleft', 'bottomright'
}).addTo(map);

// Adiciona os tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const GrupoDeMarcadores = L.layerGroup().addTo(map);

// Carrega marcadores do JSON
fetch('../locais.json')
  .then(response => response.json())
  .then(locais => {
    locais.forEach(local => {
      L.marker(local.coords)
        .addTo(GrupoDeMarcadores)
        .bindPopup(local.nome);
    });
  })
  .catch(error => {
    console.error('Erro ao carregar os locais:', error);
  });

// Ícones mudam de cor ao clicar
document.querySelectorAll('.icons i').forEach(icon => {
  icon.addEventListener('click', () => {
    icon.classList.toggle('active');
  });
});

var filtro = '';

const botaoFiltro = document.getElementById("filtro");
const bot1 = document.getElementById("Predio");
const bot2 = document.getElementById("Alimentacao");
const bot3 = document.getElementById("entretenimento");
const bot4 = document.getElementById("ajuda");
const box = document.getElementById("box");

botaoFiltro.onclick = function () {
  box.style.display = box.style.display === "block" ? "none" : "block";
}

bot1.addEventListener("click", async function () {
  filtro = "Predio";
  await buscarFiltro();
});
bot2.addEventListener("click", async function () {
  filtro = "Alimentacao";
  await buscarFiltro();
});
bot3.addEventListener("click", async function () {
  filtro = "entretenimento";
  await buscarFiltro();
});
bot4.addEventListener("click", async function () {
  filtro = "ajuda";
  await buscarFiltro();
});

async function buscarFiltro() {
  const data = await fetch('../locais.json');
  const locais = await data.json();
  GrupoDeMarcadores.clearLayers();
  const localEncontrado = locais.filter(local => local.filtro === filtro);
  localEncontrado.forEach((local) => {
    L.marker(local.coords)
      .addTo(GrupoDeMarcadores)
      .bindPopup(local.nome);
  });
  box.style.display = box.style.display === "block" ? "none" : "block";
}

var digitado = '';

async function buscarLocal() {
  const data = await fetch('../locais.json');
  const locais = await data.json();
  const localEncontrado = locais.find(local => local.nome === digitado);

  if (digitado === '') {
    GrupoDeMarcadores.clearLayers();
    locais.forEach(local => {
      L.marker(local.coords)
        .addTo(GrupoDeMarcadores)
        .bindPopup(local.nome);
    });
  } else if (localEncontrado) {
    GrupoDeMarcadores.clearLayers();
    L.marker(localEncontrado.coords)
      .addTo(GrupoDeMarcadores)
      .bindPopup(localEncontrado.nome);
  } else {
    alert('Local inexistente. Escreva com letras maiúsculas no início de cada palavra e com acentos.');
    GrupoDeMarcadores.clearLayers();
  }
}

const searchbar = document.getElementById("searchbar");
const OKbutton = document.getElementById('ok');

OKbutton.addEventListener("click", async function () {
  await buscarLocal();
});

searchbar.addEventListener("input", async function (e) {
  digitado = e.target.value;
});

document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const menuIcon = document.getElementById('menu-icon');
  const closeBtn = document.getElementById('close-sidebar');

  menuIcon.addEventListener('click', () => {
    sidebar.style.left = '0';
  });

  closeBtn.addEventListener('click', () => {
    sidebar.style.left = '-250px';
  });
});
