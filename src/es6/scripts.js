const ary = [23, 34, 20, 6];
const isBig = value => {
  return value <= 10;
};

const ary1 = ary.filter(isBig);

console.log(ary);
console.log(ary1);
