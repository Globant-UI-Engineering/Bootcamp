export function filterData(data = [], columnData = undefined){

    var filterArray = [];
    var onlyDataOfColumn = [];

    if (!(data.lenght === 0 || columnData === undefined)) {

        onlyDataOfColumn = data.map((dato, i) => {
            return dato[columnData];
        });

        filterArray = onlyDataOfColumn.filter((data, i)=>{
            return onlyDataOfColumn.indexOf(data) === i;
        });

        return filterArray;
    }else {
        return null;
    }
}
