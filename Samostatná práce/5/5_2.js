// Process a credit transaction
function processCredit(transaction) {
    if (transaction.amount > 1000) {
      applyBonus(transaction);
    } else {
      applyStandardProcessing(transaction);
    }
  }
  
  // Process a debit transaction
  function processDebit(transaction) {
    if (transaction.amount > 500) {
      requireApproval(transaction);
    } else {
      deductAmount(transaction);
    }
  }
  
  // Process transactions
  function processTransactions(transactions) {
    for (const transaction of transactions) {
      switch (transaction.type) {
        case "credit":
          processCredit(transaction);
          break;
        case "debit":
          processDebit(transaction);
          break;
        default:
          console.log("Unknown transaction type: " + transaction.type);
      }
    }
  }
  
  // Example usage
  processTransactions([
    { type: "credit", amount: 1500 },
    { type: "debit", amount: 300 },
    { type: "debit", amount: 600 },
    { type: "credit", amount: 800 },
  ]);
  