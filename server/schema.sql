DROP TABLE recipes CASCADE;
DROP TABLE tools CASCADE;
DROP TABLE recipe_tool;

CREATE TABLE recipes (
    id integer NOT NULL PRIMARY KEY,
    name varchar(255)
);

CREATE TABLE tools(
    id integer NOT NULL PRIMARY KEY,
    name varchar(255),
    description varchar(1024),
    manufacturer varchar(255),
    price numeric check (price >= 0),
    imageUrls varchar(1024)[]
);

CREATE TABLE recipe_tool( 
    joinId integer NOT NULL PRIMARY KEY,
    id_recipe integer CONSTRAINT rec_tool_rec_ref REFERENCES recipes (id) ON UPDATE CASCADE ON DELETE CASCADE,
    id_tool integer CONSTRAINT rec_tool_tool_ref REFERENCES tools (id) ON UPDATE CASCADE ON DELETE CASCADE
);

