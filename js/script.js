document.addEventListener('DOMContentLoaded', () => {
  const icono = document.querySelector('div img');
  if (icono) {
    icono.src = 'images/logo.svg';
  }

  const links = document.querySelectorAll('.menu-header a')
  if (links.length > 0) {
    links[0].textContent = 'Features'
    links[0].href = '#'

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

  const images = document.querySelectorAll('.features img');
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
});
