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

titleAbout02: We offer marketing and consulting services for businesses
textAbout02: tincidunt elit magnis nulla facilisis sagittis maecenas. Sapien nunced amet ultrices, dolores sit ipsum velit purus aliquet, massa fringilla leo orci. Lorem ipsum dolors sit amet elit magnis amet ultrices purusrfed aliquet. There are many variations of passages of available but the majority have
buttonTextAbout02: Ver más
linkAbout02: https://youtube.com
image02About01: /img/av-o1.jpg
image02About02: /img/av-o1.jpg

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

banner02Title: meet avivon consultancy
banner02Subtitle: We know the importance of delivering the best customer experience.
banner02ButtonText: get started
banner02Link: '#about03'

service13Title: our easy steps
service13Cards:
  - image: /img/icon07.svg
    title: easy starting
    text: lorem ipsum is simply free text available but majority have suffered.
  - image: /img/icon08.svg
    title: quick process
    text: lorem ipsum is simply free text available but majority have suffered.
  - image: /img/icon09.svg
    title: going good
    text: lorem ipsum is simply free text available but majority have suffered.
  - image: /img/icon09.svg
    title: happy ending
    text: lorem ipsum is simply free text available but majority have suffered.

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

  <about-02 id="about02" :title="titleAbout02" :text="textAbout02" :image="image02About01" :button-text="buttonTextAbout02" :image01="image02About02" :image02="image02About02" ></about-02>

  <service-12 id="header01" :title="service12Title" :cards="service12Cards" ></service-12>

  <banner-02 id="banner02" :title="banner02Title" :subtitle="banner02Subtitle" :button-text="banner02ButtonText" :link="banner02Link" ></banner-02>

  <service-13 id="header01" :title="service13Title" :cards="service13Cards" ></service-13>

  <testimonial-01 :title="testimonial01Title" :name="testimonial01Name" :text="testimonial01Text" ></testimonial-01>

  <form-01 :text="formText" :image="formImage" :success-message="formSuccessMessage" :failure-message="formFailureMessage" tel body-classes="bg-gray-100" ></form-01>

  <footer-02 :first-column-title="firstColumnTitle" :second-column-title="secondColumnTitle" :third-column-title="thirdColumnTitle" :copyright="copyright" :third-column-description="thirdColumnDescription" :first-column-links="firstColumnLinks" :second-column-links01="secondColumnLinks01" :second-column-links02="secondColumnLinks02" :social-links="socialLinks" ></footer-02>


</div>
