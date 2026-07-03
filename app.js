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
  },

  // ======== JULHO (Alta frequência 6x/semana — exploração técnica e hipertrofia distribuída) ========
  // Semanas 1–3: siga o volume abaixo. Semana 4: mantenha os exercícios, mas reduza para 1–2 séries e RIR 3–4.
  "2026-07": {
    A: [
      { name: "Pendulum squat (ou hack squat)", sets: "3×8–12" },
      { name: "Afundo búlgaro no Smith com pé da frente elevado", sets: "2×8–10/cada" },
      { name: "Reverse Nordic assistido", sets: "2×6–10" },
      { name: "Cadeira extensora unilateral", sets: "2×12–15" },
      { name: "Adutora", sets: "2×12–15" },
      { name: "Panturrilha em pé com pausa no alongamento", sets: "3×10–15" },
      { name: "Tibial anterior em máquina, elástico ou parede", sets: "2×15–20" },
      { name: "Crunch na polia", sets: "3×10–15" }
    ],
    B: [
      { name: "Landmine press unilateral meio-ajoelhado", sets: "3×8–10/cada" },
      { name: "Seal row / remada com peito apoiado", sets: "3×8–12" },
      { name: "Supino inclinado em máquina convergente", sets: "2×8–12" },
      { name: "Puxada neutra", sets: "2×8–12" },
      { name: "Pullover no cabo", sets: "2×12–15" },
      { name: "Reverse pec deck", sets: "2×12–20" },
      { name: "Rosca Bayesian no cabo", sets: "2×10–15" },
      { name: "Tríceps cruzado no cabo", sets: "2×10–15" }
    ],
    C: [
      { name: "Elevação lateral no cabo atrás do corpo", sets: "3×12–20" },
      { name: "Elevação em Y no banco inclinado", sets: "2×12–15" },
      { name: "Crucifixo inverso no cabo", sets: "2×12–20" },
      { name: "Rosca spider", sets: "3×10–15" },
      { name: "Rosca martelo na corda", sets: "2×10–15" },
      { name: "Extensão de tríceps acima da cabeça no cabo", sets: "3×10–15" },
      { name: "Tríceps barra V com pegada reversa", sets: "2×12–15" },
      { name: "Pallof press", sets: "3×10–12/cada" }
    ],
    D: [
      { name: "Extensão de quadril a 45° com foco em glúteos", sets: "3×8–12" },
      { name: "Flexora sentada", sets: "3×10–15" },
      { name: "Nordic curl excêntrico assistido", sets: "2×4–6" },
      { name: "Pull-through no cabo", sets: "2×12–15" },
      { name: "Terra unilateral com halter contralateral", sets: "2×8–10/cada" },
      { name: "Abdutora", sets: "2×15–20" },
      { name: "Panturrilha sentada", sets: "3×12–20" },
      { name: "Elevação de joelhos suspenso ou no banco", sets: "3×10–15" }
    ],
    E: [
      { name: "Barra fixa neutra ou puxada neutra", sets: "3×6–10" },
      { name: "High row articulada", sets: "3×8–12" },
      { name: "Chest press convergente", sets: "2×8–12" },
      { name: "Remada unilateral no cabo com alcance escapular", sets: "2×10–12/cada" },
      { name: "Desenvolvimento Arnold", sets: "2×10–12" },
      { name: "Elevação lateral na máquina", sets: "2×12–20" },
      { name: "Crucifixo no cabo de baixo para cima", sets: "2×12–15" },
      { name: "Face pull", sets: "2×12–20" }
    ],
    F: [
      { name: "Belt squat leve (ou agachamento no landmine)", sets: "2×12–15" },
      { name: "Puxada unilateral cruzada no cabo", sets: "2×12–15/cada" },
      { name: "Crucifixo na máquina ou cabo", sets: "2×12–15" },
      { name: "Elevação lateral na máquina", sets: "2×15–20" },
      { name: "Rosca martelo com corda", sets: "2×12–15" },
      { name: "Tríceps corda", sets: "2×12–15" },
      { name: "Panturrilha no leg press", sets: "2×15–20" },
      { name: "Farmer carry ou dead bug", sets: "3 voltas / 3 séries" }
    ]
  },

  // ======== AGOSTO (Hipertrofia 4x/semana — máquinas, amplitude e novos vetores) ========
  "2026-08": {
    A: [
      { name: "Belt squat (ou agachamento no landmine)", sets: "4×8–12" },
      { name: "Afundo búlgaro com pé da frente elevado", sets: "3×8–12/cada" },
      { name: "Flexora sentada", sets: "3×10–15" },
      { name: "Reverse Nordic assistido", sets: "2×10–15" },
      { name: "Adutora", sets: "2×12–15" },
      { name: "Panturrilha em pé", sets: "3×12–20" },
      { name: "Crunch na polia", sets: "2×10–15" },
      { name: "Tibial anterior", sets: "2×15–20" }
    ],
    B: [
      { name: "Supino inclinado em máquina convergente", sets: "4×8–12" },
      { name: "Seal row / remada com peito apoiado", sets: "3×8–12" },
      { name: "Landmine press unilateral", sets: "3×10–15/cada" },
      { name: "Pullover no cabo", sets: "2×10–15" },
      { name: "Crucifixo no cabo de baixo para cima", sets: "2×12–15" },
      { name: "Reverse pec deck", sets: "3×12–20" },
      { name: "Rosca Bayesian", sets: "2×10–15" },
      { name: "Tríceps cruzado no cabo", sets: "2×10–15" }
    ],
    C: [
      { name: "Extensão de quadril a 45° com carga", sets: "4×8–12" },
      { name: "Pendulum squat (ou hack squat)", sets: "3×8–12" },
      { name: "Flexora sentada", sets: "3×10–15" },
      { name: "Nordic curl assistido", sets: "2×5–8" },
      { name: "Pull-through no cabo", sets: "2×12–15" },
      { name: "Abdutora", sets: "3×12–20" },
      { name: "Panturrilha sentada", sets: "3×12–20" },
      { name: "Elevação de joelhos suspenso", sets: "2×10–15" }
    ],
    D: [
      { name: "Barra fixa neutra (com carga se possível)", sets: "4×6–10" },
      { name: "High row articulada", sets: "3×8–12" },
      { name: "Chest press convergente", sets: "3×8–12" },
      { name: "Remada unilateral no cabo com alcance escapular", sets: "2×10–15/cada" },
      { name: "Elevação lateral no cabo atrás do corpo", sets: "2×12–20" },
      { name: "Reverse pec deck", sets: "3×12–20" },
      { name: "Rosca spider", sets: "2×10–15" },
      { name: "Tríceps corda", sets: "2×10–15" }
    ]
  },

  // ======== SETEMBRO (Força-hipertrofia 4x/semana) ========
  // Semana 4: deload com 40–50% menos séries, mantendo os mesmos exercícios.
  "2026-09": {
    A: [
      { name: "Agachamento high-bar com pausa", sets: "4×4–6" },
      { name: "Belt squat", sets: "3×6–8" },
      { name: "Afundo búlgaro com pé elevado", sets: "3×8–10/cada" },
      { name: "Flexora sentada", sets: "2×8–12" },
      { name: "Reverse Nordic assistido", sets: "2×10–15" },
      { name: "Panturrilha em pé", sets: "3×12–15" },
      { name: "Ab wheel", sets: "2–3 séries" },
      { name: "Tibial anterior", sets: "2×15–20" }
    ],
    B: [
      { name: "Supino reto com pausa", sets: "4×4–6" },
      { name: "Seal row pesado", sets: "3×6–8" },
      { name: "Supino inclinado em máquina", sets: "3×8–10" },
      { name: "Puxada neutra", sets: "2×8–12" },
      { name: "Crucifixo no cabo", sets: "2×10–15" },
      { name: "Reverse pec deck", sets: "3×12–15" },
      { name: "Rosca Bayesian", sets: "2×10–12" },
      { name: "Tríceps cruzado no cabo", sets: "2×10–12" }
    ],
    C: [
      { name: "Terra com trap bar (ou terra sumô técnico)", sets: "4×4–6" },
      { name: "Pendulum squat", sets: "3×6–8" },
      { name: "Extensão de quadril a 45°", sets: "3×8–10" },
      { name: "Nordic curl assistido", sets: "2×8–12" },
      { name: "Flexora sentada unilateral", sets: "2×10–15/cada" },
      { name: "Adutora", sets: "3×12–15" },
      { name: "Panturrilha sentada", sets: "2×10–12" },
      { name: "Elevação de joelhos suspenso", sets: "2–3×10–15" }
    ],
    D: [
      { name: "Barra fixa com carga", sets: "4×4–6" },
      { name: "High row articulada", sets: "3×6–8" },
      { name: "Landmine press unilateral", sets: "3×8–10/cada" },
      { name: "Chest press convergente", sets: "2×8–12" },
      { name: "Elevação lateral no cabo", sets: "2×10–15" },
      { name: "Reverse pec deck", sets: "3×12–15" },
      { name: "Rosca spider", sets: "2×10–12" },
      { name: "Tríceps corda", sets: "2×10–12" }
    ]
  },

  // ======== OUTUBRO (Força 4x/semana — 1 movimento pesado por sessão) ========
  "2026-10": {
    A: [
      { name: "Agachamento high-bar", sets: "4×3–5" },
      { name: "Belt squat", sets: "3×5–8" },
      { name: "Flexora sentada", sets: "2×6–10" },
      { name: "Afundo búlgaro", sets: "2×8–12/cada" },
      { name: "Reverse Nordic assistido", sets: "2×10–15" },
      { name: "Panturrilha em pé", sets: "3×12–15" },
      { name: "Ab wheel", sets: "2–3 séries" },
      { name: "Tibial anterior", sets: "2×15–20" }
    ],
    B: [
      { name: "Supino reto com pausa", sets: "4×3–5" },
      { name: "Seal row", sets: "3×5–8" },
      { name: "Supino inclinado em máquina", sets: "2×6–10" },
      { name: "Puxada neutra", sets: "2×8–12" },
      { name: "Crucifixo no cabo", sets: "2×10–15" },
      { name: "Reverse pec deck", sets: "3×12–15" },
      { name: "Rosca Bayesian", sets: "2×10–12" },
      { name: "Tríceps cruzado no cabo", sets: "2×10–12" }
    ],
    C: [
      { name: "Terra com trap bar", sets: "4×3–5" },
      { name: "Pendulum squat", sets: "3×5–8" },
      { name: "Extensão de quadril a 45°", sets: "2×6–10" },
      { name: "Flexora sentada", sets: "2×8–12" },
      { name: "Nordic assistido", sets: "2×10–15" },
      { name: "Panturrilha sentada", sets: "3×12–15" },
      { name: "Adutora", sets: "2×10–12" },
      { name: "Crunch na polia", sets: "2–3×10–15" }
    ],
    D: [
      { name: "Barra fixa com carga", sets: "4×3–6" },
      { name: "High row articulada", sets: "3×5–8" },
      { name: "Landmine press", sets: "2×6–10" },
      { name: "Chest press convergente", sets: "2×8–12" },
      { name: "Elevação lateral no cabo", sets: "2×10–15" },
      { name: "Crucifixo inverso", sets: "3×12–15" },
      { name: "Rosca martelo na corda", sets: "2×10–12" },
      { name: "Tríceps corda", sets: "2×10–12" }
    ]
  },

  // ======== NOVEMBRO (Hipertrofia 4x/semana — novas variações e especialização) ========
  // Semana 4: deload com aproximadamente metade das séries, RIR 3–4.
  "2026-11": {
    A: [
      { name: "Agachamento cycler no Smith com calcanhar elevado", sets: "4×8–12" },
      { name: "Afundo búlgaro em déficit", sets: "3×8–12/cada" },
      { name: "Flexora sentada", sets: "3×10–15" },
      { name: "Reverse Nordic assistido", sets: "2×10–15" },
      { name: "Adutora", sets: "2×12–15" },
      { name: "Panturrilha em pé", sets: "4×12–20" },
      { name: "Elevação de joelhos suspenso", sets: "3×10–15" },
      { name: "Tibial anterior", sets: "2×15–20" }
    ],
    B: [
      { name: "Supino baixo inclinado no Smith", sets: "4×8–12" },
      { name: "Remada T com peito apoiado", sets: "3×8–12" },
      { name: "Puxada unilateral meio-ajoelhado no cabo", sets: "3×10–15/cada" },
      { name: "Crucifixo no cabo na altura média", sets: "2×10–15" },
      { name: "Elevação lateral no cabo com inclinação lateral", sets: "2×12–15" },
      { name: "Crucifixo inverso no cabo", sets: "4×12–20" },
      { name: "Rosca Bayesian", sets: "3×10–15" },
      { name: "Tríceps acima da cabeça no cabo", sets: "2×10–15" }
    ],
    C: [
      { name: "Glute drive / máquina de hip thrust", sets: "4×8–12" },
      { name: "Terra romeno no Smith em pequeno déficit", sets: "3×8–12" },
      { name: "Flexora sentada unilateral", sets: "3×10–15/cada" },
      { name: "Nordic assistido", sets: "2×10–15" },
      { name: "Extensão de quadril a 45°", sets: "2×12–15" },
      { name: "Panturrilha sentada", sets: "4×12–20" },
      { name: "Abdutora", sets: "3×10–15" },
      { name: "Crunch na polia", sets: "2–3×12–20" }
    ],
    D: [
      { name: "Barra fixa neutra com carga", sets: "4×8–12" },
      { name: "Meadows row (ou remada unilateral com halter)", sets: "3×8–12/cada" },
      { name: "Supino declinado articulado", sets: "3×10–15" },
      { name: "Puxada unilateral cruzada no cabo", sets: "2×10–15/cada" },
      { name: "Elevação lateral em máquina", sets: "2×12–15" },
      { name: "Remada alta para deltoide posterior", sets: "4×12–20" },
      { name: "Rosca Scott", sets: "3×10–15" },
      { name: "Tríceps unilateral no cabo com braço atrás do tronco", sets: "2×10–15/cada" }
    ]
  },

  // ======== DEZEMBRO (Consolidação 4x/semana — seleção dos movimentos mais produtivos) ========
  // Semanas 1–2: siga o volume. Semana 3: top set técnico RPE 8 nos exercícios 1. Semana 4: 1–2 séries leves por exercício, RIR 3–4.
  "2026-12": {
    A: [
      { name: "Agachamento high-bar ou pendulum squat", sets: "4×4–6" },
      { name: "Belt squat", sets: "3×6–8" },
      { name: "Flexora sentada", sets: "2–3×8–10" },
      { name: "Afundo búlgaro com pé elevado", sets: "2×8–12/cada" },
      { name: "Reverse Nordic", sets: "2×10–15" },
      { name: "Panturrilha em pé", sets: "3×12–20" },
      { name: "Ab wheel", sets: "2–3 séries" },
      { name: "Tibial anterior", sets: "2×15–20" }
    ],
    B: [
      { name: "Supino reto com pausa", sets: "4×4–6" },
      { name: "Seal row", sets: "3×6–8" },
      { name: "Landmine press unilateral", sets: "2–3×8–10/cada" },
      { name: "Puxada neutra", sets: "2×8–12" },
      { name: "Crucifixo no cabo", sets: "2×10–15" },
      { name: "Reverse pec deck", sets: "3×12–20" },
      { name: "Rosca Bayesian", sets: "2×10–15" },
      { name: "Tríceps cruzado no cabo", sets: "2×10–15" }
    ],
    C: [
      { name: "Terra com trap bar", sets: "4×4–6" },
      { name: "Extensão de quadril a 45°", sets: "3×6–8" },
      { name: "Flexora sentada", sets: "2–3×8–10" },
      { name: "Pendulum squat", sets: "2×8–12" },
      { name: "Nordic assistido", sets: "2×10–15" },
      { name: "Panturrilha sentada", sets: "3×12–20" },
      { name: "Adutora ou abdutora", sets: "2×10–15" },
      { name: "Elevação de joelhos suspenso", sets: "2–3×10–15" }
    ],
    D: [
      { name: "Barra fixa com carga", sets: "4×4–6" },
      { name: "High row articulada", sets: "3×6–8" },
      { name: "Chest press convergente", sets: "2–3×8–10" },
      { name: "Remada unilateral no cabo", sets: "2×8–12/cada" },
      { name: "Elevação lateral no cabo", sets: "2×10–15" },
      { name: "Crucifixo inverso", sets: "3×12–20" },
      { name: "Rosca spider", sets: "2×10–15" },
      { name: "Tríceps corda", sets: "2×10–15" }
    ]
  }
};

const DEFAULT_SEQUENCE = ["A", "B", "C"];
const STORAGE_KEY = "treino_pwa_state_v2";

function nowISODate() {
  const d = new Date();
  const tzOffset = d.getTimezoneOffset() * 60000;
  return new Date(d - tzOffset).toISOString().slice(0, 10); // YYYY-MM-DD local
}

function currentMonthKey() {
  return nowISODate().slice(0, 7); // YYYY-MM
}

function emptyState() {
  return { seqIndex: 0, activePlanMonth: null, log: [] };
}

function isValidLogItem(item) {
  return (
    item &&
    typeof item === "object" &&
    typeof item.date === "string" &&
    typeof item.workout === "string" &&
    typeof item.monthUsed === "string"
  );
}

function normalizeState(value) {
  if (!value || typeof value !== "object") return emptyState();

  const rawIndex = Number(value.seqIndex);
  const seqIndex = Number.isInteger(rawIndex) && rawIndex >= 0 ? rawIndex : 0;
  const log = Array.isArray(value.log) ? value.log.filter(isValidLogItem) : [];
  const activePlanMonth = typeof value.activePlanMonth === "string"
    ? value.activePlanMonth
    : null;

  return { seqIndex, activePlanMonth, log };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);

    // Migração automática do armazenamento da versão anterior.
    const legacyRaw = raw ? null : localStorage.getItem("treino_pwa_state_v1");
    const source = raw || legacyRaw;
    if (!source) return emptyState();

    const state = normalizeState(JSON.parse(source));
    if (legacyRaw) saveState(state);
    return state;
  } catch {
    return emptyState();
  }
}

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(normalizeState(state)));
    return true;
  } catch {
    alert("Não foi possível salvar o treino neste dispositivo.");
    return false;
  }
}

function getPlanForMonth(monthKey) {
  if (PLANS[monthKey]) return { monthKey, plan: PLANS[monthKey], fallback: false };

  // Fallback: usa o plano mais recente anterior à data atual.
  const keys = Object.keys(PLANS).sort();
  const selectedKey = keys.filter((key) => key <= monthKey).at(-1) || keys[0];

  if (selectedKey) {
    return { monthKey: selectedKey, plan: PLANS[selectedKey], fallback: true };
  }

  return { monthKey: null, plan: null, fallback: true };
}

function getWorkoutSequence(plan) {
  if (!plan || typeof plan !== "object") return DEFAULT_SEQUENCE;

  const sequence = Object.keys(plan).filter((key) => Array.isArray(plan[key]));
  return sequence.length ? sequence : DEFAULT_SEQUENCE;
}

function syncCycleToCurrentMonth(state, monthKey, sequence) {
  if (state.activePlanMonth === monthKey) return false;

  // Ao começar um novo mês, o ciclo inicia no treino A. Se já houver registros
  // daquele mês, recupera o próximo treino a partir do último registro.
  const lastThisMonth = [...state.log]
    .reverse()
    .find((item) => item.planMonth === monthKey && sequence.includes(item.workout));

  state.activePlanMonth = monthKey;
  state.seqIndex = lastThisMonth
    ? (sequence.indexOf(lastThisMonth.workout) + 1) % sequence.length
    : 0;

  return true;
}

function formatHistoryItem(item) {
  return `${item.date} — Treino ${item.workout} (${item.monthUsed})`;
}

function render() {
  const state = loadState();
  const monthKey = currentMonthKey();
  const { monthKey: monthUsed, plan, fallback } = getPlanForMonth(monthKey);
  const sequence = getWorkoutSequence(plan);

  if (syncCycleToCurrentMonth(state, monthKey, sequence)) {
    saveState(state);
  }

  const nextWorkout = sequence[state.seqIndex % sequence.length] || sequence[0];

  // UI básica
  const todayEl = document.getElementById("today");
  todayEl.textContent = `Hoje: ${nowISODate()}`;

  document.getElementById("nextWorkout").textContent = nextWorkout;
  document.getElementById("monthPill").textContent =
    monthUsed ? `Plano: ${monthUsed}` : "Plano: (não definido)";

  const fallbackNote = document.getElementById("fallbackNote");
  fallbackNote.textContent = fallback && monthUsed !== monthKey
    ? `Obs.: não encontrei plano para ${monthKey}. Usando ${monthUsed} como fallback.`
    : "";

  // Lista de exercícios
  const list = document.getElementById("exerciseList");
  list.innerHTML = "";
  if (!plan || !Array.isArray(plan[nextWorkout])) {
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
  if (last.length === 0) {
    const li = document.createElement("li");
    li.textContent = "Nenhum treino registrado ainda.";
    hist.appendChild(li);
  } else {
    for (const item of last) {
      const li = document.createElement("li");
      li.textContent = formatHistoryItem(item);
      hist.appendChild(li);
    }
  }

  // Status
  const status = document.getElementById("status");
  status.textContent = `Registros: ${state.log.length} • Próximo: ${nextWorkout}`;
}

function markDone() {
  const state = loadState();
  const monthKey = currentMonthKey();
  const { monthKey: monthUsed, plan } = getPlanForMonth(monthKey);
  const sequence = getWorkoutSequence(plan);

  syncCycleToCurrentMonth(state, monthKey, sequence);

  const workout = sequence[state.seqIndex % sequence.length] || sequence[0];
  if (!workout) {
    alert("Não há treino definido para o mês atual.");
    return;
  }

  state.log.push({
    date: nowISODate(),
    workout,
    monthUsed: monthUsed || monthKey,
    planMonth: monthKey
  });

  state.seqIndex = (state.seqIndex + 1) % sequence.length;
  state.activePlanMonth = monthKey;
  saveState(state);
  render();
}

function undoLast() {
  const state = loadState();
  if (state.log.length === 0) return;

  const removed = state.log.pop();
  const monthKey = currentMonthKey();
  const { plan } = getPlanForMonth(monthKey);
  const sequence = getWorkoutSequence(plan);

  // Para o uso habitual (desfazer o treino recém-marcado), volta exatamente ao treino removido.
  if (removed.planMonth === monthKey && sequence.includes(removed.workout)) {
    state.activePlanMonth = monthKey;
    state.seqIndex = sequence.indexOf(removed.workout);
  } else {
    // Se estiver desfazendo um registro antigo, o mês atual reinicia no treino A.
    state.activePlanMonth = null;
    state.seqIndex = 0;
  }

  saveState(state);
  render();
}

function exportData() {
  const state = loadState();
  const payload = {
    schemaVersion: 2,
    exportedAt: new Date().toISOString(),
    state
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `treino-backup-${nowISODate()}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();

  setTimeout(() => URL.revokeObjectURL(url), 0);
}

function importData(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(String(reader.result));
      if (!parsed.state || typeof parsed.state !== "object") {
        alert("Arquivo inválido.");
        return;
      }

      saveState(normalizeState(parsed.state));
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
  localStorage.removeItem("treino_pwa_state_v1");
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
