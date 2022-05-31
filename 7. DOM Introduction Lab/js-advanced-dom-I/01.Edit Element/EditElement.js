function editElement(element, match, replacer) {
    const text = element.textContent;
    element.textContent = text.split(match).join(replacer);
}

function solve(element, match, replacer) {
    while(element.textContent.includes(match)) {
        element.textContent = element.textContent.replace(match, replacer);
    }

    // regex solution
    // let pattern = new RegExp(match, 'g')
    // element.textContent = element.textContent.replace(pattern, replacer);
};