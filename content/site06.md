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

mision1: get the best consultancy from your experts advisor.
text1: 'tincidunt elit magnis nulla facilisis sagittis tincidunt elit magnis nulla facilisis sagittis tincidunt elit magnis nulla facilisis sagittis tincidunt elit magnis nulla facilisis sagittis'
text2: 'tincidunt elit magnis nulla facilisis sagittis tincidunt elit magnis nulla facilisis sagittis tincidunt elit magnis nulla facilisis sagittis tincidunt elit magnis nulla facilisis sagittis'

About08: 'trusted & professional advisors for your business'
Logo08: /img/av-icon4.png
Image08: /img/av-trusted-img.jpg
Boton08: get started
Link08: 'http://reference.sketchdaily.net/en'

Card08:
  - title: consumer products
    text: 'sed quia magni dolores eos qui ratione voluptatem sequi nesciunt eque porro'
    image: /img/av-icon1.png
    link: 'http://reference.sketchdaily.net/en'
  - title: banking advising
    text: 'sed quia magni dolores eos qui ratione voluptatem sequi nesciunt eque porro'
    image: /img/av-icon2.png
    link: 'http://reference.sketchdaily.net/en'
  - title: adult marketing
    text: 'sed quia magni dolores eos qui ratione voluptatem sequi nesciunt eque porro'
    image: /img/av-icon3.png
    link: 'http://reference.sketchdaily.net/en'
  - title: consumer products
    text: 'sed quia magni dolores eos qui ratione voluptatem sequi nesciunt eque porro'
    image: /img/av-icon1.png
    link: 'http://reference.sketchdaily.net/en'
  - title: banking advising
    text: 'sed quia magni dolores eos qui ratione voluptatem sequi nesciunt eque porro'
    image: /img/av-icon2.png
    link: 'http://reference.sketchdaily.net/en'
  - title: adult marketing
    text: 'sed quia magni dolores eos qui ratione voluptatem sequi nesciunt eque porro'
    image: /img/av-icon3.png
    link: 'http://reference.sketchdaily.net/en'

banner01: /img/av-oq-img4.jpg
Title: our services place a strong impact
List:
  - text: 'tincidunt elit magni nulla facilisis sagittis maecenas'
  - text: 'sapien nunc amet ultrices, dolores sit ipsum'
  - text: 'velit purus aliquet, massa fringilla leo orci'
  - text: 'lorem ipsum dolors sit amet elit magnis'
  - text: 'amet ultrices purus aliquet'

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
<mission-01 :title="mision1" :text1="text1" :text2="text2" :image="banner01"></mission-01>
<about-08 :title="About08" :logo="Logo08" :image="Image08" :button-text="Boton08" :link="Link08" parallax></about-08>
<service-08 :cards="Card08"></service-08>
<service-01 :image="banner01" :title="Title" :lists="List"></service-01>
<footer-02 :first-column-title="firstColumnTitle" :second-column-title="secondColumnTitle" :third-column-title="thirdColumnTitle" :copyright="copyright" :third-column-description="thirdColumnDescription" :first-column-links="firstColumnLinks" :second-column-links01="secondColumnLinks01" :second-column-links02="secondColumnLinks02" :social-links="socialLinks" ></footer-02>
</div>
