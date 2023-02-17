
const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    console.log(`Category: ${category.querySelector('h2').innerHTML}`);
    console.log(`Elements: ${category.querySelectorAll('li').length}`);
});

