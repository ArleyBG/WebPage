document.addEventListener('DOMContentLoaded', () => {
  const icono = document.querySelector('div img');
  if (icono) {
    icono.src = 'images/logo.svg';
  }

  const links = document.querySelectorAll('.menu-header a')
  if (links.length > 0) {
    links[0].textContent = 'Features'
    links[0].href = '#feature'

    links[1].textContent = 'Team'
    links[1].href = '#'

    links[2].textContent = 'Sign In'
    links[2].href = '#'
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
        element.innerHTML = texts[index];
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


});
