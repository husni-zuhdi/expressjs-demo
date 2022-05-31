CREATE DATABASE expressjs_demo_db;

CREATE  TABLE IF NOT EXISTS `users` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(50) NOT NULL,
  `organization` VARCHAR(255) NOT NULL,
  `designation` VARCHAR(100) NOT NULL,
  `salary` DECIMAL(11,2) UNSIGNED DEFAULT 0.00,
  `status` TINYINT UNSIGNED DEFAULT 0,
  `is_deleted` TINYINT UNSIGNED DEFAULT 0,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)) ENGINE = InnoDB;
INSERT INTO `expressjs_demo_db`.`user` (`first_name`, `last_name`, `email`, `phone`, `organization`, `designation`, `salary`, `status`, `is_deleted`, `created_at`) VALUES ('John', 'Doe', 'johndoe@gmail.com', '1234567890', 'BR Softech Pvt Ltd', 'Full Stack Developer', '500.00', '1', '0', '2019-11-19 03:30:30');