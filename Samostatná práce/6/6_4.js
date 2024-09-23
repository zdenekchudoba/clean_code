let sum = 0;
for (let i = 0; i < values.length; i++) {
  sum += values[i] * weights[i];
}
console.log("Weighted sum: " + sum);
