function getElementWidth(content, padding, border) {
    const cont = Number.parseFloat(content);
    const pad = Number.parseFloat(padding);
    const bor= Number.parseFloat(border);
    const borderBox = cont + 2 * pad + 2 * bor;
    return borderBox;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px")); 
