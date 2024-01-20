// Array filter

const ages = [5, 18, 12, 33, 54, 1, 2, 12, 14, 46, 3, 4];

const adults = ages.filter((age) => age > 18);

console.log(adults);

const teens = ages.filter((age) => age > 12 && age < 19);
console.log(teens);

const kids = ages.filter((age) => age < 5);
console.log(kids);
