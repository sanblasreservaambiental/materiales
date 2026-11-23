(() => {
  const T = {
    es: {
      antetitulo: "San Blas Reserva Ambiental · Tenerife",
      titulo: "Catálogo de especies",
      entradilla: "Plantas, aves y otros seres vivos que viven en la reserva o pasan por ella: cómo reconocerlas, cómo viven y qué usos les dieron nuestros mayores.",
      recuento: n => `${n} especies en el catálogo`,
      todas: "Todas", buscar: "Buscar especie", buscarPh: "Busquen por nombre…",
      vacio: "No encontramos ninguna especie con ese nombre.",
      descripcion: "Cómo es", usos: "Usos y cultura",
      sinFicha: "Especie observada en la reserva o en su entorno y registrada en iNaturalist. Estamos preparando su ficha.",
      verInat: "Ver en iNaturalist", mapaCanarias: "Mapa en todo Canarias", obs: n => `${n} ${n === 1 ? "observación" : "observaciones"} en San Blas y su entorno`,
      foto: "Imagen", cerrar: "Cerrar",
      nivel: "Nivel del alumnado", sinClasificar: "Sin clasificar", islasEt: "Islas", islasTodas: "todas las islas Canarias", islasN: { H: "El Hierro", P: "La Palma", G: "La Gomera", T: "Tenerife", C: "Gran Canaria", F: "Fuerteventura", L: "Lanzarote" }, litoralTit: "En el entorno de la reserva", litoralTxt: "Especies observadas en iNaturalist a menos de 750 m de San Blas pero fuera de la reserva: en el mar, la costa y los alrededores. Son especies limítrofes, no de la reserva.",
      vistaTarjetas: "Tarjetas", vistaArbol: "Árbol", desplegar: "Desplegar todo", plegar: "Plegar todo", grupoEt: "Grupo",
      rangos: { reino: "Reino", clase: "Clase", orden: "Orden", familia: "Familia" },
      niveles: [
        { curso: "Primaria 3.º–4.º", nombre: "Reinos", ayuda: "Empezamos por lo grande: ¿es una planta, un animal o un hongo? Solo se muestran los nombres comunes." },
        { curso: "Primaria 5.º–6.º", nombre: "Grupos", ayuda: "Dentro de cada reino, grupos que se reconocen a simple vista: aves, reptiles, peces, insectos, arácnidos, moluscos…" },
        { curso: "ESO", nombre: "Clases y órdenes", ayuda: "Filtren por clase (dicotiledóneas, aves, insectos…). Las especies aparecen agrupadas por orden, con su nombre científico." },
        { curso: "Bachillerato y FP", nombre: "Familias", ayuda: "Las especies se agrupan por familia, el escalón anterior al género y la especie. En la ficha está la clasificación completa." }
      ],
      inatAnte: "Catálogo vivo", inatTitulo: "Súmense en iNaturalist",
      inatTexto: "Este catálogo crece con las observaciones del proyecto San Blas Reserva Ambiental en iNaturalist. Basta con una cuenta y subir fotos con ubicación GPS tomadas dentro de la reserva: se añaden al proyecto automáticamente. Las especies sin ficha propia proceden de observaciones de iNaturalist hechas a menos de 750 m de la reserva.",
      inatBoton: "Abrir el proyecto en iNaturalist", comprobarBoton: "Comprobar el proyecto ahora", comprobando: "Consultando iNaturalist…", comprobarError: "No se ha podido consultar iNaturalist. Prueben más tarde.", comprobarRes: (n, d) => `El proyecto tiene ahora ${n} especies. ${d ? `Va ${d} por delante de este catálogo:` : "Este catálogo está al día."}`, comprobarSubidas: n => `${n} ${n === 1 ? "especie del catálogo ya está" : "especies del catálogo ya están"} en el proyecto desde la última actualización:`, comprobarFaltan: n => `Quedan ${n} especies del catálogo sin observar dentro de la reserva. Llevan la etiqueta «Aún no está en el proyecto».`,
      irLlevar: "↓ Llévenselo al móvil para usarlo sin conexión", llevarTitulo: "Llévense el catálogo en el móvil", llevarTexto: mb => `Descarguen todas las fichas, con sus fotos y en los tres idiomas (español, inglés y alemán), para consultarlas durante la visita aunque no haya cobertura. Ocupa unos ${mb} MB: mejor hacerlo con wifi.`, descargarBoton: "Descargar para usar sin conexión", descargando: (n, t) => `Descargando… ${n} de ${t} archivos`, descargado: "Listo: el catálogo ya funciona sin conexión en este móvil, en los tres idiomas. Ábranlo desde esta misma dirección o desde la pantalla de inicio.", descargaError: "No se ha podido completar la descarga. Comprueben la conexión y vuelvan a intentarlo.", instalarBoton: "Añadir a la pantalla de inicio", llevarIos: "En iPhone o iPad: pulsen el botón Compartir y luego «Añadir a pantalla de inicio» para abrirlo como una aplicación.", quitarBoton: "Quitar la descarga de este móvil", quitado: "Se ha quitado la descarga. El catálogo sigue disponible con conexión.",
      invitaTitulo: "¿Conocen otro uso o un nombre tradicional?",
      invitaTexto: "Si en su familia o en su centro conocen otro nombre canario o un uso tradicional de alguna de estas especies, escríbannos a <a href=\"mailto:tenerife.ambiental-res@barcelo.com\">tenerife.ambiental-res@barcelo.com</a> y lo añadiremos citando la fuente.",
      pie1: "Más recursos para el aula en <a href=\"https://sanblasreservaambiental.org/materiales/\">Materiales de San Blas</a>.",
      pie2: "San Blas Reserva Ambiental · San Miguel de Abona, Tenerife. Imágenes de plantas y aves: guías de campo de San Blas Reserva Ambiental. Fotos de iNaturalist: de sus autores, con la licencia indicada en cada ficha."
    },
    en: {
      antetitulo: "San Blas Environmental Reserve · Tenerife",
      titulo: "Species catalogue",
      entradilla: "Plants, birds and other wildlife that live in or pass through the reserve: how to recognise them, how they live and how islanders traditionally used them.",
      recuento: n => `${n} species in the catalogue`,
      todas: "All", buscar: "Search species", buscarPh: "Search by name…",
      vacio: "No species found with that name.",
      descripcion: "What it is like", usos: "Uses and culture",
      sinFicha: "Species observed in or around the reserve and recorded on iNaturalist. Its profile is being prepared.",
      verInat: "View on iNaturalist", mapaCanarias: "Map across the Canary Islands", obs: n => `${n} ${n === 1 ? "observation" : "observations"} in and around San Blas`,
      foto: "Image", cerrar: "Close",
      nivel: "Student level", sinClasificar: "Unclassified", islasEt: "Islands", islasTodas: "all the Canary Islands", islasN: { H: "El Hierro", P: "La Palma", G: "La Gomera", T: "Tenerife", C: "Gran Canaria", F: "Fuerteventura", L: "Lanzarote" }, litoralTit: "Around the reserve", litoralTxt: "Species recorded on iNaturalist within 750 m of San Blas but outside the reserve: at sea, on the coast and nearby. They are neighbouring species, not part of the reserve.",
      vistaTarjetas: "Cards", vistaArbol: "Tree", desplegar: "Expand all", plegar: "Collapse all", grupoEt: "Group",
      rangos: { reino: "Kingdom", clase: "Class", orden: "Order", familia: "Family" },
      niveles: [
        { curso: "Ages 8–10", nombre: "Kingdoms", ayuda: "Start with the big picture: is it a plant, an animal or a fungus? Only common names are shown." },
        { curso: "Ages 10–12", nombre: "Groups", ayuda: "Within each kingdom, groups you can recognise at a glance: birds, reptiles, fish, insects, arachnids, molluscs…" },
        { curso: "Secondary", nombre: "Classes and orders", ayuda: "Filter by class (dicots, birds, insects…). Species are grouped by order, with their scientific names." },
        { curso: "Upper secondary", nombre: "Families", ayuda: "Species are grouped by family, the step before genus and species. Each profile shows the full classification." }
      ],
      inatAnte: "Living catalogue", inatTitulo: "Join us on iNaturalist",
      inatTexto: "This catalogue grows with the observations of the San Blas Reserva Ambiental project on iNaturalist. All you need is an account: upload GPS-tagged photos taken inside the reserve and they are added to the project automatically. Species without a full profile come from iNaturalist observations made within 750 m of the reserve.",
      inatBoton: "Open the project on iNaturalist", comprobarBoton: "Check the project now", comprobando: "Asking iNaturalist…", comprobarError: "iNaturalist could not be reached. Please try later.", comprobarRes: (n, d) => `The project now has ${n} species. ${d ? `It is ${d} ahead of this catalogue:` : "This catalogue is up to date."}`, comprobarSubidas: n => `${n} catalogue ${n === 1 ? "species has" : "species have"} been added to the project since the last update:`, comprobarFaltan: n => `${n} catalogue species have not been recorded inside the reserve yet. They carry the label “Not in the project yet”.`,
      irLlevar: "↓ Take it on your phone for offline use", llevarTitulo: "Take the catalogue on your phone", llevarTexto: mb => `Download every species card, with photos and in all three languages (Spanish, English and German), to use during your visit even without mobile signal. It takes about ${mb} MB, so Wi-Fi is best.`, descargarBoton: "Download for offline use", descargando: (n, t) => `Downloading… ${n} of ${t} files`, descargado: "Done: the catalogue now works offline on this phone, in all three languages. Open it from this same address or from your home screen.", descargaError: "The download could not be completed. Check your connection and try again.", instalarBoton: "Add to home screen", llevarIos: "On iPhone or iPad: tap the Share button, then “Add to Home Screen” to open it like an app.", quitarBoton: "Remove the download from this phone", quitado: "The download has been removed. The catalogue is still available online.",
      invitaTitulo: "Do you know another use or a traditional name?",
      invitaTexto: "If you know another Canarian name or a traditional use for any of these species, write to us at <a href=\"mailto:tenerife.ambiental-res@barcelo.com\">tenerife.ambiental-res@barcelo.com</a> and we will add it, citing the source.",
      pie1: "More classroom resources at <a href=\"https://sanblasreservaambiental.org/materiales/\">San Blas materials</a> (in Spanish).",
      pie2: "San Blas Reserva Ambiental · San Miguel de Abona, Tenerife. Plant and bird images: San Blas Reserva Ambiental field guides. iNaturalist photos: by their authors, under the licence shown on each profile."
    },
    de: {
      antetitulo: "Umweltreservat San Blas · Teneriffa",
      titulo: "Artenkatalog",
      entradilla: "Pflanzen, Vögel und andere Lebewesen, die im Reservat leben oder es durchqueren: wie man sie erkennt, wie sie leben und wie die Inselbewohner sie traditionell nutzten.",
      recuento: n => `${n} Arten im Katalog`,
      todas: "Alle", buscar: "Art suchen", buscarPh: "Nach Namen suchen…",
      vacio: "Keine Art mit diesem Namen gefunden.",
      descripcion: "Merkmale", usos: "Nutzung und Kultur",
      sinFicha: "Im Reservat oder in seiner Umgebung beobachtete und auf iNaturalist erfasste Art. Das Porträt ist in Vorbereitung.",
      verInat: "Auf iNaturalist ansehen", mapaCanarias: "Karte der Kanaren", obs: n => `${n} ${n === 1 ? "Beobachtung" : "Beobachtungen"} in und um San Blas`,
      foto: "Bild", cerrar: "Schließen",
      nivel: "Lernstufe", sinClasificar: "Nicht zugeordnet", islasEt: "Inseln", islasTodas: "alle Kanarischen Inseln", islasN: { H: "El Hierro", P: "La Palma", G: "La Gomera", T: "Teneriffa", C: "Gran Canaria", F: "Fuerteventura", L: "Lanzarote" }, litoralTit: "Rund um das Reservat", litoralTxt: "Auf iNaturalist im Umkreis von 750 m um San Blas, aber außerhalb des Reservats beobachtete Arten: im Meer, an der Küste und in der Umgebung. Es sind Nachbararten, nicht Arten des Reservats.",
      vistaTarjetas: "Karten", vistaArbol: "Baum", desplegar: "Alle aufklappen", plegar: "Alle zuklappen", grupoEt: "Gruppe",
      rangos: { reino: "Reich", clase: "Klasse", orden: "Ordnung", familia: "Familie" },
      niveles: [
        { curso: "8–10 Jahre", nombre: "Reiche", ayuda: "Zuerst das große Ganze: Pflanze, Tier oder Pilz? Es werden nur die deutschen Namen gezeigt." },
        { curso: "10–12 Jahre", nombre: "Gruppen", ayuda: "Innerhalb jedes Reichs Gruppen, die man auf einen Blick erkennt: Vögel, Reptilien, Fische, Insekten, Spinnentiere, Weichtiere…" },
        { curso: "Sekundarstufe I", nombre: "Klassen und Ordnungen", ayuda: "Nach Klasse filtern (Zweikeimblättrige, Vögel, Insekten…). Die Arten sind nach Ordnung gruppiert, mit wissenschaftlichem Namen." },
        { curso: "Sekundarstufe II", nombre: "Familien", ayuda: "Die Arten sind nach Familie gruppiert, der Stufe vor Gattung und Art. Im Porträt steht die vollständige Systematik." }
      ],
      inatAnte: "Lebendiger Katalog", inatTitulo: "Machen Sie mit bei iNaturalist",
      inatTexto: "Dieser Katalog wächst mit den Beobachtungen des Projekts San Blas Reserva Ambiental auf iNaturalist. Sie brauchen nur ein Konto: Laden Sie Fotos mit GPS-Daten aus dem Reservat hoch, und sie werden automatisch dem Projekt zugeordnet. Arten ohne eigenes Porträt stammen aus iNaturalist-Beobachtungen im Umkreis von 750 m um das Reservat.",
      inatBoton: "Projekt auf iNaturalist öffnen", comprobarBoton: "Projekt jetzt prüfen", comprobando: "iNaturalist wird abgefragt…", comprobarError: "iNaturalist ist nicht erreichbar. Bitte später erneut versuchen.", comprobarRes: (n, d) => `Das Projekt hat jetzt ${n} Arten. ${d ? `Es ist diesem Katalog ${d} voraus:` : "Der Katalog ist aktuell."}`, comprobarSubidas: n => `${n} Katalogarten sind seit der letzten Aktualisierung ins Projekt gekommen:`, comprobarFaltan: n => `${n} Katalogarten wurden im Reservat noch nicht beobachtet. Sie tragen das Etikett „Noch nicht im Projekt“.`,
      irLlevar: "↓ Aufs Handy laden und offline nutzen", llevarTitulo: "Den Katalog aufs Handy mitnehmen", llevarTexto: mb => `Laden Sie alle Artensteckbriefe mit Fotos und in allen drei Sprachen (Spanisch, Englisch, Deutsch) herunter, um sie beim Besuch auch ohne Netz zu nutzen. Etwa ${mb} MB, am besten über WLAN.`, descargarBoton: "Für die Offline-Nutzung herunterladen", descargando: (n, t) => `Wird geladen… ${n} von ${t} Dateien`, descargado: "Fertig: Der Katalog funktioniert jetzt auf diesem Handy offline, in allen drei Sprachen. Öffnen Sie ihn über dieselbe Adresse oder vom Startbildschirm.", descargaError: "Der Download konnte nicht abgeschlossen werden. Bitte Verbindung prüfen und erneut versuchen.", instalarBoton: "Zum Startbildschirm hinzufügen", llevarIos: "Auf iPhone oder iPad: Teilen-Taste antippen und dann „Zum Home-Bildschirm“ wählen, um ihn wie eine App zu öffnen.", quitarBoton: "Download von diesem Handy entfernen", quitado: "Der Download wurde entfernt. Online ist der Katalog weiterhin verfügbar.",
      invitaTitulo: "Kennen Sie eine andere Nutzung oder einen traditionellen Namen?",
      invitaTexto: "Wenn Sie einen weiteren kanarischen Namen oder eine traditionelle Nutzung einer dieser Arten kennen, schreiben Sie uns an <a href=\"mailto:tenerife.ambiental-res@barcelo.com\">tenerife.ambiental-res@barcelo.com</a> – wir ergänzen sie mit Quellenangabe.",
      pie1: "Weitere Unterrichtsmaterialien unter <a href=\"https://sanblasreservaambiental.org/materiales/\">Materialien San Blas</a> (auf Spanisch).",
      pie2: "San Blas Reserva Ambiental · San Miguel de Abona, Teneriffa. Pflanzen- und Vogelbilder: Feldführer von San Blas Reserva Ambiental. iNaturalist-Fotos: von ihren Urhebern, unter der jeweils angegebenen Lizenz."
    }
  };

  const GRUPOS = Object.assign({}, window.GRUPOS, {
    insectos:  { es: "Insectos",  en: "Insects",   de: "Insekten" },
    reptiles:  { es: "Reptiles",  en: "Reptiles",  de: "Reptilien" },
    aracnidos: { es: "Arácnidos", en: "Arachnids", de: "Spinnentiere" },
    moluscos:  { es: "Moluscos",  en: "Molluscs",  de: "Weichtiere" },
    mamiferos: { es: "Mamíferos", en: "Mammals",   de: "Säugetiere" },
    peces:     { es: "Peces",     en: "Fish",      de: "Fische" },
    hongos:    { es: "Hongos y líquenes", en: "Fungi & lichens", de: "Pilze & Flechten" },
    otros:     { es: "Otros",     en: "Others",    de: "Andere" }
  });
  const COLOR = { plantas: "var(--hoja)", aves: "var(--mar)", insectos: "var(--oro)", reptiles: "var(--acento)", aracnidos: "var(--acento-2)", moluscos: "var(--mar)", peces: "var(--mar)", mamiferos: "var(--acento)", hongos: "var(--acento-2)", otros: "var(--suave)" };
  const ESTATUS = window.ESTATUS || {};

  /* Unir catálogo propio y especies de iNaturalist */
  const clave = s => (s || "").toLowerCase().split(/\s+/).slice(0, 2).join(" ");
  const especies = (window.ESPECIES || []).map(e => ({ ...e }));
  const porNombre = new Map(especies.map(e => [clave(e.cientifico), e]));
  for (const i of (window.INAT && window.INAT.especies) || []) {
    const e = porNombre.get(clave(i.cientifico));
    if (e) { e.inat = i; if (!e.foto && i.foto) e.foto = i.foto; }
    else especies.push({ id: "inat-" + i.taxon_id, grupo: i.grupo, cientifico: i.cientifico, nombre: i.nombre, estatus: i.estatus || [], foto: i.foto, inat: i });
  }

  /* Especies de la reserva: las del proyecto de iNaturalist (observadas dentro de sus límites),
     las de las guías de la reserva (fichas propias) y las vistas por el equipo. El resto de
     observaciones de la zona (radio de 750 m) son especies del entorno, limítrofes. */
  /* Estado de conservación → etiquetas (ver CONSERVACION en datos.js) */
  especies.forEach(e => {
    const c = (window.CONSERVACION || {})[clave(e.cientifico)];
    let est = (e.estatus || []).filter(k => k !== "protegida");
    if (c) {
      if (c.uicn) est.push("uicn-" + c.uicn);
      if (c.ceea) est.push("ceea-" + c.ceea);
      if (c.protegida) est.push("protegida");
    }
    e.estatus = est;
  });
  const enReserva = e => !e.id.startsWith("inat-") || (e.inat && e.inat.proyecto > 0) || (e.estatus || []).includes("vista-reserva");
  /* Especies que aún no tienen observaciones dentro del proyecto de iNaturalist */
  const enProyecto = e => !!(e.inat && e.inat.proyecto > 0) || e.proyectoVivo === true;
  const marcarProyecto = () => especies.forEach(e => {
    e.estatus = (e.estatus || []).filter(k => k !== "sin-proyecto");
    if (!enProyecto(e)) e.estatus.push("sin-proyecto");
  });
  marcarProyecto();
  especies.forEach(e => { if (!enReserva(e)) { e.estatus = (e.estatus || []).filter(k => k !== "entorno").concat("entorno"); e.entorno = true; } });

  const $ = s => document.querySelector(s);
  let lang = "es", grupo = "todas", texto = "", nivel = 2, vista = "tarjetas";
  try { if (localStorage.getItem("catalogo-vista") === "arbol") vista = "arbol"; } catch (e) {}
  if (new URLSearchParams(location.search).get("vista") === "arbol") vista = "arbol";
  try { const n = +localStorage.getItem("catalogo-nivel"); if (n >= 1 && n <= 4) nivel = n; } catch (e) {}
  { const n = +new URLSearchParams(location.search).get("nivel"); if (n >= 1 && n <= 4) nivel = n; }
  try { const l = localStorage.getItem("catalogo-idioma"); if (T[l]) lang = l; } catch (e) {}
  const q = new URLSearchParams(location.search).get("lang"); if (T[q]) lang = q;

  const tr = (o) => o ? (o[lang] || o.es || o.en || "") : "";
  const nombre = e => (e.nombre && (e.nombre[lang] || (lang !== "es" && e.nombre.en))) || e.cientifico;
  const norm = s => (s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

  function textos() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-t]").forEach(el => {
      const v = T[lang][el.dataset.t]; if (typeof v !== "string") return;
      if (el.hasAttribute("data-html")) el.innerHTML = v; else el.textContent = v;
    });
    document.querySelectorAll("[data-t-aria]").forEach(el => el.setAttribute("aria-label", T[lang][el.dataset.tAria]));
    document.querySelectorAll(".idiomas button").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === lang));
    $("#buscar").placeholder = T[lang].buscarPh;
    $("#recuento").textContent = T[lang].recuento(especies.length);
    document.title = T[lang].titulo + " · San Blas Reserva Ambiental";
    if (self.OFFLINE) $("#llevar-texto").textContent = T[lang].llevarTexto(Math.ceil(self.OFFLINE.bytes / 1e6));
    if (llevarEstado) $("#llevar-estado").textContent = T[lang][llevarEstado] || "";
  }
  var llevarEstado = "";

  /* Nivel del alumnado: 1 reinos · 2 grupos · 3 clases y órdenes · 4 familias */
  const TAX = window.TAXONOMIA || {};
  const REINOS = {
    Plantae:  { es: "Plantas", en: "Plants", de: "Pflanzen", c: "var(--hoja)" },
    Animalia: { es: "Animales", en: "Animals", de: "Tiere", c: "var(--mar)" },
    Fungi:    { es: "Hongos", en: "Fungi", de: "Pilze", c: "var(--acento-2)" }
  };
  const taxo = e => TAX[clave(e.cientifico)] || {};
  const comun = r => lang === "es" && r && r[1] && r[1].toLowerCase() !== r[0].toLowerCase() ? r[1] : "";
  const rangoTxt = (r, conComun = true) => !r ? "" : (conComun && comun(r) ? `${r[0]} (${comun(r)})` : r[0]);
  const chipTxt = r => !r ? "—" : (comun(r) ? `${comun(r)[0].toUpperCase()}${comun(r).slice(1)} (${r[0]})` : r[0]);
  /* Categoría de los botones de filtro según el nivel */
  function categoria(e) {
    const x = taxo(e);
    if (nivel === 1) { const k = (x.reino || [])[0] || "otros"; return { id: k, txt: tr(REINOS[k]) || k, c: (REINOS[k] || {}).c || COLOR.otros }; }
    if (nivel === 2) return { id: e.grupo, txt: tr(GRUPOS[e.grupo]), c: COLOR[e.grupo] || COLOR.otros };
    const k = (x.clase || [])[0] || "—";
    return { id: k, txt: chipTxt(x.clase), c: COLOR[e.grupo] || COLOR.otros };
  }
  /* Apartado en el que se agrupan las tarjetas (niveles 3 y 4) */
  function apartado(e) {
    const x = taxo(e);
    if (nivel === 3) return x.orden ? { id: x.orden[0], titulo: `${T[lang].rangos.orden} <i></i>`, nombre: x.orden, sub: x.clase } : null;
    if (nivel === 4) return x.familia ? { id: x.familia[0], titulo: `${T[lang].rangos.familia} <i></i>`, nombre: x.familia, sub: x.orden } : null;
    return null;
  }

  function nivelUI() {
    const n = T[lang].niveles[nivel - 1];
    $("#nivel").value = nivel;
    $("#nivel-txt").textContent = `${n.curso} · ${n.nombre}`;
    $("#nivel-ayuda").textContent = n.ayuda;
    $("#nivel").setAttribute("aria-valuetext", `${n.curso} · ${n.nombre}`);
    document.querySelectorAll("#nivel-marcas li").forEach((li, i) => {
      li.textContent = T[lang].niveles[i].curso; li.classList.toggle("activo", i === nivel - 1);
    });
    document.body.classList.toggle("oculto-nivel1", nivel === 1);
  }

  function filtros() {
    const cuenta = {}, info = {};
    especies.forEach(e => { const c = categoria(e); cuenta[c.id] = (cuenta[c.id] || 0) + 1; info[c.id] = info[c.id] || c; });
    let orden = Object.keys(cuenta);
    if (nivel === 1) orden = Object.keys(REINOS).filter(k => cuenta[k]).concat(orden.filter(k => !REINOS[k]));
    else if (nivel === 2) orden = Object.keys(GRUPOS).filter(g => cuenta[g]);
    else orden.sort((a, b) => cuenta[b] - cuenta[a] || a.localeCompare(b));
    if (grupo !== "todas" && !cuenta[grupo]) grupo = "todas";
    const cont = $("#filtros"); cont.innerHTML = "";
    const boton = (id, etiqueta, n, c) => {
      const b = document.createElement("button");
      b.type = "button"; b.style.setProperty("--c", c);
      b.setAttribute("aria-pressed", grupo === id);
      b.innerHTML = (id !== "todas" ? '<span class="punto"></span>' : "") + `<span></span><span class="n">${n}</span>`;
      b.children[id !== "todas" ? 1 : 0].textContent = etiqueta;
      b.onclick = () => { grupo = id; filtros(); pintar(); };
      cont.appendChild(b);
    };
    boton("todas", T[lang].todas, especies.length, "var(--acento)");
    orden.forEach(g => boton(g, info[g].txt, cuenta[g], info[g].c));
  }

  function chips(e) {
    return (e.estatus || []).filter(k => ESTATUS[k]).map(k => `<span class="chip ${k}">${tr(ESTATUS[k])}</span>`).join("");
  }

  function tarjeta(e) {
    const b = document.createElement("button");
    b.type = "button"; b.className = "tarjeta"; b.style.setProperty("--c", COLOR[e.grupo] || COLOR.otros);
    const img = e.foto && e.foto.src
      ? `<img loading="lazy" src="${e.foto.src}" alt="">`
      : `<span class="sinfoto">${tr(GRUPOS[e.grupo])}</span>`;
    b.innerHTML = `<span class="miniatura ${e.foto && e.foto.tipo === "lamina" ? "lamina" : ""}">${img}</span>
      <span class="cuerpo"><h3></h3><p class="cientifico"></p><p class="rango" hidden></p><span class="meta">${chips(e)}</span></span>`;
    b.querySelector("h3").textContent = nombre(e);
    b.querySelector(".cientifico").textContent = e.cientifico;
    if (nombre(e) === e.cientifico) b.querySelector(".cientifico").hidden = true;
    const x = taxo(e), r = b.querySelector(".rango");
    if (nivel === 3 && x.familia) { r.hidden = false; r.textContent = `${T[lang].rangos.familia} ${x.familia[0]}`; }
    if (nivel === 4 && x.orden) { r.hidden = false; r.textContent = `${T[lang].rangos.orden} ${x.orden[0]}`; }
    b.onclick = () => abrir(e);
    return b;
  }

  /* Vista en árbol: reino › (grupo | clase › orden › familia) › especies */
  const RAMAS = { 1: ["reino"], 2: ["reino", "grupo"], 3: ["reino", "clase", "orden"], 4: ["reino", "clase", "orden", "familia"] };
  function rama(e, k) {
    const x = taxo(e);
    if (k === "reino") { const r = x.reino || ["—", ""]; return { id: r[0], et: T[lang].rangos.reino, nom: tr(REINOS[r[0]]) || r[0], c: (REINOS[r[0]] || {}).c }; }
    if (k === "grupo" && (e.grupo === "plantas" || e.grupo === "hongos")) return null;
    if (k === "grupo") return { id: e.grupo, et: T[lang].grupoEt, nom: tr(GRUPOS[e.grupo]), c: COLOR[e.grupo] };
    const r = x[k] || ["—", ""];
    return { id: r[0], et: T[lang].rangos[k], nom: r[0], sci: true, es: comun(r), c: COLOR[e.grupo] };
  }
  function pintarArbol(lista, abierto, ul) {
    const ramas = RAMAS[nivel], raiz = { hijos: new Map(), es: [] };
    lista.forEach(e => {
      let nodo = raiz;
      ramas.forEach(k => {
        const r = rama(e, k);
        if (!r) return;
        if (!nodo.hijos.has(r.id)) nodo.hijos.set(r.id, { r, hijos: new Map(), es: [], n: 0 });
        nodo = nodo.hijos.get(r.id); nodo.n++;
      });
      nodo.es.push(e);
    });
    const hacer = (nodo, cont, prof) => {
      [...nodo.hijos.values()].sort((a, b) => b.n - a.n || a.r.nom.localeCompare(b.r.nom)).forEach(h => {
        const li = document.createElement("li"), d = document.createElement("details");
        li.style.setProperty("--c", h.r.c || "var(--acento)");
        d.open = abierto || prof < 1;
        d.innerHTML = `<summary><span class="rango-et"></span><span class="rango-nom"></span>${h.r.es ? '<span class="rango-es"></span>' : ""}<span class="n">${h.n}</span></summary>`;
        d.querySelector(".rango-et").textContent = h.r.et;
        const nom = d.querySelector(".rango-nom");
        if (h.r.sci) { const i = document.createElement("i"); i.textContent = h.r.nom; nom.appendChild(i); } else nom.textContent = h.r.nom;
        if (h.r.es) d.querySelector(".rango-es").textContent = h.r.es;
        if (h.hijos.size) { const sub = document.createElement("ul"); hacer(h, sub, prof + 1); d.appendChild(sub); }
        if (h.es.length) {
          const hj = document.createElement("div"); hj.className = "hojas";
          h.es.sort((a, b) => nombre(a).localeCompare(nombre(b))).forEach(e => {
            const b = document.createElement("button"); b.type = "button"; b.className = "hoja";
            b.style.setProperty("--c", COLOR[e.grupo] || COLOR.otros);
            b.innerHTML = (e.foto && e.foto.src ? `<img loading="lazy" src="${e.foto.src}" alt="">` : '<span class="sin"></span>') + "<span><b></b><i></i></span>";
            b.querySelector("b").textContent = nombre(e);
            b.querySelector("i").textContent = nombre(e) === e.cientifico ? "" : e.cientifico;
            b.onclick = () => abrir(e);
            hj.appendChild(b);
          });
          d.appendChild(hj);
        }
        li.appendChild(d); cont.appendChild(li);
      });
    };
    hacer(raiz, ul, 0);
  }

  function pintar() {
    const t = norm(texto);
    const lista = especies.filter(e => (grupo === "todas" || categoria(e).id === grupo) &&
      (!t || norm([e.cientifico, ...Object.values(e.nombre || {}), ...Object.values(taxo(e)).flat()].join(" ")).includes(t)));
    document.querySelectorAll("#vista button").forEach(b => b.setAttribute("aria-pressed", b.dataset.vista === vista));
    $("#rejilla").hidden = vista === "arbol"; $("#arbol-cont").hidden = vista !== "arbol";
    $("#vacio").hidden = lista.length > 0;
    const tierra = lista.filter(e => !e.entorno), mar = lista.filter(e => e.entorno);
    const cabeceraMar = (etiqueta) => {
      const h = document.createElement(etiqueta); h.className = "seccion litoral";
      h.innerHTML = "<span></span><small></small>";
      h.firstChild.textContent = T[lang].litoralTit;
      h.lastChild.textContent = T[lang].litoralTxt;
      return h;
    };
    if (vista === "arbol") {
      const ul = $("#arbol"); ul.innerHTML = "";
      pintarArbol(tierra, !!t || grupo !== "todas", ul);
      if (mar.length) {
        const li = document.createElement("li"); li.className = "arbol-litoral"; li.appendChild(cabeceraMar("h3"));
        const sub = document.createElement("ul"); sub.className = "arbol"; li.appendChild(sub); ul.appendChild(li);
        pintarArbol(mar, !!t || grupo !== "todas", sub);
      }
      return;
    }
    const rej = $("#rejilla"); rej.innerHTML = "";
    if (nivel >= 3) {
      const grupos = new Map();
      tierra.forEach(e => { const a = apartado(e) || { id: "~", titulo: T[lang].sinClasificar, nombre: null }; if (!grupos.has(a.id)) grupos.set(a.id, { a, es: [] }); grupos.get(a.id).es.push(e); });
      [...grupos.values()].sort((x, y) => (x.a.id === "~") - (y.a.id === "~") || y.es.length - x.es.length || x.a.id.localeCompare(y.a.id)).forEach(({ a, es }) => {
        const h = document.createElement("h3"); h.className = "seccion";
        h.innerHTML = a.titulo + (a.sub ? "<small></small>" : "");
        if (a.nombre) { h.querySelector("i").textContent = a.nombre[0]; if (comun(a.nombre)) h.querySelector("i").after(` · ${comun(a.nombre)}`); }
        if (a.sub) h.querySelector("small").textContent = `${nivel === 3 ? T[lang].rangos.clase : T[lang].rangos.orden} ${rangoTxt(a.sub, false)} · ${T[lang].recuento(es.length)}`;
        rej.appendChild(h);
        es.forEach(e => rej.appendChild(tarjeta(e)));
      });
    } else {
      tierra.forEach(e => rej.appendChild(tarjeta(e)));
    }
    if (mar.length) { rej.appendChild(cabeceraMar("h2")); mar.forEach(e => rej.appendChild(tarjeta(e))); }
    $("#vacio").hidden = lista.length > 0;
  }

  function abrir(e) {
    const d = $("#ficha");
    d.style.setProperty("--c", COLOR[e.grupo] || COLOR.otros);
    const foto = $(".ficha-foto");
    foto.className = "ficha-foto" + (e.foto && e.foto.tipo === "lamina" ? " lamina" : "");
    const im = $("#ficha-img");
    if (e.foto && e.foto.src) { im.src = e.foto.src; im.alt = nombre(e); im.hidden = false; } else { im.removeAttribute("src"); im.alt = ""; im.hidden = true; }
    $("#ficha-grupo").textContent = tr(GRUPOS[e.grupo]);
    $("#ficha-nombre").textContent = nombre(e);
    $("#ficha-cientifico").textContent = e.cientifico;
    const otros = ["es", "en", "de"].filter(l => l !== lang && e.nombre && e.nombre[l] && e.nombre[l] !== nombre(e))
      .map(l => `${l.toUpperCase()}: ${e.nombre[l]}`);
    $("#ficha-otros").textContent = otros.join(" · ");
    $("#ficha-estatus").innerHTML = chips(e);
    const isl = (window.ISLAS || {})[clave(e.cientifico)], pi = $("#ficha-islas");
    pi.hidden = !isl;
    if (isl) pi.textContent = `${T[lang].islasEt}: ${isl.length === 7 ? T[lang].islasTodas : [...isl].map(c => T[lang].islasN[c]).join(", ")}`;
    const nota = (window.NOTAS || {})[clave(e.cientifico)], pn = $("#ficha-nota");
    pn.hidden = !nota; pn.textContent = nota ? tr(nota) : "";
    const x = taxo(e), tx = $("#ficha-taxonomia");
    const pasos = ["reino", "clase", "orden", "familia"].filter(k => x[k]).map(k => `${T[lang].rangos[k]} <b></b>`);
    tx.innerHTML = pasos.join(" › "); tx.hidden = !pasos.length || nivel < 3;
    ["reino", "clase", "orden", "familia"].filter(k => x[k]).forEach((k, i) => tx.querySelectorAll("b")[i].textContent = rangoTxt(x[k]));
    const tieneFicha = !!e.descripcion;
    d.querySelectorAll('[data-t="descripcion"],[data-t="usos"]').forEach(h => h.hidden = !tieneFicha);
    $("#ficha-desc").textContent = tieneFicha ? tr(e.descripcion) : T[lang].sinFicha;
    $("#ficha-usos").textContent = tieneFicha ? tr(e.usos) : "";
    $("#ficha-usos").hidden = !tieneFicha;
    let cred = "";
    if (e.foto) {
      cred = `${T[lang].foto}: ${e.foto.credito || ""}`;
      if (e.foto.licencia && !/\(CC|no rights/i.test(e.foto.credito || "")) cred += ` · ${e.foto.licencia.toUpperCase()}`;
    }
    const cr = $("#ficha-credito"); cr.textContent = cred;
    if (e.foto && e.foto.url) { const a = document.createElement("a"); a.href = e.foto.url; a.target = "_blank"; a.rel = "noopener"; a.textContent = " ↗"; cr.appendChild(a); }
    const en = $("#ficha-enlaces"); en.innerHTML = "";
    if (e.inat) {
      const a = document.createElement("a");
      a.className = "boton"; a.target = "_blank"; a.rel = "noopener";
      const z = (window.INAT && window.INAT.zona) || { lat: 28.0385, lng: -16.6035, radio_km: 1.5 };
      if (e.inat.observaciones) {
        a.href = `https://www.inaturalist.org/observations?taxon_id=${e.inat.taxon_id}&lat=${z.lat}&lng=${z.lng}&radius=${z.radio_km}&subview=map`;
        a.textContent = `${T[lang].verInat} · ${T[lang].obs(e.inat.observaciones)}`;
      } else {
        a.href = `https://www.inaturalist.org/taxa/${e.inat.taxon_id}`;
        a.textContent = T[lang].verInat;
      }
      en.appendChild(a);
      const m = document.createElement("a");
      m.className = "boton sec"; m.target = "_blank"; m.rel = "noopener";
      m.href = `https://www.inaturalist.org/observations?taxon_id=${e.inat.taxon_id}&swlat=27.6&swlng=-18.2&nelat=29.5&nelng=-13.3&subview=map`;
      m.textContent = T[lang].mapaCanarias;
      en.appendChild(m);
    }
    history.replaceState(null, "", "#" + e.id);
    if (!d.open) d.showModal();
    d.scrollTop = 0;
  }

  $("#ficha").addEventListener("close", () => history.replaceState(null, "", location.pathname + location.search));
  $("#ficha").addEventListener("click", ev => { if (ev.target === ev.currentTarget) ev.currentTarget.close(); });
  document.querySelectorAll(".idiomas button").forEach(b => b.onclick = () => {
    lang = b.dataset.lang;
    try { localStorage.setItem("catalogo-idioma", lang); } catch (e) {}
    textos(); nivelUI(); filtros(); pintar();
    const d = $("#ficha"); if (d.open) { const e = especies.find(x => "#" + x.id === location.hash); if (e) abrir(e); }
  });
  $("#buscar").addEventListener("input", ev => { texto = ev.target.value; pintar(); });

  $("#nivel").addEventListener("input", ev => {
    nivel = +ev.target.value; grupo = "todas";
    try { localStorage.setItem("catalogo-nivel", nivel); } catch (e) {}
    nivelUI(); filtros(); pintar();
  });

  document.querySelectorAll("#vista button").forEach(b => b.onclick = () => {
    vista = b.dataset.vista;
    try { localStorage.setItem("catalogo-vista", vista); } catch (e) {}
    pintar();
  });
  $("#desplegar").onclick = () => document.querySelectorAll("#arbol details").forEach(d => d.open = true);
  $("#plegar").onclick = () => document.querySelectorAll("#arbol details").forEach(d => d.open = false);

  textos(); nivelUI(); filtros(); pintar();
  /* Botón «Comprobar el proyecto ahora»: consulta en directo la API de iNaturalist */
  $("#comprobar").onclick = async () => {
    const res = $("#comprobar-res"), b = $("#comprobar");
    res.hidden = false; res.textContent = T[lang].comprobando; b.disabled = true;
    try {
      const d = await fetch("https://api.inaturalist.org/v1/observations/species_counts?project_id=san-blas-reserva-ambiental&per_page=500").then(r => { if (!r.ok) throw r; return r.json(); });
      const sp = d.results.filter(r => ["species", "subspecies", "variety"].includes(r.taxon.rank));
      const enCat = new Map(especies.map(e => [clave(e.cientifico), e]));
      const alias = { "lanius excubitor": "lanius meridionalis" };
      const nuevas = [], subidas = [];
      sp.forEach(r => {
        const k = alias[clave(r.taxon.name)] || clave(r.taxon.name), e = enCat.get(k);
        if (!e) nuevas.push(r);
        else if (!enProyecto(e)) { e.proyectoVivo = true; subidas.push(e); }
      });
      marcarProyecto(); pintar();
      const faltan = especies.filter(e => !enProyecto(e)).length;
      res.innerHTML = "<p></p>";
      res.firstChild.textContent = T[lang].comprobarRes(sp.length, nuevas.length);
      const lista = (items, txt) => { const ul = document.createElement("ul"); items.forEach(t => { const li = document.createElement("li"); li.textContent = txt(t); ul.appendChild(li); }); res.appendChild(ul); };
      if (nuevas.length) lista(nuevas, r => (r.taxon.preferred_common_name ? `${r.taxon.preferred_common_name} · ` : "") + r.taxon.name);
      if (subidas.length) { const p = document.createElement("p"); p.textContent = T[lang].comprobarSubidas(subidas.length); res.appendChild(p); lista(subidas, e => nombre(e)); }
      const pf = document.createElement("p"); pf.textContent = T[lang].comprobarFaltan(faltan); res.appendChild(pf);
    } catch (err) {
      res.textContent = T[lang].comprobarError;
    }
    b.disabled = false;
  };

  // Descarga para usar sin conexión (sw.js + offline.js). Solo se descarga
  // todo cuando se pulsa el botón, para no gastar datos a quien no lo quiere.
  if ("serviceWorker" in navigator && "caches" in window && self.OFFLINE && window.isSecureContext) {
    const CACHE = "catalogo-sanblas-" + self.OFFLINE.version;
    const bD = $("#descargar"), bQ = $("#quitar"), barra = $("#llevar-barra"), est = $("#llevar-estado");
    const ponEstado = (k, txt) => { llevarEstado = k; est.textContent = txt || T[lang][k] || ""; };
    $("#llevar").hidden = false; $("#ir-llevar").hidden = false;
    navigator.serviceWorker.register("sw.js").catch(() => {});
    const yaDescargado = async () => (await caches.keys()).some(k => k.startsWith("catalogo-sanblas-") && k !== "catalogo-sanblas-fuentes");
    const mostrar = async () => {
      const si = await yaDescargado();
      bD.hidden = si; bQ.hidden = !si;
      if (si && !llevarEstado) ponEstado("descargado");
    };
    mostrar();
    bD.onclick = async () => {
      const lista = self.OFFLINE.archivos;
      bD.disabled = true; barra.hidden = false; barra.max = lista.length; barra.value = 0;
      try {
        if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {});
        const c = await caches.open(CACHE);
        let n = 0;
        const cola = lista.slice();
        const trabajador = async () => {
          while (cola.length) {
            const a = cola.shift();
            const r = await fetch(new Request(a, { cache: "reload" }));
            if (!r.ok) throw new Error(a);
            await c.put(a, r);
            n++; barra.value = n; ponEstado("", T[lang].descargando(n, lista.length));
          }
        };
        await Promise.all([1, 2, 3, 4].map(trabajador));
        ponEstado("descargado");
      } catch (err) {
        await caches.delete(CACHE);
        ponEstado("descargaError");
      }
      barra.hidden = true; bD.disabled = false; mostrar();
    };
    bQ.onclick = async () => {
      for (const k of await caches.keys()) if (k.startsWith("catalogo-sanblas-")) await caches.delete(k);
      ponEstado("quitado"); mostrar();
    };
    let aviso = null;
    window.addEventListener("beforeinstallprompt", ev => { ev.preventDefault(); aviso = ev; $("#instalar").hidden = false; });
    $("#instalar").onclick = async () => { if (!aviso) return; aviso.prompt(); await aviso.userChoice; aviso = null; $("#instalar").hidden = true; };
    const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const app = matchMedia("(display-mode: standalone)").matches || navigator.standalone;
    $("#llevar-ios").hidden = !(ios && !app);
  }

  const inicial = especies.find(x => "#" + x.id === location.hash);
  if (inicial) abrir(inicial);
})();
