---
name: Footer (Pie de página)
title: Footer (Pie de página)

# variables

footerText: '© Copyright 2021'
---

# Footer

Sección en la parte inferior de un sitio. 

## Footer 01

### Imagen

![Footer 01](~@assets/footer-01.png "Footer 01")

### Código

```
---
footerText: '© Copyright 2021'
---

<footer-01 :text="footerText" :social-links="socialLinks" ></footer-01>

```

#### Parámetros

| Nombre       | Descripción        | Tipo |
| -----------  | ----------- | ----------- |
| footerText | Texto a mostrar    | String |