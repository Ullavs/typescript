"use strict";
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
let level;
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
calculateTax(10000);
let employee = {
    id: 1,
    name: "Mosh",
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
console.log(kgToLbs(10));
kgToLbs("10kg");
//# sourceMappingURL=index.js.map