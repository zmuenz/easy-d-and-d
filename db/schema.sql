DROP DATABASE IF EXISTS characters_db;
CREATE DATABASE characters_db;

USE characters_db;

DROP TABLE IF EXISTS characters;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    userName varchar (30) NOT NULL,
    email varchar(255) NOT NULL,
    password varchar (255) NOT NULL,
    status varchar (8) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE characters (
    id int NOT NULL AUTO_INCREMENT,
    username varchar(30) NOT NULL,
    character_name varchar(255) NOT NULL,
    gender varchar(255) NOT NULL,
    race varchar(255) NOT NULL,
    class varchar(255) NOT NULL,
    dex int NOT NULL,
    intel int NOT NULL, 
    cha int NOT NULL, 
    stre int NOT NULL, 
    con int NOT NULL, 
    wis int NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO users (id, userName, email, password, status)
VALUES (1, "Test908", "Test@Test.com", "testword", "inactive");