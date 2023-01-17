const button = document.querySelector('button');

button.addEventListener('click',() =>{
    console.log('button clicked');
});


const item = document.querySelectorAll('li');

item.forEach(item =>{
    item.addEventListener('click',() =>{
        console.log('item clicked');
    });
});


