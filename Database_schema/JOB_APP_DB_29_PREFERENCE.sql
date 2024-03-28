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
-- Table structure for table `PREFERENCE`
--

DROP TABLE IF EXISTS `PREFERENCE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `PREFERENCE` (
  `PREFERENCE_ID` int DEFAULT NULL,
  `Preferred_location` text,
  `Notice_period` text,
  `Expected_ctc` text,
  `Current_ctc` text,
  `Department` varchar(255) DEFAULT NULL,
  `preference_unique_id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`preference_unique_id`),
  KEY `PREFERENCE_ID` (`PREFERENCE_ID`),
  KEY `Department` (`Department`),
  CONSTRAINT `PREFERENCE_ibfk_1` FOREIGN KEY (`PREFERENCE_ID`) REFERENCES `BASIC_DETAILS` (`EMPLOYEE_ID`),
  CONSTRAINT `PREFERENCE_ibfk_2` FOREIGN KEY (`Department`) REFERENCES `OPTIONS_MASTER` (`OPTION_KEY`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PREFERENCE`
--

LOCK TABLES `PREFERENCE` WRITE;
/*!40000 ALTER TABLE `PREFERENCE` DISABLE KEYS */;
INSERT INTO `PREFERENCE` VALUES (1,'','','5 lakh','','Development',1),(2,'','','4 LAKH','','Development',2),(3,'','','5 ','','Development',3),(4,'','','5 ','','Development',4),(5,'','','5 lakh','','Development',5),(6,'','','fdga ','','Development',6),(7,'','','5 LAKH','','Development',7),(8,'','','5 LAKH','','Development',8),(9,'','','5 LAKH','','Development',9),(10,'','','5 lakh','','Development',10),(11,'','','7 lakh','','Development',11),(12,'','','5 lakh','','Development',12),(13,'','','5 lakh','','Development',13),(14,'GASERFWE','5 MONTHS','98 LAKH','78 LAKH','Designing',14),(15,'','','gdfs','','Development',15),(16,'afsrgasd','january','0 lakh','8 lakh','Development',16),(18,'','','5','','Development',17),(19,'','','dfg','','Development',18),(20,'','','981 LAKH','','Development',19),(21,'','','98 LAKH','','Development',20),(22,'','','98 LAKH','','Development',21),(23,'','','98 LAKH','','Development',22),(24,'','','98 LAKH','','Development',23),(25,'','','100 LAKH','','Development',24),(26,'','','100 LAKH','','Development',25),(27,'','','10 LAKH','','Development',26),(28,'efeui','','10 LAKH','','Development',27),(29,'efeui','','10 LAKH','','Development',28),(30,'efeui','','10 LAKH','','Development',29),(31,'efeui','','10 LAKH','','Development',30),(32,'efeui','','10 LAKH','','Development',31),(33,'efeui','','10 LAKH','','Development',32),(34,'efeui','','10 LAKH','','Development',33),(35,'efeui','','10 LAKH','','Development',34),(36,'efeui','','10 LAKH','','Development',35),(37,'efeui','','10 LAKH','','Development',36),(38,'efeui','','10 LAKH','','Development',37),(39,'efeui','','10 LAKH','','Development',38),(40,'efeui','','10 LAKH','','Development',39),(41,'efeui','','10 LAKH','','Development',40),(42,'efeui','','10 LAKH','','Development',41),(43,'efeui','','10 LAKH','','Development',42),(44,'efeui','','10 LAKH','','Development',43),(45,'efeui','','10 LAKH','','Development',44),(46,'','','ftr','','Development',45),(47,'','','9','','Development',46),(48,'','','9','','Development',47),(49,'','','dfsg','','Development',48),(50,'','','sADF','','Development',49),(51,'','','asf','','Development',50),(52,'dsgr','gdfg','SDFGH','sdaf','Marketing',51),(53,'','','fga','','Development',52),(54,'','','fga','','Development',53),(55,'','','fga','','Development',54),(56,'','','fga','','Development',55),(57,'','','fga','','Development',56),(58,'','','fga','','Development',57),(59,'','','fga','','Development',58),(60,'','','fga','','Development',59),(61,'','','fga','','Development',60),(62,'','','98 LAKH','','Development',61),(63,'','','100 lakh','','Development',62);
/*!40000 ALTER TABLE `PREFERENCE` ENABLE KEYS */;
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
