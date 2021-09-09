# Filezilla

Para poder subir un proyecto finalizado de Red Planet, necesitaremos usar FileZilla. FileZilla es un cliente FTP que nos permitirá conectar mediante este protocolo (File Transfer Protocol) con nuestro servidor FTP.

De este modo, podremos subir, descargar o modificar archivos de nuestro alojamiento de forma remota.

## Descargar e instalar FileZilla


Primero necesitamos descargar Filezilla desde su [página web](https://filezilla-project.org/).

Pulsaremos sobre el boton "Download FileZilla Client"

![FileZilla 01](~@assets/file-01.png "FileZilla 01")

En la siguiente pantalla, vamos a pulsar el botón del mismo nombre que aparece en color verde.
El texto que indica el sistema operativo, en nuestro caso Windows, cambia dependiendo del sistema utilizado, no existe un paso de selección intermedio.

![FileZilla 02](~@assets/file-02.png "FileZilla 02")

![FileZilla 03](~@assets/file-03.png "FileZilla 03")

Para finalizar solo nos quedará instalarlo en nuestro equipo.

## Cómo usar FileZilla


Para utilizar FileZilla, vamos a necesitar dos cosas:

1.- Abrir FileZilla

2.- Los datos FTP de la empresa.

Una vez que abramos el programa, nos va a aparecer una pantalla como la siguiente:


![FileZilla 09](~@assets/file-09.png "FileZilla 09")

Notaremos en esta pantalla una barra superior, en donde colocaremos los datos FTP que se nos proporcionaron. El "Servidor FTP" lo indicaremos en "Servidor", el "Usuario" en "Nombre de usuario", la "Contraseña" (La podemos ver clicando sobre la lupa) en "Contraseña" y el puerto lo pondremos solo en caso de que se nos proporcione ese dato. Una vez colocados correctamente los datos, pulsaremos en "Conexión rápida". 

![FileZilla 10](~@assets/file-10.png "FileZilla 10")

Al hacerlo nos aparecerá un mensaje indicando que el servidor es desconocido, en el cual marcaremos la opción "Siempre confiar en el certificado en futuras sesiones" y pulsaremos en "Aceptar"

![FileZilla 12](~@assets/file-12.png "FileZilla 12")

Si la conexión se ha establecido correctamente, podremos ver el LOG de conexión correcto, nuestros archivos locales en "Sitio local" y nuestros archivos del servidor en "Sitio remoto"

## Subiendo un proyecto finalizado al hosting de LOM


Para subir nuestro proyecto, necesitamos crear un espacio para subirlo. Vamos a crearle un un subdominio a nuestro proyecto. Esto lo haremos desde cPpanel, que es un panel de control para administrar servicios de alojamiento. 

Para entrar a cPanel, nos dirigimos a su [web](https://cpanel.net/) e ingresamos con los datos que se nos proporcionen. 

Una vez dentro, vamos a crear el subdominio de nuestro proyecto. Pulsamos sobre "Subdominio"

![Save project 01](~@assets/save-01.png "Save project 01")

En "subdominio" colocaremos el nombre al proyecto (en este caso de ejemplo, nuestro subdominio se llamará "test-red-planet"), en dominio escogeremos "lifeonmars.com". Automáticamente se creará una ruta. Esta ruta nos servirá más adelante para conectarnos a nuestro sitio terminado.

Una vez llenados los datos, le damos click en crear y nos tiene que salir una leyenda que diga que el subdominio fue creado exitosamente. 

![Save project 01](~@assets/save-02.png "Save project 02")

Ya que tenemos creado nuestro subdominio, regresamos a nuestro proyecto en VS Code y en la consola escribiremos el comando:

``` bash
npm run generate
```
y damos `enter`.

![Save project 03](~@assets/save-03.png "Save project 03")

Una vez que termine de compilar, nuestro sitio estará creado. En este paso, se crearán una serie de carpetas, de las cuales, la más importante es una llamada `dist`. No olvidemos el nombre de esta carpeta ya que la usaremos más adelante.

Creado nuestro sitio, nos vamos a Filezilla y nos conectamos al sitio de LOM. Para conectarnos al sitio, en FileZilla le damos click en `Abrir el gestor de sitios` y escogemos el sitio `Boris root` y le damos click en `conectar`.

![Save project 04](~@assets/save-04.png "Save project 04")

![Save project 05](~@assets/save-05.png "Save project 05")

Ya que estemos conectados, buscamos la carpeta que tenga el nombre de nuestro proyecto, en este caso, el nombre de la carpeta es `test-red-planet.lifeonmars.com.mx`. En esta carpeta subiremos los archivos de nuestro proyecto. 

En la ventana izquierda de donde está la carpeta de nuestro proyecto, veremos otra ventana, en donde están nuestros archivos locales. Nos vamos a la carpeta `redPlanet` y dentro de esta carpeta, se encuentra otra carpeta llamada `dist`. En esta carpeta estarán todos los archivos generados en nuestro proyecto. 

![Save project 07](~@assets/save-07.png "Save project 07")

Le damos click a la carpeta `dist` y debajo de la ventana de los archivos locales, nos apareceran los archivos que contiene esta carpeta. Seleccionamos todos los archivos que estan dentro de la carpeta y los arrastramos hacia la ventana a su derecha y esperamos a que todos los archivos se terminen de subir.

![Save project 08](~@assets/save-08.png "Save project 08")

Al finalizar de cargar nuestros archivos, nos podemos ir a nuestro navegador y ponemos la dirección que el cPanel nos generó. En este caso de ejemplo, la dirección para entrar al sitio es `test-red-planet.lifeonmars.com.mx`. Le damos enter y...¡Felicidades!, tienes tu primer sitio armado y en línea. 

![Save project 09](~@assets/save-09.png "Save project 09")

## Recursos útiles.

Te compartimos la siguiente carpeta con una serie de vídeos explicativos sobre Red Planet.

[Videos Red Planet](https://drive.google.com/drive/folders/1_8gLyfRQn8iy_1TxXKeF5T5e-bQKvzIY).