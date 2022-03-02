# Cómo construir un sitio en Red Planet

## Construcción general

Construir un sitio Red Planet es muy sencillo. Sólo hay que seguir los siguientes pasos:

1. Tener clara la arquitectura del sitio que vamos a construir. Esto es muy importante, ya que iremos construyendo el sitio bloque de contenido por bloque de contenido.

2. Ubicamos el bloque de contenido que deseamos insertar en el catálogo de bloques. 

-Copiamos la variable del bloque y la pegamos en donde corresponden las variables. (Siempre entre guiones). 

-Copiamos el componente del bloque y lo pegamos en donde corresponden los componentes. (Siempre entre etiquetas html). 

-__Importante__: Para trabajar de una manera limpia y ordenada, una buena práctica es ir colocando el componente correspondiente por cada variable que se va insertando. Es decir, uno a uno.

3. Guardamos nuestro trabajo. Para guardar:

-En Mac: `cmd + S`.
-En Windows: `ctrl + S`.
-En ambos casos: dar click en __Archivo__ y después en __Guardar__ (Save).
-Archivo → Guardar.

Al guardar, suceden dos cosas: La terminal trabaja y nos indica que se han generado los cambios en el sitio. Después de esto, los cambios se verán reflejados en el servidor local.

__Importante:__ Otra buena práctica, es que por cada juego de variable-componente que se vaya insertando en la construcción, se guarde nuestro trabajo. No debemos confiarnos, ya que el guardado sólo es manual, no automático.

4. Repetimos estas dos acciones, bloque por bloque hasta completar la arquitectura de nuestro sitio entero.

5. Ya con el sitio armado, es más fácil dedicarnos a sustituir la información que aparecerá en las variables. Después de editar, guardamos.

6. Revisamos que el sitio quede tal como lo queremos. Con o sin cambios, guardar una vez más. Si el sitio ya no tiene más ajustes, procedemos al deployment.

Para más referencias, se sugiere visitar el video correspondiente en el apéndice de la documentación.

## Cómo cambiar las fotografías en bloques de imágenes

Existen bloques de contenido que contienen imágenes o son imágenes en sí mismos. Estos bloques vienen de origen con una imagen por default, o en su caso, puede que tengan una imagen que se desee cambiar.

Para cambiar una imagen en un bloque de contenido, hay que seguir los siguientes pasos:

1. El proceso de cambiar la imagen de un bloque, comienza por tener ya listos todos los archivos de imágenes que vayamos a necesitar. En peso, tamaño y con metadatos cargados. 

También es una buena práctica que los archivos de las imágenes, estén nombrados con una nomenclatura que ayude al SEO del sitio.

2. De igual manera, debemos tener clara la arquitectura del sitio que vamos a construir. Esto es muy importante, ya que tenemos que ubicar perfectamente, uno a uno los bloques de contenido a los que cambiaremos las imágenes.

3. Abrimos la carpeta de nuestro proyecto que se aloja en nuestra computadora. La carpeta regularmente se llama red-planet-main y es la misma que es el resultado de descomprimir el archivo .Zip que descargamos de GitHub.

![Change Header 01](~@assets/change-01.png "Change Header 01")

4. Al abrir dicha carpeta vamos a la subcarpeta `static` y a su vez, dentro de ésta, a la subcarpeta `img`. Es en este lugar en donde se alojan todas las imágenes que ocupamos al construir nuestro sitio.

La ruta es:

`red-planet-main → static → img`

5. A continuación, colocamos todas las imágenes que queremos utilizar en nuestro sitio, dentro de la carpeta `img`.

6. Proseguimos con el proyecto normalmente: Abrimos la carpeta del proyecto en VS Code, instalamos las dependencias y corremos el servidor local. Procedemos a editar los bloques de contenido.

7. La sustitución de imágenes se tiene que hacer una por una, bloque por bloque.

Como buena práctica, se sugiere que la sustitución de imágenes se haga como uno de los últimos pasos de la construcción. De esta manera es más fácil sólo darse a la tarea de cambiar las imágenes.

8. A continuación, verificaremos que el sistema lea todas nuestras imágenes. Para esto, nos ubicamos en el directorio que se encuentra dentro del panel Explorador al lado izquierdo de la pantalla. Ya en el directorio, abrimos la carpeta `static` y luego la carpeta `img`. Dentro de esta última, encontraremos todos nuestros archivos de imágenes. 

La ruta es:

`RED PLANET-MAIN → static → img → [Archivos de imágenes]`

![Change Img 01](~@assets/change-img-01.png "Change Img 01")

En este paso, sólo tenemos que asegurarnos de tener disponibles todos los archivos de imágenes que vamos a sustituir.

9. Para cambiar las imágenes, nos dirigimos al archivo `content.md` y debemos ubicar las variables de los bloques de contenido a editar. Ya en cada una, identificamos la línea de código que corresponde a la imagen. Este código se integra por la ruta que indica en donde se encuentra almacenada nuestra imagen. Por ejemplo:

En la variable:

```

headerTitle: EL NOMBRE DE TU EMPRESA
headerSubTitle: Tu slogan llamativo y contundente
hero01: /img/hero01.jpg

```

La ruta es la línea:

```
hero01: /img/hero01.jpg
```

Una clave que puede servir para identificar la imagen, es reconocer la extensión de este tipo de archivos: `.jpg, .png, .bmp`, o similares.

10. Lo que se tiene que hacer por cada imagen, es sustituir el nombre del archivo que viene por default, por el nombre del archivo de la imagen que vamos a cambiar y que previamente se cargó a la carpeta img. Por ejemplo:

Por default, encontraremos:

```

headerTitle: EL NOMBRE DE TU EMPRESA
headerSubTitle: Tu slogan llamativo y contundente
hero01: /img/hero01.jpg

```

Y se cambia por:

```

headerTitle: EL NOMBRE DE TU EMPRESA
headerSubTitle: Tu slogan llamativo y contundente
hero01: /img/Imagen01.jpg

```

Es decir:

__hero01: /img/hero01.jpg por hero01: /img/Imagen01.jpg__

11. Guardamos y verificamos los cambios en el servidor local.

12. Repetimos los pasos 10 y 11 para cada una de las imágenes.

## Quitar el efecto parallax en bloques de imágenes

Es posible que por alguna situación, se desee editar el efecto parallax de algún bloque de contenido que sea de imagen. Es importante hacer notar que el parallax se puede quitar de los bloques que lo tienen,pero no se puede poner en los bloques que no lo tienen.

Para editar este efecto, se realiza lo siguiente:

1. Ubicamos el código del componente del bloque que deseamos editar.

2. Ahí, ubicamos el parámetro `parallax`. Dicho parámetro es justo  el texto que dice “parallax” dentro del código.

```
<banner-01 :image="banner01" parallax></banner-01>

```
3. Borramos el parámetro.

Antes:

```
<banner-01 :image="banner01" parallax></banner-01>
```
Después:

```
<banner-01 :image="banner01" ></banner-01>
```

4. Guardamos. 

Con esto, el efecto parallax desaparece y la imagen debe mostrarse estática en nuestro servidor local.

## Cambio de fuentes tipográficas

En caso de que se requiera cambiar la tipografía de algún bloque de texto, éste es susceptible a editarse. Para comenzar, debemos tener en cuenta que los bloques de contenido ya tienen la fuente Roboto definida por default.

Es importante hacer notar que no es muy recomendable cambiar las fuentes, debido a que los componentes ya vienen construidos de esa manera. Si es necesario hacer una sustitución de fuentes tipográficas, se deben cumplir 2 requisitos:

1. Se recomienda que no sean más de 2 fuentes en toda la página.

2. Todas las fuentes deben de estar disponibles en Google Fonts.

Para añadir un fuente nueva, lo que tenemos que hacer es:

1. Abrir el archivo `nuxt.config.js`

Este archivo se ubica en el directorio que se encuentra dentro del panel __Explorador__ al lado izquierdo de la pantalla del Visual Studio Code. Ya en el directorio, veremos todos los archivos del proyecto. Sólo trabajaremos dentro del archivo que deseamos.

La ruta es:

`RED PLANET-MAIN → nuxt.config.js`

![Change Typo 01](~@assets/change-typo-01.png "Change Typo 01")

Después de haber localizado dicho archivo, damos click en él y lo comenzamos a editar.

2. Ya editando el archivo, es necesario ubicar la parte del código que dice `link`. Algunas líneas de texto más adelante de ese código, es fácil identificar los hipervínculos de Google Fonts.

![Change Typo 02](~@assets/change-typo-02.png "Change Typo 02")

3. Es tiempo de ir a Google Fonts y buscar la fuente deseada.

4. Dentro de la fuente, seleccionamos los estilos que necesitamos dando click en `+ Select this style`.

![Change Typo 03](~@assets/change-typo-03.png "Change Typo 03")

5. El siguiente paso es dar click en el botón `View your selected families` (Botón de 4 cuadros en la parte superior derecha del menú de Google Fonts).

![Change Typo 04](~@assets/change-typo-04.png "Change Typo 04")

6. Esta acción nos desplegará un menú. Nos dirigimos a la sección `Use on the web` y marcamos la opción `link` . Y debajo de esta sección, se genera un código html.

7. Sólo necesitamos copiar la parte entre comillas casi al final del código. Desde `https://` hasta `swop`, sin las comillas.

![Change Typo 05](~@assets/change-typo-05.png "Change Typo 05")

8. Regresamos al archivo `nuxt.config.js` y sustituimos cualquiera de los dos hipervínculos de Google Fonts por el nuevo. Esto, con cuidado de no borrar las comillas que ya estaban en el código previamente.

![Change Typo 06](~@assets/change-typo-06.png "Change Typo 06")

9. Acto seguido, abrimos el archivo `tailwind.config.js`

Este archivo se ubica en el directorio que se encuentra dentro del panel Explorador al lado izquierdo de la pantalla. Ya en el directorio, veremos todos los archivos del proyecto. Sólo trabajaremos dentro del archivo que deseamos.

La ruta es:

`RED PLANET-MAIN → tailwind.config.js`

![Change Typo 07](~@assets/change-typo-07.png "Change Typo 07")

Después de haber localizado dicho archivo, damos click en él y lo comenzamos a editar.

10. Ya editando el archivo, es necesario ubicar la parte del código que dice `fontFamily`. Más adelante, se muestran los nombres de las familias tipográficas por default. Una en body y otra en heading.

![Change Typo 08](~@assets/change-typo-08.png "Change Typo 08")

11. Guardamos el proyecto y corremos el servidor local. Usamos el comando:

```
npm run dev 

```

12. El paso siguiente es abrir nuestro archivo de contenido, `index.md` en `content.md`

![Change Typo 09](~@assets/change-typo-09.png "Change Typo 09")

13. En el archivo de contenido, en la sección de __componentes__, ubicamos la línea de código del componente que corresponde al bloque de contenido del que deseamos cambiar la fuente. Por ejemplo:

```
<header-01 :title="headerTitle" :sub-title="headerSubTitle" :image="hero01" parallax></header-01> 

```

![Change Typo 10](~@assets/change-typo-10.png "Change Typo 10")

14. Casi al final de la línea, antes de la etiqueta de cierre `></header-01>`, agregamos el siguiente código:

```
title-classes=”font-heading”
```

Por ejemplo:

```
<header-01 :title="headerTitle" :sub-title="headerSubTitle" :image="hero01" parallax title-classes=”font-heading”></header-01> 
```
![Change Typo 11](~@assets/change-typo-11.png "Change Typo 11")

15. Guardamos. El cambio debe verse reflejado en el servidor local. 

![Change Typo 14](~@assets/change-typo-14.png "Change Typo 14")

16. Repetimos los pasos 13, 14 y 15 en todos los bloquea a los que se les desee cambiar la tipografía.

Si el texto a editar en vez de ser un encabezado es un cuerpo de texto, la línea de código cambia de `title-classes` a `text-classes`. 

Por ejemplo:

```
<content-02 id="acerca" :title="content02Title" :text1="content02Text1" :text2="content02Text2" text-classes=”font-heading”></content-02>

```

De igual manera, en bloques donde no se especifique si es encabezado o cuerpo de texto, usaremos el código `body-classes`. 

Por ejemplo:

```
<content-04 id="contacto" :title="contactTitle" :adress="contactAdress" :mail="contactMail" :tel="contactTel" body-classes=”font-heading”></content-04>

```

Para más referencias, se sugiere visitar el video correspondiente en el apéndice de la documentación.

## Cambiar el color de las fuentes tipográficas

En caso de que se necesite cambiar el color del texto en algún bloque de contenido, los pasos a seguir son:

1. Abrir el archivo `tailwind.config.js`

Este archivo se ubica en el directorio que se encuentra dentro del panel Explorador al lado izquierdo de la pantalla. Ya en el directorio, veremos todos los archivos del proyecto. Sólo trabajaremos dentro del archivo que deseamos.

La ruta es:

`RED PLANET-MAIN → tailwind.config.js`

![Change Typo 12](~@assets/change-typo-12.png "Change Typo 12")

Después de haber localizado dicho archivo, damos click en él y lo comenzamos a editar.

2. Ya editando el archivo, es necesario ubicar la parte del código que dice `colors`. Debajo de esa línea, se enlistan los nombres y las claves hexadecimales (las claves con un #), de los colores que tenemos disponibles por el momento.

![Change Typo 13](~@assets/change-typo-13.png "Change Typo 13")

3. Para agregar un color que no esté disponible, debemos dar enter después de la coma del último color en el listado. De esta manera podremos escribir una nueva línea.

4. En la nueva línea escribiremos lo siguiente:

- El nombre del nuevo color seguido de dos puntos ` : ` 
- Espacio ` `
- Apóstrofe + código hexadecimal del nuevo color + apóstrofe ` ‘#ff0404’ `
- Coma ` , `

	La línea completa debe quedar:
	
  ```
	rojo: ‘#ff0404’;
  ```

__Importante__: Conseguir el código hexadecimal de colores puede parecer complejo, pero no lo es. Algunas maneras de conseguirlo son:

-Consulta el manual de identidad gráfica de la marca del sitio que estás desarrollando. En teoría, ahí deben venir indicados.
-Pide ayuda a un diseñador del equipo. Ellos te pueden indicar los hexadecimales de los colores a partir de Photoshop.
-Puedes consultar el hexadecimal de un color en [este sitio de códigos de colores html](https://htmlcolorcodes.com/es/), o en sitios similares.

5. Repetimos el punto 4 por cada color que se desee agregar.

6. Nos dirigimos al archivo `index.md` y lo editamos.

7. Ubicamos el bloque de contenido al que deseamos cambiar el tipo de letra. A éste, le necesitamos agregar un código extra llamado “clases”. Las clases pueden ser:

- title-classes para títulos.
- sub-tittle-classes para subtítulos.
- text-classes para cuerpos de texto.
- body-classes para elementos de texto no definidos.

La sintaxis de las clases se componen por:

- El tipo de clase.
- Un signo de igual ` = `.
- Comillas ` “ `.
- La palabra ` text `.
- Un guión ` - `.
- El color.
- Comillas ` “ `.

	Por ejemplo:

```
	body-classes=”text-azul”

```

8. Esta clase se va agregar casi al cierre del componente. Por ejemplo:

Pasa del original:

```
<header-01 :title="headerTitle" :sub-title="headerSubTitle" :image="hero01" parallax></header-01>

```

A agregarse el nuevo color:

```
<header-01 :title="headerTitle" :sub-title="headerSubTitle" :image="hero01" parallax body-classes=”text-azul”></header-01> 
```

![Change Typo 13](~@assets/change-typo-13.png "Change Typo 13")

9. Guardamos y revisamos los cambios en el servidor local.

![Change Typo 15](~@assets/change-typo-15.png "Change Typo 15")

10. Los pasos 8 y 9 se repiten por cada bloque de contenido al que deseemos cambiar el color de la tipografía.

Para más referencias, se sugiere visitar el video correspondiente en el apéndice de la documentación.

## Cambiar el color del fondo (background) de algunos bloques de contenido

En caso de que se necesite cambiar el color del fondo (background) en algún bloque de contenido, los pasos a seguir son:

1. Abrir el archivo tailwind.config.js

Este archivo se ubica en el directorio que se encuentra dentro del panel Explorador al lado izquierdo de la pantalla. Ya en el directorio, veremos todos los archivos del proyecto. Sólo trabajaremos dentro del archivo que deseamos.

La ruta es:

` RED PLANET-MAIN → tailwind.config.js `

![Change Typo 13](~@assets/change-typo-13.png "Change Typo 13")

Después de haber localizado dicho archivo, damos click en él y lo comenzamos a editar.

2. Ya editando el archivo, es necesario ubicar la parte del código que dice “colors”. Debajo de esa línea, se enlistan los nombres y las claves hexadecimales (las claves con un #), de los colores que tenemos disponibles por el momento.

![Change Typo 13](~@assets/change-typo-13.png "Change Typo 13")

3. Para agregar un color que no esté disponible, debemos dar enter después de la coma del último color en el listado. De esta manera podremos escribir una nueva línea.

4. En la nueva línea escribiremos lo siguiente:

- El nombre del nuevo color seguido de dos puntos ` : `
- Espacio ` `
- Apóstrofe + código hexadecimal del nuevo color + apóstrofe ` ‘#ff0404’ `
- Coma ` , `

	La línea completa debe quedar:

``` 
rojo: ‘#ff0404’

``` 

__Importante__: Conseguir el código hexadecimal de colores puede parecer complejo, pero no lo es. Algunas maneras de conseguirlo son:

- Consulta el manual de identidad gráfica de la marca del sitio que estás desarrollando. En teoría, ahí deben venir indicados.
- Pide ayuda a un diseñador del equipo. Ellos te pueden indicar los hexadecimales de los colores a partir de Photoshop.
- Puedes consultar el hexadecimal de un color en [este sitio de códigos de colores html](https://htmlcolorcodes.com/es/), o en sitios similares.

5. Repetimos el punto 4 por cada color que se desee agregar.

6. Nos dirigimos al archivo `index.md` y lo editamos.

7. Ubicamos el bloque de contenido al que deseamos cambiar el background. A éste, le necesitamos agregar un código extra llamado “clases”. La sintaxis para la clase del background es:

```
body-classes=”bg-rojo”

```

Esta clase se va agregar casi al cierre del componente. Por ejemplo:

Pasa del original:

```
<header-01 :title="headerTitle" :sub-title="headerSubTitle" :image="hero01" parallax></header-01>

```
A agregarse el nuevo color:

```
<header-01 :title="headerTitle" :sub-title="headerSubTitle" :image="hero01" parallax body-classes=”bg-rojo”></header-01> 

```

9. Guardamos y revisamos los cambios en el servidor local.

![Change Typo 16](~@assets/change-typo-16.png "Change Typo 16")

10. Los pasos 8 y 9 se repiten por cada bloque de contenido al que deseemos cambiar el color de la tipografía.

Para más referencias, se sugiere visitar el video correspondiente en el apéndice de la documentación.