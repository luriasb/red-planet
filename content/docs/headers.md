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

[link](/lodestar#header01)

### Uso

```
---
headerTitle: EL NOMBRE DE TU EMPRESA Chula
headerSubTitle: Tu slogan llamativo y contundente
hero01: /img/hero01.jpg
---

<header-01 :title="headerTitle" :sub-title="headerSubTitle" :image="hero01" parallax></header-01>

```

#### Parámetros

| Nombre      | Tipo        | Descripción |
| ----------- | ----------- | ----------- |
| image       | String      | Ruta a la imagen de fondo |
| title       | String      | Título del header         |
| sub-title   | String      | Subtítulo del header      |
