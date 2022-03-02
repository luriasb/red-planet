---
name: Banners
title: Banners

# variables

banner01: /img/banner01.jpg
---

# Banners

Sección con una imagen de fondo.

Para poder cambiar nuestras imágenes de banners, seguiremos los mismos pasos que seguimos en el cambio de imagen del header. 

## Banner 01

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

## Banner 02

### Imagen

![Banner 02](~@assets/banner-02.png "Banner 02")

Tamaño de la imagen: 1920x1080 píxeles.

### Código

```
---
banner02: /img/banner02.jpg
---

<banner-02 :image="banner02" parallax></banner-02>

```

## Banner 03

### Imagen

![Banner 03](~@assets/banner-03.png "Banner 03")

Tamaño de la imagen: 1920x1080 píxeles.

### Código

```
---
banner03: /img/banner03.jpg
---

<banner-03 :image="banner03" parallax></banner-03>

```

## Banner 04

### Imagen

![Banner 04](~@assets/banner-04.png "Banner 04")

Tamaño de la imagen: 1920x650 píxeles.

### Código

```
---
banner04: /img/banner04.jpg
---

<banner-04 :image="banner04"></banner-04>

```

#### Parámetros

| Nombre      | Descripción        | Tipo |
| ----------- | ----------- | ----------- |
| image       | Ruta a la imagen de fondo      | String |
| parallax    | Define si la imagen de fondo tendrá efecto parallax     | Boolean       |
