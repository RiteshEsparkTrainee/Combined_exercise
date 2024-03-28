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
-- Table structure for table `BASIC_DETAILS`
--

DROP TABLE IF EXISTS `BASIC_DETAILS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `BASIC_DETAILS` (
  `EMPLOYEE_ID` int NOT NULL AUTO_INCREMENT,
  `FIRST_NAME` varchar(100) DEFAULT NULL,
  `LAST_NAME` varchar(100) DEFAULT NULL,
  `DESIGNATION` varchar(255) DEFAULT NULL,
  `ADDRESS1` varchar(255) DEFAULT NULL,
  `ADDRESS2` varchar(255) DEFAULT NULL,
  `PHONE_NO` bigint DEFAULT NULL,
  `GENDER` varchar(255) DEFAULT NULL,
  `ZIP_CODE` int DEFAULT NULL,
  `RELATIONSHIP_STATUS` varchar(255) DEFAULT NULL,
  `DATE_OF_BIRTH` date DEFAULT NULL,
  `STATE` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`EMPLOYEE_ID`),
  KEY `RELATIONSHIP_STATUS` (`RELATIONSHIP_STATUS`),
  KEY `GENDER` (`GENDER`),
  CONSTRAINT `BASIC_DETAILS_ibfk_1` FOREIGN KEY (`RELATIONSHIP_STATUS`) REFERENCES `OPTIONS_MASTER` (`OPTION_KEY`),
  CONSTRAINT `BASIC_DETAILS_ibfk_2` FOREIGN KEY (`GENDER`) REFERENCES `OPTIONS_MASTER` (`OPTION_KEY`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `BASIC_DETAILS`
--

LOCK TABLES `BASIC_DETAILS` WRITE;
/*!40000 ALTER TABLE `BASIC_DETAILS` DISABLE KEYS */;
INSERT INTO `BASIC_DETAILS` VALUES (1,'Ritesh ','Jaiswal','Developer','E-306 Bhagvat Greens','Narol',7573060549,'Male',123455,'Unmarried','2023-04-23','1-Gujarat','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(2,'Ritesh ','Jaiswal','Developer','E-306 Bhagvat Greens','Narol',7573060549,'Male',12345,'Unmarried','2023-04-23','1-Gujarat','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(3,'ritesh','Jaiswal','Developer','E-306 Bhagvat Greens','Narol Ahmedabad',7573060549,'Male',897856,'Unmarried','2023-04-23','1-Gujarat','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(4,'Chintan ','Gor','Developer','E-306 Bhagvat Greens','Narol Ahmedabad',7573060549,'Male',897856,'Unmarried','2023-04-23','1-Gujarat','897856','Ahmedabad'),(5,'yashvi','sonadhara','Developer','sfg','sgf',7573060549,'Female',145278,'Married','2023-04-23','1-Maharastra','145278','Ahmedabad'),(6,'alpesh','ggsd','Developer','E-306 Bhagvat Greens','asdfawd',7573060549,'Male',145278,'Unmarried','2023-04-23','Telangana','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(7,'ritesh','Jaiswal','Developer','E-306 Bhagvat Greens','sdfas',7573060549,'Male',145278,'Unmarried','2023-04-23','Telangana','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(8,'ritesh','Jaiswal','Developer','E-306 Bhagvat Greens','sdfas',7573060549,'Male',145278,'Unmarried','2023-04-23','Maharastra','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(9,'ritesh','Jaiswal','Developer','E-306 Bhagvat Greens','sdfas',7573060549,'Male',145278,'Married','2023-04-23','Maharastra','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(10,'munmun','sdfg','Developer','awfra','fs',7573060549,'Female',789789,'Married','2024-12-10','Maharastra','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(11,'Ujjwal123','Thakur','Developer d','pratham','heights',8866584578,'Male',986984,'Unmarried','2002-12-05','Maharastra','986984','Rajkot'),(12,'munmun','sdfg','Developer','awfra','fs',7573060549,'Female',789789,'Married','2024-12-10','Maharastra','789789','Ahmedabad'),(13,'chintan ','sdfg','Developer','E-306 Bhagvat Greens','asdfawd',7573060549,'Male',123459,'Married','2023-04-23','Telangana','123459','Ahmedabad'),(14,'Ritesh','sdfg','Developer','E-306 Bhagvat Greens','asdfawd',7573060549,'Male',124556,'Married','2023-04-23','Tamil Nadu','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(15,'jd','sdfg','sfg','sgdf','sgf',7573060549,'Male',789456,'Unmarried','2023-04-23','Gujarat','789456','Ahmedabad'),(16,'ayush','patel','no','6 Bhagvat Greens','narol',1234567893,'Female',789101,'Unmarried','2021-01-04','Maharastra','789101','Rajkot'),(17,'rgt','ggsd','Developer','sgdf','asdfawd',7573060549,'Male',123456,'Unmarried','2023-04-23','Gujarat','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(18,'rgt','ggsd','Developer','sgdf','asdfawd',7573060549,'Male',123456,'Unmarried','2023-04-23','Gujarat','123456','Ahmedabad'),(19,'vzsdf','ag','Developer','E-306 Bhagvat Greens','adf',7573060549,'Male',123456,'Unmarried','2023-04-23','Gujarat','123456','asdfg'),(20,'Vishalbsjkfhshdriofuoia','Vaishnav','Developer','sgdf','sfg',7573060549,'Male',456789,'Unmarried','2023-04-23','Gujarat','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(21,'Vishalsdfa','Vaishnav','Developer','sgdf','sfg',7573060549,'Male',456789,'Unmarried','2023-04-23','Gujarat','456789','Ahmedabad'),(22,'VishalASFD','Vaishnav','Developer','sgdf','sfg',7573060549,'Male',456789,'Unmarried','2023-04-23','Gujarat','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(23,'Vishal','Vaishnav','Developer','sgdf','sfg',7573060549,'Male',456789,'Unmarried','2023-04-23','Gujarat','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(24,'Vishal','Vaishnav','Developer','sgdf','sfg',7573060549,'Male',456789,'Unmarried','2023-04-23','Gujarat','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(25,'Vishal','Vaishnav','Developer','sgdf','sfg',7573060549,'Male',456789,'Unmarried','2023-04-23','Gujarat','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(26,'Vishal','Vaishnav','Developer','sgdf','sfg',7573060549,'Male',456789,'Unmarried','2023-04-23','Gujarat','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(27,'Vishal','Vaishnav','Developer','sgdf','sfg',7573060549,'Male',456789,'Unmarried','2023-04-23','Gujarat','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(28,'Vishal','Vaishnav','Developer','sgdf','sfg',7573060549,'Male',456789,'Unmarried','2023-04-23','Gujarat','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(29,'Vishal','Vaishnav','Developer','sgdf','sfg',7573060549,'Male',456789,'Unmarried','2023-04-23','Gujarat','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(30,'Vishal','Vaishnav','Developer','sgdf','sfg',7573060549,'Male',456789,'Unmarried','2023-04-23','Gujarat','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(31,'Vishal','Vaishnav','Developer','sgdf','sfg',7573060549,'Male',456789,'Unmarried','2023-04-23','Gujarat','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(32,'Vishal','Vaishnav','Developer','sgdf','sfg',7573060549,'Male',456789,'Unmarried','2023-04-23','Gujarat','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(33,'Vishal','Vaishnav','Developer','sgdf','sfg',7573060549,'Male',456789,'Unmarried','2023-04-23','Gujarat','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(34,'Vishal','Vaishnav','Developer','sgdf','sfg',7573060549,'Male',456789,'Unmarried','2023-04-23','Gujarat','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(35,'Vishal','Vaishnav','Developer','sgdf','sfg',7573060549,'Male',456789,'Unmarried','2023-04-23','Gujarat','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(36,'Vishal','Vaishnav','Developer','sgdf','sfg',7573060549,'Male',456789,'Unmarried','2023-04-23','Gujarat','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(37,'Vishal','Vaishnav','Developer','sgdf','sfg',7573060549,'Male',456789,'Unmarried','2023-04-23','Gujarat','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(38,'Vishal','Vaishnav','Developer','sgdf','sfg',7573060549,'Male',456789,'Unmarried','2023-04-23','Gujarat','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(39,'Vishal','Vaishnav','Developer','sgdf','sfg',7573060549,'Male',456789,'Unmarried','2023-04-23','Gujarat','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(40,'Vishal','Vaishnav','Developer','sgdf','sfg',7573060549,'Male',456789,'Unmarried','2023-04-23','Gujarat','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(41,'Vishal','Vaishnav','Developer','sgdf','sfg',7573060549,'Male',456789,'Unmarried','2023-04-23','Gujarat','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(42,'Vishal','Vaishnav','Developer','sgdf','sfg',7573060549,'Male',456789,'Unmarried','2023-04-23','Gujarat','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(43,'Vishal','Vaishnav','Developer','sgdf','sfg',7573060549,'Male',456789,'Unmarried','2023-04-23','Gujarat','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(44,'Vishal','Vaishnav','Developer','sgdf','sfg',7573060549,'Male',456789,'Unmarried','2023-04-23','Gujarat','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(45,'Vishal','Vaishnav','Developer','sgdf','sfg',7573060549,'Male',456789,'Unmarried','2023-04-23','Gujarat','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(46,'ritesh','Jaiswal','Developer','E-306 Bhagvat Greens','fs',7573060549,'Male',123456,'Unmarried','2023-04-04','Gujarat','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(47,'jjoi','jkfjik','Developer','E-306 Bhagvat Greens','sgf',7573060549,'Male',123456,'Unmarried','2023-04-23','Gujarat','ritesh.jaiswal@esparkbizmail.com','sfdga'),(48,'jjoi','jkfjik','Developer','E-306 Bhagvat Greens','sgf',7573060549,'Male',123456,'Unmarried','2023-04-23','Gujarat','ritesh.jaiswal@esparkbizmail.com','sfdga'),(49,'vansh','gandhi','Developer','E-306 Bhagvat Greens','fs',7573060549,'Male',897857,'Unmarried','2023-04-23','Gujarat','vanshGandhi@gmail.com','Ahmedabad'),(50,'chiragdfas','fasd','Developer','sdf','dsaf',7573060549,'Male',145278,'Unmarried','2023-04-23','Gujarat','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(51,'vzsdf','asdf','sdf','E-306 Bhagvat Greens','sgf',7573060549,'Male',123456,'Unmarried','2023-04-23','Gujarat','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(52,'vzsdf','FGASD','AGSDD','E-306 Bhagvat Greens','sgf',7573060549,'Male',145278,'Unmarried','2023-12-04','Gujarat','ritesh.jaiswal@esparkbizmail.com','ADG'),(53,'vzsdf','Jaiswal','fsda','sdgf','sdfgs',7573060549,'Male',789456,'Unmarried','2023-04-23','Gujarat','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(54,'vzsdf','Jaiswal','fsda','sdgf','sdfgs',7573060549,'Male',789456,'Unmarried','2023-04-23','Gujarat','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(55,'vzsdf','Jaiswal','fsda','sdgf','sdfgs',7573060549,'Male',789456,'Unmarried','2023-04-23','Gujarat','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(56,'vzsdf','Jaiswal','fsda','sdgf','sdfgs',7573060549,'Male',789456,'Unmarried','2023-04-23','Gujarat','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(57,'vzsdf','Jaiswal','fsda','sdgf','sdfgs',7573060549,'Male',789456,'Unmarried','2023-04-23','Gujarat','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(58,'vzsdf','Jaiswal','fsda','sdgf','sdfgs',7573060549,'Male',789456,'Unmarried','2023-04-23','Gujarat','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(59,'vzsdf','Jaiswal','fsda','sdgf','sdfgs',7573060549,'Male',789456,'Unmarried','2023-04-23','Gujarat','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(60,'vzsdf','Jaiswal','fsda','sdgf','sdfgs',7573060549,'Male',789456,'Unmarried','2023-04-23','Gujarat','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(61,'vzsdf','Jaiswal','fsda','sdgf','sdfgs',7573060549,'Male',789456,'Unmarried','2023-04-23','Gujarat','ritesh.jaiswal@esparkbizmail.com','Ahmedabad'),(62,'NEW USER','XCZBV','Developer','E-306 Bhagvat Greens','asdfawd',7573060549,'Male',897898,'Unmarried','2002-12-05','Gujarat','ritesh.jaiswal@esparkbizmail.com','memnagar'),(63,'temp','sdf','Developer','E-306 Bhagvat Greens','asdfawd',7573060549,'Male',897857,'Unmarried','2023-04-23','Maharastra','man@gmail.com','Ahmedabad');
/*!40000 ALTER TABLE `BASIC_DETAILS` ENABLE KEYS */;
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
