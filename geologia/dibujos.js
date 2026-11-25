/* Láminas dibujadas en SVG para cada ficha de la guía de geología.
 * Son esquemas didácticos, no fotos: se dibujan siempre sobre papel claro para
 * que se lean igual en modo claro y oscuro. Generador pseudoaleatorio con
 * semilla para que cada lámina salga siempre igual. */
(() => {
  const PAPEL = "#fbf7ef", TINTA = "#3a332b", TOSCA = "#efe6d2", TOSCA2 = "#e3d7bd",
    GRIS = "#b9b2a6", BASALTO = "#4a4440", POMEZ = "#fdfbf3", OCRE = "#c9a46a", MAR = "#5b9bab",
    MAR2 = "#2f6f7e", ARENA = "#e8d6a8", VERDE = "#6b7d3a", CIELO = "#eaf2f4";

  function azar(semilla) {
    let s = semilla >>> 0 || 1;
    return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
  }
  const svg = (cuerpo, vb = "0 0 400 300") =>
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="${PAPEL}"/>${cuerpo}</svg>`;

  // Manchas irregulares (pómez o líticos)
  function piedra(r, x, y, tam, color, borde = TINTA, grosor = 1.2) {
    const n = 7, pts = [];
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2, d = tam * (0.65 + r() * 0.45);
      pts.push(`${(x + Math.cos(a) * d).toFixed(1)},${(y + Math.sin(a) * d * 0.8).toFixed(1)}`);
    }
    return `<polygon points="${pts.join(" ")}" fill="${color}" stroke="${borde}" stroke-width="${grosor}" stroke-linejoin="round"/>`;
  }
  function relleno(r, x0, y0, w, h, n, f) {
    let s = "";
    for (let i = 0; i < n; i++) s += f(x0 + r() * w, y0 + r() * h, i);
    return s;
  }
  function vesiculas(r, x, y, tam, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
      const a = r() * Math.PI * 2, d = r() * tam * 0.7;
      s += `<ellipse cx="${(x + Math.cos(a) * d).toFixed(1)}" cy="${(y + Math.sin(a) * d * 0.8).toFixed(1)}" rx="${(1 + r() * tam * 0.12).toFixed(1)}" ry="${(1 + r() * tam * 0.08).toFixed(1)}" fill="#cfc6b2"/>`;
    }
    return s;
  }

  const D = {
    ignimbrita() {
      const r = azar(11);
      let s = `<rect width="400" height="300" fill="${TOSCA}"/>`;
      s += relleno(r, 0, 0, 400, 300, 260, (x, y) => `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(0.6 + r() * 1.2).toFixed(1)}" fill="${OCRE}" opacity=".55"/>`);
      s += relleno(r, 10, 10, 380, 280, 22, (x, y) => piedra(r, x, y, 6 + r() * 14, POMEZ, "#a89a80"));
      s += relleno(r, 10, 10, 380, 280, 26, (x, y) => piedra(r, x, y, 3 + r() * 10, r() > .5 ? BASALTO : "#7b6f66", "none"));
      return svg(s);
    },
    pomez() {
      const r = azar(5);
      let s = `<g transform="translate(0,6)">`;
      s += piedra(r, 150, 150, 92, POMEZ, "#8d8270", 2) + vesiculas(r, 150, 150, 92, 120);
      // pómez bandeada
      s += `<defs><clipPath id="pb"><ellipse cx="300" cy="170" rx="70" ry="58"/></clipPath></defs>`;
      s += `<g clip-path="url(#pb)"><rect x="220" y="100" width="160" height="140" fill="${POMEZ}"/>`;
      for (let i = 0; i < 7; i++) s += `<path d="M220 ${112 + i * 20} C260 ${100 + i * 20} 300 ${128 + i * 20} 380 ${108 + i * 20}" stroke="#5d5650" stroke-width="${5 + (i % 3) * 3}" fill="none" opacity=".75"/>`;
      s += `</g><ellipse cx="300" cy="170" rx="70" ry="58" fill="none" stroke="#8d8270" stroke-width="2"/></g>`;
      s += `<text x="150" y="282" text-anchor="middle" font-family="sans-serif" font-size="15" fill="${TINTA}">pómez</text><text x="300" y="282" text-anchor="middle" font-family="sans-serif" font-size="15" fill="${TINTA}">pómez bandeada</text>`;
      return svg(s);
    },
    liticos() {
      const r = azar(23);
      let s = `<rect width="400" height="300" fill="${GRIS}"/>`;
      s += relleno(r, 0, 0, 400, 300, 300, (x, y) => `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(0.6 + r()).toFixed(1)}" fill="#8a8378"/>`);
      const cols = [BASALTO, "#6e4f3f", "#7c7f6a", "#9a6b55", "#3d3a3a", "#cdb99a"];
      s += relleno(r, 10, 10, 380, 280, 34, (x, y, i) => piedra(r, x, y, 5 + r() * 18, cols[i % cols.length], "none"));
      // sienita con cristales
      s += piedra(r, 300, 90, 40, "#d9cbb6", TINTA, 1.5);
      for (let i = 0; i < 14; i++) s += `<rect x="${(278 + r() * 40).toFixed(1)}" y="${(72 + r() * 34).toFixed(1)}" width="${(4 + r() * 8).toFixed(1)}" height="${(2 + r() * 4).toFixed(1)}" fill="#8f8577" transform="rotate(${(r() * 90).toFixed(0)} 300 90)"/>`;
      return svg(s);
    },
    lapilli() {
      const r = azar(3);
      let s = `<rect width="400" height="120" fill="${GRIS}"/><rect y="120" width="400" height="40" fill="#fffaf0"/><rect y="160" width="400" height="140" fill="${TOSCA}"/>`;
      s += `<line x1="0" y1="120" x2="400" y2="120" stroke="${TINTA}" stroke-width="1.5"/><line x1="0" y1="160" x2="400" y2="160" stroke="${TINTA}" stroke-width="1.5"/>`;
      for (let i = 0; i < 16; i++) {
        const x = 16 + i * 24 + r() * 6, y = 140 + (r() - .5) * 10, rr = 6 + r() * 4;
        s += `<circle cx="${x}" cy="${y}" r="${rr}" fill="#f2e9d6" stroke="#9c8f78"/><circle cx="${x}" cy="${y}" r="${rr * .6}" fill="none" stroke="#c4b79f"/><circle cx="${x}" cy="${y}" r="${rr * .25}" fill="#b5a88f"/>`;
      }
      s += relleno(r, 0, 0, 400, 115, 18, (x, y) => piedra(r, x, y, 4 + r() * 10, BASALTO, "none"));
      s += relleno(r, 0, 165, 400, 130, 12, (x, y) => piedra(r, x, y, 5 + r() * 9, POMEZ, "#a89a80"));
      return svg(s);
    },
    lobulos() {
      const r = azar(8);
      let s = `<rect width="400" height="300" fill="${GRIS}"/><rect y="230" width="400" height="70" fill="${TOSCA}"/><line x1="0" y1="230" x2="400" y2="230" stroke="${TINTA}" stroke-width="1.5"/>`;
      [[90, 228, 70, 30], [230, 228, 55, 24], [330, 228, 48, 20]].forEach(([x, y, w, h]) => {
        s += `<path d="M${x - w} ${y} Q${x - w * .3} ${y - h * 2} ${x + w * .4} ${y - h} Q${x + w * .8} ${y - h * .6} ${x + w} ${y} Z" fill="#ece3cf" stroke="#8d8270"/>`;
        s += relleno(r, x - w * .7, y - h * .9, w * 1.4, h * .8, 9, (px, py) => piedra(r, px, py, 3 + r() * 5, POMEZ, "#a89a80", .8));
      });
      s += relleno(r, 0, 10, 400, 160, 26, (x, y) => piedra(r, x, y, 3 + r() * 9, BASALTO, "none"));
      s += `<path d="M30 40 h60" stroke="${TINTA}" stroke-width="2" marker-end="url(#fl)"/><defs><marker id="fl" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="${TINTA}"/></marker></defs><text x="30" y="30" font-family="sans-serif" font-size="13" fill="${TINTA}">flujo</text>`;
      return svg(s);
    },
    estratos() {
      const r = azar(17);
      const capas = [["#cdb88f", 40], ["#e7dcc4", 30], ["#d8c39c", 34], [TOSCA, 70], ["#fffaf0", 8], [GRIS, 90]];
      let y = 300, s = "";
      capas.forEach(([c, h], i) => {
        y -= h;
        s += `<path d="M0 ${y + 4} C100 ${y - 4} 300 ${y + 6} 400 ${y} V${y + h} H0Z" fill="${c}" stroke="${TINTA}" stroke-width=".8"/>`;
        if (i < 3) s += relleno(r, 0, y + 6, 400, h - 8, 40, (x, yy) => `<circle cx="${x.toFixed(1)}" cy="${yy.toFixed(1)}" r="${(1 + r() * 2).toFixed(1)}" fill="#fff" opacity=".8"/>`);
      });
      s += `<path d="M20 290 V40" stroke="${TINTA}" stroke-width="2" marker-end="url(#fe)"/><defs><marker id="fe" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="${TINTA}"/></marker></defs><text x="30" y="56" font-family="sans-serif" font-size="13" fill="${TINTA}">más moderno</text><text x="30" y="290" font-family="sans-serif" font-size="13" fill="${TINTA}">más antiguo</text>`;
      return svg(s);
    },
    basalto() {
      const r = azar(31);
      let s = `<rect width="400" height="300" fill="${CIELO}"/><rect y="90" width="400" height="210" fill="${BASALTO}"/>`;
      for (let x = 0; x < 400; x += 34 + r() * 12) s += `<path d="M${x.toFixed(0)} 96 L${(x + (r() - .5) * 10).toFixed(0)} 300" stroke="#2c2826" stroke-width="2"/>`;
      s += `<path d="M0 90 C60 70 120 100 200 84 C280 70 330 96 400 80 V96 H0Z" fill="#5d5650"/>`;
      s += relleno(r, 0, 100, 400, 190, 60, (x, y) => `<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="${(1.5 + r() * 3).toFixed(1)}" ry="${(1 + r() * 2).toFixed(1)}" fill="#2a2523"/>`);
      return svg(s);
    },
    alveolos() {
      const r = azar(44);
      let s = `<rect width="400" height="300" fill="${TOSCA2}"/>`;
      s += relleno(r, 0, 0, 400, 300, 200, (x, y) => `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(0.6 + r()).toFixed(1)}" fill="${OCRE}" opacity=".5"/>`);
      for (let i = 0; i < 26; i++) {
        const x = r() * 400, y = r() * 300, w = 10 + r() * 30, h = w * (0.6 + r() * .4);
        s += `<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="${w.toFixed(1)}" ry="${h.toFixed(1)}" fill="#a3916f"/><ellipse cx="${(x + 2).toFixed(1)}" cy="${(y + h * .25).toFixed(1)}" rx="${(w * .8).toFixed(1)}" ry="${(h * .7).toFixed(1)}" fill="#6f6149"/>`;
      }
      return svg(s);
    },
    barranco() {
      let s = `<rect width="400" height="300" fill="${CIELO}"/>`;
      s += `<path d="M0 70 L120 80 C150 150 170 220 200 250 C230 220 250 150 280 80 L400 70 V300 H0Z" fill="${TOSCA}" stroke="${TINTA}" stroke-width="1.2"/>`;
      s += `<path d="M0 70 L120 80 L116 104 L0 98Z M280 80 L400 70 V100 L284 104Z" fill="${BASALTO}"/>`;
      s += `<path d="M0 160 L140 168 M260 168 L400 160" stroke="${GRIS}" stroke-width="16" opacity=".8"/>`;
      s += `<path d="M186 250 Q200 258 214 250" stroke="${MAR}" stroke-width="5" fill="none"/>`;
      s += `<path d="M60 30 l-6 14 M90 24 l-6 14 M120 32 l-6 14" stroke="${MAR}" stroke-width="2"/>`;
      s += `<path d="M200 200 V244" stroke="${MAR2}" stroke-width="2" stroke-dasharray="4 4" marker-end="url(#fa)"/><defs><marker id="fa" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="${MAR2}"/></marker></defs>`;
      return svg(s);
    },
    bandas() {
      let s = `<rect width="400" height="300" fill="#dfeef2"/>`;
      s += `<path d="M0 230 L60 210 L150 150 L210 70 L232 60 L254 72 L320 150 L400 200 V300 H0Z" fill="#8c7d6b"/>`;
      s += `<path d="M232 60 L240 92 L262 98 Z" fill="#fff" opacity=".8"/>`;
      s += `<path d="M254 72 L320 150 L400 200 V240 L330 196 L290 160 Z" fill="${TOSCA}"/>`;
      s += `<path d="M0 230 L60 210 L150 150 L170 160 L80 228 L0 250Z" fill="#6c5f52"/>`;
      s += `<rect y="250" width="400" height="50" fill="${MAR}"/>`;
      s += `<text x="350" y="232" text-anchor="middle" font-family="sans-serif" font-size="13" fill="${TINTA}">sur claro</text>`;
      return svg(s);
    },
    isla() {
      let s = `<rect width="400" height="300" fill="#dfeef2"/><rect y="236" width="400" height="64" fill="${MAR}"/>`;
      s += `<path d="M20 236 L110 160 L160 120 L180 118 L196 70 L214 66 L228 118 L250 120 L300 165 L380 236Z" fill="#8c7d6b"/>`;
      s += `<path d="M160 120 L250 120 L244 128 L166 128Z" fill="#6c5f52"/>`;
      s += `<path d="M250 120 Q300 90 330 60" stroke="#9a948a" stroke-width="22" fill="none" opacity=".5" stroke-linecap="round"/>`;
      s += `<path d="M252 126 C300 160 330 190 360 236" stroke="${OCRE}" stroke-width="6" fill="none" stroke-dasharray="2 6" stroke-linecap="round"/>`;
      s += `<circle cx="360" cy="236" r="6" fill="${VERDE}" stroke="#fff" stroke-width="2"/>`;
      s += `<text x="205" y="58" text-anchor="middle" font-family="sans-serif" font-size="13" fill="${TINTA}">Teide</text><text x="206" y="148" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#fff">caldera</text><text x="352" y="262" text-anchor="end" font-family="sans-serif" font-size="13" fill="#fff">San Blas</text>`;
      return svg(s);
    },
    tiempo() {
      let s = `<line x1="30" y1="160" x2="370" y2="160" stroke="${TINTA}" stroke-width="3"/>`;
      const marcas = [[30, "11,9 Ma", "rocas más antiguas"], [110, "3,5 Ma", "nace Las Cañadas"], [300, "0,17 Ma", "El Abrigo"], [370, "hoy", "Teide"]];
      marcas.forEach(([x, a, b], i) => {
        s += `<circle cx="${x}" cy="160" r="8" fill="${i === 2 ? OCRE : "#8c7d6b"}" stroke="#fff" stroke-width="2"/>`;
        const y = i % 2 ? 210 : 112;
        s += `<text x="${x}" y="${y}" text-anchor="${i === 0 ? "start" : i === 3 ? "end" : "middle"}" font-family="sans-serif" font-size="15" font-weight="700" fill="${TINTA}">${a}</text><text x="${x}" y="${y + 18}" text-anchor="${i === 0 ? "start" : i === 3 ? "end" : "middle"}" font-family="sans-serif" font-size="12" fill="${TINTA}">${b}</text>`;
      });
      s += `<text x="200" y="270" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#6f655a">(escala no proporcional)</text>`;
      return svg(s);
    },
    costa() {
      const r = azar(9);
      let s = `<rect width="400" height="300" fill="${MAR}"/><path d="M0 150 C100 140 200 170 400 150 V300 H0Z" fill="${ARENA}"/>`;
      s += `<path d="M0 150 C60 160 100 140 150 152 C200 164 260 140 320 154 C360 162 380 150 400 152" stroke="#fff" stroke-width="5" fill="none"/>`;
      s += relleno(r, 10, 180, 380, 110, 34, (x, y) => `<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="${(6 + r() * 12).toFixed(1)}" ry="${(4 + r() * 7).toFixed(1)}" fill="${r() > .3 ? BASALTO : "#8a7f73"}"/>`);
      return svg(s);
    },
    sebadal() {
      const r = azar(13);
      let s = `<rect width="400" height="300" fill="${MAR}"/><rect width="400" height="60" fill="#7fb4c1"/><path d="M0 230 C120 220 260 240 400 226 V300 H0Z" fill="${ARENA}"/>`;
      for (let i = 0; i < 40; i++) {
        const x = 6 + i * 10 + r() * 4, h = 30 + r() * 40, c = (r() - .5) * 26;
        s += `<path d="M${x.toFixed(1)} 234 Q${(x + c).toFixed(1)} ${(234 - h * .6).toFixed(1)} ${(x + c * 1.4).toFixed(1)} ${(234 - h).toFixed(1)}" stroke="${VERDE}" stroke-width="3" fill="none" stroke-linecap="round"/>`;
      }
      s += `<path d="M0 270 H400" stroke="#cbb88a" stroke-width="1" stroke-dasharray="3 5"/>`;
      return svg(s);
    },
    suelo() {
      const r = azar(27);
      let s = `<rect width="400" height="300" fill="${CIELO}"/>`;
      s += `<rect y="70" width="400" height="70" fill="#a9845a"/>`;
      s += `<path d="M0 140 C80 150 160 132 240 146 C300 156 360 140 400 146 V210 H0Z" fill="#d6c3a0"/>`;
      s += `<rect y="196" width="400" height="104" fill="${TOSCA}"/>`;
      s += relleno(r, 0, 150, 400, 60, 40, (x, y) => piedra(r, x, y, 3 + r() * 7, r() > .5 ? POMEZ : "#bfae8c", "#a89a80", .6));
      s += relleno(r, 0, 205, 400, 90, 18, (x, y) => piedra(r, x, y, 4 + r() * 10, POMEZ, "#a89a80"));
      s += relleno(r, 0, 74, 400, 60, 90, (x, y) => `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(0.8 + r() * 1.4).toFixed(1)}" fill="#7d5f3d"/>`);
      [[90, 70], [250, 70], [330, 70]].forEach(([x, y]) => {
        s += `<path d="M${x} ${y} v-26 M${x} ${y - 12} l-10 -10 M${x} ${y - 18} l10 -10" stroke="${VERDE}" stroke-width="4" stroke-linecap="round"/>`;
        s += `<path d="M${x} ${y} q-8 24 -18 40 M${x} ${y} q4 30 2 52 M${x} ${y} q10 18 20 30" stroke="#5a4630" stroke-width="1.5" fill="none"/>`;
      });
      s += `<text x="392" y="110" text-anchor="end" font-family="sans-serif" font-size="13" fill="#fff">suelo</text><text x="392" y="186" text-anchor="end" font-family="sans-serif" font-size="13" fill="${TINTA}">roca alterada</text><text x="392" y="288" text-anchor="end" font-family="sans-serif" font-size="13" fill="${TINTA}">roca (tosca)</text>`;
      return svg(s);
    },
    bancales() {
      const r = azar(21);
      let s = `<rect width="400" height="300" fill="${CIELO}"/>`;
      // escalones de tierra sujetos por muros de piedra
      const pasos = [[0, 250, 400], [60, 200, 400], [140, 150, 400], [230, 100, 400]];
      pasos.forEach(([x, y]) => {
        s += `<path d="M${x} ${y} H400 V300 H${x}Z" fill="#b08a5a"/>`;
        s += `<rect x="${x}" y="${y}" width="${400 - x}" height="10" fill="#8f6c43"/>`;
        // muro de piedra seca
        for (let k = 0; k < 6; k++) s += piedra(r, x - 4 + (k % 2) * 6, y + 12 + k * 7, 5, k % 2 ? "#7b6f66" : BASALTO, "none");
      });
      s += `<path d="M0 250 L0 300 L60 300 L60 200 L0 250Z" fill="${TOSCA}"/>`;
      // plantas en los bancales
      [[110, 198], [180, 198], [200, 148], [280, 148], [300, 98], [360, 98], [40, 248], [320, 198]].forEach(([x, y]) => {
        s += `<path d="M${x} ${y} v-14 M${x} ${y - 6} l-6 -6 M${x} ${y - 9} l6 -6" stroke="${VERDE}" stroke-width="3" stroke-linecap="round"/>`;
      });
      return svg(s);
    },
    abrigo() {
      let s = `<rect width="400" height="300" fill="${CIELO}"/><path d="M0 40 H400 V300 H0Z" fill="${TOSCA}"/>`;
      s += `<path d="M110 300 V200 C110 140 290 140 290 200 V300Z" fill="#6f6149"/>`;
      s += `<path d="M0 40 H400 V64 C300 74 100 74 0 64Z" fill="${BASALTO}"/>`;
      s += `<rect x="300" y="236" width="70" height="44" rx="6" fill="#d4c6a8" stroke="${TINTA}"/><path d="M300 248 H370" stroke="${MAR}" stroke-width="10"/>`;
      s += `<text x="335" y="296" text-anchor="middle" font-family="sans-serif" font-size="11" fill="${TINTA}">agua</text>`;
      return svg(s);
    },
    lupa() {
      const r = azar(2);
      let s = `<rect width="400" height="300" fill="${TOSCA}"/>`;
      s += relleno(r, 0, 0, 400, 300, 30, (x, y) => piedra(r, x, y, 3 + r() * 8, r() > .5 ? BASALTO : POMEZ, "none"));
      s += `<circle cx="180" cy="140" r="78" fill="#fff" opacity=".55" stroke="${TINTA}" stroke-width="10"/><path d="M236 196 L320 280" stroke="${TINTA}" stroke-width="20" stroke-linecap="round"/>`;
      s += vesiculas(r, 180, 140, 60, 40);
      return svg(s);
    }
  };

  window.DIBUJO = tipo => (D[tipo] || D.ignimbrita)();
})();
