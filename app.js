 // Taking  input from user
let juiceType = prompt("Enter Juice Type (Orange, Apple, Mango):");
let size = prompt("Enter Size (Small, Medium, Large):");
let sugar = prompt("Extra Sugar or No Sugar:");


let price = 0;

// Calculation for Juice Type
if (juiceType === "orange") {
    price = 150;
} else if (juiceType === "apple") {
    price = 120;
} else if (juiceType === "mango") {
    price = 100;
} else {
    console.log("Invalid juice type selected.");
}

//  Price for Size
if (size === "small") {
    price += 50;
} else if (size === "medium") {
    price += 100;
} else if (size === "large") {
    price += 150;
} else {
    console.log("Invalid size selected.");
}

//  Price for Sugar
if (sugar === "extra sugar") {
    price += 20;
} else if (sugar === "no sugar") {
    price += 0;
} else {
    console.log("Invalid sugar option selected.");
}

// Total price in console
console.log("Selected Juice: " + juiceType);
    console.log("Size: " + size);
    console.log("Sugar: " + sugar);

    console.log("Total Bill: " + price);
