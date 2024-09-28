// burger
const hamburger=document.querySelector('#burger');
const navMenu=document.querySelector('#nav-list');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})

// Header
header=document.querySelector('header')
divHeader=document.querySelector('.div-container-header')
halalaman1=document.querySelector('#home')
atas=0;

window.addEventListener('scroll',function(){
    //posisi user
    posisiScroll=window.scrollY 
    // tinggi hal 1
    tinggiHal1=halalaman1.offsetHeight;

    //header ketika melebihi halaman 1
    if(posisiScroll>tinggiHal1){
        header.classList.add('bg-header')
    }else{
        header.classList.remove('bg-header')
    }
})