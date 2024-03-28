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
-- Table structure for table `OPTIONS_MASTER`
--

DROP TABLE IF EXISTS `OPTIONS_MASTER`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `OPTIONS_MASTER` (
  `ID` int DEFAULT NULL,
  `OPTION_ID` int DEFAULT NULL,
  `OPTION_KEY` varchar(255) NOT NULL,
  `OPTION_VALUE` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`OPTION_KEY`),
  KEY `OPTION_ID` (`OPTION_ID`),
  CONSTRAINT `OPTIONS_MASTER_ibfk_1` FOREIGN KEY (`OPTION_ID`) REFERENCES `SELECT_MASTER` (`SELECT_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `OPTIONS_MASTER`
--

LOCK TABLES `OPTIONS_MASTER` WRITE;
/*!40000 ALTER TABLE `OPTIONS_MASTER` DISABLE KEYS */;
INSERT INTO `OPTIONS_MASTER` VALUES (11,5,'Beginer','Beginer'),(8,3,'CBSC','Others'),(9,4,'Design','Design'),(17,4,'Designing','Designing'),(18,4,'Development','Development'),(15,6,'English','English'),(13,5,'Expert','Expert'),(4,2,'Female','Female'),(6,2,'GSEB','Others'),(16,6,'Gujarati','Gujarati'),(14,6,'Hindi','Hindi'),(7,3,'ICSC','Others'),(3,2,'Male','Male'),(10,4,'Marketing','Marketing'),(1,1,'Married','Married'),(12,5,'Mideator','Mideator'),(5,2,'Others','Others'),(2,1,'Unmarried','Unmarried');
/*!40000 ALTER TABLE `OPTIONS_MASTER` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-28 14:36:04
