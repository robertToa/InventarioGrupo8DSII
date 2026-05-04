# InventarioGrupo8DSII
Este repositorio contiene el código fuente de la implementación de una parte de un sistema de inventario como parte del desarrollo de un proyecto académico.

El sistema está construido utilizando Node.js con Express, aplicando una arquitectura hexagonal la cual permite una separación clara entre las capas de dominio, aplicación e infraestructura.

Para la persistencia de datos se utilizan dos enfoques:

ORM: Sequelize para la gestión de bases de datos relacionales (MySQL).

ODM: Mongoose para la gestión de bases de datos NoSQL (MongoDB).

Ambas tecnologías están integradas dentro de una aplicación basada en Express, permitiendo una arquitectura flexible y escalable.

Integrantes del proyecto

Roberto Toapanta

Xavier Leguisamo

Información académica

Grupo: 8

Carrera: Ingeniería en Sistemas de Información

Materia: Desarrollo de Software II

Arquitectura utilizada

El proyecto sigue los principios de la Arquitectura Hexagonal, separando claramente:

Dominio (lógica de negocio)

Aplicación (casos de uso)

Infraestructura (Sequelize, Mongoose, Express)

Tecnologías utilizadas

Node.js

Express

Sequelize (ORM - MySQL)

Mongoose (ODM - MongoDB)
