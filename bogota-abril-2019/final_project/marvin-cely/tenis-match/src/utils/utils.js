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
    validationComponent: (condition, componentTrue, componentFalse) => {
        return (condition) ? componentTrue : componentFalse;
    },
}
export default utils;