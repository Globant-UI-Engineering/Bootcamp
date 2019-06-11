function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  const sum = Array.prototype.slice
    .call(arguments)
    .map(age => age * age)
    .reduce((sum, ageSq) => sum + ageSq);
  return Math.floor(Math.sqrt(sum) / 2.0);
}
