const navbar = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function(){
    console.log(window.scrollY);
    if (window.scrollY > 1){
        navbar.classList.replace('bg-transparent','nav-color')
    }
    else if (this.window.scrollY <= 0){
        navbar.classList.replace('nav-color','bg-transparent')
    }
});



// popup

const popup = document.querySelector('.popup');
const popupbtn = document.querySelector('.pay-btn');
const exit = document.querySelector('.close-btn');

popupbtn.addEventListener('click', ()=>{
    popup.classList.add('active-popup');
});

exit.addEventListener('click', ()=>{
    popup.classList.remove('active-popup');
})