let sales = 123_456_789;
let course = "TypeScript";
let is_published = true;
let level;

// ___________ ENUM _______________

// const small = 1;
// const medium = 2;
// const large = 3;

const enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);

// _________ FUNCTION _____________
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) {
    return income * 1.2;
  }
  return income * 1.3;
}

calculateTax(10_000);

// _________ OBJECTS ____________

// Type Alias
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "Mosh",
  retire: (date: Date) => {
    console.log(date);
  },
};

// Union types
function kgToLbs(weight: number | string): number {
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

console.log(kgToLbs(10));
kgToLbs("10kg");

// Intersection types
let weight: number & string;
