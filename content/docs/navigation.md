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

# Navigation 

Componente especial para colocar la navegación del sitio, siempre debe de ser el primer componente que se ponga en el sitio:

## Navigation 01

### Ejemplo

[link](/lodestar)

### Uso

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

| Nombre      | Tipo        | Descripción |
| ----------- | ----------- | ----------- |
| links       | Array       | Entradas del menú |
| social-links| Array       | Links a redes sociales, se puede usar *twitter*, *fb* e *ig*       |
| phone       | String      | Teléfono       |
