---
name: Banners
title: Banners

# variables

banner01: /img/banner01.jpg
---

# Banners

Sección con una imagen de fondo.

Para poder cambiar nuestras imágenes de banners, seguiremos los mismos pasos que seguimos en el cambio de imagen del header. 

__Importante__: Por el momento sólo hay un modelo de banner, pero puede ser utilizado varias veces en nuestro sitio. Hay que tener especial cuidado con no confundirnos. La nomenclatura del componente "Banner 01" siempre será: 

```
<banner-01></banner-01>

```
Lo único que cambiará en el componente serán las variables, las cuales cambiarán las fotos mostradas:

```
---
banner01: /img/banner01.jpg
banner02: /img/banner02.jpg
banner03: /img/banner03.jpg
banner04: /img/banner04.jpg

```
Su aplicación es la siguiente:

```
---
<banner-01  :image="banner01" parallax></banner-01>
<banner-01  :image="banner02" parallax></banner-01>
<banner-01  :image="banner02" parallax></banner-01>
<banner-01  :image="banner04" parallax></banner-01>

```

## Banner 01 - Foto 1

### Imagen

![Banner 01](~@assets/banner-01.png "Banner 01")

Tamaño de la imagen: 1920x1080 píxeles.

### Código

```
---
banner01: /img/banner01.jpg
---

<banner-01 :image="banner01" parallax></banner-01>

```

## Banner 01 - Foto 2

### Imagen

![Banner 02](~@assets/banner-02.png "Banner 02")

Tamaño de la imagen: 1920x1080 píxeles.

### Código

```
---
banner02: /img/banner02.jpg
---

<banner-01 :image="banner02" parallax></banner-01>

```

## Banner 01- Foto 3

### Imagen

![Banner 03](~@assets/banner-03.png "Banner 03")

Tamaño de la imagen: 1920x1080 píxeles.

### Código

```
---
banner03: /img/banner03.jpg
---

<banner-01 :image="banner03" parallax></banner-01>

```

## Banner 01 - Foto 4

### Imagen

![Banner 04](~@assets/banner-04.png "Banner 04")

Tamaño de la imagen: 1920x650 píxeles.

### Código

```
---
banner04: /img/banner04.jpg
---

<banner-01 :image="banner04"></banner-01>

```

#### Parámetros

| Nombre      | Descripción        | Tipo |
| ----------- | ----------- | ----------- |
| image       | Ruta a la imagen de fondo      | String |
| parallax    | Define si la imagen de fondo tendrá efecto parallax     | Boolean       |
