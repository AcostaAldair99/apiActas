CREATE TABLE `actasdb`.`actas` (
    `idactas` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `date_Creation` DATE NOT NULL,
    `id_Folder` INT UNSIGNED NOT NULL,
    `name_Student` VARCHAR(45) NOT NULL,
    `id_Student` VARCHAR(45) NOT NULL,
    `degree` VARCHAR(45) NOT NULL,
    `degree_plan` INT NOT NULL,
    `date_Limit` DATETIME NOT NULL,
    PRIMARY KEY (`idactas`))
  COMMENT = '		';


CREATE TABLE `actasdb`.`users` (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `user` VARCHAR(45) NOT NULL,
    `pass` VARCHAR(45) UNSIGNED NOT NULL,
    PRIMARY KEY (`id`))
  COMMENT = '		';




  CREATE TABLE `actasdb`.`sinoidales` (
    `id_sinoidales` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `first_Name` VARCHAR(45) NOT NULL,
    `second_Name` VARCHAR(45) NOT NULL,
    `email` LONGTEXT NOT NULL,
    `telephone` INT NOT NULL,
    `area` LONGTEXT NOT NULL,
    `disponibility` INT NOT NULL,
    PRIMARY KEY (`id_sinoidales`))
  COMMENT = 'This table is for the professors that sign the letters';
  