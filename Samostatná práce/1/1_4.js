// Vypočítej a vrať plochu a obvod kruhu na základě zadaného poloměru.
function vypocitejPlochuAObvodKruhu(polomer) {
  let plocha = 3.14 * polomer * polomer;
  let obvod = 2 * 3.14 * polomer;

  // Vrať oba výsledky jako objekt.
  return { plocha, obvod };
}

// Získej plochu a obvod pro kruh s poloměrem 5.
let vysledky = vypocitejPlochuAObvodKruhu(5);

// Vypiš výsledky.
console.log("Plocha: " + vysledky.plocha);
console.log("Obvod: " + vysledky.obvod);
