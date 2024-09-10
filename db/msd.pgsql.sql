-- Create the SECTOR table
CREATE TABLE SECTOR (
    sector_id VARCHAR(255) PRIMARY KEY,
    color VARCHAR(50),
    name VARCHAR(255),
    last_modified TIMESTAMP
);

-- Create the CATEGORY table
CREATE TABLE CATEGORY (
    category_id VARCHAR(255) PRIMARY KEY,
    color VARCHAR(50),
    name VARCHAR(255),
    sector_id VARCHAR(255),
    last_modified TIMESTAMP,
    FOREIGN KEY (sector_id) REFERENCES SECTOR(sector_id)
);

-- Create the SKILLS table with JSON for 'name'
CREATE TABLE SKILLS (
    skill_id VARCHAR(255) PRIMARY KEY,
    name JSONB,  -- Using JSONB data type to store an array of names (PostgreSQL-specific)
    category_id VARCHAR(255),
    last_modified TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES CATEGORY(category_id)
);

-- Insert sample data into SECTOR table
INSERT INTO SECTOR (color, name, last_modified) VALUES
('Blue', 'Technology', '2024-09-09 10:00:00'),
('Green', 'Finance', '2024-09-09 10:00:00'),
('Red', 'Healthcare', '2024-09-09 10:00:00');

-- Insert sample data into CATEGORY table
INSERT INTO CATEGORY (color, name, sector_id, last_modified) VALUES
('LightBlue', 'Software Engineering', 1, '2024-09-09 10:00:00'),
('DarkGreen', 'Investment Banking', 2, '2024-09-09 10:00:00'),
('Pink', 'Nursing', 3, '2024-09-09 10:00:00'),
('LightGreen', 'Financial Analysis', 2, '2024-09-09 10:00:00');

-- Insert sample data into SKILLS table
INSERT INTO SKILLS (name, category_id, last_modified) VALUES
('Java', 1, '2024-09-09 10:00:00'),
('Risk Management', 2, '2024-09-09 10:00:00'),
('Patient Care', 3, '2024-09-09 10:00:00'),
('Quantitative Analysis', 4, '2024-09-09 10:00:00');
