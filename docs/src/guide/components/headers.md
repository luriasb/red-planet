---
name: Encabezados (Headers / Hero section)
title: Encabezados (Headers / Hero section)

# variables

headerTitle: EL NOMBRE DE TU EMPRESA Chula
headerSubTitle: Tu slogan llamativo y contundente

hero01: /img/hero01.jpg
---

Sección principal del sitio

## Header 01

### Imagen

![Header 01](~@assets/header-01.png "Header 01")

### Código

```
---
headerTitle: EL NOMBRE DE TU EMPRESA Chula
headerSubTitle: Tu slogan llamativo y contundente
hero01: /img/hero01.jpg
---

<header-01 :title="headerTitle" :sub-title="headerSubTitle" :image="hero01" parallax></header-01>

```

#### Parámetros

| Nombre      | Descripción        | Tipo |
| ----------- | ----------- | ----------- |
| image       | Ruta a la imagen de fondo      | String |
| title       | Título del header      |        String  |
| sub-title   | Subtítulo del header      |     String  |

### Ejemplo

[link](https://redplanet.devlez.com/lodestar#header01) 