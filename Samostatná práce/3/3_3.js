// Definice konstanty pro zpoždění notifikace
const NOTIFICATION_DELAY_MS = 2500; // 2.5 sekundy v milisekundách

// Funkce pro zobrazení notifikace
function showNotification() {
    console.log("Notifikace se zobrazuje!");
}

// Zobrazení notifikace po 2.5 sekundách
setTimeout(showNotification, NOTIFICATION_DELAY_MS);
