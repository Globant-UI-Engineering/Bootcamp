var ages = [55,78,92,46];

predictAge(ages);

    function predictAge(arrayAges){
        var prediction = 0;
        
        for (var i = 0; i < arrayAges.length; i++) {
            prediction +=  Math.pow(arrayAges[i], 2);
        }

        prediction = (Math.sqrt(prediction)) / 2;
        prediction = Math.floor(prediction);

        console.log(prediction);
    }

//Cyclomatic complexity = 2