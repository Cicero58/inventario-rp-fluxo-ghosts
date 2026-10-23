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
  { id:'armas', nome:'🔫 Armas' }, { id:'municao', nome:'💥 Munição' },
  { id:'drogas', nome:'💊 Drogas' }, { id:'ferramentas', nome:'🔧 Ferramentas' },
  { id:'remedios', nome:'💉 Remédios' }, { id:'dinheiro', nome:'💰 Dinheiro' },
  { id:'mineracao', nome:'⛏️ Mineração' }, { id:'pescaria', nome:'🎣 Pescaria' },
  { id:'outros', nome:'📦 Outros' },
];

const BAUS_FIXOS = [ { id:'casa', nome:'🏠 Casa' }, { id:'moto', nome:'🏍️ Moto' } ];

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
let itens = [], capacidades = { casa: 150, moto: 100 }, veiculos = [], tiposPonto = [...TIPOS_PADRAO], marcadoresMapa = [];
let clientesDisponiveis = [], banidos = [], silenciados = {};
let abaAtual = 'casa', veiculoAberto = null, editandoId = null, editandoVeicId = null;
let editandoTipoId = null, editandoMarcId = null, fotoTemp = null, fotoMarcTemp = null, itemBaseSelecionado = null;
let ordenacao = 'nome', clienteSelecionadoAdmin = null;
let tiposVisiveis = JSON.parse(localStorage.getItem('tipos_visiveis_rp') || JSON.stringify(tiposPonto.map(t => t.id)));

let map = null, camadaMapa = null, estiloAtual = 'styleAtlas', modoAdicionar = false, marcadorTempLatLng = null, marcadoresLeaflet = [];

const abasEl = document.getElementById('abas');
const conteudoEl = document.getElementById('conteudo');
const resumoEl = document.getElementById('resumo');

// ===== PERMISSÕES =====
function isAdmin() { return window.tipoUsuario === 'admin'; }
function isCliente() { return window.tipoUsuario === 'cliente'; }
function uidAtual() { return firebase.auth().currentUser?.uid || null; }
function isBanido(uid) { return banidos.includes(uid); }
function isSilenciado(uid) { return silenciados[uid] && silenciados[uid].toDate() > new Date(); }

function clienteJaTemCasa() {
  if (isAdmin()) return false;
  const uid = uidAtual();
  if (!uid) return false;
  return marcadoresMapa.some(m => m.donoUid === uid && m.tipoId === 'casa');
}

// ===== FIRESTORE HELPERS =====
const FS = () => firebase.firestore();

async function fsAddItem(novo) { await FS().collection('itens').add({ ...novo, donoUid: novo.donoUid || uidAtual(), criadoPor: uidAtual(), criadoEm: firebase.firestore.FieldValue.serverTimestamp() }); }
async function fsUpdateItem(id, patch) { await FS().collection('itens').doc(id).update(patch); }
async function fsDeleteItem(id) { await FS().collection('itens').doc(id).delete(); }
async function fsAddVeiculo(novo) { await FS().collection('veiculos').add({ ...novo, donoUid: novo.donoUid || uidAtual(), criadoPor: uidAtual(), criadoEm: firebase.firestore.FieldValue.serverTimestamp() }); }
async function fsUpdateVeiculo(id, patch) { await FS().collection('veiculos').doc(id).update(patch); }
async function fsDeleteVeiculo(id) {
  const snap = await FS().collection('itens').where('veiculoId', '==', id).get();
  const batch = FS().batch();
  snap.forEach(d => batch.delete(d.ref));
  batch.delete(FS().collection('veiculos').doc(id));
  await batch.commit();
}
async function fsAddMarcador(novo) { await FS().collection('marcadores').add({ ...novo, donoUid: novo.donoUid || uidAtual(), criadoPor: uidAtual(), criadoEm: firebase.firestore.FieldValue.serverTimestamp() }); }
async function fsUpdateMarcador(id, patch) { await FS().collection('marcadores').doc(id).update(patch); }
async function fsDeleteMarcador(id) { await FS().collection('marcadores').doc(id).delete(); }
async function fsSetConfig(docId, data) { await FS().collection('config').doc(docId).set(data, { merge: true }); }

// ===== SYNC FIRESTORE =====
let unsubs = { itens: null, veiculos: null, marcadores: null, config: null, usuarios: null, usuariosChat: null };

function iniciarSyncFirestore() {
  pararSyncFirestore();
  const uid = uidAtual(), admin = isAdmin();

  let qI = FS().collection('itens'); if (!admin) qI = qI.where('donoUid', '==', uid);
  unsubs.itens = qI.onSnapshot(s => { itens = s.docs.map(d => ({ id: d.id, ...d.data() })); render(); });

  let qV = FS().collection('veiculos'); if (!admin) qV = qV.where('donoUid', '==', uid);
  unsubs.veiculos = qV.onSnapshot(s => { veiculos = s.docs.map(d => ({ id: d.id, ...d.data() })); render(); });

  let qM = FS().collection('marcadores'); if (!admin) qM = qM.where('donoUid', '==', uid);
  unsubs.marcadores = qM.onSnapshot(s => {
    marcadoresMapa = s.docs.map(d => ({ id: d.id, ...d.data() }));
    if (map) { marcadoresLeaflet.forEach(x => map.removeLayer(x.marker)); marcadoresLeaflet = []; marcadoresMapa.forEach(m => desenharMarcador(m)); atualizarLegenda(); }
    montarAbas();
  });

  unsubs.config = FS().collection('config').onSnapshot(s => {
    s.forEach(d => {
      if (d.id === 'capacidades') capacidades = d.data();
      if (d.id === 'tiposPonto') { const l = d.data().lista; if (Array.isArray(l) && l.length) tiposPonto = l; }
      if (d.id === 'moderacao') { banidos = d.data().banidos || []; silenciados = d.data().silenciados || {}; }
    });
    montarAbas(); render();
  });

  if (admin) {
    unsubs.usuarios = FS().collection('usuarios').onSnapshot(s => {
      clientesDisponiveis = s.docs.map(d => ({ uid: d.id, ...d.data() })).filter(u => u.tipo === 'cliente');
      render();
    });
    // Para o admin saber quem está online para menções, precisamos ler todos os usuários também
    unsubs.usuariosChat = FS().collection('usuarios').onSnapshot(s => {
      window.todosUsuarios = s.docs.map(d => ({ uid: d.id, ...d.data() }));
      renderChat();
    });
  } else {
    window.todosUsuarios = [{ uid: uid, email: firebase.auth().currentUser.email, tipo: window.tipoUsuario }];
  }
}

function pararSyncFirestore() {
  Object.values(unsubs).forEach(u => u && u());
  unsubs = { itens: null, veiculos: null, marcadores: null, config: null, usuarios: null, usuariosChat: null };
  itens = []; veiculos = []; marcadoresMapa = []; marcadoresLeaflet = [];
  clienteSelecionadoAdmin = null; veiculoAberto = null;
}
window.pararSyncFirestore = pararSyncFirestore;

// ===== INIT =====
function init() {
  if (window.firebase && firebase.auth().currentUser) {
    montarAbas(); montarCategorias(); carregarTema(); iniciarSyncFirestore(); render();
  }
}

// ===== TEMA =====
function carregarTema() { aplicarTema(localStorage.getItem('tema_rp') || 'escuro'); }
function aplicarTema(tema) {
  document.body.classList.remove('claro', 'neon');
  if (tema === 'claro') document.body.classList.add('claro');
  if (tema === 'neon') document.body.classList.add('neon');
  document.getElementById('btnTema').textContent = { escuro: '🌙', claro: '☀️', neon: '💜' }[tema] || '🌙';
  localStorage.setItem('tema_rp', tema);
}
function proximoTema() { aplicarTema(TEMAS[(TEMAS.indexOf(localStorage.getItem('tema_rp') || 'escuro') + 1) % TEMAS.length]); }
document.getElementById('btnTema').onclick = proximoTema;

// ===== ABAS =====
function montarAbas() {
  abasEl.innerHTML = '';
  const mostrarCasa = isAdmin() || clienteJaTemCasa();
  if (mostrarCasa) {
    const b = document.createElement('button'); b.textContent = '🏠 Casa'; b.classList.toggle('ativo', abaAtual === 'casa');
    b.onclick = () => { abaAtual = 'casa'; veiculoAberto = null; montarAbas(); render(); }; abasEl.appendChild(b);
  }
  if (isAdmin()) {
    const b = document.createElement('button'); b.textContent = '🏍️ Moto'; b.classList.toggle('ativo', abaAtual === 'moto');
    b.onclick = () => { abaAtual = 'moto'; veiculoAberto = null; montarAbas(); render(); }; abasEl.appendChild(b);
  }
  const bg = document.createElement('button'); bg.textContent = '🚗 Garagem'; bg.classList.toggle('ativo', abaAtual === 'garagem');
  bg.onclick = () => { abaAtual = 'garagem'; veiculoAberto = null; montarAbas(); render(); }; abasEl.appendChild(bg);

  const bm = document.createElement('button'); bm.textContent = '🗺️ Mapa'; bm.onclick = abrirMapa; abasEl.appendChild(bm);

  // CHAT SAIU DAQUI e virou sidebar (botão para abrir/fechar)
  const bc = document.createElement('button');
  bc.textContent = '💬 Chat'; bc.style.position = 'relative';
  bc.onclick = toggleChatSidebar;
  const badge = document.createElement('span');
  badge.id = 'navChatBadge'; badge.style.cssText = 'display:none; position:absolute; top:-5px; right:-5px; background:var(--vermelho); color:white; font-size:0.65rem; padding:2px 6px; border-radius:10px; font-weight:bold;';
  bc.appendChild(badge);
  abasEl.appendChild(bc);

  const bcfg = document.createElement('button'); bcfg.textContent = '⚙️ Configurações'; bcfg.classList.toggle('ativo', abaAtual === 'config');
  bcfg.onclick = () => { abaAtual = 'config'; veiculoAberto = null; montarAbas(); render(); }; abasEl.appendChild(bcfg);

  if (isAdmin()) {
    const ba = document.createElement('button'); ba.textContent = '👑 Admin'; ba.style.background = '#ffaa00'; ba.style.color = '#000';
    ba.onclick = abrirPainelAdmin; abasEl.appendChild(ba);
  }
}

function montarCategorias() {
  const sel = document.getElementById('itemCategoria'); sel.innerHTML = '';
  CATEGORIAS.forEach(c => { const o = document.createElement('option'); o.value = c.id; o.textContent = c.nome; sel.appendChild(o); });
}

// ===== RENDER =====
function render() {
  conteudoEl.innerHTML = '';
  if (isCliente() && abaAtual === 'casa' && !clienteJaTemCasa()) abaAtual = 'garagem';
  if (isCliente() && abaAtual === 'moto') abaAtual = 'garagem';

  if (abaAtual === 'config') renderConfiguracoes();
  else if (abaAtual === 'garagem') { if (veiculoAberto) renderBauVeiculo(); else renderGaragem(); }
  else if (abaAtual === 'casa' && isCliente()) renderCasaCliente();
  else renderBauFixo(abaAtual);
  atualizarResumo();
}

function atualizarResumo() {
  let total = 0, unid = 0; itens.forEach(i => { total++; unid += Number(i.qtd); });
  resumoEl.textContent = `${total} itens • ${unid} unidades`;
}
function calcularPeso(arr) { return arr.reduce((s, i) => s + (Number(i.qtd) * Number(i.peso || 0)), 0); }
function ordenarItens(arr) {
  const c = [...arr];
  if (ordenacao === 'nome') c.sort((a,b) => (a.nome||'').localeCompare(b.nome||''));
  else if (ordenacao === 'qtd') c.sort((a,b) => b.qtd - a.qtd);
  else if (ordenacao === 'peso') c.sort((a,b) => (b.qtd*b.peso) - (a.qtd*a.peso));
  return c;
}
function criarBarraOrdenacao() {
  const d = document.createElement('div'); d.className = 'ordenacao';
  [{ id:'nome', t:'🔤 Nome' }, { id:'qtd', t:'🔢 Qtd' }, { id:'peso', t:'⚖️ Peso' }].forEach(o => {
    const b = document.createElement('button'); b.textContent = o.t; b.classList.toggle('ativo', ordenacao === o.id);
    b.onclick = () => { ordenacao = o.id; render(); }; d.appendChild(b);
  });
  return d;
}

// ===== ABA CASA (ADMIN) =====
function renderCasaAdmin() {
  const sd = document.createElement('div'); sd.className = 'capacidade';
  sd.innerHTML = `
    <div class="capacidade-topo"><strong>👤 Cliente</strong></div>
    <select id="selClienteAdmin" style="width:100%;padding:10px;background:var(--bg-3);border:1px solid var(--borda);border-radius:8px;color:var(--texto);margin-top:6px;">
      <option value="">— Selecione —</option>
      ${clientesDisponiveis.map(c => `<option value="${c.uid}" ${clienteSelecionadoAdmin === c.uid ? 'selected' : ''}>${c.email || c.uid}</option>`).join('')}
    </select>`;
  conteudoEl.appendChild(sd);
  sd.querySelector('#selClienteAdmin').onchange = (e) => { clienteSelecionadoAdmin = e.target.value || null; render(); };
  if (!clienteSelecionadoAdmin) { const v = document.createElement('div'); v.className = 'vazio'; v.textContent = '👆 Selecione um cliente.'; conteudoEl.appendChild(v); return; }

  const cap = capacidades['casa'] || 0, its = itens.filter(i => i.bau === 'casa' && i.donoUid === clienteSelecionadoAdmin), peso = calcularPeso(its), pct = cap > 0 ? Math.min((peso/cap)*100, 100) : 0;
  const cd = document.createElement('div'); cd.className = 'capacidade';
  cd.innerHTML = `<div class="capacidade-topo"><strong>🏠 Casa</strong><button id="btnEditCap">⚙️ Cap</button></div>
    <div class="capacidade-barra"><div class="capacidade-preenchida ${peso > cap ? 'cheio':''}" style="width:${pct}%"></div></div>
    <div class="capacidade-texto">${peso.toFixed(2)} / ${cap} kg • ${its.length} itens</div>`;
  conteudoEl.appendChild(cd);
  cd.querySelector('#btnEditCap').onclick = () => abrirModalCap('casa');

  const bar = document.createElement('div'); bar.className = 'barra';
  bar.innerHTML = `<input type="text" id="busca" placeholder="🔍 Buscar..." /><button id="btnNovo">➕ Novo item</button>`;
  conteudoEl.appendChild(bar);
  bar.querySelector('#btnNovo').onclick = () => abrirModal();
  bar.querySelector('#busca').oninput = (e) => { const f = e.target.value.toLowerCase(), l = document.getElementById('lista'); if (!l) return; const a = ordenarItens(its.filter(i => i.nome.toLowerCase().includes(f))); l.innerHTML = ''; if (!a.length) l.innerHTML = '<div class="vazio">Vazio.</div>'; else a.forEach(i => l.appendChild(criarCardItem(i))); };
  conteudoEl.appendChild(criarBarraOrdenacao());
  const l = document.createElement('main'); l.id = 'lista'; conteudoEl.appendChild(l);
  const a = ordenarItens(its); if (!a.length) l.innerHTML = '<div class="vazio">Vazio.</div>'; else a.forEach(i => l.appendChild(criarCardItem(i)));
}

// ===== ABA CASA (CLIENTE) =====
function renderCasaCliente() {
  const uid = uidAtual(), cap = capacidades['casa'] || 0, its = itens.filter(i => i.bau === 'casa' && i.donoUid === uid), peso = calcularPeso(its), pct = cap > 0 ? Math.min((peso/cap)*100, 100) : 0;
  const cd = document.createElement('div'); cd.className = 'capacidade';
  cd.innerHTML = `<div class="capacidade-topo"><strong>🏠 Casa</strong></div>
    <div class="capacidade-barra"><div class="capacidade-preenchida ${peso > cap ? 'cheio':''}" style="width:${pct}%"></div></div>
    <div class="capacidade-texto">${peso.toFixed(2)} / ${cap} kg • ${its.length} itens</div>`;
  conteudoEl.appendChild(cd);

  const bar = document.createElement('div'); bar.className = 'barra';
  bar.innerHTML = `<input type="text" id="busca" placeholder="🔍 Buscar..." /><button id="btnNovo">➕ Novo item</button>`;
  conteudoEl.appendChild(bar);
  bar.querySelector('#btnNovo').onclick = () => abrirModal();
  bar.querySelector('#busca').oninput = (e) => { const f = e.target.value.toLowerCase(), l = document.getElementById('lista'); if (!l) return; const a = ordenarItens(its.filter(i => i.nome.toLowerCase().includes(f))); l.innerHTML = ''; if (!a.length) l.innerHTML = '<div class="vazio">Vazio.</div>'; else a.forEach(i => l.appendChild(criarCardItem(i))); };
  conteudoEl.appendChild(criarBarraOrdenacao());
  const l = document.createElement('main'); l.id = 'lista'; conteudoEl.appendChild(l);
  const a = ordenarItens(its); if (!a.length) l.innerHTML = '<div class="vazio">Vazio.</div>'; else a.forEach(i => l.appendChild(criarCardItem(i)));
}

// ===== ABA MOTO =====
function renderBauFixo(bauId) {
  if (bauId === 'casa' && isAdmin()) return renderCasaAdmin();
  const bau = BAUS_FIXOS.find(b => b.id === bauId), cap = capacidades[bauId] || 0, its = isAdmin() ? itens.filter(i => i.bau === bauId) : itens.filter(i => i.bau === bauId && i.donoUid === uidAtual()), peso = calcularPeso(its), pct = cap > 0 ? Math.min((peso/cap)*100, 100) : 0;
  const cd = document.createElement('div'); cd.className = 'capacidade';
  cd.innerHTML = `<div class="capacidade-topo"><strong>${bau.nome}</strong><button id="btnEditCap">⚙️ Cap</button></div>
    <div class="capacidade-barra"><div class="capacidade-preenchida ${peso > cap ? 'cheio':''}" style="width:${pct}%"></div></div>
    <div class="capacidade-texto">${peso.toFixed(2)} / ${cap} kg • ${its.length} itens</div>`;
  conteudoEl.appendChild(cd);
  cd.querySelector('#btnEditCap').onclick = () => abrirModalCap(bauId);

  const bar = document.createElement('div'); bar.className = 'barra';
  bar.innerHTML = `<input type="text" id="busca" placeholder="🔍 Buscar..." /><button id="btnNovo">➕ Novo item</button>`;
  conteudoEl.appendChild(bar);
  bar.querySelector('#btnNovo').onclick = () => abrirModal();
  bar.querySelector('#busca').oninput = (e) => { const f = e.target.value.toLowerCase(), l = document.getElementById('lista'); if (!l) return; const a = ordenarItens(its.filter(i => i.nome.toLowerCase().includes(f))); l.innerHTML = ''; if (!a.length) l.innerHTML = '<div class="vazio">Vazio.</div>'; else a.forEach(i => l.appendChild(criarCardItem(i))); };
  conteudoEl.appendChild(criarBarraOrdenacao());
  const l = document.createElement('main'); l.id = 'lista'; conteudoEl.appendChild(l);
  const a = ordenarItens(its); if (!a.length) l.innerHTML = '<div class="vazio">Vazio.</div>'; else a.forEach(i => l.appendChild(criarCardItem(i)));
}

// ===== GARAGEM =====
function renderGaragem() {
  const b = document.createElement('div'); b.className = 'barra';
  b.innerHTML = `<button id="btnNovoVeic" style="flex:1">➕ Novo veículo</button>`;
  conteudoEl.appendChild(b); b.querySelector('#btnNovoVeic').onclick = () => abrirModalVeiculo();

  const l = document.createElement('main'); conteudoEl.appendChild(l);
  let vs = veiculos; if (isCliente()) vs = veiculos.filter(v => v.donoUid === uidAtual());
  if (!vs.length) { l.innerHTML = '<div class="vazio">Vazio.</div>'; return; }

  vs.forEach(v => {
    const its = itens.filter(i => i.veiculoId === v.id), peso = calcularPeso(its), pct = v.capacidade > 0 ? Math.min((peso/v.capacidade)*100,100) : 0;
    const c = document.createElement('div'); c.className = 'card-veiculo';
    c.innerHTML = `
      <div class="icone">${iconeTipo(v.tipo)}</div>
      <div class="info">
        <h3>${v.nome}${v.vaga ? `<span class="vaga">${v.vaga}</span>` : ''}</h3>
        <div class="cap">${peso.toFixed(2)} / ${v.capacidade} kg • ${its.length} itens</div>
        <div class="capacidade-barra" style="margin-top:6px;height:6px;"><div class="capacidade-preenchida ${peso>v.capacidade?'cheio':''}" style="width:${pct}%"></div></div>
      </div>
      <div class="acoes"><button data-acao="editar">✏️</button><button data-acao="excluir">🗑️</button></div>`;
    c.querySelector('[data-acao="editar"]').onclick = (e) => { e.stopPropagation(); abrirModalVeiculo(v); };
    c.querySelector('[data-acao="excluir"]').onclick = (e) => { e.stopPropagation(); excluirVeiculo(v.id); };
    c.onclick = (e) => { if (e.target.closest('button')) return; veiculoAberto = v.id; render(); };
    l.appendChild(c);
  });
}

function renderBauVeiculo() {
  const v = veiculos.find(x => x.id === veiculoAberto);
  if (!v) { veiculoAberto = null; return render(); }
  if (isCliente() && v.donoUid !== uidAtual()) { alert('❌ Acesso negado.'); veiculoAberto = null; return render(); }

  const btnV = document.createElement('button'); btnV.className = 'voltar'; btnV.textContent = '← Voltar pra Garagem';
  btnV.onclick = () => { veiculoAberto = null; render(); }; conteudoEl.appendChild(btnV);

  const its = itens.filter(i => i.veiculoId === v.id), peso = calcularPeso(its), pct = v.capacidade > 0 ? Math.min((peso/v.capacidade)*100,100) : 0;
  const cd = document.createElement('div'); cd.className = 'capacidade';
  cd.innerHTML = `<div class="capacidade-topo"><strong>${iconeTipo(v.tipo)} ${v.nome}${v.vaga?` • ${v.vaga}`:''}</strong><button id="btnEditCapV">⚙️ Cap</button></div>
    <div class="capacidade-barra"><div class="capacidade-preenchida ${peso>v.capacidade?'cheio':''}" style="width:${pct}%"></div></div>
    <div class="capacidade-texto">${peso.toFixed(2)} / ${v.capacidade} kg • ${its.length} itens</div>`;
  conteudoEl.appendChild(cd);
  cd.querySelector('#btnEditCapV').onclick = () => abrirModalCapVeic(v.id);

  const bar = document.createElement('div'); bar.className = 'barra';
  bar.innerHTML = `<input type="text" id="busca" placeholder="🔍 Buscar..." /><button id="btnNovo">➕ Novo item</button>`;
  conteudoEl.appendChild(bar); bar.querySelector('#btnNovo').onclick = () => abrirModal();
  bar.querySelector('#busca').oninput = (e) => { const f = e.target.value.toLowerCase(), l = document.getElementById('lista'); if (!l) return; const a = ordenarItens(its.filter(i => i.nome.toLowerCase().includes(f))); l.innerHTML = ''; if (!a.length) l.innerHTML = '<div class="vazio">Vazio.</div>'; else a.forEach(i => l.appendChild(criarCardItem(i))); };
  conteudoEl.appendChild(criarBarraOrdenacao());
  const l = document.createElement('main'); l.id = 'lista'; conteudoEl.appendChild(l);
  const a = ordenarItens(its); if (!a.length) l.innerHTML = '<div class="vazio">Vazio.</div>'; else a.forEach(i => l.appendChild(criarCardItem(i)));
}

function iconeTipo(t) { return {carro:'🚗',moto:'🏍️',helicoptero:'🚁',aviao:'✈️',barco:'🚤',outro:'📦'}[t] || '🚗'; }

function criarCardItem(item) {
  const c = document.createElement('div'); c.className = 'card-item';
  const cat = CATEGORIAS.find(x => x.id === item.categoria);
  const pI = (Number(item.qtd) * Number(item.peso || 0)).toFixed(2), pu = Number(item.preco || 0), vt = (pu * Number(item.qtd || 0)).toFixed(0);
  const lP = pu > 0 ? `<div style="font-size:0.75rem; color:#00c853; margin-top:2px;">💰 R$ ${pu.toFixed(2)}/un • Total: R$ ${vt}</div>` : '';
  const pE = isAdmin() || (isCliente() && (veiculoAberto ? item.donoUid === uidAtual() : (item.bau === 'casa' && item.donoUid === uidAtual())));
  const pA = pE;
  
  c.innerHTML = `<div class="icone">${item.foto?`<img src="${item.foto}"/>`:(item.emoji||'📦')}</div>
    <div class="info"><h3>${item.nome}</h3><span>${cat?cat.nome:'Outros'} • ${pI} kg</span>${lP}</div>
    <div class="qtd">x${item.qtd}</div>
    <div class="acoes">${pE ? `<button data-acao="editar">✏️</button>` : ''}${pA ? `<button data-acao="excluir">🗑️</button>` : ''}</div>`;
  if (pE) c.querySelector('[data-acao="editar"]').onclick = () => abrirModal(item);
  if (pA) c.querySelector('[data-acao="excluir"]').onclick = () => excluir(item.id);
  return c;
}

// ===== MODAL ITEM =====
function abrirModal(item=null) {
  editandoId = item ? item.id : null; fotoTemp = item ? item.foto : null; itemBaseSelecionado = null;
  ['itemNome', 'itemCategoria', 'itemPeso', 'itemPreco', 'itemEmoji', 'itemFoto'].forEach(id => { const e = document.getElementById(id); if (e) e.disabled = !isAdmin(); });
  document.getElementById('modalTitulo').textContent = item ? 'Editar item' : 'Novo item';
  document.getElementById('telaEscolha').style.display = item ? 'none' : 'block';
  document.getElementById('telaForm').style.display = item ? 'block' : 'none';
  document.getElementById('btnVoltar').style.display = item ? 'none' : 'block';

  let sd = document.getElementById('selDonoItem');
  if (isAdmin() && !item && clientesDisponiveis.length) {
    if (!sd) {
      sd = document.createElement('div'); sd.id = 'wrapSelDonoItem';
      sd.innerHTML = `<label>👤 Dono (cliente)</label><select id="selDonoItem"></select>`;
      const f = document.getElementById('telaForm'); f.insertBefore(sd, f.firstChild);
    }
    const s = document.getElementById('selDonoItem');
    s.innerHTML = clientesDisponiveis.map(c => `<option value="${c.uid}">${c.email || c.uid}</option>`).join('');
    if (clienteSelecionadoAdmin) s.value = clienteSelecionadoAdmin;
  } else { const w = document.getElementById('wrapSelDonoItem'); if (w) w.remove(); }

  if (item) {
    document.getElementById('itemNome').value = item.nome; document.getElementById('itemQtd').value = item.qtd;
    document.getElementById('itemCategoria').value = item.categoria; document.getElementById('itemPeso').value = item.peso || 0;
    if(document.getElementById('itemPreco')) document.getElementById('itemPreco').value = item.preco || 0;
    document.getElementById('itemEmoji').value = item.emoji || '';
    document.getElementById('preview').innerHTML = item.foto ? `<img src="${item.foto}"/>` : '';
  } else { document.getElementById('buscaItem').value = ''; montarListaEscolha(''); }
  document.getElementById('itemFoto').value = '';
  document.getElementById('modal').classList.remove('escondido');
}

function montarListaEscolha(busca='') {
  const l = document.getElementById('listaItens'); l.innerHTML = '';
  const f = busca.toLowerCase();
  CATEGORIAS.forEach(cat => {
    const dC = BASE_ITENS.filter(i => i.cat === cat.id && i.nome.toLowerCase().includes(f));
    if (!dC.length) return;
    const t = document.createElement('div'); t.className = 'cat-titulo'; t.textContent = cat.nome; l.appendChild(t);
    dC.forEach(it => {
      const d = document.createElement('div'); d.className = 'item-opcao';
      d.innerHTML = `<span>${it.emoji} ${it.nome}</span><span class="peso">${it.peso} kg</span>`;
      d.onclick = () => escolherItemBase(it); l.appendChild(d);
    });
  });
  if (isAdmin()) {
    const p = document.createElement('div'); p.className = 'item-opcao personalizado';
    p.innerHTML = `<span>➕ Personalizado</span>`; p.onclick = () => escolherItemBase(null); l.appendChild(p);
  }
}

function escolherItemBase(it) {
  itemBaseSelecionado = it;
  document.getElementById('telaEscolha').style.display = 'none'; document.getElementById('telaForm').style.display = 'block';
  document.getElementById('btnVoltar').style.display = 'block';
  if (it) {
    document.getElementById('itemNome').value = it.nome; document.getElementById('itemCategoria').value = it.cat;
    document.getElementById('itemPeso').value = it.peso;
    if(document.getElementById('itemPreco')) document.getElementById('itemPreco').value = it.preco || 0;
    document.getElementById('itemEmoji').value = it.emoji || '';
  } else {
    document.getElementById('itemNome').value = ''; document.getElementById('itemCategoria').value = 'outros';
    document.getElementById('itemPeso').value = 0;
    if(document.getElementById('itemPreco')) document.getElementById('itemPreco').value = 0;
    document.getElementById('itemEmoji').value = '';
  }
  document.getElementById('itemQtd').value = 1;
}
function voltarEscolha() {
  document.getElementById('telaEscolha').style.display = 'block'; document.getElementById('telaForm').style.display = 'none';
  document.getElementById('btnVoltar').style.display = 'none'; montarListaEscolha(document.getElementById('buscaItem').value);
}
function fecharModal() { document.getElementById('modal').classList.add('escondido'); editandoId = null; fotoTemp = null; itemBaseSelecionado = null; }

async function salvar() {
  const qtd = parseInt(document.getElementById('itemQtd').value) || 1;
  if (editandoId) {
    const it = itens.find(i => i.id === editandoId);
    if (!it) { fecharModal(); return; }
    if (isAdmin()) {
      const n = document.getElementById('itemNome').value.trim(), c = document.getElementById('itemCategoria').value, p = parseFloat(document.getElementById('itemPeso').value) || 0, e = document.getElementById('itemEmoji').value.trim(), pr = parseFloat(document.getElementById('itemPreco')?.value) || 0;
      if (!n) { alert('Digite o nome!'); return; }
      await fsUpdateItem(it.id, { nome: n, qtd, categoria: c, peso: p, emoji: e, preco: pr, foto: fotoTemp });
    } else await fsUpdateItem(it.id, { qtd });
  } else {
    const n = document.getElementById('itemNome').value.trim(), c = document.getElementById('itemCategoria').value, p = parseFloat(document.getElementById('itemPeso').value) || 0, e = document.getElementById('itemEmoji').value.trim(), pr = parseFloat(document.getElementById('itemPreco')?.value) || 0;
    if (!n) { alert('Digite o nome!'); return; }
    let d = uidAtual();
    if (isAdmin()) { const s = document.getElementById('selDonoItem'); if (s && s.value) d = s.value; else if (clienteSelecionadoAdmin) d = clienteSelecionadoAdmin; }
    await fsAddItem({ nome: n, qtd, categoria: c, peso: p, emoji: e, preco: pr, foto: fotoTemp, bau: veiculoAberto ? null : abaAtual, veiculoId: veiculoAberto || null, donoUid: d });
  }
  fecharModal();
}
async function excluir(id) { if (!confirm('Excluir?')) return; await fsDeleteItem(id); }

// ===== MODAL VEÍCULO =====
function abrirModalVeiculo(v=null) {
  editandoVeicId = v ? v.id : null;
  document.getElementById('modalVeiculoTitulo').textContent = v ? 'Editar veículo' : 'Novo veículo';
  document.getElementById('veicNome').value = v ? v.nome : ''; document.getElementById('veicTipo').value = v ? v.tipo : 'carro';
  document.getElementById('veicVaga').value = v ? (v.vaga||'') : ''; document.getElementById('veicCap').value = v ? v.capacidade : 500;

  let sd = document.getElementById('selDonoVeic');
  if (isAdmin() && !v && clientesDisponiveis.length) {
    if (!sd) {
      const w = document.createElement('div'); w.id = 'wrapSelDonoVeic';
      w.innerHTML = `<label>👤 Dono (cliente)</label><select id="selDonoVeic"></select>`;
      const c = document.querySelector('#modalVeiculo .modal-conteudo'); c.insertBefore(w, c.querySelector('.botoes'));
    }
    const s = document.getElementById('selDonoVeic'); s.innerHTML = clientesDisponiveis.map(c => `<option value="${c.uid}">${c.email || c.uid}</option>`).join('');
  } else { const w = document.getElementById('wrapSelDonoVeic'); if (w) w.remove(); }
  document.getElementById('modalVeiculo').classList.remove('escondido');
}
function fecharModalVeiculo() { document.getElementById('modalVeiculo').classList.add('escondido'); editandoVeicId = null; }

async function salvarVeiculo() {
  const n = document.getElementById('veicNome').value.trim(), t = document.getElementById('veicTipo').value, vg = document.getElementById('veicVaga').value.trim(), c = parseInt(document.getElementById('veicCap').value) || 0;
  if (!n) { alert('Digite o nome!'); return; }
  if (editandoVeicId) {
    const v = veiculos.find(x => x.id === editandoVeicId);
    if (isCliente() && v.donoUid !== uidAtual()) { alert('❌ Acesso negado.'); return; }
    await fsUpdateVeiculo(v.id, { nome: n, tipo: t, vaga: vg, capacidade: c });
  } else {
    let d = uidAtual();
    if (isAdmin()) { const s = document.getElementById('selDonoVeic'); if (s && s.value) d = s.value; }
    await fsAddVeiculo({ nome: n, tipo: t, vaga: vg, capacidade: c, donoUid: d });
  }
  fecharModalVeiculo();
}
async function excluirVeiculo(id) {
  const v = veiculos.find(x => x.id === id);
  if (isCliente() && v.donoUid !== uidAtual()) { alert('❌ Acesso negado.'); return; }
  if (!confirm('Excluir este veículo e os itens?')) return;
  await fsDeleteVeiculo(id);
}

// ===== MODAL CAPACIDADE =====
let capEditando = null;
function abrirModalCap(bauId) { capEditando = bauId; document.getElementById('capValor').value = capacidades[bauId] || 0; document.getElementById('modalCap').classList.remove('escondido'); }
function abrirModalCapVeic(veicId) { capEditando = 'veic:' + veicId; const v = veiculos.find(x => x.id === veicId); document.getElementById('capValor').value = v.capacidade; document.getElementById('modalCap').classList.remove('escondido'); }
function fecharModalCap() { document.getElementById('modalCap').classList.add('escondido'); capEditando = null; }
async function salvarCap() {
  const v = parseInt(document.getElementById('capValor').value) || 0;
  if (capEditando.startsWith('veic:')) await fsUpdateVeiculo(capEditando.replace('veic:',''), { capacidade: v });
  else await fsSetConfig('capacidades', { ...capacidades, [capEditando]: v });
  fecharModalCap();
}

// ===== CONFIGURAÇÕES =====
function renderConfiguracoes() {
  const itensL = itens.length, veicsL = veiculos.length, marcsL = marcadoresMapa.length, tiposL = tiposPonto.length;
  const temaAt = localStorage.getItem('tema_rp') || 'escuro', corAt = localStorage.getItem('cor_marcadores') !== 'sem-cor';

  const d = document.createElement('div');
  d.innerHTML = `
    <div class="config-secao"><h2>🎨 Tema</h2>
      <div class="temas-selector">
        <div class="tema-opcao ${temaAt==='escuro'?'ativo':''}" data-t="escuro"><div class="icone">🌙</div><div class="nome">Escuro</div></div>
        <div class="tema-opcao ${temaAt==='claro'?'ativo':''}" data-t="claro"><div class="icone">☀️</div><div class="nome">Claro</div></div>
        <div class="tema-opcao ${temaAt==='neon'?'ativo':''}" data-t="neon"><div class="icone">💜</div><div class="nome">Neon</div></div>
      </div>
    </div>
    ${isAdmin()?`
    <div class="config-secao"><h2>🎯 Marcadores</h2>
      <div class="config-botoes">
        <button id="btnComCor" style="background:${corAt?'var(--azul)':'var(--bg-3)'};color:${corAt?'white':'var(--texto)'};">🎨 Com cor</button>
        <button id="btnSemCor" style="background:${!corAt?'var(--azul)':'var(--bg-3)'};color:${!corAt?'white':'var(--texto)'};">✨ Só emoji</button>
      </div>
    </div>`:''}
    <div class="config-secao"><h2>📤 Exportar</h2>
      <div class="config-botoes"><button class="btn-exportar" id="btnExportar">📤 Backup</button></div>
    </div>
    ${isAdmin()?`
    <div class="config-secao"><h2>☁️ Migrar local</h2>
      <div class="config-botoes"><button id="btnMigrar" style="background:#00c853;color:white;">☁️ Migrar pra nuvem</button></div>
    </div>`:''}
    <div class="config-secao"><h2>📊 Stats</h2>
      <div class="config-info">📦 <strong>${itensL}</strong> itens<br>🚗 <strong>${veicsL}</strong> veículos<br>📍 <strong>${marcsL}</strong> pontos<br>🏷️ <strong>${tiposL}</strong> tipos</div>
    </div>`;
  conteudoEl.appendChild(d);

  d.querySelectorAll('.tema-opcao').forEach(el => { el.onclick = () => { aplicarTema(el.dataset.t); render(); }; });
  if (isAdmin()) {
    const bC = d.querySelector('#btnComCor'), bS = d.querySelector('#btnSemCor');
    if (bC) bC.onclick = () => { localStorage.setItem('cor_marcadores', 'com-cor'); render(); if (map) { marcadoresLeaflet.forEach(x => map.removeLayer(x.marker)); marcadoresLeaflet = []; marcadoresMapa.forEach(m => desenharMarcador(m)); } };
    if (bS) bS.onclick = () => { localStorage.setItem('cor_marcadores', 'sem-cor'); render(); if (map) { marcadoresLeaflet.forEach(x => map.removeLayer(x.marker)); marcadoresLeaflet = []; marcadoresMapa.forEach(m => desenharMarcador(m)); } };
    const bM = d.querySelector('#btnMigrar'); if (bM) bM.onclick = migrarLocalParaFirestore;
  }
  d.querySelector('#btnExportar').onclick = exportarBackup;
  renderSecaoSom();
}

// ===== EXPORTAR =====
async function exportarBackup() {
  const b = { versao: 2, data: new Date().toISOString(), itens, capacidades, veiculos, tiposPonto, marcadoresMapa, tiposVisiveis, tema: localStorage.getItem('tema_rp') || 'escuro', corMarcadores: localStorage.getItem('cor_marcadores') || 'com-cor' };
  const j = JSON.stringify(b, null, 2), n = `inventario-rp-backup-${new Date().toISOString().slice(0,10)}.json`;
  try {
    if (window.Capacitor && window.Capacitor.Plugins) {
      const P = window.Capacitor.Plugins;
      if (P.Filesystem && P.Share) {
        const Fs = P.Filesystem, Sh = P.Share, Dir = Fs.Directory, Enc = Fs.Encoding, cache = (Dir && Dir.Cache) ? Dir.Cache : 'CACHE';
        await Fs.writeFile({ path: n, data: j, directory: cache, encoding: Enc ? Enc.UTF8 : 'utf8' });
        const u = await Fs.getUri({ path: n, directory: cache });
        await Sh.share({ title: 'Backup', text: 'Salvar', url: u.uri, dialogTitle: 'Salvar' });
        return;
      }
    }
  } catch (e) {}
  downloadFallback(j, n);
}
function downloadFallback(j, n) {
  const b = new Blob([j], { type: 'application/json' }), u = URL.createObjectURL(b), a = document.createElement('a');
  a.href = u; a.download = n; document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(u); alert('✅ Backup gerado!');
}

// ===== MIGRAR =====
async function migrarLocalParaFirestore() {
  if (!confirm('Isso vai enviar os dados locais pro Firestore. Continuar?')) return;
  const li = JSON.parse(localStorage.getItem('itens_rp_v2') || '[]'), lv = JSON.parse(localStorage.getItem('veiculos_rp_v2') || '[]'), lm = JSON.parse(localStorage.getItem('marcadores_mapa') || '[]'), lc = JSON.parse(localStorage.getItem('caps_rp_v2') || 'null'), lt = JSON.parse(localStorage.getItem('tipos_ponto_rp') || 'null');
  const b = FS().batch();
  li.forEach(i => { const r = FS().collection('itens').doc(); b.set(r, { nome: i.nome, qtd: i.qtd, categoria: i.categoria, peso: i.peso||0, emoji: i.emoji||'', preco: i.preco||0, foto: i.foto||null, bau: i.bau||null, veiculoId: i.veiculoId||null, donoUid: i.criadoPor||uidAtual(), criadoPor: uidAtual(), criadoEm: firebase.firestore.FieldValue.serverTimestamp() }); });
  lv.forEach(v => { const r = FS().collection('veiculos').doc(); b.set(r, { nome: v.nome, tipo: v.tipo, vaga: v.vaga||'', capacidade: v.capacidade||0, donoUid: v.criadoPor||uidAtual(), criadoPor: uidAtual(), criadoEm: firebase.firestore.FieldValue.serverTimestamp() }); });
  lm.forEach(m => { const r = FS().collection('marcadores').doc(); b.set(r, { nome: m.nome, tipoId: m.tipoId, numeroFac: m.numeroFac||'', producao: m.producao||'', numero: m.numero||'', dono: m.dono||'', descricao: m.descricao||'', foto: m.foto||null, lat: m.lat, lng: m.lng, refId: m.refId||'', bau: m.bau||'', tipo: m.tipo||'bau', donoUid: m.criadoPor||uidAtual(), criadoPor: uidAtual(), criadoEm: firebase.firestore.FieldValue.serverTimestamp() }); });
  if (lc) b.set(FS().collection('config').doc('capacidades'), lc);
  if (lt) b.set(FS().collection('config').doc('tiposPonto'), { lista: lt });
  await b.commit(); alert('✅ Migrado!');
}

// ===== MAPA =====
const ESTILOS_MAPA = ['styleAtlas', 'styleGrid'];
const CAMINHOS_MAPA = { styleAtlas: 'mapStyles/styleAtlas/map.png', styleGrid: 'mapStyles/styleGrid/map.png' };
const MAP_BOUNDS = [[0, 0], [-2000, 2000]];

document.getElementById('btnFecharMapa').onclick = () => { document.getElementById('mapa-container').classList.remove('ativo'); modoAdicionar = false; document.getElementById('btnModoAdd').textContent = '📍 Marcar Local'; document.getElementById('btnModoAdd').classList.remove('perigo'); document.getElementById('buscaResultados').classList.add('escondido'); };
document.getElementById('btnModoAdd').onclick = () => { if (isCliente() && clienteJaTemCasa()) { alert('❌ Você já tem uma casa.'); return; } modoAdicionar = !modoAdicionar; document.getElementById('btnModoAdd').textContent = modoAdicionar ? '❌ Cancelar' : '📍 Marcar Local'; document.getElementById('btnModoAdd').classList.toggle('perigo', modoAdicionar); if (modoAdicionar) alert('Clique no mapa!'); };
document.getElementById('btnTrocarEstilo').onclick = () => { const i = ESTILOS_MAPA.indexOf(estiloAtual); estiloAtual = ESTILOS_MAPA[(i + 1) % ESTILOS_MAPA.length]; if (map && camadaMapa) { map.removeLayer(camadaMapa); camadaMapa = L.imageOverlay(CAMINHOS_MAPA[estiloAtual], MAP_BOUNDS).addTo(map); } };
document.getElementById('btnToggleCor').onclick = () => { const n = (localStorage.getItem('cor_marcadores') === 'com-cor') ? 'sem-cor' : 'com-cor'; localStorage.setItem('cor_marcadores', n); if (map) { marcadoresLeaflet.forEach(x => map.removeLayer(x.marker)); marcadoresLeaflet = []; marcadoresMapa.forEach(m => desenharMarcador(m)); } document.getElementById('btnToggleCor').textContent = n === 'com-cor' ? '🎨 Marcadores' : '✨ Só Emoji'; };

function abrirMapa() {
  const bT = document.getElementById('btnGerenciarTipos'); if (bT) bT.style.display = isAdmin() ? '' : 'none';
  document.getElementById('mapa-container').classList.add('ativo');
  if (!map) {
    map = L.map('mapa', { crs: L.CRS.Simple, minZoom: -2, maxZoom: 3, attributionControl: false, zoomSnap: 0.25, maxBounds: MAP_BOUNDS, maxBoundsViscosity: 1.0 });
    camadaMapa = L.imageOverlay(CAMINHOS_MAPA[estiloAtual], MAP_BOUNDS).addTo(map);
    map.fitBounds(MAP_BOUNDS);
    marcadoresMapa.forEach(m => desenharMarcador(m));
    map.on('click', (e) => { if (modoAdicionar) { marcadorTempLatLng = e.latlng; abrirModalMarcador(); } });
  }
  const c = localStorage.getItem('cor_marcadores') || 'com-cor';
  document.getElementById('btnToggleCor').textContent = c === 'com-cor' ? '🎨 Marcadores' : '✨ Só Emoji';
  atualizarLegenda();
  setTimeout(() => { if (map) { map.invalidateSize(); if (marcadoresLeaflet.length > 0) { const v = marcadoresLeaflet.filter(m => tiposVisiveis.includes(m.tipoId)); if (v.length > 0) map.fitBounds(L.featureGroup(v.map(m => m.marker)).getBounds().pad(0.3)); } } }, 150);
}

function desenharMarcador(m) {
  if (isCliente()) { const u = uidAtual(); if (m.donoUid !== u) return; }
  const t = tiposPonto.find(x => x.id === m.tipoId) || tiposPonto[0], v = tiposVisiveis.includes(m.tipoId), s = localStorage.getItem('cor_marcadores') === 'sem-cor';
  const icon = L.divIcon({ className: 'marcador-custom', html: `<div class="marcador-ponto ${s?'sem-cor':''}" style="${s?'':'background:'+t.cor+';'}">${t.emoji}</div>`, iconSize: [32,32], iconAnchor: [16,16], popupAnchor: [0,-16] });
  const mk = L.marker([m.lat, m.lng], { icon });
  const tT = m.numeroFac ? `${t.emoji} ${t.nome} ${m.numeroFac}` : `${t.emoji} ${t.nome}`;
  let d = '';
  if (m.foto) d += `<img src="${m.foto}" class="popup-foto" />`;
  if (m.producao) d += `<div class="popup-producao">🎯 ${m.producao}</div>`;
  if (m.numero) d += `<div class="popup-linha">📞 ${m.numero}</div>`;
  if (m.dono) d += `<div class="popup-linha">👤 ${m.dono}</div>`;
  if (m.descricao) d += `<div class="popup-desc">📝 ${m.descricao}</div>`;
  const p = isAdmin() || m.donoUid === uidAtual();
  mk.bindPopup(`<div class="popup-ponto"><strong>${m.nome}</strong><div class="tipo">${tT}</div>${d}
    ${m.refId?`<button onclick="abrirBauDoMapa('${m.refId}', '${m.bau}')">📦 Baú</button>`:''}
    ${p?`<button onclick="editarMarcador('${m.id}')">✏️ Editar</button>`:''}
    ${p?`<button class="perigo" onclick="removerMarcador('${m.id}')">🗑️ Excluir</button>`:''}
  </div>`);
  if (v) mk.addTo(map);
  marcadoresLeaflet.push({ id: m.id, marker: mk, tipoId: m.tipoId });
}

function editarMarcador(id) {
  const m = marcadoresMapa.find(x => x.id === id); if (!m) return;
  if (isCliente() && m.donoUid !== uidAtual()) { alert('❌ Acesso negado.'); return; }
  if (map) map.closePopup(); abrirModalMarcador(m);
}
window.editarMarcador = editarMarcador; window.removerMarcador = removerMarcador; window.abrirBauDoMapa = abrirBauDoMapa;

function atualizarLegenda() {
  const l = document.getElementById('legenda-lista'); if (!l) return; l.innerHTML = '';
  const g = {};
  tiposPonto.forEach(t => { const c = t.categoria || 'Outros'; if (!g[c]) g[c] = []; g[c].push(t); });
  Object.keys(g).sort().forEach(cat => {
    const d = document.createElement('div'); d.className = 'cat-grupo';
    const ti = document.createElement('div'); ti.className = 'cat-titulo-leg'; ti.textContent = cat; d.appendChild(ti);
    g[cat].forEach(t => {
      const cnt = marcadoresMapa.filter(m => m.tipoId === t.id).length;
      const it = document.createElement('label'); it.className = 'legenda-item';
      it.innerHTML = `<input type="checkbox" ${tiposVisiveis.includes(t.id)?'checked':''} data-tipo="${t.id}" /><span class="emoji">${t.emoji}</span><span class="cor" style="background:${t.cor};"></span><span class="nome">${t.nome}</span><span class="count">${cnt}</span>`;
      it.querySelector('input').onchange = (e) => toggleTipoVisivel(t.id, e.target.checked); d.appendChild(it);
    });
    l.appendChild(d);
  });
}
function toggleTipoVisivel(tipoId, v) {
  if (v) { if (!tiposVisiveis.includes(tipoId)) tiposVisiveis.push(tipoId); } else tiposVisiveis = tiposVisiveis.filter(id => id !== tipoId);
  localStorage.setItem('tipos_visiveis_rp', JSON.stringify(tiposVisiveis));
  marcadoresLeaflet.forEach(m => { if (tiposVisiveis.includes(m.tipoId)) { if (!map.hasLayer(m.marker)) m.marker.addTo(map); } else { if (map.hasLayer(m.marker)) map.removeLayer(m.marker); } });
}
document.getElementById('btnMarcarTodos').onclick = () => { tiposVisiveis = tiposPonto.map(t => t.id); localStorage.setItem('tipos_visiveis_rp', JSON.stringify(tiposVisiveis)); atualizarLegenda(); marcadoresLeaflet.forEach(m => { if (!map.hasLayer(m.marker)) m.marker.addTo(map); }); };
document.getElementById('btnDesmarcarTodos').onclick = () => { tiposVisiveis = []; localStorage.setItem('tipos_visiveis_rp', JSON.stringify(tiposVisiveis)); atualizarLegenda(); marcadoresLeaflet.forEach(m => { if (map.hasLayer(m.marker)) map.removeLayer(m.marker); }); };

// ===== BUSCA MAPA =====
const bME = document.getElementById('buscaMapa'), bRE = document.getElementById('buscaResultados');
bME.oninput = () => {
  const t = bME.value.trim().toLowerCase();
  if (!t) { bRE.classList.add('escondido'); return; }
  const r = marcadoresMapa.filter(m => {
    if (isCliente()) { if (m.donoUid !== uidAtual()) return false; }
    const tp = tiposPonto.find(x => x.id === m.tipoId), nT = tp ? tp.nome : '';
    return (m.nome||'').toLowerCase().includes(t) || (m.dono||'').toLowerCase().includes(t) || (m.descricao||'').toLowerCase().includes(t) || (m.numero||'').toLowerCase().includes(t) || (m.numeroFac||'').toLowerCase().includes(t) || (m.producao||'').toLowerCase().includes(t) || nT.toLowerCase().includes(t);
  });
  bRE.innerHTML = ''; bRE.classList.remove('escondido');
  if (!r.length) { bRE.innerHTML = '<div class="sem-resultado">Nada achado 🔍</div>'; return; }
  r.slice(0, 20).forEach(m => {
    const tp = tiposPonto.find(x => x.id === m.tipoId) || { emoji:'📍', nome:'', cor:'#4a7dff' };
    const it = document.createElement('div'); it.className = 'resultado-item';
    let s = tp.nome; if (m.numeroFac) s += ` • Nº ${m.numeroFac}`; if (m.producao) s += ` • ${m.producao}`; if (m.dono) s += ` • ${m.dono}`;
    it.innerHTML = `<span class="emoji">${tp.emoji}</span><div class="info-res"><strong>${m.nome}</strong><span>${s}</span></div>`;
    it.onclick = () => irParaMarcador(m.id); bRE.appendChild(it);
  });
};
function irParaMarcador(id) {
  const m = marcadoresMapa.find(x => x.id === id); if (!m || !map) return;
  if (!tiposVisiveis.includes(m.tipoId)) { tiposVisiveis.push(m.tipoId); localStorage.setItem('tipos_visiveis_rp', JSON.stringify(tiposVisiveis)); atualizarLegenda(); const e = marcadoresLeaflet.find(x => x.id === m.id); if (e && !map.hasLayer(e.marker)) e.marker.addTo(map); }
  map.setView([m.lat, m.lng], 1, { animate: true });
  setTimeout(() => { const e = marcadoresLeaflet.find(x => x.id === m.id); if (e) e.marker.openPopup(); }, 400);
  bRE.classList.add('escondido'); bME.value = '';
}
document.addEventListener('click', (e) => { if (!e.target.closest('#mapa-busca')) bRE.classList.add('escondido'); });

// ===== MODAL MARCADOR =====
function abrirModalMarcador(mEditar = null) {
  editandoMarcId = mEditar ? mEditar.id : null; fotoMarcTemp = mEditar ? (mEditar.foto || null) : null;
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
  const sR = document.getElementById('marcRef'); sR.innerHTML = '<option value="">— Nenhum —</option>';
  if (isAdmin()) { sR.innerHTML += '<option value="casa|bau">🏠 Casa</option><option value="moto|bau">🏍️ Moto</option>'; veiculos.forEach(v => { sR.innerHTML += `<option value="${v.id}|veiculo">${iconeTipo(v.tipo)} ${v.nome}</option>`; }); }
  else { sR.innerHTML += '<option value="casa|bau">🏠 Casa</option>'; veiculos.filter(v => v.donoUid === uidAtual()).forEach(v => { sR.innerHTML += `<option value="${v.id}|veiculo">${iconeTipo(v.tipo)} ${v.nome}</option>`; }); }
  if (mEditar && mEditar.refId) { sR.value = mEditar.tipo === 'veiculo' ? `${mEditar.refId}|veiculo` : `${mEditar.refId}|bau`; }

  let sd = document.getElementById('selDonoMarc');
  if (isAdmin() && !mEditar && clientesDisponiveis.length) {
    if (!sd) { const w = document.createElement('div'); w.id = 'wrapSelDonoMarc'; w.innerHTML = `<label>👤 Dono (cliente)</label><select id="selDonoMarc"></select>`; const c = document.querySelector('#modalMarcador .modal-conteudo'); c.insertBefore(w, c.querySelector('.botoes')); }
    const s = document.getElementById('selDonoMarc'); s.innerHTML = clientesDisponiveis.map(c => `<option value="${c.uid}">${c.email || c.uid}</option>`).join('');
  } else { const w = document.getElementById('wrapSelDonoMarc'); if (w) w.remove(); }
  document.getElementById('modalMarcador').classList.remove('escondido');
}
function fecharModalMarcador() { document.getElementById('modalMarcador').classList.add('escondido'); marcadorTempLatLng = null; editandoMarcId = null; fotoMarcTemp = null; }

async function salvarMarcador() {
  const n = document.getElementById('marcNome').value.trim(); if (!n) { alert('Digite o nome!'); return; }
  if (isCliente() && !editandoMarcId && clienteJaTemCasa()) { alert('❌ Você já tem uma casa.'); fecharModalMarcador(); return; }
  const tI = document.getElementById('marcTipo').value, nF = document.getElementById('marcNumeroFac').value.trim(), pr = document.getElementById('marcProducao').value, nu = document.getElementById('marcNumero').value.trim(), do_ = document.getElementById('marcDono').value.trim(), de = document.getElementById('marcDesc').value.trim();
  const r = document.getElementById('marcRef').value, p = r ? r.split('|') : ['', 'bau'], rI = p[0], tB = p[1] === 'veiculo' ? 'veiculo' : 'bau';
  if (editandoMarcId) {
    const m = marcadoresMapa.find(x => x.id === editandoMarcId);
    if (isCliente() && m.donoUid !== uidAtual()) { alert('❌ Acesso negado.'); return; }
    await fsUpdateMarcador(m.id, { nome: n, tipoId: tI, numeroFac: nF, producao: pr, numero: nu, dono: do_, descricao: de, foto: fotoMarcTemp, refId: rI, bau: rI, tipo: tB });
  } else {
    if (!marcadorTempLatLng) { fecharModalMarcador(); return; }
    let d = uidAtual(); if (isAdmin()) { const s = document.getElementById('selDonoMarc'); if (s && s.value) d = s.value; }
    await fsAddMarcador({ nome: n, tipoId: tI, numeroFac: nF, producao: pr, numero: nu, dono: do_, descricao: de, foto: fotoMarcTemp, lat: marcadorTempLatLng.lat, lng: marcadorTempLatLng.lng, refId: rI, bau: rI, tipo: tB, donoUid: d });
  }
  modoAdicionar = false; document.getElementById('btnModoAdd').textContent = '📍 Marcar Local'; document.getElementById('btnModoAdd').classList.remove('perigo'); fecharModalMarcador();
}
async function removerMarcador(id) {
  const m = marcadoresMapa.find(x => x.id === id); if (!m) return;
  if (isCliente() && m.donoUid !== uidAtual()) { alert('❌ Acesso negado.'); return; }
  if (!confirm('Excluir?')) return; await fsDeleteMarcador(id);
}
function abrirBauDoMapa(rI, b) { document.getElementById('mapa-container').classList.remove('ativo'); if (b === 'casa' || b === 'moto') { abaAtual = b; veiculoAberto = null; } else { abaAtual = 'garagem'; veiculoAberto = rI; } montarAbas(); render(); }

// ===== GERENCIAR TIPOS =====
document.getElementById('btnGerenciarTipos').onclick = () => { if (!isAdmin()) return; renderListaTipos(); document.getElementById('modalGerenciarTipos').classList.remove('escondido'); };
document.getElementById('btnFecharGerenciar').onclick = () => { document.getElementById('modalGerenciarTipos').classList.add('escondido'); };
document.getElementById('btnNovoTipo').onclick = () => { if (!isAdmin()) return; editandoTipoId = null; document.getElementById('modalTipoTitulo').textContent = 'Novo tipo'; document.getElementById('tipoNome').value = ''; document.getElementById('tipoEmoji').value = ''; document.getElementById('tipoCor').value = '#4a7dff'; document.getElementById('tipoCategoria').value = ''; document.getElementById('modalTipo').classList.remove('escondido'); };

function renderListaTipos() {
  const l = document.getElementById('listaTipos'); l.innerHTML = '';
  tiposPonto.forEach(t => {
    const it = document.createElement('div'); it.className = 'tipo-item';
    it.innerHTML = `<span class="emoji">${t.emoji}</span><span class="cor" style="background:${t.cor};"></span><div class="info"><strong>${t.nome}</strong><span>${t.categoria || 'Outros'}</span></div><button data-acao="editar" title="Editar">✏️</button><button data-acao="excluir" title="Excluir">🗑️</button>`;
    it.querySelector('[data-acao="editar"]').onclick = () => { editandoTipoId = t.id; document.getElementById('modalTipoTitulo').textContent = 'Editar tipo'; document.getElementById('tipoNome').value = t.nome; document.getElementById('tipoEmoji').value = t.emoji; document.getElementById('tipoCor').value = t.cor; document.getElementById('tipoCategoria').value = t.categoria || ''; document.getElementById('modalTipo').classList.remove('escondido'); };
    it.querySelector('[data-acao="excluir"]').onclick = async () => { if (!confirm(`Excluir o tipo "${t.nome}"?`)) return; tiposPonto = tiposPonto.filter(x => x.id !== t.id); await fsSetConfig('tiposPonto', { lista: tiposPonto }); tiposVisiveis = tiposVisiveis.filter(id => id !== t.id); localStorage.setItem('tipos_visiveis_rp', JSON.stringify(tiposVisiveis)); renderListaTipos(); atualizarLegenda(); };
    l.appendChild(it);
  });
}
document.getElementById('btnCancelarTipo').onclick = () => { document.getElementById('modalTipo').classList.add('escondido'); };
document.getElementById('btnSalvarTipo').onclick = async () => {
  if (!isAdmin()) return;
  const n = document.getElementById('tipoNome').value.trim(), e = document.getElementById('tipoEmoji').value.trim() || '📍', c = document.getElementById('tipoCor').value, cat = document.getElementById('tipoCategoria').value.trim() || 'Outros';
  if (!n) { alert('Digite o nome!'); return; }
  if (editandoTipoId) { const t = tiposPonto.find(x => x.id === editandoTipoId); Object.assign(t, { nome: n, emoji: e, cor: c, categoria: cat }); await fsSetConfig('tiposPonto', { lista: tiposPonto }); }
  else { const id = 'tipo_' + Date.now(); tiposPonto.push({ id, nome: n, emoji: e, cor: c, categoria: cat }); await fsSetConfig('tiposPonto', { lista: tiposPonto }); tiposVisiveis.push(id); localStorage.setItem('tipos_visiveis_rp', JSON.stringify(tiposVisiveis)); }
  document.getElementById('modalTipo').classList.add('escondido'); renderListaTipos();
};

// ===== CHAT GLOBAL - SIDEBAR =====
let unsubChat = null, chatMsgs = [], ultimoEnvioEm = 0, editandoMsgId = null, msgRespondendo = null;
let chatTamanho = 30, unsubLido = null;
const RATE_LIMIT_MS = 3000;

function toggleChatSidebar() {
  const sb = document.getElementById('chatSidebar');
  sb.classList.toggle('escondido');
  if (!sb.classList.contains('escondido')) {
    iniciarChatListener();
    setTimeout(() => { document.getElementById('chatInput').focus(); rolarChatFinal(); }, 100);
    marcarChatComoLido();
  } else {
    if (unsubChat) { unsubChat(); unsubChat = null; }
    if (unsubLido) { unsubLido(); unsubLido = null; }
  }
}

function iniciarChatListener() {
  if (unsubChat) unsubChat();
  unsubChat = FS().collection('chat_global').orderBy('criadoEm', 'desc').limit(chatTamanho).onSnapshot(snap => {
    chatMsgs = snap.docs.map(d => ({ id: d.id, ...d.data() })).reverse();
    renderChat();
  }, err => {
    document.getElementById('chatMensagens').innerHTML = '<div class="chat-vazio">❌ Erro ao carregar: ' + err.message + '</div>';
  });
}

function marcarChatComoLido() {
  if (unsubLido) unsubLido();
  if (!chatMsgs.length) return;
  const ult = chatMsgs[chatMsgs.length - 1];
  if (ult.autorUid !== uidAtual()) {
    FS().collection('usuarios').doc(uidAtual()).update({ ultimaLeituraChat: firebase.firestore.FieldValue.serverTimestamp() }).catch(()=>{});
  }
  atualizarBadgeChat();
}

function atualizarBadgeChat() {
  const badge = document.getElementById('navChatBadge');
  if (!badge) return;
  const ultLeitura = window.ultimaLeituraChatDoc ? window.ultimaLeituraChatDoc.toDate() : new Date(0);
  const naoLidas = chatMsgs.filter(m => m.autorUid !== uidAtual() && m.criadoEm && m.criadoEm.toDate() > ultLeitura).length;
  
  if (naoLidas > 0) {
    badge.textContent = naoLidas > 99 ? '99+' : naoLidas;
    badge.style.display = 'inline-block';
  } else {
    badge.style.display = 'none';
  }
}

function renderChat() {
  const box = document.getElementById('chatMensagens');
  if (!box) return;
  
  const estaNoFinal = box.scrollHeight - box.scrollTop - box.clientHeight < 100;
  if (!chatMsgs.length) { box.innerHTML = '<div class="chat-vazio">Nenhuma mensagem ainda. 👋</div>'; return; }

  const htmlParts = [];
  let ultimoDia = '', ultimoAutor = '', ultimaHora = 0;
  const uid = uidAtual(), admin = isAdmin();

  chatMsgs.forEach((m, i) => {
    const minha = m.autorUid === uid;
    const estaEditando = editandoMsgId === m.id;
    const hora = m.criadoEm && m.criadoEm.toDate ? m.criadoEm.toDate() : new Date();
    
    // Separador de data
    const diaStr = hora.toLocaleDateString('pt-BR');
    if (diaStr !== ultimoDia) {
      htmlParts.push(`<div class="chat-separador-data">${diaStr === new Date().toLocaleDateString('pt-BR') ? 'Hoje' : diaStr}</div>`);
      ultimoDia = diaStr;
      ultimoAutor = ''; // força mostrar header
    }

    // Agrupar mensagens do mesmo autor em menos de 2 min
    const consecutiva = (m.autorUid === ultimoAutor) && (hora.getTime() - ultimaHora < 120000);
    if (!consecutiva) ultimoAutor = m.autorUid;
    ultimaHora = hora.getTime();

    const horaStr = hora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    const editadaTag = m.editadaEm ? '<span class="chat-msg-editada">(editada)</span>' : '';
    
    // Avatar colorido
    const avatarCores = ['#ff4a4a', '#4a7dff', '#00c853', '#ffaa00', '#7c4dff', '#00bcd4'];
    let hash = 0; for (let j = 0; j < (m.autorEmail||'').length; j++) hash = m.autorEmail.charCodeAt(j) + ((hash << 5) - hash);
    const corAvatar = avatarCores[Math.abs(hash) % avatarCores.length];
    const letraAvatar = (m.autorEmail || '?')[0].toUpperCase();

    let textoHtml = '';
    if (estaEditando) {
      textoHtml = `<div class="chat-msg-texto editando"><textarea id="edit_${m.id}" style="width:100%;background:transparent;border:none;color:inherit;font-family:inherit;resize:none;">${escapeHtml(m.texto)}</textarea></div>`;
    } else {
      let txtFormatado = escapeHtml(m.texto);
      // Destacar menções
      if (m.mencoes) {
        m.mencoes.forEach(email => {
          txtFormatado = txtFormatado.replace(new RegExp('@' + escapeHtml(email), 'gi'), `<span class="mention">@${escapeHtml(email)}</span>`);
        });
      }
      textoHtml = `<div class="chat-msg-texto">${txtFormatado}</div>`;
    }

    let replyHtml = '';
    if (m.respostaA) {
      replyHtml = `<div class="chat-quote"><strong>${escapeHtml(m.respostaA.autorEmail)}</strong><span>${escapeHtml(m.respostaA.texto)}</span></div>`;
    }

    let acoesHtml = '';
    if (estaEditando) {
      acoesHtml = `<div class="chat-msg-acoes" style="opacity:1;"><button data-acao="salvar-edit">✅</button><button data-acao="cancelar-edit">❌</button></div>`;
    } else {
      acoesHtml = `<div class="chat-msg-acoes">`;
      acoesHtml += `<button data-acao="responder" title="Responder">↩️</button>`;
      if (minha) acoesHtml += `<button data-acao="editar" title="Editar">✏️</button>`;
      if (admin || minha) acoesHtml += `<button data-acao="apagar" title="Apagar">🗑️</button>`;
      if (admin && !minha) acoesHtml += `<button data-acao="moderar" title="Moderar">⚖️</button>`;
      acoesHtml += `</div>`;
    }

    htmlParts.push(`
      <div class="chat-msg-group ${minha ? 'minha' : ''}">
        ${!minha && !consecutiva ? `<div class="chat-msg-autor"><div class="chat-msg-avatar" style="background:${corAvatar}">${letraAvatar}</div>${m.autorTipo === 'admin' ? '👑 ' : ''}${escapeHtml(m.autorEmail)}</div>` : ''}
        <div class="chat-msg ${minha ? 'minha' : ''} ${consecutiva ? 'consecutiva' : ''}" data-id="${m.id}">
          ${replyHtml}
          ${textoHtml}
          <span class="chat-msg-hora">${horaStr}${editadaTag}</span>
          ${acoesHtml}
        </div>
      </div>
    `);
  });

  box.innerHTML = htmlParts.join('');
  
  // Binds
  chatMsgs.forEach(m => {
    const div = document.querySelector(`.chat-msg[data-id="${m.id}"]`);
    if (!div) return;
    if (editandoMsgId === m.id) {
      div.querySelector('[data-acao="salvar-edit"]').onclick = () => salvarEdicaoMsg(m.id);
      div.querySelector('[data-acao="cancelar-edit"]').onclick = () => { editandoMsgId = null; renderChat(); };
      const ta = div.querySelector('textarea');
      ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length);
      ta.onkeydown = (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); salvarEdicaoMsg(m.id); } };
    } else {
      const bR = div.querySelector('[data-acao="responder"]'); if (bR) bR.onclick = () => prepararResposta(m);
      const bE = div.querySelector('[data-acao="editar"]'); if (bE) bE.onclick = () => { editandoMsgId = m.id; renderChat(); };
      const bA = div.querySelector('[data-acao="apagar"]'); if (bA) bA.onclick = () => apagarMsg(m.id);
      const bM = div.querySelector('[data-acao="moderar"]'); if (bM) bM.onclick = () => abrirModeracao(m.autorUid, m.autorEmail);
    }
  });

  if (estaNoFinal) rolarChatFinal();
  else document.getElementById('btnNovasMsg').classList.remove('escondido');
  
  if (document.getElementById('chatSidebar').classList.contains('escondido') === false) marcarChatComoLido();
}

function rolarChatFinal() {
  const box = document.getElementById('chatMensagens');
  if (box) box.scrollTop = box.scrollHeight;
  document.getElementById('btnNovasMsg').classList.add('escondido');
}

function escapeHtml(s) { return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;'); }

// ===== ENVIAR MENSAGEM =====
async function enviarMsg() {
  const input = document.getElementById('chatInput');
  const texto = input.value.trim();
  if (!texto) return;

  const uid = uidAtual();
  if (isSilenciado(uid)) { alert('❌ Você está silenciado e não pode enviar mensagens.'); return; }
  if (isBanido(uid)) { alert('❌ Você foi banido do chat.'); return; }

  if (Date.now() - ultimoEnvioEm < RATE_LIMIT_MS) { alert(`⏱️ Espere um pouco...`); return; }

  const btn = document.getElementById('chatEnviar'); btn.disabled = true;
  try {
    const user = firebase.auth().currentUser;
    // Extrai menções
    const mencoes = [];
    const matches = texto.match(/@([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+)/g);
    if (matches) matches.forEach(m => mencoes.push(m.substring(1)));

    const msgData = {
      texto, autorUid: user.uid, autorEmail: user.email || 'Anônimo', autorTipo: window.tipoUsuario || 'cliente',
      criadoEm: firebase.firestore.FieldValue.serverTimestamp(), editadaEm: null,
      respostaA: msgRespondendo ? { id: msgRespondendo.id, autorEmail: msgRespondendo.autorEmail, texto: msgRespondendo.texto } : null,
      mencoes: mencoes
    };
    await FS().collection('chat_global').add(msgData);
    ultimoEnvioEm = Date.now();
    input.value = ''; input.style.height = 'auto';
    cancelarResposta(); fecharEmojiPicker();
    rolarChatFinal();
  } catch (err) { alert('❌ Erro: ' + err.message); }
  finally { btn.disabled = false; input.focus(); }
}

async function salvarEdicaoMsg(id) {
  const ta = document.getElementById(`edit_${id}`); if (!ta) return;
  const t = ta.value.trim(); if (!t) return;
  try {
    await FS().collection('chat_global').doc(id).update({ texto: t, editadaEm: firebase.firestore.FieldValue.serverTimestamp() });
    editandoMsgId = null; renderChat();
  } catch (err) { alert('❌ Erro: ' + err.message); }
}

async function apagarMsg(id) {
  if (!confirm('Apagar?')) return;
  try { await FS().collection('chat_global').doc(id).delete(); } catch (err) { alert('❌ Erro: ' + err.message); }
}

// ===== REPLY & MENTION =====
function prepararResposta(m) {
  msgRespondendo = m;
  const bar = document.getElementById('chatReplyBar');
  document.getElementById('chatReplyTexto').textContent = `Respondendo a ${m.autorEmail}: "${m.texto.substring(0,20)}..."`;
  bar.classList.remove('escondido');
  document.getElementById('chatInput').focus();
}
function cancelarResposta() { msgRespondendo = null; document.getElementById('chatReplyBar').classList.add('escondido'); }
document.getElementById('btnCancelarReply').onclick = cancelarResposta;
document.getElementById('btnNovasMsg').onclick = rolarChatFinal;

// ===== EMOJI PICKER =====
const emojis = ['😀','😃','😄','😁','😆','😅','😂','🤣','😊','😇','🙂','🙃','😉','😌','😍','🥰','😘','😗','😙','😚','😋','😛','😝','😜','🤪','🤨','🧐','🤓','😎','🤩','🥳','😏','😒','😞','😔','😟','😕','🙁','😣','😖','😫','😩','🥺','😢','😭','😤','😠','😡','🤬','🤯','😳','🥵','🥶','😱','😨','😰','😥','😓','🤗','🤔','🤭','🤫','🤥','😶','😐','😑','😬','🙄','😯','😦','😧','😮','😲','🥱','😴','🤤','😪','😵','🤐','🥴','🤢','🤮','🤧','😷','🤒','🤕'];
function toggleEmojiPicker() {
  const p = document.getElementById('emojiPicker');
  if (p.innerHTML === '') {
    emojis.forEach(e => {
      const b = document.createElement('button'); b.textContent = e;
      b.onclick = () => { const i = document.getElementById('chatInput'); i.value += e; i.focus(); };
      p.appendChild(b);
    });
  }
  p.classList.toggle('escondido');
}
document.getElementById('btnEmoji').onclick = (e) => { e.stopPropagation(); toggleEmojiPicker(); };
document.addEventListener('click', (e) => { if (!e.target.closest('#emojiPicker') && e.target.id !== 'btnEmoji') document.getElementById('emojiPicker').classList.add('escondido'); });

// ===== MENÇÃO =====
const chatInput = document.getElementById('chatInput');
chatInput.oninput = (e) => {
  chatInput.style.height = 'auto'; chatInput.style.height = Math.min(chatInput.scrollHeight, 120) + 'px';
  const val = chatInput.value, pos = chatInput.selectionStart;
  const textAntes = val.substring(0, pos);
  const match = textAntes.match(/@([a-zA-Z0-9._-]*)$/);
  
  if (match) {
    const termo = match[1].toLowerCase();
    const users = (window.todosUsuarios || []).filter(u => u.email && u.email.toLowerCase().includes(termo));
    const ml = document.getElementById('mentionList');
    ml.innerHTML = '';
    if (users.length > 0) {
      users.forEach(u => {
        const d = document.createElement('div'); d.textContent = u.email;
        d.onclick = () => {
          const novoVal = textAntes.replace(/@([a-zA-Z0-9._-]*)$/, `@${u.email} `) + val.substring(pos);
          chatInput.value = novoVal;
          chatInput.focus(); ml.classList.add('escondido');
        };
        ml.appendChild(d);
      });
      ml.classList.remove('escondido');
    } else ml.classList.add('escondido');
  } else document.getElementById('mentionList').classList.add('escondido');
};

// ===== MODERAÇÃO =====
function abrirModeracao(uid, email) {
  if (!isAdmin()) return;
  const acao = prompt(`Moderar ${email}:\n\n1 - Silenciar (10 min)\n2 - Banir do chat\n3 - Desbanir`);
  if (acao === '1') {
    const ate = new Date(); ate.setMinutes(ate.getMinutes() + 10);
    FS().collection('config').doc('moderacao').set({ silenciados: { [uid]: ate } }, { merge: true });
    alert(`✅ ${email} silenciado por 10 min.`);
  } else if (acao === '2') {
    FS().collection('config').doc('moderacao').set({ banidos: firebase.firestore.FieldValue.arrayUnion(uid) }, { merge: true });
    alert(`✅ ${email} banido.`);
  } else if (acao === '3') {
    FS().collection('config').doc('moderacao').set({ banidos: firebase.firestore.FieldValue.arrayRemove(uid) }, { merge: true });
    alert(`✅ ${email} desbanido.`);
  }
}

document.getElementById('chatEnviar').onclick = enviarMsg;
chatInput.onkeydown = (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); enviarMsg(); } };

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

function renderSecaoSom() {
  const sS = document.createElement('div'); sS.className = 'config-secao';
  sS.innerHTML = `
    <h2>🔊 Sons</h2><p>Ajuste o volume.</p>
    <div class="volume-titulo"><strong>🎵 Música</strong><span class="volume-valor" id="volMusicaValor">${Math.round(volumeMusica * 100)}%</span></div>
    <div class="volume-control"><button class="volume-btn" id="volMusicaMinus">−</button><input type="range" id="volMusicaRange" min="0" max="100" value="${Math.round(volumeMusica * 100)}" /><button class="volume-btn" id="volMusicaPlus">+</button></div>
    <div class="volume-titulo"><strong>🔘 Clique</strong><span class="volume-valor" id="volClickValor">${Math.round(volumeClick * 100)}%</span></div>
    <div class="volume-control"><button class="volume-btn" id="volClickMinus">−</button><input type="range" id="volClickRange" min="0" max="100" value="${Math.round(volumeClick * 100)}" /><button class="volume-btn" id="volClickPlus">+</button></div>
    <div class="mutar-container"><button class="mutar-btn ${(!somLigado || volumeMusica <= 0) ? 'mutado' : ''}" id="btnMutarTudo">${(!somLigado || volumeMusica <= 0) ? '🔇 Música Mutada' : '🔊 Mutar Música'}</button></div>`;
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
}

document.addEventListener('DOMContentLoaded', () => {
  const a = document.getElementById('appPrincipal');
  const l = document.getElementById('telaLogin');
  if (a) a.classList.add('escondido');
  if (l) l.classList.remove('escondido');
});