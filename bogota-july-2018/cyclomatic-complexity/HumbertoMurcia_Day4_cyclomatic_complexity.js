function predictAge(){
	let total=0;
	for (i=0; i<arguments.length; i++) {
		 total+=Math.pow(arguments[i],2);
    }
		total=Math.floor((Math.sqrt(total))/2);
	return total;
}