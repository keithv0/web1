// burger

const hamburger=document.querySelector('#burger');
const navMenu=document.querySelector('#nav-list')

hamburger.addEventListener('mouseenter',()=>{
    hamburger.classList.toggle('hamburger-active')
})
hamburger.addEventListener('mouseleave',function(){
    hamburger.classList.toggle('hamburger-active')
})
// hamburger.addEventListener('mouseover',function(){
//     hamburger.classList.toggle('hamburger-active')
//     hamburger.classList.toggle('hidden')
// })