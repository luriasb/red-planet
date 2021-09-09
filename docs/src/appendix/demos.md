# Demos

Espacio para mostrar algunos de los demos de Red planet:

[Demo 00-General](https://redplanet.devlez.com/lodestar/)

```
---
headerTitle: EL NOMBRE DE TU EMPRESA Chula
headerSubTitle: Tu slogan llamativo y contundente

hero01: /img/hero01.jpg
banner01: /img/banner01.jpg
banner02: /img/banner02.jpg
banner03: /img/banner03.jpg
banner04: /img/banner04.jpg

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

content01Text: 'Este es un gran lugar para la misión de tu empresa. También funciona bastante bien para resaltar un breve mensaje que cierre con una "llamada a la acción".'

content02Title: ACERCA TU EMPRESA
content02Text1: "A las personas les gusta conocer la forma en la que trabajan las empresas. Por esta razón existe este espacio, para que hables sobre qué hace tu empresa. Además, es una gran oportunidad para decirle a la gente qué ofreces, en qué te diferencias de los demás y sobre todo, por qué eres la mejor opción para el público.

Aprovecha para hablar sobre las motivaciones que tiene tu empresa y de tus procesos para ofrecer productos o servicios de calidad. Puedes mencionar tus compromisos con tus clientes para que confíen en tu equipo y en tu marca."
content02Text2: "Usa este espacio para hablar sobre tu experiencia. Cuéntale a la gente cuántos años llevas en el mercado y cómo has evolucionado para brindar mejores experiencias a tus clientes. También puedes hablar sobre tu trabajo en equipo y tus procesos para rendir mejores resultados. Piensa en todas esas cosas que te gustaría que tu público conociera sobre tu empresa y de todo el esfuerzo detrás de lo que ofreces para cautivarlos. Este espacio es una oportunidad para dar a conocer lo que casi nadie sabe de tu negocio y puedes aprovecharlo de forma positivaaa."

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

contactTitle: 'Ubicación y contacto'
contactAdress: 'Tu calle No. 100 Zona de la ciudad. Tu ciudad.'
contactMail: 'info@tuempresa.com'
contactTel: '55 5555 5555'

footerText: '© Copyright 2021'

---

<div>
  <navigation-01 :links="links" :social-links="socialLinks" :phone="phone"></navigation-01>
  <header-01 id="header01" :title="headerTitle" :sub-title="headerSubTitle" :image="hero01" parallax ></header-01>
  <content-01 id="mision" :text="content01Text"></content-01>
  <banner-01 id="banner01" :image="banner01" parallax></banner-01>
  <content-02 id="acerca" :title="content02Title" :text1="content02Text1" :text2="content02Text2" ></content-02>
  <content-03 id="servicios" :title="servicesTitle" :services="services" :image="banner02" parallax ></content-03>
  <banner-01 :image="banner03" parallax></banner-01>
  <content-04 id="contacto" :title="contactTitle" :adress="contactAdress" :mail="contactMail" :tel="contactTel" ></content-04>
  <banner-01 :image="banner04"></banner-01>
  <footer-01 :text="footerText" :social-links="socialLinks" ></footer-01>
</div>

---

```