export const getScheduledTime = date => (
   `${new Date(date).getHours()}:${addZero(new Date(date).getMinutes())}`
);

const addZero = number => {
    return number < 10 ? `0${number}` : number;
}
