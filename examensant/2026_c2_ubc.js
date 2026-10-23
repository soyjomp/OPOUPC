const preguntesObligatories = [
    {
        id: 1,
        pregunta: "Quina és la finalitat principal del Portal de la Transparència?",
        opcions: [
            { text: "Permetre la presentació de sol·licituds presencials", correcte: false },
            { text: "Centralitzar la informació publicada per garantir la transparència de l’activitat pública", correcte: true },
            { text: "Publicar únicament la normativa vigent", correcte: false },
            { text: "Gestionar els expedients administratius interns", correcte: false }
        ]
    },
    {
        id: 2,
        pregunta: "La competència administrativa és, segons l’art. 8.1 de la Llei 40/2015 per norma general:",
        opcions: [
            { text: "Renunciable en qualsevol moment.", correcte: false },
            { text: "Irrenunciable i s'ha d'exercir pels òrgans que la tinguin atribuïda com a pròpia.", correcte: true },
            { text: "Cedible mitjançant contracte privat.", correcte: false },
            { text: "Opcional segons el criteri del titular de l'òrgan.", correcte: false }
        ]
    },
    {
        id: 3,
        pregunta: "Quin és el règim general del silenci administratiu en procediments iniciats a sol·licitud de l’interessat?",
        opcions: [
            { text: "Silenci negatiu", correcte: false },
            { text: "Silenci positiu", correcte: true },
            { text: "No produeix efectes", correcte: false },
            { text: "Depèn sempre de la voluntat de l’Administració", correcte: false }
        ]
    },
    {
        id: 4,
        pregunta: "Com s’han de formalitzar els actes administratius amb caràcter general?",
        opcions: [
            { text: "Verbalment, llevat dels casos expressament previstos", correcte: false },
            { text: "Per escrit", correcte: true },
            { text: "Sempre mitjançant publicació oficial", correcte: false },
            { text: "Mitjançant resolució oral ratificada posteriorment", correcte: false }
        ]
    },
    {
        id: 5,
        pregunta: "Segons l’article 16 del RGPD, què pot exigir l’interessat mitjançant el dret de rectificació?",
        opcions: [
            { text: "Actualitzar les dades cada any.", correcte: false },
            { text: "Rectificar dades inexactes sense demora.", correcte: true },
            { text: "Canviar l’ordre del cognoms, sense el consentiment del pare.", correcte: false },
            { text: "Limitar l’accés del responsable al tractament.", correcte: false }
        ]
    },
    {
        id: 6,
        pregunta: "D’acord amb l’art. 9 de la Llei 19/2014 de transparència, cal publicar informació relativa a:",
        opcions: [
            { text: "Els procediments disciplinaris interns", correcte: false },
            { text: "L’estructura organitzativa i les funcions dels òrgans", correcte: true },
            { text: "Només els càrrecs electes", correcte: false },
            { text: "Exclusivament els òrgans col·legiats", correcte: false }
        ]
    },
    {
        id: 7,
        pregunta: "Segons l’art. 31.2 de la Llei 39/2015, com es computen els terminis si es presenta un document en dia inhàbil?",
        opcions: [
            { text: "Es considera presentat a la primera hora del primer dia hàbil següent.", correcte: true },
            { text: "El document es rebutja automàticament.", correcte: false },
            { text: "Es considera presentat el mateix dia inhàbil.", correcte: false },
            { text: "El termini comença des del moment de la signatura.", correcte: false }
        ]
    },
    {
        id: 8,
        pregunta: "Segons l’art. 43.2 Llei 39/2015, què passa si l'interessat no accedeix a la notificació transcorreguts 10 dies naturals?",
        opcions: [
            { text: "La notificació s'anul·la.", correcte: false },
            { text: "S'entén que la notificació ha estat rebutjada i es continua el procediment.", correcte: true },
            { text: "L'Administració ha d'enviar obligatòriament una carta en paper.", correcte: false },
            { text: "Es prorroga el termini 10 dies més.", correcte: false }
        ]
    },
    {
        id: 9,
        pregunta: "Segons l’article 4 del Reglament (UE) 2016/679 del Parlament Europeu i del Consell, de 27 d’abril del 2016, què són les dades personals?",
        opcions: [
            { text: "Informació que identifica o pot identificar una persona física.", correcte: true },
            { text: "Només dades econòmiques que surten a la declaració d’hisenda.", correcte: false },
            { text: "Informació sobre empreses i clients.", correcte: false },
            { text: "Només identificadors en línia.", correcte: false }
        ]
    },
    {
        id: 10,
        pregunta: "D’acord amb l’EBEP, els empleats públics tenen dret a la promoció professional:",
        opcions: [
            { text: "Sí, tots els empleats públics tenen dret a la promoció professional", correcte: true },
            { text: "Sí, només els funcionaris de carrera i personal laboral fix.", correcte: false },
            { text: "Sí, només els funcionaris.", correcte: false },
            { text: "Sí, tots els funcionaris de carrera.", correcte: false }
        ]
    },
    {
        id: 11,
        pregunta: "D’acord el que preveu l’article 88 del Decret Legislatiu 1/1997, de 31 d’octubre, pel qual s’aprova la refosa en un Text únic dels preceptes de determinats textos legals vigents a Catalunya en matèria de funció pública, un funcionari es declarat en situació de serveis especials quan:",
        opcions: [
            { text: "Quan sigui nomenat president d'una empresa amb capital públic.", correcte: false },
            { text: "Sempre que ocupi un càrrec electiu en una administració local.", correcte: false },
            { text: "Quan sigui nomenat per ocupar un càrrec polític a la Generalitat.", correcte: true },
            { text: "Les respostes a, b i c són correctes.", correcte: false }
        ]
    },
    {
        id: 12,
        pregunta: "Segons la Llei de funció pública de Catalunya, els llocs reservats a funcionaris s’han de proveir per:",
        opcions: [
            { text: "Concurs, concurs oposició o lliure designació.", correcte: false },
            { text: "Concurs o lliure designació.", correcte: true },
            { text: "Concurs, lliure designació o concurs eventual.", correcte: false },
            { text: "Proves selectives, concurs o lliure designació.", correcte: false }
        ]
    },
    {
        id: 13,
        pregunta: "Quina afirmació descriu correctament què és una signatura electrònica?",
        opcions: [
            { text: "Un codi numèric que només poden utilitzar les administracions públiques.", correcte: false },
            { text: "Un conjunt de dades en paper que una persona utilitza per identificar-se.", correcte: false },
            { text: "Dades en format digital annexes a altres dades electròniques que una persona utilitza per signar.", correcte: true },
            { text: "Un sistema exclusiu per validar documents mitjançant empremta dactilar.", correcte: false }
        ]
    },
    {
        id: 14,
        pregunta: "Quina acció busca donar suport directe a col·lectius feministes i LGTBIQ+?",
        opcions: [
            { text: "Revisió de biblioteques digitals.", correcte: false },
            { text: "Creació del grup de treball d’estudiantat.", correcte: false },
            { text: "Donar suport i recursos als col·lectius feministes i LGTBIQ+.", correcte: true },
            { text: "Implantar lavabos unipersonals.", correcte: false }
        ]
    },
    {
        id: 15,
        pregunta: "D’acord amb l’article 38 de la llei 31/1995, de 8 de novembre, de prevenció de riscos laborals, el Comitè de seguretat i salut, com a òrgan de participació e l’empresa dels treballadors en matèria de prevenció de riscos laborals:",
        opcions: [
            { text: "És un òrgan paritari entre empresa i treballadors.", correcte: true },
            { text: "Ha d’estar format per un mínim de 10 treballadors.", correcte: false },
            { text: "Ha d’estar format exclusivament pels delegats de prevenció.", correcte: false },
            { text: "Ha d’estar format pels delegats sindicals.", correcte: false }
        ]
    },
    {
        id: 16,
        pregunta: "D’acord amb l’article 16 de la llei 31/1995, de 8 de novembre, de prevenció de riscos laborals, què ha d’incloure un pla de prevenció de riscos laborals?",
        opcions: [
            { text: "L’estructura organitzativa, les responsabilitats, les funcions, les pràctiques, els procediments, els processos, el pressupost general de la institució i els recursos necessaris per realitzar l’acció de prevenció de riscos a la institució.", correcte: false },
            { text: "L’estructura organitzativa, les responsabilitats, les funcions, les pràctiques, els procediments, els processos, els plànols dels edificis i els recursos necessaris per realitzar l’acció de prevenció de riscos a la institució.", correcte: false },
            { text: "L’estructura organitzativa, les responsabilitats, les funcions, les pràctiques, els procediments, els processos d’accés als llocs de treball i els recursos necessaris per realitzar l’acció de prevenció de riscos a la institució.", correcte: false },
            { text: "L’estructura organitzativa, les responsabilitats, les funcions, les pràctiques, els procediments, els processos i els recursos necessaris per realitzar l’acció de prevenció de riscos a la institució.", correcte: true }
        ]
    },
    {
        id: 17,
        pregunta: "D’acord el que preveu l’article 50 del Decret Legislatiu 1/1997, de 31 d’octubre, pel qual s’aprova la refosa en un Text únic dels preceptes de determinats textos legals vigents a Catalunya en matèria de funció pública, la selecció per concurs",
        opcions: [
            { text: "És el sistema habitual per adquirir la condició de funcionari.", correcte: false },
            { text: "És un sistema que només es pot utilitzar amb caràcter excepcional.", correcte: true },
            { text: "És el sistema habitual per proveir places especials del Grup A1.", correcte: false },
            { text: "És un sistema excepcional per a places del grup C2.", correcte: false }
        ]
    },
    {
        id: 18,
        pregunta: "Quin instrument internacional és especialment rellevant per abordar les violències masclistes i orientar els protocols universitaris de prevenció i reparació?",
        opcions: [
            { text: "Convenció sobre l’Eliminació de Totes les Formes de Discriminació contra la Dona (CEDAW)", correcte: false },
            { text: "Principis de Yogyakarta.", correcte: false },
            { text: "Conveni d’Istanbul (2011).", correcte: true },
            { text: "Directiva 2006/54/CE.", correcte: false }
        ]
    },
    {
        id: 19,
        pregunta: "L’adreça electrònica disponible per als ciutadans a través de les xarxes de telecomunicacions, la titularitat, gestió i administració de la qual correspon a una Administració pública es denomina:",
        opcions: [
            { text: "Canal electrònic.", correcte: false },
            { text: "Portal electrònic.", correcte: false },
            { text: "Seu electrònica.", correcte: true },
            { text: "Direcció electrònica.", correcte: false }
        ]
    },
    {
        id: 20,
        pregunta: "Segons la Llei 19/2014, el Portal de la Transparència ha de garantir que la informació sigui:",
        opcions: [
            { text: "Només accessible al personal funcionari.", correcte: false },
            { text: "Reservada i confidencial.", correcte: false },
            { text: "Accessible de manera fàcil, clara i comprensible.", correcte: true },
            { text: "Disponible exclusivament mitjançant sol·licitud prèvia.", correcte: false }
        ]
    },
    {
        id: 21,
        pregunta: "D’acord amb l’article 19 de la llei 31/1995, de 8 de novembre, de prevenció de riscos laborals",
        opcions: [
            { text: "L’empresari ha de garantir que cada treballador rebi una formació teòrica i pràctica, en matèria preventiva, tant en el moment de la seva contractació com quan es produeixin canvis en les funcions que desenvolupi o s’introdueixin noves tecnologies o canvis en els equips de treball. Aquesta formació s’haurà d’impartir sempre fora de la jornada de treball.", correcte: false },
            { text: "L’empresari ha de garantir que cada treballador rebi una formació teòrica i pràctica, en matèria preventiva, tant en el moment de la seva contractació com quan es produeixin canvis en les funcions que desenvolupi o s’introdueixin noves tecnologies o canvis en els equips de treball. Aquesta formació s’haurà d’impartir sempre que sigui possible, dintre de la jornada de treball", correcte: false },
            { text: "L’empresari ha de garantir que cada treballador rebi una formació teòrica i pràctica, en matèria preventiva, en el moment de la seva contractació, si bé no és imprescindible quan s’introdueixin noves tecnologies o canvis en els equips de treball. Aquesta formació s’haurà d’impartir sempre fora de la jornada de treball.", correcte: false },
            { text: "L’empresari ha de garantir que cada treballador rebi una formació teòrica i pràctica, en matèria preventiva, en el moment de la seva contractació, si bé no és imprescindible quan s’introdueixin noves tecnologies o canvis en els equips de treball. Aquesta formació s’haurà d’impartir, sempre que sigui possible, dintre de la jornada de treball.", correcte: true }
        ]
    },
    {
        id: 22,
        pregunta: "Segons la llei 39/2015, quin element de l'acte administratiu fa referència a l'òrgan que té la potestat legal per dictar-lo?",
        opcions: [
            { text: "L'element objectiu.", correcte: false },
            { text: "L'element subjectiu.", correcte: true },
            { text: "L'element formal.", correcte: false },
            { text: "L'element causal.", correcte: false }
        ]
    }
];