function predictAge(){

const ages = Array.from(arguments);

const powArray = ages.map(age => Math.pow(age,2));
const sumPowArray = powArray.reduce((age1, age2) => age1 + age2);

return parseInt(Math.sqrt(sumPowArray) / 2);

}