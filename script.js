// show menu
const showMenu=(toggleId,navId)=>{
    const toggle=document.getElementById(toggleId)
    const nav=document.getElementById(navId)

    if(toggle && nav)
    {
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        });
    }
}
showMenu('nav_toggle','nav_menu')

// Active & remove active
const navLink=document.querySelectorAll('.nav_links')
navLink.forEach(n=>n.classList.remove('active'))
//first ellaam active ah irunthathu atha edukkirathukku
function LinkAction(){
    navLink.forEach(n=>n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('nav_menu')
      navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click',LinkAction))