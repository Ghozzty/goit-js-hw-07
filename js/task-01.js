

const numbersMainList = document.querySelector('#categories');
console.log(`Number of categories: ${numbersMainList.children.length}`);

const findItem = document.querySelectorAll('.item');

findItem.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
})


