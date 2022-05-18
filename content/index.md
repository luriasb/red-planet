---
# Define tus variables debajo de esta linea
banner01: /img/oq-img4.jpg

About01: we offer marketing and consulting services for businesses
Text01: 'tincidunt elit magnis nulla facilisis sagittis maecenas. Sapien nunced amet ultrices, dolores sit ipsum velit purus aliquet, massa fringilla leo orci. Lorem ipsum dolors sit amet elit magnis amet ultrices purusrfed aliquet. There are many variations of passages of available but the majority have suffered'

Title02: making differences
Service02:
  - title: 'business growth'
    text: 'sed quia magni dolores eos qui ratione voluptatem sequi nesciunt eque porro.'
    image: /img/icon07.svg
  - title: 'finance advice'
    text: 'sed quia magni dolores eos qui ratione voluptatem sequi nesciunt eque porro.'
    image: /img/icon08.svg
  - title: 'global solution'
    text: 'sed quia magni dolores eos qui ratione voluptatem sequi nesciunt eque porro.'
    image: /img/icon09.svg

Title03: meet avivon consultancy
Text03: 'We know the importance of delivering the best customer experience.'
boton: 'get started'
link: 'https://www.svgrepo.com/vectors/setting/2'

Title04: our easy steps
Card04:
  - title: 'easy starting'
    text: 'sed quia magni dolores eos qui ratione voluptatem sequi nesciunt eque porro.'
    number: '01'
  - title: 'quick process'
    text: 'sed quia magni dolores eos qui ratione voluptatem sequi nesciunt eque porro.'
    number: '02'
  - title: 'going good'
    text: 'sed quia magni dolores eos qui ratione voluptatem sequi nesciunt eque porro.'
    number: '03'
  - title: 'happy ending'
    text: 'sed quia magni dolores eos qui ratione voluptatem sequi nesciunt eque porro.'
    number: '04'

Title05: '"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution"'
Name05: Shirley Smith
Text05: 'avivon founder'

---

<!-- Define tus componentes aquí-->
<div>

<about-05 :title="About01" :subtitle="Text01"></about-05>
<service-12 :title="Title02" :cards="Service02"></service-12>
<banner-02 :title="Title03" :sub-title="Text03" :button-text="boton" :link="link"></banner-02>
<service-13 :title="Title04" :cards="Card04"></service-13>
<testimonial-01 :title="Title05" :text="Text05" :name="Name05" ></testimonial-01>
</div>