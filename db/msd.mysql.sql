-- Create the SECTOR table
CREATE TABLE SECTOR (
    sector_id VARCHAR(255) PRIMARY KEY,
    color VARCHAR(50),
    name VARCHAR(255),
    last_modified DATETIME
);

-- Create the CATEGORY table
CREATE TABLE CATEGORY (
    category_id VARCHAR(255) PRIMARY KEY,
    color VARCHAR(50),
    name VARCHAR(255),
    sector_id VARCHAR(255),
    last_modified DATETIME,
    FOREIGN KEY (sector_id) REFERENCES SECTOR(sector_id)
);

-- Create the SKILLS table with JSON for 'name'
CREATE TABLE SKILLS (
    skill_id VARCHAR(255) PRIMARY KEY,
    name JSON,  -- Using JSON data type to store an array of names
    category_id VARCHAR(255),
    last_modified DATETIME,
    FOREIGN KEY (category_id) REFERENCES CATEGORY(category_id)
);