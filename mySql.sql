DROP DATABASE IF EXISTS employee_DB;
CREATE database employee_DB;

USE employee_DB;

CREATE TABLE Employee (
  position INT NOT NULL AUTO_INCREMENT,
  EFirstName VARCHAR(100) NULL,
  ELastName VARCHAR(100) NULL,
  PRIMARY KEY (position)
);

CREATE TABLE Managers (
  position INT NOT NULL,
  MFirstName VARCHAR(100) NULL,
  MLastName VARCHAR(100) NULL,
  PRIMARY KEY (position)
);

SELECT * FROM Employee;
select * from Managers;

