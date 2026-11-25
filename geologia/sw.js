/* Service worker de la guía de geología: guarda la web en el móvil para usarla sin conexión.
 * Solo descarga todo cuando la persona pulsa «Descargar para usar sin conexión»
 * (guia.js crea la caché). Si ya lo descargó y sale una versión nueva, la
 * actualiza sola al instalarse este service worker. */
importScripts("offline.js");
const PREFIJO = "geologia-sanblas-";
const CACHE = PREFIJO + self.OFFLINE.version;
const FUENTES = "geologia-sanblas-fuentes";

self.addEventListener("install", ev => {
  ev.waitUntil((async () => {
    const claves = (await caches.keys()).filter(k => k.startsWith(PREFIJO) && k !== FUENTES);
    // Quien ya descargó una versión anterior recibe la nueva completa.
    if (claves.some(k => k !== CACHE)) {
      const c = await caches.open(CACHE);
      await c.addAll(self.OFFLINE.archivos.map(a => new Request(a, { cache: "reload" })));
    }
    self.skipWaiting();
  })());
});

self.addEventListener("activate", ev => {
  ev.waitUntil((async () => {
    for (const k of await caches.keys()) {
      if (k.startsWith(PREFIJO) && k !== CACHE && k !== FUENTES && await caches.has(CACHE)) await caches.delete(k);
    }
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", ev => {
  const req = ev.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  // Tipografías de Google: se guardan la primera vez que se ven con conexión.
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    ev.respondWith((async () => {
      const c = await caches.open(FUENTES);
      const r = await c.match(req);
      if (r) return r;
      try { const n = await fetch(req); c.put(req, n.clone()); return n; }
      catch (e) { return new Response("", { status: 504 }); }
    })());
    return;
  }
  if (url.origin !== self.location.origin) return;
  // Lo descargado se sirve desde el móvil (rápido y sin gastar datos). Cuando
  // cambia la web, offline.js cambia, el navegador instala este service worker
  // de nuevo y la copia se renueva entera en segundo plano.
  ev.respondWith((async () => {
    const guardado = await caches.match(req, { ignoreSearch: true, cacheName: CACHE });
    return guardado || fetch(req);
  })());
});
