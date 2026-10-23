const TEST_ID = "e2026a"; 
const questions = [
  {
    question: "En Excel, quina d'aquestes expressions és una referència a una cel·la?",
    answers: [
      { text: "4.", correct: false },
      { text: "A.", correct: false },
      { text: "4A.", correct: false },
      { text: "A4.", correct: true }
    ]
  },
  {
    question: "En Excel, què passa quan es realitza un càlcul i es copia a altres cel·les?",
    answers: [
      { text: "La fórmula s'adapta a cada nova posició, i en varia la lletra de la columna i/o el número de la fila.", correct: true },
      { text: "La fórmula s'adapta a cada nova posició, i en varia el número de la columna i/o la lletra de la fila.", correct: false },
      { text: "La fórmula es copia idèntica a totes les cel·les.", correct: false },
      { text: "El full de càlcul no permet copiar fórmules.", correct: false }
    ]
  },
  {
    question: "Quina tecla cal prémer per aplicar una referència absoluta en Excel?",
    answers: [
      { text: "F1", correct: false },
      { text: "F2", correct: false },
      { text: "F3", correct: false },
      { text: "F4", correct: true }
    ]
  },
  {
    question: "Com actua una referència relativa a un càlcul en Excel?",
    answers: [
      { text: "Manté fixa la fila.", correct: false },
      { text: "Manté fixa la columna.", correct: false },
      { text: "S'ajusta segons la posició.", correct: true },
      { text: "Depèn del contingut.", correct: false }
    ]
  },
  {
    question: "Segons el CUB (Llibre d'estil de la UB), qui és l'encarregat de fer la convocatòria d'un òrgan col·legiat?",
    answers: [
      { text: "Qualsevol membre de l'òrgan col·legiat.", correct: false },
      { text: "El president, sense intervenció de ningú més.", correct: false },
      { text: "El secretari, per ordre del president.", correct: true },
      { text: "La persona externa convidada a la reunió.", correct: false }
    ]
  },
  {
    question: "Quina d'aquestes funcions treballa només amb dades numèriques en un full de càlcul?",
    answers: [
      { text: "MAX.", correct: false },
      { text: "MIN.", correct: false },
      { text: "SUMA.", correct: false },
      { text: "Totes les respostes són correctes.", correct: true }
    ]
  },
  {
    question: "El full de càlcul permet aplicar funcions matemàtiques i/o estadístiques a valors de data?",
    answers: [
      { text: "No, aquestes funcions només admeten dades de text.", correct: false },
      { text: "Sí, però cal abans canviar el format de data a numèric.", correct: false },
      { text: "Sí, es poden fer operacions amb dates.", correct: true },
      { text: "El full de càlcul no accepta el format de data com a correcte.", correct: false }
    ]
  },
  {
    question: "Què calcula la funció COMPTAA en un full de càlcul?",
    answers: [
      { text: "El nombre de cel·les que contenen dades.", correct: true },
      { text: "El nombre de cel·les que contenen valors numèrics.", correct: false },
      { text: "El nombre de cel·les buides.", correct: false },
      { text: "El nombre de cel·les amb fórmules.", correct: false }
    ]
  },
  {
    question: "En Excel, quin tipus de gràfic s'utilitza per comparar valors entre diferents categories?",
    answers: [
      { text: "Gràfic d'àrees.", correct: false },
      { text: "Gràfic de barres.", correct: true },
      { text: "Gràfic circular.", correct: false },
      { text: "Gràfic de línies.", correct: false }
    ]
  },
  {
    question: "Què passa si es crea un gràfic en Excel sense seleccionar prèviament les dades?",
    answers: [
      { text: "Es genera un gràfic buit o es demana seleccionar un rang de dades.", correct: true },
      { text: "S'utilitzen automàticament totes les dades del full.", correct: false },
      { text: "Es crea un gràfic amb valors aleatoris.", correct: false },
      { text: "S'insereix un gràfic amb dades d'exemple.", correct: false }
    ]
  },
  {
    question: "Segons el CUB (Llibre d'estil de la UB), què és un recurs?",
    answers: [
      { text: "Un document intern que no es passa per Registre amb la finalitat de presentar un dubte.", correct: false },
      { text: "Un document per demanar que es modifiqui o anul·li una resolució administrativa.", correct: true },
      { text: "Una resolució dictada per un jutge.", correct: false },
      { text: "Un informe intern de l'administració.", correct: false }
    ]
  },
  {
    question: "Quina d'aquestes afirmacions és vàlida si es vol canviar la mida global del gràfic en Excel?",
    answers: [
      { text: "No es pot canviar la mida del gràfic un cop creat.", correct: false },
      { text: "S'ha d'estirar arrossegant els punts de control de l'àrea de traçat, la llegenda i el títol.", correct: false },
      { text: "S'ha d'estirar arrossegant els punts de control de l'àrea del gràfic.", correct: true },
      { text: "S'ha de canviar l'escala de visualització.", correct: false }
    ]
  },
  {
    question: "Un cop creat un gràfic en Excel, se'n pot modificar el tipus triat inicialment?",
    answers: [
      { text: "No, el tipus de gràfic inicial no es pot modificar.", correct: false },
      { text: "Depèn del tipus triat, alguns es poden modificar i altres no.", correct: false },
      { text: "Sí, sempre es pot modificar el tipus de gràfic.", correct: true },
      { text: "Sí, però el programa no permet més d'un canvi de tipus de gràfic.", correct: false }
    ]
  },
  {
    question: "A una base de dades del full de càlcul, cal tenir present que un camp es representa a través de:",
    answers: [
      { text: "Una fila.", correct: false },
      { text: "Una columna.", correct: true },
      { text: "Una cel·la.", correct: false },
      { text: "Totes les respostes són correctes.", correct: false }
    ]
  },
  {
    question: "Segons el CUB (Llibre d'estil de la UB), quines són les tipologies d'informes segons el seu contingut?",
    answers: [
      { text: "Descriptius o valoratius.", correct: true },
      { text: "Procedimentals o no procedimentals.", correct: false },
      { text: "Descriptius o procedimentals.", correct: false },
      { text: "Simples o complexes.", correct: false }
    ]
  },
  {
    question: "A una base de dades del full de càlcul cal tenir present que un registre es representa a través de:",
    answers: [
      { text: "Una columna.", correct: false },
      { text: "Una fila.", correct: true },
      { text: "Una cel·la.", correct: false },
      { text: "Totes les respostes són correctes.", correct: false }
    ]
  },
  {
    question: "Quina eina permet escriure una lletra o un número per sota de la línia normal del text, com en algunes fórmules?",
    answers: [
      { text: "Superíndex.", correct: false },
      { text: "Subíndex.", correct: true },
      { text: "Ratllat.", correct: false },
      { text: "Subratllat.", correct: false }
    ]
  },

  
{
    question: "Segons el CUB (Llibre d'estil de la UB), quina de les afirmacions següents defineix correctament què és un informe?",
    answers: [
      { text: "Un document exclusivament narratiu que expressa opinions personals sense base tècnica i que presenta dubtes.", correct: false },
      { text: "Un document que presenta una exposició de caràcter informatiu sobre la situació d'un afer o els elements necessaris per resoldre'l.", correct: true },
      { text: "Un document administratiu que sempre inclou una proposta de resolució annexada a un registre alfanumèric.", correct: false },
      { text: "Una redacció sobre el temps lliure escrita per formar part d'un expedient administratiu ordinari i suposadament verídic.", correct: false }
    ]
  },
  {
    question: "Quines eines s'utilitzen per ajustar la posició del text d'un paràgraf respecte als marges en un processador de textos?",
    answers: [
      { text: "Alineacions.", correct: false },
      { text: "Espai entre caràcters.", correct: false },
      { text: "Sagnies.", correct: true },
      { text: "Interlineat.", correct: false }
    ]
  },
  {
    question: "Què indica un subratllat vermell sota una paraula del text?",
    answers: [
      { text: "És una falta d'ortografia.", correct: true },
      { text: "El text té aplicat un format subratllat.", correct: false },
      { text: "És una falta contextual.", correct: false },
      { text: "És una falta gramatical.", correct: false }
    ]
  },
  {
    question: "Què passa quan s'activa el control de canvis i es modifica el contingut d'un document de Word?",
    answers: [
      { text: "El text original es substitueix directament per la modificació.", correct: false },
      { text: "Les modificacions es marquen i es poden identificar per l'usuari que les ha fet.", correct: true },
      { text: "Els canvis s'apliquen i es podran desfer.", correct: false },
      { text: "El document es guarda com una còpia nova amb els canvis aplicats.", correct: false }
    ]
  },
  {
    question: "Quina acció es pot realitzar sobre els canvis registrats amb el control de canvis en un document de Word?",
    answers: [
      { text: "Eliminar-los automàticament en desar el document.", correct: false },
      { text: "Convertir-los en comentaris visibles al marge.", correct: false },
      { text: "Bloquejar-los perquè no es puguin desfer.", correct: false },
      { text: "Acceptar-los o rebutjar-los per decidir la seva incorporació al document.", correct: true }
    ]
  },







  {
    question: "Es poden combinar nombres i pics en un esquema numerat amb nivells al Word?",
    answers: [
      { text: "Sí, es poden combinar nombres i pics.", correct: true },
      { text: "No, només es pot utilitzar un dels dos.", correct: false },
      { text: "Sí, però s'ha d'iniciar la llista amb nombres.", correct: false },
      { text: "Sí, definint-ho a la plantilla.", correct: false }
    ]
  },
  {
    question: "Segons el CUB (Llibre d'estil de la UB), amb quin tipus de document es demana la presència d'algú en un lloc, una data i una hora determinats, per a la realització d'un tràmit administratiu?",
    answers: [
      { text: "Carta.", correct: false },
      { text: "Avís.", correct: false },
      { text: "Citació.", correct: true },
      { text: "Informe.", correct: false }
    ]
  },
  {
    question: "Al Word, què cal fer per canviar de nivell en un esquema numerat?",
    answers: [
      { text: "Prémer la combinació de tecles Control + Tabulador o bé les icones de sagnat.", correct: false },
      { text: "Fer clic a les icones Disminueix / Augmenta el sagnat.", correct: false },
      { text: "Prémer la tecla Tabulador, Majúscules i Tabulador o bé les icones de sagnat.", correct: true },
      { text: "Els esquemes numerats no permeten canvis de nivell.", correct: false }
    ]
  },
  {
    question: "Què passa si s'elimina un element d'una llista numerada en un document de Word?",
    answers: [
      { text: "Es genera un salt i s'ha de corregir manualment.", correct: false },
      { text: "Manté la línia numerada sense el text.", correct: false },
      { text: "La numeració es reorganitza automàticament mantenint l'ordre correcte.", correct: true },
      { text: "La numeració es reinicia des del principi del document.", correct: false }
    ]
  },
  {
    question: "Segons el CUB (Llibre d'estil de la UB), quin és el temps verbal preferent en l'Acta de reunió?",
    answers: [
      { text: "Present d'indicatiu.", correct: true },
      { text: "Futur.", correct: false },
      { text: "Qualsevol.", correct: false },
      { text: "Passat.", correct: false }
    ]
  },
  {
    question: "Quina tecla permet desplaçar el cursor d'una cel·la a una altra cel·la de la taula?",
    answers: [
      { text: "Tabulador.", correct: true },
      { text: "Control.", correct: false },
      { text: "Majúscules.", correct: false },
      { text: "Alt.", correct: false }
    ]
  },
  {
    question: "Segons el CUB (Llibre d'estil de la UB), quin d'aquests documents és un certificat intern:",
    answers: [
      { text: "Diligència.", correct: true },
      { text: "Citació.", correct: false },
      { text: "Informe.", correct: false },
      { text: "Recurs.", correct: false }
    ]
  },
  {
    question: "Què indica un punt i coma entre els valors de dues cel·les dins una funció en un full de càlcul?",
    answers: [
      { text: "Que s'inclou tot el rang que hi ha entre les dues cel·les.", correct: false },
      { text: "Que només s'inclouen les dues cel·les indicades.", correct: true },
      { text: "Que hi ha dues funcions concatenades.", correct: false },
      { text: "Que els valors de les cel·les són fixos.", correct: false }
    ]
  },
  {
    question: "Per sortir de les eines de dibuix de taula (llapis) de Word es pot prémer la tecla...",
    answers: [
      { text: "Intro.", correct: false },
      { text: "Control.", correct: false },
      { text: "Escape.", correct: true },
      { text: "Alt Gr.", correct: false }
    ]
  },
  {
    question: "Què modifica un estil de taula en un processador de textos?",
    answers: [
      { text: "El contingut de les cel·les de manera automàtica.", correct: false },
      { text: "L'aspecte de la taula, com per exemple colors i vores.", correct: true },
      { text: "Ajustar automàticament l'amplada i alçada de les cel·les.", correct: false },
      { text: "Establir les jerarquies de contingut dins la taula.", correct: false }
    ]
  },
  {
    question: "Quin avantatge té modificar un estil de taula en lloc de formatar-la manualment en un document Word?",
    answers: [
      { text: "Permet aplicar canvis a tota la taula de forma ràpida.", correct: true },
      { text: "Permet editar tot el contingut al mateix temps.", correct: false },
      { text: "Permet ajustar automàticament les mides de la taula.", correct: false },
      { text: "Permet aplicar format a altres elements del document.", correct: false }
    ]
  },
  {
    question: "Quina configuració s'ha de seleccionar al quadre de diàleg d'impressió per imprimir només les pàgines 2, 3, 4 i 10 d'un document?",
    answers: [
      { text: "2-4, 10.", correct: true },
      { text: "2, 4, 10.", correct: false },
      { text: "2, 3, 10.", correct: false },
      { text: "2-10.", correct: false }
    ]
  },
  {
    question: "Quan es comparteix un document de Word amb Teams o OneDrive?",
    answers: [
      { text: "Un usuari pot editar el document i mentre el té obert la resta només poden visualitzar.", correct: false },
      { text: "Diversos usuaris poden obrir i treballar el document al mateix temps.", correct: true },
      { text: "El document es bloqueja quan un usuari l'està editant.", correct: false },
      { text: "Cada usuari treballa una còpia independent del document.", correct: false }
    ]
  },
  {
    question: "Quina utilitat té l'historial de versions en un document de Word compartit al núvol?",
    answers: [
      { text: "Permet combinar diferents versions del document en una final.", correct: false },
      { text: "Permet consultar i recuperar canvis realitzats per un usuari específic.", correct: false },
      { text: "Permet consultar i recuperar versions de l'última sessió de treball.", correct: false },
      { text: "Permet consultar i recuperar versions anteriors del document.", correct: true }
    ]
  },
  {
    question: "Per poder inserir un índex o taula de continguts en un document de Word cal tenir...",
    answers: [
      { text: "Aplicats estils.", correct: true },
      { text: "Numerades les pàgines.", correct: false },
      { text: "Una pàgina definida com a portada.", correct: false },
      { text: "Inserit tot el contingut.", correct: false }
    ]
  },
  {
    question: "Quin tipus de text pot ser un «document principal» quan es combina correspondència en un processador de textos?",
    answers: [
      { text: "Poden ser cartes o etiquetes.", correct: false },
      { text: "Poden ser cartes, etiquetes o sobres.", correct: false },
      { text: "Poden ser cartes, etiquetes, sobres o missatges de correu electrònic.", correct: true },
      { text: "Poden ser cartes, etiquetes, sobres o fulls de càlcul.", correct: false }
    ]
  },
  {
    question: "Segons el CUB (Llibre d'estil de la UB), quin dels següents documents ha de portar peu de recurs?",
    answers: [
      { text: "Resolució.", correct: true },
      { text: "Diligència.", correct: false },
      { text: "Convocatòria de reunió.", correct: false },
      { text: "Ofici.", correct: false }
    ]
  },
  {
    question: "Segons el CUB (Llibre d'estil de la UB), quina informació és obligatori que consti en una convocatòria?",
    answers: [
      { text: "El resum dels acords que es prendran a la reunió.", correct: false },
      { text: "El nom de totes les deganes de la universitat.", correct: false },
      { text: "El lloc, la data, l'hora i l'ordre del dia.", correct: true },
      { text: "La valoració final del desenvolupament de la reunió.", correct: false }
    ]
  },
  {
    question: "Quina és la forma més correcta d'ampliar l'espai entre paràgrafs a un document de Word?",
    answers: [
      { text: "Mitjançant l'interlineat.", correct: false },
      { text: "Mitjançant l'aplicació de sagnies.", correct: false },
      { text: "Mitjançant l'alineació dels paràgrafs.", correct: false },
      { text: "Mitjançant l'eina espaiat entre paràgrafs.", correct: true }
    ]
  },
  {
    question: "En un processador de textos, quina eina serveix per fer que el text es mostri més gruixut que la resta per destacar-lo?",
    answers: [
      { text: "Subratllat.", correct: false },
      { text: "Cursiva.", correct: false },
      { text: "Negreta.", correct: true },
      { text: "Majúscules.", correct: false }
    ]
  },
  {
    question: "L'espai editable situat dins del marge inferior del document que es repeteix a totes les pàgines és...",
    answers: [
      { text: "La capçalera.", correct: false },
      { text: "El peu de pàgina.", correct: true },
      { text: "El títol del document.", correct: false },
      { text: "El cos del document.", correct: false }
    ]
  },
  {
    question: "Quan es crea un document de Word partint d'una plantilla, és necessari desar-lo?",
    answers: [
      { text: "No, ja queda desat amb el nom de la plantilla.", correct: false },
      { text: "Sí, caldrà desar-lo i indicar el nom de l'arxiu.", correct: true },
      { text: "Sí, caldrà desar-lo per incorporar els canvis a la plantilla.", correct: false },
      { text: "Sí, els canvis en desar afectaran la plantilla d'origen.", correct: false }
    ]
  },
  {
    question: "Segons el CUB (Llibre d'estil de la UB), quin d'aquestes opcions correspon normalment a un ofici (document de comunicació amb l'exterior)?",
    answers: [
      { text: "Notificació d'una resolució.", correct: true },
      { text: "Memòria transitòria.", correct: false },
      { text: "Informe social.", correct: false },
      { text: "Acta de reunió.", correct: false }
    ]
  },








  ];
  
  function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function renderTest() {
  const form = document.getElementById("test-form");
  form.innerHTML = "";

  // 1. Cargar u organizar el orden de las preguntas
  let currentQuestions;
  const savedOrder = localStorage.getItem(`questions-${TEST_ID}`);
  
  if (savedOrder) {
    currentQuestions = JSON.parse(savedOrder);
  } else {
    // Barajamos preguntas y respuestas y lo guardamos
    currentQuestions = questions.map(q => ({
      ...q,
      answers: shuffleArray([...q.answers])
    }));
    currentQuestions = shuffleArray(currentQuestions);
    localStorage.setItem(`questions-${TEST_ID}`, JSON.stringify(currentQuestions));
  }

  // 2. Cargar respuestas guardadas
  const savedProgress = JSON.parse(localStorage.getItem(`progress-${TEST_ID}`)) || { respuestas: {} };

  currentQuestions.forEach((q, index) => {
    const questionWrapper = document.createElement("div");
    questionWrapper.className = "question";
    questionWrapper.id = `q-container-${index}`;

    const title = document.createElement("h3");
    title.textContent = `${index + 1}. ${q.question}`;
    questionWrapper.appendChild(title);

    const answersWrapper = document.createElement("div");
    answersWrapper.className = "answers";

    q.answers.forEach((a) => {
      const label = document.createElement("label");
      label.className = "answer";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `q${index}`;
      input.value = a.text;
      input.dataset.correct = a.correct;
      
      if (savedProgress.respuestas[`q${index}`] === a.text) {
        input.checked = true;
      }

      label.appendChild(input);
      label.appendChild(document.createTextNode(a.text));
      answersWrapper.appendChild(label);
    });

    questionWrapper.appendChild(answersWrapper);
    form.appendChild(questionWrapper);

    // Corregir visualmente si ya estaba marcada
    if (savedProgress.respuestas[`q${index}`]) {
        autoCheckAnswer(questionWrapper);
    }
  });

  updateResponseCounter();
}

function autoCheckAnswer(questionEl) {
  const labels = questionEl.querySelectorAll("label");
  labels.forEach(label => {
    const input = label.querySelector("input");
    if (input.checked) {
      label.classList.add(input.dataset.correct === "true" ? "correct" : "incorrect");
    } else {
      label.classList.remove("correct", "incorrect");
    }
  });
}

function updateResponseCounter() {
  const currentQuestions = JSON.parse(localStorage.getItem(`questions-${TEST_ID}`));
  if (!currentQuestions) return;
  
  const total = currentQuestions.length;
  const selectedInputs = document.querySelectorAll("input[type=radio]:checked");
  const selectedCount = selectedInputs.length;
  
  document.getElementById("response-counter").textContent = `Respostes: ${selectedCount}/${total}`;

  // Guardar progreso
  const respuestas = {};
  selectedInputs.forEach(input => {
    respuestas[input.name] = input.value;
  });
  
  localStorage.setItem(`progress-${TEST_ID}`, JSON.stringify({
    total: total,
    respuestas: respuestas
  }));
}

function evaluateTest() {
  const questionsDOM = document.querySelectorAll(".question");
  let correctCount = 0;
  let total = questionsDOM.length;

  questionsDOM.forEach((questionEl) => {
    const inputCorrecto = questionEl.querySelector('input[data-correct="true"]');
    const inputMarcado = questionEl.querySelector('input:checked');

    questionEl.querySelectorAll("label").forEach(l => l.classList.remove("correct", "incorrect"));
    inputCorrecto.parentElement.classList.add("correct");

    if (inputMarcado) {
      if (inputMarcado.dataset.correct === "true") {
        correctCount++;
      } else {
        inputMarcado.parentElement.classList.add("incorrect");
      }
    }
  });

  const fallos = total - correctCount;
  const nota = ((correctCount / total) * 10).toFixed(2);
  const aprobado = fallos <= 5; // Límite de 5 fallos

  localStorage.setItem(`result-${TEST_ID}`, JSON.stringify({
    nota: nota,
    fallos: fallos,
    aprobado: aprobado
  }));

  const scoreDiv = document.getElementById("score");
  scoreDiv.style.display = "block";
  if (aprobado) {
    scoreDiv.innerHTML = `<h2>✅ APTE</h2> Nota: ${nota}/10 <br> Fallades: ${fallos}`;
    scoreDiv.style.backgroundColor = "#e8f5e9";
    scoreDiv.style.color = "#2e7d32";
  } else {
    scoreDiv.innerHTML = `<h2>❌ NO APTE</h2> Nota: ${nota}/10 <br> Fallades: ${fallos} <br> (Màxim permès: 5)`;
    scoreDiv.style.backgroundColor = "#fce8e8";
    scoreDiv.style.color = "#e74c3c";
  }
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Nueva función para el botón de Reiniciar
function reiniciarTest() {
    if (confirm("Vols tornar a començar? Es canviarà l'ordre de tot.")) {
        localStorage.removeItem(`questions-${TEST_ID}`);
        localStorage.removeItem(`progress-${TEST_ID}`);
        localStorage.removeItem(`result-${TEST_ID}`);
        location.reload();
    }
}

document.addEventListener("change", (e) => {
  if (e.target.matches("input[type=radio]")) {
    updateResponseCounter();
    autoCheckAnswer(e.target.closest(".question"));
  }
});

document.getElementById("submit").addEventListener("click", evaluateTest);
window.addEventListener("DOMContentLoaded", renderTest);
