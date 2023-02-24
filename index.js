const mainMenu=document.querySelector('.nav-items-list');
const openMenu=document.querySelector('.openMenu');
const closeMenu=document.querySelector('.closeMenu');
const aboutUs=document.querySelector('.aboutusli-item');
const resources=document.querySelector('.resourcesli-item');
const events=document.querySelector('.eventsli-item');
const navRight=document.querySelector('.nav-right');
openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',hide);
aboutUs.addEventListener('click',showAbout)
resources.addEventListener('click',showResources)
events.addEventListener('click',showEvents)
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
function showResources()
{
    if(x.matches)
    {
        mainMenu.style.display='none';
    }
}
function showEvents()
{
    if(x.matches)
    {
        mainMenu.style.display='none';
    }
}
