// ===== BASE DE ITENS =====
const BASE_ITENS = [
  { nome:'Celular', cat:'outros', peso:0.50, emoji:'📱' },
  { nome:'Rádio', cat:'outros', peso:1.50, emoji:'📻' },
  { nome:'Mochila', cat:'outros', peso:0, emoji:'🎒' },
  { nome:'Laço', cat:'ferramentas', peso:1.50, emoji:'🪢' },
  { nome:'Máscara', cat:'ferramentas', peso:1.50, emoji:'😷' },
  { nome:'Roupas', cat:'ferramentas', peso:0.50, emoji:'👕' },
  { nome:'Kit de Reparo', cat:'ferramentas', peso:2.50, emoji:'🧰' },
  { nome:'Algema', cat:'ferramentas', peso:3.50, emoji:'⛓️' },
  { nome:'Rastreador de Veículo', cat:'ferramentas', peso:0.25, emoji:'📡' },
  { nome:'Masterpick', cat:'ferramentas', peso:1.50, emoji:'🔓' },
  { nome:'Placa', cat:'ferramentas', peso:2, emoji:'🪧' },
  { nome:'Seringa Reanimadora', cat:'remedios', peso:5, emoji:'💉' },
  { nome:'Bandagem', cat:'remedios', peso:0.50, emoji:'🩹' },
  { nome:'Munição de Pistola', cat:'municao', peso:0.01, emoji:'💥' },
  { nome:'Munição de SMG', cat:'municao', peso:0.02, emoji:'💥' },
  { nome:'Munição de Rifle', cat:'municao', peso:0.03, emoji:'💥' },
  { nome:'PT Five Seven', cat:'armas', peso:5, emoji:'🔫' },
  { nome:'Parafall', cat:'armas', peso:10, emoji:'🔫' },
  { nome:'Tec-9', cat:'armas', peso:8, emoji:'🔫' },
  { nome:'Soco Inglês', cat:'armas', peso:5, emoji:'🥊' },
  { nome:'M9A3', cat:'armas', peso:5, emoji:'🔫' },
  { nome:'Fuzil Militar', cat:'armas', peso:10, emoji:'🔫' },
  { nome:'Glock Rajada', cat:'armas', peso:5, emoji:'🔫' },
  { nome:'M4A1 MK2', cat:'armas', peso:10, emoji:'🔫' },
  { nome:'Faca', cat:'armas', peso:5, emoji:'🔪' },
  { nome:'Taco de Baseball', cat:'armas', peso:5, emoji:'🏏' },
  { nome:'Dinheiro Sujo', cat:'dinheiro', peso:0, emoji:'💰' },
];

const CATEGORIAS = [
  { id:'armas', nome:'🔫 Armas' },
  { id:'municao', nome:'💥 Munição' },
  { id:'drogas', nome:'💊 Drogas' },
  { id:'ferramentas', nome:'🔧 Ferramentas' },
  { id:'remedios', nome:'💉 Remédios' },
  { id:'dinheiro', nome:'💰 Dinheiro' },
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

// ===== ELEMENTOS =====
const abasEl = document.getElementById('abas');
const conteudoEl = document.getElementById('conteudo');
const resumoEl = document.getElementById('resumo');

// ===== INIT =====
function init() {
  montarAbas();
  montarCategorias();
  carregarTema();
  render();
}

// ===== TEMA (3 opções) =====
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
  const proximo = TEMAS[(i + 1) % TEMAS.length];
  aplicarTema(proximo);
}

document.getElementById('btnTema').onclick = proximoTema;

// ===== ABAS =====
function montarAbas() {
  abasEl.innerHTML = '';
  BAUS_FIXOS.forEach(b => {
    const btn = document.createElement('button');
    btn.textContent = b.nome;
    btn.classList.toggle('ativo', abaAtual === b.id);
    btn.onclick = () => { abaAtual = b.id; veiculoAberto = null; montarAbas(); render(); };
    abasEl.appendChild(btn);
  });
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
  if (abaAtual === 'config') {
    renderConfiguracoes();
  } else if (abaAtual === 'garagem') {
    if (veiculoAberto) renderBauVeiculo();
    else renderGaragem();
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

// ===== BAÚ FIXO =====
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
  if (!arr.length) { lista.innerHTML = '<div class="vazio">Nenhum item aqui ainda.<br>Clique em ➕ Novo item.</div>'; return; }
  arr.forEach(i => lista.appendChild(criarCardItem(i)));
}

// ===== GARAGEM =====
function renderGaragem() {
  const barra = document.createElement('div');
  barra.className = 'barra';
  barra.innerHTML = `<button id="btnNovoVeic" style="flex:1">➕ Novo veículo</button>`;
  conteudoEl.appendChild(barra);
  barra.querySelector('#btnNovoVeic').onclick = () => abrirModalVeiculo();

  const lista = document.createElement('main');
  conteudoEl.appendChild(lista);

  if (!veiculos.length) {
    lista.innerHTML = '<div class="vazio">Nenhum veículo cadastrado.<br>Clique em ➕ Novo veículo.</div>';
    return;
  }

  veiculos.forEach(v => {
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
  if (!arr.length) { lista.innerHTML = '<div class="vazio">Nenhum item aqui ainda.<br>Clique em ➕ Novo item.</div>'; return; }
  arr.forEach(i => lista.appendChild(criarCardItem(i)));
}

// ===== HELPERS =====
function iconeTipo(t) { return {carro:'🚗',moto:'🏍️',helicoptero:'🚁',aviao:'✈️',barco:'🚤',outro:'📦'}[t] || '🚗'; }

function criarCardItem(item) {
  const card = document.createElement('div');
  card.className = 'card-item';
  const cat = CATEGORIAS.find(c => c.id === item.categoria);
  const pesoItem = (Number(item.qtd) * Number(item.peso || 0)).toFixed(2);
  card.innerHTML = `
    <div class="icone">${item.foto?`<img src="${item.foto}"/>`:(item.emoji||'📦')}</div>
    <div class="info">
      <h3>${item.nome}</h3>
      <span>${cat?cat.nome:'Sem categoria'} • ${pesoItem} kg</span>
    </div>
    <div class="qtd">x${item.qtd}</div>
    <div class="acoes">
      <button data-acao="editar">✏️</button>
      <button data-acao="excluir">🗑️</button>
    </div>
  `;
  card.querySelector('[data-acao="editar"]').onclick = () => abrirModal(item);
  card.querySelector('[data-acao="excluir"]').onclick = () => excluir(item.id);
  return card;
}

// ===== MODAL ITEM =====
function abrirModal(item=null) {
  editandoId = item ? item.id : null;
  fotoTemp = item ? item.foto : null;
  itemBaseSelecionado = null;

  document.getElementById('modalTitulo').textContent = item ? 'Editar item' : 'Novo item';
  document.getElementById('telaEscolha').style.display = item ? 'none' : 'block';
  document.getElementById('telaForm').style.display = item ? 'block' : 'none';
  document.getElementById('btnVoltar').style.display = item ? 'none' : 'block';

  if (item) {
    document.getElementById('itemNome').value = item.nome;
    document.getElementById('itemQtd').value = item.qtd;
    document.getElementById('itemCategoria').value = item.categoria;
    document.getElementById('itemPeso').value = item.peso || 0;
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

  const pers = document.createElement('div');
  pers.className = 'item-opcao personalizado';
  pers.innerHTML = `<span>➕ Item personalizado</span>`;
  pers.onclick = () => escolherItemBase(null);
  lista.appendChild(pers);
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
    document.getElementById('itemEmoji').value = it.emoji || '';
  } else {
    document.getElementById('itemNome').value = '';
    document.getElementById('itemCategoria').value = 'outros';
    document.getElementById('itemPeso').value = 0;
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
  const nome = document.getElementById('itemNome').value.trim();
  const qtd = parseInt(document.getElementById('itemQtd').value) || 1;
  const cat = document.getElementById('itemCategoria').value;
  const peso = parseFloat(document.getElementById('itemPeso').value) || 0;
  const emoji = document.getElementById('itemEmoji').value.trim();

  if (!nome) { alert('Digite o nome do item!'); return; }

  if (editandoId) {
    const it = itens.find(i => i.id === editandoId);
    Object.assign(it, { nome, qtd, categoria:cat, peso, emoji, foto:fotoTemp });
  } else {
    const novo = {
      id: Date.now().toString(),
      nome, qtd, categoria:cat, peso, emoji,
      foto: fotoTemp,
      bau: veiculoAberto ? null : abaAtual,
      veiculoId: veiculoAberto || null,
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
    Object.assign(v, { nome, tipo, vaga, capacidade:cap });
  } else {
    veiculos.push({ id: Date.now().toString(), nome, tipo, vaga, capacidade:cap });
  }
  salvarStorage();
  fecharModalVeiculo();
  render();
}

function excluirVeiculo(id) {
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
          <div class="icone">🌙</div>
          <div class="nome">Escuro</div>
        </div>
        <div class="tema-opcao ${temaAtual === 'claro' ? 'ativo' : ''}" data-tema="claro">
          <div class="icone">☀️</div>
          <div class="nome">Claro</div>
        </div>
        <div class="tema-opcao ${temaAtual === 'neon' ? 'ativo' : ''}" data-tema="neon">
          <div class="icone">💜</div>
          <div class="nome">Neon</div>
        </div>
      </div>
    </div>

    <div class="config-secao">
      <h2>🎯 Marcadores do mapa</h2>
      <p>Como você quer que os marcadores apareçam no mapa?</p>
      <div class="config-botoes">
        <button id="btnComCor" style="background:${corAtiva ? 'var(--azul)' : 'var(--bg-3)'};color:${corAtiva ? 'white' : 'var(--texto)'};">🎨 Com cor</button>
        <button id="btnSemCor" style="background:${!corAtiva ? 'var(--azul)' : 'var(--bg-3)'};color:${!corAtiva ? 'white' : 'var(--texto)'};">✨ Só emoji</button>
      </div>
    </div>

    <div class="config-secao">
      <h2>📤 Exportar backup</h2>
      <p>Baixe um arquivo com <strong>todos os seus dados</strong> (itens, veículos, marcadores, tipos). Guarde em local seguro.</p>
      <div class="config-botoes">
        <button class="btn-exportar" id="btnExportar">📤 Exportar backup</button>
      </div>
    </div>

    <div class="config-secao">
      <h2>📥 Importar backup</h2>
      <p>Restaure seus dados a partir de um arquivo <code>.json</code> exportado anteriormente.</p>
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

    <div class="config-secao">
      <h2>⚠️ Zona de perigo</h2>
      <p>Apagar <strong>TODOS</strong> os dados do app. Essa ação <strong>não pode ser desfeita</strong>!</p>
      <div class="config-botoes">
        <button class="btn-resetar" id="btnResetar">🗑️ Apagar tudo</button>
      </div>
    </div>
  `;
  conteudoEl.appendChild(div);

  div.querySelectorAll('.tema-opcao').forEach(el => {
    el.onclick = () => {
      const tema = el.dataset.tema;
      aplicarTema(tema);
      render();
    };
  });

  div.querySelector('#btnComCor').onclick = () => {
    localStorage.setItem('cor_marcadores', 'com-cor');
    render();
    if (map) {
      marcadoresLeaflet.forEach(x => map.removeLayer(x.marker));
      marcadoresLeaflet = [];
      marcadoresMapa.forEach(m => desenharMarcador(m));
    }
  };

  div.querySelector('#btnSemCor').onclick = () => {
    localStorage.setItem('cor_marcadores', 'sem-cor');
    render();
    if (map) {
      marcadoresLeaflet.forEach(x => map.removeLayer(x.marker));
      marcadoresLeaflet = [];
      marcadoresMapa.forEach(m => desenharMarcador(m));
    }
  };

  div.querySelector('#btnExportar').onclick = exportarBackup;
  div.querySelector('#btnImportar').onclick = () => document.getElementById('arquivoImport').click();
  div.querySelector('#arquivoImport').onchange = importarBackup;
  div.querySelector('#btnResetar').onclick = resetarTudo;
}

// ===== EXPORTAR / IMPORTAR =====
async function exportarBackup() {
  const backup = {
    versao: 1,
    data: new Date().toISOString(),
    itens,
    capacidades,
    veiculos,
    tiposPonto,
    marcadoresMapa,
    tiposVisiveis,
    tema: localStorage.getItem('tema_rp') || 'escuro',
    corMarcadores: localStorage.getItem('cor_marcadores') || 'com-cor',
  };

  const json = JSON.stringify(backup, null, 2);
  const nomeArquivo = `inventario-rp-backup-${new Date().toISOString().slice(0,10)}.json`;

  try {
    if (window.Capacitor && window.Capacitor.Plugins) {
      const Plugins = window.Capacitor.Plugins;
      if (Plugins.Filesystem && Plugins.Share) {
        const Filesystem = Plugins.Filesystem;
        const Share = Plugins.Share;
        const Directory = Filesystem.Directory;
        const Encoding = Filesystem.Encoding;
        const cacheDir = (Directory && Directory.Cache) ? Directory.Cache : 'CACHE';

        await Filesystem.writeFile({
          path: nomeArquivo,
          data: json,
          directory: cacheDir,
          encoding: Encoding ? Encoding.UTF8 : 'utf8',
        });

        const uriResult = await Filesystem.getUri({
          path: nomeArquivo,
          directory: cacheDir,
        });

        await Share.share({
          title: 'Backup Inventário RP',
          text: 'Escolha onde salvar o backup',
          url: uriResult.uri,
          dialogTitle: 'Salvar backup',
        });

        return;
      }
    }
  } catch (err) {
    console.log('Erro no plugin nativo:', err);
  }

  downloadFallback(json, nomeArquivo);
}

function downloadFallback(json, nomeArquivo) {
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = nomeArquivo;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
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
      if (!dados || typeof dados !== 'object') throw new Error('Formato inválido');

      backupPendente = dados;

      document.getElementById('previewQtdItens').textContent = (dados.itens || []).length;
      document.getElementById('previewQtdVeiculos').textContent = (dados.veiculos || []).length;
      document.getElementById('previewQtdMarcadores').textContent = (dados.marcadoresMapa || []).length;
      document.getElementById('previewQtdTipos').textContent = (dados.tiposPonto || []).length;

      document.getElementById('modalImportar').classList.remove('escondido');
    } catch (err) {
      alert('❌ Erro ao ler o arquivo!\n\nVerifique se é um backup válido.');
    }
    e.target.value = '';
  };
  reader.readAsText(file);
}

document.getElementById('btnImportSubstituir').onclick = () => {
  if (!backupPendente) return;
  if (!confirm('⚠️ Isso vai APAGAR todos os dados atuais e substituir pelo backup.\n\nContinuar?')) return;

  itens = backupPendente.itens || [];
  capacidades = backupPendente.capacidades || {casa:150, moto:100};
  veiculos = backupPendente.veiculos || [];
  tiposPonto = backupPendente.tiposPonto || TIPOS_PADRAO;
  marcadoresMapa = backupPendente.marcadoresMapa || [];
  tiposVisiveis = backupPendente.tiposVisiveis || tiposPonto.map(t => t.id);

  salvarStorage();
  localStorage.setItem('marcadores_mapa', JSON.stringify(marcadoresMapa));
  localStorage.setItem('tipos_visiveis_rp', JSON.stringify(tiposVisiveis));

  if (backupPendente.tema) {
    localStorage.setItem('tema_rp', backupPendente.tema);
    aplicarTema(backupPendente.tema);
  }

  backupPendente = null;
  document.getElementById('modalImportar').classList.add('escondido');

  if (map) {
    marcadoresLeaflet.forEach(x => map.removeLayer(x.marker));
    marcadoresLeaflet = [];
    marcadoresMapa.forEach(m => desenharMarcador(m));
    atualizarLegenda();
  }

  alert('✅ Backup restaurado com sucesso!');
  render();
};

document.getElementById('btnImportJuntar').onclick = () => {
  if (!backupPendente) return;

  const itensNovos = (backupPendente.itens || []).map(it => ({
    ...it,
    id: Date.now().toString() + Math.random().toString(36).slice(2,7),
  }));
  itens = itens.concat(itensNovos);

  const veicNovos = (backupPendente.veiculos || []).map(v => ({
    ...v,
    id: Date.now().toString() + Math.random().toString(36).slice(2,7),
  }));
  veiculos = veiculos.concat(veicNovos);

  const idsTiposAtuais = tiposPonto.map(t => t.id);
  const tiposNovos = (backupPendente.tiposPonto || []).filter(t => !idsTiposAtuais.includes(t.id));
  tiposPonto = tiposPonto.concat(tiposNovos);

  const marcNovos = (backupPendente.marcadoresMapa || []).map(m => ({
    ...m,
    id: Date.now().toString() + Math.random().toString(36).slice(2,7),
  }));
  marcadoresMapa = marcadoresMapa.concat(marcNovos);

  tiposNovos.forEach(t => {
    if (!tiposVisiveis.includes(t.id)) tiposVisiveis.push(t.id);
  });

  salvarStorage();
  localStorage.setItem('marcadores_mapa', JSON.stringify(marcadoresMapa));
  localStorage.setItem('tipos_visiveis_rp', JSON.stringify(tiposVisiveis));

  if (map) {
    marcNovos.forEach(m => desenharMarcador(m));
    atualizarLegenda();
  }

  backupPendente = null;
  document.getElementById('modalImportar').classList.add('escondido');

  alert('✅ Dados juntados com sucesso!');
  render();
};

document.getElementById('btnImportCancelar').onclick = () => {
  backupPendente = null;
  document.getElementById('modalImportar').classList.add('escondido');
};

document.getElementById('modalImportar').onclick = (e) => {
  if (e.target.id === 'modalImportar') {
    backupPendente = null;
    document.getElementById('modalImportar').classList.add('escondido');
  }
};

function resetarTudo() {
  const resp = prompt('⚠️ APAGAR TUDO!\n\nDigite "APAGAR" (em maiúsculas) pra confirmar:');
  if (resp !== 'APAGAR') {
    alert('Cancelado. Nada foi apagado.');
    return;
  }

  localStorage.removeItem('itens_rp_v2');
  localStorage.removeItem('caps_rp_v2');
  localStorage.removeItem('veiculos_rp_v2');
  localStorage.removeItem('tipos_ponto_rp');
  localStorage.removeItem('marcadores_mapa');
  localStorage.removeItem('tipos_visiveis_rp');

  alert('✅ Todos os dados foram apagados.\n\nA página vai recarregar.');
  location.reload();
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
const CAMINHOS_MAPA = {
  styleAtlas: 'mapStyles/styleAtlas/map.png',
  styleGrid: 'mapStyles/styleGrid/map.png',
};
let MAP_BOUNDS = [[0, 0], [-2000, 2000]];

document.getElementById('btnFecharMapa').onclick = () => {
  document.getElementById('mapa-container').classList.remove('ativo');
  modoAdicionar = false;
  document.getElementById('btnModoAdd').textContent = '📍 Marcar Local';
  document.getElementById('btnModoAdd').classList.remove('perigo');
  document.getElementById('buscaResultados').classList.add('escondido');
};

document.getElementById('btnModoAdd').onclick = () => {
  modoAdicionar = !modoAdicionar;
  document.getElementById('btnModoAdd').textContent = modoAdicionar ? '❌ Cancelar' : '📍 Marcar Local';
  document.getElementById('btnModoAdd').classList.toggle('perigo', modoAdicionar);
  if (modoAdicionar) alert('Clique no mapa onde fica o ponto!');
};

document.getElementById('btnTrocarEstilo').onclick = () => {
  const i = ESTILOS_MAPA.indexOf(estiloAtual);
  estiloAtual = ESTILOS_MAPA[(i + 1) % ESTILOS_MAPA.length];
  if (map && camadaMapa) {
    map.removeLayer(camadaMapa);
    camadaMapa = L.imageOverlay(CAMINHOS_MAPA[estiloAtual], MAP_BOUNDS).addTo(map);
  }
};

// Botão de alternar cor dos marcadores
document.getElementById('btnToggleCor').onclick = () => {
  const atual = localStorage.getItem('cor_marcadores') || 'com-cor';
  const novo = atual === 'com-cor' ? 'sem-cor' : 'com-cor';
  localStorage.setItem('cor_marcadores', novo);

  if (map) {
    marcadoresLeaflet.forEach(x => map.removeLayer(x.marker));
    marcadoresLeaflet = [];
    marcadoresMapa.forEach(m => desenharMarcador(m));
  }

  document.getElementById('btnToggleCor').textContent =
    novo === 'com-cor' ? '🎨 Marcadores' : '✨ Só Emoji';
};

function abrirMapa() {
  document.getElementById('mapa-container').classList.add('ativo');

  if (!map) {
    map = L.map('mapa', {
      crs: L.CRS.Simple,
      minZoom: -2,
      maxZoom: 3,
      attributionControl: false,
      zoomSnap: 0.25,
      maxBounds: MAP_BOUNDS,
      maxBoundsViscosity: 1.0,
    });
    camadaMapa = L.imageOverlay(CAMINHOS_MAPA[estiloAtual], MAP_BOUNDS).addTo(map);
    map.fitBounds(MAP_BOUNDS);

    marcadoresMapa.forEach(m => desenharMarcador(m));

    map.on('click', (e) => {
      if (!modoAdicionar) return;
      marcadorTempLatLng = e.latlng;
      abrirModalMarcador();
    });
  }

  // Atualiza o texto do botão de cor
  const corAtual = localStorage.getItem('cor_marcadores') || 'com-cor';
  document.getElementById('btnToggleCor').textContent =
    corAtual === 'com-cor' ? '🎨 Marcadores' : '✨ Só Emoji';

  atualizarLegenda();

  setTimeout(() => {
    if (map) {
      map.invalidateSize();
      if (marcadoresLeaflet.length > 0) {
        const visiveis = marcadoresLeaflet.filter(m => tiposVisiveis.includes(m.tipoId));
        if (visiveis.length > 0) {
          const grupo = L.featureGroup(visiveis.map(m => m.marker));
          map.fitBounds(grupo.getBounds().pad(0.3));
        }
      }
    }
  }, 150);
}

function desenharMarcador(m) {
  const tipo = tiposPonto.find(t => t.id === m.tipoId) || tiposPonto[0];
  const visivel = tiposVisiveis.includes(m.tipoId);
  const semCor = localStorage.getItem('cor_marcadores') === 'sem-cor';

  const icon = L.divIcon({
    className: 'marcador-custom',
    html: `<div class="marcador-ponto ${semCor ? 'sem-cor' : ''}" style="${semCor ? '' : 'background:' + tipo.cor + ';'}">${tipo.emoji}</div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16],
  });

  const marker = L.marker([m.lat, m.lng], { icon });

  const tipoTexto = m.numeroFac
    ? `${tipo.emoji} ${tipo.nome} ${m.numeroFac}`
    : `${tipo.emoji} ${tipo.nome}`;

  let detalhes = '';
  if (m.foto) detalhes += `<img src="${m.foto}" class="popup-foto" />`;
  if (m.producao) detalhes += `<div class="popup-producao">🎯 Produção: ${m.producao}</div>`;
  if (m.numero) detalhes += `<div class="popup-linha">📞 ${m.numero}</div>`;
  if (m.dono) detalhes += `<div class="popup-linha">👤 ${m.dono}</div>`;
  if (m.descricao) detalhes += `<div class="popup-desc">📝 ${m.descricao}</div>`;

  marker.bindPopup(`
    <div class="popup-ponto">
      <strong>${m.nome}</strong>
      <div class="tipo">${tipoTexto}</div>
      ${detalhes}
      ${m.refId ? `<button onclick="abrirBauDoMapa('${m.refId}', '${m.bau}')">📦 Abrir Baú</button>` : ''}
      <button onclick="editarMarcador('${m.id}')">✏️ Editar</button>
      <button class="perigo" onclick="removerMarcador('${m.id}')">🗑️ Excluir</button>
    </div>
  `);

  if (visivel) marker.addTo(map);

  marcadoresLeaflet.push({ id: m.id, marker, tipoId: m.tipoId });
}

function editarMarcador(id) {
  const m = marcadoresMapa.find(x => x.id === id);
  if (!m) return;
  if (map) map.closePopup();
  abrirModalMarcador(m);
}

function atualizarLegenda() {
  const lista = document.getElementById('legenda-lista');
  lista.innerHTML = '';

  const grupos = {};
  tiposPonto.forEach(t => {
    const cat = t.categoria || 'Outros';
    if (!grupos[cat]) grupos[cat] = [];
    grupos[cat].push(t);
  });

  Object.keys(grupos).sort().forEach(cat => {
    const grupo = document.createElement('div');
    grupo.className = 'cat-grupo';
    const tit = document.createElement('div');
    tit.className = 'cat-titulo-leg';
    tit.textContent = cat;
    grupo.appendChild(tit);

    grupos[cat].forEach(t => {
      const count = marcadoresMapa.filter(m => m.tipoId === t.id).length;
      const item = document.createElement('label');
      item.className = 'legenda-item';
      const marcado = tiposVisiveis.includes(t.id) ? 'checked' : '';
      item.innerHTML = `
        <input type="checkbox" ${marcado} data-tipo="${t.id}" />
        <span class="emoji">${t.emoji}</span>
        <span class="cor" style="background:${t.cor};"></span>
        <span class="nome">${t.nome}</span>
        <span class="count">${count}</span>
      `;
      item.querySelector('input').onchange = (e) => {
        toggleTipoVisivel(t.id, e.target.checked);
      };
      grupo.appendChild(item);
    });
    lista.appendChild(grupo);
  });
}

function toggleTipoVisivel(tipoId, visivel) {
  if (visivel) {
    if (!tiposVisiveis.includes(tipoId)) tiposVisiveis.push(tipoId);
  } else {
    tiposVisiveis = tiposVisiveis.filter(id => id !== tipoId);
  }
  localStorage.setItem('tipos_visiveis_rp', JSON.stringify(tiposVisiveis));

  marcadoresLeaflet.forEach(m => {
    if (tiposVisiveis.includes(m.tipoId)) {
      if (!map.hasLayer(m.marker)) m.marker.addTo(map);
    } else {
      if (map.hasLayer(m.marker)) map.removeLayer(m.marker);
    }
  });
}

document.getElementById('btnMarcarTodos').onclick = () => {
  tiposVisiveis = tiposPonto.map(t => t.id);
  localStorage.setItem('tipos_visiveis_rp', JSON.stringify(tiposVisiveis));
  atualizarLegenda();
  marcadoresLeaflet.forEach(m => {
    if (!map.hasLayer(m.marker)) m.marker.addTo(map);
  });
};

document.getElementById('btnDesmarcarTodos').onclick = () => {
  tiposVisiveis = [];
  localStorage.setItem('tipos_visiveis_rp', JSON.stringify(tiposVisiveis));
  atualizarLegenda();
  marcadoresLeaflet.forEach(m => {
    if (map.hasLayer(m.marker)) map.removeLayer(m.marker);
  });
};

// ===== BUSCA NO MAPA =====
const buscaMapaEl = document.getElementById('buscaMapa');
const buscaResultadosEl = document.getElementById('buscaResultados');

buscaMapaEl.oninput = () => {
  const termo = buscaMapaEl.value.trim().toLowerCase();
  if (!termo) {
    buscaResultadosEl.classList.add('escondido');
    return;
  }

  const resultados = marcadoresMapa.filter(m => {
    const tipo = tiposPonto.find(t => t.id === m.tipoId);
    const nomeTipo = tipo ? tipo.nome : '';
    return (
      m.nome.toLowerCase().includes(termo) ||
      (m.dono || '').toLowerCase().includes(termo) ||
      (m.descricao || '').toLowerCase().includes(termo) ||
      (m.numero || '').toLowerCase().includes(termo) ||
      (m.numeroFac || '').toLowerCase().includes(termo) ||
      (m.producao || '').toLowerCase().includes(termo) ||
      nomeTipo.toLowerCase().includes(termo)
    );
  });

  buscaResultadosEl.innerHTML = '';
  buscaResultadosEl.classList.remove('escondido');

  if (resultados.length === 0) {
    buscaResultadosEl.innerHTML = '<div class="sem-resultado">Nenhum ponto encontrado 🔍</div>';
    return;
  }

  resultados.slice(0, 20).forEach(m => {
    const tipo = tiposPonto.find(t => t.id === m.tipoId) || { emoji:'📍', nome:'', cor:'#4a7dff' };
    const item = document.createElement('div');
    item.className = 'resultado-item';

    let sub = tipo.nome;
    if (m.numeroFac) sub += ` • Nº ${m.numeroFac}`;
    if (m.producao) sub += ` • ${m.producao}`;
    if (m.dono) sub += ` • ${m.dono}`;

    item.innerHTML = `
      <span class="emoji">${tipo.emoji}</span>
      <div class="info-res">
        <strong>${m.nome}</strong>
        <span>${sub}</span>
      </div>
    `;
    item.onclick = () => irParaMarcador(m.id);
    buscaResultadosEl.appendChild(item);
  });
};

function irParaMarcador(id) {
  const m = marcadoresMapa.find(x => x.id === id);
  if (!m || !map) return;

  if (!tiposVisiveis.includes(m.tipoId)) {
    tiposVisiveis.push(m.tipoId);
    localStorage.setItem('tipos_visiveis_rp', JSON.stringify(tiposVisiveis));
    atualizarLegenda();
    const entry = marcadoresLeaflet.find(x => x.id === m.id);
    if (entry && !map.hasLayer(entry.marker)) entry.marker.addTo(map);
  }

  map.setView([m.lat, m.lng], 1, { animate: true });

  setTimeout(() => {
    const entry = marcadoresLeaflet.find(x => x.id === m.id);
    if (entry) entry.marker.openPopup();
  }, 400);

  buscaResultadosEl.classList.add('escondido');
  buscaMapaEl.value = '';
}

document.addEventListener('click', (e) => {
  if (!e.target.closest('#mapa-busca')) {
    buscaResultadosEl.classList.add('escondido');
  }
});

// ===== MODAL MARCADOR =====
function abrirModalMarcador(marcadorEditar = null) {
  editandoMarcId = marcadorEditar ? marcadorEditar.id : null;
  fotoMarcTemp = marcadorEditar ? (marcadorEditar.foto || null) : null;

  document.getElementById('modalMarcadorTitulo').textContent =
    marcadorEditar ? 'Editar ponto' : 'Novo ponto no mapa';

  document.getElementById('marcNome').value = marcadorEditar ? marcadorEditar.nome : '';
  document.getElementById('marcNumeroFac').value = marcadorEditar ? (marcadorEditar.numeroFac || '') : '';
  document.getElementById('marcProducao').value = marcadorEditar ? (marcadorEditar.producao || '') : '';
  document.getElementById('marcNumero').value = marcadorEditar ? (marcadorEditar.numero || '') : '';
  document.getElementById('marcDono').value = marcadorEditar ? (marcadorEditar.dono || '') : '';
  document.getElementById('marcDesc').value = marcadorEditar ? (marcadorEditar.descricao || '') : '';
  document.getElementById('marcFoto').value = '';

  const preview = document.getElementById('previewMarc');
  preview.innerHTML = marcadorEditar && marcadorEditar.foto
    ? `<img src="${marcadorEditar.foto}" style="max-width:100px;border-radius:8px;" />`
    : '';

  const selTipo = document.getElementById('marcTipo');
  selTipo.innerHTML = '';
  tiposPonto.forEach(t => {
    selTipo.innerHTML += `<option value="${t.id}">${t.emoji} ${t.nome}</option>`;
  });
  if (marcadorEditar) selTipo.value = marcadorEditar.tipoId;

  const selRef = document.getElementById('marcRef');
  selRef.innerHTML = '<option value="">— Nenhum —</option>';
  selRef.innerHTML += '<option value="casa|bau">🏠 Casa</option>';
  selRef.innerHTML += '<option value="moto|bau">🏍️ Moto</option>';
  veiculos.forEach(v => {
    selRef.innerHTML += `<option value="${v.id}|veiculo">${iconeTipo(v.tipo)} ${v.nome}</option>`;
  });
  if (marcadorEditar && marcadorEditar.refId) {
    const refStr = marcadorEditar.tipo === 'veiculo'
      ? `${marcadorEditar.refId}|veiculo`
      : `${marcadorEditar.refId}|bau`;
    selRef.value = refStr;
  }

  document.getElementById('modalMarcador').classList.remove('escondido');
}

function fecharModalMarcador() {
  document.getElementById('modalMarcador').classList.add('escondido');
  marcadorTempLatLng = null;
  editandoMarcId = null;
  fotoMarcTemp = null;
}

function salvarMarcador() {
  const nome = document.getElementById('marcNome').value.trim();
  if (!nome) { alert('Digite o nome do local!'); return; }

  const tipoId = document.getElementById('marcTipo').value;
  const numeroFac = document.getElementById('marcNumeroFac').value.trim();
  const producao = document.getElementById('marcProducao').value;
  const numero = document.getElementById('marcNumero').value.trim();
  const dono = document.getElementById('marcDono').value.trim();
  const descricao = document.getElementById('marcDesc').value.trim();
  const ref = document.getElementById('marcRef').value;
  const partes = ref ? ref.split('|') : ['', 'bau'];
  const refId = partes[0];
  const tipoBau = partes[1] === 'veiculo' ? 'veiculo' : 'bau';

  if (editandoMarcId) {
    const m = marcadoresMapa.find(x => x.id === editandoMarcId);
    Object.assign(m, {
      nome, tipoId, numeroFac, producao, numero, dono, descricao,
      foto: fotoMarcTemp,
      refId, bau: refId, tipo: tipoBau
    });

    const idx = marcadoresLeaflet.findIndex(x => x.id === editandoMarcId);
    if (idx >= 0) {
      map.removeLayer(marcadoresLeaflet[idx].marker);
      marcadoresLeaflet.splice(idx, 1);
    }
    desenharMarcador(m);
  } else {
    if (!marcadorTempLatLng) { fecharModalMarcador(); return; }
    const novo = {
      id: Date.now().toString(),
      nome, tipoId, numeroFac, producao, numero, dono, descricao,
      foto: fotoMarcTemp,
      lat: marcadorTempLatLng.lat,
      lng: marcadorTempLatLng.lng,
      refId,
      bau: refId,
      tipo: tipoBau,
    };
    marcadoresMapa.push(novo);
    desenharMarcador(novo);
  }

  localStorage.setItem('marcadores_mapa', JSON.stringify(marcadoresMapa));

  modoAdicionar = false;
  document.getElementById('btnModoAdd').textContent = '📍 Marcar Local';
  document.getElementById('btnModoAdd').classList.remove('perigo');
  fecharModalMarcador();
  atualizarLegenda();
}

function removerMarcador(id) {
  if (!confirm('Excluir este ponto?')) return;
  marcadoresMapa = marcadoresMapa.filter(m => m.id !== id);
  localStorage.setItem('marcadores_mapa', JSON.stringify(marcadoresMapa));

  const idx = marcadoresLeaflet.findIndex(x => x.id === id);
  if (idx >= 0) {
    map.removeLayer(marcadoresLeaflet[idx].marker);
    marcadoresLeaflet.splice(idx, 1);
  }
  atualizarLegenda();
}

function abrirBauDoMapa(refId, bau) {
  document.getElementById('mapa-container').classList.remove('ativo');
  if (bau === 'casa' || bau === 'moto') {
    abaAtual = bau;
    veiculoAberto = null;
  } else {
    abaAtual = 'garagem';
    veiculoAberto = refId;
  }
  montarAbas();
  render();
}

// ===== GERENCIAR TIPOS =====
document.getElementById('btnGerenciarTipos').onclick = () => {
  renderListaTipos();
  document.getElementById('modalGerenciarTipos').classList.remove('escondido');
};

document.getElementById('btnFecharGerenciar').onclick = () => {
  document.getElementById('modalGerenciarTipos').classList.add('escondido');
};

document.getElementById('btnNovoTipo').onclick = () => {
  editandoTipoId = null;
  document.getElementById('modalTipoTitulo').textContent = 'Novo tipo de ponto';
  document.getElementById('tipoNome').value = '';
  document.getElementById('tipoEmoji').value = '';
  document.getElementById('tipoCor').value = '#4a7dff';
  document.getElementById('tipoCategoria').value = '';
  document.getElementById('modalTipo').classList.remove('escondido');
};

function renderListaTipos() {
  const lista = document.getElementById('listaTipos');
  lista.innerHTML = '';
  tiposPonto.forEach(t => {
    const item = document.createElement('div');
    item.className = 'tipo-item';
    item.innerHTML = `
      <span class="emoji">${t.emoji}</span>
      <span class="cor" style="background:${t.cor};"></span>
      <div class="info">
        <strong>${t.nome}</strong>
        <span>${t.categoria || 'Sem categoria'}</span>
      </div>
      <button data-acao="editar" title="Editar">✏️</button>
      <button data-acao="excluir" title="Excluir">🗑️</button>
    `;
    item.querySelector('[data-acao="editar"]').onclick = () => {
      editandoTipoId = t.id;
      document.getElementById('modalTipoTitulo').textContent = 'Editar tipo';
      document.getElementById('tipoNome').value = t.nome;
      document.getElementById('tipoEmoji').value = t.emoji;
      document.getElementById('tipoCor').value = t.cor;
      document.getElementById('tipoCategoria').value = t.categoria || '';
      document.getElementById('modalTipo').classList.remove('escondido');
    };
    item.querySelector('[data-acao="excluir"]').onclick = () => {
      if (!confirm(`Excluir o tipo "${t.nome}"? Os pontos desse tipo também serão removidos.`)) return;
      tiposPonto = tiposPonto.filter(x => x.id !== t.id);
      marcadoresMapa = marcadoresMapa.filter(m => m.tipoId !== t.id);
      tiposVisiveis = tiposVisiveis.filter(id => id !== t.id);
      salvarStorage();
      localStorage.setItem('marcadores_mapa', JSON.stringify(marcadoresMapa));
      localStorage.setItem('tipos_visiveis_rp', JSON.stringify(tiposVisiveis));
      renderListaTipos();
      atualizarLegenda();
    };
    lista.appendChild(item);
  });
}

document.getElementById('btnCancelarTipo').onclick = () => {
  document.getElementById('modalTipo').classList.add('escondido');
};

document.getElementById('btnSalvarTipo').onclick = () => {
  const nome = document.getElementById('tipoNome').value.trim();
  const emoji = document.getElementById('tipoEmoji').value.trim() || '📍';
  const cor = document.getElementById('tipoCor').value;
  const categoria = document.getElementById('tipoCategoria').value.trim() || 'Outros';

  if (!nome) { alert('Digite o nome do tipo!'); return; }

  if (editandoTipoId) {
    const t = tiposPonto.find(x => x.id === editandoTipoId);
    Object.assign(t, { nome, emoji, cor, categoria });
  } else {
    const novoId = 'tipo_' + Date.now();
    tiposPonto.push({ id: novoId, nome, emoji, cor, categoria });
    tiposVisiveis.push(novoId);
    localStorage.setItem('tipos_visiveis_rp', JSON.stringify(tiposVisiveis));
  }
  salvarStorage();
  document.getElementById('modalTipo').classList.add('escondido');
  renderListaTipos();
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

document.getElementById('itemFoto').onchange = (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    fotoTemp = ev.target.result;
    document.getElementById('preview').innerHTML = `<img src="${fotoTemp}"/>`;
  };
  reader.readAsDataURL(file);
};

document.getElementById('marcFoto').onchange = (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    fotoMarcTemp = ev.target.result;
    document.getElementById('previewMarc').innerHTML = `<img src="${fotoMarcTemp}" style="max-width:100px;border-radius:8px;" />`;
  };
  reader.readAsDataURL(file);
};

document.getElementById('modal').onclick = (e) => { if (e.target.id === 'modal') fecharModal(); };
document.getElementById('modalVeiculo').onclick = (e) => { if (e.target.id === 'modalVeiculo') fecharModalVeiculo(); };
document.getElementById('modalCap').onclick = (e) => { if (e.target.id === 'modalCap') fecharModalCap(); };
document.getElementById('modalMarcador').onclick = (e) => { if (e.target.id === 'modalMarcador') fecharModalMarcador(); };
document.getElementById('modalTipo').onclick = (e) => { if (e.target.id === 'modalTipo') document.getElementById('modalTipo').classList.add('escondido'); };
document.getElementById('modalGerenciarTipos').onclick = (e) => { if (e.target.id === 'modalGerenciarTipos') document.getElementById('modalGerenciarTipos').classList.add('escondido'); };

init();