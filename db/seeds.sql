CREATE TABLE gear_categories (
  id int PRIMARY KEY,
  category_name VARCHAR(50) NOT NULL,
  category_order INT
);

INSERT INTO gear_categories (id, category_name, category_order)
VALUES
    (1, 'Core Equipment', 1),
    (2, 'Clothing', 2),
    (3, 'Camp Kitchen', 3),
    (4, 'Personal Items', 4),
    (5, 'Electronics', 5),
    (6, 'Miscellaneous', 6);

CREATE TABLE gear_items (
 id int PRIMARY KEY,
 item_name VARCHAR(50) NOT NULL,
 category_id INT NOT NULL,
 FOREIGN KEY (category_id)
        REFERENCES gear_categories (id)
);

INSERT INTO gear_items (id, item_name, category_id)
VALUES
    (1, 'Backpack', 1),
    (2, 'Tent', 1),
    (3, 'Backpack', 1),
    (4, 'Bear Box', 3),
    (5, 'Water Filter', 3),
    (6, 'Stove', 3),
    (7, 'Pot', 3),
    (8, 'Fuel', 3),
    (9, 'Bowl', 3),
    (10, 'Spork', 3),
    (11, 'Water Bottle', 3),
    (12, 'Mug', 3),
    (13, 'Toothbrush', 4),
    (14, 'Toilet Paper', 4),
    (15, 'Puffy Jacket', 2),
    (16, 'Shorts', 2),
    (17, 'Sunglasses', 2),
    (18, 'Socks', 2),
    (19, 'Sun Hat', 2),
    (20, 'Warm Hat', 2),
    (21, 'Map', 1);