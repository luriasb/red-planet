---
#

title: RedPlanet Demo Site
description: This is a simple example of a Red Planet site
keywords: demo, red planet, yeah
image: /img/av-logo.png

# Define tus variables debajo de esta linea

headerTitle01: Consulting agency for every business
headerSubTitle01: We make difference
headerButtonText01: get started
headerLink01: '#first'

siteName: Mi Sitio
siteLogo: /img/av-logo.png

hero01: /img/av-hero_home_01.jpg

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

banner02Title: meet avivon consultancy
banner02Subtitle: We know the importance of delivering the best customer experience.
banner02ButtonText: get started
banner02Link: '#about03'

testimonial01Title: lorem ipsum is simply free text available but majority have suffered.
testimonial01Name: Shirley avivon
testimonial01Text: cofounder

Aliados:
  - ally: /img/av-e-logo.png
  - ally: /img/av-e-logo.png
  - ally: /img/av-e-logo.png
  - ally: /img/av-e-logo.png

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
<header-01 id="header01" :title="headerTitle01" :sub-title="headerSubTitle01" :image="hero01" :button-text="headerButtonText01" :link="headerLink01" ></header-01>
<about-06 :image="banner01" :title="Title" :subtitle="Subtitle" :content="Contenido" :name="Name" :post="Post" :icon="Icono" ></about-06>
<service-14 :cards="Card14"></service-14>
<banner-02 id="banner02" :title="banner02Title" :subtitle="banner02Subtitle" :button-text="banner02ButtonText" :link="banner02Link" ></banner-02>
<testimonial-01 :title="testimonial01Title" :name="testimonial01Name" :text="testimonial01Text" ></testimonial-01>
<service-16 :cards="Aliados" ></service-16>
<footer-02 :first-column-title="firstColumnTitle" :second-column-title="secondColumnTitle" :third-column-title="thirdColumnTitle" :copyright="copyright" :third-column-description="thirdColumnDescription" :first-column-links="firstColumnLinks" :second-column-links01="secondColumnLinks01" :second-column-links02="secondColumnLinks02" :social-links="socialLinks" ></footer-02>
</div>
