function predictAge( ...rest ){

    const agesGrandparentsArray = Array.from( arguments );
    const ageGrandparentsMultiplyByItself = multiplyByItSelf(agesGrandparentsArray);
    const ageGrandParentsSum = SumAgesGrandParentsMultiplyByItself(ageGrandparentsMultiplyByItself);
    const squarerootAgeParent = squarerootAgeGrandparent(ageGrandParentsSum);
    const squareDivide2Parent = divide2(squarerootAgeParent);
    const predictAgeFloor = floorInteger(squareDivide2Parent);
    return predictAgeFloor;

}
function multiplyByItSelf(agesGrandparentsArray) {
    const ageGrandparentsMultiplyByItself = agesGrandparentsArray.map( ( ageGrandParent ) => ageGrandParent * ageGrandParent );
    return ageGrandparentsMultiplyByItself;
}
function SumAgesGrandParentsMultiplyByItself (ageGrandparentsMultiplyByItself) {
    const ageGrandParentsSum = ageGrandparentsMultiplyByItself.reduce(function(ageGrandParentsSum, nextValue){
        return ageGrandParentsSum + nextValue;
      }, 0);  
    return ageGrandParentsSum;  
}
function squarerootAgeGrandparent (ageGrandParentsSum) {
    const squarerootAgeParent = Math.sqrt(ageGrandParentsSum);
    return squarerootAgeParent;
}
function divide2 (squarerootAgeParent){
    const squareDivide2Parent = squarerootAgeParent / 2;
    return squareDivide2Parent;
}
function floorInteger(squareDivide2Parent) {
    const predictAgeFloor = Math.floor(squareDivide2Parent);
    return predictAgeFloor;
}

const result = predictAge(65, 60, 75, 55, 60, 63, 64, 45)
console.log(result);


