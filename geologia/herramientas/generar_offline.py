#!/usr/bin/env python3
"""Genera offline.js: la lista de archivos que se guardan en el móvil para usar
la guía de geología sin conexión, con una versión que cambia cuando cambia cualquiera.

Si se toca a mano un archivo de
la web (index.html, estilo.css, un .js o una imagen), ejecutar:
    python3 herramientas/generar_offline.py
"""
import hashlib
import json
import os

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FIJOS = ["./", "index.html", "estilo.css", "datos.js", "dibujos.js",
         "guia.js", "manifest.webmanifest"]
CARPETAS = ["iconos"]


def main():
    archivos = list(FIJOS)
    for c in CARPETAS:
        for base, _, nombres in os.walk(os.path.join(RAIZ, c)):
            for n in sorted(nombres):
                if n.startswith("."):
                    continue
                archivos.append(os.path.relpath(os.path.join(base, n), RAIZ).replace(os.sep, "/"))
    h = hashlib.sha256()
    total = 0
    for a in archivos:
        if a == "./":
            continue
        ruta = os.path.join(RAIZ, a)
        with open(ruta, "rb") as f:
            datos = f.read()
        total += len(datos)
        h.update(a.encode() + b"\0" + datos)
    version = h.hexdigest()[:12]
    with open(os.path.join(RAIZ, "offline.js"), "w", encoding="utf-8") as f:
        f.write("/* Generado por herramientas/generar_offline.py — no editar a mano. */\n")
        f.write(f"self.OFFLINE = {json.dumps({'version': version, 'bytes': total, 'archivos': archivos}, ensure_ascii=False, indent=1)};\n")
    print(f"offline.js: {len(archivos)} archivos, {total / 1e6:.1f} MB, versión {version}")


if __name__ == "__main__":
    main()
