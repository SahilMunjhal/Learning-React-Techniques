CREATE DATABASE IF NOT EXISTS sahildb;

USE sahildb;

DROP TABLE IF EXISTS department_information;

CREATE TABLE department_information (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    departMent_Name VARCHAR(255) DEFAULT NULL,
    departMent_Zone VARCHAR(255) DEFAULT NULL,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    CONSTRAINT UQ_Department_information_DepartMent_Name UNIQUE (departMent_Name)
);