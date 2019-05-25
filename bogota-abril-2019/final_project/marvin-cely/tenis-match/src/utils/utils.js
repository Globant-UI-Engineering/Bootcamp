const utils = {
	capitalizeString: () => {
		String.prototype.capitalize = function() {
			return this.charAt(0).toUpperCase() + this.slice(1);
		}
	},
	getAge: (birthDate) => {
		// taken by https://www.w3resource.com/javascript-exercises/javascript-date-exercise-18.php
		const differentDate = Date.now() - birthDate.toDate().getTime();
		const ageDate = new Date(differentDate); 
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	},
	validationService: (store, collectionsName, [successComponent, loadingComponent, errorComponent]) => {
		let totalLoadingState = false;
		let totalErrorServiceState = false;
		collectionsName.forEach( collection => {
			totalLoadingState |= store.isLoading['from'+collection.capitalize()];
			totalErrorServiceState |= store.isLoading['from'+collection.capitalize()];
		});
		if (totalLoadingState) 
			return loadingComponent;
		else if (totalErrorServiceState)
			return errorComponent;
		else 
			return successComponent;
	},
	sortByAlphaArrayMap: (array, element) => {		
		return array.sort((object1, object2) => (object1[1][element] > object2[1][element]) ? 1 : -1);
	},	
}
export default utils;