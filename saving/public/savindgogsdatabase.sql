-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.6.5-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for savingdogs2
CREATE DATABASE IF NOT EXISTS `savingdogs2` /*!40100 DEFAULT CHARACTER SET armscii8 COLLATE armscii8_bin */;
USE `savingdogs2`;

-- Dumping structure for table savingdogs2.contactar_registro_encontrado
CREATE TABLE IF NOT EXISTS `contactar_registro_encontrado` (
  `nombrecompleto` varchar(50) COLLATE armscii8_bin NOT NULL,
  `correoencontrado` varchar(50) COLLATE armscii8_bin NOT NULL,
  `correoperdido` varchar(50) COLLATE armscii8_bin NOT NULL,
  `id_perro` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin;

-- Data exporting was unselected.

-- Dumping structure for table savingdogs2.contactar_registro_perdido
CREATE TABLE IF NOT EXISTS `contactar_registro_perdido` (
  `nombrecompleto` varchar(50) COLLATE armscii8_bin NOT NULL,
  `correoperdido` varchar(50) COLLATE armscii8_bin NOT NULL,
  `correoencontrado` varchar(50) COLLATE armscii8_bin NOT NULL,
  `id_perro` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin;

-- Data exporting was unselected.

-- Dumping structure for table savingdogs2.perroencontrado
CREATE TABLE IF NOT EXISTS `perroencontrado` (
  `correo` varchar(50) COLLATE armscii8_bin NOT NULL,
  `raza` varchar(50) COLLATE armscii8_bin NOT NULL,
  `sexo` varchar(50) COLLATE armscii8_bin NOT NULL,
  `color` varchar(50) COLLATE armscii8_bin NOT NULL,
  `car_esp` varchar(50) COLLATE armscii8_bin NOT NULL,
  `nombre` varchar(50) COLLATE armscii8_bin NOT NULL,
  `ap` varchar(50) COLLATE armscii8_bin NOT NULL,
  `am` varchar(50) COLLATE armscii8_bin NOT NULL,
  `calle` varchar(50) COLLATE armscii8_bin NOT NULL,
  `colonia` varchar(50) COLLATE armscii8_bin NOT NULL,
  `delegacion` varchar(50) COLLATE armscii8_bin NOT NULL,
  `estado` varchar(50) COLLATE armscii8_bin NOT NULL,
  `cp` int(11) NOT NULL,
  `foto` varchar(50) COLLATE armscii8_bin NOT NULL,
  `id_encontrado` int(11) NOT NULL,
  PRIMARY KEY (`id_encontrado`)
) ENGINE=InnoDB DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin;

-- Data exporting was unselected.

-- Dumping structure for table savingdogs2.perroperdido
CREATE TABLE IF NOT EXISTS `perroperdido` (
  `correo` varchar(50) COLLATE armscii8_bin NOT NULL,
  `raza` varchar(50) COLLATE armscii8_bin NOT NULL,
  `sexo` varchar(50) COLLATE armscii8_bin NOT NULL,
  `color` varchar(50) COLLATE armscii8_bin NOT NULL,
  `car_esp` varchar(50) COLLATE armscii8_bin NOT NULL,
  `nombre` varchar(50) COLLATE armscii8_bin NOT NULL,
  `ap` varchar(50) COLLATE armscii8_bin NOT NULL,
  `am` varchar(50) COLLATE armscii8_bin NOT NULL,
  `calle` varchar(50) COLLATE armscii8_bin NOT NULL,
  `colonia` varchar(50) COLLATE armscii8_bin NOT NULL,
  `cp` int(11) NOT NULL,
  `delegacion` varchar(50) COLLATE armscii8_bin NOT NULL,
  `estado` varchar(50) COLLATE armscii8_bin NOT NULL,
  `foto` varchar(50) COLLATE armscii8_bin NOT NULL,
  `id_perdido` int(11) NOT NULL,
  `nombrePerro` varchar(50) COLLATE armscii8_bin NOT NULL,
  PRIMARY KEY (`id_perdido`)
) ENGINE=InnoDB DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin;

-- Data exporting was unselected.

-- Dumping structure for table savingdogs2.user
CREATE TABLE IF NOT EXISTS `user` (
  `correo` varchar(50) COLLATE armscii8_bin NOT NULL,
  `nombre` varchar(50) COLLATE armscii8_bin NOT NULL,
  `ap` varchar(50) COLLATE armscii8_bin NOT NULL,
  `am` varchar(50) COLLATE armscii8_bin NOT NULL,
  `password` varchar(50) COLLATE armscii8_bin NOT NULL,
  `id_user` int(11) NOT NULL,
  PRIMARY KEY (`correo`)
) ENGINE=InnoDB DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin;

-- Data exporting was unselected.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
