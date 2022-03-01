# Deployment (Poner en línea el sitio)

## Previo al deployment: Creación del dominio o subdominio y FTP. (Información sólo para heads de área y personas con acceso al cPanel)

Para tener nuestro proyecto de Red Planet en línea, un paso necesario, es crear el espacio correspondiente dentro del servidor. Para esto:

1. Iniciamos sesión en el servicio de alojamiento (GoDaddy, Site Ground, etc).

2. Abrimos el cPanel.

3. Nos dirigimos a la sección de dominios.

![Save project 01](~@assets/save-01.png "Save project 01")

4. Registramos el dominio o abrimos un subdominio, según corresponda el caso del proyecto.

5. Sea cual sea el caso, es importante cerciorarse que el directorio raíz parta desde la carpeta public_html/ Por ejemplo:

` public_html/dominiodelsitio.com.mx `

6. Damos click en el botón Crear.

![Save project 01](~@assets/save-02.png "Save project 02")

7. Después de haber operado el dominio o subdominio exitosamente, regresamos al cPanel.

8. Acto seguido, nos dirigimos a Cuentas de FTP y damos click.

9. Ya ahí, añadiremos una nueva cuenta de FTP. Especificaremos:
- Inicio de sesión (Nombre de usuario de FTP).
- Dominio (Mismo dominio del sitio a trabajar).
- Generamos una contraseña segura.

10. Importante: En el campo de directorio, debemos especificar que la raíz sea la carpeta public_html/ Por ejemplo:

` /home/admin/public_html/ `

Esto es importante porque si dejamos una raíz más específica, al momento de trabajar con el FTP, podremos ubicar subcarpetas, pero no carpetas superiores a la establecida. 

Si dejamos la carpeta public_html como raíz, tendremos acceso a todas las carpetas de nuestro servidor en las que podamos subir nuestro sitio y hacerlo visible al público.

11. Creamos la cuenta de FTP.

12. Ya con la cuenta lista, damos click en __Configurar cuenta de FTP__. Debemos compartir los datos que ahí se muestran y la contraseña que generamos a la persona que esté trabajando el proyecto, para que pueda realizar el deployment.

## Generación de archivos finales

Ya que hemos terminado de trabajar en nuestro sitio, antes de ponerlo en línea, debemos generar los archivos finales que lo constituyen. Para eso:

1. Nos ubicamos en la terminal de VS Code. Escribimos y ejecutamos el comando:

```
npm run generate
```

![Save project 03](~@assets/save-03.png "Save project 03")

2. Al finalizar la ejecución, se creará una carpeta en la raíz del proyecto llamada ` dist `, misma en donde se encontrarán los archivos que se subirán al servidor.

De manera práctica, encontraremos dicha carpeta, dentro de la carpeta de archivos del proyecto en nuestra computadora.

![Save project 03](~@assets/save-03.png "Save project 03")

3. Con esto realizado, podemos proceder a hacer el upload al hosting.

## Upload a hosting

Para subir nuestro proyecto a su hosting correspondiente, debemos:

1. Abrir FileZilla.

2. Damos click en abrir gestor de sitios (Primer ícono de la barra de herramientas) y escogemos la raíz de nuestro sitio.

![Save project 04](~@assets/save-04.png "Save project 04")


Importante: Si los campos del FTP aparecen vacíos, debemos llenarlos con la información que se nos proporcione del usuario del FTP.

3. Damos click en Conectar.

![Save project 05](~@assets/save-05.png "Save project 05")

4. Al estar conectados, FileZilla nos muestra algunas secciones del lado derecho de la pantalla y otras del izquierdo. Las secciones del lado derecho corresponden al servidor, las del izquierdo, a los archivos que tenemos en nuestra computadora.

5. En el lado del servidor, hay que ubicar la carpeta del sitio. 

Eventualmente, esta será la carpeta de destino a donde subiremos los archivos de nuestro proyecto terminado.

6. En el lado de nuestra computadora, hay que ubicar la carpeta de nuestro proyecto.

![Save project 07](~@assets/save-07.png "Save project 07")

7. La abrimos y nos dirigimos a la subcarpeta ` dist `. Aquí se encuentran todos los archivos generados finales de nuestro proyecto.

8. Abrimos la carpeta ` dist ` y seleccionamos todos los archivos que contenga.

9. Con el mouse, arrastramos nuestra selección a la carpeta del sitio del lado del servidor. 

![Save project 08](~@assets/save-08.png "Save project 08")

10. La transferencia de datos comenzará automáticamente. Esperamos a que termine.

11. Por último, verificaremos que la carga de archivos sea correcta. Abrimos nuestro navegador y nos dirigimos a la URL de nuestro sitio. Lo que debemos de ver es nuestro sitio funcionando en línea. ¡Felicidades! 

![Save project 09](~@assets/save-09.png "Save project 09")

Para más referencias, se sugiere visitar el video correspondiente en el apéndice de la documentación.