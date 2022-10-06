
[README_spa](https://github.com/jlarata/portfolio/edit/main/README.md) / [README_en](https://github.com/jlarata/portfolio/edit/main/README_en)

# d3c's Portfolio

Este es el trabajo final para promocionar el curso #YoProgramo dictado por INTI / Ministerio de Desarrollo Productivo, durante el año 2022. Consiste en una plataforma _full stack_ utilizando los lenguajes TypeScript y Java, el motor de Base de Datos MySql, y los Frameworks Angular y SpringBoot.

El desafío planteado fue desarrollar el portfolio para un desarrollador. Para aprovechar mejor las habilidades aprendidas, en lugar de eso elegí desarrollar una plataforma que administra y despliega los portfolios de una empresa imaginaria llamada d3c.

El _front end_ está montado en Angular y hosteado en firebase, inspirado en [este template](https://www.youtube.com/watch?v=LOMm7W9R0Oo). la API Rest está desarrollada con Java Springboot y desplegada en Heroku, tomando ideas de [este proyecto](https://inezpre5.wordpress.com/2019/04/15/jwt-con-spring-boot-mysql-y-angular-7-capitulo-1-presentacion-del-proyecto/). La base de datos es MySQL y está hosteada en Clever Cloud. 

# frontend

[repositorio](https://github.com/jlarata/portfolio)
<br>

[web](https://portfolio-1dac6.web.app/)

 # backend

[repositorio](https://github.com/jlarata/fspf)
<br>

[web](http://fspf.herokuapp.com/)


El sitio funciona con un sistema de seguridad jwt JSON validado por la API. Para navegar el sitio por favor usar las siguientes credenciales.

Usuario: user
<br>
Password: discordfyl

 # funcionamiento

Por fuera del sistema de autenticación y seguridad la API funciona básicamente a partir de cuatro clases de objeto: objeto.entity, objeto.service, objeto.repository y objeto.controller. Para evitar redundancias, solo están documentados el objeto Persona y el objeto Producto (objeto no instrumentado, solo para desarrollo y pruebas). Pero todos los demás objetos están desarrollados con atributos y métodos muy similares.

 # métodos

En cada objeto.controller pueden encontrarse los métodos que implementan las llamadas GET, POST, PUT y DELETE. Cada componente o visualización del Front End (es una One Page Application) se corresponde con uno o varios métodos de un objeto.controller en el backend que, a su vez, despliega, modifica, crea o elimina valores en las tablas de la Base de Datos. En lugar de que cada visualización/componente despiegue un sencillo GET de una tabla, diseñé una serie de tablas que se relacionan entre ellas, y desarrollé por completo los métodos que implementan los SELECT+JOIN correspondientes. Por ejemplo: 

@GetMapping("/habilidadporid/{id}")

dentro de https://github.com/jlarata/fspf/blob/main/src/main/java/com/portfolio/fspf/controller/HabilidadController.java

 # más métodos

Los métodos que implementan POST y PUT y DELETE solamente son accesibles desde la pantalla "Admin Panel", que es visibe solamente cuando se loguea con privilegios de administrador.

Gracias por leer y para cualquier comentario, escribir a ariel@cfee.gob.ar
