// Vypiš každý prvek pole s jeho odpovídajícím indexem.
function vypisPrvkyPole(pole) {
    for (let index = 0; index < pole.length; index++) {
        console.log("Hodnota na indexu " + index + ": " + pole[index]);
    }
}

// Definuj pole čísel, které se má vypsat.
let poleCisel = [5, 10, 15, 20, 25];

// Zavolej funkci pro vypsání prvků pole a jejich indexů.
vypisPrvkyPole(poleCisel);
