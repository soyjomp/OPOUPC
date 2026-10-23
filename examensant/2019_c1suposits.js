// 1. Preguntes tipus test del Supòsit C (assignades a 'preguntesObligatories')
const preguntesObligatories = [
    {
        id: "suposit_c_test_1",
        seccio: "SUPÒSIT C: GESTIÓ DE PERSONAL",
        pregunta: "La condició de funcionari/a de carrera s’adquireix pel compliment successiu dels següents requisits:",
        opcions: [
            { text: "Superar el procés selectiu; nomenament per l’autoritat competent que haurà de ser publicat al Diari Oficial corresponent; acatament de la Constitució i de l’Estatut d’Autonomia corresponent; entre d’altres", correcte: true },
            { text: "Acudir al meu lloc de treball, amb el nomenament corresponent i còpia de la resolució del Tribunal publicada al DOGC", correcte: false },
            { text: "Només cal que em presenti el dia que m’indiquin els serveis de la UTG, ja que tota la meva documentació obra a l’expedient i la pressa de possessió del lloc es farà en presència de la Cap de la UTG", correcte: false }
        ]
    },
    {
        id: "suposit_c_test_2",
        seccio: "SUPÒSIT C: GESTIÓ DE PERSONAL",
        pregunta: "Tant el personal d’administració i serveis funcionari com el laboral perceben les retribucions a càrrec del:",
        opcions: [
            { text: "Pressupost de la corresponent UTG", correcte: false },
            { text: "Pressupost de la Universitat", correcte: true },
            { text: "Pressupost de la Generalitat de Catalunya", correcte: false }
        ]
    },
    {
        id: "suposit_c_test_3",
        seccio: "SUPÒSIT C: GESTIÓ DE PERSONAL",
        pregunta: "Forma part del PDI de la UPC el professorat dels cossos de funcionariat docent universitari següents:",
        opcions: [
            { text: "Catedràtics i catedràtiques d’universitat; titulars d’universitat; catedràtics i catedràtiques d’escola universitària; titulars d’escoles universitàries", correcte: true },
            { text: "Mestres de taller i laboratori, funcionaris amb dedicació permanent pertanyents al MEC", correcte: false },
            { text: "Professors ajudants i ajudantes; doctorands i doctorandes amb beca o contracte que els vinculi a la UPC", correcte: false }
        ]
    },
    {
        id: "suposit_c_test_4",
        seccio: "SUPÒSIT C: GESTIÓ DE PERSONAL",
        pregunta: "La dedicació a temps complet és la normal del personal docent i investigador de la Universitat Politècnica de Catalunya, amb l’excepció de:",
        opcions: [
            { text: "Professorat doctor més gran de 65 anys", correcte: false },
            { text: "Professorat associat, que només pot tenir dedicació a temps parcial, i del professorat emèrit", correcte: true },
            { text: "Catedràtics i catedràtiques d’universitat i titulars d’universitat", correcte: false }
        ]
    },
    {
        id: "suposit_c_test_5",
        seccio: "SUPÒSIT C: GESTIÓ DE PERSONAL",
        pregunta: "Els empleats públics es classifiquen en:",
        opcions: [
            { text: "Funcionaris de carrera, funcionaris interins, personal laboral i personal eventual", correcte: true },
            { text: "Funcionaris de cossos generals i funcionaris de cossos especials", correcte: false },
            { text: "Personal amb nomenament discrecional i personal d’oposició", correcte: false }
        ]
    },
    {
        id: "suposit_c_test_6",
        seccio: "SUPÒSIT C: GESTIÓ DE PERSONAL",
        pregunta: "Els funcionaris de carrera es troben en alguna de les següents situacions:",
        opcions: [
            { text: "Servei actiu; Serveis específics; Comissió de serveis i Jubilats", correcte: false },
            { text: "Servei actiu; serveis especials; servei en altres administracions; excedència, suspensió de funcions", correcte: true },
            { text: "Situació activa i situació passiva", correcte: false }
        ]
    },
    {
        id: "suposit_c_test_7",
        seccio: "SUPÒSIT C: GESTIÓ DE PERSONAL",
        pregunta: "Tots els ciutadans tenen dret a l’accés a l’ocupació pública d’acord amb els principis:",
        opcions: [
            { text: "De concurrència competitiva i eficiència en la tramitació", correcte: false },
            { text: "D’igualtat d’oportunitats de les persones", correcte: false },
            { text: "D’igualtat, mèrit i capacitat", correcte: true }
        ]
    },
    {
        id: "suposit_c_test_8",
        seccio: "SUPÒSIT C: GESTIÓ DE PERSONAL",
        pregunta: "Només poden proveir-se pel sistema de lliure designació el llocs:",
        opcions: [
            { text: "Que determina el Consell Social, a proposta del Consell de Govern", correcte: true },
            { text: "Que proposa el gerent amb l’aprovació del Consell de Govern", correcte: false },
            { text: "No retribuïts", correcte: false }
        ]
    },
    {
        id: "suposit_c_test_9",
        seccio: "SUPÒSIT C: GESTIÓ DE PERSONAL",
        pregunta: "Correspon al personal d’administració i serveis, entre d’altres, les funcions següents:",
        opcions: [
            { text: "Determinar i aprovar les línies estratègiques que han d’inspirar l’actuació de la UPC i de les unitats acadèmiques i de gestió", correcte: false },
            { text: "Organització i coordinació dels serveis de suport a la docència, l’estudi, la recerca i la transferència de tecnologia", correcte: true },
            { text: "Preparar les pràctiques que han de desenvolupar els estudiants als tallers i laboratoris", correcte: false }
        ]
    },
    {
        id: "suposit_c_test_10",
        seccio: "SUPÒSIT C: GESTIÓ DE PERSONAL",
        pregunta: "A efectes de la negociació col·lectiva dels funcionaris públics es constituirà:",
        opcions: [
            { text: "Una Mesa General de Negociació i 10 Messes Sectorials", correcte: false },
            { text: "Una Mesa General de Negociació en l’àmbit de l’Administració General de l’Estat i una en cadascuna de les Comunitats Autònomes, ciutats de Ceuta i Melilla i Entitats Locals", correcte: true },
            { text: "Una Mesa General de Negociació per cada 10.000 funcionaris", correcte: false }
        ]
    }
];

// 2. Preguntes obertes / breus del Supòsit C (assignades a 'preguntesObertes')
const preguntesObertes = [
    {
        id: "suposit_c_oberta_1",
        seccio: "SUPÒSIT C: GESTIÓ DE PERSONAL",
        pregunta: "D’acord amb la informació inicial exposada, quin requisit essencial et faltaria per ser investit/da funcionari/a de carrera? Dins de quin termini ho hauria de complir? Raona la resposta",
        pista: "Considera els requisits de l'art. 62 del TREBEP i el termini màxim per formalitzar l'inici d'activitat des de la publicació al DOGC.",
        respostaCorrecta: "L’article 62 de TREBEP, estableix que la condició de funcionari de carrera s’adquireix pel compliment successiu dels requisits següents: a) Superar el procés selectiu b) Nomenament per l’autoritat competent (publicat al corresponent diari oficial) c) Acatament de la constitució i el estatut d’autonomia d) Prendre possessió en el termini que s’estableixi De tots aquests requisits només em faltaria l’acte de pressa de possessió que, en aquest cas, s’ha de produir dins el termini d’un mes comptador des del dia següent a la publicació al DOGC del nomenament. (base 11.4 de la convocatòria)"
    },
    {
        id: "suposit_c_oberta_2",
        seccio: "SUPÒSIT C: GESTIÓ DE PERSONAL",
        pregunta: "Em podran ser reconegudes retribucions bàsiques (triennis) pels serveis anteriors previs a la condició de funcionari de carrera? Quants triennis em correspondrien?",
        pista: "Aplica l'art. 25.2 del TREBEP tenint en compte els 5 anys i 4 mesos de serveis com a interí/na en el subgrup C2.",
        respostaCorrecta: "Efectivament em seran reconeguts com a funcionari/a de carrera els mateixos triennis que tenia reconeguts com a funcionari interí, a l’empara del que disposa l’article 25.2 del TREBEP. En total em serà reconegut 1 trienni com a auxiliar administratiu (subgrup c2), pels serveis de 5 anys i 4 mesos prestats com a interí/na."
    },
    {
        id: "suposit_c_oberta_3",
        seccio: "SUPÒSIT C: GESTIÓ DE PERSONAL",
        pregunta: "Segons l’article 23 del TREBEP, les retribucions bàsiques que et correspon percebre s’estableixen a la Llei de Pressupostos Generals de l’Estat.",
        pista: "Diferencia entre sou/triennis (fixats per la LPGE) i el paper del Consell Social de la UPC respecte a les retribucions complementàries (art. 216 Estatuts UPC).",
        // Definim sub-preguntes independents
        subpreguntes: [
            {
                id_sub: "a",
                enunciat: "1. Quins conceptes es consideren com a retribucions bàsiques?",
                respostaCorrecta: "Les retribucions bàsiques es fixen a la Llei de Pressupostos Generals de l’Estat i estan integrades única i exclusivament pel sou assignat a cada grup de classificació professional i pels triennis."
            },
            {
                id_sub: "b",
                enunciat: "1. La UPC pot modificar l’import d’aquestes retribucions per al PAS funcionari?",
                respostaCorrecta: "El sou és el que s’assigna a la llei a cada grup o subgrup i els triennis que consisteixen en una quantia que serà igual per a cada grup o subgrup. Com a conseqüència de tot el qual, la UPC no pot establir cap retribució bàsica per al seu personal ni modificar l’import que fixa la LPGE per a cada anualitat.."
            },
            {
                id_sub: "c",
                enunciat: "2. Podria modificar les retribucions complementàries del PAS funcionari?",
                respostaCorrecta: "Pel contrari i en virtut del que estableix l’article 216 dels Estatuts de la UPC, si que podria modificar les retribucions complementàries per al PAS funcionari, en el sentit que el personal d’administració i serveis percep les retribucions a càrrec del pressupost de la UPC i és el Consell Social qui aprova cada any aquestes retribucions, juntament amb les relacions de lloscs de treball corresponents i d’acord amb la normativa vigent."
            },
        ]
    },
    {
        id: "suposit_c_oberta_4",
        seccio: "SUPÒSIT C: GESTIÓ DE PERSONAL",
        pregunta: "Indiqui alguns dels principals trets especificats com a deures dels empleats públics i constitutius del Codi de Conducta (art. 53 TREBEP). Com a mínim 3.",
        pista: "Estructures principis ètics i de conducta (ex: objectivitat, neutralitat, transparència, imparcialitat, eficàcia...).",
        respostaCorrecta: "L’article 53 del TREBEP, estableix que els empleats públics hauran de desenvolupar amb diligència les tasques que tinguin encomanades i vetllar pels interessos generals amb subjecció a l’ordenament jurídic i han d’actuar de conformitat amb els principis següents:  objectivitat,  integritat,  neutralitat,  responsabilitat,  imparcialitat,  confidencialitat,  dedicació al servei públic,  transparència,  exemplaritat,  austeritat,  accessibilitat,  eficàcia,  honradesa,  promoció de l’entorn cultural i mediambiental i  respecte a la igualtat entre dones i homes, que inspiren el Codi de Conducta dels empleats públics configurat per princ"
    }
];

// Opcional si no fas servir reserves en aquest arxiu
const preguntesReserva = [];