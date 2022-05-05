---
# Define tus variables debajo de esta linea
pageTitle: IndeXXX
pageDescription: This is a page description boy!

headerTitle: Title
headerSubTitle: Extremely very long subtitle

headerTitle01: Consulting agency
headerSubTitle01: We make difference
headerButtonText01: Ver másss
headerLink01: https://youtube.com

videoEmbed: <iframe width="560" height="315" src="https://www.youtube.com/embed/RLk7Lho7lDo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

siteName: Mi Sitio
siteLogo: /img/logo.png

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

title05: Titulo 1
text05: 'If we truly know and understand how your business works, we will be able to deliver the right creative solutions that will make a big difference. Because in the end our ideas only matter.'
cartas:
  - color: '#ff7e00'
    title: card01
    link: 'https://nuxt-avivon.netlify.app/'
  - title: card02
    image: /img/hero01.jpg
    link: 'https://nuxt-avivon.netlify.app/'
  - image: /img/hero01.jpg
    title: card03
    link: 'https://nuxt-avivon.netlify.app/'
  - color: '#ff7e00'
    title: card04
    link: 'https://nuxt-avivon.netlify.app/'

titleAbout01: a focused team with a specialized skills
subTitleAbout01: about avivon consultancy
textAbout01: tincidunt elit magnis nulla facilisis sagittis m aecenas. sapien nunc amet ultrices, doloresi ipsum velit purus aliquet, massa fringilla leo orci. lorem ipsum dolors sit amet elit magni amet ultrices purus aliquet.
nameAbout01: Federica Marquiz
postAbout01: CEO
imageAbout01: /img/oq-img2.jpg

titleAbout02: We offer marketing and consulting services for businesses
textAbout02: tincidunt elit magnis nulla facilisis sagittis maecenas. Sapien nunced amet ultrices, dolores sit ipsum velit purus aliquet, massa fringilla leo orci. Lorem ipsum dolors sit amet elit magnis amet ultrices purusrfed aliquet. There are many variations of passages of available but the majority have
buttonTextAbout02: Ver más
linkAbout02: https://youtube.com
image01About02: /img/o1.jpg
image02About02: /img/o1.jpg

titleAbout03: We are trusted by more than 8,700 clients
text01About03: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde tempora cum aspernatur laudantium est, amet corporis quam deleniti eius debitis ipsa quasi tenetur. Itaque dolorem facere dolore saepe dolores quaerat.
text02About03: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde tempora cum aspernatur laudantium est, amet corporis quam deleniti eius debitis ipsa quasi tenetur. Itaque dolorem facere dolore saepe dolores quaerat.
imageAbout03: /img/service14.jpg

textAbout04: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde tempora cum aspernatur laudantium est, amet corporis quam deleniti eius debitis ipsa quasi tenetur. Itaque dolorem facere dolore saepe dolores quaerat.
imageAbout04: /img/service14.jpg
nameAbout04: Federica Marquiz
postAbout04: CEO

icon01: /img/icon01.svg
---

<!-- Define tus componentes aquí-->
<div>
  <navigation-02 :site-name="siteName" :site-logo="siteLogo" :links="links" :social-links="socialLinks" :phone="phone" body-classes="border-opacity-50 border-gray-500 fixed top-0 left-0 w-full"></navigation-02>
  <!-- <header-02 id="header02" :title="headerTitle" :sub-title="headerSubTitle" :image="hero01" :button-text="headerButtonText01" :link="headerLink01" ></header-02> -->
  <!-- <header-02 id="header02" :title="headerTitle" :sub-title="headerSubTitle" :image="hero01" :video-embed="videoEmbed" :button-text="headerButtonText01" :link="headerLink01" ></header-02> -->
  <!-- <header-01 id="header01" :title="headerTitle01" :sub-title="headerSubTitle01" :image="hero01" :button-text="headerButtonText01" :link="headerLink01" ></header-01> -->
  <header-03 id="header03" :title="headerTitle" :sub-title="headerSubTitle" :image="hero01" :button-text="headerButtonText01" :link="headerLink01"></header-03>
  <!-- <header-04 id="header04" :title="headerTitle" :sub-title="headerSubTitle" :image="hero01" ></header-04> -->
  <about-01 :title="titleAbout01" :sub-title="subTitleAbout01" :image="imageAbout01" :text="textAbout01" :name="nameAbout01" :post="postAbout01" :image="hero01" ></about-01>
  <about-02 :title="titleAbout02" :text="textAbout02" :image="imageAbout01" :text="textAbout01" :button-text="buttonTextAbout02" :image01="image01About02" :image02="image02About02" ></about-02>
  <about-03  :title="titleAbout03" :text01="text01About03" :text02="text02About03" :image="imageAbout03"></about-03>
  <about-04 :text="textAbout04" :image="imageAbout04" :name="nameAbout04" :post="postAbout04"></about-04>
  <!-- <service-01 id="header01" :title="headerTitle" :sub-title="headerSubTitle" :image="hero01" ></service-01>
  <service-05 :title="title05" :text="text05" :cards="cartas"></service-05>
  <service-10 id="header01" :title="headerTitle" :sub-title="headerSubTitle" :image="hero01" ></service-10>
  <service-09 id="header01" :title="headerTitle" :sub-title="headerSubTitle" :image="hero01" ></service-09> -->

  <!-- <service-03></service-03> -->
</div>
