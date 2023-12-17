-- @block;
SHOW DATABASES; 

-- @block;
CREATE DATABASE todoistDB;

-- @block;
USE todoistDB;

-- @block;
SHOW TABLES;

-- @block;
DROP TABLE IF EXISTS todoist_users;
CREATE TABLE todoist_users (
    `id` BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    `email` VARCHAR(255) NOT NULL UNIQUE,
    `hashedPassword` VARCHAR(255) NOT NULL,
    `fullName` VARCHAR(255) NOT NULL,
    -- personal(0), work(1), education(2)
    `usageMode` SMALLINT  DEFAULT(0),
    `teamAccount` BOOLEAN DEFAULT(0),
    `createdAt` TIMESTAMP NOT NULL DEFAULT(now()),
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- @block;
INSERT INTO todoist_users (
    `email`,
    `hashedPassword`,
    `fullName`,
    `usageMode`,
    `teamAccount`
) VALUES (
    "matt@test.com", "tester123", "Matt B", 2, 0
);

-- @block;
SELECT * FROM todoist_users;