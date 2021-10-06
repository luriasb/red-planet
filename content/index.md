---
# Define tus variables debajo de esta linea
headerTitle: Header02
headerSubTitle: Tu slogan 

hero01: /img/hero01.jpg
links:
  - text: Misión
    link: 'mision'
  - text: Acerca de tu empresa
    link: 'acerca'
  - text: Servicios
    link: 'servicios'
  - text: Contacto
    link: 'contacto'

socialLinks:
  - link: 'https://twitter.com'
    type: 'twitter'
  - link: 'https://facebook.com'
    type: 'fb'
  - link: 'https://instagram.com'
    type: 'ig'

phone: '55 5555 5555'


---

<!-- Define tus componentes aquí-->
  <navigation-02 :links="links" :social-links="socialLinks" :phone="phone"></navigation-02>
  <header-02 id="header01" :title="headerTitle" :sub-title="headerSubTitle" :image="hero01" parallax ></header-02>
