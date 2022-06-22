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

Service05: /img/av-think-img.jpg
Title05: think ahead and boost your business growth
Text05: 'there are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised there are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised'
Card05:
  - color: '#ff7e00'
    title: 'explore consultancy services '
    link: 'http://reference.sketchdaily.net/en'
    buttonText: 'Click aquí'
  - image: /img/av-service33.jpg
  - image: /img/av-think-img3.jpg
  - color: '#ff7e00'
    title: 'explore consultancy services '
    link: 'http://reference.sketchdaily.net/en'
    buttonText: 'Click aquí'

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

Title02: 'testimonials'
Card09:
  - text: 'Lorem ipsum solor sit amet, consecterur adisclipng. elit culpa aut commodi arcgghiteco deletus'
    avatar: /img/av-team1.jpg
    name: 'jessica brown'
    occupation: 'director'
  - text: 'Lorem ipsum solor sit amet, consecterur adisclipng. elit culpa aut commodi arcgghiteco deletus'
    avatar: /img/av-team2.jpg
    name: 'jessica brown'
    occupation: 'director'
  - text: 'Lorem ipsum solor sit amet, consecterur adisclipng. elit culpa aut commodi arcgghiteco deletus'
    avatar: /img/av-team3.jpg
    name: 'jessica brown'
    occupation: 'director'

Title11: team members
Card11:
  - title: 'kevin martin '
    text: 'developer '
    fb: 'http://reference.sketchdaily.net/en'
    ig: 'http://reference.sketchdaily.net/en'
    twitter: 'http://reference.sketchdaily.net/en'
    image: /img/av-team1.jpg
  - title: 'jessica brown'
    text: 'designer'
    fb: 'http://reference.sketchdaily.net/en'
    ig: 'http://reference.sketchdaily.net/en'
    image: /img/av-team2.jpg
  - title: 'mike hardson'
    text: 'photographer'
    fb: 'http://reference.sketchdaily.net/en'
    image: /img/av-team3.jpg
  - title: 'camila rose'
    text: 'manager'
    fb: 'http://reference.sketchdaily.net/en'
    ig: 'http://reference.sketchdaily.net/en'
    twitter: 'http://reference.sketchdaily.net/en'
    image: /img/av-team4.jpg

Aliados:
  - ally: /img/av-e-logo.png
  - ally: /img/av-e-logo.png
  - ally: /img/av-e-logo.png
  - ally: /img/av-e-logo.png

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
<service-05 :title="Title05" :text="Text05" :cards="Card05" :image="Service05"></service-05>
<service-08 :cards="Card08"></service-08>
<testimonial-02 :title="Title02" :cards="Card09"></testimonial-02>
<service-11 :title="Title11" :cards="Card11"></service-11>
<service-16 :cards="Aliados" ></service-16>
<form-01 :text="formText" :image="formImage" :success-message="formSuccessMessage" :failure-message="formFailureMessage" tel body-classes="bg-gray-100" ></form-01>
<footer-02 :first-column-title="firstColumnTitle" :second-column-title="secondColumnTitle" :third-column-title="thirdColumnTitle" :copyright="copyright" :third-column-description="thirdColumnDescription" :first-column-links="firstColumnLinks" :second-column-links01="secondColumnLinks01" :second-column-links02="secondColumnLinks02" :social-links="socialLinks" ></footer-02>
</div>
