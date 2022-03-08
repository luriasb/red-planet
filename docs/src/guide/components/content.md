---
name: Bloques de contenido
title: Bloques de contenido

# variables

content01Text: 'Este es un gran lugar para la misión de tu empresa. También funciona bastante bien para resaltar un breve mensaje que cierre con una "llamada a la acción".'

content02Title: ACERCA TU EMPRESA
content02Text1: "A las personas les gusta conocer la forma en la que trabajan las empresas. Por esta razón existe este espacio, para que hables sobre qué hace tu empresa. Además, es una gran oportunidad para decirle a la gente qué ofreces, en qué te diferencias de los demás y sobre todo, por qué eres la mejor opción para el público.

Aprovecha para hablar sobre las motivaciones que tiene tu empresa y de tus procesos para ofrecer productos o servicios de calidad. Puedes mencionar tus compromisos con tus clientes para que confíen en tu equipo y en tu marca."
content02Text2: "Usa este espacio para hablar sobre tu experiencia. Cuéntale a la gente cuántos años llevas en el mercado y cómo has evolucionado para brindar mejores experiencias a tus clientes. También puedes hablar sobre tu trabajo en equipo y tus procesos para rendir mejores resultados. Piensa en todas esas cosas que te gustaría que tu público conociera sobre tu empresa y de todo el esfuerzo detrás de lo que ofreces para cautivarlos. Este espacio es una oportunidad para dar a conocer lo que casi nadie sabe de tu negocio y puedes aprovecharlo de forma positivaaa."

servicesTitle: TUS SERVICIOS
services:
  - title: Servicio 1
    text: 'Piensa en tu producto o servicio principal, ese debe de ser el primero de esta lista y es el que podrás describir aquí mismo.'
  - title: Servicio 2
    text: 'Ordena tus productos o servicios en la prioridad que más te parezca adecuada y recuerda que deberás describir cada uno de forma muy breve.'
  - title: Servicio 3
    text: 'La importancia de describir tus productos o servicios hace una gran diferencia para que tus posibles clientes se interesen en lo que tu empresa les puede ofrecer.'
  - title: Servicio 4
    text: 'Piensa en cómo te gustaría presentar tus productos o servicios. Descríbelos con palabras clave o frases cortas que te ayuden a ti y al público a identificarlos.'
  - title: Servicio 5
    text: 'Además de descripciones de tus productos o servicios, también puedes usar preguntas para llegar a tus posibles clientes, por ejemplo "¿Tienes problema con...?" Nosotros podemos ayudarte. Aprovecha cada uno.'

contactTitle: 'Ubicación y contacto'
contactAdress: 'Tu calle No. 100 Zona de la ciudad. Tu ciudad.'
contactMail: 'info@tuempresa.com'
contactTel: '55 5555 5555'
---

# Bloques de contenido

Componentes para mostrar distintos tipos de contenidos


## Content 01

Contenido que muestra una párrafo de texto

### Imagen

![Content 01](~@assets/content-01.png "Content 01")

### Código

```
---
content01Text: 'Este es un gran lugar para la misión de tu empresa.
También funciona bastante bien para resaltar un breve mensaje que cierre con una "llamada a la acción".'
---

<content-01 id="mision" :text="content01Text"></content-01>

```

#### Parámetros

| Nombre       | Descripción        | Tipo |
| -----------  | ----------- | ----------- |
| content01Text| Texto a mostrar    | String |

### Link

[Link](https://redplanet.devlez.com/lodestar#mision)


## Content 02

Contenido que muestra dos bloques de texto

### Imagen

![Content 02](~@assets/content-02.png "Content 02")

### Código

```
---
content02Title: ACERCA TU EMPRESA
content02Text1: "A las personas les gusta conocer la forma en la que trabajan las empresas.
Por esta razón existe este espacio, para que hables sobre qué hace tu empresa.
Además, es una gran oportunidad para decirle a la gente qué ofreces, en qué te diferencias de los demás y sobre todo,
por qué eres la mejor opción para el público.

Aprovecha para hablar sobre las motivaciones que tiene tu empresa y de tus
procesos para ofrecer productos o servicios de calidad. Puedes mencionar tus
compromisos con tus clientes para que confíen en tu equipo y en tu marca."
content02Text2: "Usa este espacio para hablar sobre tu experiencia. Cuéntale a
la gente cuántos años llevas en el mercado y cómo has evolucionado para brindar mejores
experiencias a tus clientes. También puedes hablar sobre tu trabajo en equipo"
---

<content-02 id="acerca" :title="content02Title" :text1="content02Text1" :text2="content02Text2" ></content-02>

```

#### Parámetros

| Nombre      | Descripción        | Tipo |
| ----------- | ----------- | ----------- |
| title       |Título de la sección       | String|
| text01      |Contenido del primer bloque de texto      | String|
| text02      | Contenido del segundo bloque de texto     | String|

### Link

[Link](https://redplanet.devlez.com/lodestar#acerca)

## Content 03

Contenido ideal para mostrar servicios

### Imagen

![Content 03](~@assets/content-03.png "Content 03")

### Código

```
---
servicesTitle: TUS SERVICIOS
services:
  - title: Servicio 1
    text: 'Piensa en tu producto o servicio principal, ese debe de ser el primero de esta lista y es el que podrás describir aquí mismo.'
  - title: Servicio 2
    text: 'Ordena tus productos o servicios en la prioridad que más te parezca adecuada y recuerda que deberás describir cada uno de forma muy breve.'
  - title: Servicio 3
    text: 'La importancia de describir tus productos o servicios hace una gran diferencia para que tus posibles clientes se interesen en lo que tu empresa les puede ofrecer.'
  - title: Servicio 4
    text: 'Piensa en cómo te gustaría presentar tus productos o servicios. Descríbelos con palabras clave o frases cortas que te ayuden a ti y al público a identificarlos.'
  - title: Servicio 5
    text: 'Además de descripciones de tus productos o servicios, también puedes usar preguntas para llegar a tus posibles clientes, por ejemplo "¿Tienes problema con...?" Nosotros podemos ayudarte. Aprovecha cada uno.'

banner02: /img/banner02.jpg
---

<content-03 id="servicios" :title="servicesTitle" :services="services" :image="banner02" parallax></content-03>

```

#### Parámetros

| Nombre      | Tipo        | Descripción |
| ----------- | ----------- | ----------- |
| title       |  Título de la sección    | String |
| services    |  Arreglo con el contenido de los servicios     | Array |
| image       |  Ruta a la imagen de fondo     |  String|
| parallax    |  Define si la imagen de fondo tendrá efecto parallax    |  Boolean|

### Link

[Link](https://redplanet.devlez.com/lodestar#servicios)


## Content 04

Contenido ideal para mostrar un mapa y datos de contacto

### Imagen

![Content 04](~@assets/content-04.png "Content 04")

### Imagen

```
---
contactTitle: 'Ubicación y contacto'
contactAdress: 'Tu calle No. 100 Zona de la ciudad. Tu ciudad.'
contactMail: 'info@tuempresa.com'
contactTel: '55 5555 5555'
contactMaps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15057.179229334852!2d-99.02394515!3d19.356383549999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fd4fd1c54e5b%3A0xa13a0d882c49b856!2sEscuela%20Secundaria%20T%C3%A9cnica%20N%C2%B0%2081%20%22Justo%20Sierra%20M%C3%A9ndez%22!5e0!3m2!1ses!2smx!4v1646761024944!5m2!1ses!2smx" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
---

<content-04 id="contacto" :title="contactTitle"  :mail="contactMail" :tel="contactTel" :google-maps-url="contactMaps"></content-04>

```

### Importante

En este componente vemos una variable llamada `contactMaps`, esta sirve para mostrar un mapa con la ubicación de la empresa. Para poder utilizar esta función debemos:

1. Ir a Google Maps y buscar la ubicación deseada. Una vez en Google Maps buscaremos el botón __"Compartir"__ y le daremos click.

![Content 04-02](~@assets/content-04-02.png "Content 04-02")

2. Nos saldrá una ventana y buscamos el botón __"Insertar un mapa"__, le damos click y nos saldrá una parte que contiene un pequeño código y un botón que dice __"Copiar Html"__. Le damos click al botón `Copiar Html` y regresamos a nuestro archivo `index.md`.

![Content 04-03](~@assets/content-04-03.png "Content 04-03")

3. Una vez dentro de nuestro index, buscamos nuestra variable __"contactMaps"__ y pegamos el código pegado desde Google Maps. Aquí veremos que nuestro código tiene dos propiedades, una llamada __width__ y otra llamada __height__. Estas dos propiedades deben ser eliminadas para no interferir en la configuración de nuestro mapa.

![Content 04-04](~@assets/content-04-04.png "Content 04-04")

4. Una vez borradas estas propiedades, nuestro código quedaría así:

![Content 04-05](~@assets/content-04-05.png "Content 04-05")

5. Y en nuestro sitio quedaría así: 

![Content 04-06](~@assets/content-04-06.png "Content 04-06")

#### Parámetros

| Nombre      | Descripción        | Tipo |
| ----------- | ----------- | ----------- |
| title       | Título de la sección      | String|
| adress      | Dirección de contacto      | String|
| mail        |  Correo electrónico     | String |
| tel         | Teléfono      | String |
| maps         | Mapa      | String |

### Link

[Link](https://redplanet.devlez.com/lodestar#contacto)