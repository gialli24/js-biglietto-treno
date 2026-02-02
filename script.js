// Data Collection 
// prompt: Chilometri da Percorrere, Età
let km, age;
const priceXkilometer = 0.21;

km = parseInt(prompt("Inserisci i chilometri da percorrere:"));
age = parseInt(prompt("Specifica la tua età:"));

// Calculate final price km * 0.21 €
let final_price = km * priceXkilometer;

// Logical Area
// IF age less then 18 -20%
// IF age at least 65 -40%
// ELSE final regular price

if (age < 18) {
    final_price -= final_price * 20 / 100;
} else if (age >= 65) {
    final_price -= final_price * 40 / 100;
}

// Output final price
let rounded_price = final_price.toFixed(2);
console.log("Prezzo finale: " + rounded_price);

