CREATE DATABASE expressjs_demo_db;

CREATE  TABLE IF NOT EXISTS `employees` (
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
INSERT INTO `expressjs_demo_db`.`employee` (`first_name`, `last_name`, `email`, `phone`, `organization`, `designation`, `salary`, `status`, `is_deleted`, `created_at`) VALUES ('John', 'Doe', 'johndoe@gmail.com', '1234567890', 'BR Softech Pvt Ltd', 'Full Stack Developer', '500.00', '1', '0', '2019-11-19 03:30:30');
INSERT INTO `expressjs_demo_db`.`employee` (`first_name`, `last_name`, `email`, `phone`, `organization`, `designation`, `salary`, `status`, `is_deleted`, `created_at`) VALUES ('Husni', 'Zuhdi', 'husnizuhdi@gmail.com', '0987654321', 'PT Random Sejati', 'Cloud Engineer', '500.00', '1', '0', '2019-11-19 03:30:30');

CREATE  TABLE IF NOT EXISTS `user` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password`VARCHAR(255) NOT NULL,
  `token` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)) ENGINE = InnoDB;
INSERT INTO `expressjs_demo_db`.`user` (`first_name`, `last_name`, `email`, `password`, `token`) VALUES ('John', 'Doe', 'johndoe@gmail.com', 'password', 'UEjtGyDf7DtBrhIlbRjcd26c1cGuxcOsSXdGs2FZCJSMjR+9CFmrSOlbhNkCyo/bsla8MzSkaFFZhiqNuXkd8brXmFk4oI7U+63EvVt+Ev57+WaYAE8DlpIL8ia8u9KTLun0W2pXlg+Az2czDTspmmYnzSr2O628TgbToarwxPhv3H3lRaMvSV4LPh0KrAfPvTg3SX66WM96auWHzHUtJ8HkZKN5nDec+gUXFXxq/ONo7cvz');
INSERT INTO `expressjs_demo_db`.`user` (`first_name`, `last_name`, `email`, `password`, `token`) VALUES ('Husni', 'Zuhdi', 'husnizuhdi@gmail.com', 'pas$w0rd', 'scaaqSmcCgHpkZOsaOgzSs0DpdsWSZCXI+3kmPrX+VqTNz+iQslWaktTq1JhsT3O50K4Jw3LfjKmABDgeSSkaTWuM/lMjyVNrmcbcixJp6ZYu0TVJ5mUss0vI3Msm7jzVVxE3UDLWRK5v7inWM5VdhMl+Nct5SiENlU+GoZclFtoPPuOtQ9VLtpIiHM9WBcKuKl2FseBaB07/VmZF5W1IldOlpODLMEZbBAeGTSEoOG+8Bn1');
