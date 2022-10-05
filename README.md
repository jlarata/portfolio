
# d3c's Portfolio

Este es el trabajo final para promocionar el curso #YoProgramo dictado por INTI / Ministerio de Desarrollo Productivo, durante el año 2022. Consiste en una plataforma _full stack_ utilizando los lenguajes TypeScript y Java, el motor de Base de Datos MySql, y los Frameworks Angular y SpringBoot.

El desafío planteado fue desarrollar el portfolio para un desarrollador. Para aprovechar mejor las habilidades aprendidas, en lugar de eso elegí desarrollar una plataforma que administra y despliega los portfolios de una empresa imaginaria llamada d3c.

El _front end_ está montado en Angular y hosteado en firebase, inspirado en [este template:](https://www.youtube.com/watch?v=LOMm7W9R0Oo). la API Rest está desarrollada con Java Springboot y desplegada en Heroku, tomando ideas de [este proyecto:](https://inezpre5.wordpress.com/2019/04/15/jwt-con-spring-boot-mysql-y-angular-7-capitulo-1-presentacion-del-proyecto/). La base de datos es MySQL y está hosteada en Clever Cloud. 

# frontend

[repo:](https://github.com/jlarata/portfolio)
[web:](https://portfolio-1dac6.web.app/)

 # backend

[web:](http://fspf.herokuapp.com/)
[repo:](https://github.com/jlarata/fspf)

El sitio funciona con un sistema de seguridad jwt JSON validado por la API. Para navegar el sitio por favor usar las siguientes credenciales.

Usuario: user
Password: discordfyl

Por fuera del sistema de autenticación y seguridad la API funciona básicamente a partir de cuatro clases de objeto: clase.entity, clase.service, clase.repository y clase.controller. Para evitar redundancias, solo están documentados el objeto Persona y el objeto Producto (objeto no instrumentado, solo para desarrollo y pruebas). Pero todos los demás objetos están desarrollados con atributos y métodos muy similares.

