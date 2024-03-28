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
-- Table structure for table `education_master`
--

DROP TABLE IF EXISTS `education_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `education_master` (
  `education_id` int DEFAULT NULL,
  `name_of_board` varchar(255) DEFAULT NULL,
  `passing_year` int DEFAULT NULL,
  `percentage` double DEFAULT NULL,
  `education_unique_id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`education_unique_id`),
  KEY `education_id` (`education_id`),
  CONSTRAINT `education_master_ibfk_1` FOREIGN KEY (`education_id`) REFERENCES `BASIC_DETAILS` (`EMPLOYEE_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `education_master`
--

LOCK TABLES `education_master` WRITE;
/*!40000 ALTER TABLE `education_master` DISABLE KEYS */;
INSERT INTO `education_master` VALUES (2,'GSEB',2024,89.25,1),(4,'GSEB',2024,58.36,2),(6,'GSEB',2026,89.56,3),(6,'GSEB',2029,78.56,5),(10,'PHD',2026,89.25,6),(10,'PHD',2026,89.25,7),(11,'PHD',2026,89.25,8),(11,'CBSC',2024,78.45,9),(12,'PHD',2026,89.25,10),(12,'CBSC',2024,78.45,11),(16,'GSEB',2024,89.12,12),(16,'Bachelor_Degree',2026,78.12,13),(46,'GSEB',2010,89.12,14),(46,'Bachelor_Degree',2012,89.32,17),(46,'Master_Degree',2013,78.56,18),(46,'PHD',2014,12.45,19),(46,'CBSC',2011,89.78,20),(47,'GSEB',2015,10.11,21),(47,'Bachelor_Degree',2016,10.13,23),(48,'GSEB',2012,10.11,26),(48,'CBSC',2013,10.12,27),(48,'Bachelor_Degree',2014,10.13,28),(47,'PHD',2013,10.13,29),(47,'Master_Degree',2013,10.13,30),(47,'CBSC',2016,10.13,31);
/*!40000 ALTER TABLE `education_master` ENABLE KEYS */;
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
