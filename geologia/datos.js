/* Guía de geología de San Blas Reserva Ambiental.
 * Cada ficha tiene un texto por nivel del alumnado (1: Primaria 3.º–4.º,
 * 2: Primaria 5.º–6.º, 3: ESO, 4: Bachillerato y FP). «desde» indica el primer
 * nivel en que aparece la ficha. «fuentes» remite a las claves de FUENTES.
 * No añadir datos sin fuente: cada cifra debe poder rastrearse. */

window.FUENTES = {
  lig: {
    cita: "IGME. Inventario Español de Lugares de Interés Geológico, ficha IC4026 «Ignimbritas pleistocenas del Miembro El Abrigo». Proyecto LIGCANARIAS (N. Chicharro Fermín), 2022.",
    url: "https://info.igme.es/ielig/LIGInfo.aspx?codigo=IC4026"
  },
  losada: {
    cita: "Rodríguez Losada, J. A. (2000). Itinerario geológico por los depósitos piroclásticos del sur de Tenerife. En Astiz, M. y García, A. (eds.), Curso Internacional de Volcanología y Geofísica Volcánica. Serie Casa de los Volcanes, 7. Cabildo de Lanzarote, 205-214."
  },
  gonzalez: {
    cita: "González-García, D., Petrelli, M., Perugini, D., Giordano, D., Vasseur, J., Paredes-Mariño, J., Martí, J. y Dingwell, D. B. (2022). Pre-eruptive conditions and dynamics recorded in banded pumices from the El Abrigo caldera-forming eruption (Tenerife, Canary Islands). Journal of Petrology, 63(3), egac009.",
    url: "https://doi.org/10.1093/petrology/egac009"
  },
  geode: {
    cita: "IGME. Mapa geológico continuo de España a escala 1:50.000 (GEODE), zona de Tenerife: unidades «Piroclastos sálicos indiferenciados» y «Coladas basálticas» (Pleistoceno superior) y «Playas de arenas y cantos» (Holoceno) en San Blas y su costa. Consulta del 24 de noviembre de 2026.",
    url: "https://info.igme.es/cartografiadigital/geologica/Magna50Hoja.aspx?Id=1107"
  },
  muna: {
    cita: "Santana Pérez, L. M. y Delgado Izquierdo, A. (2026). Precipitaciones en el periodo 2005 a 2025 en Tenerife. MUNA-29. (Datos usados también en el dossier E2 de San Blas.)"
  },
  miteco: {
    cita: "Ministerio para la Transición Ecológica y el Reto Demográfico (2025). Folleto de la ZEC «Sebadales del Sur de Tenerife». Plan de gestión: Orden ARM/2417/2011."
  },
  tabona: {
    cita: "Chávez Álvarez, M. E., Pérez Caamaño, F., Pérez González, E. M., Soler Segura, J., Goñi Quinteiro, A. y Tejera Gaspar, A. (2005). El Barranco de San Blas (San Miguel de Abona, Tenerife): breve secuencia de un modelo por definir. Tabona, 14.",
    url: "https://riull.ull.es/xmlui/handle/915/18328"
  },
  suarez: {
    cita: "Suárez Moreno, F. (2009). El agua en Canarias. Historia, estrategias y procedimientos didácticos. Bienmesabe.org."
  }
};

window.GRUPOS = [
  { id: "rocas", nombre: "Rocas y depósitos", color: "var(--acento)" },
  { id: "relieve", nombre: "Formas del relieve", color: "var(--acento-2)" },
  { id: "historia", nombre: "Historia del volcán", color: "var(--oro)" },
  { id: "costa", nombre: "Costa y mar", color: "var(--mar)" },
  { id: "personas", nombre: "Rocas y personas", color: "var(--hoja)" }
];

window.FICHAS = [
  {
    id: "ignimbrita", grupo: "rocas", dibujo: "ignimbrita", desde: 1,
    nombre: "Ignimbrita", otros: "«tosca» en el habla del sur",
    textos: [
      "Es la piedra clara de las paredes del barranco. Parece tierra apretada, pero es una roca hecha de ceniza y trocitos de piedra que salieron de un volcán hace muchísimo tiempo.",
      "Hace unos 170.000 años, una erupción enorme lanzó una nube ardiente de gas, ceniza y piedras que bajó por la ladera de la isla hasta el mar. Al pararse, todo ese material se quedó en capas y se endureció: así nació la roca que vemos. En el sur de Tenerife la gente la llama «tosca».",
      "La ignimbrita se forma a partir de un flujo piroclástico: una mezcla muy caliente de gases, ceniza, pómez y fragmentos de roca que corre pegada al suelo. En San Blas aflora la ignimbrita del Miembro El Abrigo, la más moderna de las Bandas del Sur (169.000 ± 1.000 años). En la margen izquierda del barranco su espesor llega a 10-15 metros. Es una roca masiva, sin capas internas claras, y mezcla granos de todos los tamaños.",
      "Depósito de colada piroclástica (ignimbrita) de composición dominantemente fonolítica, con dos unidades deposicionales masivas y ricas en líticos (Sur-A y Sur-C). Comparen su aspecto con el de las ignimbritas soldadas, de textura flameada, que Rodríguez Losada describe en otros barrancos del sur. Las ignimbritas de las Bandas del Sur suelen estar endurecidas por un cemento de zeolitas y carbonatos, presentan erosión alveolar y su espesor cambia mucho porque el flujo se encauzó por barrancos y depresiones. El Miembro El Abrigo (169 ± 1 ka) cierra la Formación Diego Hernández y es probablemente la ignimbrita de mayor extensión y volumen de las Bandas del Sur (más de 20 km³ de roca densa equivalente)."
    ],
    mirar: [
      "Toquen la pared (sin rascarla): ¿es lisa o tiene granitos? ¿De qué colores son los trocitos?",
      "Busquen en la pared trozos blancos (pómez) y trozos oscuros (piedras arrancadas del volcán).",
      "Comparen el tamaño de los fragmentos: ¿están ordenados por tamaños o mezclados? ¿Qué nos dice eso de cómo se movía el flujo?",
      "Distingan en el afloramiento la unidad inferior blanca (Sur-A) de la superior gris (Sur-C) y busquen el contacto entre ambas."
    ],
    fuentes: ["lig", "losada", "gonzalez"]
  },
  {
    id: "pomez", grupo: "rocas", dibujo: "pomez", desde: 1,
    nombre: "Pómez", otros: "piedra pómez",
    textos: [
      "Son las piedrecitas blancas y ligeras que se ven dentro de la tosca. Están llenas de agujeritos, como una esponja, porque eran lava con burbujas de gas que se enfrió de golpe.",
      "La pómez es lava tan llena de gas que, al salir del volcán, se enfrió como una espuma de piedra. Por eso es muy ligera. En la ignimbrita de San Blas hay pómez de color blanco verdoso y, a veces, trozos con rayas claras y oscuras.",
      "La pómez es un fragmento de magma vesiculado: las burbujas de gas quedaron atrapadas al enfriarse. En la ignimbrita de El Abrigo dominan las pómez blanco-verdosas de composición fonolítica, pero también hay pómez bandeadas (con franjas claras y oscuras) y escorias oscuras. Con el tiempo la pómez se altera y, en la superficie de la roca, puede desaparecer y dejar huecos muy característicos.",
      "Las pómez bandeadas de El Abrigo registran una mezcla de magmas: un magma tefrítico, almacenado cerca del límite corteza-manto (Moho) a unos 1050 °C, ascendió e intruyó una cámara fonolítica somera y zonada. La conservación de estructuras de mezcla a pequeña escala indica que el proceso ocurrió muy poco antes de la erupción, en una escala de horas, y probablemente contribuyó a desencadenarla. La fonolita estaba almacenada a unos 4-6 km de profundidad bajo la cumbre, a 825 ± 25 °C y con un 3 ± 1 % de agua en peso."
    ],
    mirar: [
      "¿Cuántos agujeritos ven en una pómez? Dibújenla.",
      "Busquen una pómez con rayas claras y oscuras. ¿Por qué tendrá dos colores?",
      "Fíjense en los huecos de la superficie de la roca: ¿habría pómez dentro antes?",
      "Comparen una pómez blanca con una bandeada y propongan una hipótesis sobre el origen de las bandas."
    ],
    fuentes: ["gonzalez", "losada"]
  },
  {
    id: "liticos", grupo: "rocas", dibujo: "liticos", desde: 2,
    nombre: "Líticos", otros: "piedras arrancadas del volcán",
    textos: [
      "",
      "Dentro de la tosca hay piedras oscuras de muchos tipos. No son lava nueva: son trozos de rocas viejas que la erupción arrancó del interior del volcán y arrastró hasta aquí.",
      "Los líticos son fragmentos de roca preexistente arrancados de las paredes del conducto o de la cámara magmática durante la erupción. La ignimbrita de El Abrigo tiene tantos que se reconoce enseguida: su gran carga de líticos, de naturaleza muy variada, le da tonos grises oscuros. La unidad superior (Sur-C) es la más rica en líticos.",
      "Entre los líticos destacan las sienitas, rocas plutónicas con cavidades miarolíticas, frescas o alteradas por fluidos hidrotermales, que proceden de los bordes de la cámara magmática de El Abrigo o de plutones sieníticos más antiguos. También hay sienita juvenil con vidrio. Los líticos se concentran en niveles concretos y hay bloques de tamaño canto a bloque (cobble a boulder)."
    ],
    mirar: [
      "",
      "Busquen piedras oscuras dentro de la pared clara. ¿Son todas iguales?",
      "¿Dónde hay más líticos, en la parte baja de la pared o en la alta?",
      "Busquen líticos de grano grueso, con cristales visibles a simple vista: podrían ser sienitas."
    ],
    fuentes: ["losada", "lig", "gonzalez"]
  },
  {
    id: "lapilli", grupo: "rocas", dibujo: "lapilli", desde: 3,
    nombre: "Capa de ceniza con lapilli acrecional", otros: "unidad Sur-B",
    textos: [
      "", "",
      "Entre las dos grandes capas de ignimbrita hay una capa muy fina, de 1 a 5 cm, de ceniza. Contiene lapilli acrecional: bolitas de ceniza que se formaron en el aire cuando la ceniza húmeda se pegó en capas, como una bola de nieve. Marca una pausa entre dos pulsos de la misma erupción.",
      "La unidad Sur-B (1-5 cm) separa las dos unidades deposicionales masivas de la ignimbrita (Sur-A y Sur-C) mediante un contacto neto o esta delgada capa de ceniza rica en lapilli acrecional. Según Pittari y colaboradores (citados por González-García et al., 2022), la erupción se produjo en dos pulsos separados por un nivel de ceniza fina."
    ],
    mirar: [
      "", "",
      "Busquen una línea fina y clara entre la parte blanca de abajo y la gris de arriba.",
      "Midan el espesor de Sur-B en dos puntos del afloramiento y relaciónenlo con la topografía previa."
    ],
    fuentes: ["lig", "gonzalez"]
  },
  {
    id: "lobulos", grupo: "rocas", dibujo: "lobulos", desde: 3,
    nombre: "Lóbulos de pómez en forma de duna", otros: "estructuras de la unidad Sur-C",
    textos: [
      "", "",
      "En la base de la capa gris de arriba hay cuerpos con forma de lente o de duna donde se acumulan muchas pómez. Son una rareza: en las Bandas del Sur solo aparecen en esta ignimbrita.",
      "La zona basal de Sur-C contiene lóbulos o cuerpos lenticulares, aislados o en conjuntos, con morfología de duna y concentración de pómez, característica única de esta unidad en las Bandas del Sur. Rodríguez Losada (2000) describe en Los Abrigos estructuras en forma de duna formadas por una alta concentración de líticos, que pudo desencadenar una irregularidad del relieve: el exceso de líticos en suspensión y los obstáculos topográficos favorecen estas estructuras."
    ],
    mirar: [
      "", "",
      "Busquen en la parte gris de la pared una zona con forma de lente llena de pómez.",
      "Dibujen un lóbulo y señalen el sentido probable del flujo."
    ],
    fuentes: ["lig", "losada"]
  },
  {
    id: "capas-antiguas", grupo: "rocas", dibujo: "estratos", desde: 3,
    nombre: "Capas más antiguas bajo El Abrigo", otros: "Aldea Blanca, Fasnia y El Porís",
    textos: [
      "", "",
      "Debajo de la ignimbrita de El Abrigo, en la parte norte del afloramiento, asoman capas de erupciones anteriores: ignimbritas y pómez de caída de hace entre unos 320.000 y 270.000 años. Como en un libro, las páginas de abajo son las más antiguas.",
      "Bajo el Miembro El Abrigo afloran depósitos piroclásticos sálicos (ignimbritas y pómez de caída) de los miembros Aldea Blanca (319 ± 5 ka), Fasnia (309 ± 6 ka) y El Porís (268 ± 8 ka) de la Formación Diego Hernández. Esta formación reúne más de 400.000 años de erupciones explosivas (unos 600-170 ka), con al menos nueve grandes ignimbritas y un volumen acumulado de unos 70 km³."
    ],
    mirar: [
      "", "",
      "Apliquen el principio de superposición: ¿qué capa es la más antigua del afloramiento?",
      "Diferencien una pómez de caída (bien clasificada, suelta, de espesor constante) de una ignimbrita (caótica, masiva)."
    ],
    fuentes: ["lig", "gonzalez", "losada"]
  },
  {
    id: "basalto", grupo: "rocas", dibujo: "basalto", desde: 1,
    nombre: "Coladas de basalto", otros: "piedra negra",
    textos: [
      "Además de la tosca clara, en la zona hay piedra oscura y dura: es basalto. Salió del volcán como un río de lava que se enfrió y se hizo roca.",
      "El basalto es lava oscura que corrió como un río y se enfrió. Es mucho más dura que la tosca. En el mapa geológico de la zona de San Blas aparecen las dos rocas: la tosca clara de las nubes ardientes y las coladas oscuras de basalto.",
      "El mapa geológico del IGME representa en San Blas y su entorno dos grandes unidades del Pleistoceno superior: piroclastos sálicos (la ignimbrita) y coladas basálticas. Las coladas basálticas proceden de erupciones efusivas: la lava fluye y se enfría formando roca compacta, oscura y más resistente a la erosión que la ignimbrita.",
      "El volcanismo de Tenerife alterna episodios explosivos fonolíticos (sálicos) con erupciones basálticas de los rifts. En el GEODE, las coladas basálticas cartografiadas en la zona son del Pleistoceno superior. El contraste de resistencia entre basalto e ignimbrita explica buena parte del modelado del barranco (erosión diferencial)."
    ],
    mirar: [
      "¿Encuentran alguna piedra negra? Compárenla con la tosca: ¿cuál pesa más? ¿cuál es más dura?",
      "Busquen en el paisaje partes oscuras y partes claras. ¿Cuáles han resistido mejor al agua?",
      "Busquen vacuolas (agujeros de gas) en el basalto y compárenlas con las de la pómez.",
      "Discutan qué roca formaría una cornisa y cuál un hueco si se superponen."
    ],
    fuentes: ["geode", "gonzalez"]
  },
  {
    id: "erosion", grupo: "relieve", dibujo: "alveolos", desde: 1,
    nombre: "Huecos y cuevitas en la roca", otros: "erosión alveolar y diferencial",
    textos: [
      "La tosca tiene agujeros, huecos y cuevitas. Los han hecho el agua y el viento durante miles de años, porque esta roca se gasta con facilidad.",
      "El agua de la lluvia y el viento desgastan antes las rocas blandas que las duras. Por eso en las paredes del barranco hay huecos, cornisas y formas curiosas que muchas personas llaman «paisaje lunar».",
      "La erosión diferencial desgasta antes las rocas blandas (ignimbrita) que las duras (basalto) y deja cornisas, oquedades y abrigos. Las ignimbritas del sur muestran además una erosión alveolar muy característica, y la pómez alterada de la superficie llega a desaparecer y deja huecos.",
      "Rodríguez Losada señala en las ignimbritas del sur una erosión alveolar muy característica, la desaparición de la pómez alterada en superficie y un endurecimiento por cemento de naturaleza zeolítica y calcárea; la escasa cobertura vegetal deja los afloramientos muy expuestos. Formulen hipótesis sobre por qué la heterogeneidad del depósito (pómez, líticos, matriz de ceniza) favorece los alvéolos y contrasten la evolución de una pared de ignimbrita con la de una colada basáltica en un mismo clima."
    ],
    mirar: [
      "Cuenten cuántos huecos caben en un metro de pared. ¿Hay alguno donde quepa un pájaro?",
      "Busquen una cornisa: ¿qué roca hay arriba y qué roca hay debajo?",
      "Fotografíen un alvéolo con una referencia de tamaño (una moneda, un lápiz).",
      "Relacionen la orientación de los alvéolos con el viento dominante y la insolación de cada ladera."
    ],
    fuentes: ["losada"]
  },
  {
    id: "barranco", grupo: "relieve", dibujo: "barranco", desde: 1,
    nombre: "El barranco de San Blas", otros: "barranco de la Orchilla en el inventario del IGME",
    textos: [
      "Un barranco es un valle estrecho que ha excavado el agua. El de San Blas casi siempre está seco, pero cuando llueve fuerte corre el agua y sigue tallándolo.",
      "El agua de la lluvia baja de la cumbre a la costa y va cortando la roca blanda. Así, poco a poco, se forma el barranco. En el sur llueve muy poco: cerca de San Blas, en el aeropuerto del sur, caen de media unos 123 litros por metro cuadrado al año, y suelen caer de golpe.",
      "Los barrancos ya existían antes de la erupción de El Abrigo: el flujo piroclástico se encauzó por ellos y por las depresiones, y por eso el espesor de la ignimbrita cambia tanto de un lugar a otro. Después, el agua volvió a excavar sobre la roca nueva. En San Blas el corte del barranco deja ver la ignimbrita en su margen izquierda (precipitación media 2005-2025 en el Aeropuerto del Sur: 122,8 mm al año).",
      "La ignimbrita de El Abrigo ocupa no solo antiguos cauces sino también interfluvios, con espesores de hasta 25 m. Los flujos rebasaron las laderas altas del edificio Cañadas y se depositaron en la plataforma costera, encauzados en valles aluviales o barrancos. El IGME denomina «margen izquierda del Barranco de San Blas (Barranco de la Orchilla)» al Lugar de Interés Geológico."
    ],
    mirar: [
      "¿Hacia dónde bajaría el agua si lloviera ahora? Señalen con el dedo.",
      "Busquen señales de que por aquí corre el agua: piedras redondeadas, arena, ramas arrastradas.",
      "Dibujen el perfil transversal del barranco (forma de V o de U) y señalen dónde está cada roca.",
      "Relacionen el perfil del barranco con la resistencia de cada unidad y con el régimen de lluvias torrenciales."
    ],
    fuentes: ["lig", "losada", "gonzalez", "muna"]
  },
  {
    id: "bandas-del-sur", grupo: "historia", dibujo: "bandas", desde: 2,
    nombre: "Las Bandas del Sur", otros: "el sur claro de Tenerife",
    textos: [
      "",
      "Desde el avión o desde la autopista, el sur de Tenerife se ve de color claro. Es por la tosca: capas y capas de ceniza y pómez de muchas erupciones que cubrieron esta parte de la isla.",
      "Las Bandas del Sur son la franja del sureste de Tenerife cubierta por depósitos piroclásticos sálicos: ignimbritas, pómez de caída y oleadas piroclásticas. Estos depósitos, conocidos localmente como «tosca», dan a toda la banda meridional de la isla sus características tonalidades claras.",
      "Las Bandas del Sur registran la actividad explosiva fonolítica del edificio Cañadas. Rodríguez Losada distingue en ellas tres tipos de depósito: lluvia piroclástica (bien clasificada, suelta, espesor uniforme), coladas piroclásticas o ignimbritas (caóticas, masivas, ricas en ceniza) y oleadas piroclásticas (finas, laminadas, de alta energía). El Miembro El Abrigo es el más moderno de todos ellos."
    ],
    mirar: [
      "",
      "Miren hacia la cumbre: ¿de qué color es el terreno? ¿Y hacia Las Galletas o El Médano?",
      "Comparen el color del paisaje del sur con fotos del norte de la isla. ¿Qué rocas dominan en cada sitio?",
      "Clasifiquen depósitos de una foto o del afloramiento como caída, flujo u oleada según su clasificación y estructura."
    ],
    fuentes: ["losada", "lig"]
  },
  {
    id: "caldera", grupo: "historia", dibujo: "isla", desde: 1,
    nombre: "El volcán de Las Cañadas", otros: "y la gran erupción de El Abrigo",
    textos: [
      "La roca de San Blas vino de muy lejos: de lo alto de la isla, cerca de donde hoy está el Teide. Allí hubo un volcán gigante que explotó con mucha fuerza.",
      "Hace unos 170.000 años, el gran volcán de Las Cañadas, en el centro de Tenerife, tuvo una erupción tan grande que su materia llegó hasta la costa de San Blas. Fue la última gran erupción de ese volcán. Después nació el Teide.",
      "La erupción de El Abrigo fue la más voluminosa del último ciclo explosivo del edificio Cañadas y la última de la serie Cañadas III. Su centro de emisión estaba en el extremo noreste de la actual caldera de Las Cañadas, y sus depósitos rodean casi por completo ese punto. Muchos autores la relacionan con la formación de la caldera.",
      "El edificio Cañadas tuvo tres ciclos explosivos fonolíticos (formaciones Ucanca, Guajara y Diego Hernández), cada uno cerrado por una gran erupción formadora de caldera hacia 1,02, 0,57 y 0,17 millones de años. El origen de la caldera de Las Cañadas (colapso vertical, gran deslizamiento o ambos) sigue en debate, y El Abrigo es clave para resolverlo. Desde hace unos 0,17 Ma se construye el complejo activo Teide-Pico Viejo."
    ],
    mirar: [
      "Si el día está claro, busquen el Teide desde el barranco. ¿Cuántos kilómetros calculan que hay?",
      "Imaginen que viajan con la nube ardiente desde la cumbre hasta el mar: ¿por dónde pasarían?",
      "Sitúen en un mapa la caldera de Las Cañadas, San Blas y la dirección del flujo.",
      "Debatan los argumentos a favor del colapso vertical y del deslizamiento para el origen de la caldera."
    ],
    fuentes: ["gonzalez", "lig"]
  },
  {
    id: "tenerife", grupo: "historia", dibujo: "tiempo", desde: 2,
    nombre: "Cómo se hizo Tenerife", otros: "millones de años de volcanes",
    textos: [
      "",
      "Tenerife nació en el fondo del mar, a más de 3.000 metros de profundidad, y fue creciendo erupción tras erupción hasta los 3.718 metros del Teide. Las partes más viejas son Anaga, Teno y el Roque del Conde.",
      "Tenerife se levantó sobre corteza oceánica, frente a la costa africana. Primero se formaron grandes escudos basálticos (Anaga, Teno y Roque del Conde, hace entre unos 11,6 y 3,95 millones de años). Después creció el edificio Cañadas (desde hace unos 3,5 millones de años), y por último el Teide-Pico Viejo.",
      "La actividad volcánica más antigua datada en Tenerife tiene 11,9 Ma. La isla sigue la evolución típica de las islas oceánicas: fase de escudo (11,6-3,95 Ma, macizos de Anaga, Teno y Roque del Conde) y fase de rejuvenecimiento desde unos 3,5 Ma con el edificio Cañadas: un Grupo Inferior máfico a intermedio (3,5-2,2 Ma) y un Grupo Superior explosivo fonolítico (1,57-0,17 Ma), coetáneo de los rifts basálticos. Es un volcanismo de intraplaca de serie alcalina."
    ],
    mirar: [
      "",
      "Busquen en un mapa Anaga, Teno y el Roque del Conde. ¿Están en el centro de la isla o en las esquinas?",
      "Hagan una línea del tiempo a escala con estas fechas y sitúen la roca de San Blas.",
      "Construyan una línea del tiempo logarítmica y discutan por qué se usan Ma y ka."
    ],
    fuentes: ["losada", "gonzalez"]
  },
  {
    id: "playa", grupo: "costa", dibujo: "costa", desde: 1, entorno: true,
    nombre: "Playas de arena y cantos", otros: "la costa junto a la reserva",
    textos: [
      "En la costa, las olas rompen las rocas y las van redondeando. Así se forman los callaos y la arena.",
      "Las olas golpean las rocas de la costa, las rompen y las van redondeando hasta convertirlas en cantos (callaos) y arena. Estas playas son muy jóvenes: se han formado en los últimos miles de años.",
      "El mapa geológico del IGME representa en la costa de la zona pequeños depósitos de «playas de arenas y cantos» del Holoceno, la época geológica actual (últimos 11.700 años), sobre las rocas volcánicas del Pleistoceno. Es el último capítulo del ciclo: volcán, roca, erosión, transporte y sedimentación.",
      "Los depósitos de playa holocenos (GEODE) se apoyan sobre coladas basálticas y piroclastos sálicos del Pleistoceno superior. El tamaño y la forma de los cantos permiten deducir la energía del oleaje y el área fuente; comparen cantos de basalto y de ignimbrita: ¿cuáles sobreviven mejor al desgaste?"
    ],
    mirar: [
      "¿Los callaos son redondos o tienen picos? ¿Por qué?",
      "Ordenen cinco callaos del más redondo al más anguloso.",
      "¿De qué roca son la mayoría de los callaos? ¿Por qué no hay casi pómez?",
      "Estimen el redondeamiento con una tabla visual y relaciónenlo con la dureza de cada roca."
    ],
    fuentes: ["geode"]
  },
  {
    id: "sebadales", grupo: "costa", dibujo: "sebadal", desde: 2, entorno: true,
    nombre: "Fondos de arena y sebadales", otros: "ZEC Sebadales del Sur de Tenerife",
    textos: [
      "",
      "Frente a la costa, bajo el mar, hay fondos de arena donde crecen praderas de sebas, unas plantas marinas. Las sebas sujetan la arena y protegen las playas de las olas.",
      "Los sebadales son praderas de plantas marinas con flor (fanerógamas) como Cymodocea nodosa, que vive en fondos de arena y fango a unos 6-20 m de profundidad. Sus raíces fijan el sustrato y amortiguan el oleaje. El mar frente a San Blas forma parte de la Zona Especial de Conservación «Sebadales del Sur de Tenerife», donde está prohibido fondear sobre las praderas.",
      "Geología y biología se encuentran: el sustrato arenoso permite el sebadal, y el sebadal estabiliza el sedimento y protege las playas. Halophila decipiens, en España solo presente en Canarias, vive en fondos arenosos y fangosos hasta 40 m. El plan de gestión de la ZEC (Orden ARM/2417/2011) prohíbe el fondeo por el deterioro de especies y la alteración del sustrato."
    ],
    mirar: [
      "",
      "Desde la costa, ¿ven zonas del mar de distinto color? ¿Qué puede haber debajo?",
      "Expliquen por qué un ancla puede dañar el fondo de arena y la pradera.",
      "Diseñen un panel informativo que explique la relación sustrato-pradera-playa."
    ],
    fuentes: ["miteco"]
  },
  {
    id: "personas", grupo: "personas", dibujo: "abrigo", desde: 1,
    nombre: "Una roca para vivir", otros: "cuevas, abrigos y tanques",
    textos: [
      "La tosca es blanda y fácil de excavar. Por eso las personas han aprovechado sus huecos y cuevas desde hace muchísimo tiempo.",
      "En el barranco de San Blas se han hecho excavaciones arqueológicas que estudian cómo vivieron aquí los antiguos habitantes de Tenerife. Las rocas blandas y con huecos ofrecen refugio del sol y del viento.",
      "El barranco de San Blas ha sido objeto de una intervención arqueológica que sirvió para revisar los modelos de poblamiento aborigen del sur de Tenerife. En Canarias, las tobas volcánicas, fáciles de excavar e impermeables, se aprovecharon también para guardar agua: en Gran Canaria se excavaron tanques-cueva en estas rocas.",
      "Relacionen propiedades de la roca (dureza, porosidad, permeabilidad, facilidad de talla) con sus usos: refugio, almacenamiento de agua, cantería. Las fuentes arqueológicas del barranco (Chávez Álvarez et al., 2005) y la historia del agua en Canarias (Suárez Moreno, 2009) permiten contrastar hipótesis formuladas en el aula."
    ],
    mirar: [
      "Si fueran antiguos habitantes del barranco, ¿dónde se refugiarían del sol? ¿Por qué?",
      "Busquen huecos en la roca que pudieran servir de refugio a personas o a animales.",
      "Formulen una hipótesis: ¿qué ventajas tenía una roca blanda y porosa para quienes vivieron aquí?",
      "Valoren qué evidencias harían falta para confirmar un uso humano de una cavidad concreta."
    ],
    fuentes: ["tabona", "suarez"]
  },
  {
    id: "lig", grupo: "personas", dibujo: "lupa", desde: 1,
    nombre: "Un lugar de interés geológico", otros: "patrimonio que cuidar",
    textos: [
      "Las rocas del barranco son tan importantes que los científicos las han puesto en una lista especial de lugares de España que hay que cuidar. Por eso: miramos, tocamos con cuidado y no nos llevamos piedras.",
      "El Instituto Geológico y Minero de España ha incluido la pared del barranco de San Blas en su inventario de Lugares de Interés Geológico. Aquí se puede estudiar la última gran erupción del volcán de Las Cañadas. Una piedra que se llevan, se pierde para siempre.",
      "El LIG IC4026 «Ignimbritas pleistocenas del Miembro El Abrigo» ocupa 11,73 ha en la margen izquierda del barranco. Su valor científico es muy alto (8), y su riesgo de degradación por la acción humana, alto: por eso tiene prioridad de protección alta.",
      "Valoraciones del LIG IC4026: valor científico 8 (muy alto), didáctico 5,4 (medio), turístico 3,1 (bajo); susceptibilidad de degradación natural baja y antrópica alta; prioridad de protección alta. Su interés principal es volcanológico, y secundariamente estratigráfico y petrológico-geoquímico."
    ],
    mirar: [
      "Inventen tres normas para cuidar las rocas del barranco.",
      "¿Qué cosas pueden estropear una pared de roca? ¿Cómo lo evitamos?",
      "Propongan una medida concreta para reducir el riesgo de degradación del LIG.",
      "Redacten la ficha de un nuevo LIG con los mismos criterios de valoración."
    ],
    fuentes: ["lig"]
  }
];

/* Columna de la pared del barranco (de abajo arriba), según la ficha IC4026. */
window.COLUMNA = [
  { id: "antiguas", alto: 34, color: "#d9c9a8", trama: "puntos",
    nombre: ["Capas más viejas", "Capas de erupciones anteriores", "Miembros Aldea Blanca, Fasnia y El Porís", "Aldea Blanca (319 ± 5 ka), Fasnia (309 ± 6 ka), El Porís (268 ± 8 ka)"] },
  { id: "sura", alto: 78, color: "#f1ebdd", trama: "pomez",
    nombre: ["Tosca blanca", "Tosca blanca con pómez (4-5 m)", "Sur-A: ignimbrita blanca, con menos líticos (4-5 m)", "Sur-A: ignimbrita masiva, menor contenido en líticos, bloques de pómez a techo (4-5 m)"] },
  { id: "surb", alto: 6, color: "#fffaf0", trama: "linea",
    nombre: ["", "Capa fina de ceniza", "Sur-B: ceniza con lapilli acrecional (1-5 cm)", "Sur-B: ceniza rica en lapilli acrecional (1-5 cm), pausa entre pulsos"] },
  { id: "surc", alto: 110, color: "#b9b2a6", trama: "liticos",
    nombre: ["Tosca gris con piedras", "Tosca gris con muchas piedras (6-8 m)", "Sur-C: ignimbrita gris, muy rica en líticos arriba (6-8 m)", "Sur-C: base con lóbulos de pómez en forma de duna; techo masivo muy rico en líticos (6-8 m)"] }
];
