# Estructura de una página

En el panel izquierdo encontraran todos los archivos del proyecto, no se asusten, solo deben de preocuparse por la carpeta `content` la cual contiene el archivo que se debe de modificar para crear una página. El archivo es el `index.md`. Denle click para abrirlo y poderlo editar.

![Estructura 01](~@assets/estructure-01.png "Estructura 01")

Notarán que el archivo tiene la siguiente estructura:

```
---
# Define tus variables debajo de esta linea


---

<!-- Define tus componentes aquí-->
<div>

</div>
```

## Variables

La primera sección es la de Variables, notese que esta sección está delimitado por 3 guiones seguidos `---` al inicio y al final, aquí se iran colocando todos los textos, imágenes y datos en general que se deben de mostrar en el sitio.

### Variables de tipo String

Las variables de tipo string se utilizan para definir textos, la estructura que se utilizará para definir una variable es la siguiente:

```
headerTitle: EL NOMBRE DE TU EMPRESA
```

En este ejemplo, el nombre de la variable es `headerTitle` y el contenido de la variable es `EL NOMBRE DE TU EMPRESA`

### Variables para imágenes

En el caso de una imagen debemos de poner la ruta relativa a la imagen, por ejemplo:

```
hero01: /img/hero01.jpg
```

### Variables de tipo array

En algunos casos es necesario definir variables de tipo array, las cuales contienen varias veces el mismo tipo de información, por ejemplo:

```
links:
  - text: Misión
    link: 'mision'
  - text: Acerca de tu empresa
    link: 'acerca'
  - text: Servicios
    link: 'servicios'
  - text: Contacto
    link: 'contacto'
```

## Componentes

Los componentes son los templates en donde se mostrará la información, estos se deben de ir colocando en el orden en el que se quiere que se muestren en la sección de componentes, por ejemplo:

``` html
<div>
  <navigation-01 :links="links" :social-links="socialLinks" :phone="phone"></navigation-01>
  <header-01 id="header01" :title="headerTitle" :sub-title="headerSubTitle" :image="hero01" parallax></header-01>
  <content-01 id="mision" :text="content01Text"></content-01>
  <banner-01 id="banner01" :image="banner01" parallax></banner-01>
  <content-02 id="acerca" :title="content02Title" :text1="content02Text1" :text2="content02Text2" ></content-02>
  <content-03 id="servicios" :title="servicesTitle" :services="services" :image="banner02" parallax></content-03>
  <banner-01 :image="banner03" parallax></banner-01>
  <content-04 id="contacto" :title="contactTitle" :adress="contactAdress" :mail="contactMail" :tel="contactTel" ></content-04>
  <banner-01 :image="banner04"></banner-01>
  <footer-01 :text="footerText" :social-links="socialLinks" ></footer-01>
</div>
```

En las siguientes páginas de la documentación mostraremos los distintos componentes que se tienen disponibles.

Todos los componentes vienen con un ejemplo de uso, puedes copiar las variables y componentes como referencia y a partir del ejemplo crear tus propias versiones. O, si lo prefieres, puedes copiar el código de un sitio entero en la seccion "Demos" e ir modificando los componentes. 