let fruit: string = "banana";
console.log(fruit);
console.log(typeof fruit);

let goal : unknown = true;

if (typeof goal === 'string') {
  let result = goal.split("");
  console.log(result);
}
else {
    console.log(goal);
}