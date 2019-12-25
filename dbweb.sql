-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Φιλοξενητής: localhost
-- Χρόνος δημιουργίας: 02 Οκτ 2018 στις 01:57:30
-- Έκδοση διακομιστή: 10.1.34-MariaDB
-- Έκδοση PHP: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Βάση δεδομένων: `dbweb`
--

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `customer`
--

CREATE TABLE `customer` (
  `email` varchar(255) COLLATE utf8_bin NOT NULL,
  `pass` varchar(255) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Άδειασμα δεδομένων του πίνακα `customer`
--

INSERT INTO `customer` (`email`, `pass`) VALUES
('apostolosmetaftsis1@hotmail.gr', '$2y$10$KVmbn5megcituEHnCWyrQ.hQz/Zt5YvmoDfBCOwZHVtgqKFM3GA5m'),
('solon_gousteris@outlook.com.gr', '$2y$10$u5fmZbew83bB2URU/7V7peKWZsHioMVFhRKhjawiBx9OERbaPWM5W'),
('solonosfp123@hotmail.com', '$2y$10$QVDBzG2RJd0g8hewJ74.DeJvZy9uT52pvIfm96nvVGauGh7pgarhm'),
('solonosfp1@hotmail.com', '$2y$10$shMjyFF.Yyf.jaMYeKDvzuT/uUTOeTyDhjcjlsOlX.s9fvKswqOFu'),
('solonosfp2@hotmail.com', '$2y$10$rBUtWokitLgp4TDoNgesCuuskqNx7R0ugyYtuamFRP4z7kv9J3aNO'),
('solonosfp@hotmail.com', '$2y$10$ARBun1Bi1oOhx6p3V8OXHuWW4a/Qt/Ryewj9Md1OVit7Etetb4.sC'),
('spyros115@gmail.com', '$2y$10$1e1gtGtKmTHYA08LMq76NO8LtTVM9aGetpknqxN3omDqkhv6Pvf2K');

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `customers_phone`
--

CREATE TABLE `customers_phone` (
  `customer_phone` varchar(255) COLLATE utf8_bin NOT NULL,
  `phone_nr` varchar(10) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Άδειασμα δεδομένων του πίνακα `customers_phone`
--

INSERT INTO `customers_phone` (`customer_phone`, `phone_nr`) VALUES
('apostolosmetaftsis1@hotmail.gr', '6989780750'),
('solon_gousteris@outlook.com.gr', '1111111111'),
('solonosfp123@hotmail.com', '1111111111'),
('solonosfp1@hotmail.com', '6982283016'),
('solonosfp2@hotmail.com', '2222222222'),
('solonosfp@hotmail.com', '6982283016'),
('spyros115@gmail.com', '6932134566');

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `deliverman`
--

CREATE TABLE `deliverman` (
  `username` varchar(50) COLLATE utf8_bin NOT NULL,
  `amka` varchar(11) COLLATE utf8_bin NOT NULL,
  `afm` varchar(11) COLLATE utf8_bin NOT NULL,
  `iban` varchar(27) COLLATE utf8_bin NOT NULL,
  `fname` varchar(50) COLLATE utf8_bin NOT NULL,
  `lname` varchar(50) COLLATE utf8_bin NOT NULL,
  `pass` varchar(255) COLLATE utf8_bin NOT NULL,
  `kms` double(5,2) DEFAULT NULL,
  `work_hours` int(4) DEFAULT NULL,
  `availability` bit(1) DEFAULT NULL,
  `current_position` varchar(40) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Άδειασμα δεδομένων του πίνακα `deliverman`
--

INSERT INTO `deliverman` (`username`, `amka`, `afm`, `iban`, `fname`, `lname`, `pass`, `kms`, `work_hours`, `availability`, `current_position`) VALUES
('deliver0', '23415678933', '12348987654', 'GR0976432155564789097456344', 'Ιωάννης', 'Πέτρου', '$2y$10$8bPVhwo1fSBcboCvNnPcoOUmCyhyn8UDMh5dZHIqWbzwGW4Y0TUbq', 138.60, 8, b'0', 'Ανδρέα Παπανδρέου 6, Παραλία 265 00, Ελλ'),
('deliver1', '23414478933', '12340087654', 'GR0976432155564789045676314', 'Πέτρος', 'Παπαδόπουλος', '$2y$10$LKnBiz9Zn5lo0cOYa30y1.fnNOE8.GnojqgqLnsEs44RXs1CFTE9u', 85.90, 8, b'1', 'Φιλοποίμενος 46, Πάτρα 262 24, Ελλάδα'),
('deliver2', '23414438933', '12340009654', 'GR0976432155564789045643210', 'Δημήτριος', 'Αντωνόπουλος', '$2y$10$fO/sh3kCVfS9oGnq6Ny52uGbOj6pZZFbSH9q18/Fwh6g3rbDd7InS', 0.00, 8, b'0', NULL),
('deliver3', '23414430003', '11940096654', 'GR0976499985564789045643093', 'Δημοσθένης', 'Γεωργιάδης', '$2y$10$nTp1lBicBzTZQH5BE51oFO0aDg06uAi8lnOLWWNeAfqv81eX12ot6', 0.00, 8, b'0', NULL),
('deliver4', '23414430443', '11940093221', 'GR0976499985564789045600945', 'Αντώνιος', 'Δημητρακόπουλος', '$2y$10$p4dNG6JAwrOoXCxSJJWmoOOyqJUKXHsdu8LH5sW38RIJqUiGZU922', 21.30, 8, b'1', 'Μαιζώνος 178, Πάτρα 262 22, Ελλάδα'),
('deliver5', '09714430554', '11221093433', 'GR0976499985564789045887641', 'Κωνσταντίνος', 'Παπάζογλου', '$2y$10$wCaj.g5nE4QUUE9SvAN4jeFJjfmeGZDmvb2/Wpdv96AWS2GS0SnVG', 0.00, 8, b'0', NULL),
('deliver6', '09714438887', '11221096665', 'GR0976499985564789045616541', 'Κωνσταντίνος', 'Παπαγεωργίου', '$2y$10$pLbH6CNdV/shR269GJ9OFesQIe6j9ag7VzfII8le.mXltxS8Mt1nu', 0.00, 8, b'0', NULL),
('deliver7', '12314432211', '11221097764', 'GR0976499985564789045223456', 'Κυριάκος', 'Γεωργίου', '$2y$10$rZUetHZ1Amhw3RqVRJO23uRhUBgNXuKch6M/SWtvX5Y/E.wlel3.m', 0.00, 8, b'0', NULL);

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `orders`
--

CREATE TABLE `orders` (
  `order_nr` int(11) NOT NULL,
  `customer_order` varchar(255) COLLATE utf8_bin NOT NULL,
  `shop_name` varchar(50) COLLATE utf8_bin NOT NULL,
  `deliver_order` varchar(50) COLLATE utf8_bin NOT NULL,
  `order_details` varchar(512) COLLATE utf8_bin NOT NULL,
  `to_address` varchar(70) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Άδειασμα δεδομένων του πίνακα `orders`
--

INSERT INTO `orders` (`order_nr`, `customer_order`, `shop_name`, `deliver_order`, `order_details`, `to_address`) VALUES
(176574, 'solonosfp@hotmail.com', 'Κατάστημα Γενναδίου', 'deliver4', '10', 'Μαιζώνος 197, Πάτρα 262 22, Ελλάδα');

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `products`
--

CREATE TABLE `products` (
  `shop_name` varchar(50) COLLATE utf8_bin NOT NULL,
  `product` varchar(20) COLLATE utf8_bin NOT NULL,
  `quantity` varchar(2) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Άδειασμα δεδομένων του πίνακα `products`
--

INSERT INTO `products` (`shop_name`, `product`, `quantity`) VALUES
('Κατάστημα Γενναδίου', 'Ελληνικός', '50'),
('Κατάστημα Γενναδίου', 'Εσπρέσσο', '50'),
('Κατάστημα Γενναδίου', 'Κέικ', '50'),
('Κατάστημα Γενναδίου', 'Καπουτσίνο', '50'),
('Κατάστημα Γενναδίου', 'Κουλούρι', '50'),
('Κατάστημα Γενναδίου', 'Τοστ', '50'),
('Κατάστημα Γενναδίου', 'Τυρόπιτα', '50'),
('Κατάστημα Γενναδίου', 'Φίλτρου', '50'),
('Κατάστημα Γενναδίου', 'Φραπέ', '50'),
('Κατάστημα Γενναδίου', 'Χορτόπιτα', '50'),
('Κατάστημα Λύκωνος', 'Ελληνικός', '50'),
('Κατάστημα Λύκωνος', 'Εσπρέσσο', '50'),
('Κατάστημα Λύκωνος', 'Κέικ', '50'),
('Κατάστημα Λύκωνος', 'Καπουτσίνο', '50'),
('Κατάστημα Λύκωνος', 'Κουλούρι', '50'),
('Κατάστημα Λύκωνος', 'Τοστ', '50'),
('Κατάστημα Λύκωνος', 'Τυρόπιτα', '50'),
('Κατάστημα Λύκωνος', 'Φίλτρου', '50'),
('Κατάστημα Λύκωνος', 'Φραπέ', '50'),
('Κατάστημα Λύκωνος', 'Χορτόπιτα', '50'),
('Κατάστημα Νοταρά', 'Ελληνικός', '50'),
('Κατάστημα Νοταρά', 'Εσπρέσσο', '50'),
('Κατάστημα Νοταρά', 'Κέικ', '50'),
('Κατάστημα Νοταρά', 'Καπουτσίνο', '50'),
('Κατάστημα Νοταρά', 'Κουλούρι', '50'),
('Κατάστημα Νοταρά', 'Τοστ', '50'),
('Κατάστημα Νοταρά', 'Τυρόπιτα', '50'),
('Κατάστημα Νοταρά', 'Φίλτρου', '50'),
('Κατάστημα Νοταρά', 'Φραπέ', '50'),
('Κατάστημα Νοταρά', 'Χορτόπιτα', '50'),
('Κατάστημα Πετμεζά', 'Ελληνικός', '50'),
('Κατάστημα Πετμεζά', 'Εσπρέσσο', '50'),
('Κατάστημα Πετμεζά', 'Κέικ', '50'),
('Κατάστημα Πετμεζά', 'Καπουτσίνο', '50'),
('Κατάστημα Πετμεζά', 'Κουλούρι', '50'),
('Κατάστημα Πετμεζά', 'Τοστ', '50'),
('Κατάστημα Πετμεζά', 'Τυρόπιτα', '50'),
('Κατάστημα Πετμεζά', 'Φίλτρου', '50'),
('Κατάστημα Πετμεζά', 'Φραπέ', '50'),
('Κατάστημα Πετμεζά', 'Χορτόπιτα', '50');

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `shop`
--

CREATE TABLE `shop` (
  `name` varchar(50) COLLATE utf8_bin NOT NULL,
  `lat` varchar(25) COLLATE utf8_bin NOT NULL,
  `lon` varchar(25) COLLATE utf8_bin NOT NULL,
  `street` varchar(100) COLLATE utf8_bin NOT NULL,
  `st_number` varchar(10) COLLATE utf8_bin NOT NULL,
  `man_username` varchar(50) COLLATE utf8_bin NOT NULL,
  `man_amka` varchar(11) COLLATE utf8_bin NOT NULL,
  `man_afm` varchar(11) COLLATE utf8_bin NOT NULL,
  `man_iban` varchar(27) COLLATE utf8_bin NOT NULL,
  `man_fname` varchar(50) COLLATE utf8_bin NOT NULL,
  `man_lname` varchar(50) COLLATE utf8_bin NOT NULL,
  `man_pass` varchar(255) COLLATE utf8_bin NOT NULL,
  `profits` double(5,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Άδειασμα δεδομένων του πίνακα `shop`
--

INSERT INTO `shop` (`name`, `lat`, `lon`, `street`, `st_number`, `man_username`, `man_amka`, `man_afm`, `man_iban`, `man_fname`, `man_lname`, `man_pass`, `profits`) VALUES
('Κατάστημα Γενναδίου', '38.241642', '21.729236', 'Γενναδίου', '11', 'managerGennadiou', '01434237590', '22345678670', 'GR1234556721799214567898876', 'Σόλωνας', 'Γουστέρης', '$2y$10$Mc3UIJlx0vsHcvzou97tCeCpZHDf79B/whhB0tz1WeuRIM8zWbZem', 121.10),
('Κατάστημα Λύκωνος', '38.236191', '21.736115', 'Λύκωνος', '53', 'managerLikonos', '01434500590', '22345670090', 'GR1234556723269214567898876', 'Απόστολος', 'Μεταφτσής', '$2y$10$wW0Rb2i1uAsif4hwEIx0t.pfLGKGLAh.S/7g4EIRi3eSTJlKokvpC', 42.90),
('Κατάστημα Νοταρά', '38.263117', '21.743875', 'Νοταρά', '14', 'managerNotara', '01434567590', '22345678900', 'GR1234556789843214567898876', 'Ηλίας', 'Πίτσικας', '$2y$10$41C2Nen4CwpJo0fFHQ6BGevzxQmwPF.QYw1vIFL.F1WhMMhR2dJEO', 66.60),
('Κατάστημα Πετμεζά', '38.292156', '21.768907', 'Πετμεζά', '7', 'managerPetmeza', '01234567890', '12345678900', 'GR1234556789876654567898876', 'Σπύρος', 'Βαγενάς', '$2y$10$4GtAWQtOuK8IoWMMrp9Pm.B05Qebejad/6ZgqSmrU2GU7zxSfUJ1a', 13.10);

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `shops_phone`
--

CREATE TABLE `shops_phone` (
  `shop_phone` varchar(50) COLLATE utf8_bin NOT NULL,
  `phone_nr` varchar(10) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Άδειασμα δεδομένων του πίνακα `shops_phone`
--

INSERT INTO `shops_phone` (`shop_phone`, `phone_nr`) VALUES
('Κατάστημα Γενναδίου', '2610984516'),
('Κατάστημα Λύκωνος', '2610984875'),
('Κατάστημα Λύκωνος', '2610999875'),
('Κατάστημα Νοταρά', '2610985436'),
('Κατάστημα Πετμεζά', '2610564872');

--
-- Ευρετήρια για άχρηστους πίνακες
--

--
-- Ευρετήρια για πίνακα `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`email`);

--
-- Ευρετήρια για πίνακα `customers_phone`
--
ALTER TABLE `customers_phone`
  ADD PRIMARY KEY (`customer_phone`,`phone_nr`);

--
-- Ευρετήρια για πίνακα `deliverman`
--
ALTER TABLE `deliverman`
  ADD PRIMARY KEY (`username`),
  ADD UNIQUE KEY `amka` (`amka`),
  ADD UNIQUE KEY `afm` (`afm`),
  ADD UNIQUE KEY `iban` (`iban`);

--
-- Ευρετήρια για πίνακα `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_nr`),
  ADD KEY `customer_order` (`customer_order`),
  ADD KEY `shop_name` (`shop_name`),
  ADD KEY `deliver_order` (`deliver_order`);

--
-- Ευρετήρια για πίνακα `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`shop_name`,`product`);

--
-- Ευρετήρια για πίνακα `shop`
--
ALTER TABLE `shop`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `man_username` (`man_username`),
  ADD UNIQUE KEY `man_amka` (`man_amka`),
  ADD UNIQUE KEY `man_afm` (`man_afm`),
  ADD UNIQUE KEY `man_iban` (`man_iban`);

--
-- Ευρετήρια για πίνακα `shops_phone`
--
ALTER TABLE `shops_phone`
  ADD PRIMARY KEY (`shop_phone`,`phone_nr`);

--
-- AUTO_INCREMENT για άχρηστους πίνακες
--

--
-- AUTO_INCREMENT για πίνακα `orders`
--
ALTER TABLE `orders`
  MODIFY `order_nr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=176575;

--
-- Περιορισμοί για άχρηστους πίνακες
--

--
-- Περιορισμοί για πίνακα `customers_phone`
--
ALTER TABLE `customers_phone`
  ADD CONSTRAINT `customers_phone_ibfk_1` FOREIGN KEY (`customer_phone`) REFERENCES `customer` (`email`);

--
-- Περιορισμοί για πίνακα `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`customer_order`) REFERENCES `customer` (`email`),
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`shop_name`) REFERENCES `shop` (`name`),
  ADD CONSTRAINT `orders_ibfk_3` FOREIGN KEY (`deliver_order`) REFERENCES `deliverman` (`username`);

--
-- Περιορισμοί για πίνακα `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`shop_name`) REFERENCES `shop` (`name`);

--
-- Περιορισμοί για πίνακα `shop`
--
ALTER TABLE `shop`
  ADD CONSTRAINT `shop_ibfk_1` FOREIGN KEY (`name`) REFERENCES `shops_phone` (`shop_phone`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
