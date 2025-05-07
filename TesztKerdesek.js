import TesztKerdes from "./TesztKerdes.js";

export default class TesztKerdesek {
  #lista = [];

  constructor(lista, szuloElem) {
    this.#lista = lista;
    this.szuloElem = szuloElem;
    this.kever(this.#lista);
    this.megjelenit();
  }

  megjelenit() {
    this.szuloElem.innerHTML = "";
    for (let i = 2; i < this.#lista.length; i++) {
      new TesztKerdes(this.#lista[i], this.szuloElem, i);
    }
  }
  kever(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [lista[i], lista[j]] = [lista[j], lista[i]];
    }
    return lista;
  }
}
