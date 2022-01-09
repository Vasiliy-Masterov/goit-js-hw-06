const listCategoriesEl = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${listCategoriesEl.length}`);

listCategoriesEl.forEach(category => {
    console.log("");
    const titleOfCategory = category.querySelector('h2').textContent;
    const numberOfElements = category.querySelector('ul').children.length;
    console.log(`Category: ${titleOfCategory}`); 
    console.log(`Elements: ${numberOfElements}`);
});


