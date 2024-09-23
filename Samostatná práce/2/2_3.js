// Definice konstant pro začátek indexu a příklad číselného pole
const START_INDEX = 0;
const NUMBER_ARRAY = [1, 2, 3, 4, 5]; // Příklad číselného pole

// Procházej pole čísel pro jejich zpracování
for (let i = START_INDEX; i < NUMBER_ARRAY.length; i++) {
  // Získej aktuální číslo pro další operace
  const CURRENT_NUMBER = NUMBER_ARRAY[i];
  
  // Vypiš číslo pro uživatelskou zpětnou vazbu
  console.log("Number: " + CURRENT_NUMBER);
}
