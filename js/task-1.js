const listElem = document.querySelector("#categories");
const itemsElem = document.querySelectorAll(".item");

console.log(`Number of categories: ${listElem.children.length}`)

itemsElem.forEach(item => {
    const titleElem = item.children[0];
    const categoryItemElem = item.children[1];
    
    console.log(`Category: ${titleElem.textContent}`);
    console.log(`Elements: ${categoryItemElem.children.length}`);
    
    
    
})