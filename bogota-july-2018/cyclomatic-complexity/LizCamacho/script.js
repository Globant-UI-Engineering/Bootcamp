function predictAge(...ages) {
    let sum = Math.hypot(...ages);
    let res = Math.floor(sum / 2);
    return res;
}

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45));

// function predictAge() {
//     let num = prompt("How many ages will you type?");
//     let i, age, res, sum = 0;

//     for (i = 0; i < num; i++) {
//         age = prompt("Enter age " + (i + 1));
//         age *= age;
//         sum += age;
//     }
//     res = Math.floor((Math.sqrt(sum) / 2));
//     return res;

// }

// document.write(predictAge());