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
-- Table structure for table `WORK_EXPERIENCE`
--

DROP TABLE IF EXISTS `WORK_EXPERIENCE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `WORK_EXPERIENCE` (
  `worker_id` int DEFAULT NULL,
  `Company_name` varchar(255) DEFAULT NULL,
  `Designation` varchar(255) DEFAULT NULL,
  `_From` date DEFAULT NULL,
  `_TO` date DEFAULT NULL,
  `work_experience_unique_id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`work_experience_unique_id`),
  KEY `worker_id` (`worker_id`),
  CONSTRAINT `WORK_EXPERIENCE_ibfk_1` FOREIGN KEY (`worker_id`) REFERENCES `BASIC_DETAILS` (`EMPLOYEE_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `WORK_EXPERIENCE`
--

LOCK TABLES `WORK_EXPERIENCE` WRITE;
/*!40000 ALTER TABLE `WORK_EXPERIENCE` DISABLE KEYS */;
INSERT INTO `WORK_EXPERIENCE` VALUES (1,'E-sparkBiz','O','2003-12-06','2003-12-06',1),(4,'E','C','2003-12-06','2003-12-06',2),(6,'E-sparkBiz','ds','2003-12-06','2003-12-06',3),(6,'E-sparkBiz','ds','2003-12-06','2003-12-06',4),(6,'fgsdgfd','trghde','2003-12-06','2003-12-06',5),(6,'fgsdgfd','trghde','2003-12-06','2003-12-06',6),(11,'rtwet','Operational Managaer','2003-12-06','2003-12-06',10),(11,'rtwet','Operational Managaer','2003-12-06','2003-12-06',11),(11,'rtwet','Operational Managaer','2003-12-06','2003-12-06',12),(12,'E-sparkBiz','Operational Managaer','2003-12-08','2003-12-06',13),(12,'dfgfgfg','Operational Managaer','2003-12-06','2003-12-06',14),(12,'rtwet','Operational Managaer','2003-12-06','2003-12-06',15),(16,'gozilla','kasu nathu','2000-12-08','2003-12-04',16),(16,'fgsdgfd','dfas','2003-12-08','2000-12-08',17),(22,'mohitasdfawdf','asfdsdfgfdg','2003-12-06','2003-12-06',18),(22,'mohit','asfdsdfgfdg','2003-12-06','2003-12-06',19),(22,'mohit','asfdsdfgfdg','2003-12-06','2003-12-06',20),(22,'mohit','asfdsdfgfdg','2003-12-06','2003-12-06',21),(22,'mohitdfaw','asfdsdfgfdg','2003-12-06','2003-12-06',22),(26,'adfgs','asdfg','2003-12-06','2003-12-06',23),(26,'adfgs','asdfg','2003-12-06','2003-12-06',24),(26,'adfgs','asdfg','2003-12-06','2003-12-06',25),(26,'adfgs','asdfg','2003-12-06','2003-12-06',26),(26,'adfgs','asdfg','2003-12-06','2003-12-06',27),(23,'sdrgsdf','gfsa','2003-12-06','2003-12-06',28),(23,'sdrgsdf','gfsa','2003-12-06','2003-12-06',29),(23,'sdrgsdf','gfsa','2003-12-06','2003-12-06',30),(23,'sdrgsdf','gfsa','2003-12-06','2003-12-06',31),(23,'sdrgsdf','gfsa','2003-12-06','2003-12-06',32),(23,'sdrgsdf','gfsa','2003-12-06','2003-12-06',33),(23,'sdrgsdf','gfsa','2003-12-06','2003-12-06',34),(24,'sdfg','sdfg','2003-12-06','2003-12-06',35),(24,'sdfg','sdfg','2003-12-06','2003-12-06',36),(24,'sdfg','sdfg','2003-12-06','2003-12-06',37),(24,'sdfg','sdfg','2003-12-06','2003-12-06',38),(10,'gersdfgr','O','2003-12-06','2003-12-06',42);
/*!40000 ALTER TABLE `WORK_EXPERIENCE` ENABLE KEYS */;
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
