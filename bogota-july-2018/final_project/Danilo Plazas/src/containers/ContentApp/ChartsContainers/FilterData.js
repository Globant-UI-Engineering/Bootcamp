export function filterData(data, criteria){

    var dataToGraph = [];

    const {
        factSelected,
        marketSelected,
        categorySelected
    } = criteria;

    dataToGraph = data.filter((data, i) => {
        if (i === 0) {
            return true;
        }else {
            return (
                data.includes(factSelected) &&
                data.includes(marketSelected) &&
                data.includes(categorySelected)
            );
        }
    });

    return dataToGraph;
}

export function filterOnlyTheColumnsNeeded(data, start){

    var dataToGraph = [];

    if (data.length === 0) {
        dataToGraph = [];
    }else {

        dataToGraph = data.map((arrayData, i) => {
            return arrayData.filter((d, i) => {
                return !(i < start);
            });
        });
    }

    return dataToGraph;

}

export function parseFloatArray(dataToGraph){
    dataToGraph = dataToGraph.map((arrayData, i) => {
        if (i === 0) {
            return arrayData;
        }else {
            return arrayData.map((d, i) => {
                if (i === 0) {
                    return d;
                }else {
                    return parseFloat(d);
                }
            });
        }
    });

    return dataToGraph;
}

export function trasposeArray(a){
    var w = a.length || 0;
    var h = a[0] instanceof Array ? a[0].length : 0;

    if(h === 0 || w === 0) { return []; }

    var i, j, t = [];

    for(i=0; i<h; i++) {
        t[i] = [];
        for(j=0; j<w; j++) {
            t[i][j] = a[j][i];
        }
    }
    return t;
}

export function deleteRow(data, numRow){

    data.splice(numRow,1);
    return data;
}
