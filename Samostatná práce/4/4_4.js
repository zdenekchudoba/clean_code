// Define initial inventory
let inventory = {
  Widget: 20,
  Gadget: 15
};

// Update inventory function that returns a new inventory state
function updateInventory(currentInventory, product, quantity) {
  if (currentInventory[product] < quantity) {
    console.log("Not enough stock for " + product + ".");
    return currentInventory; // Return unchanged inventory if insufficient stock
  }

  const newInventory = {
    ...currentInventory,
    [product]: currentInventory[product] - quantity
  };

  console.log(quantity + " units of " + product + " sold.");
  return newInventory;
}

// Update inventory and get the new state
inventory = updateInventory(inventory, "Widget", 5);
