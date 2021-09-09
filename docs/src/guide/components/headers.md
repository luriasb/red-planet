---
name: Headers
title: Headers

# variables

headerTitle: EL NOMBRE DE TU EMPRESA Chula
headerSubTitle: Tu slogan llamativo y contundente

hero01: /img/hero01.jpg
---

# Headers

Sección principal del sitio

## Header 01

### Ejemplo

[link](https://redplanet.devlez.com/lodestar#header01) 

![Header 01](~@assets/header-01.png "Header 01")
### Uso

```
---
headerTitle: EL NOMBRE DE TU EMPRESA Chula
headerSubTitle: Tu slogan llamativo y contundente
hero01: /img/hero01.jpg
---

<header-01 :title="headerTitle" :sub-title="headerSubTitle" :image="hero01" parallax></header-01>

```

### Cambiar imagen del Header

Para cambiar la imagen del Header, primero necesitamos guardar la imagen que queremos. Para  hacer esto, nos vamos a la carpeta que descargamos del repositorio, la abrimos, buscamos la carpeta `static`, le damos click y abrimos la carpeta `img`, en este carpeta colocaremos las imágenes que vayamos a utlizar en todo nuestro proyecto.

![Change Header 01](~@assets/change-01.png "Change Header 01")

Ya que tengamos nuestra imagen en la carpeta, en nuestro código solamente cambiaremos el nombre de la imagen.

![Change Header 02](~@assets/change-02.png "Change Header 02")

#### Parámetros

| Nombre      | Tipo        | Descripción |
| ----------- | ----------- | ----------- |
| image       | String      | Ruta a la imagen de fondo |
| title       | String      | Título del header         |
| sub-title   | String      | Subtítulo del header      |
