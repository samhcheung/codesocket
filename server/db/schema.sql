-- May or may not be necessary

-- CREATE DATABASE codesocket;

-- \c codesocket;

CREATE TABLE users (
	id bigserial primary key,
	user_name varchar(20) NOT NULL
);

-- CREATE TABLE doc (
-- 	id bigserial primary key,
-- 	docname varchar(20) NOT NULL,
-- 	docContent text default NULL,
-- 	create_time timestamp without time zone default (now() at time zone 'utc')
-- );

-- CREATE TABLE devdoc (
-- 	id bigserial primary key,
-- 	userId bigserial REFERENCES dev(id),
-- 	docId bigserial REFERENCES doc(id)
-- );

-- CREATE TABLE dochistory (
-- 	id bigserial primary key,
-- 	userId bigserial REFERENCES dev(id),
-- 	docId bigserial REFERENCES doc(id),
-- 	docContent text NOT NULL,
-- 	saved_time timestamp without time zone default NULL
-- );
