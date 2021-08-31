# Introducción

Red Planet es una herramienta creada en [Life on Mars](https://lifeonmars.com.mx) con el objetivo de generar sitios web sencillos reutilizando un grupo de componentes predefinidos, la cuál, facilite el flujo de trabajo que se tiene en la agencia.


## Requisitos

Para poder usar la herramienta es necesario tener instalado lo siguiente:

- [Node](https://nodejs.org/es/) => 12.0
- [VS Code](https://code.visualstudio.com/) (Opcional)
- [Git](https://git-scm.com/) (Opcional)

## Instalación

Existen dos formas de conseguir el proyecto para trabajar con el, la manual o clonando el proyecto con Git.

### Manual

Entra al [repositorio](https://github.com/luriasb/red-planet) y descarga el proyecto dando click en el botón verde de Código > Descargar Zip.

Una vez descargado el zip, descomprime el archivo.

### Clonar Repositorio

Si se cuenta con Git instalado en el sistema, se puede clonar el repositorio con el siguiente comando desde la terminal:

``` bash
git clone https://github.com/luriasb/red-planet.git
```

Posterormente entra a la carpeta con el siguiente comando:

``` bash
cd red-planet
```

### Instalar dependencias

Abrir el proyecto con VS Code, en el menú de __Archivo__ dar click a __Abrír...__ y seleccionar la carpeta del proyecto de Red Planet.

Una vez que se ha abierto el proyecto, apretar `cmd + j` y se abrirá la terminal, en esta, escribir lo siguiente:

``` bash
npm install
```

Una vez que se han terminado de instalar las dependencias podemos comenzar a trabajar en el proyecto, para esto escribir en la terminal lo siguiente:

```bash
npm run dev 
```

Esto lanzará el servidor local en donde podremos ver los cambios de nuestro proyecto. Solo tenemos que entrar a la liga que nos arroja la consola, normalmente es [https://localhost:3000](https://localhost:3000) 