export default class TesztKerdes {
    #adatObj;
    #index;
    #szuloElem;
    #valaszZarva = false;
  
    constructor(adatObj, szuloElem, index) {
      this.#adatObj = adatObj;
      this.#szuloElem = szuloElem;
      this.#index = index;
      this.kever(this.#adatObj.valasztas);
      const kerdesElem = this.megjelenites();
      this.valaszEllenorzes(kerdesElem);
    }
  
    megjelenites() {
      let html = `
            <div class="kerdes">
              <p class="kerdesSzoveg">${this.#adatObj.mondat}</p>
              <div class="valaszok">
                <p class="valasz">${this.#adatObj.valasztas[0]}</p>
                <p class="valasz">${this.#adatObj.valasztas[1]}</p>
                <p class="valasz">${this.#adatObj.valasztas[2]}</p>
                <p class="valasz">${this.#adatObj.valasztas[3]}</p>
              </div>           
            </div>  
          `;
      this.#szuloElem.insertAdjacentHTML("beforeend", html);
  
      const utolsoKerdesElem =
        this.#szuloElem.querySelector(".kerdes:last-child");
      return utolsoKerdesElem;
    }
  
    kever(tomb) {
      for (let i = tomb.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tomb[i], tomb[j]] = [tomb[j], tomb[i]];
      }
    }

    valaszEllenorzes(kerdesElem) {
      const valaszok = kerdesElem.querySelectorAll("p.valasz");
      const helyesValasz = this.#adatObj.valasztas[0];
  
      valaszok.forEach((elem) => {
        elem.addEventListener("click", () => {
          if (this.#valaszZarva) return;

          if (elem.textContent === helyesValasz) {
            elem.style.backgroundColor = "lightgreen";
          } else {
            elem.style.backgroundColor = "lightcoral";
          }

          this.#valaszZarva = true;
        });
      });
    }
  }
