---
name: Content
title: Content

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

# Content

Componentes para mostrar distintos tipos de contenidos


## Content 01
------

Contenido que muestra una párrafo de texto

### Ejemplo

[Link](https://redplanet.devlez.com/lodestar#mision)

![Content 01](~@assets/content-01.png "Content 01")

### Uso

```
---
content01Text: 'Este es un gran lugar para la misión de tu empresa.
También funciona bastante bien para resaltar un breve mensaje que cierre con una "llamada a la acción".'
---

<content-01 id="mision" :text="content01Text"></content-01>

```

#### Parámetros

| Nombre       | Tipo        | Descripción |
| -----------  | ----------- | ----------- |
| content01Text| String     | Texto a mostrar|


## Content 02
------

Contenido que muestra dos bloques de texto

### Ejemplo

[Link](https://redplanet.devlez.com/lodestar#acerca)

![Content 02](~@assets/content-02.png "Content 02")

### Uso

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

| Nombre      | Tipo        | Descripción |
| ----------- | ----------- | ----------- |
| title       | String      | Título de la sección|
| text01      | String     | Contenido del primer bloque de texto|
| text02      | String     | Contenido del segundo bloque de texto|


## Content 03
------

Contenido ideal para mostrar servicios

### Ejemplo

[Link](https://redplanet.devlez.com/lodestar#servicios)

![Content 03](~@assets/content-03.png "Content 03")

### Uso

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
| title       | String      | Título de la sección|
| services    | Array       | Arreglo con el contenido de los servicios|
| image       | String      | Ruta a la imagen de fondo |
| parallax    | Boolean     | Define si la imagen de fondo tendrá efecto parallax |


## Content 04
------

Contenido ideal para mostrar un mapa y datos de contacto

### Ejemplo

[Link](https://redplanet.devlez.com/lodestar#contacto)

![Content 04](~@assets/content-04.png "Content 04")

### Uso

```
---
contactTitle: 'Ubicación y contacto'
contactAdress: 'Tu calle No. 100 Zona de la ciudad. Tu ciudad.'
contactMail: 'info@tuempresa.com'
contactTel: '55 5555 5555'
---

<content-04 id="contacto" :title="contactTitle" :adress="contactAdress" :mail="contactMail" :tel="contactTel" ></content-04>

```

#### Parámetros

| Nombre      | Tipo        | Descripción |
| ----------- | ----------- | ----------- |
| title       | String      | Título de la sección|
| adress      | String      | Dirección de contacto|
| mail        | String      | Correo electrónico |
| tel         | String      | Teléfono |