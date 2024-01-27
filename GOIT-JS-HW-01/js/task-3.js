function getElementWidth(content, padding, border) {
    content = Number.parseFloat(content);
     padding = Number.parseFloat(padding);
     border =  Number.parseFloat(border);
    const borderBox = content + 2 * padding + 2 * border;
    return borderBox;
}

getElementWidth("50px", "8px", "4px");
getElementWidth("60px", "12px", "8.5px");
getElementWidth("200px", "0px", "0px"); 
