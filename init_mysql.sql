-- mysql implementation
CREATE DATABASE expressjs_demo_db;
SET GLOBAL time_zone = '+7:00';

USE expressjs_demo_db;

CREATE TABLE IF NOT EXISTS `employees` (
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
INSERT INTO `employees` (`first_name`, `last_name`, `email`, `phone`, `organization`, `designation`, `salary`, `status`, `is_deleted`, `created_at`) VALUES ('John', 'Doe', 'johndoe@gmail.com', '1234567890', 'BR Softech Pvt Ltd', 'Full Stack Developer', '500.00', '1', '0', '2019-11-19 03:30:30');
INSERT INTO `employees` (`first_name`, `last_name`, `email`, `phone`, `organization`, `designation`, `salary`, `status`, `is_deleted`, `created_at`) VALUES ('Husni', 'Zuhdi', 'husnizuhdi@gmail.com', '0987654321', 'PT Random Sejati', 'Cloud Engineer', '500.00', '1', '0', '2019-11-19 03:30:30');


CREATE TABLE IF NOT EXISTS `users` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password`VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)) ENGINE = InnoDB;
INSERT INTO `users` (`first_name`, `last_name`, `email`, `password`) VALUES ('husni', 'zuhdi', 'husnizuhdi@bangkit', '$2a$10$65knUXoJWgrHHrLP/i4PxubDXzhsXn1mkFiUCF3w8qUrqHX/OGQhG');

-- postgresql implementation
-- CREATE DATABASE expressjs_demo_db;
-- \c expressjs_demo_db;
-- SET TIMEZONE TO 'Asia/Jakarta';

-- CREATE TABLE IF NOT EXISTS employees (
--   id SERIAL PRIMARY KEY,
--   first_name VARCHAR(255) NOT NULL,
--   last_name VARCHAR(255) NOT NULL,
--   email VARCHAR(255) NOT NULL,
--   phone VARCHAR(50) NOT NULL,
--   organization VARCHAR(255) NOT NULL,
--   designation VARCHAR(100) NOT NULL,
--   salary DECIMAL(11,2) DEFAULT 0.00,
--   status INT DEFAULT 0,
--   is_deleted INT DEFAULT 0,
--   created_at TIMESTAMP NOT NULL DEFAULT NOW(),
--   updated_at TIMESTAMP NOT NULL DEFAULT NOW());

-- CREATE OR REPLACE FUNCTION update_update_at_column()
-- RETURNS TRIGGER AS $$
-- BEGIN
--    NEW.updated_at = NOW(); 
--    RETURN NEW;
-- END;
-- $$ language 'plpgsql';

-- CREATE OR REPLACE TRIGGER update_employee_update_at
--     BEFORE UPDATE ON employees --OF updated_at 
--     FOR EACH ROW
--     EXECUTE PROCEDURE update_update_at_column();

-- -- https://stackoverflow.com/questions/1035980/update-timestamp-when-row-is-updated-in-postgresql

-- INSERT INTO employees (first_name, last_name, email, phone, organization, designation, salary, status, is_deleted, created_at, updated_at) VALUES ('John', 'Doe', 'johndoe@gmail.com', '1234567890', 'BR Softech Pvt Ltd', 'Full Stack Developer', '500.00', '1', '0', '2022-06-03 03:30:30', '2022-06-03 03:30:30');
-- INSERT INTO employees (first_name, last_name, email, phone, organization, designation, salary, status, is_deleted, created_at, updated_at) VALUES ('Husni', 'Zuhdi', 'husnizuhdi@gmail.com', '0987654321', 'PT Random Sejati', 'Cloud Engineer', '500.00', '1', '0', '2022-06-03 03:30:30', '2022-06-03 03:30:30');
-- UPDATE employees SET designation='Senior Cloud Engineer', salary='1000'
--   WHERE id='2';


-- CREATE TABLE IF NOT EXISTS users (
--   id SERIAL PRIMARY KEY,
--   first_name VARCHAR(255) NOT NULL,
--   last_name VARCHAR(255) NOT NULL,
--   email VARCHAR(255) NOT NULL,
--   password VARCHAR(255) NOT NULL);
-- INSERT INTO users (first_name, last_name, email, password) VALUES ('John', 'Doe', 'johndoe@gmail.com', '$2a$10$65knUXoJWgrHHrLP/i4PxubDXzhsXn1mkFiUCF3w8qUrqHX/OGQhG');
-- INSERT INTO users (first_name, last_name, email, password) VALUES ('Husni', 'Zuhdi', 'husnizuhdi@gmail.com', '$2a$10$65knUXoJWgrHHrLP/i4PxubDXzhsXn1mkFiUCF3w8qUrqHX/OGQhG');
