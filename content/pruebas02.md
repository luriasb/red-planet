---
# Define tus variables debajo de esta linea
banner01: /img/banner01.jpg

Title01: 'our services place a strong impact'
List01:
  - text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  - text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  - text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  - text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '

Title02: 'professional skills'
subtitle02: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
Skill01:
  - text: 'Lorem ipsum '
    percentage: 87
  - text: 'Lorem ipsum2 '
    percentage: 78
  - text: 'Lorem ipsum3 '
    percentage: 54

Title03: 'we offer marketing and consulting services for businesses'
Card03:
  - title: 'large markets'
    text: 'sed quia lipsum dolor sit atur adipiscing elit is nunc quis tellus sed ligula porta ultricies quis nec nec magna neulla.'
    icon: /img/icon01.svg
    link: 'http://reference.sketchdaily.net/en'
    buttonText: 'Click aquí'
  - title: 'strong business'
    text: 'sed quia lipsum dolor sit atur adipiscing elit is nunc quis tellus sed ligula porta ultricies quis nec nec magna neulla.'
    icon: /img/icon03.svg
    link: 'http://reference.sketchdaily.net/en'
Back03:
  - image: /img/banner02.jpg
ImageText03: 'If we truly know and understand how your business works, we will be able to deliver the right creative solutions that will make a big difference. Because in the end our ideas only matter.'

Title05: 'think ahead and boost your business growth'
Text05: there are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or andomised words which don't look even slightly believable. If you are going to use a passage of lorem Ipsum.
Card05:
  - color: '#FF5733'
    title: 'Lorem ipsum '
    link: 'http://reference.sketchdaily.net/en'
    buttonText: 'Click aquí'
  - image: /img/banner02.jpg
  - image: /img/banner02.jpg
  - color: '#FF5733'
    title: 'Lorem ipsum '
    link: 'http://reference.sketchdaily.net/en'
    buttonText: 'Click aquí'

Title06: 'we work in partnership with all the major consultancy & finance experts'
Link06: 'http://reference.sketchdaily.net/en'
Card06:
  - title: 'explore consultancy services'
    buttonText: 'Click aquí'
    image: /img/banner02.jpg
  - title: 'explore consultancy services'
    buttonText: 'Click aquí'
    image: /img/banner02.jpg

Title07: 'Tu sitio'
Card07:
  - title: 'Lorem ipsum '
    text: 'Click aquí'
    link: 'http://reference.sketchdaily.net/en'
    image: /img/banner02.jpg
  - title: 'Lorem ipsum2 '
    text: 'Click aquí'
    link: 'http://reference.sketchdaily.net/en'
    image: /img/banner02.jpg
  - title: 'Lorem ipsum3 '
    text: 'Click aquí'
    link: 'http://reference.sketchdaily.net/en'
    image: /img/banner02.jpg

Card08:
  - title: 'Lorem ipsum '
    text: 'Click aquí'
    image: /img/banner02.jpg
  - title: 'Lorem ipsum 2'
    text: 'Click aquí'
    image: /img/banner02.jpg
  - title: 'Lorem ipsum 3 '
    text: 'Click aquí'
    image: /img/banner02.jpg

Title09: 'Tu sitio'
Card09:
  - title: 'Lorem ipsum '
    text: 'Click aquí'
    image: /img/banner02.jpg
  - title: 'Lorem ipsum 2'
    text: 'Click aquí'
    image: /img/banner02.jpg
  - title: 'Lorem ipsum 3 '
    text: 'Click aquí'
    image: /img/banner02.jpg

Title10: 'Tu sitio'
Card10:
  - title: 'Lorem ipsum '
    image: /img/banner02.jpg
  - title: 'Lorem ipsum 2'
    image: /img/banner02.jpg
  - title: 'Lorem ipsum 3 '
    image: /img/banner02.jpg

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

<!-- Define tus componentes aquí-->
<div>
<service-01 :image="banner01" :title="Title01" :lists="List01"></service-01>
<service-02 :title="Title02" :subtitle="subtitle02" :skills="Skill01" :image="banner01"></service-02>
<service-03 :title="Title03" :cards="Card03" :backgrounds="Back03" :image-text="ImageText03" :image="banner01"></service-03>
<service-05 :title="Title05" :text="Text05" :cards="Card05" :image="banner01"></service-05>
<service-06 :title="Title06" :link="Link06" :cards="Card06"></service-06>
<service-07 :title="Title07" :cards="Card07"></service-07>
<service-08 :cards="Card08"></service-08>
<service-09 :title="Title09" :cards="Card09"></service-09>
<service-10 :title="Title10" :cards="Card10" :image="banner01"></service-10>
<service-11 :title="Title11" :cards="Card11"></service-11>

</div>
