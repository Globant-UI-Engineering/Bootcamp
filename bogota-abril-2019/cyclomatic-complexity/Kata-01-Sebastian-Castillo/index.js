function predictAge(...ages) {
  var sum = 0;
  for (let index = 0; index < array.length; index++) {
    sum += Math.pow(ages[index], 2);
  }
  const result = Math.sqrt(sum) / 2;
  return Math.floor(result);
}

const prediction = predictAge(65, 60, 75, 55, 60, 63, 64, 45);
console.log(prediction);
