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

        const sumaSkladek = skladkiEmerytalne + skladkiRentowe + skladkiChorobowe + skladkiZdrowotne;
        const ulgaNaDzieci = dzieci >= 2 ? 1000 : dzieci === 1 ? 500 : 0;
        const podatekDochodowy = (wynagrodzenie - sumaSkladek) * 0.17;

        const wynagrodzenieNetto = wynagrodzenie - sumaSkladek - podatekDochodowy + ulgaNaDzieci;

        setNetto(wynagrodzenieNetto.toFixed(2));
    };

    return (
        <div>
            <h1>Kalkulator Składek</h1>
            <div>
                <label>Wynagrodzenie brutto (PLN):</label>
                <input
                    type="number"
                    value={wynagrodzenie}
                    onChange={(e) => setWynagrodzenie(Number(e.target.value))}
                />
            </div>
            <div>
                <label>Liczba dzieci:</label>
                <input
                    type="number"
                    value={dzieci}
                    onChange={(e) => setDzieci(Number(e.target.value))}
                />
            </div>
            <button onClick={obliczNetto}>Oblicz wynagrodzenie netto</button>
            <h2>Wynagrodzenie netto: {netto} PLN</h2>
        </div>
    );
};

export default KalkulatorSkladek;
