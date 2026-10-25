// ===== BASE DE ITENS =====
const BASE_ITENS = [
  { nome:'Celular', cat:'outros', peso:0.50, emoji:'📱', preco:0 }, { nome:'Rádio', cat:'outros', peso:1.50, emoji:'📻', preco:0 },
  { nome:'Mochila', cat:'outros', peso:0, emoji:'🎒', preco:0 }, { nome:'Dinheiro Normal', cat:'dinheiro', peso:0, emoji:'💵', preco:0 },
  { nome:'Dinheiro Sujo', cat:'dinheiro', peso:0, emoji:'💰', preco:0 }, { nome:'Laço', cat:'ferramentas', peso:1.50, emoji:'🪢', preco:0 },
  { nome:'Máscara', cat:'ferramentas', peso:1.50, emoji:'😷', preco:0 }, { nome:'Roupas', cat:'ferramentas', peso:0.50, emoji:'👕', preco:0 },
  { nome:'Kit de Reparo', cat:'ferramentas', peso:2.50, emoji:'🧰', preco:0 }, { nome:'Algema', cat:'ferramentas', peso:3.50, emoji:'⛓️', preco:0 },
  { nome:'Rastreador de Veículo', cat:'ferramentas', peso:0.25, emoji:'📡', preco:0 }, { nome:'Masterpick', cat:'ferramentas', peso:1.50, emoji:'🔓', preco:0 },
  { nome:'Placa', cat:'ferramentas', peso:2, emoji:'🪧', preco:0 }, { nome:'Seringa Reanimadora', cat:'remedios', peso:5, emoji:'💉', preco:0 },
  { nome:'Bandagem', cat:'remedios', peso:0.50, emoji:'🩹', preco:0 }, { nome:'Munição de Pistola', cat:'municao', peso:0.01, emoji:'💥', preco:0 },
  { nome:'Munição de SMG', cat:'municao', peso:0.02, emoji:'💥', preco:0 }, { nome:'Munição de Rifle', cat:'municao', peso:0.03, emoji:'💥', preco:0 },
  { nome:'PT Five Seven', cat:'armas', peso:5, emoji:'🔫', preco:0 }, { nome:'Parafall', cat:'armas', peso:10, emoji:'🔫', preco:0 },
  { nome:'Tec-9', cat:'armas', peso:8, emoji:'🔫', preco:0 }, { nome:'Soco Inglês', cat:'armas', peso:5, emoji:'🥊', preco:0 },
  { nome:'M9A3', cat:'armas', peso:5, emoji:'🔫', preco:0 }, { nome:'Fuzil Militar', cat:'armas', peso:10, emoji:'🔫', preco:0 },
  { nome:'Glock Rajada', cat:'armas', peso:5, emoji:'🔫', preco:0 }, { nome:'M4A1 MK2', cat:'armas', peso:10, emoji:'🔫', preco:0 },
  { nome:'Faca', cat:'armas', peso:5, emoji:'🔪', preco:0 }, { nome:'Taco de Baseball', cat:'armas', peso:5, emoji:'🏏', preco:0 },
  { nome:'Cristal (Venda)', cat:'drogas', peso:0.50, emoji:'💎', preco:0 }, { nome:'Cristal (Uso)', cat:'drogas', peso:0.35, emoji:'💊', preco:0 },
  { nome:'Adrenalina (Venda)', cat:'drogas', peso:0.50, emoji:'💉', preco:0 }, { nome:'Adrenalina (Uso)', cat:'drogas', peso:0.35, emoji:'🩸', preco:0 },
  { nome:'Farinha (Venda)', cat:'drogas', peso:0.50, emoji:'🌾', preco:0 }, { nome:'Farinha (Uso)', cat:'drogas', peso:0.35, emoji:'🥣', preco:0 },
  { nome:'Erva (Venda)', cat:'drogas', peso:0.50, emoji:'🌿', preco:0 }, { nome:'Erva (Uso)', cat:'drogas', peso:0.35, emoji:'🍁', preco:0 },
  { nome:'Papelzinho (Venda)', cat:'drogas', peso:0.50, emoji:'📄', preco:0 }, { nome:'Papelzinho (Uso)', cat:'drogas', peso:0.35, emoji:'🚬', preco:0 },
  { nome:'Ouro', cat:'mineracao', peso:1.00, emoji:'🥇', preco:360 }, { nome:'Prata', cat:'mineracao', peso:0.50, emoji:'🥈', preco:390 },
  { nome:'Bronze', cat:'mineracao', peso:0.80, emoji:'🥉', preco:240 }, { nome:'Quartzo', cat:'mineracao', peso:0.50, emoji:'💎', preco:360 },
  { nome:'Topázio', cat:'mineracao', peso:1.00, emoji:'💛', preco:330 }, { nome:'Turmalina', cat:'mineracao', peso:1.20, emoji:'💚', preco:348 },
  { nome:'Isca', cat:'pescaria', peso:0.25, emoji:'🪱', preco:400 }, { nome:'Lambari', cat:'pescaria', peso:0.30, emoji:'🐟', preco:600 },
  { nome:'Salmão', cat:'pescaria', peso:0.30, emoji:'🐟', preco:1200 }, { nome:'Tilápia', cat:'pescaria', peso:0.30, emoji:'🐟', preco:1200 },
  { nome:'Pirarucu', cat:'pescaria', peso:0.30, emoji:'🐟', preco:900 }, { nome:'Dourado', cat:'pescaria', peso:0.90, emoji:'🐟', preco:1200 },
  { nome:'Pintado', cat:'pescaria', peso:0.30, emoji:'🐟', preco:900 }, { nome:'Corvina', cat:'pescaria', peso:0.30, emoji:'🐟', preco:900 },
  { nome:'Pacu', cat:'pescaria', peso:0.30, emoji:'🐟', preco:900 }, { nome:'Peixe Desconhecido', cat:'pescaria', peso:0, emoji:'❓', preco:900 },
];
const CATEGORIAS = [{ id:'armas', nome:'🔫 Armas' }, { id:'municao', nome:'💥 Munição' },{ id:'drogas', nome:'💊 Drogas' }, { id:'ferramentas', nome:'🔧 Ferramentas' },{ id:'remedios', nome:'💉 Remédios' }, { id:'dinheiro', nome:'💰 Dinheiro' },{ id:'mineracao', nome:'⛏️ Mineração' }, { id:'pescaria', nome:'🎣 Pescaria' },{ id:'outros', nome:'📦 Outros' }];
const BAUS_FIXOS = [ { id:'casa', nome:'🏠 Casa' }, { id:'moto', nome:'🏍️ Moto' } ];
const TIPOS_PADRAO = [
  { id:'bau', nome:'Baú', emoji:'📦', cor:'#4a7dff', categoria:'Baús' }, { id:'casa', nome:'Casa', emoji:'🏠', cor:'#7c4dff', categoria:'Casas' },
  { id:'garagem', nome:'Garagem', emoji:'🚗', cor:'#4a7dff', categoria:'Veículos' }, { id:'loja', nome:'Loja', emoji:'🛒', cor:'#ffaa00', categoria:'Lojas' },
  { id:'hospital', nome:'Hospital', emoji:'🏥', cor:'#ff4a4a', categoria:'Serviços' }, { id:'emprego', nome:'Emprego', emoji:'💼', cor:'#00c853', categoria:'Empregos' },
  { id:'banco', nome:'Banco', emoji:'🏦', cor:'#00bcd4', categoria:'Serviços' }, { id:'policia', nome:'Polícia', emoji:'🚓', cor:'#3f51b5', categoria:'Serviços' },
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
function clienteJaTemCasa() { if (isAdmin()) return false; const uid = uidAtual(); if (!uid) return false; return marcadoresMapa.some(m => m.donoUid === uid && m.tipoId === 'casa'); }

// ===== FIRESTORE HELPERS =====
const FS = () => firebase.firestore();
async function fsAddItem(novo) { await FS().collection('itens').add({ ...novo, donoUid: novo.donoUid || uidAtual(), criadoPor: uidAtual(), criadoEm: firebase.firestore.FieldValue.serverTimestamp() }); }
async function fsUpdateItem(id, patch) { await FS().collection('itens').doc(id).update(patch); }
async function fsDeleteItem(id) { await FS().collection('itens').doc(id).delete(); }
async function fsAddVeiculo(novo) { await FS().collection('veiculos').add({ ...novo, donoUid: novo.donoUid || uidAtual(), criadoPor: uidAtual(), criadoEm: firebase.firestore.FieldValue.serverTimestamp() }); }
async function fsUpdateVeiculo(id, patch) { await FS().collection('veiculos').doc(id).update(patch); }
async function fsDeleteVeiculo(id) { const snap = await FS().collection('itens').where('veiculoId', '==', id).get(); const batch = FS().batch(); snap.forEach(d => batch.delete(d.ref)); batch.delete(FS().collection('veiculos').doc(id)); await batch.commit(); }
async function fsAddMarcador(novo) { await FS().collection('marcadores').add({ ...novo, donoUid: novo.donoUid || uidAtual(), criadoPor: uidAtual(), criadoEm: firebase.firestore.FieldValue.serverTimestamp() }); }
async function fsUpdateMarcador(id, patch) { await FS().collection('marcadores').doc(id).update(patch); }
async function fsDeleteMarcador(id) { await FS().collection('marcadores').doc(id).delete(); }
async function fsSetConfig(docId, data) { await FS().collection('config').doc(docId).set(data, { merge: true }); }

// ===== SYNC FIRESTORE =====
let unsubs = { itens: null, veiculos: null, marcadores: null, config: null, usuarios: null, usuariosChat: null };
let unsubEventos = null;

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

  // NOVO: Sincronização de Eventos via Coleção
  if (unsubEventos) unsubEventos();
  unsubEventos = FS().collection('eventos').where('publicado', '==', true).onSnapshot(s => {
    const eventos = s.docs.map(d => ({ id: d.id, ...d.data() }));
    if (eventos.length > 0) {
      eventos.sort((a, b) => (b.criadoEm?.toMillis() || 0) - (a.criadoEm?.toMillis() || 0));
      window.eventoAtual = eventos[0];
      atualizarCardEvento(window.eventoAtual);
    } else {
      window.eventoAtual = null;
      document.getElementById('headerEvento').style.display = 'none';
    }
  });

  if (admin) {
    unsubs.usuarios = FS().collection('usuarios').onSnapshot(s => { clientesDisponiveis = s.docs.map(d => ({ uid: d.id, ...d.data() })).filter(u => u.tipo === 'cliente'); render(); });
    unsubs.usuariosChat = FS().collection('usuarios').onSnapshot(s => { window.todosUsuarios = s.docs.map(d => ({ id: d.id, ...d.data() })); });
  } else {
    window.todosUsuarios = [{ uid: uid, email: firebase.auth().currentUser.email, tipo: window.tipoUsuario }];
  }
}

function atualizarCardEvento(ev) {
  const el = document.getElementById('headerEvento');
  if (!el) return;
  const agora = new Date().getTime();
  const inicio = ev.inicio ? ev.inicio.toDate().getTime() : 0;
  const fim = ev.fim ? ev.fim.toDate().getTime() : Infinity;

  if (agora > fim) { el.style.display = 'none'; return; }

  if (ev.titulo && ev.titulo.trim()) {
    document.getElementById('eventoTitulo').textContent = ev.titulo;
    document.getElementById('eventoDesc').textContent = ev.descricao || 'Clique para saber mais';
    
    const imgEl = document.getElementById('eventoImg');
    if (ev.imagem) { imgEl.src = ev.imagem; imgEl.style.display = 'block'; } 
    else { imgEl.style.display = 'none'; }

    const bgEl = document.getElementById('eventoBg');
    if (ev.banner) { bgEl.style.backgroundImage = `url('${ev.banner}')`; bgEl.style.display = 'block'; }
    else { bgEl.style.display = 'none'; }

    const badge = document.getElementById('eventoNovoBadge');
    if (ev.criadoEm && (agora - ev.criadoEm.toDate().getTime() < 86400000)) badge.style.display = 'block';
    else badge.style.display = 'none';
    
    el.style.display = 'flex';
  } else {
    el.style.display = 'none';
  }
}

function pararSyncFirestore() {
  Object.values(unsubs).forEach(u => u && u());
  if (unsubEventos) { unsubEventos(); unsubEventos = null; }
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

  const bc = document.createElement('button'); bc.textContent = '💬 Chat'; bc.style.position = 'relative'; bc.onclick = toggleChatSidebar;
  const badge = document.createElement('span'); badge.id = 'navChatBadge'; badge.style.cssText = 'display:none; position:absolute; top:-5px; right:-5px; background:var(--vermelho); color:white; font-size:0.65rem; padding:2px 6px; border-radius:10px; font-weight:bold;';
  bc.appendChild(badge); abasEl.appendChild(bc);

  if (isAdmin()) {
    const be = document.createElement('button'); be.textContent = '📢 Eventos'; be.style.background = '#ffaa00'; be.style.color = '#000'; be.onclick = () => abrirModalEventos(); abasEl.appendChild(be);
  }

  const bcfg = document.createElement('button'); bcfg.textContent = '⚙️ Configurações'; bcfg.classList.toggle('ativo', abaAtual === 'config');
  bcfg.onclick = () => { abaAtual = 'config'; veiculoAberto = null; montarAbas(); render(); }; abasEl.appendChild(bcfg);

  if (isAdmin()) {
    const ba = document.createElement('button'); ba.textContent = '👑 Admin'; ba.style.background = '#ffaa00'; ba.style.color = '#000'; ba.onclick = abrirPainelAdmin; abasEl.appendChild(ba);
  }
}
function montarCategorias() { const sel = document.getElementById('itemCategoria'); sel.innerHTML = ''; CATEGORIAS.forEach(c => { const o = document.createElement('option'); o.value = c.id; o.textContent = c.nome; sel.appendChild(o); }); }

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
function atualizarResumo() { let total = 0, unid = 0; itens.forEach(i => { total++; unid += Number(i.qtd); }); resumoEl.textContent = `${total} itens • ${unid} unidades`; }
function calcularPeso(arr) { return arr.reduce((s, i) => s + (Number(i.qtd) * Number(i.peso || 0)), 0); }
function ordenarItens(arr) { const c = [...arr]; if (ordenacao === 'nome') c.sort((a,b) => (a.nome||'').localeCompare(b.nome||'')); else if (ordenacao === 'qtd') c.sort((a,b) => b.qtd - a.qtd); else if (ordenacao === 'peso') c.sort((a,b) => (b.qtd*b.peso) - (a.qtd*a.peso)); return c; }
function criarBarraOrdenacao() { const d = document.createElement('div'); d.className = 'ordenacao'; [{ id:'nome', t:'🔤 Nome' }, { id:'qtd', t:'🔢 Qtd' }, { id:'peso', t:'⚖️ Peso' }].forEach(o => { const b = document.createElement('button'); b.textContent = o.t; b.classList.toggle('ativo', ordenacao === o.id); b.onclick = () => { ordenacao = o.id; render(); }; d.appendChild(b); }); return d; }

function renderCasaAdmin() { /* Mantido igual */ }
function renderCasaCliente() { /* Mantido igual */ }
function renderBauFixo(bauId) { /* Mantido igual */ }
function renderGaragem() { /* Mantido igual */ }
function renderBauVeiculo() { /* Mantido igual */ }
function iconeTipo(t) { return {carro:'🚗',moto:'🏍️',helicoptero:'🚁',aviao:'✈️',barco:'🚤',outro:'📦'}[t] || '🚗'; }
function criarCardItem(item) { /* Mantido igual */ }

// ===== EVENTOS =====
let eventoEditandoId = null;
let timeoutTimerEvento = null;

function abrirModalEventos(ev = null) {
  if (!isAdmin()) return;
  const modal = document.getElementById('modalEventoEdit');
  
  if (ev) {
    eventoEditandoId = ev.id;
    document.getElementById('editEventoTitulo').value = ev.titulo || '';
    document.getElementById('editEventoDesc').value = ev.descricao || '';
    document.getElementById('editEventoImg').value = ev.imagem || '';
    document.getElementById('editEventoBanner').value = ev.banner || '';
    document.getElementById('editEventoInicio').value = ev.inicio ? new Date(ev.inicio.toDate().getTime() - ev.inicio.toDate().getTimezoneOffset() * 60000).toISOString().slice(0, 16) : '';
    document.getElementById('editEventoFim').value = ev.fim ? new Date(ev.fim.toDate().getTime() - ev.fim.toDate().getTimezoneOffset() * 60000).toISOString().slice(0, 16) : '';
    document.getElementById('editEventoPin').value = ev.pinId || '';
    document.getElementById('editEventoPublicado').checked = ev.publicado !== false;
    document.getElementById('btnNotificarEvento').style.display = 'block';
  } else {
    eventoEditandoId = null;
    document.getElementById('editEventoTitulo').value = '';
    document.getElementById('editEventoDesc').value = '';
    document.getElementById('editEventoImg').value = '';
    document.getElementById('editEventoBanner').value = '';
    document.getElementById('editEventoInicio').value = '';
    document.getElementById('editEventoFim').value = '';
    document.getElementById('editEventoPin').value = '';
    document.getElementById('editEventoPublicado').checked = true;
    document.getElementById('btnNotificarEvento').style.display = 'none';
  }

  const selPin = document.getElementById('editEventoPin');
  selPin.innerHTML = '<option value="">— Nenhum —</option>';
  marcadoresMapa.forEach(m => { selPin.innerHTML += `<option value="${m.id}">📍 ${m.nome}</option>`; });
  if (ev && ev.pinId) selPin.value = ev.pinId;

  atualizarPreviewEvento();
  modal.classList.remove('escondido');
}

function atualizarPreviewEvento() {
  const tit = document.getElementById('editEventoTitulo').value || 'Título do Evento';
  const desc = document.getElementById('editEventoDesc').value || 'Descrição aparecerá aqui...';
  const img = document.getElementById('editEventoImg').value;
  
  document.getElementById('previewCardTitulo').textContent = tit;
  document.getElementById('previewCardDesc').textContent = desc;
  
  const previewImg = document.getElementById('previewCardImg');
  if (img) { previewImg.src = img; previewImg.style.display = 'block'; }
  else { previewImg.style.display = 'none'; }
}

['editEventoTitulo', 'editEventoDesc', 'editEventoImg'].forEach(id => {
  document.getElementById(id).addEventListener('input', atualizarPreviewEvento);
});

document.getElementById('btnSalvarEvento').onclick = async () => {
  const tit = document.getElementById('editEventoTitulo').value.trim();
  const desc = document.getElementById('editEventoDesc').value.trim();
  const img = document.getElementById('editEventoImg').value.trim();
  const banner = document.getElementById('editEventoBanner').value.trim();
  const inicioVal = document.getElementById('editEventoInicio').value;
  const fimVal = document.getElementById('editEventoFim').value;
  const pinId = document.getElementById('editEventoPin').value;
  const publicado = document.getElementById('editEventoPublicado').checked;

  if (!tit) {
    if (eventoEditandoId && confirm('Deixar o título vazio apagará o evento. Continuar?')) {
      await FS().collection('eventos').doc(eventoEditandoId).delete();
      document.getElementById('modalEventoEdit').classList.add('escondido');
      return;
    }
    alert('❌ O título não pode estar vazio.');
    return;
  }

  const dados = {
    titulo: tit,
    descricao: desc,
    imagem: img,
    banner: banner,
    publicado: publicado,
    pinId: pinId || null,
    inicio: inicioVal ? firebase.firestore.Timestamp.fromDate(new Date(inicioVal)) : null,
    fim: fimVal ? firebase.firestore.Timestamp.fromDate(new Date(fimVal)) : null,
    atualizadoEm: firebase.firestore.FieldValue.serverTimestamp()
  };

  if (!eventoEditandoId) {
    dados.criadoEm = firebase.firestore.FieldValue.serverTimestamp();
    dados.criadoPor = uidAtual();
    dados.autorEmail = firebase.auth().currentUser.email;
    dados.views = 0;
    await FS().collection('eventos').add(dados);
  } else {
    await FS().collection('eventos').doc(eventoEditandoId).update(dados);
  }

  document.getElementById('modalEventoEdit').classList.add('escondido');
};

// ===== LEITURA DE EVENTO =====
function abrirModalEventoRead() {
  const ev = window.eventoAtual;
  if (!ev) return;
  
  document.getElementById('readEventoTitulo').textContent = ev.titulo;
  document.getElementById('readEventoDesc').textContent = ev.descricao || 'Sem descrição adicional.';
  
  const imgEl = document.getElementById('readEventoImg');
  if (ev.imagem) { imgEl.src = ev.imagem; imgEl.style.display = 'block'; }
  else { imgEl.style.display = 'none'; }

  const bgEl = document.getElementById('readEventoBanner');
  if (ev.banner) { bgEl.style.backgroundImage = `url('${ev.banner}')`; bgEl.style.display = 'block'; }
  else { bgEl.style.display = 'none'; }

  document.getElementById('readEventoAutor').textContent = `Publicado por 👑 ${ev.autorEmail || 'Admin'}`;
  document.getElementById('readEventoViews').textContent = `👁️ ${ev.views || 0} leituras`;

  const btnMapa = document.getElementById('btnMapaEventoRead');
  if (ev.pinId) {
    btnMapa.style.display = 'block';
    btnMapa.onclick = () => {
      document.getElementById('modalEventoRead').classList.add('escondido');
      abrirMapa();
      setTimeout(() => irParaMarcador(ev.pinId), 500);
    };
  } else {
    btnMapa.style.display = 'none';
  }
  
  document.getElementById('btnEditEventoRead').style.display = isAdmin() ? 'block' : 'none';

  const timerEl = document.getElementById('readEventoTimer');
  if (timeoutTimerEvento) clearInterval(timeoutTimerEvento);
  
  if (ev.inicio || ev.fim) {
    timerEl.classList.remove('escondido');
    atualizarTimer(ev);
    timeoutTimerEvento = setInterval(() => atualizarTimer(ev), 1000);
  } else {
    timerEl.classList.add('escondido');
  }

  FS().collection('eventos').doc(ev.id).update({ views: firebase.firestore.FieldValue.increment(1) }).catch(()=>{});

  document.getElementById('modalEventoRead').classList.remove('escondido');
}

function atualizarTimer(ev) {
  const timerTexto = document.getElementById('readEventoTimerTexto');
  const agora = new Date().getTime();
  
  if (ev.fim && agora > ev.fim.toDate().getTime()) { timerTexto.textContent = 'Evento encerrado'; return; }
  if (ev.inicio && agora < ev.inicio.toDate().getTime()) { const diff = ev.inicio.toDate().getTime() - agora; timerTexto.textContent = 'Começa em: ' + formatarTempo(diff); return; }
  if (ev.inicio && ev.fim) { const diff = ev.fim.toDate().getTime() - agora; timerTexto.textContent = 'Termina em: ' + formatarTempo(diff); return; }
  timerTexto.textContent = 'Ao vivo agora!';
}

function formatarTempo(ms) {
  const s = Math.floor(ms / 1000); const d = Math.floor(s / 86400); const h = Math.floor((s % 86400) / 3600); const m = Math.floor((s % 3600) / 60); const seg = s % 60;
  if (d > 0) return `${d}d ${h}h ${m}m`; if (h > 0) return `${h}h ${m}m ${seg}s`; return `${m}m ${seg}s`;
}

document.getElementById('headerEvento').onclick = abrirModalEventoRead;
document.getElementById('btnFecharEventoRead').onclick = () => { document.getElementById('modalEventoRead').classList.add('escondido'); if (timeoutTimerEvento) clearInterval(timeoutTimerEvento); };
document.getElementById('btnEditEventoRead').onclick = () => {
  document.getElementById('modalEventoRead').classList.add('escondido');
  if (timeoutTimerEvento) clearInterval(timeoutTimerEvento);
  abrirModalEventos(window.eventoAtual);
};

document.getElementById('btnCancelarEvento').onclick = () => { document.getElementById('modalEventoEdit').classList.add('escondido'); };

document.getElementById('btnNotificarEvento').onclick = async () => {
  if (!confirm('Enviar notificação push para TODOS os usuários agora?')) return;
  const ev = window.eventoAtual;
  if (!ev) return alert('Salve o evento primeiro.');
  
  if (!window.OneSignal) return alert('OneSignal não inicializado.');
  
  try {
    await window.OneSignal.Notifications.requestPermission();
    alert('✅ Notificação solicitada! (Para todos os usuários, use a Cloud Function)');
  } catch (err) { alert('Erro: ' + err.message); }
};

// ===== CHAT E SONS =====
// (Mantidos inalterados no restante do script)