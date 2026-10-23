// ===== BASE DE ITENS =====
const BASE_ITENS = [
  { nome:'Celular', cat:'outros', peso:0.50, emoji:'📱', preco:0 },
  { nome:'Rádio', cat:'outros', peso:1.50, emoji:'📻', preco:0 },
  { nome:'Mochila', cat:'outros', peso:0, emoji:'🎒', preco:0 },
  { nome:'Dinheiro Normal', cat:'dinheiro', peso:0, emoji:'💵', preco:0 },
  { nome:'Dinheiro Sujo', cat:'dinheiro', peso:0, emoji:'💰', preco:0 },
  { nome:'Laço', cat:'ferramentas', peso:1.50, emoji:'🪢', preco:0 },
  { nome:'Máscara', cat:'ferramentas', peso:1.50, emoji:'😷', preco:0 },
  { nome:'Roupas', cat:'ferramentas', peso:0.50, emoji:'👕', preco:0 },
  { nome:'Kit de Reparo', cat:'ferramentas', peso:2.50, emoji:'🧰', preco:0 },
  { nome:'Algema', cat:'ferramentas', peso:3.50, emoji:'⛓️', preco:0 },
  { nome:'Rastreador de Veículo', cat:'ferramentas', peso:0.25, emoji:'📡', preco:0 },
  { nome:'Masterpick', cat:'ferramentas', peso:1.50, emoji:'🔓', preco:0 },
  { nome:'Placa', cat:'ferramentas', peso:2, emoji:'🪧', preco:0 },
  { nome:'Seringa Reanimadora', cat:'remedios', peso:5, emoji:'💉', preco:0 },
  { nome:'Bandagem', cat:'remedios', peso:0.50, emoji:'🩹', preco:0 },
  { nome:'Munição de Pistola', cat:'municao', peso:0.01, emoji:'💥', preco:0 },
  { nome:'Munição de SMG', cat:'municao', peso:0.02, emoji:'💥', preco:0 },
  { nome:'Munição de Rifle', cat:'municao', peso:0.03, emoji:'💥', preco:0 },
  { nome:'PT Five Seven', cat:'armas', peso:5, emoji:'🔫', preco:0 },
  { nome:'Parafall', cat:'armas', peso:10, emoji:'🔫', preco:0 },
  { nome:'Tec-9', cat:'armas', peso:8, emoji:'🔫', preco:0 },
  { nome:'Soco Inglês', cat:'armas', peso:5, emoji:'🥊', preco:0 },
  { nome:'M9A3', cat:'armas', peso:5, emoji:'🔫', preco:0 },
  { nome:'Fuzil Militar', cat:'armas', peso:10, emoji:'🔫', preco:0 },
  { nome:'Glock Rajada', cat:'armas', peso:5, emoji:'🔫', preco:0 },
  { nome:'M4A1 MK2', cat:'armas', peso:10, emoji:'🔫', preco:0 },
  { nome:'Faca', cat:'armas', peso:5, emoji:'🔪', preco:0 },
  { nome:'Taco de Baseball', cat:'armas', peso:5, emoji:'🏏', preco:0 },
  { nome:'Cristal (Venda)', cat:'drogas', peso:0.50, emoji:'💎', preco:0 },
  { nome:'Cristal (Uso)', cat:'drogas', peso:0.35, emoji:'💊', preco:0 },
  { nome:'Adrenalina (Venda)', cat:'drogas', peso:0.50, emoji:'💉', preco:0 },
  { nome:'Adrenalina (Uso)', cat:'drogas', peso:0.35, emoji:'🩸', preco:0 },
  { nome:'Farinha (Venda)', cat:'drogas', peso:0.50, emoji:'🌾', preco:0 },
  { nome:'Farinha (Uso)', cat:'drogas', peso:0.35, emoji:'🥣', preco:0 },
  { nome:'Erva (Venda)', cat:'drogas', peso:0.50, emoji:'🌿', preco:0 },
  { nome:'Erva (Uso)', cat:'drogas', peso:0.35, emoji:'🍁', preco:0 },
  { nome:'Papelzinho (Venda)', cat:'drogas', peso:0.50, emoji:'📄', preco:0 },
  { nome:'Papelzinho (Uso)', cat:'drogas', peso:0.35, emoji:'🚬', preco:0 },
  { nome:'Ouro', cat:'mineracao', peso:1.00, emoji:'🥇', preco:360 },
  { nome:'Prata', cat:'mineracao', peso:0.50, emoji:'🥈', preco:390 },
  { nome:'Bronze', cat:'mineracao', peso:0.80, emoji:'🥉', preco:240 },
  { nome:'Quartzo', cat:'mineracao', peso:0.50, emoji:'💎', preco:360 },
  { nome:'Topázio', cat:'mineracao', peso:1.00, emoji:'💛', preco:330 },
  { nome:'Turmalina', cat:'mineracao', peso:1.20, emoji:'💚', preco:348 },
  { nome:'Isca', cat:'pescaria', peso:0.25, emoji:'🪱', preco:400 },
  { nome:'Lambari', cat:'pescaria', peso:0.30, emoji:'🐟', preco:600 },
  { nome:'Salmão', cat:'pescaria', peso:0.30, emoji:'🐟', preco:1200 },
  { nome:'Tilápia', cat:'pescaria', peso:0.30, emoji:'🐟', preco:1200 },
  { nome:'Pirarucu', cat:'pescaria', peso:0.30, emoji:'🐟', preco:900 },
  { nome:'Dourado', cat:'pescaria', peso:0.90, emoji:'🐟', preco:1200 },
  { nome:'Pintado', cat:'pescaria', peso:0.30, emoji:'🐟', preco:900 },
  { nome:'Corvina', cat:'pescaria', peso:0.30, emoji:'🐟', preco:900 },
  { nome:'Pacu', cat:'pescaria', peso:0.30, emoji:'🐟', preco:900 },
  { nome:'Peixe Desconhecido', cat:'pescaria', peso:0, emoji:'❓', preco:900 },
];

const CATEGORIAS = [
  { id:'armas', nome:'🔫 Armas' },
  { id:'municao', nome:'💥 Munição' },
  { id:'drogas', nome:'💊 Drogas' },
  { id:'ferramentas', nome:'🔧 Ferramentas' },
  { id:'remedios', nome:'💉 Remédios' },
  { id:'dinheiro', nome:'💰 Dinheiro' },
  { id:'mineracao', nome:'⛏️ Mineração' },
  { id:'pescaria', nome:'🎣 Pescaria' },
  { id:'outros', nome:'📦 Outros' },
];

const BAUS_FIXOS = [
  { id:'casa', nome:'🏠 Casa' },
  { id:'moto', nome:'🏍️ Moto' },
];

const TIPOS_PADRAO = [
  { id:'bau', nome:'Baú', emoji:'📦', cor:'#4a7dff', categoria:'Baús' },
  { id:'casa', nome:'Casa', emoji:'🏠', cor:'#7c4dff', categoria:'Casas' },
  { id:'garagem', nome:'Garagem', emoji:'🚗', cor:'#4a7dff', categoria:'Veículos' },
  { id:'loja', nome:'Loja', emoji:'🛒', cor:'#ffaa00', categoria:'Lojas' },
  { id:'hospital', nome:'Hospital', emoji:'🏥', cor:'#ff4a4a', categoria:'Serviços' },
  { id:'emprego', nome:'Emprego', emoji:'💼', cor:'#00c853', categoria:'Empregos' },
  { id:'banco', nome:'Banco', emoji:'🏦', cor:'#00bcd4', categoria:'Serviços' },
  { id:'policia', nome:'Polícia', emoji:'🚓', cor:'#3f51b5', categoria:'Serviços' },
];

const TEMAS = ['escuro', 'claro', 'neon'];

// ===== ESTADO =====
let itens = JSON.parse(localStorage.getItem('itens_rp_v2') || '[]');
let capacidades = JSON.parse(localStorage.getItem('caps_rp_v2') || '{"casa":150,"moto":100}');
let veiculos = JSON.parse(localStorage.getItem('veiculos_rp_v2') || '[]');
let tiposPonto = JSON.parse(localStorage.getItem('tipos_ponto_rp') || JSON.stringify(TIPOS_PADRAO));

let abaAtual = 'casa';
let veiculoAberto = null;
let editandoId = null;
let editandoVeicId = null;
let editandoTipoId = null;
let editandoMarcId = null;
let fotoTemp = null;
let fotoMarcTemp = null;
let itemBaseSelecionado = null;
let ordenacao = 'nome';

let tiposVisiveis = JSON.parse(localStorage.getItem('tipos_visiveis_rp') || JSON.stringify(tiposPonto.map(t => t.id)));

const abasEl = document.getElementById('abas');
const conteudoEl = document.getElementById('conteudo');
const resumoEl = document.getElementById('resumo');

// ===== PERMISSÕES =====
function isAdmin() { return window.tipoUsuario === 'admin'; }
function isCliente() { return window.tipoUsuario === 'cliente'; }

function clienteJaTemCasa() {
  if (isAdmin()) return false;
  const uid = firebase.auth().currentUser?.uid;
  if (!uid) return false;
  return marcadoresMapa.some(m => m.criadoPor === uid && m.tipoId === 'casa');
}

function uidAtual() {
  return firebase.auth().currentUser?.uid || null;
}

// ===== INIT =====
function init() {
  if (window.firebase && firebase.auth().currentUser) {
    montarAbas();
    montarCategorias();
    carregarTema();
    render();
  }
}

// ===== TEMA =====
function carregarTema() {
  const tema = localStorage.getItem('tema_rp') || 'escuro';
  aplicarTema(tema);
}

function aplicarTema(tema) {
  document.body.classList.remove('claro', 'neon');
  if (tema === 'claro') document.body.classList.add('claro');
  if (tema === 'neon') document.body.classList.add('neon');

  const icones = { escuro: '🌙', claro: '☀️', neon: '💜' };
  document.getElementById('btnTema').textContent = icones[tema] || '🌙';
  localStorage.setItem('tema_rp', tema);
}

function proximoTema() {
  const atual = localStorage.getItem('tema_rp') || 'escuro';
  const i = TEMAS.indexOf(atual);
  aplicarTema(TEMAS[(i + 1) % TEMAS.length]);
}

document.getElementById('btnTema').onclick = proximoTema;

// ===== ABAS =====
function montarAbas() {
  abasEl.innerHTML = '';
  
  const mostrarCasa = isAdmin() || clienteJaTemCasa();
  if (mostrarCasa) {
    const btnCasa = document.createElement('button');
    btnCasa.textContent = '🏠 Casa';
    btnCasa.classList.toggle('ativo', abaAtual === 'casa');
    btnCasa.onclick = () => { abaAtual = 'casa'; veiculoAberto = null; montarAbas(); render(); };
    abasEl.appendChild(btnCasa);
  }

  if (isAdmin()) {
    const btnMoto = document.createElement('button');
    btnMoto.textContent = '🏍️ Moto';
    btnMoto.classList.toggle('ativo', abaAtual === 'moto');
    btnMoto.onclick = () => { abaAtual = 'moto'; veiculoAberto = null; montarAbas(); render(); };
    abasEl.appendChild(btnMoto);
  }

  const btnG = document.createElement('button');
  btnG.textContent = '🚗 Garagem';
  btnG.classList.toggle('ativo', abaAtual === 'garagem');
  btnG.onclick = () => { abaAtual = 'garagem'; veiculoAberto = null; montarAbas(); render(); };
  abasEl.appendChild(btnG);

  const btnMapa = document.createElement('button');
  btnMapa.textContent = '🗺️ Mapa';
  btnMapa.onclick = () => abrirMapa();
  abasEl.appendChild(btnMapa);

  const btnConfig = document.createElement('button');
  btnConfig.textContent = '⚙️ Configurações';
  btnConfig.classList.toggle('ativo', abaAtual === 'config');
  btnConfig.onclick = () => { abaAtual = 'config'; veiculoAberto = null; montarAbas(); render(); };
  abasEl.appendChild(btnConfig);

  if (isAdmin()) {
    const btnAdmin = document.createElement('button');
    btnAdmin.textContent = '👑 Admin';
    btnAdmin.style.background = '#ffaa00';
    btnAdmin.style.color = '#000';
    btnAdmin.onclick = () => abrirPainelAdmin();
    abasEl.appendChild(btnAdmin);
  }
}

function montarCategorias() {
  const sel = document.getElementById('itemCategoria');
  sel.innerHTML = '';
  CATEGORIAS.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.id;
    opt.textContent = c.nome;
    sel.appendChild(opt);
  });
}

// ===== RENDER =====
function render() {
  conteudoEl.innerHTML = '';
  
  if (isCliente() && abaAtual === 'casa' && !clienteJaTemCasa()) {
    abaAtual = 'garagem';
  }
  if (isCliente() && abaAtual === 'moto') {
    abaAtual = 'garagem';
  }

  if (abaAtual === 'config') {
    renderConfiguracoes();
  } else if (abaAtual === 'garagem') {
    if (veiculoAberto) renderBauVeiculo();
    else renderGaragem();
  } else if (abaAtual === 'casa' && isCliente()) {
    renderCasaCliente();
  } else {
    renderBauFixo(abaAtual);
  }
  atualizarResumo();
}

function atualizarResumo() {
  let total = 0, unid = 0;
  itens.forEach(i => { total++; unid += Number(i.qtd); });
  resumoEl.textContent = `${total} itens • ${unid} unidades`;
}

function calcularPeso(arr) {
  return arr.reduce((s, i) => s + (Number(i.qtd) * Number(i.peso || 0)), 0);
}

function ordenarItens(arr) {
  const copia = [...arr];
  if (ordenacao === 'nome') copia.sort((a,b) => a.nome.localeCompare(b.nome));
  else if (ordenacao === 'qtd') copia.sort((a,b) => b.qtd - a.qtd);
  else if (ordenacao === 'peso') copia.sort((a,b) => (b.qtd*b.peso) - (a.qtd*a.peso));
  return copia;
}

function criarBarraOrdenacao() {
  const div = document.createElement('div');
  div.className = 'ordenacao';
  const ops = [
    { id:'nome', txt:'🔤 Nome' },
    { id:'qtd', txt:'🔢 Quantidade' },
    { id:'peso', txt:'⚖️ Peso' },
  ];
  ops.forEach(o => {
    const btn = document.createElement('button');
    btn.textContent = o.txt;
    btn.classList.toggle('ativo', ordenacao === o.id);
    btn.onclick = () => { ordenacao = o.id; render(); };
    div.appendChild(btn);
  });
  return div;
}

function renderBauFixo(bauId) {
  const bau = BAUS_FIXOS.find(b => b.id === bauId);
  const cap = capacidades[bauId] || 0;
  const itensBau = itens.filter(i => i.bau === bauId);
  const pesoTotal = calcularPeso(itensBau);
  const pct = cap > 0 ? Math.min((pesoTotal/cap)*100, 100) : 0;

  const capDiv = document.createElement('div');
  capDiv.className = 'capacidade';
  capDiv.innerHTML = `
    <div class="capacidade-topo">
      <strong>${bau.nome}</strong>
      <button id="btnEditCap">⚙️ Capacidade</button>
    </div>
    <div class="capacidade-barra">
      <div class="capacidade-preenchida ${pesoTotal > cap ? 'cheio':''}" style="width:${pct}%"></div>
    </div>
    <div class="capacidade-texto">${pesoTotal.toFixed(2)} / ${cap} kg • ${itensBau.length} itens</div>
  `;
  conteudoEl.appendChild(capDiv);
  capDiv.querySelector('#btnEditCap').onclick = () => abrirModalCap(bauId);

  const barra = document.createElement('div');
  barra.className = 'barra';
  barra.innerHTML = `
    <input type="text" id="busca" placeholder="🔍 Buscar item..." />
    <button id="btnNovo">➕ Novo item</button>
  `;
  conteudoEl.appendChild(barra);
  barra.querySelector('#btnNovo').onclick = () => abrirModal();
  barra.querySelector('#busca').oninput = (e) => renderListaItens(bauId, e.target.value);

  conteudoEl.appendChild(criarBarraOrdenacao());

  const lista = document.createElement('main');
  lista.id = 'lista';
  conteudoEl.appendChild(lista);
  renderListaItens(bauId, '');
}

function renderListaItens(bauId, busca='') {
  const lista = document.getElementById('lista');
  if (!lista) return;
  const f = busca.toLowerCase();
  let arr = itens.filter(i => i.bau === bauId && i.nome.toLowerCase().includes(f));
  arr = ordenarItens(arr);
  lista.innerHTML = '';
  if (!arr.length) { lista.innerHTML = '<div class="vazio">Nenhum item aqui ainda.</div>'; return; }
  arr.forEach(i => lista.appendChild(criarCardItem(i)));
}

function renderCasaCliente() {
  const uid = uidAtual();
  const cap = capacidades['casa'] || 0;
  const itensCasa = itens.filter(i => i.bau === 'casa' && i.criadoPor === uid);
  const pesoTotal = calcularPeso(itensCasa);
  const pct = cap > 0 ? Math.min((pesoTotal/cap)*100, 100) : 0;

  const capDiv = document.createElement('div');
  capDiv.className = 'capacidade';
  capDiv.innerHTML = `
    <div class="capacidade-topo">
      <strong>🏠 Casa</strong>
    </div>
    <div class="capacidade-barra">
      <div class="capacidade-preenchida ${pesoTotal > cap ? 'cheio':''}" style="width:${pct}%"></div>
    </div>
    <div class="capacidade-texto">${pesoTotal.toFixed(2)} / ${cap} kg • ${itensCasa.length} itens</div>
  `;
  conteudoEl.appendChild(capDiv);

  const barra = document.createElement('div');
  barra.className = 'barra';
  barra.innerHTML = `
    <input type="text" id="busca" placeholder="🔍 Buscar item..." />
    <button id="btnNovo">➕ Novo item</button>
  `;
  conteudoEl.appendChild(barra);
  barra.querySelector('#btnNovo').onclick = () => abrirModal();
  barra.querySelector('#busca').oninput = (e) => renderListaItensCasaCliente(e.target.value);

  conteudoEl.appendChild(criarBarraOrdenacao());

  const lista = document.createElement('main');
  lista.id = 'lista';
  conteudoEl.appendChild(lista);
  renderListaItensCasaCliente('');
}

function renderListaItensCasaCliente(busca = '') {
  const lista = document.getElementById('lista');
  if (!lista) return;
  const uid = uidAtual();
  const f = busca.toLowerCase();
  let arr = itens.filter(i => i.bau === 'casa' && i.criadoPor === uid && i.nome.toLowerCase().includes(f));
  arr = ordenarItens(arr);
  lista.innerHTML = '';
  if (!arr.length) { lista.innerHTML = '<div class="vazio">Nenhum item aqui ainda.</div>'; return; }
  arr.forEach(i => lista.appendChild(criarCardItem(i)));
}

function renderGaragem() {
  const barra = document.createElement('div');
  barra.className = 'barra';
  barra.innerHTML = `<button id="btnNovoVeic" style="flex:1">➕ Novo veículo</button>`;
  conteudoEl.appendChild(barra);
  barra.querySelector('#btnNovoVeic').onclick = () => abrirModalVeiculo();

  const lista = document.createElement('main');
  conteudoEl.appendChild(lista);

  let veiculosVisiveis = veiculos;
  if (isCliente()) {
    const uid = uidAtual();
    veiculosVisiveis = veiculos.filter(v => v.criadoPor === uid);
  }

  if (!veiculosVisiveis.length) {
    lista.innerHTML = '<div class="vazio">Nenhum veículo cadastrado.</div>';
    return;
  }

  veiculosVisiveis.forEach(v => {
    const its = itens.filter(i => i.veiculoId === v.id);
    const peso = calcularPeso(its);
    const pct = v.capacidade > 0 ? Math.min((peso/v.capacidade)*100,100) : 0;
    const card = document.createElement('div');
    card.className = 'card-veiculo';
    card.innerHTML = `
      <div class="icone">${iconeTipo(v.tipo)}</div>
      <div class="info">
        <h3>${v.nome}${v.vaga ? `<span class="vaga">${v.vaga}</span>` : ''}</h3>
        <div class="cap">${peso.toFixed(2)} / ${v.capacidade} kg • ${its.length} itens</div>
        <div class="capacidade-barra" style="margin-top:6px;height:6px;">
          <div class="capacidade-preenchida ${peso>v.capacidade?'cheio':''}" style="width:${pct}%"></div>
        </div>
      </div>
      <div class="acoes">
        <button type="button" data-acao="editar">✏️</button>
        <button type="button" data-acao="excluir">🗑️</button>
      </div>
    `;
    card.querySelector('[data-acao="editar"]').onclick = (e) => { e.stopPropagation(); abrirModalVeiculo(v); };
    card.querySelector('[data-acao="excluir"]').onclick = (e) => { e.stopPropagation(); excluirVeiculo(v.id); };
    card.onclick = (e) => {
      if (e.target.closest('button')) return;
      veiculoAberto = v.id;
      render();
    };
    lista.appendChild(card);
  });
}

function renderBauVeiculo() {
  const v = veiculos.find(x => x.id === veiculoAberto);
  if (!v) { veiculoAberto = null; render(); return; }

  if (isCliente() && v.criadoPor !== uidAtual()) {
    alert('❌ Você não tem acesso a este veículo.');
    veiculoAberto = null;
    render();
    return;
  }

  const btnVoltar = document.createElement('button');
  btnVoltar.className = 'voltar';
  btnVoltar.textContent = '← Voltar pra Garagem';
  btnVoltar.onclick = () => { veiculoAberto = null; render(); };
  conteudoEl.appendChild(btnVoltar);

  const its = itens.filter(i => i.veiculoId === v.id);
  const peso = calcularPeso(its);
  const pct = v.capacidade > 0 ? Math.min((peso/v.capacidade)*100,100) : 0;

  const capDiv = document.createElement('div');
  capDiv.className = 'capacidade';
  capDiv.innerHTML = `
    <div class="capacidade-topo">
      <strong>${iconeTipo(v.tipo)} ${v.nome}${v.vaga?` • ${v.vaga}`:''}</strong>
      <button id="btnEditCapV">⚙️ Capacidade</button>
    </div>
    <div class="capacidade-barra">
      <div class="capacidade-preenchida ${peso>v.capacidade?'cheio':''}" style="width:${pct}%"></div>
    </div>
    <div class="capacidade-texto">${peso.toFixed(2)} / ${v.capacidade} kg • ${its.length} itens</div>
  `;
  conteudoEl.appendChild(capDiv);
  capDiv.querySelector('#btnEditCapV').onclick = () => abrirModalCapVeic(v.id);

  const barra = document.createElement('div');
  barra.className = 'barra';
  barra.innerHTML = `
    <input type="text" id="busca" placeholder="🔍 Buscar item..." />
    <button id="btnNovo">➕ Novo item</button>
  `;
  conteudoEl.appendChild(barra);
  barra.querySelector('#btnNovo').onclick = () => abrirModal();
  barra.querySelector('#busca').oninput = (e) => renderListaItensVeic(v.id, e.target.value);

  conteudoEl.appendChild(criarBarraOrdenacao());

  const lista = document.createElement('main');
  lista.id = 'lista';
  conteudoEl.appendChild(lista);
  renderListaItensVeic(v.id, '');
}

function renderListaItensVeic(veicId, busca='') {
  const lista = document.getElementById('lista');
  if (!lista) return;
  const f = busca.toLowerCase();
  let arr = itens.filter(i => i.veiculoId === veicId && i.nome.toLowerCase().includes(f));
  arr = ordenarItens(arr);
  lista.innerHTML = '';
  if (!arr.length) { lista.innerHTML = '<div class="vazio">Nenhum item aqui ainda.</div>'; return; }
  arr.forEach(i => lista.appendChild(criarCardItem(i)));
}

function iconeTipo(t) { return {carro:'🚗',moto:'🏍️',helicoptero:'🚁',aviao:'✈️',barco:'🚤',outro:'📦'}[t] || '🚗'; }

function criarCardItem(item) {
  const card = document.createElement('div');
  card.className = 'card-item';
  const cat = CATEGORIAS.find(c => c.id === item.categoria);
  const pesoItem = (Number(item.qtd) * Number(item.peso || 0)).toFixed(2);
  const precoUnitario = Number(item.preco || 0);
  const valorTotal = (precoUnitario * Number(item.qtd || 0)).toFixed(0);
  const linhaPreco = precoUnitario > 0 
    ? `<div style="font-size:0.75rem; color:#00c853; margin-top:2px;">💰 R$ ${precoUnitario.toFixed(2)}/un • Total: R$ ${valorTotal}</div>` 
    : '';

  const podeExcluir = isAdmin() || (isCliente() && (veiculoAberto || (item.bau === 'casa' && item.criadoPor === uidAtual())));
  const podeEditar = isAdmin() || (isCliente() && (veiculoAberto || (item.bau === 'casa' && item.criadoPor === uidAtual())));

  card.innerHTML = `
    <div class="icone">${item.foto?`<img src="${item.foto}"/>`:(item.emoji||'📦')}</div>
    <div class="info">
      <h3>${item.nome}</h3>
      <span>${cat?cat.nome:'Sem categoria'} • ${pesoItem} kg</span>
      ${linhaPreco}
    </div>
    <div class="qtd">x${item.qtd}</div>
    <div class="acoes">
      ${podeEditar ? `<button data-acao="editar">✏️</button>` : ''}
      ${podeExcluir ? `<button data-acao="excluir">🗑️</button>` : ''}
    </div>
  `;
  if (podeEditar) card.querySelector('[data-acao="editar"]').onclick = () => abrirModal(item);
  if (podeExcluir) card.querySelector('[data-acao="excluir"]').onclick = () => excluir(item.id);
  return card;
}
// ===== MODAL ITEM =====
function abrirModal(item=null) {
  editandoId = item ? item.id : null;
  fotoTemp = item ? item.foto : null;
  itemBaseSelecionado = null;

  const camposBloqueados = ['itemNome', 'itemCategoria', 'itemPeso', 'itemPreco', 'itemEmoji', 'itemFoto'];
  camposBloqueados.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.disabled = !isAdmin();
  });

  document.getElementById('modalTitulo').textContent = item ? 'Editar item' : 'Novo item';
  document.getElementById('telaEscolha').style.display = item ? 'none' : 'block';
  document.getElementById('telaForm').style.display = item ? 'block' : 'none';
  document.getElementById('btnVoltar').style.display = item ? 'none' : 'block';

  if (item) {
    document.getElementById('itemNome').value = item.nome;
    document.getElementById('itemQtd').value = item.qtd;
    document.getElementById('itemCategoria').value = item.categoria;
    document.getElementById('itemPeso').value = item.peso || 0;
    if(document.getElementById('itemPreco')) document.getElementById('itemPreco').value = item.preco || 0;
    document.getElementById('itemEmoji').value = item.emoji || '';
    document.getElementById('preview').innerHTML = item.foto ? `<img src="${item.foto}"/>` : '';
  } else {
    document.getElementById('buscaItem').value = '';
    montarListaEscolha('');
  }
  document.getElementById('itemFoto').value = '';
  document.getElementById('modal').classList.remove('escondido');
}

function montarListaEscolha(busca='') {
  const lista = document.getElementById('listaItens');
  lista.innerHTML = '';
  const f = busca.toLowerCase();
  const filtrados = BASE_ITENS.filter(i => i.nome.toLowerCase().includes(f));

  CATEGORIAS.forEach(cat => {
    const doCat = filtrados.filter(i => i.cat === cat.id);
    if (!doCat.length) return;
    const tit = document.createElement('div');
    tit.className = 'cat-titulo';
    tit.textContent = cat.nome;
    lista.appendChild(tit);
    doCat.forEach(it => {
      const div = document.createElement('div');
      div.className = 'item-opcao';
      div.innerHTML = `<span>${it.emoji} ${it.nome}</span><span class="peso">${it.peso} kg/un</span>`;
      div.onclick = () => escolherItemBase(it);
      lista.appendChild(div);
    });
  });

  if (isAdmin()) {
    const pers = document.createElement('div');
    pers.className = 'item-opcao personalizado';
    pers.innerHTML = `<span>➕ Item personalizado</span>`;
    pers.onclick = () => escolherItemBase(null);
    lista.appendChild(pers);
  }
}

function escolherItemBase(it) {
  itemBaseSelecionado = it;
  document.getElementById('telaEscolha').style.display = 'none';
  document.getElementById('telaForm').style.display = 'block';
  document.getElementById('btnVoltar').style.display = 'block';

  if (it) {
    document.getElementById('itemNome').value = it.nome;
    document.getElementById('itemCategoria').value = it.cat;
    document.getElementById('itemPeso').value = it.peso;
    if(document.getElementById('itemPreco')) document.getElementById('itemPreco').value = it.preco || 0;
    document.getElementById('itemEmoji').value = it.emoji || '';
  } else {
    document.getElementById('itemNome').value = '';
    document.getElementById('itemCategoria').value = 'outros';
    document.getElementById('itemPeso').value = 0;
    if(document.getElementById('itemPreco')) document.getElementById('itemPreco').value = 0;
    document.getElementById('itemEmoji').value = '';
  }
  document.getElementById('itemQtd').value = 1;
}

function voltarEscolha() {
  document.getElementById('telaEscolha').style.display = 'block';
  document.getElementById('telaForm').style.display = 'none';
  document.getElementById('btnVoltar').style.display = 'none';
  montarListaEscolha(document.getElementById('buscaItem').value);
}

function fecharModal() {
  document.getElementById('modal').classList.add('escondido');
  editandoId = null; fotoTemp = null; itemBaseSelecionado = null;
}

function salvar() {
  const qtd = parseInt(document.getElementById('itemQtd').value) || 1;

  if (editandoId) {
    const it = itens.find(i => i.id === editandoId);
    if (isAdmin()) {
      const nome = document.getElementById('itemNome').value.trim();
      const cat = document.getElementById('itemCategoria').value;
      const peso = parseFloat(document.getElementById('itemPeso').value) || 0;
      const emoji = document.getElementById('itemEmoji').value.trim();
      const preco = parseFloat(document.getElementById('itemPreco')?.value) || 0;
      if (!nome) { alert('Digite o nome do item!'); return; }
      Object.assign(it, { nome, qtd, categoria:cat, peso, emoji, preco, foto:fotoTemp });
    } else {
      it.qtd = qtd;
    }
  } else {
    const nome = document.getElementById('itemNome').value.trim();
    const cat = document.getElementById('itemCategoria').value;
    const peso = parseFloat(document.getElementById('itemPeso').value) || 0;
    const emoji = document.getElementById('itemEmoji').value.trim();
    const preco = parseFloat(document.getElementById('itemPreco')?.value) || 0;
    if (!nome) { alert('Digite o nome do item!'); return; }
    const novo = {
      id: Date.now().toString(),
      nome, qtd, categoria:cat, peso, emoji, preco,
      foto: fotoTemp,
      bau: veiculoAberto ? null : abaAtual,
      veiculoId: veiculoAberto || null,
      criadoPor: uidAtual(),
    };
    itens.push(novo);
  }
  salvarStorage();
  fecharModal();
  render();
}

function excluir(id) {
  if (!confirm('Excluir este item?')) return;
  itens = itens.filter(i => i.id !== id);
  salvarStorage();
  render();
}

// ===== MODAL VEÍCULO =====
function abrirModalVeiculo(v=null) {
  editandoVeicId = v ? v.id : null;
  document.getElementById('modalVeiculoTitulo').textContent = v ? 'Editar veículo' : 'Novo veículo';
  document.getElementById('veicNome').value = v ? v.nome : '';
  document.getElementById('veicTipo').value = v ? v.tipo : 'carro';
  document.getElementById('veicVaga').value = v ? (v.vaga||'') : '';
  document.getElementById('veicCap').value = v ? v.capacidade : 500;
  document.getElementById('modalVeiculo').classList.remove('escondido');
}

function fecharModalVeiculo() {
  document.getElementById('modalVeiculo').classList.add('escondido');
  editandoVeicId = null;
}

function salvarVeiculo() {
  const nome = document.getElementById('veicNome').value.trim();
  const tipo = document.getElementById('veicTipo').value;
  const vaga = document.getElementById('veicVaga').value.trim();
  const cap = parseInt(document.getElementById('veicCap').value) || 0;
  if (!nome) { alert('Digite o nome do veículo!'); return; }

  if (editandoVeicId) {
    const v = veiculos.find(x => x.id === editandoVeicId);
    if (isCliente() && v.criadoPor !== uidAtual()) {
      alert('❌ Você não tem permissão para editar este veículo.');
      return;
    }
    Object.assign(v, { nome, tipo, vaga, capacidade:cap });
  } else {
    veiculos.push({ 
      id: Date.now().toString(), 
      nome, tipo, vaga, capacidade:cap,
      criadoPor: uidAtual()
    });
  }
  salvarStorage();
  fecharModalVeiculo();
  render();
}

function excluirVeiculo(id) {
  const v = veiculos.find(x => x.id === id);
  if (isCliente() && v.criadoPor !== uidAtual()) {
    alert('❌ Você não tem permissão para excluir este veículo.');
    return;
  }
  if (!confirm('Excluir este veículo e todos os itens dele?')) return;
  veiculos = veiculos.filter(v => v.id !== id);
  itens = itens.filter(i => i.veiculoId !== id);
  salvarStorage();
  render();
}

// ===== MODAL CAPACIDADE =====
let capEditando = null;

function abrirModalCap(bauId) {
  capEditando = bauId;
  document.getElementById('capValor').value = capacidades[bauId] || 0;
  document.getElementById('modalCap').classList.remove('escondido');
}

function abrirModalCapVeic(veicId) {
  capEditando = 'veic:' + veicId;
  const v = veiculos.find(x => x.id === veicId);
  document.getElementById('capValor').value = v.capacidade;
  document.getElementById('modalCap').classList.remove('escondido');
}

function fecharModalCap() {
  document.getElementById('modalCap').classList.add('escondido');
  capEditando = null;
}

function salvarCap() {
  const v = parseInt(document.getElementById('capValor').value) || 0;
  if (capEditando.startsWith('veic:')) {
    const id = capEditando.replace('veic:','');
    const ve = veiculos.find(x => x.id === id);
    if (ve) ve.capacidade = v;
  } else {
    capacidades[capEditando] = v;
  }
  salvarStorage();
  fecharModalCap();
  render();
}

// ===== STORAGE =====
function salvarStorage() {
  localStorage.setItem('itens_rp_v2', JSON.stringify(itens));
  localStorage.setItem('caps_rp_v2', JSON.stringify(capacidades));
  localStorage.setItem('veiculos_rp_v2', JSON.stringify(veiculos));
  localStorage.setItem('tipos_ponto_rp', JSON.stringify(tiposPonto));
}

// ===== CONFIGURAÇÕES =====
function renderConfiguracoes() {
  const totalItens = itens.length;
  const totalVeiculos = veiculos.length;
  const totalMarcadores = marcadoresMapa.length;
  const totalTipos = tiposPonto.length;
  const temaAtual = localStorage.getItem('tema_rp') || 'escuro';
  const corAtiva = localStorage.getItem('cor_marcadores') !== 'sem-cor';

  const div = document.createElement('div');
  div.innerHTML = `
    <div class="config-secao">
      <h2>🎨 Tema</h2>
      <p>Escolha o tema do app. Sua escolha fica salva automaticamente.</p>
      <div class="temas-selector">
        <div class="tema-opcao ${temaAtual === 'escuro' ? 'ativo' : ''}" data-tema="escuro">
          <div class="icone">🌙</div><div class="nome">Escuro</div>
        </div>
        <div class="tema-opcao ${temaAtual === 'claro' ? 'ativo' : ''}" data-tema="claro">
          <div class="icone">☀️</div><div class="nome">Claro</div>
        </div>
        <div class="tema-opcao ${temaAtual === 'neon' ? 'ativo' : ''}" data-tema="neon">
          <div class="icone">💜</div><div class="nome">Neon</div>
        </div>
      </div>
    </div>

    ${isAdmin() ? `
    <div class="config-secao">
      <h2>🎯 Marcadores do mapa</h2>
      <p>Como você quer que os marcadores apareçam no mapa?</p>
      <div class="config-botoes">
        <button id="btnComCor" style="background:${corAtiva ? 'var(--azul)' : 'var(--bg-3)'};color:${corAtiva ? 'white' : 'var(--texto)'};">🎨 Com cor</button>
        <button id="btnSemCor" style="background:${!corAtiva ? 'var(--azul)' : 'var(--bg-3)'};color:${!corAtiva ? 'white' : 'var(--texto)'};">✨ Só emoji</button>
      </div>
    </div>
    ` : ''}

    <div class="config-secao">
      <h2>📤 Exportar backup</h2>
      <p>Baixe um arquivo com <strong>todos os seus dados</strong>. Guarde em local seguro.</p>
      <div class="config-botoes">
        <button class="btn-exportar" id="btnExportar">📤 Exportar backup</button>
      </div>
    </div>

    <div class="config-secao">
      <h2>📥 Importar backup</h2>
      <p>Restaure seus dados a partir de um arquivo <code>.json</code>.</p>
      <div class="config-botoes">
        <button class="btn-importar" id="btnImportar">📥 Escolher arquivo</button>
      </div>
      <input type="file" id="arquivoImport" accept=".json,application/json" style="display:none;" />
    </div>

    <div class="config-secao">
      <h2>📊 Estatísticas</h2>
      <div class="config-info">
        📦 <strong>${totalItens}</strong> itens cadastrados<br>
        🚗 <strong>${totalVeiculos}</strong> veículos na garagem<br>
        📍 <strong>${totalMarcadores}</strong> pontos no mapa<br>
        🏷️ <strong>${totalTipos}</strong> tipos de ponto criados
      </div>
    </div>

    ${isAdmin() ? `
    <div class="config-secao">
      <h2>⚠️ Zona de perigo</h2>
      <p>Apagar <strong>TODOS</strong> os dados do app.</p>
      <div class="config-botoes">
        <button class="btn-resetar" id="btnResetar">🗑️ Apagar tudo</button>
      </div>
    </div>
    ` : ''}
  `;
  conteudoEl.appendChild(div);

  div.querySelectorAll('.tema-opcao').forEach(el => {
    el.onclick = () => { aplicarTema(el.dataset.tema); render(); };
  });

  if (isAdmin()) {
    const bCom = div.querySelector('#btnComCor');
    const bSem = div.querySelector('#btnSemCor');
    if (bCom) bCom.onclick = () => {
      localStorage.setItem('cor_marcadores', 'com-cor'); render();
      if (map) { marcadoresLeaflet.forEach(x => map.removeLayer(x.marker)); marcadoresLeaflet = []; marcadoresMapa.forEach(m => desenharMarcador(m)); }
    };
    if (bSem) bSem.onclick = () => {
      localStorage.setItem('cor_marcadores', 'sem-cor'); render();
      if (map) { marcadoresLeaflet.forEach(x => map.removeLayer(x.marker)); marcadoresLeaflet = []; marcadoresMapa.forEach(m => desenharMarcador(m)); }
    };
  }

  div.querySelector('#btnExportar').onclick = exportarBackup;
  div.querySelector('#btnImportar').onclick = () => document.getElementById('arquivoImport').click();
  div.querySelector('#arquivoImport').onchange = importarBackup;
  
  if (isAdmin()) {
    const bReset = div.querySelector('#btnResetar');
    if (bReset) bReset.onclick = resetarTudo;
  }
}

// ===== EXPORTAR / IMPORTAR =====
async function exportarBackup() {
  const backup = {
    versao: 1, data: new Date().toISOString(),
    itens, capacidades, veiculos, tiposPonto, marcadoresMapa, tiposVisiveis,
    tema: localStorage.getItem('tema_rp') || 'escuro',
    corMarcadores: localStorage.getItem('cor_marcadores') || 'com-cor',
  };
  const json = JSON.stringify(backup, null, 2);
  const nomeArquivo = `inventario-rp-backup-${new Date().toISOString().slice(0,10)}.json`;

  try {
    if (window.Capacitor && window.Capacitor.Plugins) {
      const Plugins = window.Capacitor.Plugins;
      if (Plugins.Filesystem && Plugins.Share) {
        const Fs = Plugins.Filesystem; const Sh = Plugins.Share;
        const Dir = Fs.Directory; const Enc = Fs.Encoding;
        const cache = (Dir && Dir.Cache) ? Dir.Cache : 'CACHE';
        await Fs.writeFile({ path: nomeArquivo, data: json, directory: cache, encoding: Enc ? Enc.UTF8 : 'utf8' });
        const uri = await Fs.getUri({ path: nomeArquivo, directory: cache });
        await Sh.share({ title: 'Backup', text: 'Salvar', url: uri.uri, dialogTitle: 'Salvar backup' });
        return;
      }
    }
  } catch (err) {}
  downloadFallback(json, nomeArquivo);
}

function downloadFallback(json, nomeArquivo) {
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = nomeArquivo;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
  alert('✅ Backup gerado!');
}

let backupPendente = null;

function importarBackup(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    try {
      const dados = JSON.parse(ev.target.result);
      backupPendente = dados;
      document.getElementById('previewQtdItens').textContent = (dados.itens || []).length;
      document.getElementById('previewQtdVeiculos').textContent = (dados.veiculos || []).length;
      document.getElementById('previewQtdMarcadores').textContent = (dados.marcadoresMapa || []).length;
      document.getElementById('previewQtdTipos').textContent = (dados.tiposPonto || []).length;
      document.getElementById('modalImportar').classList.remove('escondido');
    } catch (err) { alert('❌ Arquivo inválido!'); }
    e.target.value = '';
  };
  reader.readAsText(file);
}

document.getElementById('btnImportSubstituir').onclick = () => {
  if (!backupPendente || !confirm('⚠️ APAGAR tudo e substituir?')) return;
  itens = backupPendente.itens || [];
  capacidades = backupPendente.capacidades || {casa:150, moto:100};
  veiculos = backupPendente.veiculos || [];
  tiposPonto = backupPendente.tiposPonto || TIPOS_PADRAO;
  marcadoresMapa = backupPendente.marcadoresMapa || [];
  tiposVisiveis = backupPendente.tiposVisiveis || tiposPonto.map(t => t.id);
  salvarStorage();
  localStorage.setItem('marcadores_mapa', JSON.stringify(marcadoresMapa));
  localStorage.setItem('tipos_visiveis_rp', JSON.stringify(tiposVisiveis));
  if (backupPendente.tema) { localStorage.setItem('tema_rp', backupPendente.tema); aplicarTema(backupPendente.tema); }
  backupPendente = null; document.getElementById('modalImportar').classList.add('escondido');
  if (map) { marcadoresLeaflet.forEach(x => map.removeLayer(x.marker)); marcadoresLeaflet = []; marcadoresMapa.forEach(m => desenharMarcador(m)); atualizarLegenda(); }
  alert('✅ Restaurado!'); render();
};

document.getElementById('btnImportJuntar').onclick = () => {
  if (!backupPendente) return;
  const iN = (backupPendente.itens || []).map(i => ({ ...i, id: Date.now() + Math.random().toString(36).slice(2,7) }));
  itens = itens.concat(iN);
  const vN = (backupPendente.veiculos || []).map(v => ({ ...v, id: Date.now() + Math.random().toString(36).slice(2,7) }));
  veiculos = veiculos.concat(vN);
  const iT = tiposPonto.map(t => t.id);
  const tN = (backupPendente.tiposPonto || []).filter(t => !iT.includes(t.id));
  tiposPonto = tiposPonto.concat(tN);
  const mN = (backupPendente.marcadoresMapa || []).map(m => ({ ...m, id: Date.now() + Math.random().toString(36).slice(2,7) }));
  marcadoresMapa = marcadoresMapa.concat(mN);
  tN.forEach(t => { if (!tiposVisiveis.includes(t.id)) tiposVisiveis.push(t.id); });
  salvarStorage();
  localStorage.setItem('marcadores_mapa', JSON.stringify(marcadoresMapa));
  localStorage.setItem('tipos_visiveis_rp', JSON.stringify(tiposVisiveis));
  if (map) { mN.forEach(m => desenharMarcador(m)); atualizarLegenda(); }
  backupPendente = null; document.getElementById('modalImportar').classList.add('escondido');
  alert('✅ Juntado!'); render();
};

document.getElementById('btnImportCancelar').onclick = () => {
  backupPendente = null; document.getElementById('modalImportar').classList.add('escondido');
};
document.getElementById('modalImportar').onclick = (e) => {
  if (e.target.id === 'modalImportar') { backupPendente = null; document.getElementById('modalImportar').classList.add('escondido'); }
};

function resetarTudo() {
  if (prompt('Digite "APAGAR" pra confirmar:') !== 'APAGAR') return;
  localStorage.clear(); location.reload();
}

// ===== MAPA =====
let map = null;
let camadaMapa = null;
let estiloAtual = 'styleAtlas';
let marcadoresMapa = JSON.parse(localStorage.getItem('marcadores_mapa') || '[]');
let modoAdicionar = false;
let marcadorTempLatLng = null;
let marcadoresLeaflet = [];

const ESTILOS_MAPA = ['styleAtlas', 'styleGrid'];
const CAMINHOS_MAPA = { styleAtlas: 'mapStyles/styleAtlas/map.png', styleGrid: 'mapStyles/styleGrid/map.png' };
let MAP_BOUNDS = [[0, 0], [-2000, 2000]];

document.getElementById('btnFecharMapa').onclick = () => {
  document.getElementById('mapa-container').classList.remove('ativo');
  modoAdicionar = false;
  document.getElementById('btnModoAdd').textContent = '📍 Marcar Local';
  document.getElementById('btnModoAdd').classList.remove('perigo');
  document.getElementById('buscaResultados').classList.add('escondido');
};

document.getElementById('btnModoAdd').onclick = () => {
  if (isCliente() && clienteJaTemCasa()) { alert('❌ Você já tem uma casa cadastrada!'); return; }
  modoAdicionar = !modoAdicionar;
  document.getElementById('btnModoAdd').textContent = modoAdicionar ? '❌ Cancelar' : '📍 Marcar Local';
  document.getElementById('btnModoAdd').classList.toggle('perigo', modoAdicionar);
  if (modoAdicionar) alert('Clique no mapa!');
};

document.getElementById('btnTrocarEstilo').onclick = () => {
  const i = ESTILOS_MAPA.indexOf(estiloAtual);
  estiloAtual = ESTILOS_MAPA[(i + 1) % ESTILOS_MAPA.length];
  if (map && camadaMapa) { map.removeLayer(camadaMapa); camadaMapa = L.imageOverlay(CAMINHOS_MAPA[estiloAtual], MAP_BOUNDS).addTo(map); }
};

document.getElementById('btnToggleCor').onclick = () => {
  const novo = (localStorage.getItem('cor_marcadores') === 'com-cor') ? 'sem-cor' : 'com-cor';
  localStorage.setItem('cor_marcadores', novo);
  if (map) { marcadoresLeaflet.forEach(x => map.removeLayer(x.marker)); marcadoresLeaflet = []; marcadoresMapa.forEach(m => desenharMarcador(m)); }
  document.getElementById('btnToggleCor').textContent = novo === 'com-cor' ? '🎨 Marcadores' : '✨ Só Emoji';
};

function abrirMapa() {
  const btnTipos = document.getElementById('btnGerenciarTipos');
  if (btnTipos) btnTipos.style.display = isAdmin() ? '' : 'none';

  document.getElementById('mapa-container').classList.add('ativo');

  if (!map) {
    map = L.map('mapa', { crs: L.CRS.Simple, minZoom: -2, maxZoom: 3, attributionControl: false, zoomSnap: 0.25, maxBounds: MAP_BOUNDS, maxBoundsViscosity: 1.0 });
    camadaMapa = L.imageOverlay(CAMINHOS_MAPA[estiloAtual], MAP_BOUNDS).addTo(map);
    map.fitBounds(MAP_BOUNDS);
    marcadoresMapa.forEach(m => desenharMarcador(m));
    map.on('click', (e) => { if (modoAdicionar) { marcadorTempLatLng = e.latlng; abrirModalMarcador(); } });
  }

  const cAt = localStorage.getItem('cor_marcadores') || 'com-cor';
  document.getElementById('btnToggleCor').textContent = cAt === 'com-cor' ? '🎨 Marcadores' : '✨ Só Emoji';
  atualizarLegenda();

  setTimeout(() => {
    if (map) {
      map.invalidateSize();
      if (marcadoresLeaflet.length > 0) {
        const vis = marcadoresLeaflet.filter(m => tiposVisiveis.includes(m.tipoId));
        if (vis.length > 0) { map.fitBounds(L.featureGroup(vis.map(m => m.marker)).getBounds().pad(0.3)); }
      }
    }
  }, 150);
}

function desenharMarcador(m) {
  if (isCliente()) {
    const uid = uidAtual();
    if (m.criadoPorTipo !== 'admin' && m.criadoPor !== uid) return;
  }

  const tipo = tiposPonto.find(t => t.id === m.tipoId) || tiposPonto[0];
  const visivel = tiposVisiveis.includes(m.tipoId);
  const semCor = localStorage.getItem('cor_marcadores') === 'sem-cor';

  const icon = L.divIcon({
    className: 'marcador-custom',
    html: `<div class="marcador-ponto ${semCor ? 'sem-cor' : ''}" style="${semCor ? '' : 'background:' + tipo.cor + ';'}">${tipo.emoji}</div>`,
    iconSize: [32, 32], iconAnchor: [16, 16], popupAnchor: [0, -16],
  });

  const marker = L.marker([m.lat, m.lng], { icon });
  const tTxt = m.numeroFac ? `${tipo.emoji} ${tipo.nome} ${m.numeroFac}` : `${tipo.emoji} ${tipo.nome}`;

  let d = '';
  if (m.foto) d += `<img src="${m.foto}" class="popup-foto" />`;
  if (m.producao) d += `<div class="popup-producao">🎯 Produção: ${m.producao}</div>`;
  if (m.numero) d += `<div class="popup-linha">📞 ${m.numero}</div>`;
  if (m.dono) d += `<div class="popup-linha">👤 ${m.dono}</div>`;
  if (m.descricao) d += `<div class="popup-desc">📝 ${m.descricao}</div>`;

  const eD = m.criadoPor === uidAtual();
  const pE = isAdmin() || eD;

  marker.bindPopup(`
    <div class="popup-ponto">
      <strong>${m.nome}</strong><div class="tipo">${tTxt}</div>${d}
      ${m.refId ? `<button onclick="abrirBauDoMapa('${m.refId}', '${m.bau}')">📦 Abrir Baú</button>` : ''}
      ${pE ? `<button onclick="editarMarcador('${m.id}')">✏️ Editar</button>` : ''}
      ${pE ? `<button class="perigo" onclick="removerMarcador('${m.id}')">🗑️ Excluir</button>` : ''}
    </div>
  `);

  if (visivel) marker.addTo(map);
  marcadoresLeaflet.push({ id: m.id, marker, tipoId: m.tipoId });
}

function editarMarcador(id) {
  const m = marcadoresMapa.find(x => x.id === id);
  if (!m) return;
  if (isCliente() && m.criadoPor !== uidAtual()) { alert('❌ Sem permissão.'); return; }
  if (map) map.closePopup();
  abrirModalMarcador(m);
}

function atualizarLegenda() {
  const lista = document.getElementById('legenda-lista');
  lista.innerHTML = '';
  const grupos = {};
  tiposPonto.forEach(t => { const c = t.categoria || 'Outros'; if (!grupos[c]) grupos[c] = []; grupos[c].push(t); });
  Object.keys(grupos).sort().forEach(cat => {
    const g = document.createElement('div'); g.className = 'cat-grupo';
    const ti = document.createElement('div'); ti.className = 'cat-titulo-leg'; ti.textContent = cat; g.appendChild(ti);
    grupos[cat].forEach(t => {
      const cnt = marcadoresMapa.filter(m => m.tipoId === t.id).length;
      const it = document.createElement('label'); it.className = 'legenda-item';
      it.innerHTML = `<input type="checkbox" ${tiposVisiveis.includes(t.id) ? 'checked' : ''} data-tipo="${t.id}" /><span class="emoji">${t.emoji}</span><span class="cor" style="background:${t.cor};"></span><span class="nome">${t.nome}</span><span class="count">${cnt}</span>`;
      it.querySelector('input').onchange = (e) => toggleTipoVisivel(t.id, e.target.checked);
      g.appendChild(it);
    });
    lista.appendChild(g);
  });
}

function toggleTipoVisivel(tipoId, visivel) {
  if (visivel) { if (!tiposVisiveis.includes(tipoId)) tiposVisiveis.push(tipoId); }
  else { tiposVisiveis = tiposVisiveis.filter(id => id !== tipoId); }
  localStorage.setItem('tipos_visiveis_rp', JSON.stringify(tiposVisiveis));
  marcadoresLeaflet.forEach(m => { if (tiposVisiveis.includes(m.tipoId)) { if (!map.hasLayer(m.marker)) m.marker.addTo(map); } else { if (map.hasLayer(m.marker)) map.removeLayer(m.marker); } });
}

document.getElementById('btnMarcarTodos').onclick = () => { tiposVisiveis = tiposPonto.map(t => t.id); localStorage.setItem('tipos_visiveis_rp', JSON.stringify(tiposVisiveis)); atualizarLegenda(); marcadoresLeaflet.forEach(m => { if (!map.hasLayer(m.marker)) m.marker.addTo(map); }); };
document.getElementById('btnDesmarcarTodos').onclick = () => { tiposVisiveis = []; localStorage.setItem('tipos_visiveis_rp', JSON.stringify(tiposVisiveis)); atualizarLegenda(); marcadoresLeaflet.forEach(m => { if (map.hasLayer(m.marker)) map.removeLayer(m.marker); }); };

// ===== BUSCA NO MAPA =====
const buscaMapaEl = document.getElementById('buscaMapa');
const buscaResultadosEl = document.getElementById('buscaResultados');

buscaMapaEl.oninput = () => {
  const t = buscaMapaEl.value.trim().toLowerCase();
  if (!t) { buscaResultadosEl.classList.add('escondido'); return; }
  const res = marcadoresMapa.filter(m => {
    if (isCliente()) { const u = uidAtual(); if (m.criadoPorTipo !== 'admin' && m.criadoPor !== u) return false; }
    const tp = tiposPonto.find(x => x.id === m.tipoId); const nT = tp ? tp.nome : '';
    return m.nome.toLowerCase().includes(t) || (m.dono || '').toLowerCase().includes(t) || (m.descricao || '').toLowerCase().includes(t) || (m.numero || '').toLowerCase().includes(t) || (m.numeroFac || '').toLowerCase().includes(t) || (m.producao || '').toLowerCase().includes(t) || nT.toLowerCase().includes(t);
  });
  buscaResultadosEl.innerHTML = ''; buscaResultadosEl.classList.remove('escondido');
  if (!res.length) { buscaResultadosEl.innerHTML = '<div class="sem-resultado">Nenhum ponto encontrado 🔍</div>'; return; }
  res.slice(0, 20).forEach(m => {
    const tp = tiposPonto.find(x => x.id === m.tipoId) || { emoji:'📍', nome:'', cor:'#4a7dff' };
    const it = document.createElement('div'); it.className = 'resultado-item';
    let s = tp.nome; if (m.numeroFac) s += ` • Nº ${m.numeroFac}`; if (m.producao) s += ` • ${m.producao}`; if (m.dono) s += ` • ${m.dono}`;
    it.innerHTML = `<span class="emoji">${tp.emoji}</span><div class="info-res"><strong>${m.nome}</strong><span>${s}</span></div>`;
    it.onclick = () => irParaMarcador(m.id); buscaResultadosEl.appendChild(it);
  });
};

function irParaMarcador(id) {
  const m = marcadoresMapa.find(x => x.id === id); if (!m || !map) return;
  if (!tiposVisiveis.includes(m.tipoId)) { tiposVisiveis.push(m.tipoId); localStorage.setItem('tipos_visiveis_rp', JSON.stringify(tiposVisiveis)); atualizarLegenda(); const e = marcadoresLeaflet.find(x => x.id === m.id); if (e && !map.hasLayer(e.marker)) e.marker.addTo(map); }
  map.setView([m.lat, m.lng], 1, { animate: true });
  setTimeout(() => { const e = marcadoresLeaflet.find(x => x.id === m.id); if (e) e.marker.openPopup(); }, 400);
  buscaResultadosEl.classList.add('escondido'); buscaMapaEl.value = '';
}

document.addEventListener('click', (e) => { if (!e.target.closest('#mapa-busca')) buscaResultadosEl.classList.add('escondido'); });

// ===== MODAL MARCADOR =====
function abrirModalMarcador(mEditar = null) {
  editandoMarcId = mEditar ? mEditar.id : null;
  fotoMarcTemp = mEditar ? (mEditar.foto || null) : null;
  document.getElementById('modalMarcadorTitulo').textContent = mEditar ? 'Editar ponto' : 'Novo ponto no mapa';
  document.getElementById('marcNome').value = mEditar ? mEditar.nome : '';
  document.getElementById('marcNumeroFac').value = mEditar ? (mEditar.numeroFac || '') : '';
  document.getElementById('marcProducao').value = mEditar ? (mEditar.producao || '') : '';
  document.getElementById('marcNumero').value = mEditar ? (mEditar.numero || '') : '';
  document.getElementById('marcDono').value = mEditar ? (mEditar.dono || '') : '';
  document.getElementById('marcDesc').value = mEditar ? (mEditar.descricao || '') : '';
  document.getElementById('marcFoto').value = '';
  const pv = document.getElementById('previewMarc'); pv.innerHTML = mEditar && mEditar.foto ? `<img src="${mEditar.foto}" style="max-width:100px;border-radius:8px;" />` : '';
  const sT = document.getElementById('marcTipo'); sT.innerHTML = '';
  if (isCliente()) { sT.innerHTML = `<option value="casa">🏠 Casa</option>`; if (mEditar) sT.value = mEditar.tipoId; }
  else { tiposPonto.forEach(t => { sT.innerHTML += `<option value="${t.id}">${t.emoji} ${t.nome}</option>`; }); if (mEditar) sT.value = mEditar.tipoId; }
  const sR = document.getElementById('marcRef'); sR.innerHTML = '<option value="">— Nenhum —</option><option value="casa|bau">🏠 Casa</option><option value="moto|bau">🏍️ Moto</option>';
  veiculos.forEach(v => { sR.innerHTML += `<option value="${v.id}|veiculo">${iconeTipo(v.tipo)} ${v.nome}</option>`; });
  if (mEditar && mEditar.refId) { sR.value = mEditar.tipo === 'veiculo' ? `${mEditar.refId}|veiculo` : `${mEditar.refId}|bau`; }
  document.getElementById('modalMarcador').classList.remove('escondido');
}

function fecharModalMarcador() { document.getElementById('modalMarcador').classList.add('escondido'); marcadorTempLatLng = null; editandoMarcId = null; fotoMarcTemp = null; }

function salvarMarcador() {
  const nome = document.getElementById('marcNome').value.trim(); if (!nome) { alert('Digite o nome do local!'); return; }
  if (isCliente() && !editandoMarcId && clienteJaTemCasa()) { alert('❌ Você já tem uma casa.'); fecharModalMarcador(); return; }
  const tipoId = document.getElementById('marcTipo').value;
  const numeroFac = document.getElementById('marcNumeroFac').value.trim();
  const producao = document.getElementById('marcProducao').value;
  const numero = document.getElementById('marcNumero').value.trim();
  const dono = document.getElementById('marcDono').value.trim();
  const descricao = document.getElementById('marcDesc').value.trim();
  const ref = document.getElementById('marcRef').value;
  const p = ref ? ref.split('|') : ['', 'bau'];
  const refId = p[0]; const tipoBau = p[1] === 'veiculo' ? 'veiculo' : 'bau';

  if (editandoMarcId) {
    const m = marcadoresMapa.find(x => x.id === editandoMarcId);
    if (isCliente() && m.criadoPor !== uidAtual()) { alert('❌ Sem permissão.'); return; }
    Object.assign(m, { nome, tipoId, numeroFac, producao, numero, dono, descricao, foto: fotoMarcTemp, refId, bau: refId, tipo: tipoBau });
    const i = marcadoresLeaflet.findIndex(x => x.id === editandoMarcId); if (i >= 0) { map.removeLayer(marcadoresLeaflet[i].marker); marcadoresLeaflet.splice(i, 1); }
    desenharMarcador(m);
  } else {
    if (!marcadorTempLatLng) { fecharModalMarcador(); return; }
    const n = { id: Date.now().toString(), nome, tipoId, numeroFac, producao, numero, dono, descricao, foto: fotoMarcTemp, lat: marcadorTempLatLng.lat, lng: marcadorTempLatLng.lng, refId, bau: refId, tipo: tipoBau, criadoPor: uidAtual(), criadoPorTipo: window.tipoUsuario };
    marcadoresMapa.push(n); desenharMarcador(n);
  }
  localStorage.setItem('marcadores_mapa', JSON.stringify(marcadoresMapa));
  modoAdicionar = false; document.getElementById('btnModoAdd').textContent = '📍 Marcar Local'; document.getElementById('btnModoAdd').classList.remove('perigo');
  fecharModalMarcador(); atualizarLegenda(); montarAbas();
}

function removerMarcador(id) {
  const m = marcadoresMapa.find(x => x.id === id); if (!m) return;
  if (isCliente() && m.criadoPor !== uidAtual()) { alert('❌ Sem permissão.'); return; }
  if (!confirm('Excluir este ponto?')) return;
  marcadoresMapa = marcadoresMapa.filter(x => x.id !== id);
  localStorage.setItem('marcadores_mapa', JSON.stringify(marcadoresMapa));
  const i = marcadoresLeaflet.findIndex(x => x.id === id); if (i >= 0) { map.removeLayer(marcadoresLeaflet[i].marker); marcadoresLeaflet.splice(i, 1); }
  atualizarLegenda(); montarAbas();
}

function abrirBauDoMapa(refId, bau) {
  document.getElementById('mapa-container').classList.remove('ativo');
  if (bau === 'casa' || bau === 'moto') { abaAtual = bau; veiculoAberto = null; }
  else { abaAtual = 'garagem'; veiculoAberto = refId; }
  montarAbas(); render();
}

// ===== GERENCIAR TIPOS (só admin) =====
document.getElementById('btnGerenciarTipos').onclick = () => { if (!isAdmin()) return; renderListaTipos(); document.getElementById('modalGerenciarTipos').classList.remove('escondido'); };
document.getElementById('btnFecharGerenciar').onclick = () => { document.getElementById('modalGerenciarTipos').classList.add('escondido'); };
document.getElementById('btnNovoTipo').onclick = () => { if (!isAdmin()) return; editandoTipoId = null; document.getElementById('modalTipoTitulo').textContent = 'Novo tipo de ponto'; document.getElementById('tipoNome').value = ''; document.getElementById('tipoEmoji').value = ''; document.getElementById('tipoCor').value = '#4a7dff'; document.getElementById('tipoCategoria').value = ''; document.getElementById('modalTipo').classList.remove('escondido'); };

function renderListaTipos() {
  const l = document.getElementById('listaTipos'); l.innerHTML = '';
  tiposPonto.forEach(t => {
    const it = document.createElement('div'); it.className = 'tipo-item';
    it.innerHTML = `<span class="emoji">${t.emoji}</span><span class="cor" style="background:${t.cor};"></span><div class="info"><strong>${t.nome}</strong><span>${t.categoria || 'Sem categoria'}</span></div><button data-acao="editar" title="Editar">✏️</button><button data-acao="excluir" title="Excluir">🗑️</button>`;
    it.querySelector('[data-acao="editar"]').onclick = () => { editandoTipoId = t.id; document.getElementById('modalTipoTitulo').textContent = 'Editar tipo'; document.getElementById('tipoNome').value = t.nome; document.getElementById('tipoEmoji').value = t.emoji; document.getElementById('tipoCor').value = t.cor; document.getElementById('tipoCategoria').value = t.categoria || ''; document.getElementById('modalTipo').classList.remove('escondido'); };
    it.querySelector('[data-acao="excluir"]').onclick = () => { if (!confirm(`Excluir o tipo "${t.nome}"?`)) return; tiposPonto = tiposPonto.filter(x => x.id !== t.id); marcadoresMapa = marcadoresMapa.filter(m => m.tipoId !== t.id); tiposVisiveis = tiposVisiveis.filter(id => id !== t.id); salvarStorage(); localStorage.setItem('marcadores_mapa', JSON.stringify(marcadoresMapa)); localStorage.setItem('tipos_visiveis_rp', JSON.stringify(tiposVisiveis)); renderListaTipos(); atualizarLegenda(); };
    l.appendChild(it);
  });
}

document.getElementById('btnCancelarTipo').onclick = () => { document.getElementById('modalTipo').classList.add('escondido'); };
document.getElementById('btnSalvarTipo').onclick = () => {
  if (!isAdmin()) return;
  const n = document.getElementById('tipoNome').value.trim(); const e = document.getElementById('tipoEmoji').value.trim() || '📍'; const c = document.getElementById('tipoCor').value; const cat = document.getElementById('tipoCategoria').value.trim() || 'Outros';
  if (!n) { alert('Digite o nome!'); return; }
  if (editandoTipoId) { const t = tiposPonto.find(x => x.id === editandoTipoId); Object.assign(t, { nome: n, emoji: e, cor: c, categoria: cat }); }
  else { const id = 'tipo_' + Date.now(); tiposPonto.push({ id, nome: n, emoji: e, cor: c, categoria: cat }); tiposVisiveis.push(id); localStorage.setItem('tipos_visiveis_rp', JSON.stringify(tiposVisiveis)); }
  salvarStorage(); document.getElementById('modalTipo').classList.add('escondido'); renderListaTipos();
};

// ===== EVENTOS GERAIS =====
document.getElementById('btnCancelar').onclick = fecharModal;
document.getElementById('btnVoltar').onclick = voltarEscolha;
document.getElementById('btnSalvar').onclick = salvar;
document.getElementById('buscaItem').oninput = (e) => montarListaEscolha(e.target.value);
document.getElementById('btnCancelarVeic').onclick = fecharModalVeiculo;
document.getElementById('btnSalvarVeic').onclick = salvarVeiculo;
document.getElementById('btnCancelarCap').onclick = fecharModalCap;
document.getElementById('btnSalvarCap').onclick = salvarCap;
document.getElementById('btnCancelarMarc').onclick = fecharModalMarcador;
document.getElementById('btnSalvarMarc').onclick = salvarMarcador;
document.getElementById('itemFoto').onchange = (e) => { const f = e.target.files[0]; if (!f) return; const r = new FileReader(); r.onload = (ev) => { fotoTemp = ev.target.result; document.getElementById('preview').innerHTML = `<img src="${fotoTemp}"/>`; }; r.readAsDataURL(f); };
document.getElementById('marcFoto').onchange = (e) => { const f = e.target.files[0]; if (!f) return; const r = new FileReader(); r.onload = (ev) => { fotoMarcTemp = ev.target.result; document.getElementById('previewMarc').innerHTML = `<img src="${fotoMarcTemp}" style="max-width:100px;border-radius:8px;" />`; }; r.readAsDataURL(f); };
document.getElementById('modal').onclick = (e) => { if (e.target.id === 'modal') fecharModal(); };
document.getElementById('modalVeiculo').onclick = (e) => { if (e.target.id === 'modalVeiculo') fecharModalVeiculo(); };
document.getElementById('modalCap').onclick = (e) => { if (e.target.id === 'modalCap') fecharModalCap(); };
document.getElementById('modalMarcador').onclick = (e) => { if (e.target.id === 'modalMarcador') fecharModalMarcador(); };
document.getElementById('modalTipo').onclick = (e) => { if (e.target.id === 'modalTipo') document.getElementById('modalTipo').classList.add('escondido'); };
document.getElementById('modalGerenciarTipos').onclick = (e) => { if (e.target.id === 'modalGerenciarTipos') document.getElementById('modalGerenciarTipos').classList.add('escondido'); };

// ===== SONS =====
const musicaFundo = new Audio('sounds/menu.mp3'); musicaFundo.loop = true;
const somClick = new Audio('sounds/click.mp3');
let somLigado = localStorage.getItem('som_ligado') !== 'off';
let musicaIniciada = false;
let volumeMusica = parseFloat(localStorage.getItem('volume_musica') || '0.06');
let volumeClick = parseFloat(localStorage.getItem('volume_click') || '0.04');
musicaFundo.volume = volumeMusica; somClick.volume = volumeClick;

function atualizarBotaoSom() { const b = document.getElementById('btnSom'); if (!b) return; if (somLigado && volumeMusica > 0) { b.textContent = '🔊'; b.classList.remove('mutado'); } else { b.textContent = '🔇'; b.classList.add('mutado'); } }
function tocarClick() { if (!somLigado || volumeClick <= 0) return; try { somClick.currentTime = 0; somClick.play().catch(e => {}); } catch (e) {} }
function iniciarMusica() { if (!somLigado || volumeMusica <= 0) return; if (musicaIniciada) return; if (musicaFundo.paused === false) { musicaIniciada = true; return; } musicaFundo.volume = 0; musicaFundo.play().then(() => { musicaIniciada = true; let v = 0; const a = volumeMusica; const i = setInterval(() => { if (v < a) { v += 0.01; musicaFundo.volume = Math.min(v, a); } else { clearInterval(i); } }, 80); }).catch(e => {}); }

document.getElementById('btnSom').onclick = () => { if (somLigado && musicaFundo.volume > 0 && !musicaFundo.paused) { musicaFundo.pause(); musicaIniciada = false; atualizarBotaoSom(); } else { somLigado = true; localStorage.setItem('som_ligado', 'on'); iniciarMusica(); atualizarBotaoSom(); } };
document.addEventListener('click', (e) => { if (somLigado && !musicaIniciada && volumeMusica > 0) iniciarMusica(); if (e.target.closest('button') || e.target.closest('.card-item') || e.target.closest('.card-veiculo') || e.target.closest('.item-opcao') || e.target.closest('.legenda-item')) tocarClick(); });
atualizarBotaoSom();

const _renderConfiguracoesOriginal = renderConfiguracoes;
renderConfiguracoes = function() {
  _renderConfiguracoesOriginal();
  const sS = document.createElement('div'); sS.className = 'config-secao';
  sS.innerHTML = `
    <h2>🔊 Sons</h2><p>Ajuste o volume.</p>
    <div class="volume-titulo"><strong>🎵 Música</strong><span class="volume-valor" id="volMusicaValor">${Math.round(volumeMusica * 100)}%</span></div>
    <div class="volume-control"><button class="volume-btn" id="volMusicaMinus">−</button><input type="range" id="volMusicaRange" min="0" max="100" value="${Math.round(volumeMusica * 100)}" /><button class="volume-btn" id="volMusicaPlus">+</button></div>
    <div class="volume-titulo"><strong>🔘 Clique</strong><span class="volume-valor" id="volClickValor">${Math.round(volumeClick * 100)}%</span></div>
    <div class="volume-control"><button class="volume-btn" id="volClickMinus">−</button><input type="range" id="volClickRange" min="0" max="100" value="${Math.round(volumeClick * 100)}" /><button class="volume-btn" id="volClickPlus">+</button></div>
    <div class="mutar-container"><button class="mutar-btn ${(!somLigado || volumeMusica <= 0) ? 'mutado' : ''}" id="btnMutarTudo">${(!somLigado || volumeMusica <= 0) ? '🔇 Música Mutada' : '🔊 Mutar Música'}</button></div>
  `;
  conteudoEl.appendChild(sS);
  function sVM(v) { v = Math.max(0, Math.min(100, v)); volumeMusica = v / 100; localStorage.setItem('volume_musica', volumeMusica); document.getElementById('volMusicaRange').value = v; document.getElementById('volMusicaValor').textContent = v + '%'; musicaFundo.volume = volumeMusica; if (volumeMusica === 0) { musicaFundo.pause(); musicaIniciada = false; } atualizarBotaoSom(); aBM(); }
  function sVC(v) { v = Math.max(0, Math.min(100, v)); volumeClick = v / 100; localStorage.setItem('volume_click', volumeClick); document.getElementById('volClickRange').value = v; document.getElementById('volClickValor').textContent = v + '%'; somClick.volume = volumeClick; }
  function aBM() { const b = document.getElementById('btnMutarTudo'); if (!b) return; if (!somLigado || volumeMusica <= 0) { b.textContent = '🔇 Música Mutada'; b.classList.add('mutado'); } else { b.textContent = '🔊 Mutar Música'; b.classList.remove('mutado'); } }
  document.getElementById('volMusicaRange').oninput = (e) => sVM(parseInt(e.target.value));
  document.getElementById('volClickRange').oninput = (e) => sVC(parseInt(e.target.value));
  document.getElementById('volMusicaPlus').onclick = () => sVM(Math.round(volumeMusica * 100) + 5);
  document.getElementById('volMusicaMinus').onclick = () => sVM(Math.round(volumeMusica * 100) - 5);
  document.getElementById('volClickPlus').onclick = () => sVC(Math.round(volumeClick * 100) + 5);
  document.getElementById('volClickMinus').onclick = () => sVC(Math.round(volumeClick * 100) - 5);
  document.getElementById('btnMutarTudo').onclick = () => { if (somLigado && musicaFundo.volume > 0 && !musicaFundo.paused) { somLigado = false; localStorage.setItem('som_ligado', 'off'); musicaFundo.pause(); musicaIniciada = false; } else { somLigado = true; localStorage.setItem('som_ligado', 'on'); if (volumeMusica <= 0) sVM(25); else iniciarMusica(); } atualizarBotaoSom(); aBM(); };
};

document.addEventListener('DOMContentLoaded', () => { const a = document.getElementById('appPrincipal'); const l = document.getElementById('telaLogin'); if (a) a.classList.add('escondido'); if (l) l.classList.remove('escondido'); });