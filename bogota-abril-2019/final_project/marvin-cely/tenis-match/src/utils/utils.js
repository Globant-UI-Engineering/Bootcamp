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
	toStringDate: (date) => {
		let month = date.getMonth() + 1;
		let day = date.getDate() + 1;
		if(month < 10) month = `0${month}`;
		if(day < 10) day = `0${day}`;			 
		return `${date.getFullYear()}-${month}-${day}`;
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
		return array.slice().sort((object1, object2) => (object1[1][element] > object2[1][element]) ? 1 : -1);
	},	
	sortByAlphaArrayList: (array, element) => {		
		return array.slice().sort((object1, object2) => (object1[element] > object2[element]) ? 1 : -1);
	},
	sortByNumberArrayList: (array, element) => {		
		return array.slice().sort((object1, object2) => object2[element] - object1[element]);
	},
	sortByAgeArrayList: (array, element, getAge) => {		
		return array.slice().sort((object1, object2) => getAge(object2[element]) - getAge(object1[element]));
	},
	filterAllByArrayList: (array, value) => {
		return array.slice().filter((player) =>
			player.name.toLowerCase().indexOf(value.toLowerCase()) > -1
	  );
	},
}
export default utils;