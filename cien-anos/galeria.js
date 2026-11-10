(function () {
  var datos = window.GALERIA || [];
  var cont = document.getElementById('galeria');
  var tpl = document.getElementById('plantilla');
  var HOY = 2026;

  datos.forEach(function (d) {
    var n = tpl.content.cloneNode(true);
    var art = n.querySelector('.tarjeta');
    var esc = n.querySelector('[data-escena]');
    var orig = n.querySelector('.capa-original');
    var colWrap = n.querySelector('.capa-color-wrap');
    var col = n.querySelector('.capa-color');
    var hoy = n.querySelector('.capa-hoy');
    var pend = n.querySelector('.capa-pendiente');
    var cort = n.querySelector('.cortina');
    var rC = n.querySelector('.r-cortina');
    var rT = n.querySelector('.r-tiempo');
    var oA = n.querySelector('.o-anio');
    var eA = n.querySelector('.etiqueta-anio');

    art.id = 'foto-' + d.id;
    orig.src = 'img/' + d.id + '-original.jpg';
    orig.alt = d.titulo + ', ' + d.fecha + '. Fotografía original en blanco y negro.';
    col.src = 'img/' + d.id + '-color.jpg';
    col.alt = 'Recreación en color generada con IA de «' + d.titulo + '».';
    n.querySelector('.t-titulo').textContent = d.titulo;
    n.querySelector('.t-meta').textContent = d.fecha + ' · ' + d.autoria + ' · ' + d.lugar + ' · FEDAC, reg. ' + d.id;
    n.querySelector('.t-texto').textContent = d.texto;
    n.querySelector('.m-ini').textContent = d.anio;
    rC.setAttribute('aria-label', 'Comparar original y recreación en color de ' + d.titulo);
    rT.setAttribute('aria-label', 'Viajar en el tiempo desde ' + d.anio + ' hasta ' + HOY);

    if (d.hoy && d.hoy.src) {
      hoy.src = d.hoy.src;
      hoy.alt = d.titulo + ' hoy (' + (d.hoy.anio || HOY) + ')' + (d.hoy.nota ? '. ' + d.hoy.nota : '');
      hoy.hidden = false;
      if (d.hoy.autoria) {
        var meta = n.querySelector('.t-meta');
        meta.appendChild(document.createTextNode(' · Foto actual: '));
        if (d.hoy.enlace) {
          var a = document.createElement('a');
          a.href = d.hoy.enlace;
          a.rel = 'noopener';
          a.textContent = d.hoy.autoria;
          meta.appendChild(a);
        } else {
          meta.appendChild(document.createTextNode(d.hoy.autoria));
        }
      }
    } else {
      pend.hidden = false;
    }

    function cortina() {
      var v = rC.value;
      colWrap.style.clipPath = 'inset(0 0 0 ' + v + '%)';
      cort.style.left = v + '%';
    }
    function tiempo() {
      var t = rT.value / 100;
      var anio = Math.round(d.anio + (HOY - d.anio) * t);
      oA.textContent = anio;
      eA.textContent = anio;
      var capa = (d.hoy && d.hoy.src) ? hoy : pend;
      capa.style.opacity = t;
      esc.classList.toggle('en-presente', t > 0.5);
    }
    rC.addEventListener('input', cortina);
    rT.addEventListener('input', tiempo);

    // arrastrar directamente sobre la imagen
    var arrastrando = false;
    function mover(ev) {
      var r = esc.getBoundingClientRect();
      var x = (ev.touches ? ev.touches[0].clientX : ev.clientX) - r.left;
      rC.value = Math.max(0, Math.min(100, x / r.width * 100));
      cortina();
    }
    esc.addEventListener('pointerdown', function (ev) { if (rT.value > 50) return; arrastrando = true; esc.setPointerCapture(ev.pointerId); mover(ev); });
    esc.addEventListener('pointermove', function (ev) { if (arrastrando) mover(ev); });
    esc.addEventListener('pointerup', function () { arrastrando = false; });
    esc.addEventListener('pointercancel', function () { arrastrando = false; });

    cortina(); tiempo();
    cont.appendChild(n);
  });
})();
