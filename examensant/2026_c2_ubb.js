const preguntesObligatories = [
    {
        id: 1,
        pregunta: "Segons l’art. 5 de la Llei 19/2014, de 29 de desembre, de transparència, accés a la informació pública i bon govern, els subjectes obligats han de garantir la transparència de la informació pública per mitjà de:",
        opcions: [
            { text: "El règim sancionador.", correcte: false },
            { text: "Un sistema integral de informació i coneixement en format electrònic.", correcte: true },
            { text: "La participació ciutadana directa.", correcte: false },
            { text: "L’auditoria interna de les administracions.", correcte: false }
        ]
    },
    {
        id: 2,
        pregunta: "D’acord el que preveu l’art. 51 del Decret Legislatiu 1/1997, de 31 d’octubre, pel qual s’aprova la refosa en un Text únic dels preceptes de determinats textos legals vigents a Catalunya en matèria de funció pública, en els processos selectius per adquirir la condició de funcionari:",
        opcions: [
            { text: "En la convocatòria respectiva es pot establir una fase de prova, que no tindrà caràcter selectiu.", correcte: false },
            { text: "En la convocatòria respectiva es pot establir una fase de prova, que podrà tenir caràcter selectiu.", correcte: true },
            { text: "En la convocatòria respectiva es pot establir una fase de prova que, necessàriament, haurà d’anar precedida d’un curs de formació.", correcte: false },
            { text: "En la convocatòria respectiva no es pot establir una fase de prova.", correcte: false }
        ]
    },
    {
        id: 3,
        pregunta: "El termini de notificació d’un acte administratiu, segons la Llei 39/2015, del procediment administratiu comú de les administracions públiques, és de:",
        opcions: [
            { text: "5 dies hàbils des que l’acte s’ha dictat.", correcte: false },
            { text: "10 dies hàbils des que l’acte s’ha dictat.", correcte: true },
            { text: "15 dies naturals des que l’acte s’ha dictat.", correcte: false },
            { text: "Un mes des que l’acte s’ha dictat.", correcte: false }
        ]
    },
    {
        id: 4,
        pregunta: "En la delegació de competències, segons l’art. 9 de la Llei 40/2015, del règim jurídic del sector públic, quina de les següents afirmacions és correcta:",
        opcions: [
            { text: "La titularitat de la competència passa a l'òrgan delegat.", correcte: false },
            { text: "Les resolucions dictades s'entenen dictades per l'òrgan delegant.", correcte: true },
            { text: "No és necessari que es publiqui en la UB web ni en cap diari oficial.", correcte: false },
            { text: "Es pot delegar la competència per dictar disposicions de caràcter general", correcte: false }
        ]
    },
    {
        id: 5,
        pregunta: "La substitució, segons l’art. 13 de la Llei 40/2015, del règim jurídic del sector públic:",
        opcions: [
            { text: "Es produeix en casos de vacant, absència o malaltia del titular.", correcte: true },
            { text: "Implica un trasllat definitiu de la titularitat.", correcte: false },
            { text: "Només es pot fer entre òrgans de diferents universitats.", correcte: false },
            { text: "Requereix l'aprovació del Claustre.", correcte: false }
        ]
    },
    {
        id: 6,
        pregunta: "L’acte pel qual un òrgan superior assumeix un assumpte d’un inferior, segons l’art. 10 de la Llei 40/2015, del règim jurídic del sector públic, s’anomena:",
        opcions: [
            { text: "Delegació.", correcte: false },
            { text: "Avocació.", correcte: true },
            { text: "Substitució.", correcte: false },
            { text: "Encomana de gestió.", correcte: false }
        ]
    },
    {
        id: 7,
        pregunta: "D’acord amb l’art. 45 de la Llei 39/2015, del procediment administratiu comú de les administracions públiques, en tot cas els actes administratius seran objecte de publicació:",
        opcions: [
            { text: "Sempre que ho decideixi l’Administració.", correcte: false },
            { text: "Quan l’acte sigui desfavorable.", correcte: false },
            { text: "Quan l’acte tingui una pluralitat indeterminada de destinataris.", correcte: true },
            { text: "Només en procediments sancionadors.", correcte: false }
        ]
    },
    {
        id: 8,
        pregunta: "Quina és la finalitat principal del Portal de la Transparència d’acord amb la Llei 19/2014, de 29 de desembre, de transparència, accés a la informació pública i bon govern?",
        opcions: [
            { text: "Permetre la presentació de sol·licituds presencials.", correcte: false },
            { text: "Centralitzar la informació publicada per garantir la transparència de l’activitat pública.", correcte: true },
            { text: "Publicar únicament la normativa vigent.", correcte: false },
            { text: "Gestionar els expedients administratius interns.", correcte: false }
        ]
    },
    {
        id: 9,
        pregunta: "Quan es consideren vàlids els actes administratius, amb caràcter general, d’acord amb l’art. 39 de la Llei 39/2015, del procediment administratiu comú de les administracions públiques?",
        opcions: [
            { text: "Quan es publiquen al BOE.", correcte: false },
            { text: "Quan es notifiquen als interessats.", correcte: false },
            { text: "Des del moment en què es dicten.", correcte: true },
            { text: "Quan finalitza el procediment.", correcte: false }
        ]
    },
    {
        id: 10,
        pregunta: "Segons l’art. 41, de la Llei 39/2015, del procediment administratiu comú de les administracions públiques, quin és el mitjà preferent per a la notificació dels actes administratius?",
        opcions: [
            { text: "El correu postal certificat.", correcte: false },
            { text: "La publicació al diari oficial.", correcte: false },
            { text: "Els mitjans electrònics.", correcte: true },
            { text: "El tauler d’anuncis administratiu.", correcte: false }
        ]
    },
    {
        id: 11,
        pregunta: "D’acord amb l’art. 22 del Reial Decret 5/2015, de 30 d’octubre, pel qual s’aprova el text refós de la Llei de l’Estatut Bàsic de l’Empleat públic, les retribucions dels funcionaris es classifiquen en:",
        opcions: [
            { text: "Retribucions bàsiques i complementàries.", correcte: true },
            { text: "Retribucions assignades a cada Grup o Subgrup i triennis.", correcte: false },
            { text: "Retribucions assignades a cada Grup o Subgrup, triennis i complements especificats per cada administració.", correcte: false },
            { text: "Retribucions bàsiques, complementàries i serveis extraordinaris", correcte: false }
        ]
    },
    {
        id: 12,
        pregunta: "Els defectes de forma, segons l’art. 48 Llei 39/2015, del procediment administratiu comú de les administracions públiques, determinaran l'anul·labilitat de l'acte quan:",
        opcions: [
            { text: "El signi un funcionari en pràctiques.", correcte: false },
            { text: "Manqui de firma electrònica.", correcte: false },
            { text: "Manqui dels requisits formals indispensables per assolir la seva fi o produeixi indefensió.", correcte: true },
            { text: "Sempre, qualsevol error formal invalida l'acte", correcte: false }
        ]
    },
    {
        id: 13,
        pregunta: "D’acord amb l’art. 8 del Reial Decret 5/2015, de 30 d’octubre, pel qual s’aprova el text refós de la Llei de l’Estatut Bàsic de l’Empleat públic, com es classifiquen els empleats públics:",
        opcions: [
            { text: "Funcionaris de carrera, funcionaris interins, personal laboral fix i personal eventual", correcte: false },
            { text: "Funcionaris de carrera, funcionaris interins, personal laboral fix, per temps indefinit o temporal i personal eventual", correcte: true },
            { text: "Funcionaris de carrera, funcionaris interins i personal laboral fix.", correcte: false },
            { text: "Funcionaris de carrera, funcionaris interins i personal eventual.", correcte: false }
        ]
    },
    {
        id: 14,
        pregunta: "Què és el CSV en la signatura electrònica",
        opcions: [
            { text: "Codi Segur de Verificació.", correcte: true },
            { text: "Codi Sintàctic de Vigilància.", correcte: false },
            { text: "Codi Segur Vigent.", correcte: false },
            { text: "Codi Simple de Verificació.", correcte: false }
        ]
    },
    {
        id: 15,
        pregunta: "D’acord el que preveu l’art. 62 del Decret Legislatiu 1/1997, de 31 d’octubre, pel qual s’aprova la refosa en un Text únic dels preceptes de determinats textos legals vigents a Catalunya en matèria de funció pública, els concursos de provisió poden ser:",
        opcions: [
            { text: "Generals o específics.", correcte: true },
            { text: "Genèrics o específics.", correcte: false },
            { text: "Generals o especials.", correcte: false },
            { text: "Genèrics o especials.", correcte: false }
        ]
    },
    {
        id: 16,
        pregunta: "El Registre Electrònic General, d’acord amb l’art. 31 Llei 39/2015, del procediment administratiu comú de les administracions públiques, ha de permetre presentar documents:",
        opcions: [
            { text: "De dilluns a divendres en horari de 9h a 14h.", correcte: false },
            { text: "Tots els dies de l'any durant les 24 hores.", correcte: true },
            { text: "Només els dies que siguin hàbils a la seu de l'òrgan competent.", correcte: false },
            { text: "Únicament si no pesen més de 1 MB.", correcte: false }
        ]
    },
    {
        id: 17,
        pregunta: "D’acord amb l’art. 35 de la llei 31/1995, de 8 de novembre, de prevenció de riscos laborals, en cas d’una institució amb més de 4.001 treballadors, quants delegats de prevenció ha de tenir?",
        opcions: [
            { text: "6", correcte: false },
            { text: "7", correcte: false },
            { text: "8", correcte: true },
            { text: "9", correcte: false }
        ]
    },
    {
        id: 18,
        pregunta: "Segons la Llei 19/2014, de 29 de desembre, de transparència, accés a la informació pública i bon govern el Portal de la Transparència ha de garantir que la informació sigui:",
        opcions: [
            { text: "Només accessible al personal funcionari.", correcte: false },
            { text: "Reservada i confidencial.", correcte: false },
            { text: "Accessible de manera fàcil i gratuïta.", correcte: true },
            { text: "Disponible exclusivament mitjançant sol·licitud prèvia.", correcte: false }
        ]
    },
    {
        id: 19,
        pregunta: "D’acord amb l’art. 16 de la Llei 39/2015, del procediment administratiu comú de les administracions públiques, el rebut que emet automàticament el registre electrònic, ha de contenir, entre d’altres:",
        opcions: [
            { text: "La fotografia del sol·licitant.", correcte: false },
            { text: "El número de registre, la data i l'hora de presentació i una còpia de l'escrit.", correcte: true },
            { text: "L'adreça física de l'òrgan que ha de resoldre.", correcte: false },
            { text: "La identificació de la persona funcionària que ha validat l'entrada.", correcte: false }
        ]
    },
    {
        id: 20,
        pregunta: "Segons l’art. 9 de la Llei 19/2014, de 29 de desembre, de transparència, accés a la informació pública i bon govern quina informació, s’ha de fer pública mitjançant el règim de transparència?",
        opcions: [
            { text: "Només la informació pressupostària.", correcte: false },
            { text: "La informació sobre l’organització institucional i l’estructura administrativa.", correcte: true },
            { text: "Exclusivament la normativa amb rang de llei.", correcte: false },
            { text: "Només els contractes menors.", correcte: false }
        ]
    },
    {
        id: 21,
        pregunta: "Segons l’art. 14 Llei 39/2015, del procediment administratiu comú de les administracions públiques, qui dels següents està obligat a relacionar-se a través de mitjans electrònics amb les Administracions Públiques?",
        opcions: [
            { text: "Totes les persones físiques majors d'edat.", correcte: false },
            { text: "Les persones jurídiques i les entitats sense personalitat jurídica.", correcte: true },
            { text: "Només els funcionaris públics en la seva vida privada.", correcte: false },
            { text: "Únicament les grans empreses amb més de 50 treballadors.", correcte: false }
        ]
    },
    {
        id: 22,
        pregunta: "Quin principi permet dirigir i controlar òrgans inferiors, segons l’art. 3.1 de la Llei 40/2015, del règim jurídic del sector públic?",
        opcions: [
            { text: "Coordinació.", correcte: false },
            { text: "Descentralització.", correcte: false },
            { text: "Jerarquia.", correcte: true },
            { text: "Desconcentració.", correcte: false }
        ]
    },
    {
        id: 23,
        pregunta: "Quina funció ha de complir un prestador o prestadora de serveis de confiança per poder expedir un certificat qualificat?",
        opcions: [
            { text: "Enviar automàticament el certificat per correu postal a la persona sol·licitant.", correcte: false },
            { text: "Verificar la identitat de la persona a qui s’expedeix el certificat qualificat.", correcte: true },
            { text: "Emmagatzemar totes les signatures electròniques durant pocs dies.", correcte: false },
            { text: "Autoritzar l’ús de la signatura manual només en tràmits administratius.", correcte: false }
        ]
    },
    {
        id: 24,
        pregunta: "Quina condició fa lícit el tractament de dades personals segons l’art. 6 del Reglament (UE) 2016/679 de 27 d’abril de 2016?",
        opcions: [
            { text: "Que l’interessat hagi donat el seu consentiment.", correcte: true },
            { text: "Que el tractament sigui voluntari per part del responsable.", correcte: false },
            { text: "Que les dades no es considerin sensibles ni interoperables.", correcte: false },
            { text: "Que el tractament tingui finalitats comercials.", correcte: false }
        ]
    },
    {
        id: 25,
        pregunta: "Segons l’art. 1 del Reglament (UE) 2016/679 del Parlament Europeu i del Consell, de 27 d’abril del 2016, què s’hi estableix principalment?",
        opcions: [
            { text: "La prohibició de la circulació de dades personals dins la Unió Europea i els països afins.", correcte: false },
            { text: "Les normes relatives a la protecció de les persones físiques pel que fa al tractament de les dades personals i a la lliure circulació d’aquestes dades.", correcte: true },
            { text: "Les normes sobre el tractament exclusiu de dades de les administracions públiques catalanes i estatals.", correcte: false },
            { text: "La regulació del tractament de dades únicament per motius de seguretat nacional.", correcte: false }
        ]
    },
    {
        id: 26,
        pregunta: "D’acord amb l’art. 1 del Reial Decret 5/2015, de 30 d’octubre, pel qual s’aprova el text refós de la Llei de l’Estatut Bàsic de l’Empleat públic, aquesta norma:",
        opcions: [
            { text: "S'aplica exclusivament al personal subjecte al règim funcionarial que presta serveis a qualsevol administració inclosa en el seu àmbit d’aplicació.", correcte: false },
            { text: "S'aplica exclusivament al personal laboral que presta serveis a qualsevol administració inclosa en el seu àmbit d’aplicació.", correcte: false },
            { text: "Estableix les bases del règim estatutari, tant dels funcionaris públics com del personal laboral que presta serveis a qualsevol administració inclosa en el seu àmbit d’aplicació.", correcte: false },
            { text: "Estableix les bases del règim estatutari dels funcionaris públics i determina les normes aplicable del personal laboral que presta serveis a qualsevol administració inclosa en el seu àmbit d’aplicació.", correcte: true }
        ]
    },
    {
        id: 27,
        pregunta: "Un acte dictat per un òrgan manifestament incompetent per raó de la matèria és, segons allò estipulat a l’art. 47 Llei 39/2015, del procediment administratiu comú de les administracions públiques:",
        opcions: [
            { text: "Anul·lable.", correcte: false },
            { text: "Nul de ple dret.", correcte: true },
            { text: "Vàlid, però objecte de revisió d'ofici.", correcte: false },
            { text: "Irrellevant per al dret administratiu.", correcte: false }
        ]
    },
    {
        id: 28,
        pregunta: "D’acord el que preveu l’art. 46 del Decret Legislatiu 1/1997, de 31 d’octubre, pel qual s’aprova la refosa en un Text únic dels preceptes de determinats textos legals vigents a Catalunya en matèria de funció pública, per a l’accés a les escales de funcionaris es poden fer servir els següents procediments:",
        opcions: [
            { text: "Oposició, concurs oposició i concurs", correcte: true },
            { text: "Oposició, lliure designació i concurs", correcte: false },
            { text: "Oposició, concurs oposició, concurs i lliure designació", correcte: false },
            { text: "Oposició, concurs oposició i lliure designació", correcte: false }
        ]
    },
    {
        id: 29,
        pregunta: "D’acord amb l’art. 15 de la llei 31/1995, de 8 de novembre, de prevenció de riscos laborals, quins dels següents principis no s’haurà d’aplicar a les mesures que integren el deure general de prevenció:",
        opcions: [
            { text: "Evitar riscos.", correcte: false },
            { text: "Avaluar riscos que no es puguin evitar.", correcte: false },
            { text: "Adoptar mesures que anteposin la protecció individual a la col·lectiva.", correcte: true },
            { text: "Donar les corresponents instruccions als treballadors.", correcte: false }
        ]
    },
    {
        id: 30,
        pregunta: "Quina directiva europea estableix el principi d’igualtat de retribució entre dones i homes?",
        opcions: [
            { text: "Directiva 2006/54/CE.", correcte: false },
            { text: "Directiva (UE) 2019/1158.", correcte: false },
            { text: "Directiva 2000/78/CE.", correcte: false },
            { text: "Directiva (UE) 2023/970.", correcte: true }
        ]
    }
];