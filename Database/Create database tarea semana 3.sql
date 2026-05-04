DROP DATABASE IF EXISTS INVENTARIO_BD;
CREATE DATABASE INVENTARIO_BD;
USE INVENTARIO_BD;
CREATE TABLE Cliente (
	id_cliente int auto_increment primary key,
    identificacion varchar(15),
    nombre varchar(100),
    email varchar(100),
    telefono varchar(15),
    direccion varchar(100),
    activo boolean,
    fechaCreacion DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Venta (
	id_venta int auto_increment primary key,
    numeroVenta varchar(15),
    fechaVenta DATETIME DEFAULT CURRENT_TIMESTAMP,
    subtotal decimal(10,2),
    iva decimal(10,2),
    total decimal(10,2),
    activo boolean,
    id_cliente int,
    foreign key (id_cliente) REFERENCES Cliente(id_cliente)
);

CREATE TABLE Categoria (
	id_categoria int auto_increment primary key,
    nombre varchar(100),
    descripcion varchar(100),
    fechaCreacion DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Producto (
	id_producto int auto_increment primary key,
    codigoProducto varchar(15),
    nombre varchar(100),
    descripcion varchar(100),
    unidadMedida varchar(15),
    activo boolean,
    fechaCreacion DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE DetalleVenta (
	id_detalleVenta int auto_increment primary key,
    cantidad int,
    preciounitario decimal(10,2),
    preciototal decimal(10,2),
    id_venta int,
    id_producto int,
    foreign key (id_venta) REFERENCES Venta(id_venta),
    foreign key (id_producto) REFERENCES Producto(id_producto)
);

