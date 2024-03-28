-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: JOB_APP_DB_29
-- ------------------------------------------------------
-- Server version	8.0.36-0ubuntu0.20.04.1

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

--
-- Table structure for table `Technologies_you_know`
--

DROP TABLE IF EXISTS `Technologies_you_know`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Technologies_you_know` (
  `technology_id` int DEFAULT NULL,
  `technologies_known` varchar(255) DEFAULT NULL,
  `level_of_expertise` varchar(255) DEFAULT NULL,
  `technologies_unique_id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`technologies_unique_id`),
  KEY `technology_id` (`technology_id`),
  KEY `level_of_expertise` (`level_of_expertise`),
  CONSTRAINT `Technologies_you_know_ibfk_1` FOREIGN KEY (`technology_id`) REFERENCES `BASIC_DETAILS` (`EMPLOYEE_ID`),
  CONSTRAINT `Technologies_you_know_ibfk_2` FOREIGN KEY (`level_of_expertise`) REFERENCES `OPTIONS_MASTER` (`OPTION_KEY`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Technologies_you_know`
--

LOCK TABLES `Technologies_you_know` WRITE;
/*!40000 ALTER TABLE `Technologies_you_know` DISABLE KEYS */;
INSERT INTO `Technologies_you_know` VALUES (1,'PHP','Beginer',1),(1,'Mysql','Mideator',2),(2,'PHP','Beginer',3),(2,'Mysql','Mideator',4),(3,'PHP','Mideator',5),(4,'PHP','Beginer',6),(5,'Oracle','Beginer',7),(5,'Oracle','Beginer',8),(5,'Oracle','Beginer',9),(5,'Oracle','Beginer',10),(6,'PHP','Beginer',11),(6,'Mysql','Mideator',12),(6,'Laravel','Beginer',13),(6,'Oracle','Beginer',14),(11,'Oracle','Mideator',15),(11,'Oracle','Mideator',16),(11,'Oracle','Mideator',17),(12,'Oracle','Beginer',18),(12,'Oracle','Beginer',19),(12,'Oracle','Beginer',20),(16,'Oracle','Beginer',21),(16,'Oracle','Beginer',22),(17,'PHP','Expert',23),(17,'Mysql','Beginer',24),(18,'Oracle','Mideator',26),(18,'Oracle','Mideator',27),(18,'Oracle','Mideator',28),(18,'Oracle','Mideator',29),(19,'PHP','Expert',30),(19,'Mysql','Beginer',31),(19,'Laravel','Beginer',32),(19,'Oracle','Mideator',33),(20,'PHP','Mideator',34),(21,'PHP','Expert',35),(22,'PHP','Mideator',36),(23,'PHP','Expert',37),(24,'PHP','Expert',38),(25,'PHP','Expert',39),(26,'PHP','Expert',40),(27,'PHP','Expert',41),(28,'PHP','Expert',42),(29,'PHP','Expert',43),(30,'PHP','Expert',44),(31,'PHP','Expert',45),(32,'PHP','Expert',46),(33,'PHP','Expert',47),(34,'PHP','Expert',48),(35,'PHP','Expert',49),(36,'PHP','Expert',50),(37,'PHP','Expert',51),(38,'PHP','Expert',52),(39,'PHP','Expert',53),(40,'PHP','Expert',54),(41,'PHP','Expert',55),(42,'PHP','Expert',56),(43,'PHP','Expert',57),(44,'PHP','Expert',58),(45,'PHP','Expert',59),(22,'Mysql','Expert',60),(22,'Laravel','Beginer',61),(22,'Oracle','Mideator',62),(23,'Mysql','Beginer',63),(23,'Laravel','Mideator',64),(23,'Oracle','Expert',65);
/*!40000 ALTER TABLE `Technologies_you_know` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-28 14:33:45
