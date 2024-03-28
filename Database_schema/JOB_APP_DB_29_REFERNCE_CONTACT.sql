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
-- Table structure for table `REFERNCE_CONTACT`
--

DROP TABLE IF EXISTS `REFERNCE_CONTACT`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `REFERNCE_CONTACT` (
  `Reference_id` int DEFAULT NULL,
  `NAME_OF_EMPLOYEE` varchar(255) DEFAULT NULL,
  `RELATION` varchar(255) DEFAULT NULL,
  `REFERNCE_CONTACT` varchar(45) DEFAULT NULL,
  `reference_unique_id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`reference_unique_id`),
  KEY `Reference_id` (`Reference_id`),
  CONSTRAINT `REFERNCE_CONTACT_ibfk_1` FOREIGN KEY (`Reference_id`) REFERENCES `BASIC_DETAILS` (`EMPLOYEE_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `REFERNCE_CONTACT`
--

LOCK TABLES `REFERNCE_CONTACT` WRITE;
/*!40000 ALTER TABLE `REFERNCE_CONTACT` DISABLE KEYS */;
INSERT INTO `REFERNCE_CONTACT` VALUES (1,'Ritesh','Uncle','1234567890',1),(4,'Ritesh','Uncle','1234567890',2),(5,'Ritesh','Uncle','1234567890',3),(13,'Ritesh','Uncle','1234567890',4),(13,'Ritesh','Uncle','1234567890',5),(13,'Ritesh','Uncle','1234567890',6),(16,'pranavghvdfoihoisoigjhtoisw','yes','1234567899',7),(16,'pranavjaiswal','no','8978912345',8),(49,'hello','no','1234567890',9),(49,'Ritesh','Uncle','1234567890',10),(49,'hellobhai','no','1234567890',11),(49,'Ritesh','Uncle','1234567890',12),(49,'hellobhai','no','1234567890',13),(49,'Ritesh','Uncle','1234567890',14),(49,'hellobhai','no','1234567890',15),(49,'Ritesh','Uncle','1234567890',16),(49,'hellobhaidfgas','no','1234567890',17),(49,'Ritesh','Uncle','1234567890',18),(49,'hellobhai','no','1234567890',19),(49,'Ritesh','Uncle','1234567890',20),(49,'hellobhai','no','1234567890',21),(49,'Ritesh','Uncle','1234567890',22),(49,'hellobhai','no','1234567890',23),(49,'Ritesh','Uncle','1234567890',24),(50,'asdrgf','no','1234567890',25),(50,'her','sdfg','7573060549',26),(50,'Ritesh','Uncle','1234567890',27),(50,'her','sdfg','7573060549',28),(50,'sdfg','fg','7573060549',29),(50,'Ritesh','Uncle','1234567890',30),(50,'her','sdfg','7573060549',31),(50,'Ritesh','Uncle','1234567890',32),(50,'her','sdfg','7573060549',33),(50,'sdfg','fg','7573060549',34),(50,'chaman','fsdg','7573060549',35),(50,'Ritesh','Uncle','1234567890',36),(50,'her','sdfg','7573060549',37),(50,'Ritesh','Uncle','1234567890',38),(50,'her','sdfg','7573060549',39),(50,'sdfg','fg','7573060549',40),(50,'Ritesh','Uncle','1234567890',41),(50,'her','sdfg','7573060549',42),(50,'Ritesh','Uncle','1234567890',43),(50,'her','sdfg','7573060549',44),(50,'sdfg','fg','7573060549',45),(50,'chaman','fsdg','7573060549',46),(50,'asferawetrawertaw','fasdgf','7573060549',47),(51,'fsdoia','no','1234567890',48),(51,'asdf','asfgd','7573060549',49),(51,'fsdoia','no','1234567890',50),(51,'asdf','asfgd','7573060549',51),(51,'weqrqsrdf','svfagre','7573060549',52),(51,'fsdoia','no','1234567890',53),(51,'asdf','asfgd','7573060549',54),(51,'fsdoia','no','1234567890',55),(51,'asdf','asfgd','7573060549',56),(51,'weqrqsrdf','svfagre','7573060549',57),(51,'oooooo','aerg','7573060549',58),(51,'fsdoia','no','1234567890',59),(51,'asdf','asfgd','7573060549',60),(51,'fsdoia','no','1234567890',61),(51,'asdf','asfgd','7573060549',62),(51,'weqrqsrdf','svfagre','7573060549',63),(51,'fsdoia','no','1234567890',64),(51,'asdf','asfgd','7573060549',65),(51,'fsdoia','no','1234567890',66),(51,'asdf','asfgd','7573060549',67),(51,'weqrqsrdf','svfagre','7573060549',68),(51,'oooooo','aerg','7573060549',69),(51,'asdgfsdg','dfg','7573060549',70),(52,'pankaj nfoiajhsoi','no','pankaj nfoiajhsoi',71);
/*!40000 ALTER TABLE `REFERNCE_CONTACT` ENABLE KEYS */;
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
