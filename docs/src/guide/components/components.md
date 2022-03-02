# Construcción de un sitio Red Planet

## Estructura de una página

Al terminar la instalación de dependencias, podemos comenzar con la construcción de nuestro sitio. Lo siguiente es ubicarnos en el directorio que se encuentra dentro del panel __Explorador__ al lado izquierdo de la pantalla. 

Ya en el directorio, veremos todos los archivos del proyecto. Esto puede llegar a sorprendernos, pero no pasa nada. Sólo trabajaremos dentro de la carpeta `content`, en el archivo `index.md.` 

Para llegar a este archivo, la ruta es:

`RED PLANET-MAIN → content → index.md`

![Estructura 01](~@assets/estructure-01.png "Estructura 01")

Después de haber localizado dicho archivo, damos click en él y lo comenzamos a editar. El archivo tiene la siguiente estructura:

```
---
# Define tus variables debajo de esta linea


---

<!-- Define tus componentes aquí-->
<div>

</div>
```
El archivo `index.md` está dividido en 2 bloques de edición: las __variables__ (la parte de arriba entre guiones) y los __componentes__ (la parte de abajo con sentencias entre signos de <>).

Para construir un sitio Red Planet, trabajaremos en ambos bloques.


## Variables

El primer bloque es el de variables. Este bloque se delimita por 3 guiones continuos `- - - ` al inicio y al final. En este bloque se colocan los textos, imágenes y datos en general que se mostrarán en el sitio.

Hay 3 tipos de variables:

### Variables de tipo String

Las variables de tipo string se utilizan para __definir textos__. Su estructura es la siguiente:

```
headerTitle: EL NOMBRE DE TU EMPRESA
```

En este ejemplo, el nombre de la variable es `headerTitle` y el contenido de la variable es `EL NOMBRE DE TU EMPRESA`

### Variables para imágenes

En el caso de las imágenes,  debemos de poner la ruta relativa a la imagen que se quiere mostrar. Por ejemplo:

```
hero01: /img/hero01.jpg
```

### Variables de tipo array

Este tipo de variables, por lo regular contienen varias veces el mismo tipo de información. Por ejemplo:

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

El segundo bloque es el de componentes. Este bloque se delimita por un juego de etiquetas html   `( <div> y </div> )` al inicio y al final. Todos los componentes que coloquemos deben de ir dentro de estas dos etiquetas.

Los componentes son los templates de nuestra herramienta que marcan el lugar en donde se mostrará la información. Por lo tanto, se deben ir colocando conforme al orden en el que queremos que se ubiquen. Por ejemplo:

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

Más adelante en esta misma documentación, existe todo un catálogo de componentes que se tienen disponibles. Todos vienen con un ejemplo de uso, en donde se puede copiar las variables y sus respectivos componentes. Estos se pueden tomar como referencia y a partir del ejemplo, construir el proyecto que queremos. 

De igual manera y para simplificar el trabajo, también existe un catálogo de sitios pre-construidos, para copiar su estructura por completo y sólo modificar la información de las variables.