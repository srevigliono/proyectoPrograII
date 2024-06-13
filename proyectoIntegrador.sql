-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 13-06-2024 a las 19:08:37
-- Versión del servidor: 5.7.39
-- Versión de PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectoIntegrador`
--
CREATE DATABASE IF NOT EXISTS `proyectoIntegrador` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `proyectoIntegrador`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
CREATE TABLE `comentarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `comentario` varchar(150) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `producto_id` int(10) UNSIGNED DEFAULT NULL,
  `usuario_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `comentario`, `created_at`, `updated_at`, `deleted_at`, `producto_id`, `usuario_id`) VALUES
(1, 'aaaaaaaaa', '2024-04-15 21:23:41', '2024-04-15 21:23:41', NULL, 1, 1),
(2, 'aaaaaaaaa', '2024-04-15 21:23:41', '2024-04-15 21:23:41', NULL, 1, 2),
(3, 'aaaaaaaaa', '2024-04-15 21:23:41', '2024-04-15 21:23:41', NULL, 1, 3),
(4, 'aaaaaaaaa', '2024-04-15 21:23:41', '2024-04-15 21:23:41', NULL, 2, 5),
(5, 'aaaaaaaaa', '2024-04-15 21:23:41', '2024-04-15 21:23:41', NULL, 2, 4),
(6, 'aaaaaaaaa', '2024-04-15 21:23:41', '2024-04-15 21:23:41', NULL, 2, 6),
(7, 'aaaaaaaaa', '2024-04-15 21:23:41', '2024-04-15 21:23:41', NULL, 3, 2),
(8, 'aaaaaaaaa', '2024-04-15 21:23:41', '2024-04-15 21:23:41', NULL, 3, 3),
(9, 'aaaaaaaaa', '2024-04-15 21:23:41', '2024-04-15 21:23:41', NULL, 3, 5),
(10, 'aaaaaaaaa', '2024-04-15 21:23:41', '2024-04-15 21:23:41', NULL, 4, 1),
(11, 'aaaaaaaaa', '2024-04-15 21:23:41', '2024-04-15 21:23:41', NULL, 4, 3),
(12, 'aaaaaaaaa', '2024-04-15 21:23:41', '2024-04-15 21:23:41', NULL, 4, 2),
(13, 'aaaaaaaaa', '2024-04-15 21:23:41', '2024-04-15 21:23:41', NULL, 5, 1),
(14, 'aaaaaaaaa', '2024-04-15 21:23:41', '2024-04-15 21:23:41', NULL, 5, 2),
(15, 'aaaaaaaaa', '2024-04-15 21:23:41', '2024-04-15 21:23:41', NULL, 5, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

DROP TABLE IF EXISTS `productos`;
CREATE TABLE `productos` (
  `id` int(10) UNSIGNED NOT NULL,
  `imagen` varchar(100) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `usuario_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `imagen`, `nombre`, `descripcion`, `created_at`, `updated_at`, `deleted_at`, `usuario_id`) VALUES
(1, 'pepe.jpg', 'pepe', 'hadowiodiosioe', '2024-04-15 21:17:36', '2024-04-15 21:17:36', NULL, 6),
(2, 'santi.jpg', 'ueueu', 'isisisis', '2024-04-15 21:20:36', '2024-04-15 21:20:36', NULL, 6),
(3, 'hola.jpg', 'hola', 'aaaaa', '2024-04-15 21:20:36', '2024-04-15 21:20:36', NULL, 5),
(4, 'eee.jpg', 'eee', 'aaaaaaaa', '2024-04-15 21:20:36', '2024-04-15 21:20:36', NULL, 5),
(5, 'peaaape.jpg', 'peapee', 'bbbbb', '2024-04-15 21:20:36', '2024-04-15 21:20:36', NULL, 4),
(6, 'inda.jpg', 'inda', 'cccccc', '2024-04-15 21:20:36', '2024-04-15 21:20:36', NULL, 3),
(7, 'santire.jpg', 'santile', 'dddddd', '2024-04-15 21:20:36', '2024-04-15 21:20:36', NULL, 4),
(8, 'lega.jpg', 'lega', 'eeeeee', '2024-04-15 21:20:36', '2024-04-15 21:20:36', NULL, 2),
(9, 'nona.jpg', 'nona', 'gggg', '2024-04-15 21:20:36', '2024-04-15 21:20:36', NULL, 1),
(10, 'judok.jpg', 'judok', '55555555', '2024-04-15 21:20:36', '2024-04-15 21:20:36', NULL, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `fecha` date DEFAULT NULL,
  `dni` int(11) DEFAULT NULL,
  `foto` varchar(500) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `user` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `password`, `fecha`, `dni`, `foto`, `created_at`, `updated_at`, `deleted_at`, `user`) VALUES
(1, 'slega@gmail.com', '12345', '2024-04-15', 46028252, 'foto.png', '2024-04-15 18:00:22', '2024-04-15 18:00:22', NULL, ''),
(2, 'srevi@gmail.com', '12345', '2022-04-15', 46032293, 'foto1.png', '2024-04-15 18:14:50', '2024-04-15 18:14:50', NULL, ''),
(3, 'srevi@gmail.com', '12345', '2022-04-15', 46032293, 'foto1.png', '2024-04-15 18:15:42', '2024-04-15 18:15:42', NULL, ''),
(4, 'minda@gmail.com', '12345', '2022-02-21', 54387234, 'foto2.png', '2024-04-15 18:15:42', '2024-04-15 18:15:42', NULL, ''),
(5, 'srevi@gmail.com', '12345', '2022-04-15', 46032293, 'foto1.png', '2024-04-15 18:16:20', '2024-04-15 18:16:20', NULL, ''),
(6, 'minda@gmail.com', '12345', '2022-02-21', 54387234, 'foto2.png', '2024-04-15 18:16:20', '2024-04-15 18:16:20', NULL, '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `producto_id` (`producto_id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`),
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
