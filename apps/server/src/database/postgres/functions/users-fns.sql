--   \c todoistDB

DROP FUNCTION IF EXISTS addTodoistUser(VARCHAR, VARCHAR, VARCHAR, SMALLINT, BOOLEAN);

-- addTodoistUser eg select * from addTodoistUser('test@test.com','TestPassword123','Test Name', '1', TRUE);
CREATE OR REPLACE FUNCTION addTodoistUser(
    _email VARCHAR,
    _hashed_password VARCHAR,
    _full_name VARCHAR,
    _usage_mode SMALLINT,
    _team_account BOOLEAN
) RETURNS TABLE (
    id BIGINT,
    email VARCHAR,
    hashed_password VARCHAR,
    full_name VARCHAR,
    usage_mode SMALLINT,
    team_account BOOLEAN,
    created_at TIMESTAMPTZ,
    updated_at TIMESTAMPTZ
) AS $$ 
BEGIN
    RETURN QUERY
    INSERT INTO todoist_users (email, hashed_password, full_name, usage_mode, team_account)
    VALUES (_email, _hashed_password, _full_name, _usage_mode, _team_account)
    RETURNING 
        todoist_users.id,
        todoist_users.email,
        todoist_users.hashed_password,
        todoist_users.full_name,
        todoist_users.usage_mode,
        todoist_users.team_account,
        todoist_users.created_at,
        todoist_users.updated_at;
END;
$$ LANGUAGE plpgsql;