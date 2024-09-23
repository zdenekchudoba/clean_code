const NON_MEMBER_DISCOUNT = 0.05;
const MEMBER_DISCOUNT = 0.10;

let finalPrice = basePrice * (1 - NON_MEMBER_DISCOUNT); // Aplikace 5% slevy pro nečleny

// Aplikace 10% slevy pro členy, která přepisuje předchozí slevu
if (isMember) {
    finalPrice = basePrice * (1 - MEMBER_DISCOUNT);
}

console.log("Final price: $" + finalPrice.toFixed(2)); // Zobrazit cenu se dvěma desetinnými místy
