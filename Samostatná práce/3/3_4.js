// Definice konstanty pro maximální počet pokusů
const MAX_RETRIES = 3;

let attempt = 0;
while (attempt < MAX_RETRIES) {
    if (tryConnect()) {
        console.log("Connected successfully.");
        break;
    } else {
        console.log("Retrying connection...");
        attempt++;
    }
}

if (attempt === MAX_RETRIES) {
    console.log("Failed to connect after " + MAX_RETRIES + " attempts.");
}
