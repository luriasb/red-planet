---
links:
  - text: Servicios
    link: 'servicios'

socialLinks:
  - link: 'https://twitter.com'
    type: 'twitter'
  - link: 'https://facebook.com'
    type: 'fb'

phone: '55 5555 5555'
siteName: 'Mi sitio'

headerTitle: Lili
headerSubTitle: Tu slogan llamativo y contundente
hero01: /img/hero01.jpg

content01Text: 'Este es un gran lugar para la misión de tu empresa.
También funciona bastante bien para resaltar un breve mensaje que cierre con una "llamada a la acción".'

banner01: /img/banner01.jpg 
banner02: /img/banner02.jpg 


servicesTitle: TUS SERVICIOS
services:
  - title: Servicio 1
    text: 'Piensa en tu producto o servicio principal, ese debe de ser el primero de esta lista y es el que podrás describir aquí mismo.'
  - title: Servicio 2
    text: 'Ordena tus productos o servicios en la prioridad que más te parezca adecuada y recuerda que deberás describir cada uno de forma muy breve.'
  - title: Servicio 3
    text: 'La importancia de describir tus productos o servicios hace una gran diferencia para que tus posibles clientes se interesen en lo que tu empresa les puede ofrecer.'
  - title: Servicio 4
    text: 'Piensa en cómo te gustaría presentar tus productos o servicios. Descríbelos con palabras clave o frases cortas que te ayuden a ti y al público a identificarlos.'
  - title: Servicio 5
    text: 'Además de descripciones de tus productos o servicios, también puedes usar preguntas para llegar a tus posibles clientes, por ejemplo "¿Tienes problema con...?" Nosotros podemos ayudarte. Aprovecha cada uno.'

banner03: /img/banner03.jpg

contactTitle: 'Ubicación y contacto'
contactAdress: 'Tu calle No. 100 Zona de la ciudad. Tu ciudad.'
contactMail: 'info@tuempresa.com'
contactTel: '55 5555 5555'
contactMaps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6220153408817!2d-99.10918055040719!3d19.42873094577654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1feaeaae914a7%3A0x309cc48e621dcf8b!2sLife%20On%20Mars!5e0!3m2!1ses!2smx!4v1646776847851!5m2!1ses!2smx" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'


---

<!-- Define tus componentes aquí-->

<div>

<navigation-01 :links="links" :social-links="socialLinks" :phone="phone" :site-name="siteName" ></navigation-01>

<header-01 :title="headerTitle" :sub-title="headerSubTitle" :image="hero01" parallax></header-01>

<content-01 id="mision" :text="content01Text"></content-01>

<content-03 id="servicios" :title="servicesTitle" :services="services" :image="banner02" parallax></content-03>

<banner-01 :image="banner03" ></banner-01>

<content-04 id="contacto" :title="contactTitle"  :mail="contactMail" :tel="contactTel" :google-maps-url="contactMaps"></content-04>

</div>
