# Introducción

Red Planet es una herramienta creada en [Life on Mars](https://lifeonmars.com.mx) con el objetivo de generar sitios web sencillos reutilizando un grupo de componentes predefinidos, la cuál, facilite el flujo de trabajo que se tiene en la agencia.


## Requisitos

Para poder usar la herramienta es necesario tener instalado lo siguiente:

- [Node](https://nodejs.org/es/) => Versión 12.0 (Indispensable)
- [VS Code](https://code.visualstudio.com/) (Indispensable)
- [Filezilla](https://filezilla-project.org/)(Indispensable)
- [Git](https://git-scm.com/) (Recomendado)

## Instalación

Existen dos formas de conseguir el proyecto para trabajar con él: la manual o clonando el proyecto con Git.

### Manual

Entra al [repositorio](https://github.com/luriasb/red-planet) y descarga el proyecto dando click en el botón verde de Código > Descargar Zip.

![Clon 01](~@assets/git-01.png "Clon 01")

Una vez descargado el zip, descomprime el archivo.

### Clonar Repositorio

Si se cuenta con Git instalado en el sistema, se puede clonar el repositorio con el siguiente comando desde la terminal:

``` bash
git clone https://github.com/luriasb/red-planet.git
```

Posteriormente entra a la carpeta con el siguiente comando:

``` bash
cd red-planet
```

Nota importante: Si descargaste la carpeta zip desde GitHub, ya no es necesario clonar el repositorio. Siempre hay que tener en cuenta que debemos descargar la última versión del repositorio.

### Instalar dependencias

Abrir el proyecto con VS Code, en el menú de __Archivo__ dar click a __Abrír...__ y seleccionar la carpeta del proyecto de Red Planet.

Una vez que se ha abierto el proyecto, apretar `cmd + j` (Mac) o `ctrl + ñ` (Windows) y se abrirá la terminal, en esta, escribir lo siguiente:

``` bash
npm install
```

![Dependencia 01](~@assets/dep-01.png "Dpendencia 01")


Una vez que se han terminado de instalar las dependencias podemos comenzar a trabajar en el proyecto, para esto escribir en la terminal lo siguiente:

```bash
npm run dev 
```

![Dependencia 02](~@assets/dep-02.png "Dpendencia 02")

Esto lanzará el servidor local en donde podremos ver los cambios de nuestro proyecto. Solo tenemos que entrar a la liga que nos arroja la consola dando `cmd + click` ó `ctrl + click` , normalmente es [https://localhost:3000](https://localhost:3000) 

![Dependencia 03](~@assets/dep-03.png "Dependencia 03")