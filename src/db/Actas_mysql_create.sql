CREATE TABLE `Actas` (
	`id_actas` bigint NOT NULL AUTO_INCREMENT,
	`date_Creation` DATE NOT NULL,
	`name_Student` TEXT NOT NULL,
	`id_Student` bigint NOT NULL,
	`id_Folder` bigint NOT NULL,
	`degree` TEXT NOT NULL,
	`degree_plan` int NOT NULL,
	`date_limit` DATE NOT NULL,
	`id_ceremony_fk` bigint NOT NULL,
	PRIMARY KEY (`id_actas`)
);

CREATE TABLE `Sinoidales` (
	`id_sinoidales` bigint NOT NULL AUTO_INCREMENT,
	`first_Name` TEXT NOT NULL,
	`second_Name` TEXT NOT NULL,
	`email` TEXT NOT NULL,
	`telephone` TEXT NOT NULL,
	`area` TEXT NOT NULL,
	`disponibility` int NOT NULL,
	PRIMARY KEY (`id_sinoidales`)
);

CREATE TABLE `actas_sinoidales` (
	`id_actas_fk` bigint NOT NULL,
	`id_sinoidales_fk` bigint NOT NULL,
	`date` DATE NOT NULL,
	`id_ceremony` bigint NOT NULL
);

CREATE TABLE `Folder` (
	`id_folder` bigint NOT NULL AUTO_INCREMENT,
	`case` bigint NOT NULL,
	PRIMARY KEY (`id_folder`)
);

CREATE TABLE `Ceremony` (
	`id_ceremony` bigint NOT NULL AUTO_INCREMENT,
	`Cicle` TEXT NOT NULL,
	`date` DATE NOT NULL,
	PRIMARY KEY (`id_ceremony`)
);

ALTER TABLE `Actas` ADD CONSTRAINT `Actas_fk0` FOREIGN KEY (`id_Folder`) REFERENCES `Folder`(`id_folder`);

ALTER TABLE `Actas` ADD CONSTRAINT `Actas_fk1` FOREIGN KEY (`date_limit`) REFERENCES `Ceremony`(`date`);

ALTER TABLE `Actas` ADD CONSTRAINT `Actas_fk2` FOREIGN KEY (`id_ceremony_fk`) REFERENCES `Ceremony`(`id_ceremony`);

ALTER TABLE `actas_sinoidales` ADD CONSTRAINT `actas_sinoidales_fk0` FOREIGN KEY (`id_actas_fk`) REFERENCES `Actas`(`id_actas`);

ALTER TABLE `actas_sinoidales` ADD CONSTRAINT `actas_sinoidales_fk1` FOREIGN KEY (`id_sinoidales_fk`) REFERENCES `Sinoidales`(`id_sinoidales`);

ALTER TABLE `actas_sinoidales` ADD CONSTRAINT `actas_sinoidales_fk2` FOREIGN KEY (`date`) REFERENCES `Ceremony`(`date`);

ALTER TABLE `actas_sinoidales` ADD CONSTRAINT `actas_sinoidales_fk3` FOREIGN KEY (`id_ceremony`) REFERENCES `Ceremony`(`id_ceremony`);






