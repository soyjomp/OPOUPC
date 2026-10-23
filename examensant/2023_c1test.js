const preguntesObligatories = [
    {
        id: 1,
        pregunta: "La Constitució espanyola estableix com a dret fonamental i de llibertat pública:",
        opcions: [
            { text: "El principi de legalitat.", correcte: false },
            { text: "La retroactivitat de les disposicions sancionadores no favorables o restrictives de drets individuals.", correcte: false },
            { text: "L’accés a la cultura promovent a través dels poders públics la ciència i la investigació científica i tècnica.", correcte: false },
            { text: "L’autonomia universitària.", correcte: true }
        ]
    },
    {
        id: 2,
        pregunta: "D’acord amb la Constitució, quina de les següents afirmacions és correcta referent a l’Administració Pública?",
        opcions: [
            { text: "Serveix amb subjectivitat els interessos generals, amb submissió plena a la Llei i al Dret.", correcte: false },
            { text: "Serveix amb subjectivitat els interessos particulars, amb submissió plena a la Llei i al Dret.", correcte: false },
            { text: "Serveix amb objectivitat els interessos particulars, amb submissió plena a la Llei i al Dret.", correcte: false },
            { text: "Serveix amb objectivitat els interessos generals, amb submissió plena a la Llei i al Dret.", correcte: true }
        ]
    },
    {
        id: 3,
        pregunta: "D’acord amb l’EAC, correspon a la Generalitat, en matèria d’ensenyament universitari, sens perjudici de l’autonomia universitària, la competència exclusiva sobre:",
        opcions: [
            { text: "L’aprovació dels estatuts de les universitats públiques i de les normes d’organització i funcionament de les universitats privades.", correcte: true },
            { text: "El règim jurídic de l’organització i el funcionament de les universitats públiques, incloent-hi els òrgans de govern i de representació.", correcte: false },
            { text: "La regulació del règim d’accés a les universitats.", correcte: false },
            { text: "L’avaluació i el garantiment de la qualitat i de l’excel·lència de l’ensenyament universitari.", correcte: false }
        ]
    },
    {
        id: 4,
        pregunta: "La competència sobre l’expedició dels títols universitaris oficials:",
        opcions: [
            { text: "És una competència executiva exclusiva de l’Estat.", correcte: false },
            { text: "És una competència executiva exclusiva de la Generalitat.", correcte: false },
            { text: "És una competència executiva compartida amb l’Estat.", correcte: true },
            { text: "És una competència executiva pròpia de les universitats públiques.", correcte: false }
        ]
    },
    {
        id: 5,
        pregunta: "És personal acadèmic de les universitats públiques l’integrat per:",
        opcions: [
            { text: "El professorat contractat i els investigadors propis i vinculats i el professorat dels cossos docents universitaris.", correcte: true },
            { text: "El professorat dels cossos docents universitaris exclusivament.", correcte: false },
            { text: "El professorat i els estudiants de doctorat.", correcte: false },
            { text: "El professorat i els becaris de recerca i ajudants.", correcte: false }
        ]
    },
    {
        id: 6,
        pregunta: "Referent a la transferència de tecnologia i coneixements, el Departament competent en matèria d’universitats i les universitats públiques han d’adoptar les mesures pertinents per:",
        opcions: [
            { text: "Aconseguir fonts de finançament alternatius per mitjà de programes de recerca i transferència de coneixements amb organitzacions empresarials.", correcte: false },
            { text: "Impulsar la transferència de tecnologia i la transmissió de coneixements a la societat.", correcte: true },
            { text: "Estimular la producció científica del professors i dels estudiants.", correcte: false },
            { text: "Aconseguir la màxima inserció laboral dels titulats universitaris.", correcte: false }
        ]
    },
    {
        id: 7,
        pregunta: "La Llei d’Universitats de Catalunya té per objecte:",
        opcions: [
            { text: "Complementar la legislació d’universitats en els seus aspectes secundaris.", correcte: false },
            { text: "L’ordenació del sistema universitari de Catalunya en el marc de l’Espai Europeu d’Ensenyament Superior.", correcte: true },
            { text: "Desenvolupar l’autonomia universitària i la llibertat de càtedra.", correcte: false },
            { text: "Establir l’ordenació del règim del personal docent al servei de les universitats públiques de Catalunya.", correcte: false }
        ]
    },
    {
        id: 8,
        pregunta: "Les unitats acadèmiques han d’elaborar anualment:",
        opcions: [
            { text: "Una planificació estratègica.", correcte: false },
            { text: "Una memòria de les seves activitats amb la informació que determini el Consell de Govern i el Consell Social.", correcte: true },
            { text: "Un informe de prospectiva sobre el nombre d’estudiants que demanaran les seves titulacions.", correcte: false },
            { text: "Un informe de millora dels processos acadèmics.", correcte: false }
        ]
    },
    {
        id: 9,
        pregunta: "Les unitats acadèmiques han de tenir un reglament d’organització i funcionament:",
        opcions: [
            { text: "En funció de les directrius emanades de la LOU.", correcte: false },
            { text: "D’acord amb les directrius generals establertes pel Consell de Govern.", correcte: true },
            { text: "De conformitat amb la normativa aprovada pel Consell Social a proposta del Consell de Govern.", correcte: false },
            { text: "D’acord amb les directrius establertes pel Consell Social.", correcte: false }
        ]
    },
    {
        id: 10,
        pregunta: "Són funcions de l’Escola de Doctorat, entre d’altres:",
        opcions: [
            { text: "Organitzar el doctorat a la UPC, proposar al Consell de Govern l’aprovació, modificació i supressió dels programes de doctorat, vetllant per la qualitat dels programes de doctorat.", correcte: true },
            { text: "La promoció, difusió i matriculació als estudis de doctorat.", correcte: false },
            { text: "Assignar directors de tesis i organitzar la defensa de les tesis doctorals.", correcte: false },
            { text: "Dur a terme exclusivament l’activitat acadèmica de la universitat.", correcte: false }
        ]
    },
    {
        id: 11,
        pregunta: "La creació, la modificació i la supressió de les persones jurídiques del Grup UPC requereix:",
        opcions: [
            { text: "L’autorització del Claustre Universitari, a proposta del rector o rectora.", correcte: false },
            { text: "L’autorització del rector o rectora, a proposta del Consell Acadèmic.", correcte: false },
            { text: "L’aprovació del Consell de Govern i del Consell Social, a proposta del rector o rectora.", correcte: true },
            { text: "L’autorització de Personal i Organització.", correcte: false }
        ]
    },
    {
        id: 12,
        pregunta: "També son òrgans col·legiats de les unitats acadèmiques:",
        opcions: [
            { text: "Les delegacions d’estudiants i estudiantes.", correcte: true },
            { text: "Els representants de les càtedres universitat-empresa.", correcte: false },
            { text: "La comissió de concessionaris.", correcte: false },
            { text: "La comissió de Caps UTG.", correcte: false }
        ]
    },
    {
        id: 13,
        pregunta: "Poden tenir l’exempció de les obligacions docents:",
        opcions: [
            { text: "El rector o rectora, els vicerectors o vicerectores i el gerent o la gerent.", correcte: false },
            { text: "El rector o rectora, els vicerectors o vicerectores, el secretari o secretària general, els delegats o delegades del rector o rectora, els degans o deganes, i els directors o directores de les unitats acadèmiques.", correcte: true },
            { text: "Només el rector o rectora.", correcte: false },
            { text: "No hi ha exempció d’obligacions docents del personal UPC.", correcte: false }
        ]
    },
    {
        id: 14,
        pregunta: "La memòria de la UPC es fa pública:",
        opcions: [
            { text: "Pel Servei de comunicació.", correcte: false },
            { text: "Per la comissió permanent del Consell de Govern.", correcte: false },
            { text: "Pel rector o la rectora.", correcte: true },
            { text: "A través de la seu electrònica.", correcte: false }
        ]
    },
    {
        id: 15,
        pregunta: "Correspon al Consell Social:",
        opcions: [
            { text: "La supervisió de les activitats de caràcter econòmic de la universitat i el rendiment dels seus serveis.", correcte: true },
            { text: "L’aprovació de les normatives emanades de les unitats acadèmiques.", correcte: false },
            { text: "La confirmació dels càrrecs electes.", correcte: false },
            { text: "L’aprovació de l’encàrrec docent de les unitats acadèmiques.", correcte: false }
        ]
    },
    {
        id: 16,
        pregunta: "El secretari o secretària general de la UPC:",
        opcions: [
            { text: "És també el secretari o secretària del Claustre universitari i del Grup UPC.", correcte: false },
            { text: "És també el secretari o secretària del Consell de Govern i de les Juntes Acadèmiques.", correcte: false },
            { text: "És també el secretari o secretària del Claustre universitari i del Consell de Govern.", correcte: true },
            { text: "És també el secretari o secretària del Consell Social.", correcte: false }
        ]
    },
    {
        id: 17,
        pregunta: "Els òrgans col·legiats i unipersonals d’un departament són com a mínim:",
        opcions: [
            { text: "El Consell, el director o directora, els subdirectors o subdirectores i el secretari o secretària.", correcte: true },
            { text: "El director o directora.", correcte: false },
            { text: "El director o directora i els subdirectors o subdirectores.", correcte: false },
            { text: "Els investigadors principals (IP) dels grups de recerca.", correcte: false }
        ]
    },
    {
        id: 18,
        pregunta: "La potestat disciplinària s’exerceix d’acord amb els principis següents:",
        opcions: [
            { text: "Principi de legalitat i tipicitat de les faltes i sancions i principi de presumpció d’innocència.", correcte: true },
            { text: "Principi de no culpabilitat i principi de proporcionalitat.", correcte: false },
            { text: "Principi de retroactivitat de les disposicions sancionadores no favorables i d’irretroactivitat de les favorables al presumpte infractor.", correcte: false },
            { text: "Cap de les respostes anteriors és correcta.", correcte: false }
        ]
    },
    {
        id: 19,
        pregunta: "El dret a participar, a través de les organitzacions sindicals, en els òrgans de control i seguiment de les entitats o organismes que es determini legalment és:",
        opcions: [
            { text: "Representació.", correcte: false },
            { text: "Negociació col·lectiva.", correcte: false },
            { text: "Participació institucional.", correcte: true },
            { text: "Delegació representativa.", correcte: false }
        ]
    },
    {
        id: 20,
        pregunta: "Els interessats poden signar a través de qualsevol mitjà que permeti acreditar:",
        opcions: [
            { text: "L’autenticitat de l’expressió de la seva voluntat i consentiment.", correcte: false },
            { text: "La integritat del document.", correcte: false },
            { text: "La inalterabilitat del document.", correcte: false },
            { text: "Totes les respostes anteriors són correctes.", correcte: true }
        ]
    },
    {
        id: 21,
        pregunta: "“Formular sol·licituds, presentar declaracions responsables o comunicacions, interposar recursos, desistir d’accions o renunciar a drets” són les situacions en que les administracions públiques només requereixen als interessats:",
        opcions: [
            { text: "La seva presència obligatòria.", correcte: false },
            { text: "L’ús obligatori de signatura.", correcte: true },
            { text: "L’existència d’un representant.", correcte: false },
            { text: "Cap de les respostes anteriors és correcta.", correcte: false }
        ]
    },
    {
        id: 22,
        pregunta: "Les Administracions poden establir l’obligació de relacionar-se amb elles a través de mitjans electrònics per a determinats procediments i per a certs col·lectius de persones físiques?",
        opcions: [
            { text: "No, no ho poden fer. No forma part de les seves competències.", correcte: false },
            { text: "No. No està previst que sigui possible per la LPACAP.", correcte: false },
            { text: "Sí, reglamentàriament i per raó de la seva capacitat econòmica, tècnica, de dedicació professional o altres motius en que quedi acreditat que tenen accés i disponibilitat dels mitjans electrònics necessaris.", correcte: true },
            { text: "Només en cas de procediments d’urgència.", correcte: false }
        ]
    },
    {
        id: 23,
        pregunta: "En els procediments iniciats a sol·licitud de l’interessat, el venciment del termini màxim sense que s’hagi notificat cap resolució expressa legitima l’interessat o interessats per entendre-la, excepte que una norma estableixi el contrari, com a:",
        opcions: [
            { text: "Estimada per silenci administratiu.", correcte: true },
            { text: "Desestimada per silenci administratiu.", correcte: false },
            { text: "En situació de suspens per silenci administratiu.", correcte: false },
            { text: "No es pot donar aquesta situació. S’ha de notificar sempre dins del termini màxim.", correcte: false }
        ]
    },
    {
        id: 24,
        pregunta: "Els actes administratius produïts per silenci administratiu produeixen efectes:",
        opcions: [
            { text: "Des del venciment del termini màxim en què s’ha de dictar i notificar la resolució expressa sense que aquesta s’hagi expedit.", correcte: true },
            { text: "Des de la data d’entrada de la petició al registre electrònic de l’Administració.", correcte: false },
            { text: "Des de la data en que es fa efectiva la notificació.", correcte: false },
            { text: "No. En cas de silenci administratiu els actes no produeixen efectes.", correcte: false }
        ]
    },
    {
        id: 25,
        pregunta: "En relació a la tramitació d’urgència, respecte del procediment ordinari:",
        opcions: [
            { text: "Es redueixen a una quarta part els terminis establerts.", correcte: false },
            { text: "Es redueixen a una tercera part els terminis establerts.", correcte: false },
            { text: "Es redueixen a la meitat els terminis establerts.", correcte: true },
            { text: "Els terminis de tots dos són els mateixos. No es modifiquen.", correcte: false }
        ]
    },
    {
        id: 26,
        pregunta: "L’eficàcia dels actes pot quedar demorada?",
        opcions: [
            { text: "No. En cap cas.", correcte: false },
            { text: "Només en casos excepcionals, amb el vistiplau corresponent de l’Administració.", correcte: false },
            { text: "Sí, quan així ho exigeixi el contingut de l’acte o estigui supeditada a la seva notificació, publicació o aprovació superior.", correcte: true },
            { text: "La LPACAP no regula sobre aquest aspecte.", correcte: false }
        ]
    },
    {
        id: 27,
        pregunta: "Tota notificació s’ha de cursar dins del termini de .... dies a partir de la data en què s’hagi dictat l’acte.",
        opcions: [
            { text: "Cinc.", correcte: false },
            { text: "Set.", correcte: false },
            { text: "Deu.", correcte: true },
            { text: "Quinze.", correcte: false }
        ]
    },
    {
        id: 28,
        pregunta: "S’entén per compareixença a la seu electrònica:",
        opcions: [
            { text: "Només l’accés per part de l’interessat.", correcte: false },
            { text: "Exclusivament l’accés del representant de l’interessat.", correcte: false },
            { text: "La LPACAP no regula aquest aspecte.", correcte: false },
            { text: "L’accés per part de l’interessat o el seu representant degudament identificat al contingut de la notificació.", correcte: true }
        ]
    },
    {
        id: 29,
        pregunta: "Els actes administratius han de ser objecte de publicació, i aquesta té els efectes de la notificació:",
        opcions: [
            { text: "Quan es tracti d’actes integrants d’un procediment selectiu o de concurrència competitiva de qualsevol tipus.", correcte: true },
            { text: "Quan l’acte tingui per destinatari una pluralitat determinada de persones.", correcte: false },
            { text: "Sempre.", correcte: false },
            { text: "En cap cas la publicació d’un acte administratiu té efectes de notificació.", correcte: false }
        ]
    },
    {
        id: 30,
        pregunta: "Llevat que no resulti possible, les convocatòries dels òrgans col·legiats es remetran als seus membres:",
        opcions: [
            { text: "A través de mitjans electrònics, fent constar l’ordre del dia, juntament amb la documentació necessària, quan sigui possible.", correcte: true },
            { text: "A través de correu postal o supletòriament electrònic, juntament amb la documentació en format PDF.", correcte: false },
            { text: "Preferentment a través de correu certificat i amb justificant de recepció.", correcte: false },
            { text: "Per compareixença dels seus membres a la Seu Electrònica.", correcte: false }
        ]
    },
    {
        id: 31,
        pregunta: "En els supòsits d’abstenció de l’article 23 els interessats en el procediment podran promoure:",
        opcions: [
            { text: "Recusació, en qualsevol moment de la tramitació del procediment.", correcte: true },
            { text: "Recusació, dins els 10 dies hàbils, des del moment en que va tenir coneixement de la causa d’abstenció.", correcte: false },
            { text: "Recusació, abans de finalitzar el termini d’al·legacions en el procediment.", correcte: false },
            { text: "Recusació, davant el jutjat del contenciós administratiu.", correcte: false }
        ]
    },
    {
        id: 32,
        pregunta: "En cas de responsabilitat patrimonial, el dany al·legat haurà de ser:",
        opcions: [
            { text: "Efectiu.", correcte: false },
            { text: "Avaluable econòmicament.", correcte: false },
            { text: "Individualitzat en relació a una persona o grup de persones.", correcte: false },
            { text: "Totes les respostes anteriors són correctes.", correcte: true }
        ]
    },
    {
        id: 33,
        pregunta: "Els convenis no podran tenir per objecte:",
        opcions: [
            { text: "Prestacions de fer, de no fer o de consentir.", correcte: false },
            { text: "La col·laboració entre entitats, empreses i organismes que tinguin les mateixes finalitats.", correcte: false },
            { text: "Prestacions pròpies dels contractes.", correcte: true },
            { text: "Prestacions que suposin comprometre recursos de l’organisme que els signa.", correcte: false }
        ]
    },
    {
        id: 34,
        pregunta: "Els convenis hauran de tenir una durada determinada que:",
        opcions: [
            { text: "No podrà ser superior a 4 anys, llevat que normativament es prevegi un termini superior.", correcte: true },
            { text: "No podrà ser superior a cinc anys ni inferior a dos.", correcte: false },
            { text: "La legislació no estableix cap limitació referent als convenis.", correcte: false },
            { text: "Serà l’apropiada per al compliment de les prestacions.", correcte: false }
        ]
    },
    {
        id: 35,
        pregunta: "La Llei 26/2010, de 3 d’agost, de règim jurídic i procediment administratiu de les administracions públiques té per objecte:",
        opcions: [
            { text: "Regular el règim jurídic de les administracions públiques de Catalunya i regular les especificitats del procediment administratiu que els són pròpies.", correcte: true },
            { text: "Fer efectius els drets reconeguts per la Constitució, l'Estatut d'autonomia i la resta de l'ordenament jurídic, i garantir-ne la plenitud, en les relacions de la ciutadania amb les administracions públiques de Catalunya.", correcte: false },
            { text: "Promoure una administració pública àgil, eficaç i eficient, i fer accessibles les seves relacions amb la ciutadania, amb independència del suport que s'utilitzi.", correcte: false },
            { text: "Millorar l'actuació de les administracions públiques catalanes mitjançant la regulació de mesures de simplificació de tràmits i procediments, per a la reducció de càrregues administratives.", correcte: false }
        ]
    },
    {
        id: 36,
        pregunta: "D’acord amb l’article de titularitat i exercici de la competència, si alguna disposició atribueix competències a una administració pública sense especificar l'òrgan que les ha d'exercir, s'entén que la facultat d'instruir i resoldre els expedients correspon:",
        opcions: [
            { text: "Al màxim responsable de l’Administració.", correcte: false },
            { text: "Als òrgans superiors competents per raó de la matèria i del territori.", correcte: false },
            { text: "Als òrgans inferiors competents per raó de la matèria i del territori i, si n'hi ha diversos, al superior jeràrquic comú.", correcte: true },
            { text: "La Llei no regula sobre aquesta matèria.", correcte: false }
        ]
    },
    {
        id: 37,
        pregunta: "D’acord amb l’article de delegació de competències, els òrgans administratius poden delegar l'exercici de les competències que tenen atribuïdes en altres òrgans:",
        opcions: [
            { text: "D’altres administracions públiques relacionades.", correcte: false },
            { text: "De la mateixa administració pública, encara que no en depenguin jeràrquicament, o en els organismes i les entitats públiques vinculats o que en depenen.", correcte: true },
            { text: "D’empreses privades vinculades amb l’àmbit d’actuació.", correcte: false },
            { text: "No és possible delegar l’exercici de les competències en altres d’acord amb la Llei.", correcte: false }
        ]
    },
    {
        id: 38,
        pregunta: "D’acord amb l’article de delegació de competències, la delegació pot ser:",
        opcions: [
            { text: "Només general.", correcte: false },
            { text: "Només per a un procediment administratiu concret.", correcte: false },
            { text: "Per a diferents procediments administratius, que poden ser indeterminats.", correcte: false },
            { text: "General o per a un procediment administratiu concret.", correcte: true }
        ]
    },
    {
        id: 39,
        pregunta: "D’acord amb el règim jurídic dels òrgans col·legiats, el funcionament dels òrgans col·legiats i les comunicacions i la documentació corresponents poden tenir lloc de manera:",
        opcions: [
            { text: "Exclusivament presencial.", correcte: false },
            { text: "Preferentment presencial.", correcte: false },
            { text: "De manera presencial o a distància indistintament.", correcte: false },
            { text: "Presencial, a distància o mixta.", correcte: true }
        ]
    },
    {
        id: 40,
        pregunta: "Quina de les següents funcions correspon al president o presidenta de l’òrgan col·legiat?",
        opcions: [
            { text: "Facilitar als membres de l'òrgan col·legiat la informació necessària per a l'exercici de llurs funcions.", correcte: false },
            { text: "Fer la convocatòria de les sessions.", correcte: false },
            { text: "Assegurar el compliment de les lleis.", correcte: true },
            { text: "Tenir cura que es practiquin els actes de comunicació necessaris.", correcte: false }
        ]
    },
    {
        id: 41,
        pregunta: "Quina de les següents funcions correspon al secretari o a la secretària de l’òrgan col·legiat?",
        opcions: [
            { text: "Ordenar la convocatòria de les sessions ordinàries i extraordinàries.", correcte: false },
            { text: "Assegurar el compliment de les lleis.", correcte: false },
            { text: "Dirimir els empats amb el seu vot a l'efecte de l'adopció d'acords.", correcte: false },
            { text: "Custodiar i arxivar les actes.", correcte: true }
        ]
    },
    {
        id: 42,
        pregunta: "D’acord amb l’article d’adopció d’acords i règim de votacions, els acords de l’òrgan col·legiat s’adopten per ......, llevat que les seves normes reguladores ho estableixin diferent:",
        opcions: [
            { text: "Majoria simple de vots.", correcte: true },
            { text: "Unanimitat.", correcte: false },
            { text: "Consens.", correcte: false },
            { text: "Votació secreta o vot particular, segons escaigui.", correcte: false }
        ]
    },
    {
        id: 43,
        pregunta: "D’acord amb l’article d’actes de les sessions, quin és el termini establert en què els membres que discrepen de l’acord majoritari poden formular un vot particular?",
        opcions: [
            { text: "Vint-i-quatre hores.", correcte: false },
            { text: "Quaranta-vuit hores.", correcte: false },
            { text: "Setanta-dues hores.", correcte: true },
            { text: "Deu dies.", correcte: false }
        ]
    },
    {
        id: 44,
        pregunta: "D’acord amb l’article Dret a una bona administració, el dret dels ciutadans a una bona administració inclou:",
        opcions: [
            { text: "El dret a conèixer en qualsevol moment l'estat de tramitació dels procediments en què són persones interessades.", correcte: false },
            { text: "El dret a no aportar les dades o els documents que estiguin en poder de les administracions públiques o dels quals aquestes puguin disposar.", correcte: false },
            { text: "El dret que l'actuació administrativa sigui proporcional a la finalitat perseguida i a que les decisions de les administracions públiques estiguin motivades.", correcte: false },
            { text: "Totes les respostes anteriors són correctes.", correcte: true }
        ]
    },
    {
        id: 45,
        pregunta: "El tractament de dades personals que revelin les opinions polítiques, l’afiliació sindical així com les dades relatives a la salut, es prohibeix excepte quan:",
        opcions: [
            { text: "No hi ha excepcions establertes per a la prohibició del tractament d’aquestes dades personals.", correcte: false },
            { text: "El tractament es refereix a dades personals que l'interessat ha fet manifestament públiques i el tractament és necessari per raons d'un interès públic essencial.", correcte: true },
            { text: "S’ha superat el termini de 5 anys i queden alliberades de les restriccions les dades.", correcte: false },
            { text: "S’ha superat el termini de 10 anys i queden alliberades de les restriccions les dades.", correcte: false }
        ]
    },
    {
        id: 46,
        pregunta: "Com ha de ser el “consentiment de l’interessat” quan es volen tractar les seves dades personals?",
        opcions: [
            { text: "Voluntat lliure i per escrit.", correcte: false },
            { text: "Voluntat lliure, específica, informada i inequívoca.", correcte: true },
            { text: "Sempre per escrit i que quedi constància fefaentment.", correcte: false },
            { text: "Declaració per escrit o verbal, clara i concisa.", correcte: false }
        ]
    },
    {
        id: 47,
        pregunta: "És d’aplicació a les universitats públiques la Llei de Transparència, accés a la informació pública i bon govern (LTAIPBG)?",
        opcions: [
            { text: "Sí, però només a les universitats públiques de Catalunya, els ens que en depenen o hi estan vinculats o participats.", correcte: true },
            { text: "No. En matèria de transparència les universitats públiques tenen la seva pròpia regulació.", correcte: false },
            { text: "Sí, aquesta llei s’aplica a totes les universitats públiques.", correcte: false },
            { text: "Sí, és d’aplicació a les universitats públiques i privades.", correcte: false }
        ]
    },
    {
        id: 48,
        pregunta: "S’entén per transparència:",
        opcions: [
            { text: "L’acció proactiva de l’Administració de donar a conèixer la informació relativa als seus àmbits d’actuació i les seves obligacions, amb caràcter permanent i actualitzat, de la manera que resulti més comprensible per a les persones i per mitjà dels instruments de difusió que els permetin un accés ampli i fàcil a les dades i els facilitin la participació en els assumptes públics.", correcte: true },
            { text: "El dret subjectiu que es reconeix a les persones per a sol·licitar i obtenir la informació pública.", correcte: false },
            { text: "La informació elaborada per l’Administració i la que aquesta té en el seu poder com a conseqüència de la seva activitat o de l’exercici de les seves funcions.", correcte: false },
            { text: "El deure dels subjectes obligats de fer públics, d’ofici, els continguts d’informació pública.", correcte: false }
        ]
    },
    {
        id: 49,
        pregunta: "Segons el PPUPC, prevenir qualsevol comportament que atempti contra la dignitat de les persones així com qualsevol conducta d’assetjament és:",
        opcions: [
            { text: "Aquest aspecte no està contemplat a la política de prevenció de riscos laborals de la UPC.", correcte: false },
            { text: "Un principi de la política prevenció de riscos laborals de la UPC.", correcte: false },
            { text: "Un compromís de la política de prevenció de riscos laborals de la UPC.", correcte: true },
            { text: "Un dels objectius definits de la política de prevenció de riscos laborals de la UPC.", correcte: false }
        ]
    },
    {
        id: 50,
        pregunta: "L’eina a través de la qual s’integra l’activitat preventiva a la UPC en el seu sistema general de gestió i estableix la seva política de prevenció és:",
        opcions: [
            { text: "L’avaluació de riscos laborals inicialment i la planificació de l’activitat preventiva posteriorment.", correcte: false },
            { text: "La planificació de l’activitat preventiva exclusivament.", correcte: false },
            { text: "El pla de prevenció de riscos laborals.", correcte: true },
            { text: "Les normes de seguretat i l’avaluació de riscos laborals.", correcte: false }
        ]
    },
    {
        id: 51,
        pregunta: "El pressupost de funcionament assignat a les unitats està destinat a finançar:",
        opcions: [
            { text: "Despeses de funcionament ordinari.", correcte: true },
            { text: "Despeses del seu personal.", correcte: false },
            { text: "Despeses de manteniment dels edificis que ocupen.", correcte: false },
            { text: "Totes les respostes anteriors són correctes.", correcte: false }
        ]
    },
    {
        id: 52,
        pregunta: "Quin dels següents principis s’aplica a la gestió pressupostària de la UPC?",
        opcions: [
            { text: "D’estabilitat pressupostària.", correcte: false },
            { text: "D’imputació pressupostària.", correcte: false },
            { text: "De desafectació o globalitat dels ingressos.", correcte: false },
            { text: "Totes les respostes anteriors són correctes.", correcte: true }
        ]
    },
    {
        id: 53,
        pregunta: "Respecte del principi d’imputació pressupostària, el pressupost de la UPC es regeix pel principi:",
        opcions: [
            { text: "De mensualitat.", correcte: false },
            { text: "D’anualitat.", correcte: true },
            { text: "De globalitat pressupostària.", correcte: false },
            { text: "De centre de cost.", correcte: false }
        ]
    },
    {
        id: 54,
        pregunta: "El trasllat de la totalitat o d’una part dels crèdits d’una aplicació pressupostària de despeses a una altra, sense alterar la quantia total del pressupost són:",
        opcions: [
            { text: "Suplements de crèdits.", correcte: false },
            { text: "Generació de crèdits de despeses.", correcte: false },
            { text: "Transferències de crèdit.", correcte: true },
            { text: "Crèdits extraordinaris.", correcte: false }
        ]
    },
    {
        id: 55,
        pregunta: "“Quan la informació es troba lliure d’errors materials i biaixos i es pot considerar com a imatge fidel” ens estem referint a:",
        opcions: [
            { text: "Claredat.", correcte: false },
            { text: "Rellevància.", correcte: false },
            { text: "Fiabilitat.", correcte: true },
            { text: "Comparabilitat.", correcte: false }
        ]
    },
    {
        id: 56,
        pregunta: "Quines tipologies de contractes estableix i regula la Llei de contractes del sector públic?",
        opcions: [
            { text: "De serveis i de subministrament exclusivament.", correcte: false },
            { text: "D’obres i de serveis.", correcte: false },
            { text: "D’obres, de subministrament, de serveis, de concessió d’obres i de concessió de serveis.", correcte: true },
            { text: "D’obres, de serveis i de subministrament.", correcte: false }
        ]
    },
    {
        id: 57,
        pregunta: "Quina és la contraprestació que obté de la UPC el concessionari d’un contracte de concessió de serveis?",
        opcions: [
            { text: "El dret d’explotar el servei, acompanyat o no de la percepció d’un preu.", correcte: true },
            { text: "El dret d’explotar el servei, acompanyat sempre de la percepció d’un preu.", correcte: false },
            { text: "La percepció d’un preu, sense tenir el dret d’explotar el servei.", correcte: false },
            { text: "No obté cap contraprestació.", correcte: false }
        ]
    },
    {
        id: 58,
        pregunta: "S’entén per contracte mixt aquell que conté prestacions ...",
        opcions: [
            { text: "Corresponents al contracte de subministrament i al de serveis.", correcte: false },
            { text: "Pròpies de dos o més tipus de contractes.", correcte: true },
            { text: "Corresponents al contracte d’obres i al de serveis.", correcte: false },
            { text: "Corresponents al contracte d’obres i al de subministraments.", correcte: false }
        ]
    },
    {
        id: 59,
        pregunta: "Quins contractes de subministrament de la UPC es consideren sotmesos a regulació harmonitzada? Els contractes de subministrament amb un valor ...",
        opcions: [
            { text: "Estimat inferior a 215.000 €.", correcte: false },
            { text: "Estimat igual o superior a 100.000 €.", correcte: false },
            { text: "Estimat igual o superior a 215.000 €.", correcte: true },
            { text: "Estimat inferior a 100.000 €.", correcte: false }
        ]
    },
    {
        id: 60,
        pregunta: "Quin és el règim jurídic aplicable als contractes públics que adjudica la UPC?",
        opcions: [
            { text: "Estan sotmesos de forma general al dret administratiu, malgrat alguns contractes els és aplicable el dret privat.", correcte: true },
            { text: "Estan exclusivament sotmesos al dret administratiu.", correcte: false },
            { text: "Estan sotmesos de forma general al dret privat, malgrat alguns contractes els és aplicable el dret administratiu.", correcte: false },
            { text: "Estan exclusivament sotmesos al dret privat.", correcte: false }
        ]
    },
    {
        id: 61,
        pregunta: "El personal investigador podrà estar vinculat amb la Universitat pública o Organisme per al qual presti serveis mitjançant una relació sotmesa al dret administratiu o al dret laboral, i podrà ser:",
        opcions: [
            { text: "Funcionari de carrera.", correcte: false },
            { text: "Personal laboral fix.", correcte: false },
            { text: "Personal laboral temporal.", correcte: false },
            { text: "Totes les respostes anteriors són correctes.", correcte: true }
        ]
    },
    {
        id: 62,
        pregunta: "Un Personal Tècnic de Suport a la Recerca (PSR) té la següent consideració en relació a la participació a grups de recerca i al còmput d’indicadors RDI:",
        opcions: [
            { text: "Pot ser membre d’un grup de recerca.", correcte: true },
            { text: "Es computa la seva activitat amb PAR i PATT.", correcte: false },
            { text: "Computa com a Equivalent a Dedicació Plena (EDP) a efectes del càlcul d’indicadors de productivitat.", correcte: false },
            { text: "Totes les respostes anteriors són correctes.", correcte: false }
        ]
    },
    {
        id: 63,
        pregunta: "El número mínim de membres per a la creació d’un Grup de Recerca és:",
        opcions: [
            { text: "1 professor permanent o investigador ordinari.", correcte: false },
            { text: "5 professors entre permanents i investigadors ordinaris.", correcte: true },
            { text: "2 professors entre permanents i investigadors ordinaris i un personal de suport a la recerca.", correcte: false },
            { text: "2 professors entre permanents i investigadors ordinaris i un professor associat.", correcte: false }
        ]
    },
    {
        id: 64,
        pregunta: "La creació d’un Centre Específic de Recerca sota l’estructura de les unitats de recerca a la UPC és competència:",
        opcions: [
            { text: "Del Consell de Govern, a proposta del Rector.", correcte: true },
            { text: "De la Unitat Transversal de Gestió, a proposta de l’Investigador Principal (IP).", correcte: false },
            { text: "De la unitat bàsica, a proposta del o de la Cap de la UTG.", correcte: false },
            { text: "De l’Investigador Principal.", correcte: false }
        ]
    },
    {
        id: 65,
        pregunta: "L’estructura de la recerca a la UPC determina que l’objectiu dels Grups de Recerca és el següent:",
        opcions: [
            { text: "L’assessorament en la confecció dels plans d’estudis dels departaments.", correcte: false },
            { text: "L’assessorament en la confecció dels plans d’estudis de les Escoles o Facultats.", correcte: false },
            { text: "L’organització bàsica de la recerca en equips i la transmissió dels seus resultats a la societat.", correcte: true },
            { text: "L’organització bàsica de la recerca en equips però en cap cas la transmissió dels seus resultats a la societat.", correcte: false }
        ]
    },
    {
        id: 66,
        pregunta: "La modificació en el nom o altres característiques d’un Grup de Recerca de la UPC haurà de ser comunicada:",
        opcions: [
            { text: "Al Director del departament de l’Investigador Principal.", correcte: false },
            { text: "Al cap o la cap de la Unitat Transversal de Gestió corresponent.", correcte: false },
            { text: "A la Comissió de Recerca del Consell de Govern.", correcte: true },
            { text: "A la Comissió de Personal del Consell de Govern.", correcte: false }
        ]
    },
    {
        id: 67,
        pregunta: "Una entitat vinculada de recerca a la UPC requereix l’aprovació del Consell de Govern i del Consell Social de la UPC. Quin és el mecanisme que regula la vinculació?",
        opcions: [
            { text: "Escrit de l’Investigador Principal.", correcte: false },
            { text: "Escrit de la Unitat Transversal de Gestió.", correcte: false },
            { text: "Conveni de col·laboració.", correcte: true },
            { text: "No cal aprovació del Consell de Govern i del Consell Social.", correcte: false }
        ]
    },
    {
        id: 68,
        pregunta: "Quines figures de funcionari o contractat no es poden adscriure a les entitats vinculades de recerca de la UPC?",
        opcions: [
            { text: "Els professors temporals lectors.", correcte: false },
            { text: "Els professors agregats.", correcte: false },
            { text: "Els professors associats.", correcte: true },
            { text: "Els professors titulats.", correcte: false }
        ]
    },
    {
        id: 69,
        pregunta: "El Personal d’Administració i Serveis es pot adscriure a les entitats vinculades a la recerca (EVR) sempre i quan sigui sota les següents figures de vinculació:",
        opcions: [
            { text: "Mitjançant la figura de Personal de Suport a la Recerca.", correcte: false },
            { text: "Sigui personal especialitzat de laboratori amb coneixements de recerca.", correcte: false },
            { text: "Sigui personal de biblioteques per realitzar activitats de disseminació.", correcte: false },
            { text: "En cap cas el Personal d’Administració i Serveis es pot adscriure a les entitats vinculades a la recerca.", correcte: true }
        ]
    },
    {
        id: 70,
        pregunta: "El personal investigador de la UPC adscrit a les EVR podrà realitzar les següents tasques:",
        opcions: [
            { text: "De recerca científica i tècnica.", correcte: false },
            { text: "De desenvolupaments tecnològics, transferència o difusió de coneixement.", correcte: false },
            { text: "De direcció de centres de recerca, instal·lacions científiques i/o programes i projectes científics.", correcte: false },
            { text: "Totes les respostes anteriors són correctes.", correcte: true }
        ]
    },
    {
        id: 71,
        pregunta: "El nombre mínim d’hores per crèdit és de:",
        opcions: [
            { text: "10 hores", correcte: false },
            { text: "15 hores", correcte: false },
            { text: "20 hores", correcte: false },
            { text: "25 hores.", correcte: true }
        ]
    },
    {
        id: 72,
        pregunta: "Quin és el percentatge de places disponibles que el centre ha de reservar en cadascuna de les titulacions per a estudiants amb discapacitat?",
        opcions: [
            { text: "Un 2%.", correcte: false },
            { text: "Un 5%.", correcte: true },
            { text: "Un 7%.", correcte: false },
            { text: "Un 10%.", correcte: false }
        ]
    },
    {
        id: 73,
        pregunta: "Formen part dels requisits per accedir als estudis per la via d’accés de persones més grans de quaranta-cinc anys:",
        opcions: [
            { text: "Tenir quaranta-cinc anys d’edat o més, l’any natural d’inici del curs acadèmic.", correcte: false },
            { text: "No tenir cap titulació que habiliti per accedir a la universitat.", correcte: false },
            { text: "No poder acreditar experiència laboral o professional en l’àmbit del grau al qual es vol accedir.", correcte: false },
            { text: "Totes les respostes anteriors són correctes.", correcte: true }
        ]
    },
    {
        id: 74,
        pregunta: "L’acte administratiu mitjançant el qual l’estudiant sol·licita la prestació de serveis acadèmics per dur a terme l’activitat prevista al pla d’estudis de la titulació a la qual accedeix, per a un període acadèmic determinat és:",
        opcions: [
            { text: "Sol·licitud.", correcte: false },
            { text: "Matrícula.", correcte: true },
            { text: "Instància acadèmica.", correcte: false },
            { text: "Cap de les respostes anteriors és correcta.", correcte: false }
        ]
    },
    {
        id: 75,
        pregunta: "Un conjunt d’assignatures amb uns objectius formatius comuns que s’avaluen de manera global en un procediment són:",
        opcions: [
            { text: "Bloc curricular.", correcte: true },
            { text: "Programa acadèmic.", correcte: false },
            { text: "Pla docent.", correcte: false },
            { text: "Competències transversals.", correcte: false }
        ]
    },
    {
        id: 76,
        pregunta: "Poden ser objecte de reconeixement com a crèdits que computen a l’efecte de l’obtenció d’un títol oficial de grau:",
        opcions: [
            { text: "Les assignatures o crèdits cursats en estudis universitaris.", correcte: false },
            { text: "L’experiència laboral i professional acreditada.", correcte: false },
            { text: "Activitats universitàries culturals, esportives, de representació estudiantil, solidàries i de cooperació.", correcte: false },
            { text: "Totes les respostes anteriors són correctes.", correcte: true }
        ]
    },
    {
        id: 77,
        pregunta: "Per obtenir el reconeixement de crèdits per experiència laboral i professional cal acreditar un mínim de ...",
        opcions: [
            { text: "150 hores.", correcte: false },
            { text: "500 hores.", correcte: false },
            { text: "1000 hores.", correcte: false },
            { text: "1600 hores.", correcte: true }
        ]
    },
    {
        id: 78,
        pregunta: "Amb el “conjunt de matèries que condueixen a l’obtenció d’un dels títols de grau” ens estem referint a :",
        opcions: [
            { text: "Estudis o pla d’estudis.", correcte: true },
            { text: "Fase inicial.", correcte: false },
            { text: "Període lectiu.", correcte: false },
            { text: "Assignatura.", correcte: false }
        ]
    },
    {
        id: 79,
        pregunta: "Amb el “nombre d’ECTS corresponents al primer curs de cadascun dels plans d’estudis” ens estem referint a :",
        opcions: [
            { text: "Estudis o pla d’estudis.", correcte: false },
            { text: "Fase inicial.", correcte: true },
            { text: "Període lectiu.", correcte: false },
            { text: "Assignatura.", correcte: false }
        ]
    },
    {
        id: 80,
        pregunta: "“El conjunt d’actuacions que tenen com a objectiu l’adjudicació de les places ofertades per les universitats espanyoles per cursar ensenyaments universitaris oficials de grau entre els sol·licitants que compleixen els requisits d’accés” és:",
        opcions: [
            { text: "Admissió.", correcte: false },
            { text: "Procediment d’admissió.", correcte: true },
            { text: "Assignació.", correcte: false },
            { text: "Sorteig.", correcte: false }
        ]
    },

];