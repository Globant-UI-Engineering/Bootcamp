/* With Functional programing */
function predictAge(...ages){
    let result = ages.reduce((sum,value) => sum + value ** 2, 0 );
    return Math.floor(Math.sqrt(result) / 2); 
}

/* Normal With Loop */
function predictAge(...ages){
    let result = 0;
    for (let i = 0 ; i < ages.length ; i++){
        result += ages[i] ** 2;
    }
    return Math.floor(Math.sqrt(result) / 2); 
}

