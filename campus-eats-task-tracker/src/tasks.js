const tasks = 
    [   "Design the menu screen", 
        "Build the orders API",
        "Add user login"
    ]; 
    
console.log(`CampusEats has ${tasks.length} open tasks`); 

// BEFORE — what is wrong here?
function calc(a, b, t) {
  var x = a * b;

  if (t == "vip") {
    x = x - x * 0.1;
  }

  console.log("API_KEY=sk_live_9f8a7b6c5d");

  return x;
}

//Problem 1 - The function name is unclear
//Problem 2 - The Variable names unclear
//Problem 3 - REAL API key EXPOSED

// src/tasks.js (after)
// AFTER — clear names, no magic numbers, no secrets

const VIP_DISCOUNT = 0.1;

function calculateTotal(price, quantity, customerType) {
  if (price < 0 || quantity < 0) {
    throw new Error("price and quantity must be >= 0");
  }

  const subtotal = price * quantity;

  return customerType === "vip"
    ? subtotal * (1 - VIP_DISCOUNT)
    : subtotal;
}

// the API key comes from an environment variable,
// e.g. process.env.API_KEY — never hard-coded

//Reflection 
/**
 * Never commit secrets (API keys, passwords, tokens) to Git. 
 * If a secret is ever pushed, treat it as compromised: remove it,
 *  rotate (regenerate) the key, and move it to an environment variable or secrets store.
 *  Deleting it in a later commit is not enough — it remains in the history. 
 */