// ====== 1) Coloque seu plano aqui (Jan-Jun). Você pode editar à vontade. ======
// Formato: "AAAA-MM": { A: [{name, sets}], B: [...], C: [...] }
const PLANS = {
  // ======== JANEIRO (Resistência / Adaptação 12–15) ========
  "2026-01": {
    A: [
      { name: "Agachamento livre (barra)", sets: "3×12–15" },
      { name: "Supino reto (barra)", sets: "3×12–15" },
      { name: "Remada curvada (barra)", sets: "3×12–15" },
      { name: "Afundo búlgaro (halter)", sets: "2×12–15/cada" },
      { name: "Elevação lateral", sets: "2×15–20" },
      { name: "Tríceps corda", sets: "2×15–20" },
      { name: "Ab wheel ou prancha", sets: "2–3 séries" }
    ],
    B: [
      { name: "Terra romeno", sets: "3×12–15" },
      { name: "Desenvolvimento (halter)", sets: "3×12–15" },
      { name: "Barra fixa / puxada", sets: "3×10–15" },
      { name: "Leg press", sets: "2×15" },
      { name: "Face pull", sets: "2×15–20" },
      { name: "Rosca alternada", sets: "2×12–15" },
      { name: "Panturrilha em pé", sets: "3×12–20" }
    ],
    C: [
      { name: "Hack squat (ou front leve)", sets: "3×12–15" },
      { name: "Supino inclinado (halter)", sets: "3×12–15" },
      { name: "Remada baixa (cabo)", sets: "3×12–15" },
      { name: "Mesa flexora", sets: "2×15–20" },
      { name: "Crucifixo inverso", sets: "2×15–20" },
      { name: "Rosca martelo", sets: "2×12–15" },
      { name: "Pallof press", sets: "2–3 séries" }
    ]
  },

  // ======== FEVEREIRO (Transição / Hipertrofia 8–12) ========
  "2026-02": {
    A: [
      { name: "Front squat", sets: "4×8–12" },
      { name: "Supino inclinado (barra)", sets: "4×8–12" },
      { name: "Remada apoiada (chest-supported)", sets: "4×8–12" },
      { name: "Passada caminhando (halter)", sets: "2×10–12/cada" },
      { name: "Elevação lateral", sets: "3×12–15" },
      { name: "Tríceps testa (barra W)", sets: "2×10–12" },
      { name: "Crunch na polia", sets: "2–3×10–15" }
    ],
    B: [
      { name: "Terra trap bar (ou convencional técnico)", sets: "4×6–10" },
      { name: "Desenvolvimento (barra)", sets: "4×8–12" },
      { name: "Puxada neutra (pulley)", sets: "4×8–12" },
      { name: "Cadeira extensora", sets: "2×12–15" },
      { name: "Face pull", sets: "2×12–15" },
      { name: "Rosca Scott", sets: "2×10–12" },
      { name: "Panturrilha sentado", sets: "3×12–20" }
    ],
    C: [
      { name: "Agachamento pausa (2s)", sets: "4×6–10" },
      { name: "Paralelas (com peso se possível)", sets: "3×8–12" },
      { name: "Remada unilateral (halter)", sets: "3×8–12" },
      { name: "Hip thrust", sets: "3×8–12" },
      { name: "Crucifixo inverso", sets: "2×12–15" },
      { name: "Tríceps francês (halter)", sets: "2×10–12" },
      { name: "Prancha lateral", sets: "2–3 séries" }
    ]
  },

  // ======== MARÇO (Força 3–6 nos principais) ========
  "2026-03": {
    A: [
      { name: "Agachamento livre (pesado)", sets: "5×3–5" },
      { name: "Supino reto (barra)", sets: "5×3–5" },
      { name: "Barra fixa com peso (ou puxada pesada)", sets: "4×4–6" },
      { name: "Afundo búlgaro", sets: "2×6–8/cada" },
      { name: "Elevação lateral", sets: "2×10–15" },
      { name: "Tríceps corda (pesado)", sets: "2×6–10" },
      { name: "Ab wheel", sets: "2–3 séries" }
    ],
    B: [
      { name: "Terra (convencional ou sumô)", sets: "5×3–5" },
      { name: "Desenvolvimento militar (barra)", sets: "5×3–5" },
      { name: "Remada (barra ou T-bar)", sets: "4×4–6" },
      { name: "Leg press (pesado)", sets: "2×6–10" },
      { name: "Face pull", sets: "2×12–15" },
      { name: "Rosca direta", sets: "2×6–10" },
      { name: "Panturrilha em pé", sets: "3×8–12" }
    ],
    C: [
      { name: "Front squat", sets: "4×3–6" },
      { name: "Supino inclinado (barra)", sets: "4×3–6" },
      { name: "Remada baixa (pesada)", sets: "4×4–6" },
      { name: "Mesa flexora", sets: "2×6–10" },
      { name: "Crucifixo inverso", sets: "2×12–15" },
      { name: "Rosca martelo", sets: "2×6–10" },
      { name: "Pallof press", sets: "2–3 séries" }
    ]
  },

  // ======== ABRIL (Reinício Resistência 12–15, exercícios novos) ========
  "2026-04": {
    A: [
      { name: "Agachamento goblet (pesado)", sets: "3×12–15" },
      { name: "Supino máquina (ou smith)", sets: "3×12–15" },
      { name: "Remada cavalinho", sets: "3×12–15" },
      { name: "Step-up (halter)", sets: "2×12–15/cada" },
      { name: "Elevação lateral + frontal (bi-set)", sets: "2×12–15" },
      { name: "Tríceps na barra V", sets: "2×15–20" },
      { name: "Crunch reverso", sets: "2–3 séries" }
    ],
    B: [
      { name: "RDL com halteres", sets: "3×12–15" },
      { name: "Arnold press", sets: "3×12–15" },
      { name: "Puxada aberta", sets: "3×12–15" },
      { name: "Cadeira extensora", sets: "2×15–20" },
      { name: "Face pull", sets: "2×15–20" },
      { name: "Rosca no cabo", sets: "2×12–15" },
      { name: "Panturrilha no leg press", sets: "3×12–20" }
    ],
    C: [
      { name: "Hack squat", sets: "3×12–15" },
      { name: "Supino declinado (halter)", sets: "3×12–15" },
      { name: "Remada baixa (triângulo)", sets: "3×12–15" },
      { name: "Flexora sentado", sets: "2×15–20" },
      { name: "Crucifixo inverso", sets: "2×15–20" },
      { name: "Tríceps francês", sets: "2×12–15" },
      { name: "Prancha", sets: "2–3 séries" }
    ]
  },

  // ======== MAIO (Hipertrofia 8–12, exercícios novos) ========
  "2026-05": {
    A: [
      { name: "Agachamento high-bar", sets: "4×8–12" },
      { name: "Supino com halter", sets: "4×8–12" },
      { name: "Remada apoiada (chest-supported)", sets: "4×8–12" },
      { name: "Afundo no smith", sets: "2×10–12" },
      { name: "Elevação lateral", sets: "3×12–15" },
      { name: "Tríceps corda", sets: "2×10–12" },
      { name: "Abdominal na polia", sets: "2–3×10–15" }
    ],
    B: [
      { name: "Terra romeno (barra)", sets: "4×8–12" },
      { name: "Desenvolvimento sentado (máquina)", sets: "4×8–12" },
      { name: "Barra fixa (ou neutra)", sets: "4×6–10" },
      { name: "Leg press", sets: "2×10–12" },
      { name: "Face pull", sets: "2×12–15" },
      { name: "Rosca Scott", sets: "2×10–12" },
      { name: "Panturrilha sentado", sets: "3×12–20" }
    ],
    C: [
      { name: "Front squat", sets: "4×6–10" },
      { name: "Paralelas (com peso se possível)", sets: "3×8–12" },
      { name: "Remada unilateral (halter)", sets: "3×8–12" },
      { name: "Hip thrust", sets: "3×8–12" },
      { name: "Crucifixo inverso", sets: "2×12–15" },
      { name: "Rosca martelo", sets: "2×10–12" },
      { name: "Prancha lateral", sets: "2–3 séries" }
    ]
  },

  // ======== JUNHO (Força 3–6, variações novas) ========
  "2026-06": {
    A: [
      { name: "Agachamento pausa (pesado)", sets: "5×3–5" },
      { name: "Supino com pausa no peito", sets: "5×3–5" },
      { name: "Barra fixa com peso", sets: "4×4–6" },
      { name: "Afundo búlgaro", sets: "2×6–8/cada" },
      { name: "Elevação lateral", sets: "2×10–15" },
      { name: "Tríceps testa", sets: "2×6–10" },
      { name: "Ab wheel", sets: "2–3 séries" }
    ],
    B: [
      { name: "Terra sumô (ou trap bar pesado)", sets: "5×3–5" },
      { name: "Push press", sets: "5×3–5" },
      { name: "Remada T-bar", sets: "4×4–6" },
      { name: "Leg press (pesado)", sets: "2×6–10" },
      { name: "Face pull", sets: "2×12–15" },
      { name: "Rosca direta", sets: "2×6–10" },
      { name: "Panturrilha em pé", sets: "3×8–12" }
    ],
    C: [
      { name: "Front squat", sets: "4×3–6" },
      { name: "Supino inclinado (barra)", sets: "4×3–6" },
      { name: "Remada baixa (pesada)", sets: "4×4–6" },
      { name: "Mesa flexora", sets: "2×6–10" },
      { name: "Crucifixo inverso", sets: "2×12–15" },
      { name: "Rosca martelo", sets: "2×6–10" },
      { name: "Pallof press", sets: "2–3 séries" }
    ]
  }
};

const SEQUENCE = ["A", "B", "C"];
const STORAGE_KEY = "treino_pwa_state_v1";

function nowISODate() {
  const d = new Date();
  const tzOffset = d.getTimezoneOffset() * 60000;
  return new Date(d - tzOffset).toISOString().slice(0, 10); // YYYY-MM-DD local
}
function currentMonthKey() {
  return nowISODate().slice(0, 7); // YYYY-MM
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return { seqIndex: 0, log: [] }; // seqIndex aponta para o "próximo" na SEQUENCE
  }
  try { return JSON.parse(raw); } catch { return { seqIndex: 0, log: [] }; }
}
function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getPlanForMonth(monthKey) {
  if (PLANS[monthKey]) return { monthKey, plan: PLANS[monthKey], fallback: false };

  // fallback: usa o último mês disponível no PLANS (evita ficar sem treino)
  const keys = Object.keys(PLANS).sort();
  const lastKey = keys[keys.length - 1];
  if (lastKey) return { monthKey: lastKey, plan: PLANS[lastKey], fallback: true };

  return { monthKey: null, plan: null, fallback: true };
}

function formatHistoryItem(item) {
  return `${item.date} — Treino ${item.workout} (${item.monthUsed})`;
}

function render() {
  const state = loadState();

  // UI básica
  const todayEl = document.getElementById("today");
  todayEl.textContent = `Hoje: ${nowISODate()}`;

  const nextWorkout = SEQUENCE[state.seqIndex % SEQUENCE.length];
  document.getElementById("nextWorkout").textContent = nextWorkout;

  const monthKey = currentMonthKey();
  const { monthKey: monthUsed, plan, fallback } = getPlanForMonth(monthKey);

  document.getElementById("monthPill").textContent =
    monthUsed ? `Plano: ${monthUsed}` : `Plano: (não definido)`;

  const fallbackNote = document.getElementById("fallbackNote");
  fallbackNote.textContent = fallback && monthUsed !== monthKey
    ? `Obs.: não encontrei plano para ${monthKey}. Usando ${monthUsed} como fallback.`
    : "";

  // Lista de exercícios
  const list = document.getElementById("exerciseList");
  list.innerHTML = "";
  if (!plan || !plan[nextWorkout]) {
    const li = document.createElement("li");
    li.textContent = "Nenhum exercício definido. Edite o objeto PLANS no app.js.";
    list.appendChild(li);
  } else {
    for (const ex of plan[nextWorkout]) {
      const li = document.createElement("li");
      li.textContent = `${ex.name} — ${ex.sets}`;
      list.appendChild(li);
    }
  }

  // Histórico (últimos 20)
  const hist = document.getElementById("historyList");
  hist.innerHTML = "";
  const last = [...state.log].slice(-20).reverse();
  for (const item of last) {
    const li = document.createElement("li");
    li.textContent = formatHistoryItem(item);
    hist.appendChild(li);
  }

  // Status
  const status = document.getElementById("status");
  status.textContent = `Registros: ${state.log.length} • Próximo: ${nextWorkout}`;
}

function markDone() {
  const state = loadState();
  const workout = SEQUENCE[state.seqIndex % SEQUENCE.length];

  const monthKey = currentMonthKey();
  const { monthKey: monthUsed } = getPlanForMonth(monthKey);

  state.log.push({
    date: nowISODate(),
    workout,
    monthUsed: monthUsed || monthKey
  });

  state.seqIndex = (state.seqIndex + 1) % SEQUENCE.length;
  saveState(state);
  render();
}

function undoLast() {
  const state = loadState();
  if (state.log.length === 0) return;

  state.log.pop();
  // volta o ponteiro um passo
  state.seqIndex = (state.seqIndex - 1 + SEQUENCE.length) % SEQUENCE.length;
  saveState(state);
  render();
}

function exportData() {
  const state = loadState();
  const payload = {
    exportedAt: new Date().toISOString(),
    state
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `treino-backup-${nowISODate()}.json`;
  a.click();

  URL.revokeObjectURL(url);
}

function importData(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(String(reader.result));
      if (!parsed.state || typeof parsed.state.seqIndex !== "number" || !Array.isArray(parsed.state.log)) {
        alert("Arquivo inválido.");
        return;
      }
      saveState(parsed.state);
      render();
    } catch {
      alert("Não consegui ler o JSON.");
    }
  };
  reader.readAsText(file);
}

function resetAll() {
  if (!confirm("Apagar todo o histórico?")) return;
  localStorage.removeItem(STORAGE_KEY);
  render();
}

// Events
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("doneBtn").addEventListener("click", markDone);
  document.getElementById("undoBtn").addEventListener("click", undoLast);
  document.getElementById("exportBtn").addEventListener("click", exportData);
  document.getElementById("resetBtn").addEventListener("click", resetAll);
  document.getElementById("importFile").addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    if (file) importData(file);
    e.target.value = "";
  });

  render();
});
