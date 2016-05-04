-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-05-2015 a las 01:14:32
-- Versión del servidor: 5.6.17
-- Versión de PHP: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `dbestudiante`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bitacora`
--

CREATE TABLE IF NOT EXISTS `bitacora` (
  `idbitacora` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `descripcion` varchar(25) NOT NULL,
  `usuario` varchar(25) NOT NULL,
  PRIMARY KEY (`idbitacora`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Volcado de datos para la tabla `bitacora`
--

INSERT INTO `bitacora` (`idbitacora`, `fecha`, `hora`, `descripcion`, `usuario`) VALUES
(1, '2015-05-10', '01:03:00', 'Se Ingreso Nuev@ Estudian', '1'),
(2, '2015-05-10', '01:04:00', 'Se Actualizo Estudiante', '1'),
(3, '2015-05-10', '01:04:00', 'Se Actualizo Estudiante', '1'),
(4, '2015-05-10', '01:04:00', 'Se Ingreso Nuev@ Estudian', '1'),
(5, '2015-05-10', '01:05:00', 'Se Actualizo Estudiante', '1'),
(6, '2015-05-10', '01:05:00', 'Se Actualizo Estudiante', '1'),
(7, '2015-05-10', '01:05:00', 'Se Actualizo Estudiante', '1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `infoestudiante`
--

CREATE TABLE IF NOT EXISTS `infoestudiante` (
  `cedula` int(11) NOT NULL,
  `nombre` varchar(25) NOT NULL,
  `apellido` varchar(25) NOT NULL,
  `direccion` varchar(25) NOT NULL,
  `telefono` int(11) NOT NULL,
  `email` varchar(25) NOT NULL,
  PRIMARY KEY (`cedula`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE IF NOT EXISTS `usuario` (
  `idusuario` varchar(20) NOT NULL,
  `login` varchar(15) NOT NULL,
  `clave` varchar(15) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `apellido` varchar(30) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `telefono` varchar(15) NOT NULL,
  `celular` varchar(15) NOT NULL,
  `email` varchar(100) NOT NULL,
  `idperfil` int(11) NOT NULL,
  PRIMARY KEY (`idusuario`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `creditos`;
CREATE TABLE IF NOT EXISTS `creditos` (
  `id` smallint(10) AUTO_INCREMENT,
  `cedula` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `email` varchar(60) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`cedula`) REFERENCES infoestudiante(`cedula`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`idusuario`, `login`, `clave`, `nombre`, `apellido`, `direccion`, `telefono`, `celular`, `email`, `idperfil`) VALUES
('1', '1', '1', '1', '1', '1', '1', '1', '1', 1),
('2', '2', '2', '2', '2', '2', '2', '2', '2', 2);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
