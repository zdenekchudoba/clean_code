// Check if the data is valid
function isValidData(data) {
    return data && data.length > 0;
  }
  
  // Process a single value
  function processValue(value) {
    if (value > 0) {
      return value % 2 === 0 ? value : -value;
    } else {
      console.log("Non-positive value encountered: " + value);
      return 0; // No contribution to total
    }
  }
  
  // Analyze the data
  function analyzeData(data) {
    if (!isValidData(data)) {
      console.error("Data is empty or undefined.");
      return;
    }
  
    let total = data.reduce((acc, value) => acc + processValue(value), 0);
    console.log("Final total: " + total);
  }
  
  // Example usage
  analyzeData([10, -5, 3, 8, 0, 15]);
  