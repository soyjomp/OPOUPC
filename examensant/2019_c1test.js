const preguntesObligatories = [
    {
        id: 1,
        pregunta: "La Universitat Politècnica de Catalunya s’organitza en:",
        opcions: [
            { text: "Unitats estructurals (unitats acadèmiques i unitats d’administració i serveis)", correcte: true },
            { text: "Serveis, Seccions i Negociats", correcte: false },
            { text: "Serveis generals i serveis territorials", correcte: false }
        ]
    },
    {
        id: 2,
        pregunta: "Són unitats acadèmiques de la UPC:",
        opcions: [
            { text: "El consell de Govern i el Claustre", correcte: false },
            { text: "Els serveis comuns acadèmics de la UPC", correcte: false },
            { text: "Els centres docents, els departaments, els instituts universitaris de recerca i l’Escola de Doctorat", correcte: true }
        ]
    },
    {
        id: 3,
        pregunta: "Són unitats d’administració i serveis:",
        opcions: [
            { text: "Els serveis universitaris i les unitats transversals de gestió", correcte: true },
            { text: "Els serveis, les seccions i els negociats", correcte: false },
            { text: "Totes les que disposen de personal d’administració i serveis", correcte: false }
        ]
    },
    {
        id: 4,
        pregunta: "Les unitats acadèmiques han d’elaborar anualment:",
        opcions: [
            { text: "Una planificació estratègica", correcte: false },
            { text: "Una memòria amb la informació que determini el Consell de Govern i el Consell Social", correcte: true },
            { text: "Un informe de prospectiva sobre el nombre d’estudiants que demanaran les seves titulacions", correcte: false }
        ]
    },
    {
        id: 5,
        pregunta: "La Universitat Politècnica de Catalunya pot organitzar campus territorials o per àmbits de coneixement:",
        opcions: [
            { text: "Que agrupin oficines de suport a la gestió de la recerca", correcte: false },
            { text: "Que agrupen diverses unitats estructurals o parts definides d’aquestes unitats", correcte: true },
            { text: "Que agrupin les àrees de coneixement", correcte: false }
        ]
    },
    {
        id: 6,
        pregunta: "Les Biblioteques i Arxius de la UPC són:",
        opcions: [
            { text: "Unitats bàsiques de la UPC", correcte: false },
            { text: "Unitat funcionals acadèmiques de la UPC", correcte: false },
            { text: "Centres de recursos d’informació científica, tècnica, artística i humanística que donen suport a la comunitat universitària en la recerca, l’aprenentatge i la formació", correcte: true }
        ]
    },
    {
        id: 7,
        pregunta: "La creació, modificació i supressió de departaments correspon:",
        opcions: [
            { text: "Al Consell de Govern, amb informe previ del Consell Social", correcte: true },
            { text: "Al departament de la Generalitat competent en matèria d’universitats", correcte: false },
            { text: "Al claustre a proposta del rector", correcte: false }
        ]
    },
    {
        id: 8,
        pregunta: "Les unitats acadèmiques encarregades de l’organització dels ensenyaments que condueixen a l’obtenció de títols de grau i màster universitari són:",
        opcions: [
            { text: "Els centres docents", correcte: true },
            { text: "Els departaments", correcte: false },
            { text: "Els campus universitaris", correcte: false }
        ]
    },
    {
        id: 9,
        pregunta: "L’escola de Doctorat és la unitat encarregada de:",
        opcions: [
            { text: "Assegurar que els estudis de doctorat es desenvolupen en els espais i en les condicions adequades", correcte: false },
            { text: "Garantir que la menció de doctor europeu es consigna al revers dels títols oficials", correcte: false },
            { text: "L’organització, coordinació i supervisió dels ensenyaments que condueixen a l’obtenció del títol de doctor o doctora.", correcte: true }
        ]
    },
    {
        id: 10,
        pregunta: "Les unitats de suport, de gestió i de servei a la comunitat universitària són les encarregades de:",
        opcions: [
            { text: "Dur a terme les funcions docents i de recerca", correcte: false },
            { text: "La prestació dels serveis necessaris per dur a terme l’activitat acadèmica", correcte: true },
            { text: "Les funcions derivades de les polítiques generals de la UPC", correcte: false }
        ]
    },
    {
        id: 11,
        pregunta: "La creació, modificació i supressió d’unitats d’administració i serveis, correspon:",
        opcions: [
            { text: "Al Consell de Govern, a proposta del rector o rectora", correcte: true },
            { text: "Al Consell de Direcció, a proposta del Gerent/a", correcte: false },
            { text: "Al Consell Social, amb informe favorable del Consell de Govern", correcte: false }
        ]
    },
    {
        id: 12,
        pregunta: "Les unitats transversals de gestió són:",
        opcions: [
            { text: "Unitats d’administració i serveis que s’encarreguen de la gestió d’infraestructures de campus o presten serveis a diverses unitats", correcte: true },
            { text: "Unitats gestores de les activitats i funcions no encomanades específicament a cap altre unitat", correcte: false },
            { text: "Unitats d’implantació exclusivament territorial, amb funcions delegades de la gerència", correcte: false }
        ]
    },
    {
        id: 13,
        pregunta: "La relació de la Universitat Politècnica de Catalunya amb cada una de les entitats del Grup UPC es regula, mitjançant:",
        opcions: [
            { text: "Un contracte programa", correcte: true },
            { text: "Una resolució", correcte: false },
            { text: "Un contracte laboral", correcte: false }
        ]
    },
    {
        id: 14,
        pregunta: "Referent a l’adscripció de centres docents:",
        opcions: [
            { text: "No és possible adscriure centres docents a la UPC, llevat impuls del departament de la Generalitat amb competència en universitats", correcte: false },
            { text: "Es poden adscriure a la UPC centres docents d’educació superior de titularitat pública o privada", correcte: true },
            { text: "Només es poden adscriure a la UPC centres docents de titularitat pública", correcte: false }
        ]
    },
    {
        id: 15,
        pregunta: "Són òrgans col·legiats generals de la UPC:",
        opcions: [
            { text: "La federació de Juntes de centres docents", correcte: false },
            { text: "Només el Claustre, el Consell Social i el Consell de Govern", correcte: false },
            { text: "El Consell Social, el Consell de Govern, el Claustre Universitari, el Consell Acadèmic, la Comissió de Selecció i d’Avaluació de Personal Docent i Investigador, la Comissió d’Apel·lacions, la Junta Electoral i la Comissió de Formació Permanent", correcte: true }
        ]
    },
    {
        id: 16,
        pregunta: "Els òrgans unipersonals generals de la UPC són:",
        opcions: [
            { text: "El rector o la rectora, els vicerectors i les vicerectores, el secretari o secretaria general, el gerent o gerent i els delegats i delegades del rector o rectora", correcte: true },
            { text: "Els esmentats anteriorment i també tots els/les Caps de Servei i els/les Caps de les Unitats Transversals de Gestió", correcte: false },
            { text: "El rector o rectora, els vicerectors i les vicerectores i els degans i les deganes dels centres docents", correcte: false }
        ]
    },
    {
        id: 17,
        pregunta: "Els òrgans col·legiats de les unitats acadèmiques són, com a mínim:",
        opcions: [
            { text: "El Consell i la Junta", correcte: false },
            { text: "Les juntes de centre docent, els consells de departaments, els consells d’instituts universitaris de recerca i la Junta de l’Escola de Doctorat.", correcte: true },
            { text: "El Consell, la Junta, el director/a o degà/na i el/la secretari/a", correcte: false }
        ]
    },
    {
        id: 18,
        pregunta: "Els acords dels òrgans col·legiats de govern:",
        opcions: [
            { text: "S’han de difondre al sistema universitari català", correcte: false },
            { text: "Han de constar al llibre d’acords i actes de la UPC", correcte: false },
            { text: "S’han de fer constar en l’acta i s’han de publicar d’acord amb la normativa vigent", correcte: true }
        ]
    },
    {
        id: 19,
        pregunta: "El mandat del rector o rectora, els degans o deganes i els directors o directores de les unitats acadèmiques te una durada de:",
        opcions: [
            { text: "Quatre anys", correcte: true },
            { text: "Sis anys", correcte: false },
            { text: "Vuit anys", correcte: false }
        ]
    },
    {
        id: 20,
        pregunta: "Exhaureixen la via administrativa i es poden impugnar directament davant la jurisdicció contenciosa administrativa:",
        opcions: [
            { text: "Les resolucions del rector o rectora i els acords del Consell Social, del Consell de Govern, del Claustre Universitari i de la Junta Electoral", correcte: true },
            { text: "Només les resolucions del rector o rectora", correcte: false },
            { text: "Les resolucions dictades pel rector o rectora informades pel consell de direcció", correcte: false }
        ]
    },
    {
        id: 21,
        pregunta: "Les resolucions dels restants òrgans unipersonals i col·legiats poden ser objecte:",
        opcions: [
            { text: "De recurs contenciós administratiu", correcte: false },
            { text: "De recurs davant el rector o la rectora", correcte: true },
            { text: "De reclamació economicoadministrativa", correcte: false }
        ]
    },
    {
        id: 22,
        pregunta: "El Consell Social és:",
        opcions: [
            { text: "L’òrgan de govern de la Universitat", correcte: false },
            { text: "L’òrgan de la Generalitat de Catalunya encarregar de fiscalitzar la Universitat", correcte: false },
            { text: "L’òrgan de participació de la societat en la Universitat", correcte: true }
        ]
    },
    {
        id: 23,
        pregunta: "L’òrgan de govern de la UPC és:",
        opcions: [
            { text: "El rector/a i el Consell de Direcció", correcte: false },
            { text: "El consell de govern", correcte: true },
            { text: "El secretari/a, el gerent/a i el vicerector/a en cap", correcte: false }
        ]
    },
    {
        id: 24,
        pregunta: "Vetllar perquè les diverses unitats de la UPC compleixin les funcions que li son pròpies, correspon:",
        opcions: [
            { text: "Al rector o rectora", correcte: true },
            { text: "Al gerent/a", correcte: false },
            { text: "Al Consell de Govern", correcte: false }
        ]
    },
    {
        id: 25,
        pregunta: "El màxim òrgan de representació de la comunitat universitària i d’expressió de la posició i les seves aspiracions, és:",
        opcions: [
            { text: "El Claustre Universitari", correcte: true },
            { text: "El Consell Social", correcte: false },
            { text: "El Consell de Govern", correcte: false }
        ]
    },
    {
        id: 26,
        pregunta: "Elaborar i aprovar els Estatuts de la UPC i les seves modificacions, perquè siguin sotmesos a la ratificació dels organismes competents, és funció:",
        opcions: [
            { text: "Del rector o la rectora", correcte: false },
            { text: "Del rector o la rectora i del president o presidenta del Consell Social", correcte: false },
            { text: "Del Claustre Universitari", correcte: true }
        ]
    },
    {
        id: 27,
        pregunta: "Els estudiants i les estudiantes són:",
        opcions: [
            { text: "Membres nats del Claustre Universitari", correcte: false },
            { text: "Membre electius del Claustre Universitari", correcte: true },
            { text: "Membres del Consell de Direcció", correcte: false }
        ]
    },
    {
        id: 28,
        pregunta: "El Claustre universitari s’ha de reunir:",
        opcions: [
            { text: "Una vegada a l’any, en sessió ordinària", correcte: true },
            { text: "En sessió ordinària cada mes", correcte: false },
            { text: "En sessió ordinària i extraordinària cada cop que ho demani 1/3 dels seus membres", correcte: false }
        ]
    },
    {
        id: 29,
        pregunta: "La màxima autoritat acadèmica, que n’exerceix la representació i la direcció, el govern i la gestió de la UPC, és:",
        opcions: [
            { text: "El consell de govern", correcte: false },
            { text: "El secretari/a", correcte: false },
            { text: "El rector o la rectora", correcte: true }
        ]
    },
    {
        id: 30,
        pregunta: "A efectes d’eleccions a rector o rectora, la comunitat universitària es considera dividida en quatre sectors:",
        opcions: [
            { text: "Sector Barcelona (41%), Sector Campus Diagonal-Besos (14%), Sector Castelldefels, Vilanova (24%) i Sector Terrassa i Manresa (11%)", correcte: false },
            { text: "Professors doctors amb vinculació permanent (41%); PDI excloent els anteriors (14%); Estudiants i estudiantes de grau i de màster (24%); Personal d’Administració i Serveis (11%)", correcte: true },
            { text: "Sector enginyeria industria (41%); Sector enginyeria telecomunicacions i informàtica (14%); Sector enginyeria de camins, arquitectura i edificació (24%); Sector medi ambient i sostenibilitat (11%)", correcte: false }
        ]
    },
    {
        id: 31,
        pregunta: "Pot convocar, amb caràcter extraordinari, eleccions a rector o rectora a iniciativa d’un terç dels seus membres i amb l’aprovació dels dos terços:",
        opcions: [
            { text: "El Consell de Govern", correcte: false },
            { text: "El Consell Social", correcte: false },
            { text: "El Claustre Universitari", correcte: true }
        ]
    },
    {
        id: 32,
        pregunta: "El nomenament, l’assignació de funcions i la revocació dels vicerectors o vicerectores corresponen:",
        opcions: [
            { text: "Al rector/a", correcte: true },
            { text: "Són elegits per la comunitat universitària", correcte: false },
            { text: "Al Consell de Govern", correcte: false }
        ],

    },
    {
        id: 33,
        pregunta: "La gestió dels serveis administratius i econòmics de la Universitat correspon:",
        opcions: [
            { text: "Al Consell Social", correcte: false },
            { text: "Al secretari/a", correcte: false },
            { text: "Al gerent o a la gerent", correcte: true }
        ]
    },
    {
        id: 34,
        pregunta: "El Consell Acadèmic és un òrgan d’informació i de consulta del rector, format per:",
        opcions: [
            { text: "El rector/a, els vicerectors/es, el secretari/a general i el gerent/a", correcte: false },
            { text: "Els degans o deganes i els directors o directores de totes les unitats acadèmiques.", correcte: true },
            { text: "Els vicerectors/es, el secretari/a general, el gerent/a i altres membres nomenats pel rector", correcte: false }
        ]
    },
    {
        id: 35,
        pregunta: "La comissió d’apel·lació és l’encarregada:",
        opcions: [
            { text: "De valorar les reclamacions que es fan contra les propostes de les comissions d’accés i també les reclamacions relatives a les altres places de personal docent i investigador", correcte: true },
            { text: "De resoldre tots els recursos d’apel·lació que s’interposen a la Universitat", correcte: false },
            { text: "De resoldre les reclamacions, que han esgotat la via administrativa, que s’interposen contra els informes d’avaluació i actes curriculars", correcte: false }
        ]
    },
    {
        id: 36,
        pregunta: "L’òrgan de govern dels centres docents és:",
        opcions: [
            { text: "El director/a o el degà/na", correcte: false },
            { text: "El secretari/a", correcte: false },
            { text: "La Junta", correcte: true }
        ]
    },
    {
        id: 37,
        pregunta: "L’òrgan de govern del Departament és:",
        opcions: [
            { text: "El director o directora del departament", correcte: false },
            { text: "El Consell de Departament", correcte: true },
            { text: "El Consell Acadèmic", correcte: false }
        ]
    },
    {
        id: 38,
        pregunta: "El director o directora del departament és elegit:",
        opcions: [
            { text: "Pel rector/a, a proposta del Consell de Departament", correcte: false },
            { text: "Pel professorat doctor adscrit al departament", correcte: false },
            { text: "Pel Consell de Departament entre el professorat doctor amb vinculació permanent", correcte: true }
        ]
    },
    {
        id: 39,
        pregunta: "Els doctorands i doctorandes es consideren quant a drets de representació:",
        opcions: [
            { text: "Igual que l’estudiantat de grau i màster", correcte: false },
            { text: "No tenen representació en la UPC", correcte: false },
            { text: "Personal investigador en formació, d’acord amb la normativa vigent", correcte: true }
        ]
    },
    {
        id: 40,
        pregunta: "El Consell de l’Estudiantat és un òrgan:",
        opcions: [
            { text: "De participació de l’estudiantat en el govern de la Universitat", correcte: false },
            { text: "D’assessorament i defensa dels interessos del conjunt de l’ estudiantat", correcte: true },
            { text: "De participació de l’estudiantat en les tasques acadèmiques de la Universitat", correcte: false }
        ]
    },
    {
        id: 41,
        pregunta: "L’autonomia universitària és:",
        opcions: [
            { text: "Una peculiaritat de les universitats Públiques", correcte: false },
            { text: "Un dret fonamental reconegut a la Constitució Espanyola", correcte: true },
            { text: "La capacitat de les universitats públiques i privades d’impartir els cursos, seminaris i activitats acadèmiques que els convingui", correcte: false }
        ]
    },
    {
        id: 42,
        pregunta: "Són funcions de les universitats, entre d’altres:",
        opcions: [
            { text: "La creació, supressió i desenvolupament de la ciència, de la tècnica i de la cultura", correcte: false },
            { text: "La difusió, la valorització i la transferència del coneixement al servei de la cultura, de la qualitat de la vida i del desenvolupament econòmic", correcte: true },
            { text: "La preparació per l’exercici de totes les activitats professionals", correcte: false }
        ]
    },
    {
        id: 43,
        pregunta: "Les universitats estan dotades de:",
        opcions: [
            { text: "Personalitat jurídica", correcte: true },
            { text: "Responsabilitat social limitada", correcte: false },
            { text: "La capacitat d’obrar que els atorga l’administració de les comunitats autònomes", correcte: false }
        ]
    },
    {
        id: 44,
        pregunta: "Les universitats es regeixen:",
        opcions: [
            { text: "Pels seus Estatuts", correcte: false },
            { text: "Pels seus Estatuts i per la Llei Orgànica d’Universitats", correcte: false },
            { text: "Per la Llei Orgànica d’Universitats, pels seus Estatuts i per les normes que dictin l’Estat i les Comunitats Autònomes en l’exercici de les seves respectives competències", correcte: true }
        ]
    },
    {
        id: 45,
        pregunta: "Les universitats públiques estaran integrades per:",
        opcions: [
            { text: "Les Unitats Acadèmiques i de Gestió que recullin els seus Estatuts", correcte: false },
            { text: "Escoles, Facultats, Departaments, Instituts Universitaris de Recerca i Escoles de Doctorat", correcte: true },
            { text: "Només per Escoles i Facultats", correcte: false }
        ]
    },
    {
        id: 46,
        pregunta: "Els departaments són:",
        opcions: [
            { text: "Les unitats de docència i recerca encarregades de coordinar els ensenyaments d’un o diversos àmbits del coneixement en un o més centres", correcte: true },
            { text: "Unitats docents encarregades de la coordinació dels títols propis i dels centres adscrits", correcte: false },
            { text: "Unitats que s’ocupen bàsicament de la contractació dels professors i la seva adscripció a les titulacions oficials", correcte: false }
        ]
    },
    {
        id: 47,
        pregunta: "El Rector de les universitats és nomenat:",
        opcions: [
            { text: "Pel claustre universitari", correcte: false },
            { text: "Pel claustre universitari i per la comunitat universitària", correcte: false },
            { text: "Per l’òrgan corresponent de la Comunitat Autònoma", correcte: true }
        ]
    },
    {
        id: 48,
        pregunta: "La docència és:",
        opcions: [
            { text: "Un dret i un deure del professorat de les universitats que exerciran amb llibertat de càtedra", correcte: true },
            { text: "Un deure del professorat de les universitats", correcte: false },
            { text: "Un dret del professorat de les universitats que exerceixen segons el seu lleial saber i entendre", correcte: false }
        ]
    },
    {
        id: 49,
        pregunta: "Els ensenyaments universitaris oficials s’estructuren en:",
        opcions: [
            { text: "Diplomatura, llicenciatura i doctorat", correcte: false },
            { text: "Grau, postgrau, màster i doctorats", correcte: false },
            { text: "Grau, màster i doctorat", correcte: true }
        ]
    },
    {
        id: 50,
        pregunta: "Per obtenir el doctorat cal:",
        opcions: [
            { text: "Elaborar i aprovar un treball", correcte: false },
            { text: "Elaborar, presentar i aprovar un treball original d’investigació", correcte: true },
            { text: "Elaborar i aprovar un treball de final de grau", correcte: false }
        ]
    },
    {
        id: 51,
        pregunta: "La investigació científica és:",
        opcions: [
            { text: "Una funció addicional a l’ensenyament de la universitat", correcte: false },
            { text: "Fonament essencial de la docència i una eina primordial per al desenvolupament social per mitjà de la transferència de resultats a la societat", correcte: true },
            { text: "No és una funció essencial de la universitat", correcte: false }
        ]
    },
    {
        id: 52,
        pregunta: "El personal docent i investigador de les universitats estarà compost:",
        opcions: [
            { text: "De personal contractat", correcte: false },
            { text: "De personal funcionari i de personal contractat a temps parcial", correcte: false },
            { text: "De personal funcionari dels cossos docents universitaris i de personal contractat", correcte: true }
        ]
    },
    {
        id: 53,
        pregunta: "El personal d’administració i serveis de les universitats està format:",
        opcions: [
            { text: "Per personal funcionari de cossos docents universitaris i personal laboral contractat", correcte: false },
            { text: "Per personal funcionari de les escales pròpies de les universitats, per personal laboral contractat i per personal funcionari que pertanyi als cossos i escales d’altres administracions públiques.", correcte: true },
            { text: "Per personal funcionari de les escales pròpies de les universitats i per funcionaris dels cossos docents universitaris", correcte: false }
        ]
    },
    {
        id: 54,
        pregunta: "Pot acreditar i certificar els títols propis de les universitats de Catalunya:",
        opcions: [
            { text: "El consell de govern de cada universitat", correcte: false },
            { text: "L’Agencia Nacional d’Avaluació de la Qualitat i Acreditació (ANECA)", correcte: false },
            { text: "L’Agencia per a la Qualitat del Sistema Universitari de Catalunya", correcte: true }
        ]
    },
    {
        id: 55,
        pregunta: "Correspon al Consell Social proposar al departament competent en matèria d’universitats, previ informe del consell de govern:",
        opcions: [
            { text: "La implantació o supressió d’ensenyaments conduents a l’obtenció de títols universitaris oficials", correcte: true },
            { text: "La contractació de professors i investigadors d’excel·lència internacional", correcte: false },
            { text: "La creació de centres de recerca adscrits a la universitat", correcte: false }
        ]
    },
    {
        id: 56,
        pregunta: "La Llei 39/2015 de procediment administratiu comú de les administracions públiques i la Llei 40/2015 de règim jurídic del sector públic, estableixen:",
        opcions: [
            { text: "Que les universitats públiques es regiran per la seva normativa específica i supletòriament per les previsions d’aquestes lleis", correcte: true },
            { text: "Que a les universitats públiques els hi són plena i directament aplicables les dues lleis", correcte: false },
            { text: "Que només els hi serà d’aplicació el procediment administratiu comú però no el règim jurídic del sector públic", correcte: false }
        ]
    },
    {
        id: 57,
        pregunta: "Les universitats públiques:",
        opcions: [
            { text: "Tenen la consideració d’administracions públiques", correcte: false },
            { text: "Tenen la consideració d’organismes autònoms de caràcter administratiu", correcte: false },
            { text: "Estan integrades al sector públic institucional", correcte: true }
        ]
    },
    {
        id: 58,
        pregunta: "Quan en una sol·licitud, escrit o comunicació hi hagi varis interessats, les actuacions s’efectuaran amb:",
        opcions: [
            { text: "Cadascú d’ells", correcte: false },
            { text: "El representant o l’interessat que expressament hagin senyalat i, en el seu defecte, amb qui figuri en primer terme", correcte: true },
            { text: "El representant que hagin senyalat. En el seu defecte, se’ls requerirà per tal que en designin un", correcte: false }
        ]
    },
    {
        id: 59,
        pregunta: "Es considera còpia autèntica d’un document públic administratiu o privat:",
        opcions: [
            { text: "La realitzada, qualsevol que sigui el seu suport, pels òrgans competents de les administracions públiques en les que quedi garantida la identitat de l’òrgan que ha realitzat la còpia i el seu contingut", correcte: true },
            { text: "Només aquelles que hagin entrat pel Registre General", correcte: false },
            { text: "Qualsevol còpia del document presentat pels interessats", correcte: false }
        ]
    },
    {
        id: 60,
        pregunta: "Han de ser motivats:",
        opcions: [
            { text: "Tots els actes administratius", correcte: false },
            { text: "Els actes que limitin drets subjectius o interessos legítims", correcte: true },
            { text: "Els actes que concedeixin drets", correcte: false }
        ]
    },
    {
        id: 61,
        pregunta: "Els actes de les administracions públiques subjectes a dret administratiu es presumiran vàlids i produiran efectes:",
        opcions: [
            { text: "Des del mateix dia en què es notifica la resolució", correcte: false },
            { text: "Des de la data en que es dictin, llevat que en ells es disposi una altra cosa", correcte: true },
            { text: "Des del dia en què es va acordar la resolució", correcte: false }
        ]
    },
    {
        id: 62,
        pregunta: "La notificació d’un acte administratiu:",
        opcions: [
            { text: "És una condició jurídica per l’eficàcia de l’acte i actua com a requisit perquè comencin a comptar els terminis per a la seva impugnació", correcte: true },
            { text: "Només té l’efecte que la persona interessada s’assabenti del seu contingut i establir una queixa", correcte: false },
            { text: "No té cap efecte", correcte: false }
        ]
    },
    {
        id: 63,
        pregunta: "Els procediments administratius s’inicien:",
        opcions: [
            { text: "D’ofici o a instància de les administracions públiques", correcte: false },
            { text: "D’ofici o a instància de qualsevol personal", correcte: false },
            { text: "D’ofici o a petició de la persona interessada", correcte: true }
        ]
    },
    {
        id: 64,
        pregunta: "Posen fi a la via administrativa:",
        opcions: [
            { text: "Qualsevol acte administratiu", correcte: false },
            { text: "La resolució dels recursos d’alçada", correcte: true },
            { text: "Les resolucions dels recursos contenciós- administratius", correcte: false }
        ]
    },
    {
        id: 65,
        pregunta: "Les resolucions del rector/a es poden recórrer per mitjà de:",
        opcions: [
            { text: "Recurs d’alçada davant el conseller d’ensenyament de la Generalitat", correcte: false },
            { text: "Reclamació econòmic-administrativa davant el Jutjat del contenciós-administratiu del TSJ de Catalunya", correcte: false },
            { text: "Només son recurribles per mitjà del recurs extraordinari de revisió", correcte: true }
        ]
    },
    {
        id: 66,
        pregunta: "El recurs d’alçada:",
        opcions: [
            { text: "S’interposa davant el superior jeràrquic de l’òrgan que va dictar l’acte administratiu", correcte: false },
            { text: "Es pot interposar davant l’òrgan que va dictar l’acte administratiu recorregut o davant l’òrgan competent per resoldre", correcte: true },
            { text: "S’interposa als tribunals de justícia", correcte: false }
        ]
    },
    {
        id: 67,
        pregunta: "S’ha de publicar al corresponent diari oficial:",
        opcions: [
            { text: "La delegació de signatura", correcte: false },
            { text: "La delegació de competències i la seva revocació", correcte: true },
            { text: "La avocació de la competència", correcte: false }
        ]
    },
    {
        id: 68,
        pregunta: "La delegació de competències:",
        opcions: [
            { text: "No serà revocable llevat de resolució judicial", correcte: false },
            { text: "Només es podrà revocar per resolució motivada de l’òrgan delegant, dins dels 2 mesos següents a la seva publicació al BOE", correcte: false },
            { text: "Podrà revocar-se en qualsevol moment per l’òrgan que l’hagi conferit", correcte: true }
        ]
    },
    {
        id: 69,
        pregunta: "Els titulars dels òrgans administratius podran ser suplerts temporalment:",
        opcions: [
            { text: "Mai", correcte: false },
            { text: "Només en els supòsits de vacant", correcte: false },
            { text: "Només en els supòsits de vacant, absència o malaltia, així com en casos que hagi estat declarada l’abstenció o recusació", correcte: true }
        ]
    },
    {
        id: 70,
        pregunta: "Per la vàlida constitució d’un òrgan col·legiats cal:",
        opcions: [
            { text: "La presència del /la President/a i del/la Secretari/a", correcte: false },
            { text: "La presència del President/a, el Secretari/a i la meitat almenys dels seus membres", correcte: true },
            { text: "La presència de la majoria absoluta dels seus membres", correcte: false }
        ]
    },
    {
        id: 71,
        pregunta: "La representació d’un òrgan col·legiats correspon:",
        opcions: [
            { text: "Al seu Secretari o Secretària", correcte: false },
            { text: "A tots els seus membres col·legiadament", correcte: false },
            { text: "Al President/a", correcte: true }
        ]
    },
    {
        id: 72,
        pregunta: "Les autoritats i el personal al servei de les Administracions Públiques han d’abstenir-se d’actuar en el procediment:",
        opcions: [
            { text: "Quan no tinguin interès en l’assumpte", correcte: false },
            { text: "Quan tinguin interès personal en l’assumpte", correcte: true },
            { text: "Quan siguin parents en qualsevol grau d’alguna de les parts", correcte: false }
        ]
    },
    {
        id: 73,
        pregunta: "Tenen la consideració de convenis:",
        opcions: [
            { text: "Els acords amb efectes jurídics adoptats per les universitats públiques entre si o amb subjectes de dret privat, per a una finalitat comú", correcte: true },
            { text: "Només els acords i pactes entre universitats públiques per activitats d’extensió universitària", correcte: false },
            { text: "Els acords, pactes i contractes administratius celebrats per les universitats públiques i altres entitats del sector públic de dret privat", correcte: false }
        ]
    },
    {
        id: 74,
        pregunta: "La formalització d’un conveni per part d’una administració pública:",
        opcions: [
            { text: "Pot suposar la cessió de la titularitat de la competència si es tracta d’una universitat pública", correcte: false },
            { text: "No pot suposar la cessió de la titularitat de la competència", correcte: true },
            { text: "Pot suposar la cessió de la competència si així ho especifiquen les parts signants", correcte: false }
        ]
    },
    {
        id: 75,
        pregunta: "El compliment i la resolució d’un conveni té com a efecte:",
        opcions: [
            { text: "La signatura d’un nou conveni", correcte: false },
            { text: "La seva liquidació", correcte: true },
            { text: "L’establiment de les responsabilitats jurisdiccionals per incompliment del que es va acordar", correcte: false }
        ]
    },
    {
        id: 76,
        pregunta: "Els instruments essencials per a la gestió del pla de prevenció són:",
        opcions: [
            { text: "Els equips de protecció individual", correcte: false },
            { text: "L’avaluació de riscos i la planificació de l’activitat preventiva", correcte: true },
            { text: "Els plans d’autoprotecció", correcte: false }
        ]
    },
    {
        id: 77,
        pregunta: "L’eina a través de la qual s’integra l’activitat preventiva a la UPC en el seu sistema general de gestió i estableix la seva política de prevenció és:",
        opcions: [
            { text: "L’avaluació de riscos", correcte: false },
            { text: "El pla de prevenció de riscos laborals", correcte: true },
            { text: "Les normes de seguretat", correcte: false }
        ]
    },
    {
        id: 78,
        pregunta: "El Pla de prevenció de riscos laborals persegueix un únic objectiu estratègic que és essencialment:",
        opcions: [
            { text: "Integrar la prevenció de riscos laborals en l’estructura organitzativa, així com en el conjunt de les activitats que s’hi desenvolupen", correcte: true },
            { text: "Definir les competències de cada persona que forma part de la comunitat universitària", correcte: false },
            { text: "Programar i executar les actuacions que s’han de dur a terme quant a prevenció de riscos laborals", correcte: false }
        ]
    },
    {
        id: 79,
        pregunta: "La política de prevenció de riscos laborals de la UPC l’ha d’aprovar:",
        opcions: [
            { text: "El Consell de Direcció", correcte: false },
            { text: "El Consell de Govern", correcte: true },
            { text: "La Junta de Personal", correcte: false }
        ]
    },
    {
        id: 80,
        pregunta: "Prevenir qualsevol comportament que atempti contra la dignitat de les persones així com qualsevol conducta d’assetjament és, segons el Pla de prevenció de la UPC:",
        opcions: [
            { text: "No afecta a la política de prevenció", correcte: false },
            { text: "Un principi de la política prevenció", correcte: false },
            { text: "Un compromís de la política de prevenció", correcte: true }
        ]
    },
    {
        id: 81,
        pregunta: "Quina finalitat té la responsabilitat civil derivada de l’incompliment de les obligacions en matèria de prevenció de riscos laborals?",
        opcions: [
            { text: "Sancionadora", correcte: false },
            { text: "Compensació patrimonial", correcte: true },
            { text: "Acomiadament", correcte: false }
        ]
    },
    {
        id: 82,
        pregunta: "La màxima autoritat responsable de la PRL a la UPC és:",
        opcions: [
            { text: "El/La Cap del servei de prevenció", correcte: false },
            { text: "El Gerent o Gerenta", correcte: false },
            { text: "El Rector o Rectora", correcte: true }
        ]
    },
    {
        id: 83,
        pregunta: "El Comitè de Seguretat i Salut és un òrgan de:",
        opcions: [
            { text: "Consulta i participació", correcte: true },
            { text: "Representació", correcte: false },
            { text: "Direcció", correcte: false }
        ]
    },
    {
        id: 84,
        pregunta: "Els representants dels treballadors amb funcions específiques en matèria de prevenció són:",
        opcions: [
            { text: "Els tècnics de prevenció", correcte: false },
            { text: "Els delegats i delegades de personal", correcte: false },
            { text: "Els delegats i delegades de prevenció", correcte: true }
        ]
    },
    {
        id: 85,
        pregunta: "El Servei de prevenció, segons indica l’article 31.3 de la Llei de prevenció, ha d’estar en condicions de proporcionar a l’empresa, en aquest cas la UPC:",
        opcions: [
            { text: "Assessorament i suport", correcte: true },
            { text: "Gestió de la prevenció", correcte: false },
            { text: "Negociació amb els representats dels treballadors", correcte: false }
        ]
    },
    {
        id: 86,
        pregunta: "Les dades personals:",
        opcions: [
            { text: "Es limiten a les dades automatitzades de la persona física", correcte: false },
            { text: "Inclouen les dades íntimes i no íntimes de la persona física", correcte: true },
            { text: "Es limiten només a les dades de les persones jurídiques", correcte: false }
        ]
    },
    {
        id: 87,
        pregunta: "En el Reglament General de Protecció de Dades (RGPD) quan es defineix la seudonimització, el que es vol indicar és que:",
        opcions: [
            { text: "Seudonimitzar consisteix en fer impossible vincular la persona física de manera indirecta amb el conjunt de dades origen", correcte: false },
            { text: "Seudonimitzar consisteix en fer públics els atributs identificatius de la resta, de tal manera que es pugui vincular la persona física de manera indirecta i de forma pública amb el conjunt de dades origen", correcte: false },
            { text: "Seudonimitzar consisteix en el tractament de dades personals de manera que ja no es puguin atribuir a un interessat sense utilitzar informació addicional, sempre que aquesta informació consti per separat i estigui subjecta a mesures tècniques i organitzatives destinades a garantir que les dades personals no s'atribueixen a una persona física identificada o identificable", correcte: true }
        ]
    },
    {
        id: 88,
        pregunta: "Quina és l’edat que estableix la Llei orgànica de protecció de dades personals i garantia dels drets digitals (LOPDGDD) per fonamentar en el consentiment d’un menor el tractament de les seves dades personals?",
        opcions: [
            { text: "La LOPDGDD no estableix l’edat dels menors, en relació al seu consentiment", correcte: false },
            { text: "Quan sigui més gran de dotze anys", correcte: false },
            { text: "Quan sigui més gran de catorze anys", correcte: true }
        ]
    },
    {
        id: 89,
        pregunta: "La Llei orgànica de protecció de dades personals i garantia dels drets digitals (LOPDGDD) estableix que en l’àmbit del sector públic, les mesures de seguretat que s’han d’implantar en cas de tractament de dades personals són:",
        opcions: [
            { text: "Les establertes en la carta dels drets fonamentals de la Unió Europea", correcte: false },
            { text: "Únicament les definides en el Títol VIII del Reglament de l’any 2007, que desenvolupa la LOPD de l’any 1999", correcte: false },
            { text: "Les incloses en l’Esquema Nacional de Seguretat", correcte: true }
        ]
    },
    {
        id: 90,
        pregunta: "El Dret de rectificació reconegut en el Reglament General de Protecció de Dades (RGPD):",
        opcions: [
            { text: "No es pot exercir en les dades que gestiona una universitat pública, pel fet de tractar-se d’una administració pública", correcte: false },
            { text: "L’afectat ha d’indicar en la seva sol·licitud a quines dades es refereix i quina correcció s’hi ha de fer", correcte: true },
            { text: "No ha estat reconegut a la Llei orgànica de protecció de dades personals i garantia dels drets digitals (LOPDGDD), i per tant no es pot exercir a Espanya", correcte: false }
        ]
    },
    {
        id: 91,
        pregunta: "En decidir la imposició d'una multa administrativa i la seva quantia, cal tenir en compte:",
        opcions: [
            { text: "La naturalesa, la gravetat i la durada de la infracció, segons la naturalesa, l’abast o el propòsit de l'operació de tractament, així com el nombre d'interessats afectats i el nivell dels danys i perjudicis que hagin sofert", correcte: true },
            { text: "La naturalesa jurídica de l’infractor", correcte: false },
            { text: "Només la importància del mal causat", correcte: false }
        ]
    },
    {
        id: 92,
        pregunta: "El Registre de les activitats del tractament ha d’incloure:",
        opcions: [
            { text: "Les finalitats del tractament", correcte: true },
            { text: "El DNI o passaport dels afectats", correcte: false },
            { text: "Els altres aspectes que consideri el responsable", correcte: false }
        ]
    },
    {
        id: 93,
        pregunta: "Una empresa digitalitza els expedients laborals d’una universitat pública sense que es demani el consentiment als empleats:",
        opcions: [
            { text: "La Universitat i l’empresa han de ser sancionades per l’autoritat de control per què es tracta d’una cessió de dades no consentida", correcte: false },
            { text: "Cap de les dues entitats poden ser sancionades perquè l’accés per part d’un encarregat de tractament a les dades personals que siguin necessàries per a la prestació d’un servei al responsable no es considera una comunicació de dades sempre que es compleixi la legislació vigent", correcte: true },
            { text: "Els expedients laborals d’empleats d’una administració pública no estan subjectes a la legislació en matèria de protecció de dades, i per tant no cal demanar el consentiment", correcte: false }
        ]
    },
    {
        id: 94,
        pregunta: "Un tractament de dades personals que contingui únicament dades relatives a la salut d'una persona física:",
        opcions: [
            { text: "Es pot fer si l’interessat ha donat el seu consentiment explícit", correcte: true },
            { text: "Es pot fer si l’interessat no ha marcat que ens nega el seu consentiment, en el moment de la seva recollida", correcte: false },
            { text: "Es pot fer si l’interessat és menor de 14 anys, encara que la mare, pare o tutor legal no doni el consentiment", correcte: false }
        ]
    },
    {
        id: 95,
        pregunta: "La diferència fonamental entre el concepte de fitxer i el concepte de tractament definits en el Reglament General de Protecció de Dades (RGPD) és:",
        opcions: [
            { text: "El fitxer únicament permet ordenar i facilitar l'accés i localització d'informació. En canvi el tractament afegeix l'obtenció de resultats i la reelaboració dels mateixos", correcte: true },
            { text: "El fitxer és un conjunt no estructurat de dades personals. En canvi el tractament és qualsevol conjunt estructurat de dades personals", correcte: false },
            { text: "El RGPD no defineix el concepte de fitxer i el concepte de tractament, ja que no tenen res a veure amb la protecció de dades personals", correcte: false }
        ]
    },
    {
        id: 96,
        pregunta: "Quan el Reglament General de Protecció de Dades (RGPD) defineix “Dades personals” com qualsevol informació sobre una persona física identificada o identificable:",
        opcions: [
            { text: "S’ha de considerar persona física identificable qualsevol persona la identitat de la qual es pot determinar, directament o indirectament, en particular mitjançant un identificador", correcte: true },
            { text: "S’ha de considerar persona física identificable la persona jurídica que gestiona la identitat, directament o indirectament, de l’interessat", correcte: false },
            { text: "Es refereix només a les dades personals de Nom i Cognoms", correcte: false }
        ]
    },
    {
        id: 97,
        pregunta: "D’acord amb el Reglament General de Protecció de Dades (RGPD), la informació que cal facilitar quan les dades personals s'obtenen de l'interessat, s’ha de facilitar:",
        opcions: [
            { text: "Només si la persona interessada ho demana de forma explícita i per escrit", correcte: false },
            { text: "En el moment de recollir-les i d’obtenir-les", correcte: true },
            { text: "En el moment que finalitzat el termini durant el qual es conservaran", correcte: false }
        ]
    },
    {
        id: 98,
        pregunta: "D’acord amb el Reglament General de Protecció de Dades (RGPD), la informació que cal facilitar quan les dades personals s’obtenen de l’interessat, és:",
        opcions: [
            { text: "El país on es fa la transferència internacional, i els col·lectius o grups dels quals es capturen les dades (categories d'interessats)", correcte: false },
            { text: "La descripció específica de les mesures tècniques i organitzatives de seguretat, i el nom i cognoms del Delegat de Protecció de Dades", correcte: false },
            { text: "Responsable del Tractament, Delegat de Protecció de Dades, finalitats, legitimació, destinataris, drets de les persones, termini de conservació, i on reclamar", correcte: true }
        ]
    },
    {
        id: 99,
        pregunta: "Quan les dades es tracten amb el consentiment de l'interessat, el responsable del tractament ha de poder demostrar:",
        opcions: [
            { text: "Que si es tracta de majors de 18 anys, també tenen el consentiment del titular de la pàtria potestat o tutela", correcte: false },
            { text: "Que aquest consentiment s’ha donat per aquesta operació de tractament, i portar un registre", correcte: true },
            { text: "Que el consentiment de l’interessat s’ha destruït per preservar la seva confidencialitat", correcte: false }
        ]
    },
    {
        id: 100,
        pregunta: "Quan el Reglament General de Protecció de Dades (RGPD) regula el tractament de categories especials de dades personals, es refereix a:",
        opcions: [
            { text: "Dades personals que revelin l'origen ètnic o racial, les opinions polítiques, les conviccions religioses o filosòfiques o l'afiliació sindical, i el tractament de dades genètiques, dades biomètriques destinades a identificar de manera unívoca una persona física, dades relatives a la salut o dades relatives a la vida sexual o l’orientació sexual d'una persona física", correcte: true },
            { text: "Dades relatives als animals de companyia de les persones afectades o dels interessats", correcte: false },
            { text: "Dades que revelin el tipus de navegador fet servir per cercar informació a la xarxa Internet", correcte: false }
        ]
    },




];