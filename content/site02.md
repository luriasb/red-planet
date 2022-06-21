---
title: RedPlanet Demo Site
description: This is a simple example of a Red Planet site
keywords: demo, red planet, yeah
image: /img/av-logo.png

# Define tus variables debajo de esta linea

headerTitle01: Finance & consulting business
headerSubTitle01: Sed quia lipsum dolor sit atur adipiscing elit is nunc quia tellus sed ligula porta ultricies.
headerButtonText01: get started
headerLink01: '#first'

siteName: Mi Sitio
siteLogo: /img/av-logo.png

hero01: /img/av-home3-slidebg-1.jpg

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

banner01: /img/av-oq-img2.jpg
Icono: /img/av-icon5.png
Title: a focused team with a specialized skills
Subtitle: About avison consultancy
Contenido: "tincidunt elit magnis nulla facilisis sagittis maecenas.sapien nunc amet ultrices, doloresi ipsum velit purus aliquet, massa fringilla leo orci. lorem ipsum dolors sit amet elit magni amet ultrices purus aliquet."
Name: Jessica Brown
Post: founder of avivon

Card14:
  - title: thought leadership
    text: 'substancial business growth.'
    link: 'http://reference.sketchdaily.net/en'
    image: /img/av-service11.jpg
  - title: risk management
    text: 'financial marketing advice.'
    link: 'http://reference.sketchdaily.net/en'
    image: /img/av-service12.jpg
  - title: business strategy
    text: 'research beyond the business.'
    link: 'http://reference.sketchdaily.net/en'
    image: /img/av-service13.jpg
  - title: super consultants
    text: 'top-notch consultation provider.'
    link: 'http://reference.sketchdaily.net/en'
    image: /img/av-service31.jpg
  - title: skilled & professional
    text: 'build digital campaign brands.'
    link: 'http://reference.sketchdaily.net/en'
    image: /img/av-service32.jpg
  - title: business growth
    text: 'businesses large and small.'
    link: 'http://reference.sketchdaily.net/en'
    image: /img/av-service33.jpg
  - title: super consultants
    text: 'quality of graphics design.'
    link: 'http://reference.sketchdaily.net/en'
    image: /img/av-service34.jpg
  - title: marketing rates
    text: 'mission to create a future.'
    link: 'http://reference.sketchdaily.net/en'
    image: /img/av-service35.jpg
  - title: business technology
    text: 'technology creates jobs.'
    link: 'http://reference.sketchdaily.net/en'
    image: /img/av-service36.jpg

About08: 'trusted & professional advisors for your business'
Logo08: /img/av-icon4.png
Image08: /img/av-trusted-img.jpg
Boton08: get started
Link08: 'http://reference.sketchdaily.net/en'

service12Title: making differences
service12Cards:
  - image: /img/icon07.svg
    title: business growth
    text: sed quia magni dolores eos qui ratione voluptatem sequi nesciunt eque porro.
  - image: /img/icon08.svg
    title: finance advice
    text: sed quia magni dolores eos qui ratione voluptatem sequi nesciunt eque porro.
  - image: /img/icon09.svg
    title: global solution
    text: sed quia magni dolores eos qui ratione voluptatem sequi nesciunt eque porro.

formText: let’s make a call request now.
formImage: /img/clta-img.jpg
formSuccessMessage: Se ha enviado con exito.
formFailureMessage: Ha habido un problema.

firstColumnTitle: our address
secondColumnTitle: extra links
thirdColumnTitle: sign up for email alerts
thirdColumnDescription: subscribe for latest articles and resources
firstColumnLinks:
  - text: '888 999 0000'
    link: 'tel:888 999 0000'
    type: 'phone'
  - text: 'help@redplanet.com.mx'
    link: 'mailto:help@redplanet.com.mx'
    type: 'mail'
  - text: 'Servicios855 road, broklyn street, new york 600'
    link: ''
    type: 'address'
secondColumnLinks01:
  - text: about
    link: '#'
  - text: careers
    link: '#'
  - text: our team
    link: '#'
  - text: approach
    link: '#'
  - text: case studies
    link: '#'
secondColumnLinks02:
  - text: services
    link: '#'
  - text: locations
    link: '#'
  - text: clients
    link: '#'
  - text: help
    link: '#'
  - text: contact
    link: '#'

copyright: '©copyright 2020 by Layerdrops.com'
---

<!-- Define tus componentes aquí-->
<div>
<navigation-01 :site-name="siteName" :site-logo="siteLogo" :links="links" :social-links="socialLinks" :phone="phone" body-classes="border-opacity-50 border-gray-500 fixed top-0 left-0 w-full"></navigation-01>
<header-03 :title="headerTitle01" :sub-title="headerSubTitle01" :image="hero01" :button-text="headerButtonText01" :link="headerLink01" ></header-03>
<about-06 :image="banner01" :title="Title" :subtitle="Subtitle" :content="Contenido" :name="Name" :post="Post" :icon="Icono" ></about-06>
<service-14 :cards="Card14"></service-14>
<about-08 :title="About08" :logo="Logo08" :image="Image08" :button-text="Boton08" :link="Link08" parallax></about-08>
<service-12 :title="service12Title" :cards="service12Cards" ></service-12>
<form-01 :text="formText" :image="formImage" :success-message="formSuccessMessage" :failure-message="formFailureMessage" tel body-classes="bg-gray-100" ></form-01>
<footer-02 :first-column-title="firstColumnTitle" :second-column-title="secondColumnTitle" :third-column-title="thirdColumnTitle" :copyright="copyright" :third-column-description="thirdColumnDescription" :first-column-links="firstColumnLinks" :second-column-links01="secondColumnLinks01" :second-column-links02="secondColumnLinks02" :social-links="socialLinks" ></footer-02>
</div>
