'use strict';

/* ═══════════════════════════════════════════════
   PLAN DATA — B1 → B2 Viorel
═══════════════════════════════════════════════ */
const PLAN_DATA = {
  user: 'Viorel',
  evalDate:    '2026-05-08',
  targetSept:  '2026-09-01',
  targetNov:   '2026-11-01',

  // Day of week flags (0=Sun,1=Mon,2=Tue,3=Wed,4=Thu,5=Fri,6=Sat)
  activeDays:    [1, 2, 4, 6],  // Mon, Tue, Thu, Sat
  protectedDays: [3],            // Wed = terapie
  lightDays:     [5],            // Fri = podcast pasiv
  freeDays:      [0],            // Sun = liber

  weeklyRoutine: {
    1: 'Schreiben + Lesen',
    2: 'Schreiben + Hören',
    3: '🧠 PROTEJAT — Terapie',
    4: 'Schreiben + Gramatică',
    5: '🎧 Pasiv (podcast)',
    6: '📝 Email tip examen (cronometrat)',
    0: '😌 Liber',
  },

  etape: [
    { nr:1, name:'Consolidare Fundație B1',        color:'#60a5fa', months:'Mai 2026'      },
    { nr:2, name:'Timpuri Verbale + Verbe Complexe',color:'#34d399', months:'Iunie 2026'    },
    { nr:3, name:'Extindere Vocabular + Hören',    color:'#fbbf24', months:'Iulie 2026'    },
    { nr:4, name:'Sprechen + Simulări Examen',     color:'#f97316', months:'August 2026'   },
    { nr:5, name:'Rafinare Finală + Examen',       color:'#a855f7', months:'Sept 2026'     },
    { nr:6, name:'Tranziție B1 → B2',              color:'#8b5cf6', months:'Oct–Nov 2026'  },
  ],

  goldenRules: [
    'Niciodată mai mult de 1 oră consecutiv fără pauză',
    'Miercurea = ZI PROTEJATĂ (terapie + odihnă)',
    'Vinerea = lejer (doar podcast pasiv)',
    'Duminica = liber sau hobby',
    'Dacă ești obosit → 15 min e mai bine decât 0',
    'Nu sări săptămâni — consistența, NU intensitatea',
    'Notează greșelile de germană (mereu actualizat)',
    'Sâmbătă → 30 min recapitulare săptămânii',
  ],

  weeks: [
    // ── ETAPA 1 ─────────────────────────────────
    { nr:1, etapa:1, start:'2026-05-11', end:'2026-05-17',
      tema:'Cazurile (Nominativ, Akkusativ, Dativ)',
      output:'0 greșeli de tipul einen Brot, einer Mutter geht',
      objectives:[
        'Stăpânesc tabelul ein/eine/ein declinat în toate 3 cazuri',
        'Identific corect genul a 50 de cuvinte uzuale (der/die/das)',
        'Recunosc einen ca formă specifică doar pentru masculin Akk',
        'Aplic corect Akkusativ după: haben, kaufen, sehen, lesen, essen',
        'Aplic corect Dativ după: helfen, sagen, geben, danken',
        'Scris 5 emailuri cu corectură (unul pe zi, lu–vi)',
      ]},
    { nr:2, etapa:1, start:'2026-05-18', end:'2026-05-24',
      tema:'Prepoziții cu Akkusativ vs Dativ',
      output:'0 greșeli: in Café, in Park, bei Arbeit',
      objectives:[
        'Memorez F-O-G-D-U (für, ohne, gegen, durch, um → mereu Akk)',
        'Memorez A-B-M-N-S-V-Z (aus, bei, mit, nach, seit, von, zu → mereu Dat)',
        'Stăpânesc Wechselpräpositionen: in, an, auf, vor, hinter, neben, unter, über, zwischen',
        'Aplic regula Wohin? = Akk | Wo? = Dat fără să mă gândesc',
        'Cunosc contracțiile: am, im, ans, ins, beim, zum, zur, vom',
        'REGULA #1: niciodată nu uit articolul după prepoziție!',
        'Scris 5 emailuri + 20 propoziții traduse RO↔DE',
      ]},
    { nr:3, etapa:1, start:'2026-05-25', end:'2026-05-31',
      tema:'Topică (poziția verbului)',
      output:'0 greșeli: Deshalb ich gehe, Heute ich habe',
      objectives:[
        'Aplic inversiune după adverb la început: Heute gehe ich, Morgen habe ich',
        'Aplic inversiune după: deshalb, trotzdem, dann, danach, außerdem',
        'Verb la final în subordonate: weil, dass, wenn, als, obwohl, ob, wo',
        'Topică Perfekt: auxiliar poz.2, participiu la final',
        'Topică verb modal: modal poz.2, infinitiv la final',
        'Scris 5 emailuri + simulare cronometrat (sâmbătă)',
      ]},
    // ── ETAPA 2 ─────────────────────────────────
    { nr:4, etapa:2, start:'2026-06-01', end:'2026-06-07',
      tema:'Perfekt (haben vs sein)',
      output:'Povestesc weekendul trecut fără erori de auxiliar',
      objectives:[
        'Stăpânesc verbele cu sein: gehen, kommen, fahren, fliegen, laufen, bleiben, werden',
        'Particip II regulate: ge___t (gemacht, gespielt)',
        'Particip II neregulate: top 50 cele mai frecvente',
        'Verbe prefix inseparabil → fără ge- (verstanden, bekommen, erzählt)',
        'Verbe separabile la Perfekt: eingekauft, angerufen, mitgekommen',
        'Povestesc ce am făcut ieri / weekendul trecut / vacanța',
        'Scris 5 emailuri + 1 text liber (jurnal vacanță)',
      ]},
    { nr:5, etapa:2, start:'2026-06-08', end:'2026-06-14',
      tema:'Verbe modale + verbe separabile',
      output:'Conjugare fluentă, prefix la locul corect',
      objectives:[
        'Conjugare perfectă: können, müssen, wollen, sollen, dürfen, mögen, möchten',
        'Topică modale: modal poz.2 + infinitiv la final',
        'Modale la Präteritum (konnte, musste, wollte...) pentru trecut',
        'Top 30 verbe separabile uzuale (anrufen, einkaufen, aufstehen, mitkommen...)',
        'Conjugare separabilă: prefix la final — ich rufe dich an',
        'zu INFIXAT la separabile: anzurufen, einzukaufen',
        'Scris 5 emailuri + 1 text liber',
      ]},
    { nr:6, etapa:2, start:'2026-06-15', end:'2026-06-21',
      tema:'Konjunktiv II (politețe, ipoteze)',
      output:'Exprim dorințe și ipoteze corect',
      objectives:[
        'würde + Infinitiv pentru orice verb (ich würde gehen)',
        'Forme proprii: wäre, hätte, könnte, möchte, müsste, sollte, dürfte',
        'Wenn ich... wäre/hätte, würde ich...',
        'Politețe formală: Könnten Sie...?, Wäre es möglich...?, Ich hätte gerne...',
        '2 emailuri formale + 3 emailuri informale',
        'Exprim dorințe ipotetice ("Dacă aș avea timp, aș călători")',
      ]},
    { nr:7, etapa:2, start:'2026-06-22', end:'2026-06-28',
      tema:'Subordonate complexe',
      output:'Email cu 2 subordonate + simulare Schreiben ≥80%',
      objectives:[
        'weil (pentru că) — verb la final',
        'dass (că) — vorbire indirectă',
        'wenn (dacă/de fiecare când) vs als (când — trecut unic)',
        'obwohl (deși)',
        'damit (ca să — subiect diferit) vs um...zu (același subiect)',
        'Pot scrie propoziții cu 2 subordonate într-un email',
        'Scris 5 emailuri complexe',
        '🎯 Simulare Goethe B1 Schreiben completă cronometrat — Țintă: 80%+',
      ]},
    // ── ETAPA 3 ─────────────────────────────────
    { nr:8, etapa:3, start:'2026-06-29', end:'2026-07-05',
      tema:'Vocabular: Familie & Beziehungen',
      output:'Descriu familia în 10 propoziții fără pauze',
      objectives:[
        '50 cuvinte fixate (der Verwandte, sich verloben, sich trennen, der Streit...)',
        'Descriu familia mea în 10 propoziții',
        'Povestesc o relație/conflict',
        'Hören: 3 podcasturi Slow German — tema Familie',
        'Scris 5 emailuri',
      ]},
    { nr:9, etapa:3, start:'2026-07-06', end:'2026-07-12',
      tema:'Vocabular: Arbeit & Beruf',
      output:'Scriu CV și email formal pentru job',
      objectives:[
        '50 cuvinte (die Bewerbung, der Lebenslauf, das Vorstellungsgespräch, kündigen, das Gehalt...)',
        'Descriu jobul meu, ce fac în fiecare zi',
        'Scriu un email formal către un viitor angajator',
        'Hören: DW — Marktplatz (Wirtschaftsdeutsch)',
        'Scris 5 emailuri (2 formale către firme)',
      ]},
    { nr:10, etapa:3, start:'2026-07-13', end:'2026-07-19',
      tema:'Vocabular: Gesundheit & Körper',
      output:'Descriu simptome la doctor în germană',
      objectives:[
        '50 cuvinte (die Beschwerden, die Untersuchung, das Rezept, sich erholen, der Notarzt...)',
        'Descriu un simptom la doctor',
        'Scriu email către cabinet medical',
        'Hören: dialogue medic-pacient',
        'Scris 5 emailuri',
      ]},
    { nr:11, etapa:3, start:'2026-07-20', end:'2026-07-26',
      tema:'Vocabular: Reisen & Verkehr',
      output:'Planific și descriu o călătorie complet',
      objectives:[
        '50 cuvinte (der Aufenthalt, die Verspätung, umsteigen, die Unterkunft, der Reiseführer...)',
        'Planific și descriu o călătorie',
        'Email hotel — anulare/schimbare rezervare',
        'Hören: anunțuri gară/aeroport, dialoguri turistice',
        'Scris 5 emailuri',
      ]},
    { nr:12, etapa:3, start:'2026-07-27', end:'2026-08-02',
      tema:'Vocabular: Wohnen & Stadt',
      output:'Descriu locuința și cartierul fără probleme',
      objectives:[
        '50 cuvinte (die Miete, der Vermieter, die WG, das Viertel, umziehen, einrichten...)',
        'Descriu locuința mea + cartierul',
        'Email către proprietar (probleme, contract)',
        'Hören: descrieri orașe, anunțuri imobiliare',
        '🎯 Simulare Goethe B1 Hören cronometrat (prima oară!)',
      ]},
    // ── ETAPA 4 ─────────────────────────────────
    { nr:13, etapa:4, start:'2026-08-03', end:'2026-08-09',
      tema:'Sprechen Teil 1 — Gemeinsam etwas planen',
      output:'3 simulări înregistrate cu auto-corecție',
      objectives:[
        'Cunosc structura: propunere → contra-argument → compromis',
        '20 fraze fixe pentru negociere (Ich schlage vor..., Was hältst du davon..., Lass uns lieber...)',
        'Planific cu partener: călătorie, petrecere, weekend, cumpărături',
        '3 simulări înregistrate (mă ascult și mă auto-corectez)',
        'Hören: episoade Easy German',
      ]},
    { nr:14, etapa:4, start:'2026-08-10', end:'2026-08-16',
      tema:'Sprechen Teil 2 — Präsentation',
      output:'Prezentare 3-4 min pe 5 teme diferite',
      objectives:[
        'Structura 5 pași: introducere → situația în RO → exemple → comparație → opinia mea',
        '30 fraze fixe (Meiner Meinung nach..., Es ist wichtig, dass..., Ich finde, dass...)',
        'Prezentări pe 5 teme: sport, mâncare, școală, internet, familie',
        '5 simulări înregistrate',
      ]},
    { nr:15, etapa:4, start:'2026-08-17', end:'2026-08-23',
      tema:'Sprechen Teil 3 — Über eine Präsentation sprechen',
      output:'Simulare completă Sprechen (toate 3 părți)',
      objectives:[
        'Pun întrebări la sfârșitul unei prezentări',
        'Răspund la întrebări despre tema mea',
        'Feedback pozitiv în germană (Das war interessant, weil...)',
        '3 simulări înregistrate (joc dublu rol)',
        'Simulare completă Sprechen (toate 3 părți)',
      ]},
    { nr:16, etapa:4, start:'2026-08-24', end:'2026-08-30',
      tema:'Simulări Complete de Examen',
      output:'Modellsatz 1-3 ≥75% pe fiecare modul',
      objectives:[
        'Modellsatz 1 (goethe.de) — toate 4 module cronometrate — Țintă: ≥75%',
        'Modellsatz 2 — repet',
        'Modellsatz 3 — repet',
        'Identific ultimele 3 puncte slabe → focus exclusiv pe ele',
      ]},
    // ── ETAPA 5 ─────────────────────────────────
    { nr:17, etapa:5, start:'2026-08-31', end:'2026-09-06',
      tema:'Rafinare Finală + Înregistrare Examen',
      output:'Înscris oficial, Modellsatz 4 ≥80%',
      objectives:[
        'Înscrie-te oficial la examen (dată concretă!)',
        'Repetă punctele slabe din săptămâna 16',
        'Modellsatz 4 — toate 4 modulele — Țintă: ≥80%',
        '2 simulări complete pe săptămână (ritmul examen)',
        'Recitire: 20 expresii fixe + greșelile recurente',
      ]},
    // ── ETAPA 6 ─────────────────────────────────
    { nr:18, etapa:6, start:'2026-09-07', end:'2026-09-27',
      tema:'Tranziție B2: Passiv + Konjunktiv I',
      output:'Bazele Passiv și vorbire indirectă',
      objectives:[
        'Passiv: werden + Partizip II la toate timpurile',
        'Passiv cu von (agent)',
        'Passiv cu modale: Es muss gemacht werden',
        'Konjunktiv I: Er sagte, er sei krank',
        'Konjunktiv I folosit în articole/știri',
        'Hören: Tagesschau sau Deutsche Welle Nachrichten',
      ]},
    { nr:19, etapa:6, start:'2026-09-28', end:'2026-11-01',
      tema:'B2: Vocabular Abstract + Argumentare',
      output:'Prima simulare Goethe B2 Lesen ≥60%',
      objectives:[
        'Conectori B2: einerseits...andererseits, dennoch, allerdings, hingegen, indem, sodass',
        'Scriu eseu pro/contra (150-200 cuvinte)',
        'Citire: articole Süddeutsche Zeitung sau Spiegel',
        'Substantivare + nominalstil',
        'Prima simulare Goethe B2 Lesen (≥60%?)',
      ]},
  ],
};

/* ═══════════════════════════════════════════════
   STATE — localStorage wrapper
═══════════════════════════════════════════════ */
const State = {
  _g: (k,d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
  _s: (k,v) => localStorage.setItem(k, JSON.stringify(v)),

  get todos()        { return this._g('todos',       []); },
  set todos(v)       { this._s('todos', v); },
  get thoughts()     { return this._g('thoughts',    []); },
  set thoughts(v)    { this._s('thoughts', v); },
  get startDate()    { return localStorage.getItem('startDate') || ''; },
  set startDate(v)   { localStorage.setItem('startDate', v); },
  get hoursLog()     { return this._g('hoursLog',    []); },
  set hoursLog(v)    { this._s('hoursLog', v); },
  get mistakes()     { return this._g('mistakes',    []); },
  set mistakes(v)    { this._s('mistakes', v); },
  get vocab()        { return this._g('vocab',       []); },
  set vocab(v)       { this._s('vocab', v); },
  get notifs()       { return this._g('notifs',      []); },
  set notifs(v)      { this._s('notifs', v); },
  get planChecked()  { return this._g('planChecked', {}); },
  set planChecked(v) { this._s('planChecked', v); },
};

/* ═══════════════════════════════════════════════
   CATEGORIES CONFIG
═══════════════════════════════════════════════ */
const CATS = [
  { name:'Germana', emoji:'🇩🇪', color:'#f59e0b' },
  { name:'IT',      emoji:'💻',  color:'#7c6af7' },
  { name:'Engleza', emoji:'🇬🇧', color:'#5eead4' },
  { name:'Terapie', emoji:'🧠',  color:'#f472b6' },
];
const CAT_COLOR = Object.fromEntries(CATS.map(c => [c.name, c.color]));

/* ═══════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════ */
function pad(n)      { return String(n).padStart(2,'0'); }
function todayISO()  { const d=new Date(); return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`; }
function parseISO(s) { return new Date(s + 'T00:00:00'); }
function formatDate(iso) { if(!iso)return''; const[y,m,d]=iso.split('-'); return `${d}.${m}.${y}`; }
function esc(s) {
  return String(s??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

const MONTHS_RO = ['Ianuarie','Februarie','Martie','Aprilie','Mai','Iunie',
                   'Iulie','August','Septembrie','Octombrie','Noiembrie','Decembrie'];

let toastTimer = null;
function toast(msg, type='accent') {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.style.background = type==='error' ? 'var(--red)' : type==='success' ? 'var(--green)' : 'var(--accent)';
  el.style.color = type==='success' ? '#000' : '#fff';
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 3000);
}

/* ═══════════════════════════════════════════════
   PLAN HELPERS
═══════════════════════════════════════════════ */
function getCurrentWeek() {
  const today = parseISO(todayISO());
  return PLAN_DATA.weeks.find(w => today >= parseISO(w.start) && today <= parseISO(w.end)) || null;
}

function getDaysUntilSept() {
  const today = parseISO(todayISO());
  const sept  = parseISO(PLAN_DATA.targetSept);
  return Math.max(0, Math.ceil((sept - today) / 86400000));
}

function getWeeksUntilSept() {
  return Math.ceil(getDaysUntilSept() / 7);
}

function getPlanProgress() {
  const checked = State.planChecked;
  let total = 0, done = 0;
  PLAN_DATA.weeks.forEach(w => {
    w.objectives.forEach((_, i) => {
      total++;
      if (checked[`w${w.nr}_${i}`]) done++;
    });
  });
  return { total, done, pct: total > 0 ? Math.round(done/total*100) : 0 };
}

function getWeekProgress(weekNr) {
  const w = PLAN_DATA.weeks.find(x => x.nr === weekNr);
  if (!w) return { done:0, total:0, pct:0 };
  const checked = State.planChecked;
  const total = w.objectives.length;
  const done  = w.objectives.filter((_,i) => checked[`w${weekNr}_${i}`]).length;
  return { done, total, pct: total > 0 ? Math.round(done/total*100) : 0 };
}

/* ═══════════════════════════════════════════════
   NAVIGATION
═══════════════════════════════════════════════ */
function initNav() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const page = btn.dataset.page;
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('page-' + page).classList.add('active');
      const renders = {
        dashboard:     renderDashboard,
        plan:          renderPlanPage,
        todo:          renderTodos,
        thoughts:      renderThoughts,
        learning:      renderLearning,
        german:        initNotepad,
        notifications: renderNotifs,
      };
      if (renders[page]) renders[page]();
    });
  });
}

/* ═══════════════════════════════════════════════
   CLOCK
═══════════════════════════════════════════════ */
function startClock() {
  function tick() {
    const now  = new Date();
    const time = pad(now.getHours())+':'+pad(now.getMinutes())+':'+pad(now.getSeconds());
    const date = now.toLocaleDateString('ro-RO',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
    document.getElementById('topbar-time').textContent       = time;
    document.getElementById('topbar-date').textContent       = date;
    document.getElementById('clock-display').textContent     = time;
    document.getElementById('clock-date-display').textContent= date;

    const h = now.getHours();
    const greet = h<5?'noapte!':h<12?'dimineața!':h<18?'ziua!':'seara!';
    const gEl = document.getElementById('dash-greeting');
    if (gEl) gEl.textContent = greet;
    const dfEl = document.getElementById('dash-date-full');
    if (dfEl) dfEl.textContent = date;
  }
  tick();
  setInterval(tick, 1000);
}

/* ═══════════════════════════════════════════════
   COUNTDOWN WIDGET
═══════════════════════════════════════════════ */
function updateCountdown() {
  const days   = getDaysUntilSept();
  const weeks  = getWeeksUntilSept();
  const start  = parseISO(PLAN_DATA.evalDate);
  const target = parseISO(PLAN_DATA.targetSept);
  const today  = parseISO(todayISO());
  const totalDays = Math.ceil((target - start) / 86400000);
  const passedDays= Math.ceil((today  - start) / 86400000);
  const pct = Math.min(100, Math.max(0, Math.round(passedDays / totalDays * 100)));

  const dEl = document.getElementById('countdown-days');
  const sEl = document.getElementById('countdown-sub');
  const wEl = document.getElementById('countdown-weeks');
  const fEl = document.getElementById('countdown-fill');

  if (dEl) dEl.textContent = days > 0 ? days : '🎉';
  if (sEl) sEl.textContent = days > 0 ? `zile până la 1 Sept 2026` : 'Septembrie a sosit!';
  if (wEl) wEl.textContent = days > 0 ? `≈ ${weeks} săptămâni rămase` : '';
  if (fEl) fEl.style.width = pct + '%';

  // Dashboard large countdown
  const dsEl = document.getElementById('dash-days-sept');
  const dfEl = document.getElementById('dash-sept-fill');
  if (dsEl) dsEl.textContent = days > 0 ? days : '🎉';
  if (dfEl) dfEl.style.width = pct + '%';
}

/* ═══════════════════════════════════════════════
   SFAT ZILNIC WIDGET
═══════════════════════════════════════════════ */
function updateSfatWidget() {
  const el = document.getElementById('sfat-content');
  if (!el) return;

  const currentWeek = getCurrentWeek();
  const today       = new Date();
  const dow         = today.getDay(); // 0=Sun

  if (!currentWeek) {
    const daysToPlan = Math.ceil((parseISO(PLAN_DATA.weeks[0].start) - parseISO(todayISO())) / 86400000);
    const w1 = PLAN_DATA.weeks[0];

    if (daysToPlan > 0) {
      // Show Week 1 preview — user is in preparation period
      el.innerHTML = `
        <div class="sfat-week" style="color:var(--yellow)">
          ⏳ Săptămâna 1 începe în <strong>${daysToPlan} ${daysToPlan===1?'zi':'zile'}</strong>
        </div>
        <div class="sfat-focus" style="margin-top:4px;">${formatDate(w1.start)} — Pregătire!</div>
        <div style="font-size:11px;font-weight:700;color:var(--text);margin:8px 0 4px;">📚 Tema: ${esc(w1.tema)}</div>
        <div class="sfat-objs">
          ${w1.objectives.slice(0,4).map(obj => `
            <div class="sfat-obj-item">
              <span class="sfat-check">📌</span>
              <span>${esc(obj.length>52 ? obj.substring(0,52)+'…' : obj)}</span>
            </div>
          `).join('')}
        </div>
        <div class="sfat-prog" style="margin-top:6px;">${w1.objectives.length} obiective în săptămâna 1</div>
      `;
    } else {
      el.innerHTML = `<div class="sfat-week" style="color:var(--green)">🎓 Plan finalizat!</div>`;
    }

    // Dashboard today card
    const dw = document.getElementById('dash-today-week');
    const df = document.getElementById('dash-today-focus');
    if (dw) dw.textContent = daysToPlan > 0 ? `Pregătire: ${daysToPlan} zile până la Săptămâna 1` : '🎓 Plan finalizat!';
    if (df) df.textContent = daysToPlan > 0 ? `Tema 1: ${w1.tema}` : '';
    return;
  }

  const weekProg = getWeekProgress(currentWeek.nr);
  const checked  = State.planChecked;
  const todayFocus = PLAN_DATA.weeklyRoutine[dow] || '—';

  // Sfat widget
  el.innerHTML = `
    <div class="sfat-week">Săptămâna ${currentWeek.nr}: ${esc(currentWeek.tema.split('(')[0].trim())}</div>
    <div class="sfat-focus">Azi: ${esc(todayFocus)}</div>
    <div class="sfat-objs">
      ${currentWeek.objectives.slice(0,4).map((obj,i) => {
        const isDone = !!checked[`w${currentWeek.nr}_${i}`];
        return `<div class="sfat-obj-item ${isDone?'done':''}">
          <span class="sfat-check">${isDone?'✅':'⬜'}</span>
          <span>${esc(obj.length>55 ? obj.substring(0,55)+'…' : obj)}</span>
        </div>`;
      }).join('')}
    </div>
    <div class="sfat-prog">${weekProg.done}/${weekProg.total} obiective · ${weekProg.pct}%</div>
    <div class="progress-bar" style="height:4px;margin-top:4px;">
      <div class="progress-fill" style="width:${weekProg.pct}%;background:var(--teal);"></div>
    </div>
  `;

  // Dashboard today card
  const dw = document.getElementById('dash-today-week');
  const df = document.getElementById('dash-today-focus');
  if (dw) dw.textContent = `Săptămâna ${currentWeek.nr}: ${currentWeek.tema}`;
  if (df) df.textContent = `Azi (${['Du','Lu','Ma','Mi','Jo','Vi','Sâ'][dow]}): ${todayFocus}`;
}

async function getAISfat() {
  const resultEl = document.getElementById('sfat-ai-result');
  const btn      = document.querySelector('.sfat-widget .btn-ai');

  resultEl.style.display = 'block';
  resultEl.innerHTML = `<div class="ai-loading"><div class="dot-anim"><span></span><span></span><span></span></div> Analizez datele tale...</div>`;
  if (btn) btn.disabled = true;

  await new Promise(r => setTimeout(r, 500));

  const cw       = getCurrentWeek() || PLAN_DATA.weeks[0];
  const today    = new Date();
  const dow      = today.getDay();
  const dayNames = ['Duminică','Luni','Marți','Miercuri','Joi','Vineri','Sâmbătă'];
  const dayFocus = PLAN_DATA.weeklyRoutine[dow];
  const prog     = getWeekProgress(cw.nr);
  const mistakes = State.mistakes;
  const days     = getDaysUntilSept();

  // Hours logged this week
  const weekStart = new Date(today); weekStart.setDate(today.getDate() - today.getDay() + 1);
  const weekStartStr = weekStart.toISOString().split('T')[0];
  const hoursThisWeek = State.hoursLog
    .filter(e => e.date >= weekStartStr && e.cat === 'Germana')
    .reduce((a,e) => a + e.hours, 0);

  // Most common mistake type
  const typeCounts = {};
  mistakes.forEach(m => { const k = m.type.split(' ')[0]; typeCounts[k] = (typeCounts[k]||0)+1; });
  const topMistake = Object.entries(typeCounts).sort((a,b)=>b[1]-a[1])[0];

  // Recent mistakes (last 3)
  const recentMistakes = mistakes.slice(0,3);

  // Unchecked objectives for current week
  const checked = State.planChecked;
  const unchecked = cw.objectives.filter((_,i) => !checked[`w${cw.nr}_${i}`]);

  // Build personalized message
  const lines = [];

  // 1. Day greeting + focus
  lines.push(`📅 ${dayNames[dow]} — ${dayFocus}`);
  lines.push('');

  // 2. Week status
  if (prog.pct === 100) {
    lines.push(`🏆 Săptămâna ${cw.nr} completă! Toate obiectivele bifate. Excelent!`);
  } else if (prog.pct >= 50) {
    lines.push(`✅ Săptămâna ${cw.nr}: ${prog.done}/${prog.total} obiective (${prog.pct}%) — ești pe drumul cel bun!`);
    if (unchecked.length) lines.push(`👉 Următor: "${unchecked[0]}"`);
  } else if (prog.done === 0) {
    lines.push(`🚀 Săptămâna ${cw.nr} — "${cw.tema}"`);
    lines.push(`Niciun obiectiv bifat încă. Începe cu: "${cw.objectives[0]}"`);
  } else {
    lines.push(`📖 Săptămâna ${cw.nr}: ${prog.done}/${prog.total} obiective. Continuă!`);
    if (unchecked.length) lines.push(`👉 Focusează-te pe: "${unchecked[0]}"`);
  }

  // 3. Hours this week
  lines.push('');
  if (hoursThisWeek === 0) {
    lines.push(`⏱️ 0 ore de germană înregistrate săptămâna asta. Chiar și 30 minute azi fac diferența!`);
  } else if (hoursThisWeek < 3) {
    lines.push(`⏱️ ${hoursThisWeek}h de germană săptămâna asta. Ținta: 10h/săptămână — mai ai ${(10-hoursThisWeek).toFixed(1)}h.`);
  } else {
    lines.push(`⏱️ ${hoursThisWeek}h studiate săptămâna asta. Bun ritm! Continuă!`);
  }

  // 4. Mistake tip (based on actual mistakes logged)
  if (topMistake) {
    lines.push('');
    lines.push(`🔴 Greșeala ta #1: ${topMistake[0]} (${topMistake[1]} ori)`);
    const tips = {
      'Articole': 'Trucuri rapide: -ung/-heit/-keit/-schaft/-ion → DIE | -chen/-lein → DAS | Zile/luni → DER',
      'Cazuri':   'Întreabă: WEN? (Akkusativ) sau WEM? (Dativ). Scrie propoziția și pune întrebarea!',
      'Verbe':    'Modal pe poz.2, infinitiv la final. Separabil: prefix la final. Exersează cu 5 propoziții azi.',
      'Vocabular':'Fă 10 flashcarduri cu cuvintele greșite și repetă-le înainte de culcare.',
      'Prepoziții':'F-O-G-D-U → Akk. A-B-M-N-S-V-Z → Dat. Scrie-le pe o foaie și pune-o la vedere.',
      'Pronume':  'Pronumele se declină la fel ca articolele. Compară tabelul pronumelor cu cel al articolelor.',
      'Ordine':   'Regula de aur: verb MEREU pe poziția 2 în propoziție principală. Exersează cu inversiunea.',
    };
    const tip = tips[topMistake[0]] || 'Revizuiește greșelile din tracker și scrie 5 propoziții corecte.';
    lines.push(`💡 ${tip}`);
    if (recentMistakes.length) {
      lines.push(`   Ex. recent: "${recentMistakes[0].wrong}" → "${recentMistakes[0].correct}"`);
    }
  } else if (!mistakes.length) {
    lines.push('');
    lines.push('📝 Nu ai înregistrat greșeli încă. Adaugă-le la secțiunea 🇩🇪 Germana AI pe măsură ce înveți!');
  }

  // 5. Countdown motivation
  lines.push('');
  const weeksLeft = getWeeksUntilSept();
  if (days > 60) {
    lines.push(`🗓️ ${days} zile (${weeksLeft} săpt.) până în septembrie. Consistența > intensitatea. 30 min/zi = succes!`);
  } else if (days > 14) {
    lines.push(`⚡ ${days} zile rămase! Focusează-te pe simulări complete. Ești aproape!`);
  } else {
    lines.push(`🏁 ${days} zile până la examen! Stop gramatică nouă — doar repetare și simulări!`);
  }

  resultEl.style.cssText = 'display:block;font-size:13px;line-height:1.7;color:var(--text);white-space:pre-wrap;';
  resultEl.textContent = lines.join('\n');
  if (btn) btn.disabled = false;
}

/* ═══════════════════════════════════════════════
   STOPWATCH
═══════════════════════════════════════════════ */
let swRunning=false, swStartedAt=0, swElapsed=0, swInterval=null, swLaps=[], lapCount=0;

function swToggle() {
  if (swRunning) {
    clearInterval(swInterval);
    swElapsed += Date.now() - swStartedAt;
    swRunning = false;
    document.getElementById('sw-start-btn').textContent = '▶ Start';
  } else {
    swStartedAt = Date.now(); swRunning = true;
    document.getElementById('sw-start-btn').textContent = '⏸ Pauză';
    swInterval = setInterval(swRender, 67);
  }
}
function swReset() {
  clearInterval(swInterval);
  swRunning=false; swElapsed=0; swLaps=[]; lapCount=0;
  document.getElementById('sw-start-btn').textContent='▶ Start';
  document.getElementById('sw-display').textContent='00:00.0';
  document.getElementById('sw-laps').innerHTML='';
}
function swLap() {
  if (!swRunning && swElapsed===0) return;
  const total = swRunning ? swElapsed+(Date.now()-swStartedAt) : swElapsed;
  lapCount++;
  swLaps.push({n:lapCount,t:total});
  const prev = swLaps.length>1 ? swLaps[swLaps.length-2].t : 0;
  const div = document.createElement('div');
  div.className='sw-lap';
  div.innerHTML=`<span>Lap ${lapCount}</span><span style="color:var(--teal)">${fmtSw(total-prev)}</span><span>${fmtSw(total)}</span>`;
  document.getElementById('sw-laps').prepend(div);
}
function swRender() {
  document.getElementById('sw-display').textContent = fmtSw(swElapsed+(Date.now()-swStartedAt));
}
function fmtSw(ms) {
  const s=Math.floor(ms/1000), m=Math.floor(s/60), ds=Math.floor((ms%1000)/100);
  return pad(m)+':'+pad(s%60)+'.'+ds;
}

/* ═══════════════════════════════════════════════
   CALENDAR (right panel) — with red/green days
═══════════════════════════════════════════════ */
let calYear, calMonth;

function initCalendar() {
  const now=new Date(); calYear=now.getFullYear(); calMonth=now.getMonth();
  renderCalendar();
}
function changeCalMonth(dir) {
  calMonth+=dir;
  if(calMonth>11){calMonth=0;calYear++;}
  if(calMonth<0){calMonth=11;calYear--;}
  renderCalendar();
}

function renderCalendar() {
  const hoursDateSet = new Set(State.hoursLog.map(e => e.date));
  const todayStr  = todayISO();
  const todayDate = parseISO(todayStr);
  const planStart = parseISO(PLAN_DATA.weeks[0].start);
  const currentWeek = getCurrentWeek();

  const firstDow = new Date(calYear, calMonth, 1).getDay();
  const offset   = firstDow === 0 ? 6 : firstDow - 1;
  const days     = new Date(calYear, calMonth+1, 0).getDate();

  document.getElementById('cal-title').textContent = `${MONTHS_RO[calMonth]} ${calYear}`;

  let html = '';
  for (let i=0; i<offset; i++) html += `<div class="cal-day empty"></div>`;

  for (let d=1; d<=days; d++) {
    const ds   = `${calYear}-${pad(calMonth+1)}-${pad(d)}`;
    const date = parseISO(ds);
    const dow  = date.getDay(); // 0=Sun

    let cls = 'cal-day';
    let title = '';

    if (ds === todayStr) {
      cls += ' today';
      title = 'Azi';
    } else if (date < todayDate) {
      // Past day
      if (date >= planStart) {
        // In plan period
        if (hoursDateSet.has(ds)) {
          cls += ' day-green';
          title = '✅ Studiat';
        } else if (PLAN_DATA.activeDays.includes(dow)) {
          cls += ' day-red';
          title = '❌ Zi activă — fără studiu';
        } else if (PLAN_DATA.protectedDays.includes(dow)) {
          cls += ' day-protected';
          title = '🧠 Terapie (protejat)';
        } else if (PLAN_DATA.lightDays.includes(dow)) {
          cls += ' day-light';
          title = '🎧 Zi ușoară';
        }
      } else {
        // Before plan — just show green if studied
        if (hoursDateSet.has(ds)) { cls += ' day-green'; title = '✅ Studiat'; }
      }
    } else {
      // Future day
      if (currentWeek && ds >= currentWeek.start && ds <= currentWeek.end) {
        cls += ' plan-week';
        title = `Săpt. ${currentWeek.nr}: ${currentWeek.tema}`;
      }
    }

    html += `<div class="${cls}" title="${title}">${d}</div>`;
  }

  document.getElementById('mini-cal').innerHTML = html;
}

/* ═══════════════════════════════════════════════
   PLAN PAGE
═══════════════════════════════════════════════ */
function renderPlanPage() {
  renderPlanStats();
  renderCurrentWeekBanner();
  renderPlanWeeks();
  renderPlanRules();
}

function renderPlanStats() {
  const prog = getPlanProgress();
  const days = getDaysUntilSept();
  const weeks= getWeeksUntilSept();
  const cw   = getCurrentWeek();
  const el   = document.getElementById('plan-stats-row');
  el.innerHTML = `
    <div class="plan-stats-bar">
      <div class="plan-stat">
        <div class="plan-stat-num" style="color:var(--pink)">${days}</div>
        <div class="plan-stat-label">Zile până la Sept</div>
      </div>
      <div class="plan-stat">
        <div class="plan-stat-num" style="color:var(--accent)">${weeks}</div>
        <div class="plan-stat-label">Săptămâni rămase</div>
      </div>
      <div class="plan-stat">
        <div class="plan-stat-num" style="color:var(--teal)">${prog.done}/${prog.total}</div>
        <div class="plan-stat-label">Obiective bifate</div>
      </div>
      <div class="plan-stat">
        <div class="plan-stat-num" style="color:var(--green)">${prog.pct}%</div>
        <div class="plan-stat-label">Progres total</div>
      </div>
    </div>
  `;
}

function renderCurrentWeekBanner() {
  const cw  = getCurrentWeek();
  const el  = document.getElementById('plan-current-week-banner');
  const dow = new Date().getDay();
  const focus = PLAN_DATA.weeklyRoutine[dow];

  if (!cw) {
    const daysToPlan = Math.ceil((parseISO(PLAN_DATA.weeks[0].start) - parseISO(todayISO())) / 86400000);
    el.innerHTML = daysToPlan > 0
      ? `<div class="current-week-banner"><div><div class="cwb-week">Planul nu a început încă</div><div class="cwb-tema">Săptămâna 1 începe pe ${formatDate(PLAN_DATA.weeks[0].start)}</div><div class="cwb-dates">Mai ai ${daysToPlan} zile de pregătire!</div></div></div>`
      : '';
    return;
  }

  const prog = getWeekProgress(cw.nr);
  el.innerHTML = `
    <div class="current-week-banner">
      <div style="flex:1;">
        <div class="cwb-week">🟢 Săptămâna curentă: ${cw.nr} din ${PLAN_DATA.weeks.length}</div>
        <div class="cwb-tema">${esc(cw.tema)}</div>
        <div class="cwb-dates">${formatDate(cw.start)} – ${formatDate(cw.end)} &nbsp;·&nbsp; Azi: ${esc(focus)}</div>
      </div>
      <div style="text-align:right;flex-shrink:0;">
        <div style="font-size:22px;font-weight:800;color:var(--teal)">${prog.done}/${prog.total}</div>
        <div style="font-size:11px;color:var(--muted)">obiective</div>
      </div>
    </div>
  `;
}

function renderPlanWeeks() {
  const el = document.getElementById('plan-weeks-container');
  const currentWeek = getCurrentWeek();
  let html = '';

  PLAN_DATA.etape.forEach(etapa => {
    const weeks = PLAN_DATA.weeks.filter(w => w.etapa === etapa.nr);
    if (!weeks.length) return;

    // Etapa progress
    const checked = State.planChecked;
    let etTot=0, etDone=0;
    weeks.forEach(w => {
      w.objectives.forEach((_,i) => { etTot++; if(checked[`w${w.nr}_${i}`]) etDone++; });
    });
    const etPct = etTot>0 ? Math.round(etDone/etTot*100) : 0;

    html += `
      <div class="etapa-section">
        <div class="etapa-header" style="background:${etapa.color}18;border-left:3px solid ${etapa.color};">
          <span class="etapa-badge" style="background:${etapa.color}22;color:${etapa.color};">Etapa ${etapa.nr}</span>
          <span class="etapa-title">${esc(etapa.name)}</span>
          <span class="etapa-months">${esc(etapa.months)}</span>
          <span class="etapa-prog-text" style="color:${etapa.color}">${etDone}/${etTot} · ${etPct}%</span>
        </div>
    `;

    weeks.forEach(w => {
      const prog = getWeekProgress(w.nr);
      const isCurrent = currentWeek && currentWeek.nr === w.nr;
      const isPast    = w.end < todayISO();

      html += `
        <div class="week-card ${isCurrent?'current-week':''}" id="week-card-${w.nr}">
          <div class="week-header" onclick="toggleWeek(${w.nr})">
            <div class="week-nr" style="background:${etapa.color}22;color:${etapa.color};">${w.nr}</div>
            <div class="week-info">
              <div class="week-tema">${esc(w.tema)}</div>
              <div class="week-dates">${formatDate(w.start)} – ${formatDate(w.end)}${isCurrent?' · <span style="color:var(--green);font-weight:700;">← ACUM</span>':''}</div>
            </div>
            <div class="week-progress-wrap">
              <div class="week-progress-circle" style="border-color:${prog.pct===100?'var(--green)':etapa.color};color:${prog.pct===100?'var(--green)':etapa.color};">
                ${prog.pct===100 ? '✓' : prog.pct+'%'}
              </div>
              <span class="week-chevron">›</span>
            </div>
          </div>
          <div class="week-body">
            <div class="week-mini-progress">
              <div class="week-mini-fill" style="width:${prog.pct}%;background:${etapa.color};"></div>
            </div>
            ${w.objectives.map((obj,i) => {
              const key  = `w${w.nr}_${i}`;
              const done = !!State.planChecked[key];
              return `
                <div class="objective-item" onclick="toggleObjective(${w.nr},${i})">
                  <div class="obj-check ${done?'done':''}">${done?'✓':''}</div>
                  <div class="obj-text ${done?'done':''}">${esc(obj)}</div>
                </div>
              `;
            }).join('')}
            <div class="week-output">${esc(w.output)}</div>
          </div>
        </div>
      `;
    });

    html += `</div>`;
  });

  el.innerHTML = html;

  // Auto-expand current week
  if (currentWeek) {
    const card = document.getElementById(`week-card-${currentWeek.nr}`);
    if (card) card.classList.add('expanded');
  }
}

function toggleWeek(nr) {
  const card = document.getElementById(`week-card-${nr}`);
  if (card) card.classList.toggle('expanded');
}

function toggleObjective(weekNr, idx) {
  const key     = `w${weekNr}_${idx}`;
  const checked = State.planChecked;
  checked[key]  = !checked[key];
  State.planChecked = checked;
  renderPlanPage();
  updateSfatWidget();
  renderDashboard();
}

function renderPlanRules() {
  const el = document.getElementById('plan-rules-section');
  el.innerHTML = `
    <div class="rules-card" id="rules-card">
      <div class="rules-header" onclick="toggleRules()">
        ⚠️ Reguli de aur pentru tot programul
        <span class="rules-chevron">›</span>
      </div>
      <div class="rules-body">
        ${PLAN_DATA.goldenRules.map((r,i) => `
          <div class="rule-item">
            <span class="rule-num">${i+1}.</span>
            <span>${esc(r)}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function toggleRules() {
  document.getElementById('rules-card')?.classList.toggle('open');
}

/* ═══════════════════════════════════════════════
   TODO
═══════════════════════════════════════════════ */
let todoFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('todo-input').addEventListener('keydown', e => { if(e.key==='Enter') addTodo(); });
});

function addTodo() {
  const input    = document.getElementById('todo-input');
  const text     = input.value.trim();
  if (!text) { toast('Scrie un task!','error'); return; }
  const cat      = document.getElementById('todo-cat').value;
  const priority = document.getElementById('todo-priority').value;
  const todos    = State.todos;
  todos.unshift({id:Date.now(),text,cat,priority,done:false,date:todayISO()});
  State.todos = todos;
  input.value = '';
  renderTodos(); renderDashboard();
  toast('Task adăugat!');
}
function toggleTodo(id) {
  const todos = State.todos;
  const t = todos.find(x=>x.id===id);
  if(t) t.done=!t.done;
  State.todos=todos; renderTodos(); renderDashboard();
}
function deleteTodo(id) {
  State.todos=State.todos.filter(x=>x.id!==id); renderTodos(); renderDashboard();
}
function setTodoFilter(f, el) {
  todoFilter=f;
  document.querySelectorAll('#page-todo .filter-btn').forEach(b=>b.classList.remove('active'));
  el.classList.add('active'); renderTodos();
}
function renderTodos() {
  let todos = State.todos;
  if(todoFilter==='active') todos=todos.filter(t=>!t.done);
  if(todoFilter==='done')   todos=todos.filter(t=>t.done);
  const list=document.getElementById('todo-list'), empty=document.getElementById('todo-empty');
  const count=document.getElementById('todo-count');
  const active=State.todos.filter(t=>!t.done).length;
  count.textContent=`${active} rămase din ${State.todos.length}`;
  if(!todos.length){list.innerHTML='';empty.style.display='block';return;}
  empty.style.display='none';
  list.innerHTML=todos.map(t=>`
    <div class="todo-item ${t.done?'done':''} priority-${t.priority||'normal'}">
      <div class="todo-check ${t.done?'checked':''}" onclick="toggleTodo(${t.id})">${t.done?'✓':''}</div>
      <span class="todo-text">${esc(t.text)}</span>
      <span class="badge badge-accent">${esc(t.cat)}</span>
      ${t.priority==='high'?'<span class="badge badge-red">🔴</span>':''}
      <span style="font-size:11px;color:var(--muted2);">${formatDate(t.date)}</span>
      <button class="del-btn" onclick="deleteTodo(${t.id})">✕</button>
    </div>
  `).join('');
}

/* ═══════════════════════════════════════════════
   THOUGHTS
═══════════════════════════════════════════════ */
let selectedMood='', thoughtFilter='all';

function selectMood(el,m) {
  selectedMood = selectedMood===m ? '' : m;
  document.querySelectorAll('.mood-btn').forEach(b=>b.classList.remove('selected'));
  if(selectedMood) el.classList.add('selected');
}
function addThought() {
  const input=document.getElementById('thought-input');
  const tag  =document.getElementById('thought-tag').value.trim();
  const text =input.value.trim();
  if(!text){toast('Scrie ceva!','error');return;}
  const thoughts=State.thoughts;
  thoughts.unshift({id:Date.now(),text,mood:selectedMood,tag,date:new Date().toLocaleString('ro-RO')});
  State.thoughts=thoughts;
  input.value=''; document.getElementById('thought-tag').value='';
  selectedMood=''; document.querySelectorAll('.mood-btn').forEach(b=>b.classList.remove('selected'));
  renderThoughts(); renderDashboard(); toast('Gând salvat! 💭');
}
function deleteThought(id) {
  State.thoughts=State.thoughts.filter(t=>t.id!==id); renderThoughts(); renderDashboard();
}
function setThoughtFilter(f,el) {
  thoughtFilter=f;
  document.querySelectorAll('#page-thoughts .filter-btn').forEach(b=>b.classList.remove('active'));
  el.classList.add('active'); renderThoughts();
}
function renderThoughts() {
  let thoughts=State.thoughts;
  if(thoughtFilter!=='all') thoughts=thoughts.filter(t=>t.mood===thoughtFilter);
  const list=document.getElementById('thoughts-list'), empty=document.getElementById('thoughts-empty');
  if(!thoughts.length){list.innerHTML='';empty.style.display='block';return;}
  empty.style.display='none';
  list.innerHTML=thoughts.map(t=>`
    <div class="thought-card">
      <div class="thought-meta">
        ${t.mood?`<span style="font-size:20px;">${t.mood}</span>`:''}
        <span class="thought-date">${esc(t.date)}</span>
        ${t.tag?`<span class="thought-tag">${esc(t.tag)}</span>`:''}
        <button class="del-btn" style="margin-left:auto;" onclick="deleteThought(${t.id})">✕</button>
      </div>
      <div class="thought-text">${esc(t.text)}</div>
    </div>
  `).join('');
}

/* ═══════════════════════════════════════════════
   LEARNING
═══════════════════════════════════════════════ */
let logFilter='all';

function saveStartDate() {
  State.startDate=document.getElementById('start-date').value;
  renderLearning(); toast('Data de start salvată!','success');
}
function logHours() {
  const cat =document.getElementById('log-cat').value;
  const h   =parseFloat(document.getElementById('hour-input').value);
  const date=document.getElementById('hour-date').value;
  const note=document.getElementById('hour-note').value.trim();
  if(!h||h<=0||!date){toast('Introdu orele și data!','error');return;}
  const log=State.hoursLog;
  log.unshift({id:Date.now(),cat,hours:h,date,note});
  State.hoursLog=log;
  document.getElementById('hour-input').value='';
  document.getElementById('hour-note').value='';
  renderLearning(); renderDashboard(); renderCalendar();
  toast(`${h}h de ${cat} adăugate!`,'success');
}
function deleteHourLog(id) {
  State.hoursLog=State.hoursLog.filter(x=>x.id!==id); renderLearning(); renderDashboard(); renderCalendar();
}
function setLogFilter(f,el) {
  logFilter=f;
  document.querySelectorAll('#page-learning .filter-btn').forEach(b=>b.classList.remove('active'));
  el.classList.add('active'); renderHoursLog();
}
function renderLearning() {
  const sd=State.startDate;
  const sdEl=document.getElementById('start-date');
  if(sd&&!sdEl.value) sdEl.value=sd;
  let daysElapsed=0;
  if(sd){
    const start=parseISO(sd), today=parseISO(todayISO());
    daysElapsed=Math.max(0,Math.floor((today-start)/86400000)+1);
    document.getElementById('start-info').textContent=`🗓️ ${daysElapsed} zile de la start`;
  } else {
    document.getElementById('start-info').textContent='';
  }
  // Cat cards
  const log=State.hoursLog;
  document.getElementById('cat-grid').innerHTML=CATS.map(c=>{
    const total=log.filter(e=>e.cat===c.name).reduce((a,e)=>a+e.hours,0);
    return `<div class="cat-card" style="--c:${c.color}">
      <div class="cat-emoji">${c.emoji}</div>
      <div class="cat-name">${c.name}</div>
      <div class="cat-hours">${total.toFixed(1)}</div>
      <div class="cat-hours-label">ore totale</div>
    </div>`;
  }).join('');
  if(!document.getElementById('hour-date').value)
    document.getElementById('hour-date').value=todayISO();
  renderHoursLog();
}
function renderHoursLog() {
  let log=State.hoursLog;
  if(logFilter!=='all') log=log.filter(e=>e.cat===logFilter);
  const el=document.getElementById('hours-log');
  if(!log.length){el.innerHTML='<div class="empty-state">Nicio oră logată.</div>';return;}
  el.innerHTML=log.map(e=>`
    <div class="log-entry">
      <span class="log-date">${formatDate(e.date)}</span>
      <span class="badge" style="background:${CAT_COLOR[e.cat]}22;color:${CAT_COLOR[e.cat]}">${esc(e.cat)}</span>
      <span class="log-hours">${e.hours}h</span>
      <span class="log-note">${esc(e.note||'')}</span>
      <button class="del-btn" onclick="deleteHourLog(${e.id})">✕</button>
    </div>
  `).join('');
}

/* ═══════════════════════════════════════════════
   GERMAN AI
═══════════════════════════════════════════════ */
function initNotepad() {
  const el=document.getElementById('notepad');
  if(!el) return;
  el.value=localStorage.getItem('german_notepad')||'';
  let timer;
  el.addEventListener('input',()=>{
    clearTimeout(timer);
    timer=setTimeout(()=>{
      localStorage.setItem('german_notepad',el.value);
      const s=document.getElementById('notepad-saved');
      s.textContent='salvat ✓';
      setTimeout(()=>{ s.textContent=''; },1500);
    },600);
  });
}
async function analyzeWithAI() {
  const mistakes=State.mistakes;
  if(!mistakes.length){toast('Adaugă greșeli mai întâi!','error');return;}
  const resultCard=document.getElementById('ai-result-card');
  const resultText=document.getElementById('ai-result-text');
  resultCard.style.display='block';
  resultText.innerHTML=`<div class="ai-loading"><div class="dot-anim"><span></span><span></span><span></span></div> Analizez greșelile tale...</div>`;
  await new Promise(r=>setTimeout(r,600));

  const typeCounts={};
  mistakes.forEach(m=>{const k=m.type.split(' ')[0]; typeCounts[k]=(typeCounts[k]||0)+1;});
  const sorted=Object.entries(typeCounts).sort((a,b)=>b[1]-a[1]);
  const topType=sorted[0];

  const TIPS={
    'Articole':{
      rule:'Genul substantivelor trebuie memorat cu substantivul!',
      details:[
        '→ Feminine (die): sufixe -ung, -heit, -keit, -schaft, -ion, -tät, -ung, -ur',
        '→ Neutre (das): sufixe -chen, -lein (diminutive), -ment, -um, -tum',
        '→ Masculine (der): zile, luni, anotimpuri, puncte cardinale, vânturi',
        '→ Truc: învață întotdeauna „der/die/das + substantiv" — niciodată singur',
      ],
      exercitiu:'Scrie 5 substantive noi azi cu articolul lor + o propoziție pentru fiecare.',
    },
    'Cazuri':{
      rule:'Cazul depinde de rolul cuvântului în propoziție.',
      details:[
        '→ Nominativ (WER?): subiectul — Der Mann kauft.',
        '→ Acuzativ (WEN/WAS?): obiect direct — Ich sehe den Mann.',
        '→ Dativ (WEM?): obiect indirect, după: mit, aus, bei, nach, seit, von, zu, gegenüber',
        '→ Genitiv (WESSEN?): posesie — das Buch des Mannes',
        '→ Articole Akk: der→den, ein→einen | Dat: dem/der/dem/den+n',
      ],
      exercitiu:'Scrie 3 propoziții cu „mit + Dativ" și 3 cu obiect direct Akk.',
    },
    'Verbe':{
      rule:'Verbele neregulate și pozițiile verbului sunt critice la B1.',
      details:[
        '→ Verbe modale (können/müssen/sollen/wollen/dürfen/mögen): al doilea verb → infinitiv la final',
        '→ Verbe separabile (aufmachen, anrufen): prefixul merge la final în prop. principală',
        '→ Perfectul (Perfekt): haben/sein + Partizip II la final — Ich habe gegessen.',
        '→ Konjunktiv II (würde+inf / wäre / hätte): pentru politețe și ipoteze',
      ],
      exercitiu:'Conjugă 5 verbe separabile la Perfekt și scrie propoziții complete.',
    },
    'Prepoziții':{
      rule:'Prepozițiile cer cazuri fixe — trebuie memorate ca listă.',
      details:[
        '→ Întotdeauna Akk: durch, für, gegen, ohne, um, bis, entlang',
        '→ Întotdeauna Dat: aus, bei, mit, nach, seit, von, zu, gegenüber',
        '→ Akk sau Dat (loc vs direcție): an, auf, hinter, in, neben, über, unter, vor, zwischen',
        '→ Regula loc/direcție: WO? → Dativ | WOHIN? → Akuzativ',
      ],
      exercitiu:'Scrie câte 2 propoziții cu prepoziții Akk și 2 cu Dat pe care le confunzi.',
    },
    'Ortografie':{
      rule:'Ortografia germană are reguli clare — și excepții notabile.',
      details:[
        '→ ß vs ss: după vocale lungi/diftongi → ß (Straße, groß); după vocale scurte → ss (Fluss)',
        '→ Substantivele se scriu întotdeauna cu majusculă',
        '→ sz nu există în germană — mereu ß sau ss',
        '→ ie vs ei: ie = [iː] (lieben), ei = [aɪ] (Zeit)',
      ],
      exercitiu:'Recitește ultima ta scriere și subliniază toate substantivele — verifică majusculele.',
    },
    'Ordine':{
      rule:'Ordinea cuvintelor în germană urmează regula V2 și topica verbelor.',
      details:[
        '→ Verb pe poziția 2 în prop. principală: Morgen fahre ich nach Berlin.',
        '→ În prop. secundară (dass/weil/ob/wenn): verbul merge la final',
        '→ Negația „nicht": înainte de adjectiv/adverb/prefix, la final dacă negă verbul',
        '→ Ordinea complementelor: Timp → Manieră → Loc (TML)',
      ],
      exercitiu:'Transformă 3 propoziții simple în prop. cu „weil" — verifică verbul la final.',
    },
  };

  const recent=mistakes.slice(-5);
  const recentByType={};
  recent.forEach(m=>{const k=m.type.split(' ')[0]; if(!recentByType[k]) recentByType[k]=m;});

  let html=`<div style="line-height:1.7;white-space:pre-wrap;">`;
  html+=`📊 <strong>RAPORT GREȘELI — ${mistakes.length} înregistrate</strong>\n\n`;
  html+=`<strong>Distribuție:</strong>\n`;
  sorted.forEach(([t,n])=>{
    const pct=Math.round(n/mistakes.length*100);
    const bar='█'.repeat(Math.round(pct/10))+'░'.repeat(10-Math.round(pct/10));
    html+=`  ${bar} ${t}: ${n} (${pct}%)\n`;
  });
  html+='\n';

  if(topType){
    const tipKey=topType[0];
    const tip=TIPS[tipKey]||{rule:`Continuă să exersezi tipul „${tipKey}".`,details:[],exercitiu:'Revizuiește regulile pentru acest tip.'};
    html+=`🎯 <strong>PROBLEMA #1: ${tipKey} (${topType[1]} greșeli — ${Math.round(topType[1]/mistakes.length*100)}%)</strong>\n`;
    html+=`📌 Regula cheie: ${tip.rule}\n\n`;
    tip.details.forEach(d=>{html+=`  ${d}\n`;});
    html+='\n';
    if(recentByType[tipKey]){
      const ex=recentByType[tipKey];
      html+=`💬 Exemplu recent tău: „${ex.wrong}" → corect: „${ex.correct}"`;
      if(ex.context) html+=` (context: „${ex.context}")`;
      html+='\n\n';
    }
    html+=`✏️ <strong>Exercițiu recomandat:</strong> ${tip.exercitiu}\n\n`;
  }

  if(sorted.length>1){
    html+=`⚠️ <strong>ALTE PUNCTE SLABE:</strong>\n`;
    sorted.slice(1,4).forEach(([t,n])=>{
      const tip=TIPS[t];
      html+=`  • ${t} (${n}x)`;
      if(tip) html+=`: ${tip.rule}`;
      html+='\n';
    });
    html+='\n';
  }

  const week=getCurrentWeek();
  if(week){
    html+=`📅 <strong>LEGĂTURA CU PLANUL TĂU:</strong>\n`;
    html+=`  Săptămâna ${week.nr}: ${week.tema}\n`;
    html+=`  Focusul pe greșeli se aliniază cu output-ul săptămânii: ${week.output}\n`;
  }

}
function renderVocab() {
  let list=State.vocab;
  const today=todayISO();
  if(vocabFilter==='pending') list=list.filter(v=>!v.done);
  else if(vocabFilter==='done') list=list.filter(v=>v.done);
  const el=document.getElementById('vocab-list'), empty=document.getElementById('vocab-empty');
  if(!list.length){el.innerHTML='';empty.style.display='block';return;}
  empty.style.display='none';
  el.innerHTML=list.map(v=>{
    const overdue=v.date&&v.date<today&&!v.done;
    const dueSoon=v.date&&v.date>=today&&v.date<=addDays(today,3)&&!v.done;
    return `<div class="vocab-item${v.done?' vocab-done':''}">
      <button class="vocab-check${v.done?' checked':''}" onclick="toggleVocabDone(${v.id})" title="${v.done?'Marchează ca neînvățat':'Marchează ca învățat'}">
        ${v.done?'✓':'○'}
      </button>
      <div class="vocab-body">
        <div class="vocab-word">${esc(v.word)}</div>
        ${v.note?`<div class="vocab-note">${esc(v.note)}</div>`:''}
        ${v.date?`<div class="vocab-date${overdue?' vocab-overdue':dueSoon?' vocab-due-soon':''}">
          ${overdue?'⚠️ Depășit':'📅'} ${formatDate(v.date)}
        </div>`:''}
      </div>
      <button class="del-btn" onclick="deleteVocab(${v.id})">✕</button>
    </div>`;
  }).join('');
}
function renderVocab(){}

/* ═══════════════════════════════════════════════
   NOTIFICATIONS
═══════════════════════════════════════════════ */
function addNotif() {
  const text  =document.getElementById('notif-text').value.trim();
  const time  =document.getElementById('notif-time').value;
  const repeat=document.getElementById('notif-repeat').value;
  if(!text||!time){toast('Completează mesajul și ora!','error');return;}
  const notifs=State.notifs;
  notifs.push({id:Date.now(),text,time,repeat,active:true});
  State.notifs=notifs;
  document.getElementById('notif-text').value='';
  document.getElementById('notif-time').value='';
  renderNotifs(); renderDashboard(); toast('Notificare setată! 🔔','success');
}
function deleteNotif(id) {
  State.notifs=State.notifs.filter(n=>n.id!==id); renderNotifs(); renderDashboard();
}
function toggleNotif(id) {
  const notifs=State.notifs; const n=notifs.find(x=>x.id===id);
  if(n) n.active=!n.active; State.notifs=notifs; renderNotifs(); renderDashboard();
}
function requestNotifPerm() {
  Notification.requestPermission().then(p=>{
    if(p==='granted'){toast('Notificări activate! 🔔','success'); renderNotifs();}
    else toast('Permisiunea refuzată.','error');
  });
}
function savePlanNotif() {
  const time=document.getElementById('plan-notif-time').value;
  if(!time){toast('Selectează o oră!','error');return;}
  // Add/update plan daily notification
  const notifs=State.notifs;
  const existing=notifs.findIndex(n=>n.planAuto);
  const cw=getCurrentWeek();
  const dow=new Date().getDay();
  const focus=PLAN_DATA.weeklyRoutine[dow];
  const text=cw?`🇩🇪 Săpt.${cw.nr}: ${focus || 'Germana'}`:'🇩🇪 Plan germana — verifică progresul!';
  const entry={id:Date.now(),text,time,repeat:'daily',active:true,planAuto:true};
  if(existing>=0) notifs[existing]={...entry,id:notifs[existing].id};
  else notifs.push(entry);
  State.notifs=notifs;
  renderNotifs();
  document.getElementById('plan-notif-status').textContent=`✅ Notificare plan activată la ${time}`;
  toast(`Notificare plan setată la ${time}!`,'success');
}
function renderNotifs() {
  const notifs=State.notifs;
  const list=document.getElementById('notif-list'), empty=document.getElementById('notif-empty');
  const warn=document.getElementById('notif-perm-warn');
  warn.style.display=Notification.permission!=='granted'?'flex':'none';
  if(!notifs.length){list.innerHTML='';empty.style.display='block';return;}
  empty.style.display='none';
  const repeatLbl={daily:'Zilnic',weekdays:'Lu-Vi',once:'O dată'};
  list.innerHTML=notifs.map(n=>`
    <div class="notif-item" style="${!n.active?'opacity:.45':''}">
      <span style="font-size:20px;">${n.planAuto?'🇩🇪':'🔔'}</span>
      <div class="notif-body">
        <div class="notif-label">${esc(n.text)}</div>
        <div class="notif-meta">⏰ ${n.time} · ${repeatLbl[n.repeat]||n.repeat} · <span style="color:${n.active?'var(--green)':'var(--muted)'};">${n.active?'Activ':'Inactiv'}</span>${n.planAuto?' · 🎯 Plan auto':''}</div>
      </div>
      <button class="btn btn-sm btn-ghost" onclick="toggleNotif(${n.id})">${n.active?'⏸':'▶'}</button>
      <button class="del-btn" onclick="deleteNotif(${n.id})">✕</button>
    </div>
  `).join('');
}
function checkNotifications() {
  if(Notification.permission!=='granted') return;
  const now=new Date();
  const timeStr=pad(now.getHours())+':'+pad(now.getMinutes());
  const day=now.getDay();
  State.notifs.forEach(n=>{
    if(!n.active||n.time!==timeStr) return;
    if(n.repeat==='weekdays'&&(day===0||day===6)) return;
    const key=`nfired_${n.id}_${now.toDateString()}_${timeStr}`;
    if(sessionStorage.getItem(key)) return;
    sessionStorage.setItem(key,'1');

    // For plan auto-notifications, update the message dynamically
    let body=n.text;
    if(n.planAuto){
      const cw=getCurrentWeek();
      const focus=PLAN_DATA.weeklyRoutine[day];
      body=cw?`Săpt.${cw.nr}: "${cw.tema}"\nAzi: ${focus}`:n.text;
    }

    new Notification('⏰ Reminder — Spațiul Meu',{body,icon:'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">✦</text></svg>'});
    if(n.repeat==='once'){
      const notifs=State.notifs; const idx=notifs.findIndex(x=>x.id===n.id);
      if(idx>=0){notifs[idx].active=false; State.notifs=notifs;}
    }
  });
}

/* ═══════════════════════════════════════════════
   DASHBOARD
═══════════════════════════════════════════════ */
function renderDashboard() {
  const todos=State.todos;
  const total=todos.length, done=todos.filter(t=>t.done).length;
  const pct=total>0?Math.round(done/total*100):0;
  document.getElementById('dash-todo-left').textContent=total-done;
  document.getElementById('dash-progress-text').textContent=`${done} / ${total} bifate`;
  document.getElementById('dash-progress-pct').textContent=pct+'%';
  document.getElementById('dash-progress-fill').style.width=pct+'%';
  document.getElementById('dash-vocab').textContent=State.vocab.filter(v=>!v.done).length;

  // Learning
  const log=State.hoursLog;
  const totalH=log.reduce((a,e)=>a+e.hours,0);
  document.getElementById('dash-hours').textContent=totalH.toFixed(1)+'h';
  const sd=State.startDate;
  if(sd){
    const start=parseISO(sd), today=parseISO(todayISO());
    document.getElementById('dash-days').textContent=Math.max(0,Math.floor((today-start)/86400000)+1);
  } else {
    document.getElementById('dash-days').textContent='—';
  }

  // Category bars
  const maxH=Math.max(...CATS.map(c=>log.filter(e=>e.cat===c.name).reduce((a,e)=>a+e.hours,0)),1);
  document.getElementById('dash-cat-bars').innerHTML=CATS.map(c=>{
    const h=log.filter(e=>e.cat===c.name).reduce((a,e)=>a+e.hours,0);
    const p=Math.round(h/maxH*100);
    return `<div class="cat-bar-row">
      <span class="cat-bar-label">${c.emoji} ${c.name}</span>
      <div class="cat-bar-wrap"><div class="cat-bar-fill" style="width:${p}%;background:${c.color};"></div></div>
      <span class="cat-bar-val">${h.toFixed(1)}h</span>
    </div>`;
  }).join('');

  // Thoughts preview
  const thoughts=State.thoughts.slice(0,3);
  document.getElementById('dash-thoughts-preview').innerHTML=thoughts.length
    ? thoughts.map(t=>`<div class="dash-preview-item"><div class="dash-preview-meta">${t.mood||''} ${t.date}</div>${esc(t.text.substring(0,100))}${t.text.length>100?'…':''}</div>`).join('')
    : '<div class="muted-text">Niciun gând salvat.</div>';

  // Notifs preview
  const activeNotifs=State.notifs.filter(n=>n.active);
  document.getElementById('dash-notifs-preview').innerHTML=activeNotifs.length
    ? activeNotifs.slice(0,4).map(n=>`<div class="dash-preview-item" style="display:flex;align-items:center;gap:10px;"><span>${n.planAuto?'🇩🇪':'🔔'}</span><span style="flex:1;">${esc(n.text)}</span><span class="muted-text">${n.time}</span></div>`).join('')
    : '<div class="muted-text">Nicio notificare activă.</div>';

  updateCountdown();
  updateSfatWidget();
}

/* ═══════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════ */
function init() {
  initNav();
  startClock();
  initCalendar();

  document.getElementById('hour-date').value = todayISO();

  renderDashboard();
  renderTodos();
  renderThoughts();
  renderLearning();
  initNotepad();
  renderNotifs();

  updateCountdown();
  updateSfatWidget();

  // Show today's focus toast after 1.5s
  setTimeout(() => {
    const cw = getCurrentWeek();
    if (cw) {
      const dow   = new Date().getDay();
      const focus = PLAN_DATA.weeklyRoutine[dow];
      toast(`🇩🇪 Săpt.${cw.nr}: ${focus}`, 'accent');
    }
  }, 1500);

  // Notification checker
  setInterval(checkNotifications, 60000);
  checkNotifications();

  // Request notification permission
  if (Notification.permission === 'default') {
    setTimeout(() => Notification.requestPermission(), 3000);
  }

  // API key indicator
  if (localStorage.getItem('anthropic_key')) {
    const el = document.getElementById('api-key-status');
    if (el) el.textContent = '✅ Cheie API activă';
    const inp = document.getElementById('api-key-input');
    if (inp) inp.value = '••••••••••••••••••••••••';
  }

  // Check if plan notification already set
  const planNotif = State.notifs.find(n => n.planAuto);
  if (planNotif) {
    const el = document.getElementById('plan-notif-status');
    if (el) el.textContent = `✅ Activă la ${planNotif.time}`;
    const inp = document.getElementById('plan-notif-time');
    if (inp) inp.value = planNotif.time;
  }
}

/* ── Article Checker ── */
const ARTICLE_DICT = {
  // A
  abend:'der',apfel:'der',arm:'der',arzt:'der',aufzug:'der',ausgang:'der',ausweis:'der',
  arbeit:'die',adresse:'die',ampel:'die',angst:'die',antwort:'die',apotheke:'die',
  auto:'das',auge:'das',amt:'das',
  // B
  bahnhof:'der',ball:'der',baum:'der',beruf:'der',besuch:'der',brief:'der',bruder:'der',bus:'der',
  bäcker:'der',berg:'der',boden:'der',balkon:'der',
  bahn:'die',bank:'die',bibliothek:'die',blume:'die',brille:'die',brust:'die',
  buch:'das',bett:'das',bild:'das',bier:'das',büro:'das',bad:'das',
  // C
  chef:'der',
  chance:'die',
  // D
  doktor:'der',donnerstag:'der',dienstag:'der',dialog:'der',
  datei:'die',dose:'die',dusche:'die',
  datum:'das',ding:'das',dorf:'das',
  // E
  eingang:'der',elefant:'der',enkel:'der',
  ecke:'die',ehe:'die',einheit:'die',entscheidung:'die',
  ei:'das',ergebnis:'das',essen:'das',ende:'das',
  // F
  film:'der',flug:'der',flughafen:'der',freitag:'der',freund:'der',fuss:'der',führerschein:'der',
  fahrkarte:'die',farbe:'die',flasche:'die',frage:'die',freiheit:'die',freundin:'die',
  fenster:'das',foto:'das',formular:'das',fach:'das',
  // G
  garten:'der',geburtstag:'der',gedanke:'der',genuss:'der',grund:'der',
  gabel:'die',gemeinschaft:'die',gesundheit:'die',gewohnheit:'die',grenze:'die',größe:'die',gruppe:'die',
  gebäude:'das',gefühl:'das',gehalt:'das',gespräch:'das',glas:'das',glück:'das',grundstück:'das',
  // H
  hafen:'der',hunger:'der',hund:'der',hut:'der',herbst:'der',
  haltestelle:'die',hand:'die',hauptstadt:'die',hilfe:'die',hose:'die',
  haus:'das',heft:'das',hobby:'das',hotel:'das',
  // I
  informatiker:'der',
  idee:'die',insel:'die',
  internet:'das',
  // J
  januar:'der',juli:'der',juni:'der',job:'der',
  jacke:'die',jahreszeit:'die',
  jahr:'das',
  // K
  kellner:'der',kilometer:'der',kurs:'der',käse:'der',kühlschrank:'der',
  küche:'die',karte:'die',klasse:'die',kleidung:'die',krankheit:'die',
  kind:'das',kino:'das',konzert:'das',krankenhaus:'das',
  // L
  lehrer:'der',lehrling:'der',löffel:'der',lärm:'der',
  lehrerin:'die',lösung:'die',
  leben:'das',licht:'das',lied:'das',
  // M
  mann:'der',markt:'der',mittwoch:'der',montag:'der',monat:'der',morgen:'der',
  mutter:'die',möglichkeit:'die',meinung:'die',milch:'die',minute:'die',
  mädchen:'das',messer:'das',museum:'das',
  // N
  nachbar:'der',nachmittag:'der',name:'der',november:'der',
  nacht:'die',nachricht:'die',nummer:'die',
  notebook:'das',
  // O
  oktober:'der',onkel:'der',ort:'der',
  ordnung:'die',
  obst:'das',
  // P
  platz:'der',preis:'der',professor:'der',
  pause:'die',pflanze:'die',pizza:'die',polizei:'die',post:'die',
  papier:'das',problem:'das',programm:'das',
  // Q
  quatsch:'der',
  qualität:'die',
  // R
  regen:'der',ring:'der',rucksack:'der',
  regel:'die',reise:'die',
  restaurant:'das',rezept:'das',
  // S
  sohn:'der',samstag:'der',september:'der',sommer:'der',sonntag:'der',supermarkt:'der',
  schule:'die',schwester:'die',sprache:'die',stadt:'die',straße:'die',stunde:'die',
  schloss:'das',spiel:'das',studium:'das',
  // T
  tag:'der',tisch:'der',tourismus:'der',
  tasche:'die',tasse:'die',tür:'die',
  taxi:'das',telefon:'das',theater:'das',thema:'das',ticket:'das',
  // U
  urlaub:'der',unterricht:'der',
  uhr:'die',übung:'die',
  // V
  vater:'der',verkehr:'der',vorname:'der',
  veranstaltung:'die',verbindung:'die',
  video:'das',
  // W
  wald:'der',weg:'der',winter:'der',wochentag:'der',
  wohnung:'die',woche:'die',wurst:'die',
  wasser:'das',wetter:'das',wochenende:'das',wörterbuch:'das',
  // Z
  zug:'der',zucker:'der',
  zeit:'die',zeitung:'die',zahl:'die',
  zimmer:'das',ziel:'das',

  // ── Medical / Gesundheit ──
  arzt:'der',zahnarzt:'der',krankenwagen:'der',blutdruck:'der',herzschlag:'der',husten:'der',
  schmerz:'der',kopfschmerz:'der',bauchschmerz:'der',rücken:'der',
  krankheit:'die',erkältung:'die',grippe:'die',allergie:'die',impfung:'die',
  behandlung:'die',tablette:'die',salbe:'die',spritze:'die',untersuchung:'die',
  krankenhaus:'das',rezept:'das',medikament:'das',symptom:'das',fieber:'das',ergebnis:'das',
  blut:'das',röntgen:'das',

  // ── IT / Technologie ──
  computer:'der',laptop:'der',bildschirm:'der',drucker:'der',server:'der',
  code:'der',fehler:'der',algorithmus:'der',speicher:'der',akku:'der',
  tastatur:'die',maus:'die',festplatte:'die',software:'die',app:'die',
  anwendung:'die',verbindung:'die',datenbank:'die',schnittstelle:'die',
  programm:'das',netzwerk:'das',passwort:'das',system:'das',update:'das',
  betriebssystem:'das',dokument:'das',verzeichnis:'das',modul:'das',
  internet:'das',smartphone:'das',tablet:'das',kabel:'das',

  // ── Alltag / Haushalt ──
  kühlschrank:'der',herd:'der',backofen:'der',staubsauger:'der',wasserkocher:'der',
  mikrowelle:'die',waschmaschine:'die',spülmaschine:'die',pfanne:'die',
  geschirr:'das',besteck:'das',handtuch:'das',kissen:'das',sofa:'das',

  // ── Essen & Trinken ──
  kaffee:'der',tee:'der',saft:'der',wein:'der',schnaps:'der',
  kuchen:'der',käse:'der',fisch:'der',salat:'der',
  suppe:'die',soße:'die',marmelade:'die',butter:'die',sahne:'die',
  brot:'das',fleisch:'das',gemüse:'das',öl:'das',mehl:'das',salz:'das',

  // ── Reise & Transport ──
  flughafen:'der',bahnsteig:'der',fahrplan:'der',koffer:'der',reisepass:'der',
  haltestelle:'die',fahrkarte:'die',buchung:'die',unterkunft:'die',
  flugzeug:'das',schiff:'das',fahrrad:'das',motorrad:'das',

  // ── Bildung & Beruf ──
  unterricht:'der',kurs:'der',abschluss:'der',beruf:'der',vertrag:'der',
  prüfung:'die',aufgabe:'die',hausaufgabe:'die',note:'die',beurteilung:'die',karriere:'die',
  zertifikat:'das',ergebnis:'das',zeugnis:'das',praktikum:'das',

  // ── Natur & Wetter ──
  regen:'der',schnee:'der',wind:'der',sturm:'der',frost:'der',nebel:'der',
  wolke:'die',sonne:'die',luft:'die',erde:'die',
  wetter:'das',klima:'das',gewitter:'das',eis:'das',

  // ── Körper ──
  kopf:'der',hals:'der',arm:'der',finger:'der',daumen:'der',zahn:'der',
  hand:'die',schulter:'die',brust:'die',nase:'die',lippe:'die',
  auge:'das',ohr:'das',knie:'das',herz:'das',gehirn:'das',

  // ── Gefühle & Charakter ──
  stress:'der',mut:'der',erfolg:'der',misserfolg:'der',
  freude:'die',trauer:'die',wut:'die',liebe:'die',hoffnung:'die',
  glück:'das',pech:'das',gefühl:'das',vertrauen:'das',
};

const SUFFIX_RULES = [
  // Feminine — die
  { sfx:['ung'],        art:'die', rule:'Substantivele cu -ung → die (Bildung, Meinung, Lösung)' },
  { sfx:['heit','keit'],art:'die', rule:'Substantivele cu -heit/-keit → die (Freiheit, Möglichkeit)' },
  { sfx:['schaft'],     art:'die', rule:'Substantivele cu -schaft → die (Freundschaft, Gesellschaft)' },
  { sfx:['ion'],        art:'die', rule:'Substantivele cu -ion → die (Nation, Situation, Emotion)' },
  { sfx:['tät'],        art:'die', rule:'Substantivele cu -tät → die (Qualität, Universität)' },
  { sfx:['ur'],         art:'die', rule:'Substantivele cu -ur → die (Natur, Kultur, Frisur)' },
  { sfx:['ie'],         art:'die', rule:'Substantivele cu -ie → die (Energie, Melodie, Theorie)' },
  { sfx:['ik'],         art:'die', rule:'Substantivele cu -ik → die (Musik, Kritik, Politik)' },
  { sfx:['enz','anz'],  art:'die', rule:'Substantivele cu -enz/-anz → die (Konferenz, Toleranz)' },
  { sfx:['sis'],        art:'die', rule:'Substantivele cu -sis → die (Basis, Analyse, Praxis)' },
  // Neuter — das
  { sfx:['chen','lein'],art:'das', rule:'Diminutivele cu -chen/-lein → das (Mädchen, Büchlein)' },
  { sfx:['ment'],       art:'das', rule:'Substantivele cu -ment → das (Dokument, Instrument)' },
  { sfx:['um'],         art:'das', rule:'Substantivele cu -um → das (Datum, Museum, Zentrum)' },
  { sfx:['tum'],        art:'das', rule:'Substantivele cu -tum → das (Wachstum, Eigentum)' },
  { sfx:['nis'],        art:'das', rule:'Substantivele cu -nis → das (Ergebnis, Zeugnis, Ereignis)' },
  { sfx:['ma'],         art:'das', rule:'Substantivele cu -ma → das (Thema, Schema, Klima)' },
  // Masculine — der
  { sfx:['er'],         art:'der', rule:'Persoanele/agenții cu -er → der (Lehrer, Bäcker, Fahrer)' },
  { sfx:['ling'],       art:'der', rule:'Substantivele cu -ling → der (Lehrling, Frühling, Flüchtling)' },
  { sfx:['ismus'],      art:'der', rule:'Substantivele cu -ismus → der (Optimismus, Tourismus)' },
  { sfx:['ist'],        art:'der', rule:'Substantivele cu -ist → der (Tourist, Optimist)' },
  { sfx:['ant','ent'],  art:'der', rule:'Substantivele cu -ant/-ent → der (Student, Assistent)' },
  { sfx:['or'],         art:'der', rule:'Substantivele cu -or → der (Motor, Autor, Direktor)' },
];

function checkArticle() {
  const raw = document.getElementById('article-input').value.trim();
  const resultEl = document.getElementById('article-result');
  if (!raw) { toast('Scrie un substantiv!', 'error'); return; }

  const key = raw.toLowerCase().replace(/ä/g,'ä').replace(/ö/g,'ö').replace(/ü/g,'ü');
  const display = raw.charAt(0).toUpperCase() + raw.slice(1);
  resultEl.style.display = 'block';

  // 1. exact dictionary match
  if (ARTICLE_DICT[key]) {
    const art = ARTICLE_DICT[key];
    resultEl.className = 'art-found';
    resultEl.innerHTML = `
      <span class="art-confidence conf-certain">✓ Sigur</span>
      <div class="art-main"><span class="art-article-${art}">${art}</span> <span class="art-noun">${esc(display)}</span></div>
      <div class="art-rule">📚 Din dicționar — articol confirmat</div>
    `;
    return;
  }

  // 2. suffix rules
  for (const rule of SUFFIX_RULES) {
    for (const sfx of rule.sfx) {
      if (key.length > sfx.length && key.endsWith(sfx)) {
        const art = rule.art;
        resultEl.className = 'art-guess';
        resultEl.innerHTML = `
          <span class="art-confidence conf-likely">~ Probabil</span>
          <div class="art-main"><span class="art-article-${art}">${art}</span> <span class="art-noun">${esc(display)}</span></div>
          <div class="art-rule">📌 Regulă sufix: ${rule.rule}</div>
          <div class="art-rule" style="margin-top:4px;color:var(--red);font-size:11px;">⚠️ Verifică în dicționar — există excepții!</div>
        `;
        return;
      }
    }
  }

  // 3. not found
  resultEl.className = 'art-unknown';
  resultEl.innerHTML = `
    <span class="art-confidence conf-unknown">? Necunoscut</span>
    <div class="art-main" style="font-size:18px;color:var(--muted);">${esc(display)}</div>
    <div class="art-rule">Nu am găsit articolul în dicționar și nu se aplică nicio regulă de sufix clară.</div>
    <div class="art-rule" style="margin-top:6px;">💡 Caută în: <strong>dict.cc</strong> sau <strong>duden.de</strong></div>
  `;
}

function switchLang(lang, btn) {
  document.getElementById('tbl-de').style.display = lang === 'de' ? '' : 'none';
  document.getElementById('tbl-en').style.display = lang === 'en' ? '' : 'none';
  document.querySelectorAll('.tbl-lang-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

document.addEventListener('DOMContentLoaded', init);
