const mainMenu=document.querySelector('.nav-items-list');
const openMenu=document.querySelector('.openMenu');
const closeMenu=document.querySelector('.closeMenu');
const aboutUs=document.querySelector('.aboutus');
const navRight=document.querySelector('.nav-right');
openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',hide);
aboutUs.addEventListener('click',showAbout)
function show()
{
    mainMenu.style.display='flex';
    mainMenu.style.top='0';
}
function hide()
{
    mainMenu.style.display='none';
}
var x = window.matchMedia("(max-width: 480px)")
function showAbout()
{
    if(x.matches)
    {
        mainMenu.style.display='none';
    }
}

