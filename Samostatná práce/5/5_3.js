// Evaluate the parity of a number
function evaluateParity(a) {
    return a % 2 === 0 ? "even" : "odd";
  }
  
  // Evaluate the range of a number
  function evaluateRange(a) {
    if (a < 10) {
      return "less than 10";
    } else {
      return "10 or more";
    }
  }
  
  // Main function to evaluate the condition
  function evaluateCondition(a) {
    if (a > 0) {
      const range = evaluateRange(a);
      const parity = evaluateParity(a);
      console.log(`a is positive, ${range}, and ${parity}.`);
    } else if (a === 0) {
      console.log("a is zero.");
    } else {
      console.log("a is negative.");
    }
  }
  
  // Example usage
  evaluateCondition(5);
  evaluateCondition(10);
  evaluateCondition(0);
  evaluateCondition(-3);
  