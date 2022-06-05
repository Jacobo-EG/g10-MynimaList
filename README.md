# MynimaList

*MynimaList* consiste en una aplicación web minimalista e intuitiva para realizar anotaciones como listas de tareas, ideas de proyectos o recordatorios.

*MynimaList* es el proyecto final de un grupo de estudiantes del doble grado de Ingienería Informática + Matemáticas, correspondiente a la asignatura de *Introducción a la Ingienería del Software.*


## Comenzando 🚀	

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

### Pre-requisitos 📋

Para poder ver la web en un navegador se debe de tener instalado **React**. Para instalar acceder a la web de [React](https://reactjs.org/). Para comprobar que esta instalado correctamente: 

```
npm --version 
```

Con esto sera posible visionar el front-end. Para hacer funcionar el back-end: 


### Instalación: Descarga el codigo fuente 🔧

En caso de tener instalado `git`, basta con clonar el repositorio

```
git clone https://github.com/Jacobo-EG/g10-MynimaList.git
```

o puede descargar el codigo directamente desde [este enlace](https://github.com/Jacobo-EG/g10-MynimaList/archive/refs/heads/main.zip)

Para lanzar el proyecto, ejecutar el front-end, hacer en la carpeta g10-MynimaList/mynimalist/

```
npm install
```

para instalar las dependencias necesarias, y para lanzar el proyecto: 

```
npm start
```

En cuento al back-end, para lanzar la base de datos en local hay que tener instalado [PostgreSQL](https://www.postgresql.org/)

Para comprabar que esta instalado correctamente: 
```
postgres --version
```

A continuación, creamos un usuario las credenciales que aparecen en el archivo `application.yml` en la ruta MynimalistAPI/target/classes y lanzarlo.

```
CREATE USER myuser WITH PASSWORD 'secret_passwd';
```


## Despliegue 📦

Puedes encontrar la última version de *MynimaList* online en el siguiente [enlace](http://mynimalist.herokuapp.com/).

## Construido con 🛠️
Para el front-end:

* [React](https://es.reactjs.org/)
* [Axios](https://www.npmjs.com/package/axios)
* [React Bootstrap Icons](https://www.npmjs.com/package/react-bootstrap-icons)

Para el back-end: 

* [Java 17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
* [Spring Boot](https://spring.io/projects/spring-boot) 
* [Lombok](https://projectlombok.org/)
* [Spring Security](https://spring.io/projects/spring-security)
* [Aut0 - JWT](https://auth0.com/docs/secure/tokens/json-web-tokens)
* [Spring Data JPA](https://spring.io/projects/spring-data-jpa)


## Autores ✒️
Los alumnos del doble grado de Matemáticas + Ingienería Informática que han realizado este proyecto han sido: 

- **Jesús Escudero Moreno** - [xexu65](https://github.com/xexu65)

- **José Antonio Luque Salguero** - [joseantoniols1212](https://github.com/joseantoniols1212)

- **Jacobo Elicha Garrucho** - [Jacobo-EG](https://github.com/Jacobo-EG)

- **David Ramírez Palacios** - [davidraamirez](https://github.com/davidraamirez)

- **Isidro Javier García Fernández** - [Isi-17](https://github.com/Isi-17)

- **Julia Pérez Barreales** - [juliabarreales](https://github.com/juliabarreales)

- **Álvaro Sánchez Hernández** - [alvarosh15](https://github.com/alvarosh15)

- **Juan Manuel García Delgado** - [juanmagdev](https://github.com/juanmagdev)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/Jacobo-EG/g10-MynimaList/graphs/contributors) quíenes han participado en este proyecto. 


