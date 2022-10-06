
[README_spa](https://github.com/jlarata/portfolio/edit/main/README.md) / [README_en](https://github.com/jlarata/portfolio/blob/main/README_en.md)

# d3c Portfolio

This is the final project to complete the 2022 _YoProgramo_ course dictated by "Inti / Ministerio de Desarrollo Productivo."

The assignement consist of developing a web platform using Angular (Typescript) and Springboot (Java + MySql).
I've choosen to build a portfolio of a non-existing company called _d3c_. 

The frontend is built with Angular and hosted on Firebase based on [the following template](https://www.youtube.com/watch?v=LOMm7W9R0Oo.)

The backend consist of a Java Rest API developed by Java Springbbot and deployed on Heroku. I've used [the following tutorial](https://inezpre5.wordpress.com/2019/04/15/jwt-con-spring-boot-mysql-y-angular-7-capitulo-1-presentacion-del-proyecto/) as reference for building the backend.

The MySQL database instance is hosted on 
_Clever Cloud_

# Frontend

[repository](https://github.com/jlarata/portfolio)
[web](https://portfolio-1dac6.web.app/)

# Backend

[repository:](https://github.com/jlarata/fspf)
[web:](http://fspf.herokuapp.com/)

This site uses a JWT JSON API validated security system. Please use the following credentials to navigate it:

user: user
Password: discordfyl

# Logic

Besides security and authentication, the API's logic is based on four object classes: Object.Entity, Object.Service, Object.Repository and Object.

You can check the documentation in 'Persona' or 'Producto' objects. The other objects have similar methods and attributes.

# Methods

GET, POST, PUT and DELETE methods can be found in each objeto.controller. The frontend is a One Page Application, and each component/visualization matches one or several methods of an object.controller in the backend. 
Each method show, modify, create or eliminate values on the Database. Instead of asigning one visualization to one GET-method for each table, i've designed several tables with 1:1 or 1:* relations, and designed from scrath the methods to implement SELECT+JOIN querys. 

For example:

@GetMapping("/habilidadporid/{id}")

within https://github.com/jlarata/fspf/blob/main/src/main/java/com/portfolio/fspf/controller/HabilidadController.java

# More Methods

The POST, PUT and DELETE corresponding methods are onle accesibles from the "Admin Panel" screen, visible only after loggin with Admin privileges.

Thank you for reading. For comments and suggestions, write to ariel@cfee.gob.ar.

