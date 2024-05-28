const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY > 0);
})
let munu=document.querySelector('#mune-icon');
let navmenu=document.querySelector('.navmenu');
menu.onclick=() =>{
    menubar.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}