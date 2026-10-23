const TEST_ID = "e2026b"; 
const questions = [
  {
    num: 1,
    question: "Segons l'art. 5 de la Llei 19/2014, de 29 de desembre, de transparència, accés a la informació pública i bon govern, els subjectes obligats han de garantir la transparència de la informació pública per mitjà de:",
    answers: [
      { text: "El règim sancionador.", correct: false },
      { text: "Un sistema integral d'informació i coneixement en format electrònic.", correct: true },
      { text: "La participació ciutadana directa.", correct: false },
      { text: "L'auditoria interna de les administracions.", correct: false }
    ]
  },
  {
    num: 2,
    question: "D'acord el que preveu l'art. 51 del Decret Legislatiu 1/1997, de 31 d'octubre, pel qual s'aprova la refosa en un Text únic dels preceptes de determinats textos legals vigents a Catalunya en matèria de funció pública, en els processos selectius per adquirir la condició de funcionari:",
    answers: [
      { text: "En la convocatòria respectiva es pot establir una fase de prova, que no tindrà caràcter selectiu.", correct: false },
      { text: "En la convocatòria respectiva es pot establir una fase de prova, que podrà tenir caràcter selectiu.", correct: true },
      { text: "En la convocatòria respectiva es pot establir una fase de prova que, necessàriament, haurà d'anar precedida d'un curs de formació.", correct: false },
      { text: "En la convocatòria respectiva no es pot establir una fase de prova.", correct: false }
    ]
  },
  {
    num: 3,
    question: "El termini de notificació d'un acte administratiu, segons la Llei 39/2015, del procediment administratiu comú de les administracions públiques, és de:",
    answers: [
      { text: "5 dies hàbils des que l'acte s'ha dictat.", correct: false },
      { text: "10 dies hàbils des que l'acte s'ha dictat.", correct: true },
      { text: "15 dies naturals des que l'acte s'ha dictat.", correct: false },
      { text: "Un mes des que l'acte s'ha dictat.", correct: false }
    ]
  },
  {
    num: 4,
    question: "D'acord amb el que estableix el títol I de la Llei Orgànica 2/2023, de 22 de març, del sistema universitari, l'expedició dels títols corresponents als ensenyaments universitaris de caràcter oficial correspon:",
    answers: [
      { text: "Al Ministeri competent en la matèria.", correct: false },
      { text: "Al Rei d'Espanya.", correct: false },
      { text: "A les universitats.", correct: true },
      { text: "Al president de la CCAA.", correct: false }
    ]
  },
  {
    num: 5,
    question: "El Pla de Prevenció de la Universitat de Barcelona no regula:",
    answers: [
      { text: "Estructura organitzativa de la prevenció a la UB.", correct: false },
      { text: "Les competències i facultats del Comitè de Seguretat i Salut de la UB.", correct: false },
      { text: "Els objectius generals de la UB en matèria preventiva.", correct: false },
      { text: "El pla d'evacuació dels edificis de la UB.", correct: true }
    ]
  },
  {
    num: 6,
    question: "Quin aspecte vol garantir l'Eix 1 en la comunicació institucional?",
    answers: [
      { text: "L'ús exclusiu del llenguatge tècnic.", correct: false },
      { text: "Un llenguatge inclusiu i representatiu.", correct: true },
      { text: "La reducció del volum de comunicats.", correct: false },
      { text: "L'eliminació d'imatges en campanyes.", correct: false }
    ]
  },
{
    num: 7,
    question: "En la delegació de competències, segons l'art. 9 de la Llei 40/2015, quina de les següents afirmacions és correcta:",
    answers: [
      { text: "La titularitat de la competència passa a l'òrgan delegat.", correct: false },
      { text: "Les resolucions dictades s'entenen dictades per l'òrgan delegant.", correct: true },
      { text: "No és necessari que es publiqui en la UB web ni en cap diari oficial.", correct: false },
      { text: "Es pot delegar la competència per dictar disposicions de caràcter general.", correct: false }
    ]
  },
  {
    num: 8,
    question: "D'acord amb el títol IX de la Llei Orgànica 2/2023 (LOSU), les universitats podran estructurar-se en:",
    answers: [
      { text: "Campus, facultats, escoles i departaments, instituts universitaris, escoles de doctorat o altres centres segons ho determini el Consell Social.", correct: false },
      { text: "Campus, facultats, escoles i departaments, instituts universitaris, escoles de doctorat o altres centres segons ho determini l'Equip de Govern.", correct: false },
      { text: "Campus, facultats, escoles i departaments, instituts universitaris, escoles de doctorat o altres centres segons ho determini el Claustre.", correct: false },
      { text: "Campus, facultats, escoles i departaments, instituts universitaris, escoles de doctorat o altres centres segons ho determinin els seus estatuts.", correct: true }
    ]
  },
  {
    num: 9,
    question: "El títol preliminar de la Llei 1/2003, d'universitats de Catalunya, estableix que:",
    answers: [
      { text: "El català és la única llengua oficial de les universitats de Catalunya.", correct: false },
      { text: "El català és la llengua pròpia de les universitats de Catalunya i el castellà és la llengua oficial.", correct: false },
      { text: "El català és la llengua pròpia de les universitats de Catalunya així com el castellà.", correct: false },
      { text: "El català és la llengua pròpia de les universitats de Catalunya i que el català i el castellà són les dues llengües oficials.", correct: true }
    ]
  },
  {
    num: 10,
    question: "L'autonomia universitària:",
    answers: [
      { text: "No es pot regular per llei.", correct: false },
      { text: "És un dret fonamental contemplat a la Constitució espanyola.", correct: true },
      { text: "No es reconeix a la Constitució espanyola.", correct: false },
      { text: "És un deure fonamental contemplat a la Constitució Espanyola.", correct: false }
    ]
  },
  {
    num: 11,
    question: "Segons l'art. 17 del RD 822/2021, en quines modalitats d'ensenyament es poden impartir els estudis oficials de Màster?",
    answers: [
      { text: "Exclusivament en modalitat presencial.", correct: false },
      { text: "Presencial i virtual, però no híbrida.", correct: false },
      { text: "Presencial, híbrida (semipresencial) i virtual.", correct: true },
      { text: "Només virtual.", correct: false }
    ]
  },
  {
    num: 12,
    question: "Segons la Llei 1/2003, els diplomes i títols que expedeixin les universitats han d'anar acompanyats:",
    answers: [
      { text: "Pel suplement espanyol del títol.", correct: false },
      { text: "Pel suplement europeu del títol.", correct: true },
      { text: "Pel suplement català del títol.", correct: false },
      { text: "De la resolució del degà o degana corresponent.", correct: false }
    ]
  },
  {
    num: 13,
    question: "La substitució, segons l'art. 13 de la Llei 40/2015:",
    answers: [
      { text: "Es produeix en casos de vacant, absència o malaltia del titular.", correct: true },
      { text: "Implica un trasllat definitiu de la titularitat.", correct: false },
      { text: "Només es pot fer entre òrgans de diferents universitats.", correct: false },
      { text: "Requereix l'aprovació del Claustre.", correct: false }
    ]
  },
  {
    num: 14,
    question: "D'acord amb el RD 99/2011, quin òrgan avalua la defensa de la tesi doctoral?",
    answers: [
      { text: "La Comissió acadèmica del programa.", correct: false },
      { text: "El tribunal de la tesi.", correct: true },
      { text: "L'Escola de Doctorat.", correct: false },
      { text: "La Comissió de doctorat de la facultat.", correct: false }
    ]
  },
  {
    num: 15,
    question: "Segon l'art. 18 del RD 822/2021, l'accés a un màster amb un títol estranger no pertanyent a l'EEES:",
    answers: [
      { text: "Han d'haver homologat prèviament el seu títol per accedir al màster.", correct: false },
      { text: "El seu títol estranger queda homologat amb l'accés al màster.", correct: false },
      { text: "L'accés al màster no implica l'homologació del seu títol estranger.", correct: true },
      { text: "Han d'haver superat una prova estatal d'accés.", correct: false }
    ]
  },
  {
    num: 16,
    question: "L'acte pel qual un òrgan superior assumeix un assumpte d'un inferior (art. 10 Llei 40/2015) s'anomena:",
    answers: [
      { text: "Delegació.", correct: false },
      { text: "Avocació.", correct: true },
      { text: "Substitució.", correct: false },
      { text: "Encomanda de gestió.", correct: false }
    ]
  },
  {
    num: 17,
    question: "D'acord amb la Llei 39/2015, els actes administratius seran objecte de publicació quan:",
    answers: [
      { text: "Sempre que ho decideixi l'Administració.", correct: false },
      { text: "Quan l'acte sigui desfavorable.", correct: false },
      { text: "Quan l'acte tingui una pluralitat indeterminada de destinataris.", correct: true },
      { text: "Només en procediments sancionadors.", correct: false }
    ]
  },
  {
    num: 18,
    question: "Quina és la finalitat principal del Portal de la Transparència segons la Llei 19/2014?",
    answers: [
      { text: "Permetre la presentació de sol·licituds presencials.", correct: false },
      { text: "Centralitzar la informació publicada per garantir la transparència de l'activitat pública.", correct: true },
      { text: "Publicar únicament la normativa vigent.", correct: false },
      { text: "Gestionar els expedients administratius interns.", correct: false }
    ]
  },
  {
    num: 19,
    question: "Quan es consideren vàlids els actes administratius amb caràcter general (art. 39 Llei 39/2015)?",
    answers: [
      { text: "Quan es publiquen al BOE.", correct: false },
      { text: "Quan es notifiquen als interessats.", correct: false },
      { text: "Des del moment en què es dicten.", correct: true },
      { text: "Quan finalitza el procediment.", correct: false }
    ]
  },
  {
    num: 20,
    question: "Segons l'art. 41 de la Llei 39/2015, quin és el mitjà preferent per a la notificació?",
    answers: [
      { text: "El correu postal certificat.", correct: false },
      { text: "La publicació al diari oficial.", correct: false },
      { text: "Els mitjans electrònics.", correct: true },
      { text: "El tauler d'anuncis administratiu.", correct: false }
    ]
  },
  {
    num: 21,
    question: "Segons el TREBEP (RD 5/2015), les retribucions dels funcionaris es classifiquen en:",
    answers: [
      { text: "Retribucions bàsiques i complementàries.", correct: true },
      { text: "Retribucions assignades a cada Grup o Subgrup i triennis.", correct: false },
      { text: "Retribucions assignades a cada Grup o Subgrup, triennis i complements especificats.", correct: false },
      { text: "Retribucions bàsiques, complementàries i serveis extraordinaris.", correct: false }
    ]
  },
  {
    num: 22,
    question: "Els defectes de forma determinaran l'anul·labilitat de l'acte quan:",
    answers: [
      { text: "El signi un funcionari en pràctiques.", correct: false },
      { text: "Manqui de firma electrònica.", correct: false },
      { text: "Manqui dels requisits formals indispensables o produeixi indefensió.", correct: true },
      { text: "Sempre, qualsevol error formal invalida l'acte.", correct: false }
    ]
  },
  {
    num: 23,
    question: "Segons el RD 99/2011, quin és l'òrgan responsable de la definició i qualitat d'un programa de doctorat?",
    answers: [
      { text: "La Facultat.", correct: false },
      { text: "El departament universitari.", correct: false },
      { text: "La comissió acadèmica del programa.", correct: true },
      { text: "L'Escola de Doctorat.", correct: false }
    ]
  },
  {
    num: 24,
    question: "D'acord amb el TREBEP, com es classifiquen els empleats públics?",
    answers: [
      { text: "Funcionaris de carrera, funcionaris interins, personal laboral fix i personal eventual.", correct: false },
      { text: "Funcionaris de carrera, funcionaris interins, personal laboral (fix, indefinit o temporal) i personal eventual.", correct: true },
      { text: "Funcionaris de carrera, funcionaris interins i personal laboral fix.", correct: false },
      { text: "Funcionaris de carrera, funcionaris interins i personal eventual.", correct: false }
    ]
  },
  {
    num: 25,
    question: "Què és el CSV en la signatura electrònica?",
    answers: [
      { text: "Codi Segur de Verificació.", correct: true },
      { text: "Codi Sintàctic de Vigilància.", correct: false },
      { text: "Codi Segur Vigent.", correct: false },
      { text: "Codi Simple de Verificació.", correct: false }
    ]
  },
  {
    num: 26,
    question: "D'acord amb el Decret Legislatiu 1/1997, els concursos de provisió poden ser:",
    answers: [
      { text: "Generals o específics.", correct: false },
      { text: "Genèrics o específics.", correct: true },
      { text: "Generals o especials.", correct: false },
      { text: "Genèrics o especials.", correct: false }
    ]
  },
  {
    num: 27,
    question: "El Registre Electrònic General (Llei 39/2015) ha de permetre presentar documents:",
    answers: [
      { text: "De dilluns a divendres en horari de 9h a 14h.", correct: false },
      { text: "Tots els dies de l'any durant les 24 hores.", correct: true },
      { text: "Només els dies que siguin hàbils a la seu de l'òrgan competent.", correct: false },
      { text: "Únicament si no pesen més de 1 MB.", correct: false }
    ]
  },
  {
    num: 28,
    question: "En una institució amb més de 4.001 treballadors, quants delegats de prevenció ha de tenir?",
    answers: [
      { text: "6", correct: false },
      { text: "7", correct: false },
      { text: "8", correct: true },
      { text: "9", correct: false }
    ]
  },
  {
    num: 29,
    question: "Segons la LOSU, el professor associat pot desenvolupar tasques docents fins a un màxim de:",
    answers: [
      { text: "120 hores lectives per curs acadèmic.", correct: false },
      { text: "120 hores lectives per any.", correct: false },
      { text: "180 hores lectives per curs acadèmic.", correct: true },
      { text: "180 hores lectives per any.", correct: false }
    ]
  },
  {
    num: 30,
    question: "Segons la Llei 19/2014, el Portal de la Transparència ha de garantir que la informació sigui:",
    answers: [
      { text: "Només accessible al personal funcionari.", correct: false },
      { text: "Reservada i confidencial.", correct: false },
      { text: "Accessible de manera fàcil i gratuïta.", correct: true },
      { text: "Disponible exclusivament mitjançant sol·licitud prèvia.", correct: false }
    ]
  },
  {
    num: 31,
    question: "El rebut que emet el registre electrònic (art. 16 Llei 39/2015) ha de contenir:",
    answers: [
      { text: "La fotografia del sol·licitant.", correct: false },
      { text: "El número de registre, la data i l'hora de presentació i una còpia de l'escrit.", correct: true },
      { text: "L'adreça física de l'òrgan que ha de resoldre.", correct: false },
      { text: "La identificació de la persona funcionària que ha validat l'entrada.", correct: false }
    ]
  },
  {
    num: 32,
    question: "Segons la Llei 19/2014, quina informació s'ha de fer pública en transparència?",
    answers: [
      { text: "Només la informació pressupostària.", correct: false },
      { text: "La informació sobre l'organització institucional i l'estructura administrativa.", correct: true },
      { text: "Exclusivament la normativa amb rang de llei.", correct: false },
      { text: "Només els contractes menors.", correct: false }
    ]
  },
  {
    num: 33,
    question: "Qui està obligat a relacionar-se a través de mitjans electrònics amb l'Administració (art. 14 Llei 39/2015)?",
    answers: [
      { text: "Totes les persones físiques majors d'edat.", correct: false },
      { text: "Les persones jurídiques i les entitats sense personalitat jurídica.", correct: true },
      { text: "Només els funcionaris públics en la seva vida privada.", correct: false },
      { text: "Únicament les grans empreses amb més de 50 treballadors.", correct: false }
    ]
  },
  {
    num: 34,
    question: "Quin principi permet dirigir i controlar òrgans inferiors (art. 3.1 Llei 40/2015)?",
    answers: [
      { text: "Coordinació.", correct: false },
      { text: "Descentralització.", correct: false },
      { text: "Jerarquia.", correct: true },
      { text: "Desconcentració.", correct: false }
    ]
  },
  {
    num: 35,
    question: "Quina funció ha de complir un prestador de serveis de confiança per expedir un certificat qualificat?",
    answers: [
      { text: "Enviar automàticament el certificat per correu postal.", correct: false },
      { text: "Verificar la identitat de la persona a qui s'expedeix.", correct: true },
      { text: "Emmagatzemar totes les signatures electròniques durant pocs dies.", correct: false },
      { text: "Autoritzar l'ús de la signatura manual.", correct: false }
    ]
  },
  {
    num: 36,
    question: "Quina condició fa lícit el tractament de dades personals segons l'art. 6 del Reglament (UE) 2016/679 de 27 d'abril de 2016?",
    answers: [
      { text: "Que l'interessat hagi donat el seu consentiment.", correct: true },
      { text: "Que el tractament sigui voluntari per part del responsable.", correct: false },
      { text: "Que les dades no es considerin sensibles ni interoperables.", correct: false },
      { text: "Que el tractament tingui finalitats comercials.", correct: false }
    ]
  },
  {
    num: 37,
    question: "Segons l'art. 1 de l Reglament (UE) 2016/679 del Parlament Europeu i del Consell, de 27 d'abril del 2016, què s'hi estableix principalment?",
    answers: [
      { text: "La prohibició de l a circulació de dades personals dins la Unió Europea i els països afins.", correct: false },
      { text: "L e s n o r m e s relatives a l a protecció d e l e s persones físiques p e l q u e f a al tractament de les dades personals i a la lliure circulació d'aquestes dades.", correct: true },
      { text: "L e s normes sobre el tractament exclusiu d e d a d e s d e les administracions públiques catalanes i estatals.", correct: false },
      { text: "La regulació del tractament de dades únicament per motius de seguretat nacional.", correct: false }
    ]
  },
  {
    num: 38,
    question: "D'acord amb l'art. 1 del Reial Decret 5/2015, de 30 d'octubre, pel qual s'aprova el text refós de la Llei de l'Estatut Bàsic de l'Empleat públic, a q u e s t a n o r m a",
    answers: [
      { text: "S'aplica exclusivament a l personal subjecte a l règim funcionarial que presta serveis a qualsevol administració inclosa e n e l s e u à m b i t d'aplicació", correct: false },
      { text: "S'aplica exclusivament al personal laboral que presta serveis a qualsevol administració inclosa en el seu ambit d'aplicació", correct: false },
      { text: "Estableix les bases del règim estatutari, tant dels funcionaris públics com del personal laboral que presta serveis a qualsevol administració inclosa en el seu ambit d'aplicació.", correct: false },
      { text: "Estableix les bases del règim estatutari dels funcionaris públics i determina les normes aplicable del personal laboral que presta serveis a qualsevol administració inclosa en e l seu àmbit d'aplicació.", correct: true }
    ]
  },
  {
    num: 39,
    question: "Un acte dictat per u n organ manifestament incompetent per raó d e la matèria és, segons allò estipulat a l'art. 47 Llei 39/2015, del procediment administratiu comú de les administracions públiques",
    answers: [
      { text: "A n u l lable.", correct: false },
      { text: "Nul de ple dret.", correct: true },
      { text: "Valid, però objecte d e revisió d'ofici.", correct: false },
      { text: "Irrellevant per al dret administratiu.", correct: false }
    ]
  },
  {
    num: 40,
    question: "D'acord el que preveu l'art. 46 del Decret Legislatiu 1/1997, de 31 d'octubre, pel qual s'aprova la refosa en u n Text únic dels preceptes d e determinats textos legals vigents a Catalunya en matèria de funció pública, per a l'accés a les escales de funcionaris es poden fer servir els següents procediments:",
    answers: [
      { text: "Oposició, concurs oposició i concurs", correct: true },
      { text: "Oposició, lliure designació i concurs", correct: false },
      { text: "Oposició, concurs oposició, concurs i lliure designació", correct: false },
      { text: "Oposició, concurs oposició i lliure designació", correct: false }
    ]
  },
  {
    num: 41,
    question: "D'acord amb l'art. 68 de la Llei Orgánica 2/2023, de 22 de març del sistema universitari, el professorat universitari funcionari haurà de pertanyer als següents c o s s o s docents:",
    answers: [
      { text: "Catedratics d'universitat o Professors Titulars d'Universitat.", correct: true },
      { text: "Catedratics d'universitat, Catedratics d'Escola Universitaria, Professors Titulars d'Universitat o Professors Titular d'Escola Universitària.", correct: false },
      { text: "Catedratics d'universitat, Professors Titulars d'Universitat o Professors Agregats d'Universitat.", correct: false },
      { text: "Catedratics d'universitat, professors Titulars d'Universitat, professors vinculats d'universitat.", correct: false }
    ]
  },
  {
    num: 42,
    question: "D'acord amb l'art. 15 de la llei 31/1995, de 8 de novembre, de prevenció de riscos laborals, quins dels següents principis no s'haurà d'aplicar a les mesures que integren el deure general de prevenció:",
    answers: [
      { text: "Evitar riscos", correct: false },
      { text: "Avaluar riscos que no es puguin evitar.", correct: false },
      { text: "Adoptar mesures que anteposin la protecció individual a la col lectiva.", correct: true },
      { text: "Donar les corresponents instruccions als treballadors.", correct: false }
    ]
  },
  {
    num: 43,
    question: "D'acord amb l'art. 52 de la llei 1/2003, de 19 de febrer, d'Universitats de Catalunya, el professorat emèrit",
    answers: [
      { text: "Només pot col laborar e n activitats especifiques d e docència a la universitat.", correct: false },
      { text: "Només pot col-laborar e n activitats especifiques d e recerca a la universitat.", correct: false },
      { text: "Pot col laborar en activitats especifiques de docència o de recerca a la universitat.", correct: true },
      { text: "Pot col laborar en activitats especifiques de docència, de recerca o d e gestió a la universitat.", correct: false }
    ]
  },
  {
    num: 44,
    question: "Quina directiva europea estableix el principi d'igualtat de retribució entre d o n e s i h o m e s ?",
    answers: [
      { text: "Directiva 2006/54/CE.", correct: false },
      { text: "Directiva (UE) 2019/1158.", correct: false },
      { text: "Directiva 2000/78/CE", correct: false },
      { text: "Directiva (UE) 2023/970.", correct: true }
    ]
  },
  {
    num: 45,
    question: "Qui pot ser assignat director o directora de tesi doctoral, segons l'art. 2 del RD 99/2011, pel qual es regulen els ensenyaments oficials de doctorat, modificat pel Reial decret 576/2023?",
    answers: [
      { text: "Només al professorat de la universitat on s'imparteix el programa", correct: false },
      { text: "Qualsevol doctor o doctora, amb experiència investigadora acreditada, espanyol o estranger", correct: true },
      { text: "Només catedrátics o titulars d'universitat", correct: false },
      { text: "Exclusivament personal investigador en actiu a Espanya", correct: false }
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
