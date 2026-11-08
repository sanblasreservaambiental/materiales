/* Fuentes y lecturas de San Blas Reserva Ambiental.
   Para añadir una fuente, copia una entrada dentro del bloque que toque y
   actualiza la fecha de «actualizado». No hace falta tocar index.html.

   Campos de cada entrada:
     cita    referencia breve: autor, año, título, revista o editorial
     url     enlace (opcional; vacío si solo está en papel)
     acceso  "abierto" | "suscripción" | "papel"
     uso     dónde se usa en los materiales (cuadernos, dossieres, visita…)
     niveles lista con "primaria", "eso", "bachillerato", "profesorado"
     nota    aclaración opcional
*/
window.FUENTES = {
  actualizado: "8 nov. 2026",
  bloques: [
    {
      titulo: "El suelo que pisamos: volcanes y barranco",
      fuentes: [
        { cita: "Rodríguez Losada, J. A. (2000). Itinerario geológico por los depósitos piroclásticos del sur de Tenerife. Serie Casa de los Volcanes, 7, 205-214.",
          url: "https://www.volcanesdecanarias.org/images/DOWNLOAD/Volcanes/08_DEPOSITOS_PIRO.pdf",
          acceso: "abierto", uso: "Parada geológica de la visita (la primera parada es Los Abrigos)", niveles: ["bachillerato", "profesorado"] },
        { cita: "IGME. Lugar de Interés Geológico IC4026: Ignimbritas pleistocenas del Miembro El Abrigo (2022).",
          url: "https://info.igme.es/ielig/LIGInfo.aspx?codigo=IC4026",
          acceso: "abierto", uso: "La ignimbrita del barranco de San Blas, justo enfrente de la Reserva", niveles: ["eso", "bachillerato", "profesorado"] },
        { cita: "Mitjavila, J. M. y Villa, I. M. (1993). Temporal evolution of Diego Hernández formation (Las Cañadas, Tenerife) and confirmation of the age of the caldera. Revista de la Sociedad Geológica de España, 6, 61-65.",
          url: "https://dialnet.unirioja.es/servlet/articulo?codigo=7410438",
          acceso: "abierto", uso: "Línea del tiempo «de la caldera al Teide»", niveles: ["bachillerato", "profesorado"] },
        { cita: "González-García, D. et al. (2022). Pre-eruptive conditions and dynamics recorded in banded pumices from the El Abrigo caldera-forming eruption. Journal of Petrology, 63(3), egac009.",
          url: "https://doi.org/10.1093/petrology/egac009",
          acceso: "suscripción", uso: "Pómez bandeadas y mezcla de magmas", niveles: ["profesorado"] }
      ]
    },
    {
      titulo: "Seres vivos de tierra y mar",
      fuentes: [
        { cita: "García Casanova, J., Wildpret, W. y Rodríguez Delgado, O. (2007). Contribución al estudio geobotánico de los espacios naturales protegidos del antiguo menceyato de Abona. Revista de la Academia Canaria de Ciencias, XIX(4), 75-88.",
          url: "https://hdl.handle.net/20.500.12285/racc/603",
          acceso: "abierto", uso: "Flora de Montaña Amarilla y del litoral sur; guía de plantas", niveles: ["bachillerato", "profesorado"] },
        { cita: "Coello, A. J. et al. (2024). Phylogenetics and phylogeography of Euphorbia canariensis. Plant Biology, 26(3), 398-414.",
          url: "https://doi.org/10.1111/plb.13635",
          acceso: "suscripción", uso: "Ficha del cardón", niveles: ["bachillerato", "profesorado"],
          nota: "Versión previa en abierto: doi.org/10.1101/2023.01.27.525850" },
        { cita: "Ministerio para la Transición Ecológica (2025). Espacio marino de Sebadales del Sur de Tenerife. Navegación y fondeo (folleto de la Zona Especial de Conservación).",
          url: "", acceso: "abierto", uso: "Qué hay bajo el agua frente a la Reserva: seba y Halophila", niveles: ["primaria", "eso", "bachillerato"],
          nota: "NIPO 665250168. Plan de gestión: Orden ARM/2417/2011." },
        { cita: "González Henríquez, N. y Santos Guerra, A. (1983). El género Caulerpa Lamouroux en las Islas Canarias. Botánica Macaronésica, 11.",
          url: "https://hdl.handle.net/20.500.12285/botmaca/1",
          acceso: "abierto", uso: "Algas del litoral (Los Abrigos, El Médano) en 1983", niveles: ["profesorado"] }
      ]
    },
    {
      titulo: "Abona antes de la conquista",
      fuentes: [
        { cita: "Mederos Martín, A., Escribano Cobo, G. y Valencia Afonso, V. (2021). Prospección arqueológica y grabados rupestres del municipio de San Miguel de Abona. Anuario de Estudios Atlánticos, 67.",
          url: "https://doi.org/10.36980/10599.10178",
          acceso: "abierto", uso: "Arqueología de San Miguel, con un yacimiento en Montaña Amarilla", niveles: ["eso", "bachillerato", "profesorado"] },
        { cita: "Mederos Martín, A. y Escribano Cobo, G. (2016). Prospección arqueológica alrededor del Puerto de Abona y atalayas. Anuario de Estudios Atlánticos, 62.",
          url: "https://hdl.handle.net/20.500.12285/aea/741",
          acceso: "abierto", uso: "De dónde viene el nombre de Los Abrigos; el desembarco de 1496", niveles: ["eso", "bachillerato"] },
        { cita: "Borges Domínguez, E. y Barro Rois, A. Cambios y pervivencias culturales en el Menceyato de Abona: las manifestaciones rupestres del camino de las Lajas. Coloquios de Historia Canario-Americana.",
          url: "https://hdl.handle.net/20.500.12285/coloquios/897",
          acceso: "abierto", uso: "Grabados de San Miguel", niveles: ["bachillerato", "profesorado"] },
        { cita: "Abreu Hernández, I., García Ávila, J. C. y Marrero Salas, E. (2017). Los materiales arqueológicos del yacimiento ARQ-12 (Granadilla de Abona). XXII Coloquio de Historia Canario-Americana.",
          url: "https://hdl.handle.net/20.500.12285/coloquios/2328",
          acceso: "abierto", uso: "¿Qué pasa con el patrimonio cuando el suelo cambia de uso?", niveles: ["bachillerato"] },
        { cita: "Gozalbes Cravioto, E. (2009). Navegación, pesca y poblamiento en la historia primitiva canaria. Anuario de Estudios Atlánticos, 55, 369-388.",
          url: "https://www.redalyc.org/pdf/2744/274419484011.pdf",
          acceso: "abierto", uso: "Costa, pesca e intercambio", niveles: ["bachillerato", "profesorado"] },
        { cita: "Guerrero Ayuso, V. M. (2008). Canarias en el contexto de las navegaciones atlánticas de la Antigüedad. Saguntum, 40, 37-62.",
          url: "https://ojs.uv.es/index.php/saguntum/article/download/1070/573",
          acceso: "abierto", uso: "¿Cómo llegaron los primeros pobladores?", niveles: ["profesorado"] },
        { cita: "Navarro Mederos, J. F. (1997). Arqueología de las Islas Canarias. Espacio, Tiempo y Forma, Serie I, 10.",
          url: "https://doi.org/10.5944/etfi.10.1997.4662",
          acceso: "abierto", uso: "Síntesis para el profesorado", niveles: ["profesorado"] }
      ]
    },
    {
      titulo: "¿Quién escribió esto? Crónicas y miradas",
      fuentes: [
        { cita: "González Carracedo, L. S. (2023). Las gentes canarias en la crónica portuguesa del siglo XV de Gomes Eanes de Zurara. Nexo, 19, 35-43.",
          url: "https://www.iehcan.com/wp-content/uploads/2023/04/NX1935-NEXO19-Las-gentes-canarias-20230424.pdf",
          acceso: "abierto", uso: "Lectura crítica de las crónicas", niveles: ["eso", "bachillerato"] },
        { cita: "Arcos Pereira, T. (2020). En los confines del mundo: Canarias en la Antigüedad, del mito a la realidad. Actas de las Jornadas BIEREHITE, 2, 35-88.",
          url: "https://www.museosdetenerife.org/mha-museo-de-historia-y-antropologia/wp-content/uploads/sites/4/2020/12/Bierehite2019_03.pdf",
          acceso: "abierto", uso: "Mito frente a dato (actividad de entrada)", niveles: ["eso", "bachillerato"] },
        { cita: "Manrique, D. J. (1919). El Mencey de Abona. Tradición.",
          url: "https://hdl.handle.net/20.500.12285/mdcte/1831",
          acceso: "abierto", uso: "Cómo imaginó el romanticismo a los guanches: fuente sobre la mirada, no sobre los hechos", niveles: ["bachillerato"] }
      ]
    },
    {
      titulo: "Señorío, conquista y tierra",
      fuentes: [
        { cita: "Dossier B3 de San Blas: ¿Se puede vender una isla que no es tuya? El señorío de Canarias (1402-1495).",
          url: "dossieres/dossier-B3-senorio-de-canarias.pdf",
          acceso: "abierto", uso: "Asiento de 1484, Acta del Bufadero y Pesquisa de Cabitos, con comentario guiado", niveles: ["eso", "bachillerato"],
          nota: "Basado en Aznar Vallejo, «La transmisión del señorío de Canarias en el siglo XV» (XV Coloquio de Historia Canario-Americana). Versiones anteriores en el histórico." },
        { cita: "Rojas Donat, L. Posesión de territorios de infieles durante el siglo XV: las Canarias y las Indias. Coloquios de Historia Canario-Americana.",
          url: "https://revistas.grancanaria.com/index.php/CHCA/article/download/7816/6806/8017",
          acceso: "abierto", uso: "El marco jurídico y papal del derecho de conquista", niveles: ["bachillerato", "profesorado"] },
        { cita: "Báez Hernández, F. (2016). El repartimiento de la isla de Tenerife (1493-1569). Instituto de Estudios Canarios.",
          url: "", acceso: "papel", uso: "Las Datas: ¿cómo llegó alguien a ser propietario?", niveles: ["profesorado"],
          nota: "Reseña en abierto: Gutiérrez-de-Armas (2022), Fronteras de la Historia, 27(1)." },
        { cita: "Miteva, Y. (2024). Entre dos mundos: la historia de tres familias guanches de El Rosario. Cliocanarias, 6, 167-195.",
          url: "https://cliocanarias.com/wp-content/uploads/2024/07/06_yuliya_GUANCHES.pdf",
          acceso: "abierto", uso: "Los guanches no desaparecieron: nombres propios después de la conquista", niveles: ["eso", "bachillerato"] },
        { cita: "Nuez Santana, J. C. de la. Reflexiones sobre los pósitos en Canarias durante la crisis del Antiguo Régimen: el Pósito de Vilaflor. Revista de Historia Canaria.",
          url: "https://hdl.handle.net/20.500.12285/revhiscan/350",
          acceso: "abierto", uso: "El campo de San Blas antes del tomate; San Miguel se separa de Vilaflor en 1796", niveles: ["bachillerato", "profesorado"] },
        { cita: "Pérez Barrios, C. R. (1996). Conflictividad local en torno a la Escribanía de Vilaflor o de las Bandas de Abona (1827-1837). Boletín Millares Carlo, 15.",
          url: "https://hdl.handle.net/20.500.12285/bolmc/279",
          acceso: "abierto", uso: "Las Bandas de Abona en el siglo XIX", niveles: ["bachillerato", "profesorado"] },
        { cita: "Díaz González, E. M. (2013). La restauración de los protocolos notariales de la antigua escribanía de Vilaflor (siglo XVII). Cartas diferentes, 9, 305-326.",
          url: "https://hdl.handle.net/20.500.12285/cartas/47",
          acceso: "abierto", uso: "Guía de archivo para trabajos de investigación", niveles: ["profesorado"] }
      ]
    },
    {
      titulo: "Trabajo, escuela y agua (siglos XVIII-XX)",
      fuentes: [
        { cita: "Solbes Ferri, S. (2018). La navegación directa de Canarias a América, 1718-1778. América Latina en la Historia Económica, 25(1), 36-97.",
          url: "https://alhe.mora.edu.mx/index.php/ALHE/article/view/875",
          acceso: "abierto", uso: "El «tributo de sangre» del Reglamento de 1718", niveles: ["bachillerato", "profesorado"] },
        { cita: "Barbero, P. (2024). Trabajo y educación infantil en el mundo rural de Tenerife al final del siglo XVIII. Ohm: Obradoiro de Historia Moderna, 33.",
          url: "https://revistas.usc.gal/index.php/ohm/article/view/10016",
          acceso: "abierto", uso: "Cuando los niños y niñas trabajaban en el campo", niveles: ["eso", "bachillerato"] },
        { cita: "Pérez Barrios, C. R. (1999). Reflexiones sobre la enseñanza en el Sur de Tenerife en el tránsito del siglo XIX al XX: Granadilla de Abona. Boletín Millares Carlo, 18.",
          url: "https://hdl.handle.net/20.500.12285/bolmc/232",
          acceso: "abierto", uso: "¿Quién iba a la escuela? El 95 % de las mujeres de San Miguel no sabía leer a mediados del XIX", niveles: ["primaria", "eso", "bachillerato"] },
        { cita: "Díaz Rodríguez, M. C. Aproximación a la dinámica poblacional de Granadilla de Abona (1857-1975). Revista de Historia Canaria.",
          url: "https://hdl.handle.net/20.500.12285/revhiscan/278",
          acceso: "abierto", uso: "Del tomate al turismo: emigración, inmigración gomera y bajada a la costa", niveles: ["eso", "bachillerato"] },
        { cita: "Amigo de Lara, J. (1960). Los alumbramientos de aguas en Tenerife. Anuario de Estudios Atlánticos, 6.",
          url: "https://hdl.handle.net/20.500.12285/aea/8",
          acceso: "abierto", uso: "Galerías y pozos de la isla en 1960", niveles: ["bachillerato", "profesorado"] },
        { cita: "Cruz García, T. El «misterio» y la «tragedia» del agua en Tenerife. Anuario de Estudios Atlánticos.",
          url: "https://hdl.handle.net/20.500.12285/aea/1",
          acceso: "abierto", uso: "Comentario de texto: el agua, el Canal del Sur y el riesgo de agotar los acuíferos", niveles: ["bachillerato"] },
        { cita: "Pérez Barrios, C. R. Un episodio de la Guerra del Agua en San Miguel de Abona durante la II República. XVI Coloquio de Historia Canario-Americana.",
          url: "https://hdl.handle.net/20.500.12285/coloquios/1687",
          acceso: "abierto", uso: "El agua del sur y sus conflictos", niveles: ["eso", "bachillerato"] },
        { cita: "MOP / PNUD / UNESCO (1975). Estudio científico de los recursos de agua en las Islas Canarias (SPA/69/515). Provincia de Santa Cruz de Tenerife. Láminas.",
          url: "https://hdl.handle.net/20.500.12285/mdcte/3786",
          acceso: "abierto", uso: "Mapas de lluvia y agua subterránea", niveles: ["bachillerato", "profesorado"] },
        { cita: "Suárez Moreno, F. (2009). El agua en Canarias. Historia, estrategias y procedimientos didácticos. Bienmesabe.org.",
          url: "https://bienmesabe.org/uploads/publicaciones/libro_agua/libro.pdf",
          acceso: "abierto", uso: "Ideas de actividades sobre el agua", niveles: ["profesorado"] },
        { cita: "Decreto 372/2023, por el que se aprueba el Plan Hidrológico Insular de la Demarcación Hidrográfica de Tenerife, tercer ciclo (2021-2027). BOC n.º 191, de 27 de septiembre de 2023.",
          url: "https://sede.gobiernodecanarias.org/boc/boc-a-2023-191-3191.pdf",
          acceso: "abierto", uso: "De la galería a la desaladora; quién autoriza una depuradora y sus vertidos", niveles: ["bachillerato", "profesorado"] },
        { cita: "Grafcan. Censo de vertidos desde tierra al mar 2025 y Censo nacional de vertidos autorizados (visor).",
          url: "https://visor-incrustable.devops.grafcan.es/?&svc=svcVertidos2025&lat=28.2696939132922&lng=-16.710449936265768&zoom=10.658970027905507&lyrvis=1111&url=https://visor.grafcan.es/services/regional/",
          acceso: "abierto", uso: "Mapa de vertidos del sur para trabajar en clase", niveles: ["eso", "bachillerato"] }
      ]
    },
    {
      titulo: "Siglo XX: oficios, tomate y turismo",
      fuentes: [
        { cita: "Brito, M. De camellero a chófer. Evolución del transporte en San Miguel de Abona. El Pajar. Cuaderno de Etnografía Canaria.",
          url: "https://hdl.handle.net/20.500.12285/pajar/788",
          acceso: "abierto", uso: "El tomate en camello y las empaquetadoras", niveles: ["primaria", "eso", "bachillerato"] },
        { cita: "Fariña González, M. A. (1998). Las loceras de San Miguel de Abona. El Pajar. Cuaderno de Etnografía Canaria.",
          url: "https://hdl.handle.net/20.500.12285/pajar/41",
          acceso: "abierto", uso: "Oficios de mujeres: el barro", niveles: ["primaria", "eso"] },
        { cita: "Espinel Cejas, J. M. El Drago, antiguo alfar de San Miguel de Abona. Tenique.",
          url: "https://hdl.handle.net/20.500.12285/teniq/26",
          acceso: "abierto", uso: "Oficios de mujeres: el barro", niveles: ["eso", "profesorado"] },
        { cita: "Lorenzo Perera, M. J. et al. El horno de tejas de La Hoya (San Miguel de Abona). Trabajos de investigación, limpieza y reconstrucción. Tenique.",
          url: "https://hdl.handle.net/20.500.12285/teniq/52",
          acceso: "abierto", uso: "Modelo de proyecto de patrimonio hecho con alumnado", niveles: ["eso", "bachillerato", "profesorado"] },
        { cita: "Martín Martín, V. O. (2005). De la agricultura al turismo en Tenerife: la génesis del espacio turístico. Basa, 28, 44-49.",
          url: "", acceso: "papel", uso: "Lectura principal sobre el paso del tomate al turismo", niveles: ["bachillerato", "profesorado"] },
        { cita: "García-Blanco Chávez, C. (2025). Turismo y territorio. La transformación del sur de Tenerife (1960-2018). Territorios en Formación, 23.",
          url: "https://doi.org/10.20868/tf.2025.23.5625",
          acceso: "abierto", uso: "Las cuatro fases del turismo en el sur", niveles: ["bachillerato", "profesorado"] },
        { cita: "Fernández-Latorre, F. M. y Díaz del Olmo, F. (2011). Huella ecológica y presión turística socio-ambiental. Aplicación en Canarias. Boletín de la Asociación de Geógrafos Españoles, 57, 147-173.",
          url: "https://dialnet.unirioja.es/servlet/articulo?codigo=3814231",
          acceso: "abierto", uso: "¿Cuántos planetas harían falta? (datos de 2011)", niveles: ["eso", "bachillerato"] },
        { cita: "Dávila Arencibia, J., Gil Quintana, V. y Lousa Sosa, M. (2019). Mujeres empaquetadoras de tomates (documental, 24 min). Lagarta Comunicación.",
          url: "https://www.youtube.com/watch?v=8FdWBIsVlrY",
          acceso: "abierto", uso: "Memoria oral del empaquetado (Gran Canaria)", niveles: ["eso", "bachillerato"] },
        { cita: "Lorenzo León, V. Los tomateros. Historias y vivencias (partes I y II).",
          url: "https://www.youtube.com/watch?v=sg5HuHZOXns",
          acceso: "abierto", uso: "Modelo de entrevista para el concurso (Gran Canaria)", niveles: ["primaria", "eso"],
          nota: "Parte II: youtube.com/watch?v=6EtQQqN96UA" },
        { cita: "Guerra, V. M. (2018). La zafra del alisio (documental). Emitido en Televisión Canaria.",
          url: "https://rtvc.es/la-zafra-del-alisio-un-viaje-por-la-historia-del-tomate-canario/",
          acceso: "abierto", uso: "Historia del tomate de exportación", niveles: ["eso", "bachillerato"] }
      ]
    }
  ]
};
