CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id INTEGER AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(100) NOT NULL,
    devoured boolean NOT NULL,
  	date timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
    );

DESCRIBE burgers;

SELECT * FROM burgers;