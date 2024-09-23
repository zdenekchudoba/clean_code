function calculateAverage(numbers) {
  if (numbers.length === 0) return 0; // Ošetření prázdného pole
  const totalSum = numbers.reduce((sum, score) => sum + score, 0);
  return totalSum / numbers.length;
}

const testScores = [80, 90, 100];
const averageTestScore = calculateAverage(testScores);
console.log(`Average Score: ${averageTestScore}`);
