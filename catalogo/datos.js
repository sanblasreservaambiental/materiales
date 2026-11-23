/* Catálogo de especies · San Blas Reserva Ambiental
 *
 * Cada especie tiene:
 *   id, grupo ("plantas" | "aves" | otro grupo), cientifico,
 *   nombre {es,en,de}, estatus [claves de ESTATUS], foto {src, tipo, credito},
 *   descripcion {es,en,de}, usos {es,en,de}
 * Para añadir una especie, copien un bloque y cambien los textos.
 * Las especies que solo están en iNaturalist se cargan aparte desde datos-inat.js.
 */
window.ESTATUS = {
  "endemica-tenerife":  { es: "Endemismo tinerfeño",      en: "Tenerife endemic",         de: "Endemit Teneriffas" },
  "endemica-canaria":   { es: "Endemismo canario",        en: "Canary Islands endemic",   de: "Kanarischer Endemit" },
  "endemica-macaro":    { es: "Endemismo macaronésico",   en: "Macaronesian endemic",     de: "Makaronesischer Endemit" },
  "subespecie-endemica":{ es: "Subespecie endémica",      en: "Endemic subspecies",       de: "Endemische Unterart" },
  "nativa":             { es: "Nativa",                   en: "Native",                   de: "Einheimisch" },
  "introducida":        { es: "Introducida",              en: "Introduced",               de: "Eingeführt" },
  "residente":          { es: "Residente",                en: "Resident",                 de: "Standvogel" },
  "invernante":         { es: "Invernante y de paso",     en: "Winter visitor & migrant", de: "Wintergast & Durchzügler" },
  "estival":            { es: "Estival",                  en: "Summer visitor",           de: "Sommergast" },
  "sin-proyecto":       { es: "Aún no está en el proyecto", en: "Not in the project yet",  de: "Noch nicht im Projekt" },
  "protegida":          { es: "Protegida",                en: "Protected",                de: "Geschützt" },
  "uicn-cr":            { es: "En peligro crítico (UICN)", en: "Critically endangered (IUCN)", de: "Vom Aussterben bedroht (IUCN)" },
  "uicn-en":            { es: "En peligro (UICN)",        en: "Endangered (IUCN)",        de: "Stark gefährdet (IUCN)" },
  "uicn-vu":            { es: "Vulnerable (UICN)",        en: "Vulnerable (IUCN)",        de: "Gefährdet (IUCN)" },
  "ceea-vu":            { es: "Vulnerable (Catálogo Español de Especies Amenazadas)", en: "Vulnerable (Spanish catalogue of threatened species)", de: "Gefährdet (Spanischer Katalog bedrohter Arten)" },
  "toxica":             { es: "Látex tóxico",             en: "Toxic latex",              de: "Giftiger Milchsaft" },
  "invasora":           { es: "Invasora",                 en: "Invasive",                 de: "Invasiv" },
  "aproximada":         { es: "Ubicación aproximada",     en: "Approximate location",     de: "Ungefährer Fundort" },
  "vista-reserva":      { es: "Vista en la reserva",      en: "Seen in the reserve",      de: "Im Reservat gesehen" },
  "entorno":            { es: "Entorno de la reserva",    en: "Around the reserve",       de: "Umgebung des Reservats" }
};

/* Islas donde vive cada endemismo canario. Animales: presencia segura según el
   Banco de Datos de Biodiversidad de Canarias. Fuente: listados de
   endemicascanarias.com por islas (23 nov 2026). H Hierro, P La Palma,
   G La Gomera, T Tenerife, C Gran Canaria, F Fuerteventura, L Lanzarote. */
window.ISLAS = {
  "argyranthemum gracile": "T",
  "lavandula canariensis": "T",
  "monanthes pallens": "GT",
  "ceropegia fusca": "TC",
  "lotus sessilifolius": "GTC",
  "marcetella moquiniana": "GTC",
  "sonchus capillaris": "GTC",
  "reseda scoparia": "PGTC",
  "allagopappus canariensis": "HGTC",
  "cneorum pulverulentum": "HGTC",
  "euphorbia lamarckii": "HPGT",
  "bosea yervamora": "HPGTCF",
  "euphorbia canariensis": "HPGTCF",
  "plocama pendula": "HPGTCF",
  "campylanthus salsoloides": "PGTCFL",
  "autonoe haemorrhoidalis": "HPGTCFL",
  "forsskaolea angustifolia": "HPGTCFL",
  "kleinia neriifolia": "HPGTCFL",
  "gallotia galloti": "T",
  "pimelia canariensis": "T",
  "leptochilus cruentatus": "GTC",
  "colletes moricei": "PGTC",
  "camponotus feae": "HGTCFL",
  "tarentola delalandii": "PT",
  "argyranthemum frutescens": "GTC"  /* Banco de Datos: presencia segura en G, T y C; en el resto, traslocada */
};

/* Estado de conservación (solo lo que no es «preocupación menor»), revisado el
   23 nov 2026. «uicn»: Lista Roja mundial de la UICN (vía iNaturalist).
   «ceea»: Catálogo Español de Especies Amenazadas. «protegida»: el Banco de
   Datos de Biodiversidad de Canarias la marca como especie protegida (la
   categoría concreta está en CENTINELA). */
window.CONSERVACION = {
  "patellifolia procumbens": { uicn: "cr" },
  "marcetella moquiniana":   { uicn: "en", protegida: true },
  "colletes moricei":        { uicn: "vu" },
  "puffinus puffinus":       { ceea: "vu", protegida: true },
  "ceropegia fusca": { protegida: true }, "euphorbia canariensis": { protegida: true },
  "argyranthemum frutescens": { protegida: true }, "reseda scoparia": { protegida: true },
  "pimelia canariensis": { protegida: true }, "campylanthus salsoloides": { protegida: true },
  "cneorum pulverulentum": { protegida: true }, "cosentinia vellea": { protegida: true },
  "monanthes pallens": { protegida: true }, "chelonia mydas": { protegida: true },
  "numenius phaeopus": { protegida: true }, "tadorna ferruginea": { protegida: true },
  "egretta garzetta": { protegida: true }, "motacilla cinerea": { protegida: true },
  "lanius meridionalis": { protegida: true }, "ardea cinerea": { protegida: true },
  "anthus berthelotii": { protegida: true }, "falco tinnunculus": { protegida: true },
  "gallinula chloropus": { protegida: true }, "apus unicolor": { protegida: true },
  "upupa epops": { protegida: true }, "corvus corax": { protegida: true },
  "asio otus": { protegida: true }, "curruca conspicillata": { protegida: true }
};

/* Notas de distribución para especies con área muy pequeña (texto por idioma). */
window.NOTAS = {
  "pimelia canariensis": {
    es: "Área muy reducida: solo vive en la costa sur y sureste de Tenerife. Las 21 observaciones de iNaturalist (nov. 2026) están en San Miguel de Abona (San Blas, Amarilla), Granadilla (El Médano, Montaña Roja), Arona y el Malpaís de Güímar.",
    en: "Very small range: it only lives on the south and south-east coast of Tenerife. The 21 iNaturalist records (Nov 2026) are from San Miguel de Abona (San Blas, Amarilla), Granadilla (El Médano, Montaña Roja), Arona and the Malpaís de Güímar.",
    de: "Sehr kleines Verbreitungsgebiet: nur an der Süd- und Südostküste Teneriffas. Die 21 iNaturalist-Beobachtungen (Nov. 2026) stammen aus San Miguel de Abona (San Blas, Amarilla), Granadilla (El Médano, Montaña Roja), Arona und dem Malpaís de Güímar."
  }
};

window.GRUPOS = {
  plantas: { es: "Plantas", en: "Plants", de: "Pflanzen" },
  aves:    { es: "Aves",    en: "Birds",  de: "Vögel" }
};

const CRED_PLANTAS = "Guía de plantas de San Blas Reserva Ambiental";
const CRED_AVES = "Guía de aves de San Blas Reserva Ambiental";

window.ESPECIES = [
/* ───────────────────────── PLANTAS ───────────────────────── */
{
  id: "tabaiba-dulce", grupo: "plantas", cientifico: "Euphorbia balsamifera",
  nombre: { es: "Tabaiba dulce", en: "Balsam spurge", de: "Balsam-Wolfsmilch" },
  estatus: ["nativa"],
  foto: { src: "img/tabaiba-dulce.jpg", tipo: "foto", credito: CRED_PLANTAS },
  descripcion: {
    es: "Arbusto suculento de hasta dos metros, con ramas grises muy ramificadas que forman una copa redondeada, como una sombrilla pegada al suelo. Las hojas, pequeñas y carnosas, se agrupan en la punta de las ramas y se caen en verano para ahorrar agua. Es la planta que da nombre al tabaibal, el paisaje más típico de la costa baja de Tenerife.",
    en: "A succulent shrub up to two metres tall, with grey, densely branched stems that form a rounded, umbrella-like dome. Its small fleshy leaves cluster at the branch tips and drop in summer to save water. It is the plant that gives its name to the tabaibal, the most typical landscape of Tenerife's dry lowlands.",
    de: "Ein sukkulenter Strauch von bis zu zwei Metern Höhe mit grauen, stark verzweigten Ästen, die eine runde, schirmartige Krone bilden. Die kleinen, fleischigen Blätter sitzen an den Zweigspitzen und fallen im Sommer ab, um Wasser zu sparen. Sie gibt dem „Tabaibal“ seinen Namen, der typischsten Landschaft der trockenen Küstenzone Teneriffas."
  },
  usos: {
    es: "A diferencia de otras tabaibas, su látex no es venenoso. Antiguamente los pastores y la chiquillería lo dejaban secar y lo mascaban como si fuera chicle. Las ramas secas se usaron como leña y las cabras la ramonean.",
    en: "Unlike other spurges, its milky latex is not poisonous. Shepherds and children used to let it dry and chew it like chewing gum. Dry branches were used as firewood, and goats browse it.",
    de: "Anders als bei anderen Wolfsmilcharten ist ihr Milchsaft nicht giftig. Hirten und Kinder ließen ihn früher trocknen und kauten ihn wie Kaugummi. Trockene Zweige dienten als Brennholz, und Ziegen fressen die Pflanze."
  }
},
{
  id: "salado-blanco", grupo: "plantas", cientifico: "Schizogyne sericea",
  nombre: { es: "Salado blanco", en: "Silky schizogyne (salado blanco)", de: "Seidige Schizogyne (Salado blanco)" },
  estatus: ["endemica-macaro"],
  foto: { src: "img/salado-blanco.jpg", tipo: "foto", credito: CRED_PLANTAS },
  descripcion: {
    es: "Arbusto bajo y compacto, de color gris plateado por los pelillos sedosos que cubren sus hojas estrechas. En primavera se llena de pequeñas cabezuelas amarillas. Vive cerca del mar y soporta muy bien la sal y el viento; solo se encuentra en Canarias y en las islas Salvajes.",
    en: "A low, compact shrub with a silvery-grey colour due to the silky hairs that cover its narrow leaves. In spring it is covered with small yellow flower heads. It grows near the sea and tolerates salt spray and wind very well; it is found only in the Canary Islands and the Savage Islands.",
    de: "Ein niedriger, kompakter Strauch, silbergrau durch die seidigen Härchen auf den schmalen Blättern. Im Frühling trägt er viele kleine gelbe Blütenköpfchen. Er wächst in Meeresnähe, verträgt Salz und Wind sehr gut und kommt nur auf den Kanaren und den Ilhas Selvagens vor."
  },
  usos: {
    es: "No se le conocen usos tradicionales destacados. Hoy se aprecia en jardinería costera porque necesita muy poca agua, y ayuda a sujetar el suelo frente a la erosión.",
    en: "No notable traditional uses are known. Today it is valued in coastal gardening because it needs very little water, and it helps hold the soil against erosion.",
    de: "Besondere traditionelle Verwendungen sind nicht bekannt. Heute wird er in Küstengärten geschätzt, weil er kaum Wasser braucht, und er schützt den Boden vor Erosion."
  }
},
{
  id: "cardoncillo-gris", grupo: "plantas", cientifico: "Ceropegia fusca",
  nombre: { es: "Cardoncillo gris", en: "Brown ceropegia (cardoncillo)", de: "Braune Leuchterblume (Cardoncillo)" },
  estatus: ["endemica-canaria", "protegida"],
  foto: { src: "img/cardoncillo-gris.jpg", tipo: "foto", credito: CRED_PLANTAS },
  descripcion: {
    es: "Planta suculenta de tallos cilíndricos, grises y articulados, casi sin hojas, que de lejos recuerda a un cardón pequeño. Sus flores, de color pardo rojizo y forma de tubo, atrapan durante un tiempo a pequeñas moscas para que transporten el polen. Solo vive en Tenerife y Gran Canaria y está protegida.",
    en: "A succulent plant with grey, cylindrical, jointed stems and almost no leaves; from a distance it looks like a small cardón. Its reddish-brown tubular flowers briefly trap small flies so that they carry the pollen. It lives only on Tenerife and Gran Canaria and is protected.",
    de: "Eine sukkulente Pflanze mit grauen, zylindrischen, gegliederten Stängeln und fast ohne Blätter, die von weitem wie ein kleiner Cardón aussieht. Ihre rotbraunen, röhrenförmigen Blüten halten kleine Fliegen eine Zeit lang fest, damit sie den Pollen weitertragen. Sie lebt nur auf Teneriffa und Gran Canaria und ist geschützt."
  },
  usos: {
    es: "No se le conocen usos tradicionales. Su valor es ecológico: es una joya de la flora canaria y un buen ejemplo de cómo las plantas engañan a los insectos para polinizarse.",
    en: "No traditional uses are known. Its value is ecological: it is a gem of the Canarian flora and a good example of how plants trick insects into pollinating them.",
    de: "Traditionelle Verwendungen sind nicht bekannt. Ihr Wert ist ökologisch: ein Juwel der kanarischen Flora und ein gutes Beispiel dafür, wie Pflanzen Insekten zur Bestäubung überlisten."
  }
},
{
  id: "balo", grupo: "plantas", cientifico: "Plocama pendula",
  nombre: { es: "Balo", en: "Balo", de: "Balo" },
  estatus: ["endemica-canaria"],
  foto: { src: "img/balo.jpg", tipo: "foto", credito: CRED_PLANTAS },
  descripcion: {
    es: "Arbusto de ramas finas y colgantes, con hojas como hilos, que le dan un aspecto de sauce llorón en miniatura. Si estrujan una rama notarán un olor fuerte y desagradable. Crece sobre todo en los cauces de los barrancos secos; sus frutillos blancos los comen los lagartos, que ayudan a dispersar las semillas.",
    en: "A shrub with thin, drooping branches and thread-like leaves, which make it look like a miniature weeping willow. If you crush a twig you will notice a strong, unpleasant smell. It grows mainly in dry ravine beds; lizards eat its small white fruits and help to spread the seeds.",
    de: "Ein Strauch mit dünnen, herabhängenden Zweigen und fadenförmigen Blättern, der wie eine kleine Trauerweide aussieht. Zerreibt man einen Zweig, riecht er stark und unangenehm. Er wächst vor allem in trockenen Schluchtbetten; Eidechsen fressen seine kleinen weißen Früchte und verbreiten so die Samen."
  },
  usos: {
    es: "Sus ramas se han aprovechado como leña. Hoy se usa en jardinería por su porte llorón y porque aguanta muy bien la sequía.",
    en: "Its branches have been used as firewood. Today it is planted in gardens for its weeping shape and because it withstands drought very well.",
    de: "Die Zweige wurden als Brennholz genutzt. Heute pflanzt man ihn wegen seiner hängenden Form und seiner Trockenheitsresistenz gern in Gärten."
  }
},
{
  id: "espina-santa", grupo: "plantas", cientifico: "Lycium intricatum",
  nombre: { es: "Espina santa", en: "Boxthorn", de: "Verworrener Bocksdorn" },
  estatus: ["nativa"],
  foto: { src: "img/espina-santa.jpg", tipo: "foto", credito: CRED_PLANTAS },
  descripcion: {
    es: "Arbusto muy enmarañado y lleno de espinas, con hojitas pequeñas y carnosas. Da flores tubulares de color lila o blanco y pequeñas bayas de color naranja o rojo. Vive en la costa y en terrenos secos de Canarias, el norte de África y el Mediterráneo.",
    en: "A very tangled, spiny shrub with small fleshy leaves. It has tubular lilac or white flowers and small orange or red berries. It lives on coasts and dry ground in the Canary Islands, North Africa and the Mediterranean.",
    de: "Ein sehr verworrener, dorniger Strauch mit kleinen, fleischigen Blättern. Er trägt röhrenförmige lila oder weiße Blüten und kleine orange bis rote Beeren. Er wächst an Küsten und auf trockenem Boden der Kanaren, Nordafrikas und des Mittelmeerraums."
  },
  usos: {
    es: "Por sus espinas se ha usado para cerrar corrales y huertas. Sus bayas son alimento de aves y lagartos, y el alcaudón real clava a veces sus presas en las espinas para guardarlas.",
    en: "Because of its thorns it has been used to fence goat pens and gardens. Its berries feed birds and lizards, and the southern grey shrike sometimes impales its prey on the thorns to store it.",
    de: "Wegen seiner Dornen wurde er zum Einzäunen von Pferchen und Gärten genutzt. Seine Beeren sind Nahrung für Vögel und Eidechsen, und der Raubwürger spießt manchmal seine Beute auf den Dornen auf, um sie zu lagern."
  }
},
{
  id: "cardon", grupo: "plantas", cientifico: "Euphorbia canariensis",
  nombre: { es: "Cardón", en: "Canary Island spurge", de: "Kanaren-Wolfsmilch" },
  estatus: ["endemica-canaria", "toxica"],
  foto: { src: "img/cardon.jpg", tipo: "foto", credito: CRED_PLANTAS },
  descripcion: {
    es: "La planta más emblemática del sur de las islas. Sus tallos de cuatro o cinco caras, con pares de espinas cortas, crecen juntos como un gran candelabro y pueden formar matas de varios metros de diámetro. Aunque parece un cactus, no lo es: es una euforbia, y por dentro tiene un látex blanco. Es el símbolo vegetal de Gran Canaria.",
    en: "The most emblematic plant of the islands' dry south. Its four- or five-sided stems, with pairs of short spines, grow together like a giant candelabra and can form clumps several metres wide. Although it looks like a cactus, it is a spurge and contains white latex. It is the plant symbol of Gran Canaria.",
    de: "Die bekannteste Pflanze des trockenen Südens der Inseln. Ihre vier- bis fünfkantigen Triebe mit kurzen Dornenpaaren wachsen wie ein riesiger Kandelaber und bilden Polster von mehreren Metern Durchmesser. Sie sieht aus wie ein Kaktus, ist aber eine Wolfsmilch mit weißem Milchsaft. Sie ist die Symbolpflanze Gran Canarias."
  },
  usos: {
    es: "Su látex es muy irritante y no se debe tocar. Antiguamente se echaba en los charcos de la costa para atontar a los peces y cogerlos con la mano (embarbascar). Los tallos secos, los «huesos» del cardón, se usaban como leña.",
    en: "Its latex is very irritating and must not be touched. In the past it was poured into coastal rock pools to stun fish and catch them by hand. The dry stems were used as firewood.",
    de: "Der Milchsaft ist stark reizend und darf nicht berührt werden. Früher goss man ihn in Gezeitentümpel, um Fische zu betäuben und mit der Hand zu fangen. Die trockenen Triebe dienten als Brennholz."
  }
},
{
  id: "aulaga", grupo: "plantas", cientifico: "Launaea arborescens",
  nombre: { es: "Aulaga", en: "Aulaga (shrubby launaea)", de: "Aulaga (Strauchige Launaea)" },
  estatus: ["nativa"],
  foto: { src: "img/aulaga.jpg", tipo: "foto", credito: CRED_PLANTAS },
  descripcion: {
    es: "Arbusto de ramas verdes que crecen en zigzag y terminan en espinas, casi sin hojas, con pequeñas flores amarillas parecidas a las del diente de león. Abunda en terrenos removidos, bordes de caminos y antiguos cultivos abandonados, por eso indica que el suelo ha sido alterado.",
    en: "A shrub with green, zigzagging branches ending in spines, almost leafless, with small yellow flowers similar to dandelions. It is common on disturbed ground, roadsides and abandoned fields, so it indicates that the soil has been altered.",
    de: "Ein fast blattloser Strauch mit grünen, im Zickzack wachsenden Zweigen, die in Dornen enden, und kleinen gelben Blüten ähnlich dem Löwenzahn. Er ist häufig auf gestörten Böden, an Wegrändern und auf verlassenen Feldern und zeigt so veränderte Böden an."
  },
  usos: {
    es: "Las ramas secas se han usado como leña menuda para avivar el fuego, y la ramonean cabras y camellos.",
    en: "The dry branches have been used as kindling, and goats and camels browse it.",
    de: "Die trockenen Zweige dienten als Anzündholz, und Ziegen und Kamele fressen daran."
  }
},
{
  id: "verode", grupo: "plantas", cientifico: "Kleinia neriifolia",
  nombre: { es: "Verode o verol", en: "Verode", de: "Oleanderblättrige Kleinie (Verode)" },
  estatus: ["endemica-canaria"],
  foto: { src: "img/verode.jpg", tipo: "foto", credito: CRED_PLANTAS },
  descripcion: {
    es: "Arbusto de tallos gruesos y carnosos, con marcas de las hojas ya caídas, que terminan en rosetas de hojas alargadas. En verano pierde las hojas para no gastar agua. Sus flores, de color crema, salen en ramilletes y dan semillas con un vilano blanco que vuela con el viento. Crece incluso sobre muros y tejados.",
    en: "A shrub with thick, fleshy stems marked with leaf scars, ending in rosettes of long leaves. In summer it sheds its leaves to save water. Its cream-coloured flowers grow in clusters and produce seeds with white fluff that fly on the wind. It even grows on walls and roofs.",
    de: "Ein Strauch mit dicken, fleischigen Stämmen voller Blattnarben, die in Rosetten aus langen Blättern enden. Im Sommer wirft er die Blätter ab, um Wasser zu sparen. Die cremefarbenen Blüten stehen in Büscheln, und die Samen fliegen mit weißem Pappus im Wind. Er wächst sogar auf Mauern und Dächern."
  },
  usos: {
    es: "En la medicina popular canaria el jugo de sus hojas se ha aplicado sobre callos, verrugas y heridas. En épocas de sequía se daba al ganado como forraje.",
    en: "In Canarian folk medicine the juice of its leaves was applied to corns, warts and wounds. In times of drought it was given to livestock as fodder.",
    de: "In der kanarischen Volksmedizin wurde der Saft der Blätter auf Hühneraugen, Warzen und Wunden aufgetragen. In Dürrezeiten diente er als Viehfutter."
  }
},
{
  id: "magarza", grupo: "plantas", cientifico: "Argyranthemum frutescens",
  nombre: { es: "Magarza", en: "Canary Island marguerite", de: "Strauchmargerite" },
  estatus: ["endemica-canaria"],
  foto: { src: "img/magarza.jpg", tipo: "foto", credito: CRED_PLANTAS },
  descripcion: {
    es: "Matorral de hojas finamente divididas, que en invierno y primavera se cubre de flores como margaritas: blancas por fuera y amarillas en el centro. Es una de las primeras plantas que colonizan los terrenos abiertos y los bordes de los caminos.",
    en: "A bushy plant with finely divided leaves, covered in winter and spring with daisy-like flowers: white outside and yellow in the centre. It is one of the first plants to colonise open ground and roadsides.",
    de: "Ein Busch mit fein zerteilten Blättern, der sich im Winter und Frühling mit margeritenähnlichen Blüten bedeckt: außen weiß, innen gelb. Sie gehört zu den ersten Pflanzen, die offene Flächen und Wegränder besiedeln."
  },
  usos: {
    es: "Es la abuela de muchas «margaritas» que se venden en viveros de todo el mundo: a partir de las magarzas canarias se crearon numerosas variedades ornamentales. Sus flores atraen a muchos insectos polinizadores.",
    en: "It is the ancestor of many “marguerite daisies” sold in garden centres all over the world: numerous ornamental varieties were bred from Canarian marguerites. Its flowers attract many pollinating insects.",
    de: "Sie ist die Urahnin vieler „Margeriten“, die weltweit in Gärtnereien verkauft werden: aus kanarischen Magarzas wurden zahlreiche Zierformen gezüchtet. Ihre Blüten locken viele Bestäuber an."
  }
},
{
  id: "tabaiba-amarga", grupo: "plantas", cientifico: "Euphorbia lamarckii subsp. wildpretii",
  nombre: { es: "Tabaiba amarga", en: "Bitter spurge (tabaiba amarga)", de: "Bittere Wolfsmilch (Tabaiba amarga)" },
  estatus: ["endemica-canaria", "toxica"],
  foto: { src: "img/tabaiba-amarga.jpg", tipo: "foto", credito: CRED_PLANTAS },
  descripcion: {
    es: "Arbusto muy ramificado, con las ramas en forma de candelabro y las hojas reunidas en rosetas al final de cada rama. Las flores son verde amarillentas. Coloniza con rapidez los terrenos abandonados y las laderas, y es muy común en la costa y medianías del sur de Tenerife.",
    en: "A much-branched shrub with candelabra-like branches and leaves gathered in rosettes at the tip of each branch. Its flowers are yellowish green. It quickly colonises abandoned land and slopes and is very common on the coast and mid-slopes of southern Tenerife.",
    de: "Ein stark verzweigter Strauch mit kandelaberartigen Ästen und Blattrosetten an den Zweigspitzen. Die Blüten sind gelbgrün. Sie besiedelt schnell aufgegebenes Land und Hänge und ist an der Küste und in mittleren Lagen Südteneriffas sehr häufig."
  },
  usos: {
    es: "Su látex es amargo y tóxico. Igual que el del cardón, se usó para embarbascar, es decir, para atontar a los peces en los charcos de marea. Hoy esa práctica está prohibida.",
    en: "Its latex is bitter and poisonous. Like that of the cardón, it was used to stun fish in tidal pools, a practice that is now forbidden.",
    de: "Ihr Milchsaft ist bitter und giftig. Wie der des Cardón wurde er benutzt, um Fische in Gezeitentümpeln zu betäuben – heute ist das verboten."
  }
},
{
  id: "cornical", grupo: "plantas", cientifico: "Periploca laevigata",
  nombre: { es: "Cornical", en: "Cornical (silkvine)", de: "Glatte Baumschlinge (Cornical)" },
  estatus: ["nativa"],
  foto: { src: "img/cornical.jpg", tipo: "foto", credito: CRED_PLANTAS },
  descripcion: {
    es: "Arbusto de ramas flexibles que se enredan entre sí y sobre otras plantas, con hojas verdes y brillantes. Sus flores tienen forma de estrella y color pardo violáceo. Los frutos son dos vainas alargadas unidas por la base, como un par de cuernos, y de ahí viene su nombre. Las semillas llevan un penacho sedoso para volar.",
    en: "A shrub with flexible branches that twine around each other and over other plants, with shiny green leaves. Its star-shaped flowers are purplish brown. The fruits are two long pods joined at the base, like a pair of horns, which gives the plant its Spanish name. The seeds carry a silky tuft to fly.",
    de: "Ein Strauch mit biegsamen Zweigen, die sich ineinander und um andere Pflanzen schlingen, und glänzend grünen Blättern. Die sternförmigen Blüten sind violettbraun. Die Früchte sind zwei lange, an der Basis verbundene Hülsen wie ein Paar Hörner – daher der spanische Name. Die Samen tragen einen seidigen Haarschopf."
  },
  usos: {
    es: "No tenemos documentados usos tradicionales en la zona. Da refugio y sombra a pequeños animales, y su látex, como el de otras plantas de su familia, puede ser irritante.",
    en: "We have not documented any traditional uses in the area. It offers shelter and shade to small animals, and its latex, like that of related plants, can be irritating.",
    de: "Traditionelle Verwendungen in der Gegend sind uns nicht bekannt. Sie bietet kleinen Tieren Schutz und Schatten, und ihr Milchsaft kann wie bei verwandten Pflanzen reizend sein."
  }
},
{
  id: "barrilla", grupo: "plantas", cientifico: "Mesembryanthemum crystallinum",
  nombre: { es: "Barrilla", en: "Common ice plant", de: "Eiskraut" },
  estatus: ["nativa"],
  foto: { src: "img/barrilla.jpg", tipo: "foto", credito: CRED_PLANTAS },
  descripcion: {
    es: "Planta rastrera y carnosa, cubierta de bolitas brillantes llenas de agua que parecen gotas de cristal o escarcha. Con el calor y la sequía se vuelve roja. Sus flores son blancas o rosadas. Vive en suelos salinos cerca de la costa.",
    en: "A creeping, fleshy plant covered with shiny water-filled bladders that look like crystal drops or frost. In heat and drought it turns red. Its flowers are white or pink. It lives on salty soils near the coast.",
    de: "Eine kriechende, fleischige Pflanze, bedeckt mit glänzenden, wassergefüllten Bläschen, die wie Glastropfen oder Raureif aussehen. Bei Hitze und Trockenheit färbt sie sich rot. Die Blüten sind weiß oder rosa. Sie wächst auf salzigen Böden nahe der Küste."
  },
  usos: {
    es: "En los siglos XVIII y XIX la barrilla fue un cultivo importante en Canarias: se quemaba y sus cenizas, ricas en sosa, se exportaban para fabricar jabón y vidrio. Cuando se inventó la sosa industrial, el negocio se hundió.",
    en: "In the 18th and 19th centuries the ice plant was an important crop in the Canary Islands: it was burned and its soda-rich ashes were exported to make soap and glass. When industrial soda was invented, the trade collapsed.",
    de: "Im 18. und 19. Jahrhundert war das Eiskraut eine wichtige Kulturpflanze der Kanaren: Man verbrannte es und exportierte die sodareiche Asche für die Seifen- und Glasherstellung. Mit der industriellen Soda brach der Handel zusammen."
  }
},

/* ───────────────────────── AVES ───────────────────────── */
{
  id: "zarapito-trinador", grupo: "aves", cientifico: "Numenius phaeopus",
  nombre: { es: "Zarapito trinador", en: "Whimbrel", de: "Regenbrachvogel" },
  estatus: ["invernante"],
  foto: { src: "img/zarapito-trinador.jpg", tipo: "lamina", credito: CRED_AVES },
  descripcion: {
    es: "Ave limícola de patas largas y un pico largo y curvado hacia abajo, con rayas oscuras en la cabeza. Llega del norte de Europa en otoño y pasa el invierno en las costas rocosas, donde busca cangrejos y gusanos. Se reconoce por su canto: un trino rápido de unas siete notas.",
    en: "A long-legged wader with a long, down-curved bill and dark stripes on its head. It arrives from northern Europe in autumn and spends the winter on rocky shores, hunting crabs and worms. It is recognised by its call: a rapid trill of about seven notes.",
    de: "Ein langbeiniger Watvogel mit langem, abwärts gebogenem Schnabel und dunklen Kopfstreifen. Er kommt im Herbst aus Nordeuropa und überwintert an Felsküsten, wo er Krebse und Würmer sucht. Man erkennt ihn an seinem Ruf: einem schnellen Triller aus etwa sieben Tönen."
  },
  usos: {
    es: "No tiene usos tradicionales. Es una especie protegida y un buen indicador de la salud de la costa.",
    en: "It has no traditional uses. It is a protected species and a good indicator of coastal health.",
    de: "Traditionelle Nutzungen gibt es nicht. Er ist geschützt und ein guter Indikator für den Zustand der Küste."
  }
},
{
  id: "tarro-canelo", grupo: "aves", cientifico: "Tadorna ferruginea",
  nombre: { es: "Tarro canelo", en: "Ruddy shelduck", de: "Rostgans" },
  estatus: ["nativa"],
  foto: { src: "img/tarro-canelo.jpg", tipo: "lamina", credito: CRED_AVES },
  descripcion: {
    es: "Pato grande de color canela anaranjado, con la cabeza más clara y las alas blancas y negras que se ven al volar. Llegó por sí solo a Fuerteventura a finales del siglo XX y desde allí se ha ido viendo en otras islas, en charcas y embalses.",
    en: "A large orange-cinnamon duck with a paler head and black-and-white wings visible in flight. It colonised Fuerteventura on its own at the end of the 20th century and has since been seen on other islands, at ponds and reservoirs.",
    de: "Eine große, orange-zimtfarbene Ente mit hellerem Kopf und schwarz-weißen Flügeln, die man im Flug sieht. Sie hat Fuerteventura Ende des 20. Jahrhunderts aus eigener Kraft besiedelt und wird seitdem auch auf anderen Inseln an Teichen und Stauseen beobachtet."
  },
  usos: {
    es: "No tiene usos tradicionales en Canarias. Es un ejemplo de colonización natural reciente de las islas.",
    en: "It has no traditional uses in the Canary Islands. It is an example of a recent natural colonisation of the islands.",
    de: "Auf den Kanaren gibt es keine traditionelle Nutzung. Sie ist ein Beispiel für eine junge natürliche Besiedlung der Inseln."
  }
},
{
  id: "garceta-comun", grupo: "aves", cientifico: "Egretta garzetta",
  nombre: { es: "Garceta común", en: "Little egret", de: "Seidenreiher" },
  estatus: ["nativa", "invernante"],
  foto: { src: "img/garceta-comun.jpg", tipo: "lamina", credito: CRED_AVES },
  descripcion: {
    es: "Garza pequeña y totalmente blanca, con pico negro y patas negras terminadas en dedos amarillos, como si llevara zapatillas. Pesca en charcos de la costa, charcas y estanques, caminando despacio y lanzando el pico con rapidez.",
    en: "A small, all-white heron with a black bill and black legs ending in yellow feet, as if it were wearing slippers. It fishes in rock pools, ponds and reservoirs, walking slowly and striking quickly with its bill.",
    de: "Ein kleiner, ganz weißer Reiher mit schwarzem Schnabel und schwarzen Beinen mit gelben Füßen, als trüge er Pantoffeln. Er fischt in Gezeitentümpeln, Teichen und Becken, schreitet langsam und stößt blitzschnell zu."
  },
  usos: {
    es: "Sus plumas largas de la época de cría se pusieron de moda en los sombreros del siglo XIX y la especie estuvo a punto de desaparecer en Europa. Hoy está protegida.",
    en: "Its long breeding plumes were fashionable on 19th-century hats, and the species almost disappeared from Europe. Today it is protected.",
    de: "Ihre langen Schmuckfedern waren im 19. Jahrhundert als Hutschmuck begehrt, und die Art verschwand in Europa beinahe. Heute ist sie geschützt."
  }
},
{
  id: "alpispa", grupo: "aves", cientifico: "Motacilla cinerea canariensis",
  nombre: { es: "Alpispa", en: "Grey wagtail", de: "Gebirgsstelze" },
  estatus: ["subespecie-endemica", "residente"],
  foto: { src: "img/alpispa.jpg", tipo: "lamina", credito: CRED_AVES },
  descripcion: {
    es: "Pajarito de espalda gris y vientre amarillo intenso, con una cola larga que mueve sin parar arriba y abajo. En Canarias vive una subespecie propia. Le gustan los sitios con agua: barrancos, acequias, tanques y jardines.",
    en: "A small bird with a grey back and bright yellow belly and a long tail that it constantly wags up and down. A subspecies unique to the Canary Islands lives here. It likes places with water: ravines, irrigation channels, water tanks and gardens.",
    de: "Ein kleiner Vogel mit grauem Rücken, leuchtend gelbem Bauch und langem Schwanz, mit dem er ständig wippt. Auf den Kanaren lebt eine eigene Unterart. Sie mag Orte mit Wasser: Schluchten, Bewässerungskanäle, Wasserbecken und Gärten."
  },
  usos: {
    es: "«Alpispa» es su nombre canario tradicional. Es un pájaro muy querido en el campo, porque su presencia indica agua cerca.",
    en: "“Alpispa” is its traditional Canarian name. Country people are fond of it, because its presence means water is nearby.",
    de: "„Alpispa“ ist ihr traditioneller kanarischer Name. Auf dem Land ist sie beliebt, denn wo sie ist, ist Wasser nicht weit."
  }
},
{
  id: "anade-azulon", grupo: "aves", cientifico: "Anas platyrhynchos",
  nombre: { es: "Ánade azulón", en: "Mallard", de: "Stockente" },
  estatus: ["nativa", "residente"],
  foto: { src: "img/anade-azulon.jpg", tipo: "lamina", credito: CRED_AVES },
  descripcion: {
    es: "El pato más conocido. El macho tiene la cabeza verde brillante y un collar blanco; la hembra es parda moteada. Ambos llevan una mancha azul en el ala. Se ve en charcas, estanques y embalses.",
    en: "The best-known duck. The male has a glossy green head and a white collar; the female is mottled brown. Both have a blue patch on the wing. It is seen at ponds, pools and reservoirs.",
    de: "Die bekannteste Ente. Der Erpel hat einen grün glänzenden Kopf und einen weißen Halsring, das Weibchen ist braun gesprenkelt. Beide tragen einen blauen Flügelspiegel. Man sieht sie an Teichen, Becken und Stauseen."
  },
  usos: {
    es: "Es el antepasado de casi todos los patos domésticos. Muchos de los que se ven en Canarias proceden de aves domésticas o sueltas.",
    en: "It is the ancestor of almost all domestic ducks. Many of the ones seen in the Canary Islands come from domestic or released birds.",
    de: "Sie ist die Stammform fast aller Hausenten. Viele Enten auf den Kanaren stammen von Haus- oder ausgesetzten Tieren ab."
  }
},
{
  id: "alcaudon-real", grupo: "aves", cientifico: "Lanius meridionalis koenigi",
  nombre: { es: "Alcaudón real", en: "Southern grey shrike", de: "Südlicher Raubwürger" },
  estatus: ["subespecie-endemica", "residente"],
  foto: { src: "img/alcaudon-real.jpg", tipo: "lamina", credito: CRED_AVES },
  descripcion: {
    es: "Pájaro gris y blanco con un antifaz negro y pico ganchudo, como un pequeño halcón. Se posa en lo alto de los arbustos para vigilar y caza insectos, lagartijas y hasta pequeños pájaros. En Canarias orientales y Tenerife vive una subespecie propia.",
    en: "A grey-and-white bird with a black mask and hooked bill, like a small falcon. It perches on top of shrubs to keep watch and hunts insects, lizards and even small birds. An endemic subspecies lives in the eastern Canaries and Tenerife.",
    de: "Ein grau-weißer Vogel mit schwarzer Maske und Hakenschnabel, wie ein kleiner Falke. Er sitzt auf Strauchspitzen auf Ansitz und jagt Insekten, Eidechsen und sogar kleine Vögel. Auf den östlichen Kanaren und Teneriffa lebt eine eigene Unterart."
  },
  usos: {
    es: "Es famoso por su «despensa»: clava las presas en espinas, como las de la espina santa, para comerlas más tarde. Fíjense en los arbustos espinosos durante la visita.",
    en: "It is famous for its “larder”: it impales prey on thorns, such as those of the boxthorn, to eat later. Look at thorny shrubs during your visit.",
    de: "Berühmt ist seine „Vorratskammer“: Er spießt Beute auf Dornen, etwa des Bocksdorns, um sie später zu fressen. Achten Sie beim Besuch auf dornige Sträucher."
  }
},
{
  id: "garza-real", grupo: "aves", cientifico: "Ardea cinerea",
  nombre: { es: "Garza real", en: "Grey heron", de: "Graureiher" },
  estatus: ["invernante"],
  foto: { src: "img/garza-real.jpg", tipo: "lamina", credito: CRED_AVES },
  descripcion: {
    es: "Garza grande y gris, de cuello largo y pico amarillo en forma de puñal, con una ceja negra que termina en un penacho. Se queda inmóvil mucho rato en la orilla del mar o de las charcas esperando a que pase un pez. Vuela con el cuello recogido en forma de S.",
    en: "A large grey heron with a long neck, a dagger-like yellow bill and a black eyebrow ending in a plume. It stands motionless for a long time on the seashore or by ponds, waiting for a fish to pass. It flies with its neck folded in an S shape.",
    de: "Ein großer grauer Reiher mit langem Hals, dolchförmigem gelbem Schnabel und schwarzem Überaugenstreif mit Schopf. Er steht lange reglos am Meeresufer oder an Teichen und wartet auf Fische. Im Flug hält er den Hals S-förmig eingezogen."
  },
  usos: {
    es: "No tiene usos tradicionales en Canarias. Es una especie protegida que pasa aquí sobre todo el otoño y el invierno.",
    en: "It has no traditional uses in the Canary Islands. It is a protected species seen here mainly in autumn and winter.",
    de: "Auf den Kanaren gibt es keine traditionelle Nutzung. Die geschützte Art ist hier vor allem im Herbst und Winter zu sehen."
  }
},
{
  id: "bisbita-caminero", grupo: "aves", cientifico: "Anthus berthelotii",
  nombre: { es: "Bisbita caminero", en: "Berthelot's pipit", de: "Kanarenpieper" },
  estatus: ["endemica-macaro", "residente"],
  foto: { src: "img/bisbita-caminero.jpg", tipo: "lamina", credito: CRED_AVES },
  descripcion: {
    es: "Pajarito pardo con el pecho rayado y una ceja clara. Pasa casi todo el tiempo en el suelo, corriendo entre piedras y por los senderos, y por eso se llama «caminero»: es muy probable que lo vean durante la visita. Solo vive en Canarias, Madeira y las Salvajes.",
    en: "A small brown bird with a streaked breast and a pale eyebrow. It spends most of its time on the ground, running among stones and along paths, which is why it is called the “path pipit” in Spanish: you are very likely to see it on your visit. It lives only in the Canaries, Madeira and the Savage Islands.",
    de: "Ein kleiner brauner Vogel mit gestreifter Brust und hellem Überaugenstreif. Er hält sich meist am Boden auf und läuft zwischen Steinen und auf Wegen, daher der spanische Name „Wegpieper“ – beim Besuch sieht man ihn sehr wahrscheinlich. Er lebt nur auf den Kanaren, Madeira und den Selvagens."
  },
  usos: {
    es: "No tiene usos tradicionales. Lleva el nombre de Sabin Berthelot, naturalista francés que estudió Canarias en el siglo XIX.",
    en: "It has no traditional uses. It is named after Sabin Berthelot, a French naturalist who studied the Canary Islands in the 19th century.",
    de: "Traditionelle Nutzungen gibt es nicht. Benannt ist er nach Sabin Berthelot, einem französischen Naturforscher, der im 19. Jahrhundert die Kanaren erforschte."
  }
},
{
  id: "cernicalo", grupo: "aves", cientifico: "Falco tinnunculus canariensis",
  nombre: { es: "Cernícalo", en: "Common kestrel", de: "Turmfalke" },
  estatus: ["subespecie-endemica", "residente"],
  foto: { src: "img/cernicalo.jpg", tipo: "lamina", credito: CRED_AVES },
  descripcion: {
    es: "Halcón pequeño de espalda rojiza con manchas negras y cola larga. Se queda suspendido en el aire batiendo las alas, «cerniéndose», mientras busca lagartos, ratones e insectos. Es la rapaz más fácil de ver en la reserva y en Canarias vive una subespecie propia.",
    en: "A small falcon with a reddish, black-spotted back and long tail. It hovers in the air, beating its wings, while it looks for lizards, mice and insects. It is the easiest bird of prey to see in the reserve, and a subspecies of its own lives in the Canaries.",
    de: "Ein kleiner Falke mit rötlichem, schwarz geflecktem Rücken und langem Schwanz. Er steht flügelschlagend in der Luft („rüttelt“) und sucht Eidechsen, Mäuse und Insekten. Er ist der am leichtesten zu sehende Greifvogel im Reservat; auf den Kanaren lebt eine eigene Unterart."
  },
  usos: {
    es: "Su nombre viene de esa forma de volar, cerniéndose. En el campo canario se valoraba porque controla ratones y saltamontes.",
    en: "Its Spanish name comes from that hovering flight. Canarian farmers valued it because it keeps mice and grasshoppers in check.",
    de: "Sein spanischer Name kommt von diesem Rüttelflug. Kanarische Bauern schätzten ihn, weil er Mäuse und Heuschrecken in Schach hält."
  }
},
{
  id: "gaviota-sombria", grupo: "aves", cientifico: "Larus fuscus",
  nombre: { es: "Gaviota sombría", en: "Lesser black-backed gull", de: "Heringsmöwe" },
  estatus: ["invernante"],
  foto: { src: "img/gaviota-sombria.jpg", tipo: "lamina", credito: CRED_AVES },
  descripcion: {
    es: "Gaviota grande con la espalda y las alas de color gris oscuro, casi negro, la cabeza blanca y las patas amarillas. Llega del norte de Europa a pasar el invierno en la costa canaria.",
    en: "A large gull with dark grey, almost black back and wings, a white head and yellow legs. It comes from northern Europe to spend the winter on the Canarian coast.",
    de: "Eine große Möwe mit dunkelgrauem, fast schwarzem Rücken und Flügeln, weißem Kopf und gelben Beinen. Sie kommt aus Nordeuropa, um an der kanarischen Küste zu überwintern."
  },
  usos: {
    es: "No tiene usos tradicionales. Pueden compararla con la gaviota patiamarilla, la que vive todo el año aquí, que tiene la espalda gris clara.",
    en: "It has no traditional uses. Compare it with the yellow-legged gull, which lives here all year and has a pale grey back.",
    de: "Traditionelle Nutzungen gibt es nicht. Vergleichen Sie sie mit der ganzjährig hier lebenden Mittelmeermöwe, die einen hellgrauen Rücken hat."
  }
},
{
  id: "gallineta-comun", grupo: "aves", cientifico: "Gallinula chloropus",
  nombre: { es: "Gallineta común", en: "Common moorhen", de: "Teichhuhn" },
  estatus: ["nativa", "residente"],
  foto: { src: "img/gallineta-comun.jpg", tipo: "lamina", credito: CRED_AVES },
  descripcion: {
    es: "Ave acuática oscura con el pico rojo y la punta amarilla, una línea blanca en el costado y patas verdes con dedos muy largos. Nada moviendo la cabeza adelante y atrás y se esconde enseguida entre las plantas de charcas y estanques.",
    en: "A dark waterbird with a red, yellow-tipped bill, a white line along its flank and green legs with very long toes. It swims bobbing its head back and forth and quickly hides among the plants of ponds and pools.",
    de: "Ein dunkler Wasservogel mit rotem Schnabel und gelber Spitze, weißem Flankenstreif und grünen Beinen mit sehr langen Zehen. Beim Schwimmen nickt es mit dem Kopf und versteckt sich schnell zwischen den Pflanzen von Teichen."
  },
  usos: {
    es: "No tiene usos tradicionales en Canarias. Coloniza enseguida los tanques y estanques con vegetación, así que es un buen indicador de agua dulce.",
    en: "It has no traditional uses in the Canaries. It quickly colonises water tanks and ponds with vegetation, so it is a good indicator of fresh water.",
    de: "Auf den Kanaren gibt es keine traditionelle Nutzung. Es besiedelt schnell bewachsene Wasserbecken und ist so ein guter Anzeiger für Süßwasser."
  }
},
{
  id: "vencejo-unicolor", grupo: "aves", cientifico: "Apus unicolor",
  nombre: { es: "Vencejo unicolor", en: "Plain swift", de: "Einfarbsegler" },
  estatus: ["endemica-macaro", "estival"],
  foto: { src: "img/vencejo-unicolor.jpg", tipo: "lamina", credito: CRED_AVES },
  descripcion: {
    es: "Ave pardo oscura con alas largas en forma de hoz, siempre en el aire: come, bebe y hasta duerme volando, y casi nunca se posa en el suelo. Solo cría en Canarias y Madeira. En invierno muchos se van a África.",
    en: "A dark brown bird with long, sickle-shaped wings, always in the air: it eats, drinks and even sleeps while flying, and almost never lands on the ground. It breeds only in the Canaries and Madeira. Many migrate to Africa in winter.",
    de: "Ein dunkelbrauner Vogel mit langen, sichelförmigen Flügeln, immer in der Luft: Er frisst, trinkt und schläft sogar im Flug und landet fast nie am Boden. Er brütet nur auf den Kanaren und Madeira; viele ziehen im Winter nach Afrika."
  },
  usos: {
    es: "No tiene usos tradicionales. Es un gran controlador de mosquitos y otros insectos voladores.",
    en: "It has no traditional uses. It is a great controller of mosquitoes and other flying insects.",
    de: "Traditionelle Nutzungen gibt es nicht. Er vertilgt große Mengen Mücken und andere Fluginsekten."
  }
},
{
  id: "tabobo", grupo: "aves", cientifico: "Upupa epops",
  nombre: { es: "Tabobo", en: "Hoopoe", de: "Wiedehopf" },
  estatus: ["nativa", "residente"],
  foto: { src: "img/tabobo.jpg", tipo: "lamina", credito: CRED_AVES },
  descripcion: {
    es: "Inconfundible: plumaje anaranjado, alas a rayas blancas y negras, pico largo y curvo y una cresta en abanico que abre cuando se asusta. Busca larvas e insectos picando en el suelo. Su canto es un «bu-bu-bu» suave.",
    en: "Unmistakable: orange plumage, black-and-white striped wings, a long curved bill and a fan-shaped crest that it raises when alarmed. It probes the ground for larvae and insects. Its call is a soft “oop-oop-oop”.",
    de: "Unverwechselbar: orangefarbenes Gefieder, schwarz-weiß gestreifte Flügel, langer gebogener Schnabel und eine fächerförmige Haube, die er bei Erregung aufstellt. Er stochert im Boden nach Larven und Insekten. Sein Ruf ist ein weiches „hup-hup-hup“."
  },
  usos: {
    es: "«Tabobo» es su nombre en Canarias, y viene precisamente de su canto. Es un aliado del campo porque se come muchas larvas de insectos.",
    en: "“Tabobo” is its Canarian name, which comes from its call. It is a friend of farmers because it eats many insect larvae.",
    de: "„Tabobo“ ist sein kanarischer Name und ahmt seinen Ruf nach. Er ist ein Freund der Bauern, weil er viele Insektenlarven frisst."
  }
},
{
  id: "cuervo-canario", grupo: "aves", cientifico: "Corvus corax canariensis",
  nombre: { es: "Cuervo canario", en: "Canary Islands raven", de: "Kanaren-Kolkrabe" },
  estatus: ["subespecie-endemica", "residente", "protegida"],
  foto: { src: "img/cuervo-canario.jpg", tipo: "lamina", credito: CRED_AVES },
  descripcion: {
    es: "El pájaro más grande de color negro de las islas, con pico grueso y cola en forma de cuña. Es muy inteligente y suele ir en pareja. En Tenerife se ha vuelto escaso y está protegido, así que verlo es una suerte.",
    en: "The largest all-black bird on the islands, with a heavy bill and wedge-shaped tail. It is very intelligent and usually seen in pairs. It has become scarce on Tenerife and is protected, so seeing one is a stroke of luck.",
    de: "Der größte ganz schwarze Vogel der Inseln mit kräftigem Schnabel und keilförmigem Schwanz. Er ist sehr intelligent und meist paarweise unterwegs. Auf Teneriffa ist er selten geworden und geschützt – ihn zu sehen ist ein Glück."
  },
  usos: {
    es: "Durante siglos fue perseguido porque se creía que dañaba cosechas y ganado. Hoy se sabe que limpia el campo comiendo animales muertos y restos.",
    en: "For centuries it was persecuted because people thought it damaged crops and livestock. Today we know it cleans the countryside by eating carrion and scraps.",
    de: "Jahrhundertelang wurde er verfolgt, weil man glaubte, er schade Ernte und Vieh. Heute weiß man, dass er die Landschaft säubert, indem er Aas und Reste frisst."
  }
},
{
  id: "buho-chico", grupo: "aves", cientifico: "Asio otus canariensis",
  nombre: { es: "Búho chico o coruja", en: "Long-eared owl", de: "Waldohreule" },
  estatus: ["subespecie-endemica", "residente"],
  foto: { src: "img/buho-chico.jpg", tipo: "lamina", credito: CRED_AVES },
  descripcion: {
    es: "Búho mediano, de plumaje pardo con rayas, ojos naranjas y dos penachos de plumas en la cabeza que parecen orejas. Es nocturno: de día se queda quieto y camuflado en árboles o riscos. Caza sobre todo ratones.",
    en: "A medium-sized owl with streaked brown plumage, orange eyes and two feather tufts on its head that look like ears. It is nocturnal: by day it stays still and camouflaged in trees or on cliffs. It hunts mainly mice.",
    de: "Eine mittelgroße Eule mit gestreiftem braunem Gefieder, orangen Augen und zwei Federohren auf dem Kopf. Sie ist nachtaktiv und sitzt tagsüber gut getarnt in Bäumen oder Felsen. Sie jagt vor allem Mäuse."
  },
  usos: {
    es: "En Canarias se le llama «coruja». Ha sido siempre un aliado del campo por la cantidad de ratones que caza.",
    en: "In the Canaries it is called “coruja”. It has always been a friend of farmers because of the many mice it catches.",
    de: "Auf den Kanaren heißt sie „Coruja“. Wegen der vielen Mäuse, die sie fängt, war sie immer eine Verbündete der Bauern."
  }
},
{
  id: "paloma-bravia", grupo: "aves", cientifico: "Columba livia",
  nombre: { es: "Paloma bravía", en: "Rock dove", de: "Felsentaube" },
  estatus: ["nativa", "residente"],
  foto: { src: "img/paloma-bravia.jpg", tipo: "lamina", credito: CRED_AVES },
  descripcion: {
    es: "Paloma gris azulada con reflejos verdes y morados en el cuello y dos barras negras en las alas. La paloma salvaje anida en riscos y cuevas de los barrancos y de la costa.",
    en: "A bluish-grey pigeon with green and purple sheen on the neck and two black wing bars. The wild form nests on cliffs and in caves in ravines and along the coast.",
    de: "Eine blaugraue Taube mit grün und violett schimmerndem Hals und zwei schwarzen Flügelbinden. Die Wildform brütet an Felswänden und in Höhlen in Schluchten und an der Küste."
  },
  usos: {
    es: "Es el antepasado de todas las palomas domésticas y de ciudad. Tradicionalmente se criaba en palomares para carne y se cazaba.",
    en: "It is the ancestor of all domestic and city pigeons. Traditionally it was kept in dovecotes for meat and was also hunted.",
    de: "Sie ist die Stammform aller Haus- und Stadttauben. Traditionell hielt man sie in Taubenschlägen für Fleisch, und sie wurde gejagt."
  }
},
{
  id: "tortola-turca", grupo: "aves", cientifico: "Streptopelia decaocto",
  nombre: { es: "Tórtola turca", en: "Eurasian collared dove", de: "Türkentaube" },
  estatus: ["nativa", "residente"],
  foto: { src: "img/tortola-turca.jpg", tipo: "lamina", credito: CRED_AVES },
  descripcion: {
    es: "Tórtola de color crema grisáceo con un collar negro fino en la nuca. Su arrullo de tres notas se oye mucho en pueblos y jardines. Se ha extendido por toda Europa en el siglo XX y llegó a Canarias en los años noventa.",
    en: "A greyish-cream dove with a thin black collar on the nape. Its three-note cooing is often heard in villages and gardens. It spread across Europe during the 20th century and reached the Canaries in the 1990s.",
    de: "Eine graucremefarbene Taube mit schmalem schwarzem Nackenband. Ihr dreisilbiges Gurren hört man oft in Dörfern und Gärten. Sie breitete sich im 20. Jahrhundert über ganz Europa aus und erreichte die Kanaren in den 1990er Jahren."
  },
  usos: {
    es: "No tiene usos tradicionales en Canarias. Es un buen ejemplo de especie que llega sola y se instala gracias a los ambientes humanos.",
    en: "It has no traditional uses in the Canaries. It is a good example of a species that arrives on its own and settles thanks to human environments.",
    de: "Auf den Kanaren gibt es keine traditionelle Nutzung. Sie ist ein gutes Beispiel für eine Art, die von selbst ankommt und sich dank menschlicher Lebensräume ansiedelt."
  }
},
{
  id: "perdiz-moruna", grupo: "aves", cientifico: "Alectoris barbara koenigi",
  nombre: { es: "Perdiz moruna", en: "Barbary partridge", de: "Felsenhuhn" },
  estatus: ["introducida", "residente"],
  foto: { src: "img/perdiz-moruna.jpg", tipo: "lamina", credito: CRED_AVES },
  descripcion: {
    es: "Perdiz de pico y patas rojas, flancos con rayas y un collar castaño salpicado de puntos blancos. Vive en laderas pedregosas con matorral y corre más que vuela. Fue traída a Canarias desde el norte de África hace siglos.",
    en: "A partridge with a red bill and legs, barred flanks and a chestnut collar dotted with white. It lives on stony, scrubby slopes and runs more than it flies. It was brought to the Canaries from North Africa centuries ago.",
    de: "Ein Feldhuhn mit rotem Schnabel und roten Beinen, gebänderten Flanken und einem kastanienbraunen, weiß gepunkteten Halsband. Es lebt an steinigen Buschhängen und läuft lieber als zu fliegen. Es wurde vor Jahrhunderten aus Nordafrika auf die Kanaren gebracht."
  },
  usos: {
    es: "Es una especie de caza tradicional en Canarias, motivo por el que se introdujo en las islas.",
    en: "It is a traditional game bird in the Canaries, which is why it was introduced to the islands.",
    de: "Es ist auf den Kanaren ein traditionelles Jagdwild – deshalb wurde es auf die Inseln gebracht."
  }
},
{
  id: "pardela-pichoneta", grupo: "aves", cientifico: "Puffinus puffinus",
  nombre: { es: "Pardela pichoneta", en: "Manx shearwater", de: "Schwarzschnabel-Sturmtaucher" },
  estatus: ["nativa", "estival", "protegida"],
  foto: { src: "img/pardela-pichoneta.jpg", tipo: "lamina", credito: CRED_AVES },
  descripcion: {
    es: "Ave marina negra por encima y blanca por debajo, que vuela rasante sobre las olas. Pasa la vida en alta mar y solo viene a tierra de noche para criar en cuevas y grietas de los acantilados. En otoño los pollos que salen del nido pueden deslumbrarse con las luces y caer en pueblos y carreteras.",
    en: "A seabird, black above and white below, that skims low over the waves. It lives on the open ocean and only comes ashore at night to breed in burrows and cracks in cliffs. In autumn, fledglings can be dazzled by artificial lights and fall onto towns and roads.",
    de: "Ein Seevogel, oben schwarz und unten weiß, der dicht über die Wellen gleitet. Er lebt auf hoher See und kommt nur nachts zum Brüten in Höhlen und Felsspalten an Land. Im Herbst werden Jungvögel von künstlichem Licht geblendet und landen in Orten und auf Straßen."
  },
  usos: {
    es: "Si encuentran una pardela en el suelo, cójanla con cuidado con una toalla, métanla en una caja de cartón y llamen al 112 o al centro de recuperación de fauna del Cabildo. Apagar luces innecesarias también las ayuda.",
    en: "If you find a shearwater on the ground, pick it up carefully with a towel, put it in a cardboard box and call 112 or the island's wildlife recovery centre. Switching off unnecessary lights also helps them.",
    de: "Wenn Sie einen Sturmtaucher am Boden finden, nehmen Sie ihn vorsichtig mit einem Handtuch auf, setzen Sie ihn in einen Karton und rufen Sie 112 oder die Wildtierstation der Insel an. Unnötige Lichter auszuschalten hilft ebenfalls."
  }
}
];
