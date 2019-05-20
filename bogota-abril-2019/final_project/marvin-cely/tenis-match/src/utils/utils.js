const utils = {
    capitalizeString: () => {
        String.prototype.capitalize = function() {
            return this.charAt(0).toUpperCase() + this.slice(1);
        }
    },
    getAge: (birthYear) => {
        const currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        return currentYear - birthYear;
    },
    validationComponent: (condition, componentTrue, componentFalse) => {
        return (condition) ? componentTrue : componentFalse;
    },
}
export default utils;