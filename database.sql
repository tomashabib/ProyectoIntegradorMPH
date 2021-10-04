-- MySQL dump 10.13  Distrib 8.0.26, for macos11 (x86_64)
--
-- Host: localhost    Database: Proyecto_Integrador_MPH
-- ------------------------------------------------------
-- Server version	5.7.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

create database Proyecto_Integrador_MPH;

use Proyecto_Integrador_MPH;

CREATE TABLE `Post` (
  id int(10) AUTO_INCREMENT PRIMARY KEY,
  image text NOT NULL,
  profile_picture text NOT NULL,
  post_caption varchar(255) DEFAULT NULL
);

CREATE TABLE Comments (
  comment_id int(10) AUTO_INCREMENT PRIMARY KEY,
  com text NOT NULL
);

CREATE TABLE Users (
  firstName varchar(255) NOT NULL,
  surname varchar(255) NOT NULL,
  username varchar(255) NOT NULL UNIQUE,
  height decimal(3,1) NOT NULL,
  weight decimal(3,1) NOT NULL,
  team varchar(255) NOT NULL,
  gamePosition varchar(255) NOT NULL,
  birthDate date NOT NULL,
  age tinyint(4) NOT NULL,
  nationality varchar(255) NOT NULL,
  id int(10) AUTO_INCREMENT PRIMARY KEY
);

ALTER TABLE Post
ADD user_id INT NOT NULL,
ADD FOREIGN KEY (user_id) REFERENCES Users(id) ;

ALTER TABLE Comments
ADD user_id INT NOT NULL,
ADD FOREIGN KEY (user_id) REFERENCES Users(id),
ADD post_id INT NOT NULL,
ADD FOREIGN KEY (post_id) REFERENCES Post(id) ;

ALTER TABLE Users
DROP height,
DROP weight;

INSERT INTO Users (firstName, surname, username, team, gamePosition, birthDate, age, nationality, id)
VALUES ('Lionel', 'Messi', 'leomessi', 'Paris Saint Germain', 'Forward', '1987-07-24', 34, 'Argentina', DEFAULT);

INSERT INTO Users (firstName, surname, username, team, gamePosition, birthDate, age, nationality, id)
VALUES ('Cristiano', 'Ronaldo', 'cristiano', 'Manchester United', 'Forward', '1985-02-05', 36, 'Argentina', DEFAULT);

INSERT INTO Post (id, image, profile_picture, post_caption, user_id)
VALUES (DEFAULT, 'https://www.somosfan.com/wp-content/uploads/2021/09/Cristiano-Ronaldo.jpg', 'https://estaticos-cdn.sport.es/clip/24a12ea8-9380-4181-ba6c-dda114a22c30_alta-libre-aspect-ratio_default_0.jpg', 'Fresh start.', 1);

INSERT INTO Post (id, image, profile_picture, post_caption, user_id)
VALUES (DEFAULT, 'https://ca-times.brightspotcdn.com/dims4/default/c5f4011/2147483647/strip/true/crop/1329x820+0+0/resize/840x518!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F4e%2F7a%2F7cf4817c4f04b9673e8dbb48ce5f%2Fmessi15a.jpg', 'https://www.soyfutbol.com/__export/1628333569988/sites/debate/img/2021/08/07/messi_psg_contrato_firma_crop1628333423417.jpg_943222218.jpg', 'Feliz! Con muchas ganas de comenzar esta nueva etapa de mi carrera deportiva.', 4);

INSERT INTO Comments (comment_id, com, user_id, post_id)
VALUES (DEFAULT, 'Lets get it mate!', 1, 1);

INSERT INTO Comments (comment_id, com, user_id, post_id)
VALUES (DEFAULT, 'Mucha suerte en esta nueva etapa amigo.', 4, 2);

-- Dump completed on 2021-10-04 13:03:19
