-- psql -U username -W -d todoistDB
-- \i path/to/script.sql

-- show databases
SELECT datname FROM pg_database;

-- show tables (\dt  in psql)
SELECT table_name FROM information_schema.tables
    WHERE table_schema =  'public';