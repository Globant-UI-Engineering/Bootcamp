let buttonGroup = document.querySelectorAll("button");

Array.from(buttonGroup).forEach(button => {
    button.addEventListener('click', (event) => {
        console.log(event.target.parentNode.parentNode.cellIndex, event.target.parentNode.parentNode.parentNode.rowIndex);
    });
});