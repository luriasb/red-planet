---
name: Navigation
title: Navigation

# variables

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

# Menús de navegación

Componente especial para colocar la navegación del sitio, siempre debe de ser el primer componente que se ponga en el sitio:

## Menú 01

### Imagen

![Navigation 01](~@assets/navigation-01.png "Navigation 01")

### Código

```
---
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

<navigation-01 :links="links" :social-links="socialLinks" :phone="phone"></navigation-01>

```

#### Parámetros

| Nombre      | Descripción                                                  |  Tipo  |
| ----------- | ------------------------------------------------------------ | ------ |
| links       | Entradas del menú                                            | Array  |
| social-links| Links a redes sociales, se puede usar *twitter*, *fb* e *ig* | Array  |
| phone       |                                                Teléfono      | String |

### Ejemplo

[Link](https://redplanet.devlez.com/lodestar/)