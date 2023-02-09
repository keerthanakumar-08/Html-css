const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');


button.addEventListener('click', ()=>{
popup.style.display = 'block';

});


button.addEventListener('click', ()=>{
popup.style.display = 'none';

});

