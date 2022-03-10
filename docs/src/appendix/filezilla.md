# Filezilla

Al terminar de construir un sitio Red Planet, nuestro objetivo es ponerlo en línea. Para eso utilizamos la herramienta FileZilla. 

FileZilla es un cliente FTP (File Transfer Protocol), que nos permite conectar y transferir los archivos de nuestra computadora al servidor que aloja nuestro sitio.

De este modo podemos subir, descargar o modificar archivos de nuestro alojamiento de forma remota.

Instalar FileZilla en nuestra computadora es muy sencillo:

1. Descargamos el programa desde su [sitio web](https://filezilla-project.org/).

2. Elegimos la opción “Download FileZilla Client”.

![FileZilla 01](~@assets/file-01.png "FileZilla 01")

3. En la siguiente pantalla, damos click en el botón del mismo nombre que aparece en color verde. 

El texto que indica el sistema operativo, puede variar dependiendo del mismo que use nuestra computadora. No existe un paso de selección intermedio.

![FileZilla 02](~@assets/file-02.png "FileZilla 02")
![FileZilla 03](~@assets/file-03.png "FileZilla 03")

4. El paso final es instalar el programa en nuestro equipo.

## Cómo usar FileZilla

Para utilizar FileZilla, vamos a necesitar:

1. Abrir FileZilla y tener disponibles los datos FTP. 

Si no tenemos estos últimos, nos los puede proporcionar la cabeza de área.

2. Una vez abierto el programa, aparecerá la siguiente pantalla:

![FileZilla 09](~@assets/file-09.png "FileZilla 09")

3. En la barra superior de esta pantalla, colocaremos los datos FTP de la siguiente manera:

- Servidor FTP en "Servidor".
- Usuario en Nombre de usuario.
- La contraseña.
- Y el puerto lo pondremos sólo en caso de que se nos proporcione ese dato.

4. Una vez colocados los datos, damos click en Conexión rápida.

![FileZilla 10](~@assets/file-10.png "FileZilla 10")

5. En caso de que aparezca un mensaje indicando que el servidor es desconocido, marcaremos la opción Siempre confiar en el certificado en futuras sesiones. Click en Aceptar.

![FileZilla 12](~@assets/file-12.png "FileZilla 12")

6. Si la conexión se ha establecido correctamente, podremos ver el LOG de conexión correcto, nuestros archivos locales en Sitio local y nuestros archivos del servidor en Sitio remoto.

7. A partir de este punto, podemos proceder al deployment.