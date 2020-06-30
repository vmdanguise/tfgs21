
CREATE SCHEMA pilates_virtual_class ;

CREATE TABLE IF NOT EXISTS usuarios (
  usuario varchar(8) NOT NULL,
  contrasena varchar(45) DEFAULT NULL,
  rol varchar(45) DEFAULT NULL,
  nacimiento date DEFAULT NULL,
  dni int DEFAULT NULL,
  sexo tinyint DEFAULT NULL,
  PRIMARY KEY (usuario)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

INSERT INTO pilates_virtual_class.usuarios (usuario,contrasena,rol,nacimiento,dni,sexo) VALUES ('admin', 'admin', 'SuperAdmin', '01-02-1984', '11111111', '1');
