---
name: Catálogo de componentes
title: Catálogo de componentes

# variables
siteName: Tu sitio
links:
  - text: Misión
    link: 'mision'
  - text: Acerca de tu empresa
    link: 'acerca'

socialLinks:
  - link: 'https://twitter.com'
    type: 'twitter'
  - link: 'https://facebook.com'
    type: 'fb'

phone: '55 5555 5555'
---

## Menús de navegación

Componente especial para colocar la navegación del sitio, siempre debe de ser el primer componente que se ponga en el sitio:

## Menú 01

### Imagen

![Navigation 01](~@assets/navigation-01.png "Navigation 01")

### Código

```
---
siteName: Tu sitio
links:
  - text: Misión
    link: 'mision'
  - text: Acerca de tu empresa
    link: 'acerca'

socialLinks:
  - link: 'https://twitter.com'
    type: 'twitter'
  - link: 'https://facebook.com'
    type: 'fb'

phone: '55 5555 5555'
---

<navigation-01 :site-name="siteName" :links="links" :social-links="socialLinks" :phone="phone"></navigation-01>

```

### Importante

El menú de navegación es completamente editable. En el ejemplo del código tenemos la variable `links`, esta variable sirve para poner en nuestro menú las secciones a las que queremos que nos dirijan nuestros links, mediante el `id` de cada sección. Por ejemplo, en nuestro código tenemos: 

```
links:
  - text: Servicios
    link: 'servicios'

```
Esto quiere decir que el texto mostrado en el menú será __Servicios__ y este nos dirijirá a la sección __Servicios__ de nuestra one page.

![Navigation 02](~@assets/navigation-02.png "Navigation 02")

Si queremos poner más secciones en nuestro menu, es posible hacerlo, sólo hay que tener especial atención en poner el `id` correcto en nuestro menú.

#### Parámetros

| Nombre      | Descripción                                                  |  Tipo  |
| ----------- | ------------------------------------------------------------ | ------ |
| site-name   | Nombre de tu sitio                                           | String |
| links       | Entradas del menú                                            | Array  |
| social-links| Links a redes sociales, se puede usar *twitter*, *fb* e *ig* | Array  |
| phone       |                                                Teléfono      | String |

### Ejemplo

[Link](https://redplanet.devlez.com/lodestar/)