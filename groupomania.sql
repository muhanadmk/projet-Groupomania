-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 24, 2021 at 03:22 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 7.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `groupomania`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `Comment_id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `Comment` text NOT NULL,
  `dateComment` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`Comment_id`, `post_id`, `user_id`, `Comment`, `dateComment`) VALUES
(376, 510, 73, 'boon courage', '2021-08-24 15:01:36');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `post_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `post` text NOT NULL,
  `datePost` datetime NOT NULL DEFAULT current_timestamp(),
  `imagePostUrl` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`post_id`, `user_id`, `title`, `post`, `datePost`, `imagePostUrl`) VALUES
(449, 74, 'very coool', 'quand la France je termine mes études', '2021-08-23 07:23:15', 'http://localhost:3000/images/fromage.gif1629692595243.gif'),
(450, 74, ' Lionel Messi ', 'Football: c’est officiel, Lionel Messi quitte le FC Barcelone', '2021-08-23 06:24:55', 'http://localhost:3000/images/11.jpg1629692695969.jpg'),
(451, 75, 'j\'ai maaaaaaaaaaallllllll', 'quand le travail pas terminé', '2021-08-23 06:26:14', 'http://localhost:3000/images/dsqdsd.gif1629692774835.gif'),
(452, 75, 'n\'amport qoui', 'le code est tjr faicle a apprrnder', '2021-08-23 06:27:37', 'http://localhost:3000/images/ordi.jpg1629692857422.jpg'),
(453, 76, 'L’été dernier', 'Ce rebondissement fracassant concernant l’un des plus grands joueurs de l’histoire risque de bouleverser le marché des transferts et la presse spécialisée, avant que le point de chute de l’astre argentin soit connu.\n\nL’été dernier, les velléités de départ', '2021-08-23 06:30:18', NULL),
(454, 73, 'Groupomania admin', 'Il y a 6 mois, la direction a détecté un ralentissement de la productivité. Elle l’\na attribué\nassez rapidement à une baisse de la motivation et de l’implication des employés. La\ndirection a réagi et a mis en place un comité de pilotage sur le bien-être au travail il y a\ndeux mois.\nIl est composé d\'une dizaine de personnes, regroupant des représentants de la\ndirection et des salariés. Son rôle est de diffuser des questionnaires aux salariés et de\nrestituer les résultats au département des ressources humaines pour envisager des\nactions pouvant améliorer le bien être des salariés.\nL’\nenquête la plus récente a confirmé qu\n’\nune partie du personnel n\n’était pas satisfaite de\nl’\nambiance de travail. Les données suivantes étaient particulièrement révélatrices.', '2021-08-23 06:32:21', 'http://localhost:3000/images/backgrounde.jpg1629693141299.jpg'),
(467, 77, 'minion', ' c\'eeeeeeeeet trop minion !!', '2021-08-23 13:12:43', 'http://localhost:3000/images/minion.jpg1629717163489.jpg'),
(510, 76, 'J’ai pris du retard', 'Suivre une formation en ligne peut être difficile, et il peut arriver que des circonstances particulières vous empêchent d’avancer au rythme souhaité. Si c’est le cas, pas de panique, nous pouvons vous aider à rattraper le retard !', '2021-08-24 15:01:21', 'http://localhost:3000/images/ordi.jpg1629810081893.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(255) NOT NULL,
  `admin` tinyint(11) NOT NULL DEFAULT 0,
  `dateUser` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `admin`, `dateUser`) VALUES
(73, 'admin', 'Admin@gmail.com', '$2b$10$T5OHrcXtXH128.sLE/wozOkZOHVBewKUDWG98782sADvlqnu13fsO', 1, '2021-08-23 05:36:56'),
(74, 'Frank', 'Frank@gmail.com', '$2b$10$5ZWxoFYMeNAbrOfGZgLp5.2p7W6AzAjT1IIGxcWSnvuT/xAbHWrMK', 0, '2021-08-23 05:41:04'),
(75, 'Alexandre', 'Alexandre@gmail.com', '$2b$10$9A9uUO6DESHrHy1D8WGTIeCetJdOZalLUS05X/zIrSQBMU7yKy.7e', 0, '2021-08-23 06:25:26'),
(76, 'Dimitri', 'Dimitri@gmail.com', '$2b$10$R035t0iONMrbeFYbKTNdY.HUYIgy1OKgtpEpqGSSaP4fiU3.ghFj2', 0, '2021-08-23 06:28:18'),
(77, 'Olivier', 'Olivier@gmail.com', '$2b$10$kutjmUjZuxz1.NSENtnfueyFsuAKxMKyvx7YfSHxOI5w43GCDAPqy', 0, '2021-08-23 13:01:16'),
(79, 'Olivier22@gmail.com', 'Olivier22@gmail.com', '$2b$10$ThLXY.XmFGPjcm.WsCo5w.jKxb0Y8auIBH6KB9nXiqy5OZ6Y0R/ai', 0, '2021-08-23 13:14:54'),
(82, 'Olivier44', 'Olivier44@gmail.com', '$2b$10$tVcne7kTdNnRnQTQj3Y5w.TOUuxe21KkJRoaWVRJNs7VTsGbvnqoe', 0, '2021-08-24 13:23:07'),
(83, 'rrrrrrrrr', 'rrrrrrrrr', '$2b$10$omYjsZpovUMxvlfz0Zlj4.GlaV8FKu5ufbdXvYHXs1EtD97r510x.', 0, '2021-08-24 13:46:08');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`Comment_id`),
  ADD KEY `post_id` (`post_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`post_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `Comment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=377;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=511;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
