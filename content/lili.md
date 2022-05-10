---
banner01: /img/oq-img4.jpg
banner02: /img/think-img.jpg
Title: our services place a strong impact
List:
  - text: 'tincidunt elit magni nulla facilisis sagittis maecenas'
  - text: 'sapien nunc amet ultrices, dolores sit ipsum'
  - text: 'velit purus aliquet, massa fringilla leo orci'
  - text: 'lorem ipsum dolors sit amet elit magnis'
  - text: 'amet ultrices purus aliquet'

Title02: professional skills
Subtitle02: 'tincidunt elit magnis nulla facilisis sagittis maecenas. sapien nunc amet ultrices dolores sit ipsum.'
Skill01:
  - text: 'consultancy '
    percentage: 98
  - text: 'marketing '
    percentage: 88
  - text: 'technology '
    percentage: 78

Title03: we offer marketing and consulting services for businesses
Card03:
  - title: large markets
    text: 'sed quia lipsum dolor sit atur adipiscing elit is nunc quis tellus sed ligula porta ultricies quis nec nec magna neulla. '
    icon: /img/icon01.svg
    link: 'http://reference.sketchdaily.net/en'
    buttonText: 'Click aquí'
  - title: strong business
    text: 'sed quia lipsum dolor sit atur adipiscing elit is nunc quis tellus sed ligula porta ultricies quis nec nec magna neulla. '
    icon: /img/icon03.svg
    link: 'http://reference.sketchdaily.net/en'
Back03:
  - color: '#ff7e00'
ImageText03: 'If we truly know and understand how your business works, we will be able to deliver the right creative solutions that will make a big difference. Because in the end our ideas only matter.'
nameAbout03: Federica Marquiz
postAbout03: CEO

Title05: think ahead and boost your business growth
Text05: 'there are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised there are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised'
Card05:
  - color: '#ff7e00'
    title: 'explore consultancy services '
    link: 'http://reference.sketchdaily.net/en'
    buttonText: 'Click aquí'
  - image: /img/banner02.jpg
  - image: /img/banner02.jpg
  - color: '#ff7e00'
    title: 'explore consultancy services '
    link: 'http://reference.sketchdaily.net/en'
    buttonText: 'Click aquí'

Title06: we work in partnership with all the major consultancy & finance experts
Link06: 'http://reference.sketchdaily.net/en'
Card06:
  - title: explore consultancy services
    buttonText: 'Click aquí'
    image: /img/banner02.jpg
    link: 'https://v2.tailwindcss.com/docs/font-size'
  - title: explore consultancy services
    buttonText: 'Click aquí'
    image: /img/banner02.jpg
    link: 'https://v2.tailwindcss.com/docs/font-size'

Title07: 'Tu sitio'
Card07:
  - title: consumer products
    text: 'sed quia magni dolores eos qui ratione voluptatem sequi nesciunt eque porro'
    link: 'http://reference.sketchdaily.net/en'
    image: /img/banner02.jpg
  - title: adult marketing
    text: 'sed quia magni dolores eos qui ratione voluptatem sequi nesciunt eque porro'
    link: 'http://reference.sketchdaily.net/en'
    image: /img/banner02.jpg
  - title: banking advising
    text: 'sed quia magni dolores eos qui ratione voluptatem sequi nesciunt eque porro'
    link: 'http://reference.sketchdaily.net/en'
    image: /img/banner02.jpg

Card08:
  - title: consumer products
    text: 'sed quia magni dolores eos qui ratione voluptatem sequi nesciunt eque porro'
    image: /img/icon03.svg
    link: 'http://reference.sketchdaily.net/en'
  - title: banking advising
    text: 'sed quia magni dolores eos qui ratione voluptatem sequi nesciunt eque porro'
    image: /img/icon04.svg
    link: 'http://reference.sketchdaily.net/en'
  - title: adult marketing
    text: 'sed quia magni dolores eos qui ratione voluptatem sequi nesciunt eque porro'
    image: /img/icon05.svg
    link: 'http://reference.sketchdaily.net/en'

Title09: 'Tu sitio'
Card09:
  - text: 'get the best consultancy from your experts advisor.'
    image: /img/icon05.svg
    link: 'http://reference.sketchdaily.net/en'
  - text: 'get the best consultancy from your experts advisor.'
    image: /img/icon05.svg
    link: 'http://reference.sketchdaily.net/en'
  - text: 'get the best consultancy from your experts advisor.'
    image: /img/icon05.svg
    link: 'http://reference.sketchdaily.net/en'

Title10: 'Tu sitio'
Card10:
  - text: get the best consultancy from your experts advisor.
    image: /img/icon03.svg
    link: 'http://reference.sketchdaily.net/en'
  - text: get the best consultancy from your experts advisor.
    image: /img/icon01.svg
    link: 'http://reference.sketchdaily.net/en'
  - text: get the best consultancy from your experts advisor.
    image: /img/icon04.svg
    link: 'http://reference.sketchdaily.net/en'
videos: 'https://www.youtube.com/watch?v=Ohr42NcnRSE&ab_channel=ServidoresSeguros'

Title11: 'Tu sitio'
Card11:
  - title: 'Lorem ipsum '
    text: 'Lorem ipsum '
    fb: 'http://reference.sketchdaily.net/en'
    ig: 'http://reference.sketchdaily.net/en'
    twitter: 'http://reference.sketchdaily.net/en'
    image: /img/banner02.jpg
  - title: 'Lorem ipsum 2'
    text: 'Lorem ipsum 2'
    fb: 'http://reference.sketchdaily.net/en'
    ig: 'http://reference.sketchdaily.net/en'
    image: /img/banner02.jpg
  - title: 'Lorem ipsum 3'
    text: 'Lorem ipsum 3'
    fb: 'http://reference.sketchdaily.net/en'
    image: /img/banner02.jpg
  - title: 'Lorem ipsum 4'
    text: 'Lorem ipsum 4'
    fb: 'http://reference.sketchdaily.net/en'
    ig: 'http://reference.sketchdaily.net/en'
    twitter: 'http://reference.sketchdaily.net/en'
    image: /img/banner02.jpg
---
​
<!-- Define tus componentes aquí-->
<div>

<service-01 :image="banner01" :title="Title" :lists="List"></service-01>
<service-02 :title="Title02" :subtitle="Subtitle02" :skills="Skill01" :image="banner01"></service-02>
<service-03 :title="Title03" :cards="Card03" :backgrounds="Back03" :image-text="ImageText03" :image="banner01" :name="nameAbout03" :post="postAbout03"></service-03>
<service-05 :title="Title05" :text="Text05" :cards="Card05" :image="banner02"></service-05>
​<service-06 :title="Title06" :link="Link06" :cards="Card06"></service-06>
<service-07 :title="Title07" :cards="Card07"></service-07>
<service-08 :cards="Card08"></service-08>
<service-09 :title="Title09" :cards="Card09"></service-09>
<service-10 :title="Title10" :cards="Card10" :image="banner01" :video="videos"></service-10>
<service-11 :title="Title11" :cards="Card11"></service-11>
</div>