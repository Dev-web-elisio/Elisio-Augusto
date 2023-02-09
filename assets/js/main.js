// MOBILE NAV 
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggler'),
      navClose = document.getElementById('nav-close')

// MOSTRAR MENU
/* Validando se a constante exite */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show')
    })
}

// REMOVER MENU 
/* Validando se a constante exite */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show')
    })
}

// REMOVE MENU MOBILE NO CLICK
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



function scrollUp(){
    const header = document.querySelector('.header');
    // Quando a barra de rolagem for superior a 200 viewport , adiciona a class Show Scroll
    if(this.scrollY >= 50) {
        header.classList.add('mudar-cor');
    } else {
        header.classList.remove('mudar-cor');
    }
}

window.addEventListener('scroll', scrollUp)



// APARECER BUTTON 
function Up(){
    const Up = document.getElementById('icone-inicio');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) Up.classList.add('up'); else Up.classList.remove('up')
}
window.addEventListener('scroll', Up )

// SCROLL ANIMAÇÕES 
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home_titulo , .home_img , .home_img2, .home_descricao , .t-titulo , .t-descricao , .home_button `,{interval: 100})
sr.reveal(`.habilidade_subtitulo, .habilidade_titulo, .marca_icon , .servico_card , .servico_texto , .partilha_box-imagem , .input_contato` ,{interval: 100})
sr.reveal(`.liguaguem_card, .contato_titulo , .contato_subtitulo , .trabalho_subtitulo, .trabalho_titulo `,{origin: 'left'})
sr.reveal(`.contato_button, .questions__group2 `,{origin: 'right'})







/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-moon'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-sun' : 'bxs-moon'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-sun' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})