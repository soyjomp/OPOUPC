const preguntesObligatories = [
    {
        id: 1,
        pregunta: "La tècnica que consisteix en una llista de verificació (checklist) generadora d’idees basada en verbs d’acció que suggereixen canvis és:",
        opcions: [
            { text: "SCAMPER", correcte: true },
            { text: "Mapa/diagrama relacional", correcte: false },
            { text: "DM3", correcte: false },
            { text: "START – STOP - CONTINUE", correcte: false }
        ]
    },
    {
        id: 2,
        pregunta: "En relació a la definició d’un objectiu, quan expresso “poder avaluar la seva consecució i analitzar les desviacions” estic fent referència a:",
        opcions: [
            { text: "Mesurable", correcte: true },
            { text: "Assolible", correcte: false },
            { text: "Realista", correcte: false },
            { text: "Específic", correcte: false }
        ]
    },
    {
        id: 3,
        pregunta: "La tècnica que permet revisar les accions que han realitzat en el passat i definir quines val la pena detenir o començar a fer és:",
        opcions: [
            { text: "SCAMPER", correcte: false },
            { text: "Mapa/diagrama relacional", correcte: false },
            { text: "Quadre/Diagrama de fites", correcte: false },
            { text: "START – STOP - CONTINUE", correcte: true }
        ]
    },
    {
        id: 4,
        pregunta: "La tècnica MARTE permet la descripció d’un objectiu de forma que observo si és:",
        opcions: [
            { text: "Observable – assolible – real – específic – temporal", correcte: false },
            { text: "Medible/mesurable – assolible – temporalitzat – específic – rellevant", correcte: true },
            { text: "Mesurable/medible – assolible – encertat – realista – temporalitzat", correcte: false },
            { text: "Observable – avaluable – real – específic – temporal", correcte: false }
        ]
    },
    {
        id: 5,
        pregunta: "Revisant el següent objectiu de millora en resposta a una situació “que els estudiants abans de sortir del seu país coneguin i tinguin temps de preparar la documentació legal requerida”, t’adones que no està ben formulat perquè no s’observa a la redacció:",
        opcions: [
            { text: "Un verb d’acció que indiqui a què donem resposta i què s’ha de fer", correcte: true },
            { text: "Quin és el resultat que es vol obtenir donant resposta a la situació", correcte: false },
            { text: "Quines són les persones implicades i, per tant, no es portarà a terme", correcte: false },
            { text: "Quin és el mètode que cal seguir", correcte: false }
        ]
    },
    {
        id: 6,
        pregunta: "Si valores descriure un objectiu executiu, et planteges un objectiu que doni resposta:",
        opcions: [
            { text: "A “Quan” i “Qui” ha de fer alguna acció immediata per resoldre el tema", correcte: false },
            { text: "A “Per a què”, una finalitat a llarg termini", correcte: false },
            { text: "A “Com” resoldre la situació", correcte: true },
            { text: "Al curt termini", correcte: false }
        ]
    },
    {
        id: 7,
        pregunta: "La tècnica que permet identificar les relacions bàsiques en un projecte/iniciativa de millora on cal que col·laborin diferents agents perquè pugui portar-se a terme és:",
        opcions: [
            { text: "SCAMPER", correcte: false },
            { text: "Mapa/diagrama relacional", correcte: true },
            { text: "Quadre/Diagrama de fites", correcte: false },
            { text: "DM3", correcte: false }
        ]
    },
    {
        id: 8,
        pregunta: "En la tècnica START – STOP – CONTINUE, per trobar accions a CONTINUAR (CONTINUE), quina de les següents afirmacions et planteges:",
        opcions: [
            { text: "Ho podem duplicar?", correcte: false },
            { text: "Quines coses fem actualment que ens estan beneficiant?", correcte: true },
            { text: "Quines idees no s’han tingut en compte?", correcte: false },
            { text: "A quina nova realitat ens hem d’adaptar?", correcte: false }
        ]
    },
    {
        id: 9,
        pregunta: "Els enfocaments generals d’una organització que es duen a terme per aconseguir les metes plantejades, centrant-se en el “per a què” i establint què es vol aconseguir en el futur fan referència als objectius:",
        opcions: [
            { text: "Executius o tàctics", correcte: false },
            { text: "Generals", correcte: false },
            { text: "Estratègics", correcte: true },
            { text: "Específics", correcte: false }
        ]
    },
    {
        id: 10,
        pregunta: "Si parlem de “a quines noves situacions ens hem d’adaptar” o “ quines idees no s’han tingut en compte” estem fent referència dins de la tècnica START – STOP – CONTINUE a:",
        opcions: [
            { text: "Començar", correcte: true },
            { text: "Aturar", correcte: false },
            { text: "Continuar", correcte: false },
            { text: "Substituir", correcte: false }
        ]
    },
    {
        id: 11,
        pregunta: "L’eina que permet mostrar gràficament l’avenç o progrés d’un projecte representant les etapes més importants d’aquest és:",
        opcions: [
            { text: "SCAMPER", correcte: false },
            { text: "Mapa/diagrama relacional", correcte: false },
            { text: "Quadre/Diagrama de fites", correcte: true },
            { text: "DM3", correcte: false }
        ]
    },
    {
        id: 12,
        pregunta: "Quin és el significat de les lletres SCAMPER?",
        opcions: [
            { text: "S Seleccionar C Classificar A Adaptar M Mesurar P Prioritzar E Eliminar o minimitzar R Reenfocar", correcte: false },
            { text: "S Substituir C Combinar A Adaptar M Magnificar o modificar P Posar-li un altre ús E Eliminar o minimitzar R Reorganitzar, invertir o reordenar", correcte: true },
            { text: "S Seleccionar C Començar A Aturar M Mesurar P Ponderar E Estudiar R Renovar", correcte: false },
            { text: "S Substituir C Classificar A Adaptar M Modificar P Prioritzar E Evitar R Reordenar, reorganitzar o invertir", correcte: false }
        ]
    },
    {
        id: 13,
        pregunta: "Els tres tipus de relacions que identifica la tècnica mapa relacional són:",
        opcions: [
            { text: "De valor, de referent i de necessitat", correcte: true },
            { text: "De valor, de relació i de demanda", correcte: false },
            { text: "De validació, de referent i de reforç", correcte: false },
            { text: "De valor, de relació i de reducció", correcte: false }
        ]
    },
    {
        id: 14,
        pregunta: "A la tècnica mapa relacional, el tipus de relació que s’observa en “persones que exerceixen influència per la seva forma de ser o fer cap a nosaltres” és:",
        opcions: [
            { text: "Relació de referent", correcte: true },
            { text: "Relació de valor", correcte: false },
            { text: "Relació de necessitat", correcte: false },
            { text: "Relació de vàlua", correcte: false }
        ]
    },
    {
        id: 15,
        pregunta: "La tècnica que permet avaluar idees a partir de preguntes clau per valorar cada idea, adjudicant punts en funció del rang és la tècnica:",
        opcions: [
            { text: "SCAMPER", correcte: false },
            { text: "Dels 8 factors", correcte: true },
            { text: "Quadre/Diagrama de fites", correcte: false },
            { text: "DM3", correcte: false }
        ]
    },
    {
        id: 16,
        pregunta: "Si parlem de les següents preguntes “quina altra idea ens suggereix això?, el passat ens ofereix algun paral·lelisme?, què podríem copiar?, què podríem emular?, quina idea hi podríem incorporar? o en quins diferents contexts puc incloure el meu concepte? ” estem fent referència dins de la tècnica SCAMPER al verb:",
        opcions: [
            { text: "Substituir", correcte: false },
            { text: "Adaptar", correcte: true },
            { text: "Posar-li un altre ús", correcte: false },
            { text: "Modificar", correcte: false }
        ]
    },
    {
        id: 17,
        pregunta: "L’estadística descriptiva serveix per:",
        opcions: [
            { text: "Respondre a les preguntes rellevants del teu projecte mitjançant els gràfics i les taules resum", correcte: true },
            { text: "Crear models estadístics per tal d’entendre quins factors són els més importants en una determinada variable resposta", correcte: false },
            { text: "Crear eines que ens permetin solucionar problemes reals", correcte: false },
            { text: "Extreure conclusions mitjançant gràfics exclusivament", correcte: false }
        ]
    },
    {
        id: 18,
        pregunta: "Si es vol veure “si hi ha diferències de nota entre els estudiants del grup de matí i de tarda d’una determinada titulació” ens estem plantejant una pregunta:",
        opcions: [
            { text: "Relacional", correcte: false },
            { text: "Causal", correcte: false },
            { text: "Comparativa", correcte: true },
            { text: "D’intel·ligència artificial", correcte: false }
        ]
    },
    {
        id: 19,
        pregunta: "Les variables qualitatives nominals:",
        opcions: [
            { text: "Expressen etiquetes, grups que no es poden ordenar com per exemple el país o el gènere", correcte: true },
            { text: "Expressen una escala mesurable, numèrica, sense decimals. Un exemple són els anys d’antiguitat que té un professional en una empresa", correcte: false },
            { text: "Expressen una escala mesurable numèrica, amb decimals; com per exemple la puntuació d’un examen", correcte: false },
            { text: "Expressen una escala mitjançant etiquetes com per exemple la grandària d’una universitat expressada per petita, mitjana i gran", correcte: false }
        ]
    },
    {
        id: 20,
        pregunta: "Les variables quantitatives contínues:",
        opcions: [
            { text: "Expressen etiquetes, grups que no es poden ordenar com per exemple el país o el gènere", correcte: false },
            { text: "Expressen una escala mesurable, numèrica, sense decimals. Un exemple són els anys d’antiguitat que té un professional en una empresa", correcte: false },
            { text: "Expressen una escala mesurable, numèrica, amb decimals; com per exemple la puntuació d’un examen", correcte: true },
            { text: "Expressen una escala mitjançant etiquetes com per exemple la grandària d’una universitat expressada per petita, mitjana i gran", correcte: false }
        ]
    },
    {
        id: 21,
        pregunta: "El percentil 50 és:",
        opcions: [
            { text: "La mitjana", correcte: false },
            { text: "Mesura de dispersió", correcte: false },
            { text: "La mediana i mesura de centralitat", correcte: true },
            { text: "Mesura de posició i també de dispersió", correcte: false }
        ]
    },
    {
        id: 22,
        pregunta: "Quins gràfics faries servir per descriure una sola variable qualitativa?",
        opcions: [
            { text: "Diagrama de sectors", correcte: false },
            { text: "Diagrama de barres", correcte: false },
            { text: "Diagrama de barres apilat", correcte: false },
            { text: "Tots els gràfics anteriors són correctes", correcte: true }
        ]
    },
    {
        id: 23,
        pregunta: "Quin gràfic faries per veure l’evolució de la puntuació de notes mitjanes de les diferents titulacions entre els anys 2018 i 2022?",
        opcions: [
            { text: "Un boxplot", correcte: false },
            { text: "Un diagrama de sectors", correcte: false },
            { text: "Un diagrama de línies", correcte: true },
            { text: "Un diagrama de radar", correcte: false }
        ]
    },
    {
        id: 24,
        pregunta: "La descripció multivariada o multivariant tracta de:",
        opcions: [
            { text: "Descriure totes les variables de la taula de dades una a una, per separat", correcte: false },
            { text: "Comparar o relacionar variables per tal d’extreure conclusions rellevants de la taula de dades", correcte: true },
            { text: "Totes les variables una a una calcular la taula de freqüències", correcte: false },
            { text: "Crear un diagrama de barres de totes les variables", correcte: false }
        ]
    },
    {
        id: 25,
        pregunta: "El diagrama de radar s’utilitza per:",
        opcions: [
            { text: "Representar les mitjanes de n variables quantitatives", correcte: true },
            { text: "Una variable quantitativa", correcte: false },
            { text: "Dues variables quantitatives", correcte: false },
            { text: "Variables qualitatives", correcte: false }
        ]
    },
    {
        id: 26,
        pregunta: "La freqüència que ens dona informació de la probabilitat d’ocurrència és:",
        opcions: [
            { text: "L’absoluta", correcte: false },
            { text: "La relativa", correcte: true },
            { text: "La condicionada", correcte: false },
            { text: "La freqüència no ens dona informació de la probabilitat d’ocurrència", correcte: false }
        ]
    },
    {
        id: 27,
        pregunta: "La desviació estàndard és un valor indicatiu de:",
        opcions: [
            { text: "La centralitat", correcte: false },
            { text: "La freqüència", correcte: false },
            { text: "La dispersió", correcte: true },
            { text: "La correlació", correcte: false }
        ]
    },
    {
        id: 28,
        pregunta: "Són estadístics descriptius de posició:",
        opcions: [
            { text: "La mitjana i la mediana", correcte: false },
            { text: "La desviació estàndard", correcte: false },
            { text: "El rang interquartílic", correcte: false },
            { text: "Els quartils i percentils", correcte: true }
        ]
    },
    {
        id: 29,
        pregunta: "Les variables que es poden transformar en altres variables a partir de la creació de rangs, per exemple rangs d’edat, són les variables:",
        opcions: [
            { text: "Qualitatives o categòriques nominals", correcte: false },
            { text: "Qualitatives o categòriques ordinals", correcte: true },
            { text: "Discretes quantitatives o numèriques", correcte: false },
            { text: "Contínues quantitatives o numèriques", correcte: false }
        ]
    },
    {
        id: 30,
        pregunta: "Les característiques observables i mesurables dels individus que componen una mostra són:",
        opcions: [
            { text: "Variables", correcte: true },
            { text: "Freqüències", correcte: false },
            { text: "Descriptors", correcte: false },
            { text: "Recomanadors", correcte: false }
        ]
    },
    {
        id: 31,
        pregunta: "Quins són els dos aspectes importants en relació amb el coeficient de correlació?",
        opcions: [
            { text: "Signe positiu o negatiu", correcte: false },
            { text: "Valor positiu o negatiu", correcte: false },
            { text: "Signe i valor absolut", correcte: true },
            { text: "Signe i direcció (ascendent o descendent)", correcte: false }
        ]
    },
    {
        id: 32,
        pregunta: "L’estadística inferencial serveix per:",
        opcions: [
            { text: "Investigar. Extreure conclusions generals de tota la població amb les dades d’una mostra", correcte: true },
            { text: "Respondre a les preguntes rellevants del teu projecte mitjançant els gràfics i les taules resum", correcte: false },
            { text: "Crear eines que ens permetin solucionar problemes reals", correcte: false },
            { text: "Extreure conclusions mitjançant exclusivament gràfics", correcte: false }
        ]
    },
    {
        id: 33,
        pregunta: "Les variables qualitatives o categòriques poden ser:",
        opcions: [
            { text: "Nominals, discretes i contínues", correcte: false },
            { text: "Ordinals, discretes i contínues", correcte: false },
            { text: "Nominals i ordinals", correcte: true },
            { text: "Només discretes i contínues", correcte: false }
        ]
    },
    {
        id: 34,
        pregunta: "Referent a l’activitat de recerca (PAR) – PAR Tipus 1 de la unitat 710 EEL, el seu valor respecte de l’any 2021 al 2019, d’acord amb el que ens indiquen les dades és que:",
        opcions: [
            { text: "Ha estat creixent", correcte: false },
            { text: "Ha estat decreixent", correcte: false },
            { text: "Ha estat una evolució decreixent i creixent", correcte: false },
            { text: "Ha estat una evolució creixent i decreixent", correcte: true }
        ]
    },
    {
        id: 35,
        pregunta: "Referent a l’activitat de recerca (PAR) – PAR Tipus 2 de la unitat 710 EEL, el seu valor respecte de l’any 2021 al 2019, d’acord amb el que ens indiquen les dades és que:",
        opcions: [
            { text: "Ha estat creixent", correcte: false },
            { text: "Ha estat decreixent", correcte: false },
            { text: "Ha estat una evolució decreixent i creixent", correcte: true },
            { text: "Ha estat una evolució creixent i decreixent", correcte: false }
        ]
    },
    {
        id: 36,
        pregunta: "I referent al PAR TOTAL de l’any 2019 al 2021 de la unitat 710 EEL, què ens indiquen les dades?",
        opcions: [
            { text: "Ha estat creixent", correcte: false },
            { text: "Ha estat decreixent", correcte: false },
            { text: "Ha estat una evolució decreixent i creixent", correcte: false },
            { text: "Ha estat una evolució creixent i decreixent", correcte: true }
        ]
    },
    ];
    // Preguntes de resposta oberta / curta amb caixa de text, pista i solució
   const preguntesObertes = [
    {
        id: "oberta_1",
        seccio: "TÈCNIQUES D’ORIENTACIÓ A LA MILLORA I RESULTATS",
        pregunta: "Quina de les tècniques pertanyents a la fase d’observació és la que ens permet mobilitzar cap a l’acció i ens proporciona una metodologia per a l’anàlisi situacional?",
        pista: "Té a veure amb punts clau o etapes d'un projecte (fites).",
        respostaCorrecta: "Quadre o diagrama de fites"
    },
    {
        id: "oberta_2",
        seccio: "TÈCNIQUES D’ORIENTACIÓ A LA MILLORA I RESULTATS",
        pregunta: "Si entro en una fase de concreció dins d’un pla de millora i he de definir els objectius, quina és la tècnica que hauré de fer servir?",
        pista: "Acrònim en català o anglès que defineix que un objectiu ha de ser Medible, Assolible, Rellevant, Temporalitzat i Específic.",
        respostaCorrecta: "MARTE/SMART"
    },
    {
        id: "oberta_3",
        seccio: "TÈCNIQUES D’ORIENTACIÓ A LA MILLORA I RESULTATS",
        pregunta: "D’acord amb la tècnica DM3, a què fa referència la següent frase? “L’expressió pràctica d’un desig o allò que hem de fer”",
        pista: "Dins de la metodologia DM3, és el concepte que defineix el propòsit o la finalitat a aconseguir.",
        respostaCorrecta: "Meta/Metes"
    },
    {
        id: "oberta_4",
        seccio: "TÈCNIQUES D’ORIENTACIÓ A LA MILLORA I RESULTATS",
        pregunta: "D’acord amb la tècnica DM3, a què fa referència la següent frase? “La determinació de qui ho fa, quan s’ha de fer, qui és el responsable de controlar-lo, on s’executa, quant ens costarà i quins són els recursos implicats”",
        pista: "És la 'M' de la tècnica DM3 que concreta l'execució, calendari i recursos de les accions.",
        respostaCorrecta: "Mesures"
    },


];