function astroguru(numKids, partner, location, job) {
  return `You will be a ${job} in ${location} and married to ${partner} with ${numKids} kids.`;
}

console.log(astroguru(2, "Hannah", "India", "Software Engineer"));

console.log("***")

function larger(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return 'Not a number'
  } else {
    if (a > b) return a;
    else if (a == b) return "A and B are equal";
    else return b;
  }
}

console.log(larger(2, 2))
