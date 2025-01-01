import React, { useState } from "react";

const KalkulatorSkladek = () => {
  const [wynagrodzenie, setWynagrodzenie] = useState(0);
  const [dzieci, setDzieci] = useState(0);
  const [netto, setNetto] = useState(0);

  const obliczNetto = () => {
    const skladkiEmerytalne = wynagrodzenie * 0.0976;
    const skladkiRentowe = wynagrodzenie * 0.015;
    const skladkiChorobowe = wynagrodzenie * 0.0245;
    const skladkiZdrowotne = wynagrodzenie * 0.09;
    const ulgaNaDzieci = dzieci >= 2 ? 1000 : dzieci === 1 ? 500 : 0;
    const podatek = wynagrodzenie - (skladkiEmerytalne + skladkiRentowe + skladkiChorobowe + skladkiZdrowotne);
    const wynagrodzenieNetto = wynagrodzenie - (skladkiEmerytalne + skladkiRentowe + skladkiChorobowe + skladkiZdrowotne + podatek - ulgaNaDzieci);
    setNetto(wynagrodzenieNetto.toFixed(2));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Kalkulator Składek</h1>
      <div>
        <label>
          Wysokość wynagrodzenia (PLN):
          <input
            type="number"
            value={wynagrodzenie}
            onChange={(e) => setWynagrodzenie(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Liczba dzieci:
          <input
            type="number"
            value={dzieci}
            onChange={(e) => setDzieci(Number(e.target.value))}
          />
        </label>
      </div>
      <button onClick={obliczNetto}>Oblicz Wynagrodzenie Netto</button>
      {netto > 0 && <h2>Wynagrodzenie Netto: {netto} PLN</h2>}
    </div>
  );
};

export default KalkulatorSkladek;
