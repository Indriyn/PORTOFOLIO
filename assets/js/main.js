
/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Show menu */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Hide menu */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll('.nav__link, .nav__contact')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== HOME TEXT CIRCULAR ===============*/
const homeText = document.getElementById('home-text'),
      letters = homeText.textContent.trim().split(''),
      angleStep = 360 / letters.length

homeText.textContent = ''

letters.forEach((char, i) => {
   const span = document.createElement('span')
   span.textContent = char
   span.style.transform = `rotate(${i * angleStep}deg)`
   homeText.appendChild(span)
})

/*=============== HOME TYPED JS ===============*/
 const typedHome = new Typed('#home-typed', {
   strings: ['Web Development', 'Front-End', 'UI/UX'],
   typeSpeed: 65,
   backDelay: 2000,
   loop: true,
 })

/*=============== CHANGE HEADER STYLES ===============*/
const scrollHeader = () =>{
   const header = document.getElementById('header')
   this.scrollY >= 50 ? header.classList.add('scroll-header') 
                      : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER WORK ===============*/ 
const swiperWork = new Swiper('.work__swiper', {
   loop: true,
   spaceBetween: 24,
   slidesPerView: 'auto',
   grabCursor: true,
   speed: 600,

   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   }
})


/*=============== SERVICES ACCORDION ===============*/ 
const servicesCards = document.querySelectorAll('.services__card'),
      servicesButtons = document.querySelectorAll('.services__button')

servicesButtons.forEach(button => {
   button.addEventListener('click', () => {
      const currentCard = button.closest('.services__card')
            isOpen = currentCard.classList.contains('services-open')

      servicesCards.forEach(card => {
         card.classList.replace('services-open', 'services-close')
      })
      
   if(!isOpen){
      currentCard.classList.replace('services-close','services-open')
   }
   })
})

/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/ 


/*=============== CONTACT EMAIL JS ===============*/ 
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')
const sendEmail =  async (e) => {
   e.preventDefault()

   try{
      // serviceId - TemplateID - #form - publickey 
      await emailjs.sendForm('service_qtvrkdc','template_rbsll1x','#contact-form','cDdHEgZSyX50xJ08w')

      contactMessage.textContent = 'Message sent successfully ✅'

      contactForm.reset()
   } catch (error) {
      contactMessage.textContent = 'Message not sent (service error) ❌'
   } finally {
      setTimeout(() => contactMessage.textContent = '', 5000)
   }
}
contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () => {
   const scrollUpButton = document.getElementById('scroll-up');

   if (window.scrollY >= 350) {
      scrollUpButton.classList.add('show-scroll');
   } else {
      scrollUpButton.classList.remove('show-scroll');
   }
};

window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const section = document.querySelectorAll('section[id]')

const scrollActive = () => {
   const scrollY = window.scrollY

   section.forEach(section => {
      const id = section.id,
      top = section.offsetTop -50,
      height = section.offsetHeight,
      link = document.querySelector('.nav__menu a[href*=' + id + ']')

   if(!link) return 

   link.classList.toggle('active-link', scrollY > top && scrollY <= top + height)
   })
}
window.addEventListener('scroll', scrollActive)

/*=============== CUSTOM CURSOR ===============*/


/*=============== SCROLLREVEAL ANIMATION ===============*/
