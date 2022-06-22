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

Card15:
  - text: 'extra brilliant'
    title: top-notch sonsultation provder. 
    avatar: /img/av-icon1.png
    image: /img/av-service7.jpg
    link: 'http://reference.sketchdaily.net/en'
    button: 'read more'
  - text: 'extra brilliant'
    title: top-notch sonsultation provder. 
    avatar: /img/av-icon2.png
    image: /img/av-service8.jpg
    link: 'http://reference.sketchdaily.net/en'
    button: 'read more'
  - text: 'extra brilliant'
    title: top-notch sonsultation provder. 
    avatar: /img/av-icon3.png
    image: /img/av-service9.jpg
    link: 'http://reference.sketchdaily.net/en'
    button: 'read more'
  - text: 'extra brilliant'
    title: top-notch sonsultation provder. 
    avatar: /img/av-icon4.png
    image: /img/av-service10.jpg
    link: 'http://reference.sketchdaily.net/en'
    button: 'read more'

banner02Title: meet avivon consultancy
banner02Subtitle: We know the importance of delivering the best customer experience.
banner02ButtonText: get started
banner02Link: '#about03'

Title10: why choose avivon?
ImageService10: /img/av-choose-img.png
Card10:
  - text: get the best consultancy from your experts advisor.
    image: /img/av-icon1.png
    link: 'http://reference.sketchdaily.net/en'
  - text: get the best consultancy from your experts advisor.
    image: /img/av-icon2.png
    link: 'http://reference.sketchdaily.net/en'
  - text: get the best consultancy from your experts advisor.
    image: /img/av-icon3.png
    link: 'http://reference.sketchdaily.net/en'
videos: 'https://www.youtube.com/watch?v=Ohr42NcnRSE&ab_channel=ServidoresSeguros'

About07: 'numbers speak'
Card07:
  - text: '678'
    image: /img/av-icon1.png
    description: 'businesses chooses avivon agency'
  - text: '908'
    image: /img/av-icon2.png
    description: 'projects are completed by avivon'
  - text: '908'
    image: /img/av-icon3.png
    description: 'customers are satisfied with our services'

Aliados:
  - ally: /img/av-e-logo.png
  - ally: /img/av-e-logo.png
  - ally: /img/av-e-logo.png
  - ally: /img/av-e-logo.png

testimonial01Title: lorem ipsum is simply free text available but majority have suffered.
testimonial01Name: Shirley avivon
testimonial01Text: cofounder

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
<header-01 id="header01" :title="headerTitle01" :sub-title="headerSubTitle01" :image="hero01" :button-text="headerButtonText01" :link="headerLink01" ></header-01>
<service-05 :title="Title05" :text="Text05" :cards="Card05" :image="Service05"></service-05>
<service-15 :cards="Card15"></service-15>
<banner-02 id="banner02" :title="banner02Title" :subtitle="banner02Subtitle" :button-text="banner02ButtonText" :link="banner02Link" ></banner-02>
<service-10 :title="Title10" :cards="Card10" :image="ImageService10" :video="videos"></service-10>
<about-07 :title="About07" :cards="Card07" parallax></about-07>
<testimonial-01 :title="testimonial01Title" :name="testimonial01Name" :text="testimonial01Text" ></testimonial-01>
<service-16 :cards="Aliados" ></service-16>
<form-01 :text="formText" :image="formImage" :success-message="formSuccessMessage" :failure-message="formFailureMessage" tel body-classes="bg-gray-100" ></form-01>

<footer-02 :first-column-title="firstColumnTitle" :second-column-title="secondColumnTitle" :third-column-title="thirdColumnTitle" :copyright="copyright" :third-column-description="thirdColumnDescription" :first-column-links="firstColumnLinks" :second-column-links01="secondColumnLinks01" :second-column-links02="secondColumnLinks02" :social-links="socialLinks" ></footer-02>


</div>
