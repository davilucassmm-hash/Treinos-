/* =========================================================
   FITNESS - JAVASCRIPT
   =========================================================
   EDITE PRINCIPALMENTE A PARTE "USUÁRIOS E TREINOS".

   ALUNOS CADASTRADOS: Sarah, Davi e Arthur.
   Cada nome tem o SEU PRÓPRIO treino:
   exercícios, séries, repetições, cargas, foco muscular
   e a divisão da semana (segunda até sexta).

   Para adicionar um aluno, copie o bloco inteiro de um aluno.
   Os GIFs devem ficar dentro da pasta /gifs.
   ========================================================= */


/* =========================================================
   1. CADASTRO DOS USUÁRIOS E TREINOS
   ========================================================= */

const usuarios = {

  // ----------- ALUNO: DAVI -----------
  "Davi": {

    // Divisão da semana: qual treino é feito em cada dia
    // (de segunda até sexta).
    // Sexta-feira não tem treino programado (descanso).
    divisao: [
      { dia: "segunda", treino: "treino1" },   // Peito + Ombros + Trapézio
      { dia: "terca",   treino: "treino2" },   // Braço Completo
      { dia: "quarta",  treino: "treino3" },   // Costas
      { dia: "quinta",  treino: "treino4" },   // Perna
      { dia: "sexta",   treino: null }         // Descanso
    ],

    // Foco muscular de cada treino (aparece na aba de divisão).
    focos: {
      treino1: "Peito, Ombros e Trapézio",
      treino2: "Braço Completo",
      treino3: "Costas",
      treino4: "Perna"
    },

    // SEGUNDA — Peito + Ombros + Trapézio
    treino1: [
      {
        nome: "Supino inclinado com halteres",
        series: 4,
        repeticoes: 10,
        gif: "gifs/supino-inclinado.gif"
      },
      {
        nome: "Crucifixo deitado inclinado na polia",
        series: 3,
        repeticoes: 12,
        gif: "gifs/crucifixo-inclinado-polia.gif"
      },
      {
        nome: "Crossover na polia alta",
        series: 3,
        repeticoes: 12,
        gif: "gifs/crossover-polia-alta.gif"
      },
      {
        nome: "Desenvolvimento",
        series: 4,
        repeticoes: 10,
        gif: "gifs/desenvolvimento.gif"
      },
      {
        nome: "Elevação lateral",
        series: 3,
        repeticoes: 15,
        gif: "gifs/elevacao-lateral.gif"
      },
      {
        nome: "Elevação frontal",
        series: 3,
        repeticoes: 12,
        gif: "gifs/elevacao-frontal.gif"
      },
      {
        nome: "Encolhimento de ombros",
        series: 4,
        repeticoes: 12,
        gif: "gifs/encolhimento.gif"
      }
    ],

    // TERÇA — Braço Completo
    treino2: [
      {
        nome: "Rosca Scott",
        series: 3,
        repeticoes: 10,
        gif: "gifs/rosca-scott.gif"
      },
      {
        nome: "Rosca direta",
        series: 3,
        repeticoes: 10,
        gif: "gifs/rosca-direta.gif"
      },
      {
        nome: "Rosca martelo",
        series: 3,
        repeticoes: 12,
        gif: "gifs/rosca-martelo.gif"
      },
      {
        nome: "Rosca na polia com alongamento do bíceps",
        series: 3,
        repeticoes: 12,
        gif: "gifs/rosca-polia-alongamento.gif"
      },
      {
        nome: "Tríceps francês",
        series: 3,
        repeticoes: 12,
        gif: "gifs/triceps-frances.gif"
      },
      {
        nome: "Tríceps na polia",
        series: 3,
        repeticoes: 12,
        gif: "gifs/triceps-polia.gif"
      },
      {
        nome: "Tríceps com a polia baixa",
        series: 3,
        repeticoes: 12,
        gif: "gifs/triceps-polia-baixa.gif"
      }
    ],

    // QUARTA — Costas
    treino3: [
      {
        nome: "Puxada frontal",
        series: 4,
        repeticoes: 10,
        gif: "gifs/puxada.gif"
      },
      {
        nome: "Pulldown",
        series: 3,
        repeticoes: 12,
        gif: "gifs/pulldown.gif"
      },
      {
        nome: "Remada serrote",
        series: 3,
        repeticoes: 10,
        gif: "gifs/remada-serrote.gif"
      },
      {
        nome: "Puxada com triângulo",
        series: 3,
        repeticoes: 12,
        gif: "gifs/puxada-triangulo.gif"
      }
    ],

    // QUINTA — Perna
    treino4: [
      {
        nome: "Agachamento",
        series: 4,
        repeticoes: 10,
        gif: "gifs/agachamento.gif"
      },
      {
        nome: "Leg press",
        series: 4,
        repeticoes: 12,
        gif: "gifs/leg-press.gif"
      },
      {
        nome: "Cadeira extensora",
        series: 3,
        repeticoes: 12,
        gif: "gifs/cadeira-extensora.gif"
      },
      {
        nome: "Mesa flexora",
        series: 3,
        repeticoes: 12,
        gif: "gifs/mesa-flexora.gif"
      },
      {
        nome: "Stiff",
        series: 3,
        repeticoes: 10,
        gif: "gifs/stiff.gif"
      },
      {
        nome: "Panturrilha em pé",
        series: 4,
        repeticoes: 15,
        gif: "gifs/panturrilha-em-pe.gif"
      },
      {
        nome: "Panturrilha sentado",
        series: 4,
        repeticoes: 15,
        gif: "gifs/panturrilha-sentado.gif"
      }
    ]
  },


  // ----------- ALUNA: SARAH -----------
  "Sarah": {

    // Divisão da semana: qual treino é feito em cada dia
    // (de segunda até sexta).
    // Sexta-feira não tem treino programado (descanso).
    divisao: [
      { dia: "segunda", treino: "treino1" },   // Quadríceps + Posterior
      { dia: "terca",   treino: "treino2" },   // Glúteos + Ombros
      { dia: "quarta",  treino: "treino3" },   // Costas + Tríceps
      { dia: "quinta",  treino: "treino4" },   // Glúteos
      { dia: "sexta",   treino: null }         // Descanso
    ],

    // Foco muscular de cada treino.
    focos: {
      treino1: "Quadríceps e Posterior",
      treino2: "Glúteos e Ombros",
      treino3: "Costas e Tríceps",
      treino4: "Glúteos"
    },

    // SEGUNDA — Quadríceps + Posterior
    treino1: [
      {
        nome: "Agachamento livre",
        series: 4,
        repeticoes: 10,
        gif: "gifs/agachamento.gif",
        video: "https://www.youtube.com/watch?v=nrM8zB5-gtE"
      },
      {
        nome: "Leg press",
        series: 4,
        repeticoes: 12,
        gif: "gifs/leg-press.gif",
        video: "https://www.youtube.com/results?search_query=leg+press+execução+correta+curto"
      },
      {
        nome: "Cadeira extensora",
        series: 3,
        repeticoes: 12,
        gif: "gifs/cadeira-extensora.gif",
        video: "https://www.youtube.com/watch?v=PTIVgR2_d00"
      },
      {
        nome: "Stiff",
        series: 3,
        repeticoes: 10,
        gif: "gifs/stiff.gif",
        video: "https://www.youtube.com/results?search_query=stiff+execução+correta+curto"
      },
      {
        nome: "Mesa flexora",
        series: 3,
        repeticoes: 12,
        gif: "gifs/mesa-flexora.gif",
        video: "https://www.youtube.com/results?search_query=mesa+flexora+execução+correta+curto"
      }
    ],

    // TERÇA — Glúteos + Ombros
    treino2: [
      {
        nome: "Elevação pélvica",
        series: 4,
        repeticoes: 12,
        gif: "gifs/elevacao-pelvica.gif",
        video: "https://www.youtube.com/results?search_query=elevação+pélvica+execução+correta+curto"
      },
      {
        nome: "Agachamento sumô",
        series: 3,
        repeticoes: 12,
        gif: "gifs/agachamento-sumo.gif",
        video: "https://www.youtube.com/watch?v=lckfG27hcvc"
      },
      {
        nome: "Cadeira abdutora",
        series: 3,
        repeticoes: 15,
        gif: "gifs/cadeira-abdutora.gif",
        video: "https://www.youtube.com/results?search_query=cadeira+abdutora+execução+correta+curto"
      },
      {
        nome: "Desenvolvimento com halteres",
        series: 3,
        repeticoes: 12,
        gif: "gifs/desenvolvimento-halteres.gif",
        video: "https://www.youtube.com/results?search_query=desenvolvimento+com+halteres+execução+correta+curto"
      },
      {
        nome: "Elevação lateral",
        series: 3,
        repeticoes: 15,
        gif: "gifs/elevacao-lateral.gif",
        video: "https://www.youtube.com/results?search_query=elevação+lateral+execução+correta+curto"
      }
    ],

    // QUARTA — Costas + Tríceps
    treino3: [
      {
        nome: "Puxada frontal",
        series: 3,
        repeticoes: 12,
        gif: "gifs/puxada.gif",
        video: "https://www.youtube.com/results?search_query=puxada+frontal+execução+correta+curto"
      },
      {
        nome: "Remada baixa",
        series: 3,
        repeticoes: 12,
        gif: "gifs/remada.gif",
        video: "https://www.youtube.com/results?search_query=remada+baixa+execução+correta+curto"
      },
      {
        nome: "Tríceps na polia",
        series: 3,
        repeticoes: 12,
        gif: "gifs/triceps-polia.gif",
        video: "https://www.youtube.com/results?search_query=tríceps+polia+execução+correta+curto"
      },
      {
        nome: "Tríceps francês",
        series: 3,
        repeticoes: 12,
        gif: "gifs/triceps-frances.gif",
        video: "https://www.youtube.com/results?search_query=tríceps+francês+execução+correta+curto"
      }
    ],

    // QUINTA — Glúteos
    treino4: [
      {
        nome: "Elevação pélvica",
        series: 4,
        repeticoes: 12,
        gif: "gifs/elevacao-pelvica.gif",
        video: "https://www.youtube.com/results?search_query=elevação+pélvica+execução+correta+curto"
      },
      {
        nome: "Afundo",
        series: 3,
        repeticoes: 12,
        gif: "gifs/afundo.gif",
        video: "https://www.youtube.com/results?search_query=afundo+execução+correta+curto"
      },
      {
        nome: "Coice no cabo",
        series: 3,
        repeticoes: 15,
        gif: "gifs/coice-cabo.gif",
        video: "https://www.youtube.com/results?search_query=coice+no+cabo+execução+correta+curto"
      },
      {
        nome: "Cadeira abdutora",
        series: 3,
        repeticoes: 15,
        gif: "gifs/cadeira-abdutora.gif",
        video: "https://www.youtube.com/results?search_query=cadeira+abdutora+execução+correta+curto"
      },
      {
        nome: "Agachamento",
        series: 3,
        repeticoes: 12,
        gif: "gifs/agachamento.gif",
        video: "https://www.youtube.com/watch?v=nrM8zB5-gtE"
      }
    ]
  },


  // ----------- ALUNO: ARTHUR -----------
  "Arthur": {

    // Divisão da semana: qual treino é feito em cada dia
    // (de segunda até sexta).
    // Sexta-feira não tem treino programado (descanso).
    divisao: [
      { dia: "segunda", treino: "treino1" },   // Peito + Ombros + Trapézio
      { dia: "terca",   treino: "treino2" },   // Braço Completo
      { dia: "quarta",  treino: "treino3" },   // Costas
      { dia: "quinta",  treino: "treino4" },   // Perna
      { dia: "sexta",   treino: null }         // Descanso
    ],

    // Foco muscular de cada treino.
    focos: {
      treino1: "Peito, Ombros e Trapézio",
      treino2: "Braço Completo",
      treino3: "Costas",
      treino4: "Perna"
    },

    // SEGUNDA — Peito + Ombros + Trapézio
    treino1: [
      {
        nome: "Supino inclinado com halteres",
        series: 4,
        repeticoes: 10,
        gif: "gifs/supino-inclinado.gif"
      },
      {
        nome: "Crucifixo deitado inclinado na polia",
        series: 3,
        repeticoes: 12,
        gif: "gifs/crucifixo-inclinado-polia.gif"
      },
      {
        nome: "Crossover na polia alta",
        series: 3,
        repeticoes: 12,
        gif: "gifs/crossover-polia-alta.gif"
      },
      {
        nome: "Desenvolvimento",
        series: 4,
        repeticoes: 10,
        gif: "gifs/desenvolvimento.gif"
      },
      {
        nome: "Elevação lateral",
        series: 3,
        repeticoes: 15,
        gif: "gifs/elevacao-lateral.gif"
      },
      {
        nome: "Elevação frontal",
        series: 3,
        repeticoes: 12,
        gif: "gifs/elevacao-frontal.gif"
      },
      {
        nome: "Encolhimento de ombros",
        series: 4,
        repeticoes: 12,
        gif: "gifs/encolhimento.gif"
      }
    ],

    // TERÇA — Braço Completo
    treino2: [
      {
        nome: "Rosca Scott",
        series: 3,
        repeticoes: 10,
        gif: "gifs/rosca-scott.gif"
      },
      {
        nome: "Rosca direta",
        series: 3,
        repeticoes: 10,
        gif: "gifs/rosca-direta.gif"
      },
      {
        nome: "Rosca martelo",
        series: 3,
        repeticoes: 12,
        gif: "gifs/rosca-martelo.gif"
      },
      {
        nome: "Rosca na polia com alongamento do bíceps",
        series: 3,
        repeticoes: 12,
        gif: "gifs/rosca-polia-alongamento.gif"
      },
      {
        nome: "Tríceps francês",
        series: 3,
        repeticoes: 12,
        gif: "gifs/triceps-frances.gif"
      },
      {
        nome: "Tríceps na polia",
        series: 3,
        repeticoes: 12,
        gif: "gifs/triceps-polia.gif"
      },
      {
        nome: "Tríceps com a polia baixa",
        series: 3,
        repeticoes: 12,
        gif: "gifs/triceps-polia-baixa.gif"
      }
    ],

    // QUARTA — Costas
    treino3: [
      {
        nome: "Puxada frontal",
        series: 4,
        repeticoes: 10,
        gif: "gifs/puxada.gif"
      },
      {
        nome: "Pulldown",
        series: 3,
        repeticoes: 12,
        gif: "gifs/pulldown.gif"
      },
      {
        nome: "Remada serrote",
        series: 3,
        repeticoes: 10,
        gif: "gifs/remada-serrote.gif"
      },
      {
        nome: "Puxada com triângulo",
        series: 3,
        repeticoes: 12,
        gif: "gifs/puxada-triangulo.gif"
      }
    ],

    // QUINTA — Perna
    treino4: [
      {
        nome: "Agachamento",
        series: 4,
        repeticoes: 10,
        gif: "gifs/agachamento.gif"
      },
      {
        nome: "Leg press",
        series: 4,
        repeticoes: 12,
        gif: "gifs/leg-press.gif"
      },
      {
        nome: "Cadeira extensora",
        series: 3,
        repeticoes: 12,
        gif: "gifs/cadeira-extensora.gif"
      },
      {
        nome: "Mesa flexora",
        series: 3,
        repeticoes: 12,
        gif: "gifs/mesa-flexora.gif"
      },
      {
        nome: "Stiff",
        series: 3,
        repeticoes: 10,
        gif: "gifs/stiff.gif"
      },
      {
        nome: "Panturrilha em pé",
        series: 4,
        repeticoes: 15,
        gif: "gifs/panturrilha-em-pe.gif"
      },
      {
        nome: "Panturrilha sentado",
        series: 4,
        repeticoes: 15,
        gif: "gifs/panturrilha-sentado.gif"
      }
    ]
  }

};


/* =========================================================
   2. CONFIGURAÇÕES
   ========================================================= */

const nomesTreinos = {
  treino1: "Treino 1",
  treino2: "Treino 2",
  treino3: "Treino 3",
  treino4: "Treino 4",
  treino5: "Treino 5"
};

/* Foco muscular padrão dos treinos.
   Usado quando o usuário não tem a configuração "focos". */
const focosTreinos = {
  treino1: "Peito e Tríceps",
  treino2: "Pernas",
  treino3: "Costas e Bíceps"
};

/* Dias que aparecem na aba "Divisão da semana". */
const diasSemana = {
  segunda: "Segunda-feira",
  terca: "Terça-feira",
  quarta: "Quarta-feira",
  quinta: "Quinta-feira",
  sexta: "Sexta-feira"
};

/* Ordem dos dias mostrados na tela (segunda até sexta). */
const diasSemanaOrdem = ["segunda", "terca", "quarta", "quinta", "sexta"];

/* Divisão usada quando o usuário não tem a configuração "divisao". */
const divisaoPadrao = [
  { dia: "segunda", treino: "treino1" },
  { dia: "terca",   treino: "treino2" },
  { dia: "quarta",  treino: "treino3" },
  { dia: "quinta",  treino: "treino1" },
  { dia: "sexta",   treino: "treino2" }
];

const motivacoes = [
  "Continue firme! 💪",
  "Mais uma etapa concluída! 🔥",
  "Você está evoluindo! 🚀",
  "Não pare agora! 💪",
  "Foco no objetivo! 🎯",
  "Treino feito é progresso! 🏆"
];

let usuarioAtual = null;
let treinoAtual = "treino1";
let visaoAtual = "exercicios";


/* =========================================================
   3. ELEMENTOS DA PÁGINA
   ========================================================= */

const loginScreen = document.getElementById("loginScreen");
const workoutScreen = document.getElementById("workoutScreen");

const loginForm = document.getElementById("loginForm");
const nameInput = document.getElementById("nameInput");
const loginError = document.getElementById("loginError");

const userName = document.getElementById("userName");
const currentWorkoutTitle = document.getElementById("currentWorkoutTitle");
const exerciseCountTitle = document.getElementById("exerciseCountTitle");
const workoutFocus = document.getElementById("workoutFocus");

const exercisesView = document.getElementById("exercisesView");
const divisionView = document.getElementById("divisionView");

const workoutTabs = document.getElementById("workoutTabs");

const exerciseList = document.getElementById("exerciseList");
const emptyWorkout = document.getElementById("emptyWorkout");

const divisionGrid = document.getElementById("divisionGrid");
const divisionSummary = document.getElementById("divisionSummary");

const progressText = document.getElementById("progressText");
const progressPercent = document.getElementById("progressPercent");
const progressBarFill = document.getElementById("progressBarFill");

const motivationText = document.getElementById("motivationText");

const logoutBtn = document.getElementById("logoutBtn");
const resetBtn = document.getElementById("resetBtn");

const confirmModal = document.getElementById("confirmModal");
const cancelResetBtn = document.getElementById("cancelResetBtn");
const confirmResetBtn = document.getElementById("confirmResetBtn");


/* =========================================================
   4. FUNÇÕES AUXILIARES
   ========================================================= */

/**
 * Normaliza o nome para permitir:
 * João = joão = JOÃO
 */
function normalizarNome(nome) {
  return nome
    .trim()
    .replace(/\s+/g, " ")
    .toLocaleLowerCase("pt-BR");
}


/**
 * Procura o usuário ignorando maiúsculas/minúsculas.
 */
function encontrarUsuario(nomeDigitado) {
  const nomeNormalizado = normalizarNome(nomeDigitado);

  const nomeEncontrado = Object.keys(usuarios).find(
    nome => normalizarNome(nome) === nomeNormalizado
  );

  return nomeEncontrado || null;
}


/**
 * Gera uma chave única para salvar o progresso.
 */
function chaveProgresso(usuario, treino) {
  return `fitness_progresso_${normalizarNome(usuario)}_${treino}`;
}


/**
 * Busca os exercícios de um treino do usuário logado.
 */
function obterExerciciosDoTreino(treino) {
  if (!usuarioAtual || !usuarios[usuarioAtual]) {
    return [];
  }

  return usuarios[usuarioAtual][treino] || [];
}


/**
 * Busca os exercícios do treino atual.
 */
function obterExercicios() {
  return obterExerciciosDoTreino(treinoAtual);
}


/**
 * Extrai o número de um treino ("treino2" -> 2).
 */
function numeroDoTreino(treino) {
  return Number(String(treino).replace(/[^0-9]/g, "")) || 0;
}


/**
 * Nome de exibição de um treino ("treino1" -> "Treino 1").
 * Sem treino (null) significa dia de descanso.
 */
function nomeDoTreino(treino) {
  if (!treino) return "Descanso";

  return nomesTreinos[treino] || `Treino ${numeroDoTreino(treino)}`;
}


/**
 * Lista os treinos cadastrados para o usuário logado,
 * na ordem (treino1, treino2, treino3, treino4...).
 * Cada aluno pode ter 3, 4 ou mais treinos.
 */
function obterTreinosDoUsuario() {
  const dados = usuarioAtual ? usuarios[usuarioAtual] : null;

  if (!dados) return [];

  return Object.keys(dados)
    .filter(
      chave => /^treino\d+$/.test(chave) && Array.isArray(dados[chave])
    )
    .sort((a, b) => numeroDoTreino(a) - numeroDoTreino(b));
}


/**
 * Lê o progresso salvo de um treino específico.
 */
function lerProgresso(usuario, treino) {
  if (!usuario) return [];

  try {
    const salvo = localStorage.getItem(
      chaveProgresso(usuario, treino)
    );

    return salvo ? JSON.parse(salvo) : [];
  } catch (erro) {
    console.error("Erro ao ler progresso:", erro);
    return [];
  }
}


/**
 * Lê o progresso do treino aberto no momento.
 */
function obterProgresso() {
  return lerProgresso(usuarioAtual, treinoAtual);
}


/**
 * Retorna a divisão da semana do usuário logado,
 * sempre com os cinco dias (segunda até sexta) na ordem.
 */
function obterDivisao() {
  const dados = usuarioAtual ? usuarios[usuarioAtual] : null;

  const divisao =
    dados && Array.isArray(dados.divisao) && dados.divisao.length
      ? dados.divisao
      : divisaoPadrao;

  return diasSemanaOrdem.map(dia => {

    const configurado = divisao.find(item => item.dia === dia);

    return {
      dia: dia,
      treino: configurado ? configurado.treino : null
    };

  });
}


/**
 * Retorna o foco muscular de um treino.
 */
function obterFoco(treino) {
  const dados = usuarioAtual ? usuarios[usuarioAtual] : null;

  if (dados && dados.focos && dados.focos[treino]) {
    return dados.focos[treino];
  }

  return focosTreinos[treino] || "";
}


/**
 * Retorna o dia de hoje (segunda até sexta).
 * Sábado e domingo retornam null.
 */
function diaDeHoje() {
  const dia = new Date().getDay(); // 0 = domingo, 1 = segunda ...

  if (dia < 1 || dia > 5) return null;

  return diasSemanaOrdem[dia - 1];
}


/**
 * Salva o progresso.
 * O localStorage pode falhar (Safari/iOS em modo privado, memória
 * cheia, cookies bloqueados). Nesses casos o site continua
 * funcionando normalmente, apenas sem salvar.
 */
function salvarProgresso(indicesConcluidos) {
  if (!usuarioAtual) return;

  try {
    localStorage.setItem(
      chaveProgresso(usuarioAtual, treinoAtual),
      JSON.stringify(indicesConcluidos)
    );
  } catch (erro) {
    console.warn("Não foi possível salvar o progresso:", erro);
  }
}


/**
 * Apaga o progresso salvo de um treino.
 */
function apagarProgresso(usuario, treino) {
  if (!usuario) return;

  try {
    localStorage.removeItem(
      chaveProgresso(usuario, treino)
    );
  } catch (erro) {
    console.warn("Não foi possível apagar o progresso:", erro);
  }
}


/**
 * Escolhe uma mensagem motivacional.
 */
function escolherMotivacao() {
  const indice = Math.floor(Math.random() * motivacoes.length);
  return motivacoes[indice];
}


/* =========================================================
   5. LOGIN
   ========================================================= */

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const nomeDigitado = nameInput.value;
  const nomeEncontrado = encontrarUsuario(nomeDigitado);

  if (!nomeDigitado.trim()) {
    loginError.textContent = "Digite seu nome para continuar.";
    return;
  }

  if (!nomeEncontrado) {
    loginError.textContent =
      "Usuário não encontrado. Verifique o nome digitado.";
    return;
  }

  loginError.textContent = "";

  usuarioAtual = nomeEncontrado;
  treinoAtual = "treino1";

  abrirAreaDeTreino();
});


/* =========================================================
   6. ABRIR ÁREA DE TREINO
   ========================================================= */

function abrirAreaDeTreino() {
  loginScreen.classList.add("hidden");
  workoutScreen.classList.remove("hidden");

  userName.textContent = usuarioAtual;
  motivationText.textContent = escolherMotivacao();

  montarAbasTreino();

  destacarAbaTreino(treinoAtual);
  mostrarVisao("exercicios");

  renderizarTreino();
}


/* =========================================================
   7. ABAS DE TREINO (TREINO 1, 2, 3, 4...)
   ========================================================= */

/**
 * Marca qual aba de treino está ativa.
 */
function destacarAbaTreino(treino) {
  document.querySelectorAll(".tab-btn").forEach(botao => {
    botao.classList.toggle(
      "active",
      botao.dataset.workout === treino
    );
  });
}


/**
 * Abre um treino (usado pelas abas e pelos dias da divisão).
 */
function trocarTreino(treino) {
  treinoAtual = treino;

  destacarAbaTreino(treino);
  mostrarVisao("exercicios");
  renderizarTreino();
}


/**
 * Monta as abas de treino (Treino 1, 2, 3...) de acordo com os
 * treinos cadastrados para o usuário logado.
 * Assim um aluno com 4 treinos vê 4 abas, e não sobra aba vazia.
 */
function montarAbasTreino() {

  const treinos = obterTreinosDoUsuario();

  workoutTabs.innerHTML = "";

  treinos.forEach(treino => {

    const botao = document.createElement("button");

    botao.className = "tab-btn";
    botao.type = "button";
    botao.dataset.workout = treino;
    botao.textContent = nomeDoTreino(treino);

    botao.addEventListener("click", function() {

      treinoAtual = this.dataset.workout;

      destacarAbaTreino(treinoAtual);

      renderizarTreino();
    });

    workoutTabs.appendChild(botao);
  });

  // Garante que o treino aberto existe para este usuário.
  if (!treinos.includes(treinoAtual)) {
    treinoAtual = treinos[0] || "treino1";
  }
}


/* =========================================================
   8. ABAS EXERCÍCIOS / DIVISÃO DA SEMANA
   ========================================================= */

function mostrarVisao(visao) {
  visaoAtual = visao;

  document.querySelectorAll(".view-tab-btn").forEach(botao => {
    botao.classList.toggle(
      "active",
      botao.dataset.view === visao
    );
  });

  exercisesView.classList.toggle("hidden", visao !== "exercicios");
  divisionView.classList.toggle("hidden", visao !== "divisao");
}


document.querySelectorAll(".view-tab-btn").forEach(botao => {

  botao.addEventListener("click", function() {

    mostrarVisao(this.dataset.view);

    if (visaoAtual === "divisao") {
      renderizarDivisao();
    }
  });

});


/* =========================================================
   9. DIVISÃO DA SEMANA (SEGUNDA ATÉ SEXTA)
   ========================================================= */

function renderizarDivisao() {

  const divisao = obterDivisao();
  const hoje = diaDeHoje();

  divisionGrid.innerHTML = "";

  const diasDoTreinoAtual = divisao.filter(
    item => item.treino === treinoAtual
  );

  divisionSummary.textContent = diasDoTreinoAtual.length
    ? `${nomeDoTreino(treinoAtual)} · ${diasDoTreinoAtual.length}x na semana: ${
        diasDoTreinoAtual
          .map(item => diasSemana[item.dia])
          .join(" e ")
      }`
    : `${nomeDoTreino(treinoAtual)} não faz parte da divisão da semana`;

  divisao.forEach(item => {

    const exercicios = item.treino
      ? obterExerciciosDoTreino(item.treino)
      : [];

    const concluidos = item.treino
      ? lerProgresso(usuarioAtual, item.treino)
          .filter(indice => indice < exercicios.length)
          .length
      : 0;

    const porcentagem =
      exercicios.length === 0
        ? 0
        : Math.round((concluidos / exercicios.length) * 100);

    const etiqueta =
      item.dia === hoje
        ? "HOJE"
        : item.treino === treinoAtual
          ? "SELECIONADO"
          : "";

    const listaExercicios = exercicios.length
      ? `<ul class="day-exercises">
           ${exercicios
             .map(
               exercicio => `
                 <li>
                   <span class="day-exercise-name">
                     ${escaparHTML(exercicio.nome)}
                   </span>

                   ${linkDoExercicio(exercicio, true)}
                 </li>
               `
             )
             .join("")}
         </ul>`
      : `<p class="day-rest">Dia de descanso 🛌</p>`;

    const card = document.createElement("article");

    card.className = "day-card";
    card.classList.toggle("is-current", item.treino === treinoAtual);
    card.classList.toggle("is-today", item.dia === hoje);

    card.innerHTML = `
      <div class="day-head">
        <span class="day-label">${diasSemana[item.dia].toUpperCase()}</span>

        ${
          etiqueta
            ? `<span class="day-badge ${
                item.dia === hoje ? "today" : ""
              }">${etiqueta}</span>`
            : ""
        }
      </div>

      <div>
        <h4 class="day-workout">
          ${nomeDoTreino(item.treino)}
        </h4>

        <span class="day-focus">
          ${item.treino ? obterFoco(item.treino) : "Sem treino programado"}
        </span>
      </div>

      ${listaExercicios}

      <div class="day-footer">
        <div class="day-progress">
          <div class="day-progress-bar">
            <span
              class="day-progress-fill"
              style="width: ${porcentagem}%"
            ></span>
          </div>

          <span class="day-progress-text">
            ${concluidos}/${exercicios.length}
          </span>
        </div>

        <button
          class="day-open-btn"
          type="button"
          ${item.treino ? "" : "disabled"}
        >
          ${
            item.treino === treinoAtual
              ? "TREINO ABERTO"
              : "ABRIR TREINO"
          }
        </button>
      </div>
    `;

    if (item.treino) {

      card
        .querySelector(".day-open-btn")
        .addEventListener("click", function() {
          trocarTreino(item.treino);
        });

    }

    divisionGrid.appendChild(card);
  });
}


/* =========================================================
   LINK DO EXERCÍCIO (YOUTUBE)
   =========================================================
   Se o exercício tiver o campo "video", aparece o link
   "Ver o exercício" logo abaixo dele.
   ========================================================= */

function linkDoExercicio(exercicio, compacto) {

  if (!exercicio || !exercicio.video) {
    return "";
  }

  return `
    <a
      class="exercise-video-link${compacto ? " is-compact" : ""}"
      href="${escaparHTML(exercicio.video)}"
      target="_blank"
      rel="noopener noreferrer"
    >
      ▶ Ver o exercício
    </a>
  `;
}


/* =========================================================
   10. RENDERIZAR TREINO
   ========================================================= */

function renderizarTreino() {

  const exercicios = obterExercicios();
  const progresso = obterProgresso();

  currentWorkoutTitle.textContent = nomeDoTreino(treinoAtual);
  exerciseCountTitle.textContent = nomeDoTreino(treinoAtual);
  workoutFocus.textContent = obterFoco(treinoAtual);

  exerciseList.innerHTML = "";

  if (exercicios.length === 0) {
    emptyWorkout.classList.remove("hidden");
  } else {
    emptyWorkout.classList.add("hidden");

    exercicios.forEach((exercicio, index) => {

      const concluido = progresso.includes(index);

      const card = document.createElement("article");
      card.className = `exercise-card ${concluido ? "completed" : ""}`;

      const info = document.createElement("div");
      info.className = "exercise-info";

      info.innerHTML = `
        <span class="exercise-number">
          EXERCÍCIO ${String(index + 1).padStart(2, "0")}
        </span>

        <h3 class="exercise-name">${escaparHTML(exercicio.nome)}</h3>

        <div class="exercise-details">
          <span class="detail-pill">
            <strong>${exercicio.series}</strong> séries
          </span>

          <span class="detail-pill">
            <strong>${exercicio.repeticoes}</strong> repetições
          </span>

          ${
            exercicio.carga
              ? `<span class="detail-pill">
                   Carga: <strong>${escaparHTML(exercicio.carga)}</strong>
                 </span>`
              : ""
          }
        </div>

        ${linkDoExercicio(exercicio)}

        <button
          class="complete-btn ${concluido ? "completed" : ""}"
          type="button"
          data-index="${index}"
        >
          ${concluido ? "✓ CONCLUÍDO" : "☐ MARCAR COMO CONCLUÍDO"}
        </button>
      `;

      const gifContainer = document.createElement("div");
      gifContainer.className = "gif-container";

      if (exercicio.gif) {

        const imagem = document.createElement("img");

        imagem.className = "exercise-gif";
        imagem.src = exercicio.gif;
        imagem.alt = `Demonstração de ${exercicio.nome}`;
        imagem.loading = "lazy";

        imagem.addEventListener("error", function() {
          gifContainer.innerHTML = `
            <div class="gif-placeholder">
              🎬<br><br>
              GIF não disponível
            </div>
          `;
        });

        gifContainer.appendChild(imagem);

      } else {

        gifContainer.innerHTML = `
          <div class="gif-placeholder">
            🎬<br><br>
            GIF não disponível
          </div>
        `;

      }

      card.appendChild(info);
      card.appendChild(gifContainer);

      exerciseList.appendChild(card);
    });
  }

  document.querySelectorAll(".complete-btn").forEach(botao => {

    botao.addEventListener("click", function() {

      const indice = Number(this.dataset.index);

      alternarExercicio(indice);

    });

  });

  atualizarProgresso();
  renderizarDivisao();
}


/* =========================================================
   11. MARCAR/DESMARCAR EXERCÍCIO
   ========================================================= */

function alternarExercicio(indice) {

  let progresso = obterProgresso();

  if (progresso.includes(indice)) {

    progresso = progresso.filter(item => item !== indice);

  } else {

    progresso.push(indice);

  }

  progresso.sort((a, b) => a - b);

  salvarProgresso(progresso);

  renderizarTreino();
}


/* =========================================================
   12. ATUALIZAR PROGRESSO
   ========================================================= */

function atualizarProgresso() {

  const total = obterExercicios().length;
  const concluidos = obterProgresso().length;

  const porcentagem =
    total === 0
      ? 0
      : Math.round((concluidos / total) * 100);

  progressText.textContent =
    `${concluidos}/${total} exercícios`;

  progressPercent.textContent =
    `${porcentagem}%`;

  progressBarFill.style.width =
    `${porcentagem}%`;
}


/* =========================================================
   13. RESETAR TREINO
   ========================================================= */

resetBtn.addEventListener("click", function() {
  confirmModal.classList.remove("hidden");
});


cancelResetBtn.addEventListener("click", function() {
  confirmModal.classList.add("hidden");
});


confirmResetBtn.addEventListener("click", function() {

  apagarProgresso(usuarioAtual, treinoAtual);

  confirmModal.classList.add("hidden");

  renderizarTreino();
});


/* Fechar modal clicando fora */
confirmModal.addEventListener("click", function(event) {

  if (event.target === confirmModal) {
    confirmModal.classList.add("hidden");
  }

});


/* =========================================================
   14. SAIR
   ========================================================= */

logoutBtn.addEventListener("click", function() {

  usuarioAtual = null;
  treinoAtual = "treino1";

  workoutScreen.classList.add("hidden");
  loginScreen.classList.remove("hidden");

  nameInput.value = "";
  loginError.textContent = "";

  workoutTabs.innerHTML = "";

  destacarAbaTreino("treino1");
  mostrarVisao("exercicios");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


/* =========================================================
   15. PROTEÇÃO CONTRA HTML INJETADO
   ========================================================= */

function escaparHTML(texto) {

  return String(texto)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
