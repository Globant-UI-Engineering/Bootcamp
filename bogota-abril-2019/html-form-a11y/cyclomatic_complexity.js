// Homework: Solve and calculate cyclomatic complexity

// Function in one line

function predictAge(...ages){
    return Math.floor(Math.sqrt(ages.map(number=>number*number).reduce((acc,next)=>{return acc+next},0))/2)
}
console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45)); // result = 86

// Edge and Node count

/* function predictAge(...ages){ 
    // edge 1
    ages.map(number=>number*number) // node 1 
    edge 2
    .reduce((acc,next)=>{return acc+next},0);  // node 2 
    edge 3      
    partial_result/2; // node 3 
    edge 4
    Math.sqrt(partial_result); // node 4 
    edge 5
    return Math.floor(partial_result); // node 5 
    edge 6     
    final result
    }
*/
 
let edges = 6;
let nodes = 5;
let complexityScore_M = edges - nodes + 2
console.log(complexityScore_M); // 3
/* 
Score & risk: 
Complexity score for the predictAge program = 3
Cyclomatic = Simple.
Risk Type = Not much risk.
*/
