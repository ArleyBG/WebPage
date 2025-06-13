document.addEventListener('DOMContentLoaded', () => {
  const icono = document.querySelector('div img');
  if (icono) {
    icono.src = 'images/logo.svg';
  }

  const links = document.querySelectorAll('.menu-header a')
  document.getElementById('feature-scroll').addEventListener('click', () => {
    document.getElementById('feature').scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('team-scroll').addEventListener('click', () => {
    document.getElementById('teams').scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('sign-scroll').addEventListener('click', () => {
    document.getElementById('sign').scrollIntoView({ behavior: 'smooth' });
  });

  if (links.length > 0) {
    links[0].textContent = 'Features'
    links[0].href = '#feature'

    links[1].textContent = 'Team'
    links[1].href = '#teams'

    links[2].textContent = 'Sign In'
    links[2].href = '#sign'
  }

  const imagen = document.querySelector('#content img');
  if (imagen) {
    imagen.src = 'images/illustration-intro.png'
  }

  let titulo = document.querySelector('#content h1');
  titulo.innerHTML = 'All your files in one secure location,</br> accessible anywhere.'

  let description = document.querySelector('#content p');
  description.innerHTML = 'Fylo stores all your most important files in one secure location.</br> Access them wherever you need, share and collaborate with</br> friends family, and co-workers.'

  const boton = document.getElementById('start');
  boton.textContent = 'Get Started'
  boton.href ="#"

  const images = document.querySelectorAll('.features-content img');
  const imageSources = [
    "images/icon-access-anywhere.svg",
    "images/icon-security.svg",
    "images/icon-any-file.svg",
    "images/icon-collaboration.svg"
  ]

  images.forEach((image, index) => {
    if (index < imageSources.length) {
      image.src = imageSources[index];
    }
  })

  function asignarValoresElements(elements, texts) {
    elements.forEach((element, index) => {
      if (index < texts.length) {
        element.textContent = texts[index];
      }
    })
  }

  let titleItem = document.querySelectorAll('.features-content strong');
  let paragraphItem = document.querySelectorAll('.features-content p')
  
  let titles = [
    "Access your files, anywhere",
    "Security you can trust",
    "Real-time collaboration",
    "Store any type of file"
  ]

  let paragraph = [
    "The ability to use a smartphone, tablet, or computer<br> to access your account means your files follow you<br> everywhere.",
    "2-factor authentication and user-controlled encryption are<br> just a couple of the security features we allow to help<br> secure your files.",
    "Securely share files and folders with friends, family and<br> colleagues for live collaboration. No email attachments<br> required.",
    "Whether you're sharing holidays photos or work<br> documents, Fylo has you covered allowing for all file<br> types to be securely stored and shared."
  ]

  asignarValoresElements(titleItem, titles)
  asignarValoresElements(paragraphItem, paragraph)

  let teamImg = document.querySelector('.team img');
  teamImg.src = 'images/illustration-stay-productive.png'

  let teamTitle = document.querySelector('.team h2');
  teamTitle.innerHTML = 'Stay productive,<br> wherever you are'

  let teamParagraph = document.querySelector('.team p');
  teamParagraph.innerHTML = `
  <p>Never let location be an issue when accessing your files. Fylo has you<br> covered for all of your file storage needs.</p>
  Securely share files and folders with friends, family and colleagues for live<br> collaboration. No email attachments required.
  `
  
  let teamBoton = document.getElementById('team-link');
  teamBoton.textContent = "See how Fylo works"
  teamBoton.href = "#"
  
  teamIcon = document.createElement('img');
  teamIcon.src = "images/icon-arrow.svg"
  teamIcon.alt = "Icono de flecha"
  teamIcon.style.marginLeft = "5px"

  teamBoton.appendChild(teamIcon)

  let experiences = document.querySelectorAll(".experiences p");
  let nameExperience = document.querySelectorAll(".experiences h5");
  let descriptionExperience = document.querySelectorAll(".experiences span");
  
  let paragraphExperiences = [
    "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    " Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
  ]

  let titleExperiences = [
    "Satish Patel",
    "Bruce McKenzie",
    "Iva Boyd"
  ]

  let descriptionFounder = [
    "Founder & CEO, Huddle",
    "Founder & CEO, Huddle",
    "Founder & CEO, Huddle"
  ]

  asignarValoresElements(experiences, paragraphExperiences)
  asignarValoresElements(nameExperience, titleExperiences)
  asignarValoresElements(descriptionExperience, descriptionFounder)

  let iconFounder = document.querySelectorAll(".experiences img");
  let iconSources = [
    "images/profile-1.jpg",
    "images/profile-2.jpg",
    "images/profile-3.jpg"
  ]

  iconFounder.forEach((icons, index) => {
    if (index <= iconSources.length) {
      icons.src = iconSources[index]
    }
  })
  
  const formTitle = document.querySelector('.get-started h3');
  const formDescription = document.querySelector('.get-started p');
  const emailLabel = document.getElementById('email-label');
  const emailInput = document.getElementById('email');
  const formButton = document.getElementById('form-button');

  formTitle.textContent = "Get early access today";
  formDescription.textContent = "It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you."
  formButton.textContent = "Get Started For Free";

  emailInput.setAttribute('name', 'email');
  emailInput.setAttribute('placeholder', 'example@fylo.com');
  emailInput.setAttribute('autocomplete', 'email');
  emailInput.setAttribute('required', '');
  emailLabel.setAttribute('for', 'email')

  formButton.setAttribute('type', 'submit');
  formButton.setAttribute('name', 'email');


  let logoFooter = document.querySelectorAll('.footer img')
  let listOne = document.querySelectorAll('.list-footer img')
  let listOneLi = document.querySelectorAll('.list-footer p')

  
  function asignarIcon(imagenes, icon) {
    imagenes.forEach((img, index) => {
      if (index < icon.length) {
        img.src = icon[index];
      }
    })
  }

  let logoFooterSrc = [
    "images/logo.svg",
  ]

  let iconFooterSrc = [
    "images/icon-location.svg",
    "images/icon-phone.svg",
    "images/icon-email.svg",
    "images/facebook-brands.svg",
    "images/square-twitter-brands.svg",
    "images/instagram-brands.svg"
  ] 


  let listFooterOne = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    "+1-543-123-4567",
    "example@fylo.com",
    "About Us",
    "Jobs",
    "Press",
    "Blog",
    "Contact Us",
    "Terms",
    "Privacy"
  ]

  asignarIcon(logoFooter, logoFooterSrc);
  asignarIcon(listOne, iconFooterSrc);
  asignarValoresElements(listOneLi, listFooterOne);

});
