const TRANSLATIONS = {
  es: {
    title: "Análisis de Edades - Dieta Nacional de Japón",
    appTitle: "Dieta Nacional",
    appSubtitle: "Análisis demográfico y de edad de los miembros de la Dieta Nacional de Japón",
    dateBadge: "A fecha de hoy: 19 de julio de 2026",
    statTotal: "Total analizado",
    statTotalMeta: "~98% de escaños totales",
    statAvg: "Edad Media",
    statAvgMeta: "años de edad",
    statYoung: "Más joven",
    statYoungMeta: "{age} años - {party}",
    statOld: "Más viejo",
    statOldMeta: "{age} años - {party}",
    searchPlaceholder: "Buscar parlamentario por nombre o partido...",
    chamber: "Cámara:",
    chamberAll: "Todas",
    chamberReps: "Representantes",
    chamberCounc: "Consejeros",
    partyFilter: "Partido:",
    partyAll: "Todos",
    ageRange: "Edad:",
    tabMembers: "Miembros y Hemiciclo",
    tabStats: "Estadísticas por Partido",
    hemicircleTitle: "Distribución del Hemiciclo (por Edad)",
    hemicircleDesc: "Representación visual de los parlamentarios de mayor a menor edad (izquierda a derecha).",
    chartTitle: "Gráfica Demográfica por Partido",
    chartDesc: "Comparativa de edad promedio ponderada por número de escaños activos.",
    sidebarTitle: "Edades Medias por Partido",
    sidebarDesc: "¿Hay partidos más jóvenes o más viejos? Compáralo aquí:",
    tableTitle: "Listado de Parlamentarios",
    resultsCount: "{count} resultados",
    thName: "Nombre",
    thAge: "Edad",
    thDob: "Nacimiento",
    thChamber: "Cámara",
    thParty: "Partido Político",
    footerText: "Basado en datos abiertos de Wikipedia y Wikidata.",
    footerMeta: "Este proyecto es totalmente de código abierto. Código disponible en <a href='https://github.com/romero-ivan/japan-diet-stats' target='_blank' class='wiki-link' style='text-decoration: underline;'>GitHub</a>.",
    modalTitle: "¿Por qué no es el 100%?",
    closeBtn: "Cerrar",
    chamberLabelReps: "Representante",
    chamberLabelCounc: "Consejero",
    independent: "Independiente",
    yearsLabel: "años",
    yearsAvgLabel: "años promedio",
    pageLabel: "Pág. {page} de {total}",
    noResults: "No se encontraron resultados para tu búsqueda.",
    legend70: "70+ años",
    legend60: "60-69 años",
    legend50: "50-59 años",
    legend40: "40-49 años",
    legend30: "<40 años",
    legendUs1983: "Congreso EE.UU. (1983)",
    legendJpDiet: "Dieta de Japón (Filtrado)",
    colorMode: "Colorear por:",
    modeAge: "Rango de Edad",
    modeGen: "Generaciones",
    genSilent: "S. Gen / Ant. (81+ años)",
    genBoomer: "Boomers (62-80 años)",
    genX: "Gen X (46-61 años)",
    genMillennial: "Millennials (30-45 años)",
    genZ: "Zoomers (29 o menos)",
    viewMode: "Representación:",
    viewDots: "Puntos",
    viewBars: "Barras",
    viewComparison: "Comparativa",
    viewRatio: "Representatividad",
    ratioType: "Tipo:",
    subWaffle: "Gofre",
    subFlow: "Flujo",
    subCards: "Ratio de representación",
    lblSilent: "Gen. Silenciosa",
    lblBoomer: "Boomers",
    lblX: "Gen X",
    lblMillennial: "Millennials",
    lblZ: "Zoomers",
    tabIncome: "Ingresos por Edad (Japón)",
    currencySelector: "Moneda:",
    conceptMarketTitle: "Ingreso Inicial (Antes de transferencias)",
    conceptMarketDesc: "Ingresos por trabajo, negocios, rentas, pensiones privadas, etc.",
    conceptGrossTitle: "Ingreso Bruto",
    conceptGrossDesc: "Ingreso inicial más pensiones públicas y transferencias de efectivo.",
    conceptDisposableTitle: "Ingreso Disponible",
    conceptDisposableDesc: "Ingreso bruto menos impuestos directos y cotizaciones a la seguridad social.",
    conceptExtendedTitle: "Ingreso Redistribuido (Después de transferencias)",
    conceptExtendedDesc: "Ingreso disponible más transferencias en especie (salud y educación públicas).",
    incomeDataSource: "Datos de ingresos equivalentes reales. Fuente: <a href=\"https://www.mhlw.go.jp/stf/houdou/96-1_r03kekka.html\" target=\"_blank\" class=\"wiki-link\" style=\"text-decoration: underline;\">«Encuesta sobre la Redistribución de Ingresos» del Ministerio de Salud, Trabajo y Bienestar de Japón (令和3年 / 2021)</a>."
  },
  en: {
    title: "Age Analysis - National Diet of Japan",
    appTitle: "National Diet",
    appSubtitle: "Demographic and age analysis of members of the National Diet of Japan",
    dateBadge: "As of today: July 19, 2026",
    statTotal: "Total analyzed",
    statTotalMeta: "~98% of total seats",
    statAvg: "Average Age",
    statAvgMeta: "years old",
    statYoung: "Youngest",
    statYoungMeta: "{age} years - {party}",
    statOld: "Oldest",
    statOldMeta: "{age} years - {party}",
    searchPlaceholder: "Search member by name or party...",
    chamber: "Chamber:",
    chamberAll: "All",
    chamberReps: "Representatives",
    chamberCounc: "Councillors",
    partyFilter: "Party:",
    partyAll: "All",
    ageRange: "Age:",
    tabMembers: "Members & Hemicircle",
    tabStats: "Statistics by Party",
    hemicircleTitle: "Hemicircle Distribution (by Age)",
    hemicircleDesc: "Visual representation of members from oldest to youngest (left to right).",
    chartTitle: "Demographics Chart by Party",
    chartDesc: "Comparison of weighted average age by active seats count.",
    sidebarTitle: "Average Age by Party",
    sidebarDesc: "Are there younger or older parties? Compare here:",
    tableTitle: "List of Members",
    resultsCount: "{count} results",
    thName: "Name",
    thAge: "Age",
    thDob: "Birthdate",
    thChamber: "Chamber",
    thParty: "Political Party",
    footerText: "Based on open data from Wikipedia and Wikidata.",
    footerMeta: "This project is fully open source. Source code available on <a href='https://github.com/romero-ivan/japan-diet-stats' target='_blank' class='wiki-link' style='text-decoration: underline;'>GitHub</a>.",
    modalTitle: "Why is it not 100%?",
    closeBtn: "Close",
    chamberLabelReps: "Representative",
    chamberLabelCounc: "Councillor",
    independent: "Independent",
    yearsLabel: "years",
    yearsAvgLabel: "years average",
    pageLabel: "Page {page} of {total}",
    noResults: "No results found for your search.",
    legend70: "70+ years",
    legend60: "60-69 years",
    legend50: "50-59 years",
    legend40: "40-49 years",
    legend30: "<40 years",
    legendUs1983: "US Congress (1983)",
    legendJpDiet: "Japan Diet (Filtered)",
    colorMode: "Color by:",
    modeAge: "Age Range",
    modeGen: "Generations",
    genSilent: "Silent Gen / Older (81+)",
    genBoomer: "Boomers (62-80)",
    genX: "Gen X (46-61)",
    genMillennial: "Millennials (30-45)",
    genZ: "Zoomers (29 or younger)",
    viewMode: "Representation:",
    viewDots: "Dots",
    viewBars: "Bars",
    viewComparison: "Comparison",
    viewRatio: "Representativeness",
    ratioType: "Type:",
    subWaffle: "Waffle",
    subFlow: "Flow",
    subCards: "Representation Ratio",
    lblSilent: "Silent Gen",
    lblBoomer: "Boomers",
    lblX: "Gen X",
    lblMillennial: "Millennials",
    lblZ: "Zoomers",
    tabIncome: "Income by Age (Japan)",
    currencySelector: "Currency:",
    conceptMarketTitle: "Initial Income (Before transfers)",
    conceptMarketDesc: "Income from employment, business, property, private pensions, etc.",
    conceptGrossTitle: "Gross Income",
    conceptGrossDesc: "Initial income plus public pensions and cash benefits.",
    conceptDisposableTitle: "Disposable Income",
    conceptDisposableDesc: "Gross income minus taxes and social security contributions.",
    conceptExtendedTitle: "Redistributed Income (After transfers)",
    conceptExtendedDesc: "Disposable income plus in-kind services (healthcare and education).",
    incomeDataSource: "Real equivalent income data. Source: <a href=\"https://www.mhlw.go.jp/stf/houdou/96-1_r03kekka.html\" target=\"_blank\" class=\"wiki-link\" style=\"text-decoration: underline;\">'Income Redistribution Survey', Ministry of Health, Labour and Welfare of Japan (2021)</a>."
  },
  ja: {
    title: "年齢分析 - 日本国会",
    appTitle: "日本国会",
    appSubtitle: "日本国会（衆議院・参議院）議員の年齢および人口統計分析",
    dateBadge: "現在：2026年7月19日",
    statTotal: "分析対象数",
    statTotalMeta: "全議席の約98%",
    statAvg: "平均年齢",
    statAvgMeta: "歳",
    statYoung: "最年少",
    statYoungMeta: "{age}歳 - {party}",
    statOld: "最年長",
    statOldMeta: "{age}歳 - {party}",
    searchPlaceholder: "議員名または政党名で検索...",
    chamber: "議院:",
    chamberAll: "すべて",
    chamberReps: "衆議院",
    chamberCounc: "参議院",
    partyFilter: "政党:",
    partyAll: "すべて",
    ageRange: "年齢:",
    tabMembers: "議員と議席図",
    tabStats: "政党別統計",
    hemicircleTitle: "議席の年齢別分布 (半円図)",
    hemicircleDesc: "議員を年齢の高い順（左から右）に並べた視覚的配置図です。",
    chartTitle: "政党別年齢グラフ",
    chartDesc: "アクティブな議席数で加重平均した政党別の平均年齢比較。",
    sidebarTitle: "政党別の平均年齢",
    sidebarDesc: "若い政党や高年齢の政党は？ ここで比較：",
    tableTitle: "議員一覧",
    resultsCount: "該当者 {count} 名",
    thName: "氏名",
    thAge: "年齢",
    thDob: "生年月日",
    thChamber: "議院",
    thParty: "所属政党",
    footerText: "WikipediaとWikidataのオープンデータに基づいています。",
    footerMeta: "このプロジェクトは完全にオープンソースです。ソースコードは <a href='https://github.com/romero-ivan/japan-diet-stats' target='_blank' class='wiki-link' style='text-decoration: underline;'>GitHub</a> で公開されています。",
    modalTitle: "なぜ100%ではないのですか？",
    closeBtn: "閉じる",
    chamberLabelReps: "衆議院議員",
    chamberLabelCounc: "参議院議員",
    independent: "無所属",
    yearsLabel: "歳",
    yearsAvgLabel: "歳平均",
    pageLabel: "{total} ページ中 {page} ページ目",
    noResults: "検索結果が見つかりませんでした。",
    legend70: "70歳以上",
    legend60: "60-69歳",
    legend50: "50-59歳",
    legend40: "40-49歳",
    legend30: "40歳未満",
    legendUs1983: "米国議会 (1983年)",
    legendJpDiet: "日本国会 (フィルター適用済)",
    colorMode: "色分け基準:",
    modeAge: "年齢層",
    modeGen: "世代別",
    genSilent: "サイレント世代以上 (81歳以上)",
    genBoomer: "ベビーブーマー (62-80歳)",
    genX: "ジェネレーションX (46-61歳)",
    genMillennial: "ミレニアル世代 (30-45歳)",
    genZ: "Z世代 (29歳以下)",
    viewMode: "表示モード:",
    viewDots: "ドット",
    viewBars: "グラフ",
    viewComparison: "米国議会比較",
    viewRatio: "代表性比率",
    ratioType: "タイプ:",
    subWaffle: "格子",
    subFlow: "流路",
    subCards: "代表比率",
    lblSilent: "サイレント世代",
    lblBoomer: "ベビーブーマー",
    lblX: "ジェネレーションX",
    lblMillennial: "ミレニアル世代",
    lblZ: "Z世代",
    tabIncome: "国民の所得分布",
    currencySelector: "表示通貨：",
    conceptMarketTitle: "当初所得",
    conceptMarketDesc: "雇用者所得、事業所得、農耕・畜産所得、財産所得、家内労働所得及び雑所得並びに私的給付の合計額。",
    conceptGrossTitle: "総所得",
    conceptGrossDesc: "当初所得に公的年金や雇用保険等の現金給付を加えたもの。",
    conceptDisposableTitle: "可処分所得",
    conceptDisposableDesc: "総所得から税金・社会保険料を差し引いた手取り所得。",
    conceptExtendedTitle: "再分配所得",
    conceptExtendedDesc: "当初所得から税金・社会保険料を差し引き、社会保障給付（現金給付・現物給付）を加えたもの（再分配所得）。",
    incomeDataSource: "等価所得ベースの実データ。出典：<a href=\"https://www.mhlw.go.jp/stf/houdou/96-1_r03kekka.html\" target=\"_blank\" class=\"wiki-link\" style=\"text-decoration: underline;\">厚生労働省「令和３年所得再分配調査」</a>に基づく統計推計。"
  }
};

// Party Abbreviations Mapping for Tooltips
const PARTY_ABBR = {
  "自由民主党": "LDP", "Liberal Democratic Party": "LDP", "Partido Liberal Democrático": "LDP",
  "立憲民主党": "CDP", "Constitutional Democratic Party": "CDP", "Partido Democrático Constitucional": "CDP",
  "日本維新の会": "JIP", "Japan Innovation Party": "JIP", "Asociación para la Innovación de Japón": "JIP",
  "公明党": "KP", "Komeito": "KP",
  "国民民主党": "DPFP", "Democratic Party for the People": "DPFP", "Partido Democrático para la Gente": "DPFP",
  "日本共産党": "JCP", "Japanese Communist Party": "JCP", "Partido Comunista de Japón": "JCP",
  "れいわ新選組": "RS", "Reiwa Shinsengumi": "RS",
  "社会民主党": "SDP", "Social Democratic Party": "SDP", "Partido Socialdemócrata": "SDP",
  "参政党": "SP", "Sanseito": "SP",
  "日本保守党": "CPJ", "Conservative Party of Japan": "CPJ", "Partido Conservador de Japón": "CPJ",
  "無所属": "IND", "Independent": "IND", "Independiente": "IND",
  "減税日本": "GZ", "減税日本・ゆうこく連合": "GZ", "Genzei Nippon": "GZ", "Tax Cuts Japan and Yukoku Alliance": "GZ"
};

function getPartyAbbr(partyName) {
  if (!partyName) return "IND";
  const p = partyName.trim();
  if (PARTY_ABBR[p]) return PARTY_ABBR[p];
  
  // Extract capital letters or fallback to first 3 letters
  const uppercaseLetters = p.replace(/[^A-Z]/g, '');
  if (uppercaseLetters.length >= 2) return uppercaseLetters;
  return p.substring(0, 3).toUpperCase();
}

// Party Badges Mapping (High quality styled SVG/HTML badges)
const PARTY_BADGES = {
  "自由民主党": { ja: "自民", en: "LDP", bg: "#15803d", border: "#166534" },
  "立憲民主党": { ja: "立憲", en: "CDP", bg: "#1d4ed8", border: "#1e40af" },
  "日本維新 de 会": { ja: "維新", en: "JIP", bg: "#84cc16", border: "#4d7c0f" }, // alias
  "日本維新の会": { ja: "維新", en: "JIP", bg: "#84cc16", border: "#4d7c0f" },
  "公明党": { ja: "公明", en: "KP", bg: "#ea580c", border: "#c2410c" },
  "国民民主党": { ja: "国民", en: "DP", bg: "#eab308", border: "#ca8a04" },
  "日本共産党": { ja: "共産", en: "JCP", bg: "#dc2626", border: "#b91c1c" },
  "れいわ新選組": { ja: "れいわ", en: "RS", bg: "#ec4899", border: "#db2777" },
  "社会民主党": { ja: "社民", en: "SDP", bg: "#2563eb", border: "#1d4ed8" },
  "参政党": { ja: "参政", en: "SP", bg: "#ca8a04", border: "#a16207" },
  "日本保守党": { ja: "保守", en: "CPJ", bg: "#881337", border: "#4c0519" },
  
  // Minor and factional active groups
  "中道改革連合": { ja: "中道", en: "CRU", bg: "#6d28d9", border: "#5b21b6" },
  "チームみらい": { ja: "みらい", en: "TFF", bg: "#0d9488", border: "#0f766e" },
  "日本のこころ": { ja: "こころ", en: "JJK", bg: "#f43f5e", border: "#e11d48" },
  "日本未来 de 統": { ja: "未来", en: "TPJ", bg: "#ca8a04", border: "#a16207" }, // alias
  "日本未来の党": { ja: "未来", en: "TPJ", bg: "#ca8a04", border: "#a16207" },
  "日本を元気にする会": { ja: "元気", en: "AEJ", bg: "#f97316", border: "#ea580c" },
  "チームしが": { ja: "滋賀", en: "TS", bg: "#0284c7", border: "#0369a1" },
  "無所属": { ja: "無所属", en: "IND", bg: "#736d55", border: "#5a5542" },
  "減税日本": { ja: "減税", en: "GZ", bg: "#d97706", border: "#b45309" },
};

// Map clean party names to official local logo files
const PARTY_LOGOS_MAP = {
  "自由民主党": "ldp.png", "Liberal Democratic Party": "ldp.png", "Partido Liberal Democrático": "ldp.png",
  "立憲民主党": "cdp.png", "Constitutional Democratic Party": "cdp.png", "Partido Democrático Constitucional": "cdp.png",
  "日本維新の会": "jip.png", "Japan Innovation Party": "jip.png", "Asociación para la Innovación de Japón": "jip.png",
  "公明党": "komeito.png", "Komeito": "komeito.png",
  "国民民主党": "dpfp.png", "Democratic Party for the People": "dpfp.png", "Partido Democrático para el Pueblo": "dpfp.png",
  "日本共産党": "jcp.png", "Japanese Communist Party": "jcp.png", "Partido Comunista Japonés": "jcp.png",
  "れいわ新選組": "reiwa.png", "Reiwa Shinsengumi": "reiwa.png",
  "社会民主党": "sdp.png", "Social Democratic Party": "sdp.png", "Partido Socialdemócrata": "sdp.png",
  "参政党": "sanseito.png", "Sanseito": "sanseito.png",
  "日本保守党": "conservative.png", "Conservative Party of Japan": "conservative.png", "Partido Conservador de Japón": "conservative.png",
  "中道改革連合": "cra.png", "Centrist Reform Alliance": "cra.png"
};

function getPartyLogoHTML(partyName, size = "20px") {
  if (!partyName) return '';
  const cleanName = partyName.trim();
  
  // Try to use official local PNG logo first
  const logoFile = PARTY_LOGOS_MAP[cleanName];
  if (logoFile) {
    return `<img src="logos/${logoFile}" class="party-badge-icon" style="width: ${size}; height: ${size}; border-radius: 50%; object-fit: contain; background-color: transparent; border: none; padding: 0; flex-shrink: 0;" title="${cleanName}">`;
  }
  
  // Fallback to stylized text badge
  const badge = PARTY_BADGES[cleanName];
  if (badge) {
    const text = state.currentLang === 'ja' ? badge.ja : badge.en;
    const isJa = state.currentLang === 'ja';
    let widthStyle = '';
    if (isJa) {
      if (text.length > 2) {
        widthStyle = `width: auto; padding: 0 6px; border-radius: 12px;`;
      } else {
        widthStyle = `width: ${size}; border-radius: 50%;`;
      }
    } else {
      widthStyle = `width: calc(${size} * 1.35); border-radius: 12px;`;
    }
    return `<span class="party-badge-icon" style="background-color: ${badge.bg}; border: 1px solid ${badge.border}; color: #ffffff; ${widthStyle} height: ${size}; line-height: calc(${size} - 2px); font-size: calc(${size} * ${isJa ? '0.5' : '0.45'});" title="${cleanName}">${text}</span>`;
  }
  
  const abbr = getPartyAbbr(cleanName).substring(0, 2);
  return `<span class="party-badge-icon fallback" style="background-color: #736d55; border: 1px solid #5a5542; color: #ffffff; width: ${size}; height: ${size}; line-height: calc(${size} - 2px); font-size: calc(${size} * 0.45); border-radius: 50%;" title="${cleanName}">${abbr}</span>`;
}

function getActiveParty(m) {
  if (!m.parties || m.parties.length === 0) return null;
  // Look for currently active parties mapped in badges from most recent (end of list) to oldest
  for (let i = m.parties.length - 1; i >= 0; i--) {
    const p = m.parties[i];
    if (PARTY_BADGES[p.ja.trim()]) {
      return p;
    }
  }
  // Fallback to the most recent party
  return m.parties[m.parties.length - 1];
}

// State Management
let state = {
  data: [],
  filteredData: [],
  currentPage: 1,
  pageSize: 20,
  currentChamber: 'all',
  currentParty: 'all',
  ageMin: 20,
  ageMax: 100,
  searchQuery: '',
  sortColumn: 'age', // default sort column
  sortDirection: 'asc', // default sort direction (ascending = younger first)
  currentLang: 'ja',
  currentTab: 'tab-members',
  colorMode: 'age', // default coloring mode: 'age' or 'generation'
  viewMode: 'dots', // default representation mode: 'dots' or 'bars'
  ratioSubView: 'ratios', // default representativeness sub-view: 'ratios', 'flow' or 'waffle'
  activeCurrency: 'JPY',
  wasFiltered: false
};

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
  // Load saved language preference
  const savedLang = localStorage.getItem('diet_lang');
  if (savedLang && TRANSLATIONS[savedLang]) {
    state.currentLang = savedLang;
  }

  // Load data from global variable defined in data.js
  if (typeof DIET_DATA !== 'undefined') {
    state.data = DIET_DATA;
  } else {
    console.error("DIET_DATA is not defined. Make sure data.js is loaded.");
    return;
  }

  // Populate dynamic dropdown list of parties
  populatePartyDropdown();

  // Set active button in language selector
  updateLangSelectorButtons();

  // Apply translations to UI elements
  updateUILabels();

  // Calculate and populate global stats panels
  calculateGlobalStats();

  // Initialize event listeners
  initEventListeners();

  // Set active button in chamber selector based on state default
  const chamberButtons = document.querySelectorAll('#chamber-filters .btn');
  chamberButtons.forEach(btn => {
    if (btn.getAttribute('data-chamber') === state.currentChamber) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Initialize custom modal event handlers
  const closeModalBtn = document.getElementById('modal-close-btn');
  const closeActionBtn = document.getElementById('modal-action-btn');
  const modalOverlay = document.getElementById('custom-modal');
  
  if (closeModalBtn) closeModalBtn.onclick = closeModal;
  if (closeActionBtn) closeActionBtn.onclick = closeModal;
  if (modalOverlay) {
    modalOverlay.onclick = (e) => {
      if (e.target === modalOverlay) closeModal();
    };
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Filter and render initial member list & hemicircle visual
  applyFiltersAndRender();
});

// Custom Modal Popup Functions
function showModal(title, text) {
  const modal = document.getElementById('custom-modal');
  const mTitle = document.getElementById('modal-title');
  const mText = document.getElementById('modal-text');
  
  if (modal && mTitle && mText) {
    mTitle.textContent = title;
    mText.innerHTML = text.replace(/\n/g, '<br>');
    
    modal.style.display = 'flex';
    setTimeout(() => {
      modal.classList.add('active');
    }, 10);
  }
}

function closeModal() {
  const modal = document.getElementById('custom-modal');
  if (modal) {
    modal.classList.remove('active');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 200);
  }
}

// ==========================================================================
// Multilingual Translation Update Helper
// ==========================================================================
function updateUILabels() {
  const dict = TRANSLATIONS[state.currentLang];
  
  // HTML Title
  document.getElementById('html-title').textContent = dict.title;
  
  // Header
  document.getElementById('app-title').textContent = dict.appTitle;
  document.getElementById('app-subtitle').textContent = dict.appSubtitle;
  document.getElementById('date-badge').textContent = dict.dateBadge;
  
  
  // Stats labels
  document.getElementById('lbl-stat-total').textContent = dict.statTotal;
  document.getElementById('lbl-stat-total-meta').textContent = dict.statTotalMeta;
  document.getElementById('lbl-stat-avg').textContent = dict.statAvg;
  document.getElementById('lbl-stat-avg-meta').textContent = dict.statAvgMeta;
  document.getElementById('lbl-stat-young').textContent = dict.statYoung;
  document.getElementById('lbl-stat-old').textContent = dict.statOld;
  
  // Hemicircle Labels
  document.getElementById('lbl-hemicircle-title').textContent = dict.hemicircleTitle;
  document.getElementById('lbl-hemicircle-desc').textContent = dict.hemicircleDesc;

  // Controls
  document.getElementById('search-input').placeholder = dict.searchPlaceholder;
  document.getElementById('lbl-chamber').textContent = dict.chamber;
  document.getElementById('lbl-chamber-all').textContent = dict.chamberAll;
  document.getElementById('lbl-chamber-reps').textContent = dict.chamberReps;
  document.getElementById('lbl-chamber-counc').textContent = dict.chamberCounc;
  
  document.getElementById('lbl-party-filter').textContent = dict.partyFilter;
  document.getElementById('lbl-party-all').textContent = dict.partyAll;
  document.getElementById('lbl-age-range').textContent = dict.ageRange;
  
  
  // Table Headers
  document.getElementById('lbl-table-title').textContent = dict.tableTitle;
  document.getElementById('lbl-th-name').firstChild.textContent = dict.thName + " ";
  document.getElementById('lbl-th-age').firstChild.textContent = dict.thAge + " ";
  document.getElementById('lbl-th-dob').firstChild.textContent = dict.thDob + " ";
  document.getElementById('lbl-th-chamber').firstChild.textContent = dict.thChamber + " ";
  document.getElementById('lbl-th-party').firstChild.textContent = dict.thParty + " ";
  
  // Footer
  document.getElementById('lbl-footer-text').textContent = dict.footerText;
  document.getElementById('lbl-footer-meta').innerHTML = dict.footerMeta;
  
  // Legend Labels
  document.getElementById('lbl-legend-70').textContent = dict.legend70;
  document.getElementById('lbl-legend-60').textContent = dict.legend60;
  document.getElementById('lbl-legend-50').textContent = dict.legend50;
  document.getElementById('lbl-legend-40').textContent = dict.legend40;
  document.getElementById('lbl-legend-30').textContent = dict.legend30;
  document.getElementById('lbl-legend-us-1983').textContent = dict.legendUs1983;
  document.getElementById('lbl-legend-jp-diet').textContent = dict.legendJpDiet;
  
  // Color Mode Toggles
  document.getElementById('lbl-color-mode').textContent = dict.colorMode;
  document.getElementById('lbl-mode-age').textContent = dict.modeAge;
  document.getElementById('lbl-mode-gen').textContent = dict.modeGen;
  
  // Generation Legend Labels
  document.getElementById('lbl-gen-silent').textContent = dict.genSilent;
  document.getElementById('lbl-gen-boomer').textContent = dict.genBoomer;
  document.getElementById('lbl-gen-x').textContent = dict.genX;
  document.getElementById('lbl-gen-millennial').textContent = dict.genMillennial;
  document.getElementById('lbl-gen-z').textContent = dict.genZ;
  
  // Representation Mode Labels
  document.getElementById('lbl-view-mode').textContent = dict.viewMode;
  document.getElementById('lbl-view-dots').textContent = dict.viewDots;
  document.getElementById('lbl-view-bars').textContent = dict.viewBars;
  const lblViewComparison = document.getElementById('lbl-view-comparison');
  if (lblViewComparison) lblViewComparison.textContent = dict.viewComparison;
  document.getElementById('lbl-view-ratio').textContent = dict.viewRatio;
  
  // Ratio Sub-selector label
  const ratioSubLabel = document.getElementById('lbl-ratio-sub');
  if (ratioSubLabel) {
    ratioSubLabel.textContent = dict.ratioType;
  }

  // Custom Modal Close Button
  const modalActionBtn = document.getElementById('modal-action-btn');
  if (modalActionBtn) {
    modalActionBtn.textContent = dict.closeBtn;
  }

  // Tab Headers
  const lblTabMembers = document.getElementById('lbl-tab-members');
  if (lblTabMembers) lblTabMembers.textContent = dict.tabMembers;
  const lblTabIncome = document.getElementById('lbl-tab-income');
  if (lblTabIncome) lblTabIncome.textContent = dict.tabIncome;

  // Income page elements
  const lblCurrencySelector = document.getElementById('lbl-currency-selector');
  if (lblCurrencySelector) lblCurrencySelector.textContent = dict.currencySelector;
  const lblConceptMarketTitle = document.getElementById('lbl-concept-market-title');
  if (lblConceptMarketTitle) lblConceptMarketTitle.textContent = dict.conceptMarketTitle;
  const lblConceptMarketDesc = document.getElementById('lbl-concept-market-desc');
  if (lblConceptMarketDesc) lblConceptMarketDesc.textContent = dict.conceptMarketDesc;
  const lblConceptGrossTitle = document.getElementById('lbl-concept-gross-title');
  if (lblConceptGrossTitle) lblConceptGrossTitle.textContent = dict.conceptGrossTitle;
  const lblConceptGrossDesc = document.getElementById('lbl-concept-gross-desc');
  if (lblConceptGrossDesc) lblConceptGrossDesc.textContent = dict.conceptGrossDesc;
  const lblConceptDisposableTitle = document.getElementById('lbl-concept-disposable-title');
  if (lblConceptDisposableTitle) lblConceptDisposableTitle.textContent = dict.conceptDisposableTitle;
  const lblConceptDisposableDesc = document.getElementById('lbl-concept-disposable-desc');
  if (lblConceptDisposableDesc) lblConceptDisposableDesc.textContent = dict.conceptDisposableDesc;
  const lblConceptExtendedTitle = document.getElementById('lbl-concept-extended-title');
  if (lblConceptExtendedTitle) lblConceptExtendedTitle.textContent = dict.conceptExtendedTitle;
  const lblConceptExtendedDesc = document.getElementById('lbl-concept-extended-desc');
  if (lblConceptExtendedDesc) lblConceptExtendedDesc.textContent = dict.conceptExtendedDesc;
  const lblIncomeDataSource = document.getElementById('lbl-income-data-source');
  if (lblIncomeDataSource) lblIncomeDataSource.innerHTML = dict.incomeDataSource;
}

function updateLangSelectorButtons() {
  const buttons = document.querySelectorAll('#lang-selector .lang-btn');
  buttons.forEach(btn => {
    if (btn.getAttribute('data-lang') === state.currentLang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// ==========================================================================
// Japan Income Demographics Data and Render Logic
// ==========================================================================
const JAPAN_INCOME_DATA = {
  market: {
    '≤29': 4100000,
    '30-34': 5330000,
    '35-39': 6753000,
    '40-44': 7310000,
    '45-49': 7658000,
    '50-54': 7459000,
    '55-59': 7623000,
    '60-64': 6104000,
    '65-69': 3083000,
    '70-74': 2422000,
    '75+': 1523000
  },
  gross: {
    '≤29': 4151000,
    '30-34': 5525000,
    '35-39': 7030000,
    '40-44': 7594000,
    '45-49': 7828000,
    '50-54': 7666000,
    '55-59': 7893000,
    '60-64': 6636000,
    '65-69': 4739000,
    '70-74': 4648000,
    '75+': 3665000
  },
  disposable: {
    '≤29': 3347000,
    '30-34': 4409000,
    '35-39': 5449000,
    '40-44': 5830000,
    '45-49': 5979000,
    '50-54': 5809000,
    '55-59': 6003000,
    '60-64': 5085000,
    '65-69': 3978000,
    '70-74': 3916000,
    '75+': 3154000
  },
  extended: {
    '≤29': 3465000,
    '30-34': 4748000,
    '35-39': 6032000,
    '40-44': 6194000,
    '45-49': 6230000,
    '50-54': 6117000,
    '55-59': 6394000,
    '60-64': 5684000,
    '65-69': 4391000,
    '70-74': 4423000,
    '75+': 4381000
  }
};

function formatCurrency(val, currency, lang) {
  if (currency === 'JPY') {
    if (lang === 'ja') {
      return `${(val / 10000).toLocaleString(undefined, { maximumFractionDigits: 0 })}万円`;
    }
    return `¥${val.toLocaleString()}`;
  } else if (currency === 'EUR') {
    const eurVal = Math.round(val / 160);
    return `€${eurVal.toLocaleString()}`;
  } else if (currency === 'USD') {
    const usdVal = Math.round(val / 150);
    return `$${usdVal.toLocaleString()}`;
  }
  return val.toString();
}

function renderIncomeDistribution() {
  const currency = state.activeCurrency;
  const lang = state.currentLang;
  
  // Benchmark max to make all bars in both cards comparable (max in table is 7,893,000)
  const maxScaleVal = 8000000;
  
  const concepts = ['market', 'gross', 'disposable', 'extended'];
  
  concepts.forEach(concept => {
    const container = document.getElementById(`${concept}-income-bars`);
    if (!container) return;
    container.innerHTML = '';
    
    const conceptData = JAPAN_INCOME_DATA[concept];
    const keys = ['≤29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59', '60-64', '65-69', '70-74', '75+'];
    
    keys.forEach((key, index) => {
      const val = conceptData[key];
      const widthPct = (val / maxScaleVal) * 100;
      
      const formattedVal = formatCurrency(val, currency, lang);
      let displayKey = key;
      if (lang === 'ja') {
        if (key === '≤29') displayKey = '29歳以下';
        else if (key === '75+') displayKey = '75歳以上';
        else displayKey = `${key}歳`;
      } else {
        if (key === '≤29') displayKey = lang === 'es' ? 'Menores de 29 años' : 'Under 29 years';
        else if (key === '75+') displayKey = lang === 'es' ? '75 años o más' : '75 years or older';
        else displayKey = displayKey + (lang === 'es' ? ' años' : ' years');
      }
      
      // Use index for sequential color selection
      const colorClass = `bar-color-${index}`;
      
      const barGroup = document.createElement('div');
      barGroup.className = 'income-bar-group';
      barGroup.innerHTML = `
        <div class="income-bar-info">
          <span class="income-bar-age">${displayKey}</span>
          <span class="income-bar-value">${formattedVal}</span>
        </div>
        <div class="income-bar-track">
          <div class="income-bar-fill ${colorClass}" style="width: 0%"></div>
        </div>
      `;
      container.appendChild(barGroup);
      
      // Trigger a tiny reflow/timeout to kick off width animation transition smoothly
      setTimeout(() => {
        const fillEl = barGroup.querySelector('.income-bar-fill');
        if (fillEl) fillEl.style.width = `${widthPct}%`;
      }, 30);
    });
  });
}

function populatePartyDropdown() {
  const select = document.getElementById('party-filter-select');
  if (!select) return;
  select.innerHTML = '';
  
  const optionAll = document.createElement('option');
  optionAll.value = 'all';
  optionAll.id = 'lbl-party-all';
  optionAll.textContent = TRANSLATIONS[state.currentLang].partyAll;
  select.appendChild(optionAll);
  
  // Gather unique parties (only current active parties)
  const partiesMap = new Map();
  state.data.forEach(m => {
    const p = getActiveParty(m);
    if (p && p.ja) partiesMap.set(p.ja, p);
  });
  
  // Count current members per party to sort dropdown by count
  const partyCounts = {};
  state.data.forEach(m => {
    const p = getActiveParty(m);
    if (p && p.ja) {
      const jaName = p.ja;
      partyCounts[jaName] = (partyCounts[jaName] || 0) + 1;
    }
  });
  
  const sortedParties = Array.from(partiesMap.values()).sort((a, b) => {
    return (partyCounts[b.ja] || 0) - (partyCounts[a.ja] || 0);
  });
  
  sortedParties.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.ja;
    opt.textContent = state.currentLang === 'ja' ? p.ja : (state.currentLang === 'en' ? p.en : p.es);
    select.appendChild(opt);
  });
}

function getMemberName(m) {
  return state.currentLang === 'ja' ? m.name_ja : m.name_en;
}

function getMemberPartyName(m) {
  const p = getActiveParty(m);
  if (!p) {
    const dict = TRANSLATIONS[state.currentLang];
    return dict.independent;
  }
  if (state.currentLang === 'ja') return p.ja;
  if (state.currentLang === 'en') return p.en;
  return p.es;
}

function getMemberMainPartyName(m) {
  const p = getActiveParty(m);
  if (!p) {
    const dict = TRANSLATIONS[state.currentLang];
    return dict.independent;
  }
  if (state.currentLang === 'ja') return p.ja;
  if (state.currentLang === 'en') return p.en;
  return p.es;
}

function renderPartyCellHTML(m) {
  const p = getActiveParty(m);
  if (!p) {
    const dict = TRANSLATIONS[state.currentLang];
    return `<span style="color: var(--text-muted);">${dict.independent}</span>`;
  }
  const name = state.currentLang === 'ja' ? p.ja : (state.currentLang === 'en' ? p.en : p.es);
  const logoHTML = getPartyLogoHTML(p.ja, "22px");
  if (p.wiki_url) {
    return `<a href="${p.wiki_url}" target="_blank" class="party-wrapper-cell" title="${name}" style="text-decoration: none;">${logoHTML}</a>`;
  }
  return `<span class="party-wrapper-cell" title="${name}">${logoHTML}</span>`;
}

// ==========================================================================
// Statistics Calculators & Party Demographics tab rendering
// ==========================================================================
function floorAvg(val, decimals = 1) {
  const factor = Math.pow(10, decimals);
  return (Math.floor(val * factor) / factor).toFixed(decimals);
}

function calculateGlobalStats() {
  if (state.data.length === 0) return;

  const dict = TRANSLATIONS[state.currentLang];
  const total = state.data.length;
  document.getElementById('stat-total').textContent = total;

  const metaLabel = document.getElementById('lbl-stat-total-meta');
  if (metaLabel) {
    metaLabel.style.cursor = 'pointer';
    metaLabel.style.textDecoration = 'underline dashed';
    metaLabel.onclick = () => {
      const explanation = state.currentLang === 'ja' 
        ? "現在、議員の辞職、逝去、または次の補欠選挙による欠員が数議席あるためです。"
        : (state.currentLang === 'en'
          ? "There are currently a few vacant seats in the Diet due to resignations, deaths, or upcoming by-elections."
          : "Actualmente existen algunos escaños vacantes en la Dieta debido a renuncias, fallecimientos o elecciones parciales pendientes.");
      showModal(dict.modalTitle, explanation);
    };
  }

  const ages = state.data.map(m => m.age);
  const avg = ages.reduce((a, b) => a + b, 0) / total;
  document.getElementById('stat-average').textContent = floorAvg(avg, 0);

  // Find youngest and oldest
  const sortedByAge = [...state.data].sort((a, b) => a.age - b.age);
  const youngest = sortedByAge[0];
  const oldest = sortedByAge[sortedByAge.length - 1];

  // Update Youngest
  document.getElementById('stat-young-name').textContent = getMemberName(youngest);
  document.getElementById('stat-young-meta').textContent = dict.statYoungMeta
    .replace('{age}', youngest.age)
    .replace('{party}', getMemberMainPartyName(youngest));

  // Update Oldest
  document.getElementById('stat-old-name').textContent = getMemberName(oldest);
  document.getElementById('stat-old-meta').textContent = dict.statOldMeta
    .replace('{age}', oldest.age)
    .replace('{party}', getMemberMainPartyName(oldest));
}

// ==========================================================================
// Hemicircle Visual Coordinates Math and Render
// ==========================================================================
function generateHemicircleCoords(numSeats) {
  let numRings = 9;
  if (numSeats < 100) numRings = 4;
  else if (numSeats < 250) numRings = 6;
  else if (numSeats < 500) numRings = 8;
  else numRings = 9;
  
  const rMin = 110;
  const rMax = 282;
  const ringSpacing = (rMax - rMin) / (numRings - 1 || 1);
  
  let totalCircumference = 0;
  for (let i = 0; i < numRings; i++) {
    totalCircumference += (rMin + i * ringSpacing);
  }
  
  let seatsPerRing = [];
  let assignedSeats = 0;
  for (let i = 0; i < numRings; i++) {
    const r = rMin + i * ringSpacing;
    let count = Math.round((r / totalCircumference) * numSeats);
    seatsPerRing.push(count);
    assignedSeats += count;
  }
  
  let diff = numSeats - assignedSeats;
  while (diff !== 0) {
    if (diff > 0) {
      for (let i = numRings - 1; i >= 0 && diff > 0; i--) {
        seatsPerRing[i]++;
        diff--;
      }
    } else {
      for (let i = 0; i < numRings && diff < 0; i++) {
        if (seatsPerRing[i] > 1) {
          seatsPerRing[i]--;
          diff++;
        }
      }
    }
  }
  
  const coords = [];
  const numSectors = 8;
  const sectorGap = 0.038; // Gap in radians between wedges (approx 2.2 degrees)
  
  const startAngle = Math.PI - 0.12;
  const endAngle = 0.12;
  const angleRange = startAngle - endAngle;
  
  const totalGapAngle = (numSectors - 1) * sectorGap;
  const activeAngleRange = angleRange - totalGapAngle;
  
  for (let i = 0; i < numRings; i++) {
    const r = rMin + i * ringSpacing;
    const count = seatsPerRing[i];
    if (count === 0) continue;
    
    for (let j = 0; j < count; j++) {
      const t = j / (count - 1 || 1); // Value from 0 to 1
      
      const angleFromStart = t * activeAngleRange;
      const numGapsCrossed = Math.min(numSectors - 1, Math.floor(t * numSectors));
      const currentAngle = startAngle - (angleFromStart + numGapsCrossed * sectorGap);
      
      const x = 300 + r * Math.cos(currentAngle);
      const y = 298 - r * Math.sin(currentAngle);
      coords.push({ x, y, angle: currentAngle });
    }
  }
  
  coords.sort((a, b) => b.angle - a.angle);
  return coords;
}

function getAgeColor(age) {
  if (age >= 70) return '#8c1c1c'; // Deep Maroon / Crimson (70+)
  if (age >= 60) return '#ef4444'; // Bright Red (60-69)
  if (age >= 50) return '#f97316'; // Amber / Orange (50-59)
  if (age >= 40) return '#84cc16'; // Yellow-Green (40-49)
  return '#06b6d4'; // Electric Cyan / Teal (<40)
}

function getGenerationInfo(age) {
  if (age >= 81) {
    return { name_es: "Gen. Silenciosa o ant.", name_en: "Silent Gen or older", name_ja: "サイレント世代以上", color: "#8c1c1c" };
  } else if (age >= 62) {
    return { name_es: "Baby Boomers", name_en: "Baby Boomers", name_ja: "ベビーブーマー", color: "#ef4444" };
  } else if (age >= 46) {
    return { name_es: "Generación X", name_en: "Gen X", name_ja: "ジェネレーションX", color: "#f97316" };
  } else if (age >= 30) {
    return { name_es: "Millennials", name_en: "Millennials", name_ja: "ミレニアル世代", color: "#84cc16" };
  } else {
    return { name_es: "Zoomers (Gen Z)", name_en: "Zoomers (Gen Z)", name_ja: "Z世代", color: "#06b6d4" };
  }
}

function getGenerationName(genInfo) {
  if (state.currentLang === 'ja') return genInfo.name_ja;
  if (state.currentLang === 'en') return genInfo.name_en;
  return genInfo.name_es;
}

function renderHistogram() {
  const container = document.getElementById('histogram-container');
  if (!container) return;
  container.innerHTML = '';
  
  const dict = TRANSLATIONS[state.currentLang];
  const total = state.filteredData.length;
  if (total === 0) {
    container.innerHTML = `<div style="margin: auto; color: var(--text-muted); font-size: 14px;">${dict.noResults}</div>`;
    return;
  }
  
  let brackets = [];
  if (state.colorMode === 'generation') {
    brackets = [
      { key: 'silent', label: dict.lblSilent, color: '#8c1c1c', count: 0 },
      { key: 'boomer', label: dict.lblBoomer, color: '#ef4444', count: 0 },
      { key: 'x', label: dict.lblX, color: '#f97316', count: 0 },
      { key: 'millennial', label: dict.lblMillennial, color: '#84cc16', count: 0 },
      { key: 'z', label: dict.lblZ, color: '#06b6d4', count: 0 }
    ];
    
    state.filteredData.forEach(m => {
      if (m.age >= 81) brackets[0].count++;
      else if (m.age >= 62) brackets[1].count++;
      else if (m.age >= 46) brackets[2].count++;
      else if (m.age >= 30) brackets[3].count++;
      else brackets[4].count++;
    });
  } else {
    brackets = [
      { key: '70', label: dict.legend70, color: '#8c1c1c', count: 0 },
      { key: '60', label: dict.legend60, color: '#ef4444', count: 0 },
      { key: '50', label: dict.legend50, color: '#f97316', count: 0 },
      { key: '40', label: dict.legend40, color: '#84cc16', count: 0 },
      { key: '30', label: dict.legend30, color: '#06b6d4', count: 0 }
    ];
    
    state.filteredData.forEach(m => {
      if (m.age >= 70) brackets[0].count++;
      else if (m.age >= 60) brackets[1].count++;
      else if (m.age >= 50) brackets[2].count++;
      else if (m.age >= 40) brackets[3].count++;
      else brackets[4].count++;
    });
  }
  
  brackets.sort((a, b) => b.count - a.count);
  
  const maxCount = Math.max(...brackets.map(b => b.count)) || 1;
  
  brackets.forEach(b => {
    const pct = total > 0 ? (b.count / total) * 100 : 0;
    const heightPct = (b.count / maxCount) * 82; // Max height inside container is 82%
    
    const wrapper = document.createElement('div');
    wrapper.className = 'histo-bar-wrapper';
    
    wrapper.innerHTML = `
      <div class="histo-bar" style="height: ${heightPct}%; background-color: ${b.color};" title="${b.label}: ${b.count} escaños">
        <div class="histo-bar-value-inside">
          <span class="histo-num-top">${b.count}</span>
          <span class="histo-pct-center">${pct.toFixed(0)}%</span>
        </div>
        <span class="histo-bar-label">${b.label}</span>
      </div>
    `;
    container.appendChild(wrapper);
  });
}

function renderComparisonHistogram() {
  const container = document.getElementById('histogram-container');
  if (!container) return;
  container.innerHTML = '';
  
  const dict = TRANSLATIONS[state.currentLang];
  const total = state.filteredData.length;
  if (total === 0) {
    container.innerHTML = `<div style="margin: auto; color: var(--text-muted); font-size: 14px;">${dict.noResults}</div>`;
    return;
  }
  
  // Baseline US Congress 1983 percentages from Image 1
  const us1983 = {
    '25-29': 0.6,
    '30-34': 4.0,
    '35-39': 8.4,
    '40-44': 17.9,
    '45-49': 14.6,
    '50-54': 18.2,
    '55-59': 15.5,
    '60-64': 9.3,
    '65-69': 6.0,
    '70-74': 4.3,
    '75-79': 0.6,
    '80-84': 0.8,
    '85-89': 0.0,
    '90-94': 0.0,
    '95+': 0.0
  };

  const bins = ['25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59', '60-64', '65-69', '70-74', '75-79', '80-84', '85-89', '90-94', '95+'];
  
  const jpCounts = {};
  bins.forEach(bin => { jpCounts[bin] = 0; });

  state.filteredData.forEach(m => {
    const age = m.age;
    for (let i = 0; i < bins.length; i++) {
      const bin = bins[i];
      if (bin === '95+') {
        if (age >= 95) {
          jpCounts[bin]++;
          break;
        }
      } else {
        const [low, high] = bin.split('-').map(Number);
        if (age >= low && age <= high) {
          jpCounts[bin]++;
          break;
        }
      }
    }
  });

  const maxVal = 20; // 20% max on visual scale to match the 20% axis of the image

  bins.forEach(bin => {
    const usPct = us1983[bin] || 0;
    const jpPct = total > 0 ? (jpCounts[bin] / total) * 100 : 0;

    const usHeight = (usPct / maxVal) * 100;
    const jpHeight = (jpPct / maxVal) * 100;

    const wrapper = document.createElement('div');
    wrapper.className = 'histo-bar-wrapper';
    
    // Label for axis
    const axisLabel = bin === '95+' ? '95+' : bin.split('-')[0];

    wrapper.innerHTML = `
      <div class="histo-bars-pair">
        <div class="histo-bar us-series" style="height: ${usHeight}%;" title="US Congress 1983 (${bin}): ${usPct.toFixed(1)}%"></div>
        <div class="histo-bar jp-series" style="height: ${jpHeight}%;" title="Japan Diet (${bin}): ${jpPct.toFixed(1)}% (${jpCounts[bin]} escaños)"></div>
      </div>
      <span class="histo-bar-label">${axisLabel}</span>
    `;
    container.appendChild(wrapper);
  });
}

function renderRatioChart() {
  const container = document.getElementById('histogram-container');
  if (!container) return;
  container.innerHTML = '';
  container.className = 'hemicircle-legend'; // Reset layout classes
  
  const dict = TRANSLATIONS[state.currentLang];
  const total = state.filteredData.length;
  if (total === 0) {
    container.innerHTML = `<div style="margin: auto; color: var(--text-muted); font-size: 14px;">${dict.noResults}</div>`;
    return;
  }

  // Render sub-selector buttons in the controls panel
  const containerSub = document.getElementById('ratio-sub-selector-container');
  if (containerSub) {
    containerSub.innerHTML = `
      <button class="btn-mini ${state.ratioSubView === 'ratios' ? 'active' : ''}" data-sub="ratios">${dict.subCards}</button>
      <button class="btn-mini ${state.ratioSubView === 'flow' ? 'active' : ''}" data-sub="flow">${dict.subFlow}</button>
      <button class="btn-mini ${state.ratioSubView === 'waffle' ? 'active' : ''}" data-sub="waffle">${dict.subWaffle}</button>
    `;
    
    containerSub.querySelectorAll('.btn-mini').forEach(btn => {
      btn.onclick = (e) => {
        state.ratioSubView = e.target.getAttribute('data-sub');
        renderRatioChart();
      };
    });
  }

  let brackets = [];
  if (state.colorMode === 'generation') {
    brackets = [
      { key: 'silent', label: dict.lblSilent, color: '#8c1c1c', popShare: 0.1016, count: 0 },
      { key: 'boomer', label: dict.lblBoomer, color: '#ef4444', popShare: 0.2870, count: 0 },
      { key: 'x', label: dict.lblX, color: '#f97316', popShare: 0.2743, count: 0 },
      { key: 'millennial', label: dict.lblMillennial, color: '#84cc16', popShare: 0.2191, count: 0 },
      { key: 'z', label: dict.lblZ, color: '#06b6d4', popShare: 0.1181, count: 0 }
    ];
    
    state.filteredData.forEach(m => {
      if (m.age >= 81) brackets[0].count++;
      else if (m.age >= 62) brackets[1].count++;
      else if (m.age >= 46) brackets[2].count++;
      else if (m.age >= 30) brackets[3].count++;
      else brackets[4].count++;
    });
  } else {
    brackets = [
      { key: '70', label: dict.legend70, color: '#8c1c1c', popShare: 0.2728, count: 0 },
      { key: '60', label: dict.legend60, color: '#ef4444', popShare: 0.1450, count: 0 },
      { key: '50', label: dict.legend50, color: '#f97316', popShare: 0.1729, count: 0 },
      { key: '40', label: dict.legend40, color: '#84cc16', popShare: 0.1645, count: 0 },
      { key: '30', label: dict.legend30, color: '#06b6d4', popShare: 0.2447, count: 0 }
    ];
    
    state.filteredData.forEach(m => {
      if (m.age >= 70) brackets[0].count++;
      else if (m.age >= 60) brackets[1].count++;
      else if (m.age >= 50) brackets[2].count++;
      else if (m.age >= 40) brackets[3].count++;
      else brackets[4].count++;
    });
  }
  
  brackets.forEach(b => {
    b.dietShare = total > 0 ? b.count / total : 0;
  });

  const labelDiet = state.currentLang === 'ja' ? '国会' : (state.currentLang === 'en' ? 'Diet' : 'Dieta');
  const labelPop = state.currentLang === 'ja' ? '人口' : (state.currentLang === 'en' ? 'Population' : 'Población');

  if (state.ratioSubView === 'waffle') {
    // Allocate exactly 100 cells
    let popCells = [];
    brackets.forEach(b => {
      const count = Math.round(b.popShare * 100);
      for (let i = 0; i < count; i++) popCells.push(b.color);
    });
    while (popCells.length < 100) popCells.push(brackets[brackets.length - 1].color);
    popCells = popCells.slice(0, 100);
    
    let dietCells = [];
    brackets.forEach(b => {
      const count = Math.round(b.dietShare * 100);
      for (let i = 0; i < count; i++) dietCells.push(b.color);
    });
    while (dietCells.length < 100) dietCells.push(brackets[brackets.length - 1].color);
    dietCells = dietCells.slice(0, 100);
    
    const waffleHTML = `
      <div class="waffle-container">
        <div class="waffle-box">
          <div class="waffle-title">${labelPop}</div>
          <div class="waffle-grid">
            ${popCells.map(c => `<div class="waffle-cell" style="background-color: ${c}; opacity: 0.95;"></div>`).join('')}
          </div>
        </div>
        <div class="waffle-box">
          <div class="waffle-title">${labelDiet}</div>
          <div class="waffle-grid">
            ${dietCells.map(c => `<div class="waffle-cell" style="background-color: ${c}; opacity: 0.95;"></div>`).join('')}
          </div>
        </div>
      </div>
    `;
    container.innerHTML += waffleHTML;
    
  } else if (state.ratioSubView === 'flow') {
    // Flow/Sankey diagram
    let svgContent = `<svg class="ratio-svg-container" viewBox="0 0 500 320" style="padding-top: 15px;">`;
    
    // Labels
    svgContent += `
      <text x="70" y="295" text-anchor="middle" class="ratio-svg-text-bold">${labelPop}</text>
      <text x="430" y="295" text-anchor="middle" class="ratio-svg-text-bold">${labelDiet}</text>
    `;
    
    // Draw flows
    let yLeftStart = 20;
    let yRightStart = 20;
    const flowHeight = 240;
    
    brackets.forEach(b => {
      const hLeft = b.popShare * flowHeight;
      const hRight = b.dietShare * flowHeight;
      
      // Control points for cubic bezier curves
      const pathData = `
        M 120 ${yLeftStart}
        C 250 ${yLeftStart}, 250 ${yRightStart}, 380 ${yRightStart}
        L 380 ${yRightStart + hRight}
        C 250 ${yRightStart + hRight}, 250 ${yLeftStart + hLeft}, 120 ${yLeftStart + hLeft}
        Z
      `;
      
      const tooltip = `${b.label}: ${labelPop} ${(b.popShare*100).toFixed(0)}% → ${labelDiet} ${(b.dietShare*100).toFixed(0)}%`;
      
      svgContent += `
        <g title="${tooltip}">
          <!-- Flow ribbon -->
          <path d="${pathData}" fill="${b.color}" opacity="0.4" style="transition: opacity 0.2s;" onmouseover="this.setAttribute('opacity', '0.75')" onmouseout="this.setAttribute('opacity', '0.4')" />
          
          <!-- Source/Target blocks -->
          <rect x="110" y="${yLeftStart}" width="10" height="${hLeft}" fill="${b.color}" />
          <rect x="380" y="${yRightStart}" width="10" height="${hRight}" fill="${b.color}" />
          
          <!-- Value labels -->
          <text x="100" y="${yLeftStart + hLeft/2 + 3.5}" text-anchor="end" class="ratio-svg-text" style="font-size: 10px;">${(b.popShare * 100).toFixed(0)}%</text>
          <text x="400" y="${yRightStart + hRight/2 + 3.5}" text-anchor="start" class="ratio-svg-text" style="font-size: 10px;">${(b.dietShare * 100).toFixed(0)}%</text>
          
          <!-- Left cohort name -->
          <text x="10" y="${yLeftStart + hLeft/2 + 3.5}" text-anchor="start" class="ratio-svg-text-bold" style="font-size: 11px; fill: var(--text-main);">${b.label}</text>
        </g>
      `;
      
      yLeftStart += hLeft;
      yRightStart += hRight;
    });
    
    svgContent += `</svg>`;
    container.innerHTML += svgContent;
    
  } else if (state.ratioSubView === 'ratios') {
    // Render absolute ratio metrics (e.g. 1 politician per X citizens)
    const adultPopTotal = 102892000;
    const nationalAvg = Math.round(adultPopTotal / total);
    
    // Sort cohorts from most overrepresented (lowest citizens per politician) to least represented
    brackets.sort((a, b) => {
      const aDiet = a.count;
      const bDiet = b.count;
      if (aDiet === 0 && bDiet !== 0) return 1;
      if (bDiet === 0 && aDiet !== 0) return -1;
      if (aDiet === 0 && bDiet === 0) return 0;
      
      const aPerRep = Math.round((a.popShare * adultPopTotal) / aDiet);
      const bPerRep = Math.round((b.popShare * adultPopTotal) / bDiet);
      return aPerRep - bPerRep;
    });
    
    const cardsDiv = document.createElement('div');
    cardsDiv.className = 'ratio-cards-grid';
    
    brackets.forEach(b => {
      const popCount = Math.round(b.popShare * adultPopTotal);
      const dietCount = b.count;
      
      let ratioText = '';
      let subText = '';
      
      if (dietCount === 0) {
        ratioText = state.currentLang === 'ja'
          ? `議員なし (人口 ${popCount.toLocaleString('ja-JP')}人)`
          : (state.currentLang === 'en'
            ? `0 politicians (pop: ${popCount.toLocaleString('en-US')})`
            : `0 políticos (pob: ${popCount.toLocaleString('es-ES')})`);
        subText = state.currentLang === 'ja'
          ? `<span style="color: var(--text-muted); font-weight: 700;">▼ 未代表</span>`
          : (state.currentLang === 'en' 
            ? `<span style="color: var(--text-muted); font-weight: 700;">▼ Unrepresented</span>` 
            : `<span style="color: var(--text-muted); font-weight: 700;">▼ Sin representación</span>`);
      } else {
        const perRep = Math.round(popCount / dietCount);
        ratioText = state.currentLang === 'ja'
          ? `1人 / ${perRep.toLocaleString('ja-JP')}人`
          : (state.currentLang === 'en'
            ? `1 per ${perRep.toLocaleString('en-US')} people`
            : `1 por cada ${perRep.toLocaleString('es-ES')} hab.`);
            
        const ratioOfAverage = nationalAvg / perRep;
        if (ratioOfAverage >= 1.1) {
          subText = state.currentLang === 'ja'
            ? `<span style="color: var(--old-text); font-weight: 700;">▲ 過剰代表</span> (平均の ${ratioOfAverage.toFixed(1)} 倍)`
            : (state.currentLang === 'en'
              ? `<span style="color: var(--old-text); font-weight: 700;">▲ Overrepresented</span> (${ratioOfAverage.toFixed(1)}x average)`
              : `<span style="color: var(--old-text); font-weight: 700;">▲ Sobrerrepresentado</span> (${ratioOfAverage.toFixed(1)}x el promedio)`);
        } else if (ratioOfAverage <= 0.9) {
          const pct = Math.round(ratioOfAverage * 100);
          subText = state.currentLang === 'ja'
            ? `<span style="color: var(--young-text); font-weight: 700;">▼ 過小代表</span> (平均の ${pct}%)`
            : (state.currentLang === 'en'
              ? `<span style="color: var(--young-text); font-weight: 700;">▼ Underrepresented</span> (${pct}% of average)`
              : `<span style="color: var(--young-text); font-weight: 700;">▼ Infrarrepresentado</span> (solo el ${pct}% del promedio)`);
        } else {
          subText = state.currentLang === 'ja'
            ? `均衡代表 (平均的)`
            : (state.currentLang === 'en' ? `Balanced representation` : `Representación equilibrada`);
        }
      }
      
      cardsDiv.innerHTML += `
        <div class="ratio-card" style="border-left: 4px solid ${b.color};">
          <div class="ratio-card-cohort" style="color: ${b.color};">${b.label}</div>
          <div class="ratio-card-value">${ratioText}</div>
          <div class="ratio-card-sub">${subText}</div>
        </div>
      `;
    });
    
    container.appendChild(cardsDiv);
  }
}

function renderHemicircle() {
  const svg = document.getElementById('hemicircle-svg');
  if (!svg) return;
  svg.innerHTML = '';
  
  const sortedFiltered = [...state.filteredData].sort((a, b) => b.age - a.age);
  const numSeats = sortedFiltered.length;
  if (numSeats === 0) return;
  
  const coords = generateHemicircleCoords(numSeats);
  
  coords.forEach((coord, index) => {
    const m = sortedFiltered[index];
    if (!m) return;
    
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', coord.x.toFixed(1));
    circle.setAttribute('cy', coord.y.toFixed(1));
    circle.setAttribute('r', numSeats > 450 ? '3.8' : (numSeats > 250 ? '5.0' : '6.8'));
    circle.setAttribute('class', 'seat-dot');
    circle.setAttribute('fill', state.colorMode === 'generation' ? getGenerationInfo(m.age).color : getAgeColor(m.age));
    circle.setAttribute('opacity', '0.92');
    
    circle.addEventListener('mouseover', (e) => {
      showHemicircleTooltip(e, m, coord.x, coord.y);
      circle.style.opacity = '1';
    });
    
    circle.addEventListener('mouseout', () => {
      hideHemicircleTooltip();
      circle.style.opacity = '0.92';
    });
    
    circle.addEventListener('click', () => {
      if (m.wikipedia_url) {
        window.open(m.wikipedia_url, '_blank');
      }
    });
    
    svg.appendChild(circle);
  });
}

function showHemicircleTooltip(e, m, x, y) {
  const tooltip = document.getElementById('hemicircle-tooltip');
  if (!tooltip) return;
  
  const name = getMemberName(m);
  const party = getMemberMainPartyName(m);
  const partyAbbr = getPartyAbbr(party);
  const dict = TRANSLATIONS[state.currentLang];
  const chamberLabel = m.chamber === 'House of Representatives' ? dict.chamberLabelReps : dict.chamberLabelCounc;
  
  let ageAndInfo = `${m.age} ${dict.yearsLabel}`;
  if (state.colorMode === 'generation') {
    const genInfo = getGenerationInfo(m.age);
    ageAndInfo = `${getGenerationName(genInfo)} (${m.age} ${dict.yearsLabel})`;
  }
  
  tooltip.innerHTML = `
    <div class="tooltip-name">${name} (${partyAbbr})</div>
    <div class="tooltip-party">${ageAndInfo} - ${chamberLabel}</div>
  `;
  tooltip.style.display = 'block';
  tooltip.style.left = `${(x / 600) * 100}%`;
  tooltip.style.top = `${(y / 310) * 100}%`;
}

function hideHemicircleTooltip() {
  const tooltip = document.getElementById('hemicircle-tooltip');
  if (tooltip) tooltip.style.display = 'none';
}

// ==========================================================================
// Filtering, Sorting and Rendering logic
// ==========================================================================
function applyFiltersAndRender() {
  let results = state.data;
  
  if (state.currentChamber !== 'all') {
    results = results.filter(m => m.chamber === state.currentChamber);
  }
  
  if (state.currentParty !== 'all') {
    results = results.filter(m => {
      const p = getActiveParty(m);
      return p && p.ja === state.currentParty;
    });
  }
  
  results = results.filter(m => m.age >= state.ageMin && m.age <= state.ageMax);

  if (state.searchQuery.trim() !== '') {
    const query = state.searchQuery.toLowerCase();
    results = results.filter(m => 
      getMemberName(m).toLowerCase().includes(query) || 
      getMemberPartyName(m).toLowerCase().includes(query)
    );
  }

  const dir = state.sortDirection === 'asc' ? 1 : -1;
  const col = state.sortColumn;
  
  results.sort((a, b) => {
    if (col === 'age') {
      return (a.age - b.age) * dir;
    } else if (col === 'dob') {
      return a.dob.localeCompare(b.dob) * dir;
    } else if (col === 'chamber') {
      return a.chamber.localeCompare(b.chamber) * dir;
    } else if (col === 'party') {
      const pA = getMemberMainPartyName(a);
      const pB = getMemberMainPartyName(b);
      return pA.localeCompare(pB) * dir;
    } else {
      const nA = getMemberName(a);
      const nB = getMemberName(b);
      return nA.localeCompare(nB) * dir;
    }
  });

  state.filteredData = results;
  state.currentPage = 1;

  // Reactively auto-switch viewMode if filtering state changed
  const isFiltered = state.searchQuery.trim() !== '' || 
                     state.currentChamber !== 'all' || 
                     state.currentParty !== 'all' || 
                     state.ageMin > 20 || 
                     state.ageMax < 100;

  if (state.wasFiltered === undefined) {
    state.wasFiltered = false;
  }

  if (state.wasFiltered !== isFiltered) {
    if (isFiltered) {
      if (state.viewMode === 'dots') {
        state.viewMode = 'bars';
        state.sortDirection = 'desc';
      }
    } else {
      state.viewMode = 'dots';
      state.sortDirection = 'asc';
    }
    state.wasFiltered = isFiltered;
    
    // Sync view buttons highlight
    const viewButtons = document.querySelectorAll('#view-mode-filters .btn-mini');
    viewButtons.forEach(btn => {
      if (btn.getAttribute('data-view') === state.viewMode) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // Toggle display containers
  const svgEl = document.getElementById('hemicircle-svg');
  const histoEl = document.getElementById('histogram-container');
  const subControlsEl = document.getElementById('ratio-sub-controls');
  
  if (subControlsEl) {
    subControlsEl.style.display = state.viewMode === 'ratio' ? 'flex' : 'none';
  }
  
  if (state.viewMode === 'bars') {
    if (svgEl) svgEl.style.display = 'none';
    if (histoEl) {
      histoEl.style.display = 'flex';
      histoEl.style.height = '270px';
      renderHistogram();
    }
    
    if (state.colorMode === 'generation') {
      document.getElementById('legend-age-view').style.display = 'none';
      document.getElementById('legend-generation-view').style.display = 'flex';
    } else {
      document.getElementById('legend-age-view').style.display = 'flex';
      document.getElementById('legend-generation-view').style.display = 'none';
    }
    document.getElementById('legend-histogram-view').style.display = 'none';
  } else if (state.viewMode === 'comparison') {
    if (svgEl) svgEl.style.display = 'none';
    if (histoEl) {
      histoEl.style.display = 'flex';
      histoEl.style.height = '270px';
      renderComparisonHistogram();
    }
    document.getElementById('legend-age-view').style.display = 'none';
    document.getElementById('legend-generation-view').style.display = 'none';
    document.getElementById('legend-histogram-view').style.display = 'flex';
  } else if (state.viewMode === 'ratio') {
    if (svgEl) svgEl.style.display = 'none';
    if (histoEl) {
      histoEl.style.display = 'block';
      histoEl.style.height = 'auto';
      renderRatioChart();
    }
    document.getElementById('legend-age-view').style.display = 'none';
    document.getElementById('legend-generation-view').style.display = 'none';
    document.getElementById('legend-histogram-view').style.display = 'none';
  } else {
    if (svgEl) svgEl.style.display = 'block';
    if (histoEl) histoEl.style.display = 'none';
    
    if (state.colorMode === 'generation') {
      document.getElementById('legend-age-view').style.display = 'none';
      document.getElementById('legend-generation-view').style.display = 'flex';
    } else {
      document.getElementById('legend-age-view').style.display = 'flex';
      document.getElementById('legend-generation-view').style.display = 'none';
    }
    document.getElementById('legend-histogram-view').style.display = 'none';
    
    renderHemicircle();
  }

  renderMembersTable();
  updateHeaderIndicators();
}

function updateHeaderIndicators() {
  const headers = document.querySelectorAll('th.sortable');
  headers.forEach(th => {
    const col = th.getAttribute('data-sort');
    th.classList.remove('active', 'asc', 'desc');
    if (col === state.sortColumn) {
      th.classList.add('active', state.sortDirection);
    }
  });
}

function renderMembersTable() {
  const tbody = document.getElementById('members-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';

  const totalResults = state.filteredData.length;
  const dict = TRANSLATIONS[state.currentLang];
  
  document.getElementById('results-count').textContent = dict.resultsCount.replace('{count}', totalResults);

  if (totalResults === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 40px 10px;">${dict.noResults}</td></tr>`;
    document.getElementById('pagination-controls').innerHTML = '';
    return;
  }

  const startIndex = (state.currentPage - 1) * state.pageSize;
  const endIndex = Math.min(startIndex + state.pageSize, totalResults);
  const paginatedItems = state.filteredData.slice(startIndex, endIndex);

  paginatedItems.forEach(m => {
    const tr = document.createElement('tr');
    const chamberLabel = m.chamber === 'House of Representatives' ? dict.chamberLabelReps : dict.chamberLabelCounc;
    const chamberClass = m.chamber === 'House of Representatives' ? 'reps' : 'councillors';
    const chamberWiki = m.chamber === 'House of Representatives' 
      ? 'https://ja.wikipedia.org/wiki/%E8%A1%86%E8%AD%B0%E9%99%A2' 
      : 'https://ja.wikipedia.org/wiki/%E5%8F%82%E8%AD%B0%E9%99%A2';

    const nameHTML = m.wikipedia_url 
      ? `<a href="${m.wikipedia_url}" target="_blank" class="member-name-link">${getMemberName(m)}</a>`
      : `<span class="member-name-text">${getMemberName(m)}</span>`;

    const chamberHTML = `<a href="${chamberWiki}" target="_blank" class="chamber-badge-link"><span class="chamber-badge ${chamberClass}">${chamberLabel}</span></a>`;

    tr.innerHTML = `
      <td class="member-name-cell">${nameHTML}</td>
      <td><strong>${m.age}</strong> ${dict.yearsLabel}</td>
      <td style="color: var(--text-muted);">${m.dob}</td>
      <td>${chamberHTML}</td>
      <td class="party-cell">${renderPartyCellHTML(m)}</td>
    `;
    tbody.appendChild(tr);
  });

  renderPaginationControls();
}

function renderPaginationControls() {
  const controls = document.getElementById('pagination-controls');
  if (!controls) return;
  controls.innerHTML = '';

  const totalResults = state.filteredData.length;
  const totalPages = Math.ceil(totalResults / state.pageSize);
  const dict = TRANSLATIONS[state.currentLang];

  if (totalPages <= 1) return;

  const prevBtn = document.createElement('button');
  prevBtn.className = 'page-btn';
  prevBtn.textContent = state.currentLang === 'ja' ? '← 前' : (state.currentLang === 'en' ? '← Prev' : '← Ant.');
  prevBtn.disabled = state.currentPage === 1;
  prevBtn.addEventListener('click', () => {
    if (state.currentPage > 1) {
      state.currentPage--;
      renderMembersTable();
    }
  });
  controls.appendChild(prevBtn);

  let startPage = Math.max(1, state.currentPage - 2);
  let endPage = Math.min(totalPages, startPage + 4);
  if (endPage - startPage < 4) {
    startPage = Math.max(1, endPage - 4);
  }

  for (let i = startPage; i <= endPage; i++) {
    const pageBtn = document.createElement('button');
    pageBtn.className = `page-btn ${state.currentPage === i ? 'active' : ''}`;
    pageBtn.textContent = i;
    pageBtn.addEventListener('click', () => {
      state.currentPage = i;
      renderMembersTable();
    });
    controls.appendChild(pageBtn);
  }

  const nextBtn = document.createElement('button');
  nextBtn.className = 'page-btn';
  nextBtn.textContent = state.currentLang === 'ja' ? '次 →' : (state.currentLang === 'en' ? 'Next →' : 'Sig. →');
  nextBtn.disabled = state.currentPage === totalPages;
  nextBtn.addEventListener('click', () => {
    if (state.currentPage < totalPages) {
      state.currentPage++;
      renderMembersTable();
    }
  });
  controls.appendChild(nextBtn);

  const infoLabel = document.createElement('span');
  infoLabel.className = 'page-info-label';
  infoLabel.textContent = dict.pageLabel
    .replace('{page}', state.currentPage)
    .replace('{total}', totalPages);
  controls.appendChild(infoLabel);
}

// ==========================================================================
// Event Listeners Initialization
// ==========================================================================
function initEventListeners() {
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    applyFiltersAndRender();
  });

  const filterButtons = document.querySelectorAll('#chamber-filters .btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterButtons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      state.currentChamber = e.target.getAttribute('data-chamber');
      applyFiltersAndRender();
    });
  });

  const partySelect = document.getElementById('party-filter-select');
  partySelect.addEventListener('change', (e) => {
    state.currentParty = e.target.value;
    applyFiltersAndRender();
  });

  const minAgeInput = document.getElementById('age-min');
  const maxAgeInput = document.getElementById('age-max');
  
  minAgeInput.addEventListener('input', (e) => {
    let val = parseInt(e.target.value);
    if (isNaN(val)) val = 20;
    state.ageMin = val;
    applyFiltersAndRender();
  });

  maxAgeInput.addEventListener('input', (e) => {
    let val = parseInt(e.target.value);
    if (isNaN(val)) val = 100;
    state.ageMax = val;
    applyFiltersAndRender();
  });

  const headers = document.querySelectorAll('th.sortable');
  headers.forEach(th => {
    th.addEventListener('click', () => {
      const col = th.getAttribute('data-sort');
      if (col === state.sortColumn) {
        state.sortDirection = state.sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        state.sortColumn = col;
        state.sortDirection = 'asc';
      }
      applyFiltersAndRender();
    });
  });

  const langButtons = document.querySelectorAll('#lang-selector .lang-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedLang = e.target.getAttribute('data-lang');
      if (selectedLang !== state.currentLang) {
        state.currentLang = selectedLang;
        localStorage.setItem('diet_lang', selectedLang);
        
        updateLangSelectorButtons();
        updateUILabels();
        calculateGlobalStats();
        populatePartyDropdown();
        applyFiltersAndRender();
        renderIncomeDistribution();
      }
    });
  });

  // Color Mode switch buttons
  const colorModeButtons = document.querySelectorAll('#color-mode-filters .btn-mini');
  colorModeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      colorModeButtons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      
      const mode = e.target.getAttribute('data-mode');
      state.colorMode = mode;
      
      // Toggle legend visibility
      if (mode === 'generation') {
        document.getElementById('legend-age-view').style.display = 'none';
        document.getElementById('legend-generation-view').style.display = 'flex';
      } else {
        document.getElementById('legend-age-view').style.display = 'flex';
        document.getElementById('legend-generation-view').style.display = 'none';
      }
      
      // Re-render display based on viewMode
      if (state.viewMode === 'bars') {
        renderHistogram();
      } else if (state.viewMode === 'comparison') {
        renderComparisonHistogram();
      } else if (state.viewMode === 'ratio') {
        renderRatioChart();
      } else {
        renderHemicircle();
      }
    });
  });

  // View Mode switch buttons (Puntos / Barras)
  const viewModeButtons = document.querySelectorAll('#view-mode-filters .btn-mini');
  viewModeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      viewModeButtons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      
      const view = e.target.getAttribute('data-view');
      state.viewMode = view;
      
      // Set sorting direction based on view selection
      state.sortDirection = view === 'dots' ? 'asc' : 'desc';
      
      // Set wasFiltered manually so it does not auto-override during this render
      const isFiltered = state.searchQuery.trim() !== '' || 
                         state.currentChamber !== 'all' || 
                         state.currentParty !== 'all' || 
                         state.ageMin > 20 || 
                         state.ageMax < 100;
      state.wasFiltered = isFiltered;
      
      applyFiltersAndRender();
    });
  });

  // Tab switching handler
  const tabButtons = document.querySelectorAll('.tabs-nav-bar .tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetTab = e.target.getAttribute('data-tab');
      tabButtons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      
      document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
      document.getElementById(targetTab).classList.add('active');
      
      state.currentTab = targetTab;
      
      if (targetTab === 'tab-income') {
        setTimeout(() => {
          renderIncomeDistribution();
        }, 50);
      }
    });
  });

  // Currency selection handler
  const currencyButtons = document.querySelectorAll('.currency-selector-group .currency-btn');
  currencyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      currencyButtons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      
      const currency = e.target.getAttribute('data-currency');
      state.activeCurrency = currency;
      renderIncomeDistribution();
    });
  });
}
