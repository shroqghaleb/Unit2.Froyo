const flavors = prompt(
    "Please enter a list of comma-separated froyo flavors:",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
const arr = flavors.split(',')
const flavorCount = {};

function countFlavors(flavorArray) {
    for (const flavor of flavorArray) {
        flavorCount[flavor] = (flavorCount[flavor] || 0) + 1;
    }
    return flavorCount;
}

const orderSummary = countFlavors(arr);
console.table(orderSummary);
