-- Create the SECTOR table with an integer primary key
CREATE TABLE SECTOR (
    sector_id INTEGER PRIMARY KEY AUTOINCREMENT,
    color TEXT,
    name TEXT,
    last_modified DATETIME
);

-- Create the CATEGORY table with an integer primary key and foreign key
CREATE TABLE CATEGORY (
    category_id INTEGER PRIMARY KEY AUTOINCREMENT,
    color TEXT,
    name TEXT,
    sector_id INTEGER,
    last_modified DATETIME,
    FOREIGN KEY (sector_id) REFERENCES SECTOR(sector_id)
);

-- Create the SKILLS table with an integer primary key and foreign key
CREATE TABLE SKILLS (
    skill_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,  -- Store JSON or comma-separated values as needed
    category_id INTEGER,
    last_modified DATETIME,
    FOREIGN KEY (category_id) REFERENCES CATEGORY(category_id)
);
