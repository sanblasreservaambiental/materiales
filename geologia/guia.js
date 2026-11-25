/* Guía de geología de San Blas Reserva Ambiental: pinta las fichas según el
 * nivel del alumnado, la columna de la pared del barranco, las fuentes y la
 * descarga para usar sin conexión. Datos en datos.js; láminas en dibujos.js. */
(() => {
  const $ = s => document.querySelector(s);
  const FICHAS = window.FICHAS, GRUPOS = window.GRUPOS, FUENTES = window.FUENTES, COLUMNA = window.COLUMNA;
  const NIVELES = [
    { curso: "Primaria 3.º–4.º", nombre: "Mirar y tocar", ayuda: "Palabras sencillas: qué es cada roca, de dónde vino y cómo la reconocemos con los ojos y las manos." },
    { curso: "Primaria 5.º–6.º", nombre: "Cómo se formó", ayuda: "La historia de cada roca y del barranco: la erupción, la lava, el agua que lo excava. Aparecen las primeras cifras." },
    { curso: "ESO", nombre: "Procesos geológicos", ayuda: "Flujos piroclásticos, erosión diferencial, superposición de estratos. Más fichas: capas antiguas, lapilli acrecional, lóbulos de pómez." },
    { curso: "Bachillerato y FP", nombre: "Petrología y estratigrafía", ayuda: "Unidades Sur-A, Sur-B y Sur-C, edades en ka y Ma, mezcla de magmas, origen de la caldera y valoración del Lugar de Interés Geológico." }
  ];
  const grupo = id => GRUPOS.find(g => g.id === id);
  const norm = t => (t || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  const leerNivel = () => { try { return +localStorage.getItem("geo-nivel") || 2; } catch (e) { return 2; } };
  let nivel = Math.min(4, Math.max(1, leerNivel()));
  let filtro = "todas", texto = "";

  // Texto del nivel: si una ficha no tiene texto en este nivel, se usa el más cercano por debajo.
  const enNivel = (arr, n) => { for (let i = n - 1; i >= 0; i--) if (arr[i]) return arr[i]; return arr.find(Boolean) || ""; };
  const visibles = () => FICHAS.filter(f => f.desde <= nivel);

  // Portada
  $("#portada-dibujo").innerHTML = window.DIBUJO("barranco");

  // Columna de la pared
  function pintarColumna() {
    const total = COLUMNA.reduce((a, c) => a + c.alto, 0), ancho = 120;
    let y = total, capas = "", etiquetas = "";
    COLUMNA.forEach((c, i) => {
      y -= c.alto;
      const nom = enNivel(c.nombre, nivel);
      capas += `<rect x="0" y="${y}" width="${ancho}" height="${c.alto}" fill="${c.color}" stroke="#3a332b" stroke-width=".8"/>`;
      if (c.trama === "pomez" || c.trama === "liticos" || c.trama === "puntos") {
        for (let k = 0; k < c.alto / 6; k++) {
          const px = 8 + ((k * 37 + i * 13) % (ancho - 16)), py = y + 4 + ((k * 23 + i * 7) % Math.max(1, c.alto - 8));
          const col = c.trama === "liticos" ? (k % 2 ? "#4a4440" : "#6e4f3f") : c.trama === "pomez" ? "#fff" : "#fff";
          const r = c.trama === "liticos" ? 2.6 : c.trama === "pomez" ? 3.2 : 1.6;
          capas += `<circle cx="${px}" cy="${py}" r="${r}" fill="${col}" ${c.trama === "pomez" ? 'stroke="#a89a80" stroke-width=".6"' : ""}/>`;
        }
      }
      if (nom) etiquetas += `<li style="--y:${((y + c.alto / 2) / total * 100).toFixed(1)}%"><span class="muestra" style="background:${c.color}"></span>${nom}</li>`;
    });
    $("#columna").innerHTML = `<svg viewBox="0 0 ${ancho} ${total}" class="columna-svg" preserveAspectRatio="none" role="img" aria-label="Esquema de las capas de la pared del barranco">${capas}</svg><ol class="columna-etq">${etiquetas.split("</li>").filter(Boolean).reverse().map(x => x + "</li>").join("")}</ol>`;
    $("#columna-intro").textContent = [
      "La pared del barranco es como un libro: las capas de abajo son las más viejas y las de arriba, las más nuevas. Se distingue una tosca blanca abajo y una tosca gris, llena de piedras, arriba.",
      "La pared del barranco es como un libro de piedra. Abajo hay capas de erupciones anteriores; encima, las dos capas de la gran erupción de hace 170.000 años, separadas por una capa finita de ceniza. En total, la tosca de esa erupción mide entre 10 y 15 metros.",
      "Por el principio de superposición, las capas inferiores son más antiguas. La ignimbrita de El Abrigo (10-15 m) tiene dos unidades masivas separadas por una capa de ceniza: la inferior blanca, con menos líticos, y la superior gris, muy rica en líticos. Debajo asoman depósitos de erupciones anteriores.",
      "Sección del LIG IC4026: Sur-A (4-5 m), Sur-B (1-5 cm) y Sur-C (6-8 m) del Miembro El Abrigo (169 ± 1 ka), sobre los miembros Aldea Blanca, Fasnia y El Porís de la Formación Diego Hernández. El techo de Sur-C, con su concentración de pómez, ha desaparecido por la erosión en el LIG."
    ][nivel - 1];
  }

  // Filtros
  function pintarFiltros() {
    const vis = visibles();
    const cont = $("#filtros"); cont.innerHTML = "";
    const boton = (id, nombre, color, n) => {
      const b = document.createElement("button"); b.type = "button";
      b.style.setProperty("--c", color);
      b.setAttribute("aria-pressed", filtro === id);
      b.innerHTML = `<span class="punto"></span>${nombre} <span class="n">${n}</span>`;
      b.onclick = () => { filtro = id; pintarFiltros(); pintar(); };
      cont.appendChild(b);
    };
    boton("todas", "Todo", "var(--acento)", vis.length);
    GRUPOS.forEach(g => { const n = vis.filter(f => f.grupo === g.id).length; if (n) boton(g.id, g.nombre, g.color, n); });
    if (filtro !== "todas" && !vis.some(f => f.grupo === filtro)) filtro = "todas";
  }

  function tarjeta(f) {
    const g = grupo(f.grupo);
    const b = document.createElement("button");
    b.type = "button"; b.className = "tarjeta"; b.style.setProperty("--c", g.color); b.id = f.id;
    const resumen = enNivel(f.textos, nivel);
    b.innerHTML = `<div class="miniatura lamina-svg">${window.DIBUJO(f.dibujo)}</div>
      <div class="cuerpo"><h3></h3><p class="otros"></p><p class="resumen"></p>
      <div class="meta"><span class="chip"></span>${f.entorno ? '<span class="chip entorno">Entorno</span>' : ""}</div></div>`;
    b.querySelector("h3").textContent = f.nombre;
    b.querySelector(".otros").textContent = f.otros || "";
    b.querySelector(".resumen").textContent = resumen.length > 150 ? resumen.slice(0, resumen.lastIndexOf(" ", 145)) + "…" : resumen;
    b.querySelector(".chip").textContent = g.nombre;
    b.onclick = () => abrir(f);
    return b;
  }

  function pintar() {
    const t = norm(texto);
    const lista = visibles().filter(f => (filtro === "todas" || f.grupo === filtro) &&
      (!t || norm([f.nombre, f.otros, enNivel(f.textos, nivel), grupo(f.grupo).nombre].join(" ")).includes(t)));
    const r = $("#rejilla"); r.innerHTML = "";
    const dentro = lista.filter(f => !f.entorno), fuera = lista.filter(f => f.entorno);
    dentro.forEach(f => r.appendChild(tarjeta(f)));
    if (fuera.length) {
      const h = document.createElement("h2"); h.className = "seccion litoral";
      h.innerHTML = "En el entorno de la reserva<small>La costa, el mar y la pared del Lugar de Interés Geológico, junto a San Blas: fuera de la reserva, pero parte de la misma historia.</small>";
      r.appendChild(h);
      fuera.forEach(f => r.appendChild(tarjeta(f)));
    }
    $("#vacio").hidden = lista.length > 0;
    $("#recuento").textContent = `${visibles().length} fichas en este nivel · ${FICHAS.length} en total`;
  }

  function pintarNivel() {
    const n = NIVELES[nivel - 1];
    $("#nivel").value = nivel;
    $("#nivel-txt").textContent = `${n.curso} · ${n.nombre}`;
    $("#nivel-ayuda").textContent = n.ayuda;
    document.querySelectorAll("#nivel-marcas li").forEach((li, i) => { li.textContent = NIVELES[i].curso; li.classList.toggle("activo", i === nivel - 1); });
  }

  function abrir(f) {
    const g = grupo(f.grupo), d = $("#ficha");
    d.style.setProperty("--c", g.color);
    $("#ficha-dibujo").innerHTML = window.DIBUJO(f.dibujo);
    $("#ficha-grupo").textContent = g.nombre + (f.entorno ? " · En el entorno de la reserva" : "");
    $("#ficha-nombre").textContent = f.nombre;
    $("#ficha-otros").textContent = f.otros || "";
    $("#ficha-nivel").textContent = "Texto para " + NIVELES[nivel - 1].curso + ". Cambien el nivel con el deslizador para ver otra versión.";
    $("#ficha-texto").textContent = enNivel(f.textos, nivel);
    const m = enNivel(f.mirar || [], nivel);
    $("#ficha-mirar").textContent = m; $("#ficha-mirar").parentElement.hidden = !m;
    const ul = $("#ficha-fuentes"); ul.innerHTML = "";
    f.fuentes.forEach(k => {
      const fu = FUENTES[k], li = document.createElement("li");
      li.textContent = fu.cita + " ";
      if (fu.url) { const a = document.createElement("a"); a.href = fu.url; a.target = "_blank"; a.rel = "noopener"; a.textContent = "Abrir"; li.appendChild(a); }
      ul.appendChild(li);
    });
    history.replaceState(null, "", "#" + f.id);
    if (!d.open) d.showModal();
    d.scrollTop = 0;
  }
  $("#ficha").addEventListener("close", () => history.replaceState(null, "", location.pathname + location.search));
  $("#ficha").addEventListener("click", ev => { if (ev.target === ev.currentTarget) ev.currentTarget.close(); });

  function pintarFuentes() {
    const ol = $("#lista-fuentes");
    Object.values(FUENTES).forEach(fu => {
      const li = document.createElement("li"); li.textContent = fu.cita + " ";
      if (fu.url) { const a = document.createElement("a"); a.href = fu.url; a.target = "_blank"; a.rel = "noopener"; a.textContent = fu.url.replace(/^https?:\/\//, ""); li.appendChild(a); }
      ol.appendChild(li);
    });
  }

  $("#nivel").addEventListener("input", ev => {
    nivel = +ev.target.value;
    try { localStorage.setItem("geo-nivel", nivel); } catch (e) {}
    pintarNivel(); pintarColumna(); pintarFiltros(); pintar();
  });
  $("#buscar").addEventListener("input", ev => { texto = ev.target.value; pintar(); });

  pintarNivel(); pintarColumna(); pintarFiltros(); pintar(); pintarFuentes();

  // Descarga para usar sin conexión (sw.js + offline.js), igual que el catálogo.
  if ("serviceWorker" in navigator && "caches" in window && self.OFFLINE && window.isSecureContext) {
    const PREFIJO = "geologia-sanblas-", CACHE = PREFIJO + self.OFFLINE.version;
    const bD = $("#descargar"), bQ = $("#quitar"), barra = $("#llevar-barra"), est = $("#llevar-estado");
    const TXT = {
      descargado: "Listo: la guía ya funciona sin conexión en este móvil. Ábranla desde esta misma dirección o desde la pantalla de inicio.",
      descargaError: "No se ha podido completar la descarga. Comprueben la conexión y vuelvan a intentarlo.",
      quitado: "Se ha borrado la copia. La guía sigue disponible con conexión."
    };
    $("#llevar").hidden = false; $("#ir-llevar").hidden = false;
    $("#llevar-texto").textContent = `Descarguen todas las fichas y sus láminas para consultarlas durante la visita aunque no haya cobertura. Ocupa menos de ${Math.max(1, Math.ceil(self.OFFLINE.bytes / 1e6))} MB.`;
    navigator.serviceWorker.register("sw.js").catch(() => {});
    const yaDescargado = async () => (await caches.keys()).some(k => k.startsWith(PREFIJO));
    const mostrar = async () => {
      const si = await yaDescargado();
      bD.hidden = si; bQ.hidden = !si;
      if (si && !est.textContent) est.textContent = TXT.descargado;
    };
    mostrar();
    bD.onclick = async () => {
      const lista = self.OFFLINE.archivos;
      bD.disabled = true; barra.hidden = false; barra.max = lista.length; barra.value = 0;
      try {
        if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {});
        const c = await caches.open(CACHE);
        let n = 0;
        for (const a of lista) {
          const r = await fetch(new Request(a, { cache: "reload" }));
          if (!r.ok) throw new Error(a);
          await c.put(a, r);
          n++; barra.value = n; est.textContent = `Descargando… ${n} de ${lista.length} archivos`;
        }
        est.textContent = TXT.descargado;
      } catch (err) {
        await caches.delete(CACHE);
        est.textContent = TXT.descargaError;
      }
      barra.hidden = true; bD.disabled = false; mostrar();
    };
    bQ.onclick = async () => {
      for (const k of await caches.keys()) if (k.startsWith(PREFIJO)) await caches.delete(k);
      est.textContent = TXT.quitado; mostrar();
    };
    let aviso = null;
    window.addEventListener("beforeinstallprompt", ev => { ev.preventDefault(); aviso = ev; $("#instalar").hidden = false; });
    $("#instalar").onclick = async () => { if (!aviso) return; aviso.prompt(); await aviso.userChoice; aviso = null; $("#instalar").hidden = true; };
    const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const app = matchMedia("(display-mode: standalone)").matches || navigator.standalone;
    $("#llevar-ios").hidden = !(ios && !app);
  }

  const inicial = FICHAS.find(f => "#" + f.id === location.hash);
  if (inicial) { if (inicial.desde > nivel) { nivel = inicial.desde; pintarNivel(); pintarColumna(); pintarFiltros(); pintar(); } abrir(inicial); }
})();
