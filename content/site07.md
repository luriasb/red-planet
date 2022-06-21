---
title: RedPlanet Demo Site
description: This is a simple example of a Red Planet site
keywords: demo, red planet, yeah
image: /img/av-logo.png

# Define tus variables debajo de esta linea

headerTitle02: consulting agency for every business
headerSubTitle02: we make difference
headerButtonText02: get started
headerLink02: '#first'
videoEmbed: <iframe width="560" height="315" src="https://www.youtube.com/embed/RLk7Lho7lDo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

siteName: Mi Sitio
siteLogo: /img/av-logo.png

hero01: /img/av-home2-slidebg-2.jpg

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

titleAbout02: We offer marketing and consulting services for businesses
textAbout02: tincidunt elit magnis nulla facilisis sagittis maecenas. Sapien nunced amet ultrices, dolores sit ipsum velit purus aliquet, massa fringilla leo orci. Lorem ipsum dolors sit amet elit magnis amet ultrices purusrfed aliquet. There are many variations of passages of available but the majority have
buttonTextAbout02: Ver más
linkAbout02: https://youtube.com
image02About01: /img/av-o1.jpg
image02About02: /img/av-o2.jpg

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

Texto03: 'we know the importance of delivering the best customer experience.'
Link03: 'http://reference.sketchdaily.net/en'
Boton: get started
    
service13Title: our easy steps
service13Cards:
  - number: '01'
    title: easy starting
    text: lorem ipsum is simply free text available but majority have suffered.
  - number: '02'
    title: quick process
    text: lorem ipsum is simply free text available but majority have suffered.
  - number: '03'
    title: going good
    text: lorem ipsum is simply free text available but majority have suffered.
  - number: '04'
    title: happy ending
    text: lorem ipsum is simply free text available but majority have suffered.

Card07:
  - title: consumer products
    text: 'sed quia magni dolores eos qui ratione voluptatem sequi nesciunt eque porro'
    link: 'http://reference.sketchdaily.net/en'
    image: /img/av-service1.jpg
  - title: adult marketing
    text: 'sed quia magni dolores eos qui ratione voluptatem sequi nesciunt eque porro'
    link: 'http://reference.sketchdaily.net/en'
    image: /img/av-service2.jpg
  - title: banking advising
    text: 'sed quia magni dolores eos qui ratione voluptatem sequi nesciunt eque porro'
    link: 'http://reference.sketchdaily.net/en'
    image: /img/av-service3.jpg
  - title: consumer products
    text: 'sed quia magni dolores eos qui ratione voluptatem sequi nesciunt eque porro'
    link: 'http://reference.sketchdaily.net/en'
    image: /img/av-service15.jpg
  - title: adult marketing
    text: 'sed quia magni dolores eos qui ratione voluptatem sequi nesciunt eque porro'
    link: 'http://reference.sketchdaily.net/en'
    image: /img/av-service16.jpg
  - title: banking advising
    text: 'sed quia magni dolores eos qui ratione voluptatem sequi nesciunt eque porro'
    link: 'http://reference.sketchdaily.net/en'
    image: /img/av-service17.jpg

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
<header-02 :title="headerTitle02" :sub-title="headerSubTitle02" :image="hero01" :button-text="headerButtonText02" :link="headerLink02" :video-embed="videoEmbed"></header-02>
<about-02 id="about02" :title="titleAbout02" :text="textAbout02" :image="image02About01" :button-text="buttonTextAbout02" :image01="image02About02" :image02="image02About02" ></about-02>
<service-12 id="header01" :title="service12Title" :cards="service12Cards" ></service-12>
<banner-03 :text="Texto03" :link="Link03" :button-text="Boton"></banner-03>
<service-13 id="header01" :title="service13Title" :cards="service13Cards" ></service-13>
<service-07 :cards="Card07"></service-07>
<form-01 :text="formText" :image="formImage" :success-message="formSuccessMessage" :failure-message="formFailureMessage" tel body-classes="bg-gray-100" ></form-01>
<footer-02 :first-column-title="firstColumnTitle" :second-column-title="secondColumnTitle" :third-column-title="thirdColumnTitle" :copyright="copyright" :third-column-description="thirdColumnDescription" :first-column-links="firstColumnLinks" :second-column-links01="secondColumnLinks01" :second-column-links02="secondColumnLinks02" :social-links="socialLinks" ></footer-02>
</div>
