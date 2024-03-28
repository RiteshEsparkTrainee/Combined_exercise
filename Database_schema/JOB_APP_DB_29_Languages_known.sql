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
-- Table structure for table `Languages_known`
--

DROP TABLE IF EXISTS `Languages_known`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Languages_known` (
  `id` int DEFAULT NULL,
  `Languages_known` varchar(255) DEFAULT NULL,
  `can_read` varchar(255) DEFAULT 'NO',
  `can_write` varchar(255) DEFAULT 'NO',
  `can_speak` varchar(255) DEFAULT 'NO',
  `language_unique_id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`language_unique_id`),
  KEY `id` (`id`),
  KEY `Languages_known` (`Languages_known`),
  CONSTRAINT `Languages_known_ibfk_1` FOREIGN KEY (`id`) REFERENCES `BASIC_DETAILS` (`EMPLOYEE_ID`),
  CONSTRAINT `Languages_known_ibfk_2` FOREIGN KEY (`Languages_known`) REFERENCES `OPTIONS_MASTER` (`OPTION_KEY`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Languages_known`
--

LOCK TABLES `Languages_known` WRITE;
/*!40000 ALTER TABLE `Languages_known` DISABLE KEYS */;
INSERT INTO `Languages_known` VALUES (1,'Hindi','NO','YES','NO',1),(1,'English','NO','YES','NO',2),(2,'Hindi','NO','YES','NO',3),(2,'English','NO','YES','NO',4),(3,'Hindi','YES','NO','NO',5),(4,'Hindi','YES','YES','YES',6),(5,'Hindi','YES','NO','YES',7),(5,'English','NO','YES','YES',8),(5,'Gujarati','YES','NO','NO',9),(6,'Hindi','YES','YES','YES',10),(6,'English','YES','YES','YES',11),(6,'Gujarati','YES','YES','YES',12),(11,'Hindi','NO','YES','YES',13),(11,'English','YES','NO','YES',14),(12,'Hindi','YES','YES','YES',15),(12,'English','NO','YES','YES',16),(15,'Hindi','NO','YES','YES',17),(15,'English','YES','YES','YES',18),(16,'Hindi','YES','YES','NO',19),(16,'Gujarati','NO','YES','YES',20),(17,'Hindi','YES','NO','NO',21),(18,'Hindi','YES','NO','NO',22),(21,'Hindi','YES','NO','NO',24),(22,'Hindi','YES','NO','NO',25),(23,'Hindi','YES','YES','NO',26),(24,'Hindi','YES','NO','NO',27),(25,'Hindi','YES','NO','NO',28),(26,'Hindi','YES','NO','NO',29),(27,'Hindi','YES','NO','NO',30),(28,'Hindi','YES','NO','NO',31),(29,'Hindi','YES','NO','NO',32),(30,'Hindi','YES','NO','NO',33),(31,'Hindi','YES','NO','NO',34),(32,'Hindi','YES','NO','NO',35),(33,'Hindi','YES','NO','NO',36),(34,'Hindi','YES','NO','NO',37),(35,'Hindi','YES','NO','NO',38),(36,'Hindi','YES','NO','NO',39),(37,'Hindi','YES','NO','NO',40),(38,'Hindi','YES','NO','NO',41),(39,'Hindi','YES','NO','NO',42),(40,'Hindi','YES','NO','NO',43),(41,'Hindi','YES','NO','NO',44),(42,'Hindi','YES','NO','NO',45),(43,'Hindi','YES','NO','NO',46),(44,'Hindi','YES','NO','NO',47),(45,'Hindi','YES','NO','NO',48),(20,'Hindi','YES','NO','NO',60),(20,'English','YES','NO','NO',61),(20,'Gujarati','YES','NO','NO',62),(22,'English','YES','NO','NO',63),(23,'English','NO','NO','YES',64),(23,'Gujarati','YES','NO','NO',65);
/*!40000 ALTER TABLE `Languages_known` ENABLE KEYS */;
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
