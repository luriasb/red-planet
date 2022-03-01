# INTRODUCCIÓN Y REQUISITOS (ANTES DE TRABAJAR UN PROYECTO RED PLANET)

## Introducción

Red Planet es una herramienta de, [Life On Mars](https://lifeonmars.com.mx) (LOM), creada con el objetivo de generar sitios sencillos con una estructura one page, a través del uso de un grupo de componentes predefinidos. Facilitando así, el flujo de trabajo de LOM en este tipo de proyectos.

Red Planet tiene como finalidad, generar sitios web accesibles para negocios en crecimiento (PyME’s). Por lo que generar una página web Red Planet debe ser ágil, rápido y sencillo.

## Requisitos

Para generar un sitio Red Planet es necesario tener instaladas las siguientes herramientas:


| Software                                    |  Versión                    |  Uso          |
| ------------------------------------------- | --------------------------- | ------------- | 
| [Node](https://nodejs.org/es/)              | Versión 12.0 LTS o superior | Indispensable |
| [VS Code](https://code.visualstudio.com/)   | Última versión disponible   | Indispensable |
| [Git](https://git-scm.com/)                 | Última versión disponible   | Recomendado   |
| [Filezilla](https://filezilla-project.org/) |Última versión disponible    | Indispensable |


## Instalación del repositorio

Para poder trabajar un proyecto Red Planet, es necesario tener instalado el repositorio del mismo. Para eso, existen dos opciones: la instalación manual y clonando el repositorio con Git.

Sólo es necesario hacer la instalación de una sola manera. Si se descarga la carpeta .Zip desde GitHub, ya no es necesario clonar el repositorio y viceversa.

Importante: Siempre hay que tener en cuenta que debemos descargar la última versión del repositorio. La última versión siempre es la que está disponible en GitHub, por lo que si se tienen archivos anteriores ya descargados en la computadora, es necesario desecharlos.

## Opción 1: Instalación manual

Para la instalación manual, hay que seguir los siguientes pasos:

1. Entrar al [repositorio](https://github.com/luriasb/red-planet) en GitHub.

2. Descargar el proyecto, usando el botón verde de código (Code) y después, en el botón verde, Descargar.zip.

` Repositorio → Código (Code) → Descargar .Zip } `

![Clon 01](~@assets/git-01.png "Clon 01")

3. Una vez descargado el .Zip del repositorio, descomprimir el archivo y abrirlo con Visual Studio Code.

## Opción 2: Instalación clonando el repositorio con Git

Si se cuenta con Git instalado en el sistema, se puede hacer la instalación clonando el repositorio. Para hacerlo de esta manera, hay que seguir los siguientes pasos:

1. Entrar a la terminal.

2. Escribir y ejecutar el comando:

``` bash
git clone https://github.com/luriasb/red-planet.git
```

Después, escribir y ejecutar el siguiente comando:

``` bash
cd red-planet
```

## Instalar dependencias

Para instalar las dependencias del proyecto se realizan los siguientes pasos:

1. Abrir VS Code.

2. Ir al menú __Archivo__, dar click en __Abrir__ y seleccionar la carpeta del proyecto.

Archivo → Abrir → Seleccionar carpeta del proyecto.

3. Abrir la terminal en el VS Code.

- Comando en Mac: `cmd + j`
- Comando en Windows: `ctrl + ñ`
- O dar click en el botón __Ver__ de la barra de menú y después en __Terminal__
- `Ver → Terminal`

4. Dentro de la terminal, es necesario verificar que ya tenemos instalado el Node. Para esto escribir y ejecutar el comando:

``` bash
node -v
```

5. La terminal nos indica qué versión de Node tenemos instalada. 

Para poder trabajar necesitamos la versión 12 LTS o superior. Sólo en caso de tener una versión inferior a ésta, escribir y ejecutar:

``` bash
nvm use 12
```

Nota: Si previamente se instaló una versión superior a la 12 LTS, podemos saltar este paso.

6. Continuamos con la instalación de dependencias del proyecto. Dentro de la terminal, escribir y ejecutar el comando:

``` bash
npm install
```

7. Esperar a que se carguen todas las dependencias hasta que se pueda escribir de nuevo en la terminal.

![Dependencia 01](~@assets/dep-01.png "Dpendencia 01")

8. A continuación, abriremos el servidor local. Escribir y ejecutar el comando:

``` bash
npm run dev
```
![Dependencia 02](~@assets/dep-02.png "Dpendencia 02")

9. Esperar a que trabaje la terminal. Al finalizar encontraremos un liga con el servidor local de nuestro proyecto. Normalmente es [https://localhost:3000](https://localhost:3000)

- Abrir liga en Mac: `cmd + click en la liga`.
- Abrir liga en Windows: `alt + click en la liga`.
- O en cualquiera de los casos, copiar la liga de la terminal y pegarla en el browser que mejor nos funcione. 

10. Al abrir la liga del servidor local, encontraremos una página en blanco. Sin embargo, conforme modifiquemos el proyecto, podremos ir observando nuestro avance en esta misma página.

![Dependencia 03](~@assets/dep-03.png "Dependencia 03")
