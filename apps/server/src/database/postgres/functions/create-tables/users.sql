-- \c todoistDB

DROP FUNCTION IF EXISTS createTodoistUsers();

CREATE OR REPLACE FUNCTION createTodoistUsers() RETURNS VOID AS $$ 
BEGIN 
    DROP TABLE IF EXISTS todoist_users;
    CREATE TABLE todoist_users (
        id BIGSERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        hashed_password VARCHAR(255) NOT NULL,
        full_name VARCHAR(255)  NOT NULL,
        -- personal(0), work(1), education(2)
        usage_mode SMALLINT DEFAULT 0,
        team_account BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
END;
$$ LANGUAGE plpgsql;

SELECT createTodoistUsers();

CREATE OR REPLACE FUNCTION todoist_update_updatedAt_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW."updated_at" = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER todoist_update_updatedAt 
    BEFORE UPDATE ON todoist_users
        FOR EACH ROW
            EXECUTE FUNCTION todoist_update_updatedAt_column();
