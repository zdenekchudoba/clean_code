function updateScore(currentTotalScore, newPoints) {
    const updatedScore = currentTotalScore + newPoints;
    console.log("Current total score is now: " + updatedScore);
    return updatedScore;
}

let currentTotalScore = 0;

currentTotalScore = updateScore(currentTotalScore, 10);
currentTotalScore = updateScore(currentTotalScore, 20);
