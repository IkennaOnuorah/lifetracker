CREATE TABLE users (
id          SERIAL PRIMARY KEY,
username    TEXT NOT NULL UNIQUE,
password    TEXT NOT NULL,
first_name  TEXT NOT NULL,
last_name   TEXT NOT NULL,
email       TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
created_at  TIMESTAMP NOT NULL DEFAULT NOW(),
updated_at  TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE nutrition (
id          SERIAL PRIMARY KEY,
name        TEXT NOT NULL,
category    TEXT NOT NULL,
calories    TEXT NOT NULL,
image_url   TEXT NOT NULL,
user_id     TIMESTAMP NOT NULL DEFAULT NOW(),
created_at  TIMESTAMP NOT NULL DEFAULT NOW()
);




-- CREATE TABLE users (
--   id          SERIAL PRIMARY KEY,
--   password    TEXT NOT NULL,
--   username    TEXT NOT NULL UNIQUE,
--   email       TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
--   is_admin    BOOLEAN NOT NULL DEFAULT FALSE,
--   created_at  TIMESTAMP NOT NULL DEFAULT NOW(),
--   name        TEXT NOT NULL,
-- );


-- CREATE TABLE products (
--   id          SERIAL PRIMARY KEY,
--   name        TEXT NOT NULL,
--   category    TEXT NOT NULL,
--   image       TEXT NOT NULL,
--   description TEXT NOT NULL,
--   price       BIGINIT NOT NULL,
-- )

-- CREATE TABLE orders (
--   id              SERIAL PRIMARY KEY,
--   customer_id     INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
--   created_at      TIMESTAMP NOT NULL DEFAULT NOW()

-- )

-- CREATE TABLE order_details (
--   order_id        INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
--   product_id      INTEGER NOT NULL REFERENCES products(id) ON DELETE CASCADE,
--   quantity        TIMESTAMP NOT NULL DEFAULT 1,
--   discount        Integer,
--   PRIMARY KEY     (order_id, product_id),
-- )