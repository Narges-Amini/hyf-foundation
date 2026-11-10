--***************************************
--           CHALLENGES
--***************************************
-- Count the tasks: Return the total number of rows in task as a single value
SELECT COUNT(*) FROM task;

-- Count tasks without valid due dates:Return the number of tasks with no valid due date, including NULL or unparseable dates, as a single value.
SELECT COUNT(*) FROM task WHERE date(due_date) IS NULL;

--Done tasks: Return all columns of tasks marked Done
SELECT * FROM task WHERE status_id = 3;

--Tasks not done: Return all columns of tasks not marked Done
SELECT * FROM task WHERE status_id != 3;

--Tasks by creation date: Return all columns of every task, ordered by creation date with the most recent first.
SELECT * FROM task ORDER BY created DESC;

--Most recently created task: Return all columns of the single most recently created task.
SELECT * FROM task ORDER BY created DESC LIMIT 1;

--Tasks mentioning database: Return the title and due date of tasks whose title or description contains 'database', ignoring case. Column order: title, due_date
SELECT title, due_date FROM task WHERE title LIKE '%database%' OR description LIKE '%database%';

--Task titles and IDs: Return every task's id and title. Column order: id, title. Order by id ascending
SELECT id , title FROM task ORDER BY id ASC;

--Tasks in progress: Return the id and title of tasks with status_id 2. Column order: id, title. Order by id ascending.
SELECT id, title FROM task WHERE status_id = 2 ORDER BY id ASC;

--Tasks without due dates: Return the id and title of tasks whose due_date is NULL. Column order: id, title. Order by id ascending.
SELECT id, title FROM task WHERE Due_date = NULL ORDER BY id ASC;

--Tasks alphabetically: Return each task's id and title, ordered by title alphabetically (A to Z). Column order: id, title.
SELECT id , title FROM task ORDER BY title;

--Five highest task IDs: Return the id and title of the five tasks with the highest IDs, highest ID first. Column order: id, title.
SELECT id, title FROM task ORDER BY id DESC LIMIT 5;

--Unassigned tasks: Return the id and title of tasks with no assigned user (user_id is NULL). Column order: id, title. Order by id ascending.
SELECT id, title FROM task WHERE user_id  IS NULL ORDER BY id ASC;

--Rename a task: Change the title of task id 1 to 'Wash the laundry'. Update only that task and no other columns.
SELECT * FROM task WHERE id = 1;
UPDATE task SET title = 'Wash the laundry' WHERE id = 1;

--Mark a task done: Set status_id to 3 for task id 22 only. Leave every other task unchanged.
SELECT * FROM task WHERE id =22;
UPDATE task SET status_id = 3 WHERE id = 22;

--Assign an unassigned task: Assign task id 23 to user id 11 by setting user_id to 11. Change no other rows or columns.
SELECT * FROM task WHERE id = 23;
UPDATE task SET user_id = 11 WHERE id = 23;

--Set unassigned task status: Set status_id to 1 for tasks whose user_id is NULL. These are task ids 23 and 35; change no other rows or columns.
SELECT * FROM task WHERE id IN (23, 35);
UPDATE task SET status_id = 1 WHERE id IN (23, 35);

--Delete one task: Delete task id 35 only. Do not delete or change any other rows.
DELETE FROM task WHERE id =35;

--Remove one task tag: Remove the Personal tag association (tag_id 2) from task id 1 only. Do not delete the task or any other tag association.
DELETE FROM task_tag WHERE task_id = 1 AND tag_id = 2;

--Create task notes table: Create a table named task_note with columns in this order: id INTEGER PRIMARY KEY, task_id INTEGER NOT NULL, note TEXT NOT NULL. Add a foreign key from task_id to task(id).
CREATE TABLE task_note (
  id INTEGER PRIMARY KEY,
  task_id INTEGER NOT NULL , 
  note TEXT NOT NULL,
  FOREIGN KEY (task_id) REFERENCES task(id)
);

--***************************************
--           CLAS EXERCISES
--***************************************
--Names and phones: List the names and phones of all users. Column order: name, phone.
SELECT name , phone FROM user;

--Users by name: List all columns of all users, ordered alphabetically by name.
SELECT * FROM user ORDER BY name;

--Name of user 10: Find the name of the user with id = 10.
SELECT name FROM user WHERE id = 10;

--Three oldest tasks: Find all columns of the 3 oldest tasks, ordered by creation date from oldest to newest.
SELECT * FROM task ORDER BY created ASC LIMIT 3;

--Bonus: Tasks without descriptions: Find all columns of tasks that have no description.
SELECT * FROM task WHERE description IS NULL;

--Bonus: Users with .com email: Find all columns of users whose email ends with .com.
SELECT * FROM user WHERE email LIKE '%.com';

--Not started task titles: List the titles of all tasks that are not started.
SELECT title FROM task WHERE status_id = 1;

--User 1's in-progress tasks: Find all columns of tasks assigned to user 1 that are in progress.
SELECT * FROM task WHERE user_id = 1 AND status_id= 2;

--Task titles containing database: Find all columns of tasks whose title contains database, ignoring case.
SELECT * FROM task WHERE title LIKE '%database%';

--Users without phone numbers: List the names of users who have no phone number.
SELECT name FROM user WHERE phone IS NULL;

--Five newest tasks: Show the five newest tasks by creation date, newest first. Column order: title, created.
SELECT title, created FROM task ORDER BY created DESC LIMIT 5;

--Open tasks by title: List all columns of tasks that are either not started or in progress, ordered by title.
SELECT * FROM task WHERE status_id != 3 ORDER BY title;

--Mark task 1 done: Change the status of task 1 to Done. Leave all other data unchanged.
SELECT * FROM task WHERE id = 1;
UPDATE task SET status_id = 3 WHERE id = 1;

--Change task 2 description: Change the description of task 2 to 'Write and test SELECT queries'. Leave all other data unchanged.
SELECT * FROM task WHERE id= 2;
UPDATE task SET description = 'Write and test SELECT queries' WHERE id = 2;

--Change task 3 title: Change the title of task 3 to 'Practice: Review query results'. Leave all other data unchanged.
SELECT * FROM task WHERE id = 3;
UPDATE task SET title = 'Practice: Review query results' WHERE id = 3;

--Change task 4 due date: Change the due date of task 4 to '2031-01-15'. Leave all other data unchanged.
SELECT * FROM task WHERE id = 4;
UPDATE task SET due_date = '2031-01-15' WHERE id = 4;

--Change user 1 phone: Change the phone number of user 1 to '12345678'. Leave all other data unchanged.
SELECT * FROM user WHERE id = 1;
UPDATE user SET phone = '12345678' WHERE id = 1;

--Change tag 1 name: Change the name of tag 1 to 'Practice'. Leave all other data unchanged.
SELECT * FROM tag WHERE id = 1;
UPDATE tag SET name = 'Practice' WHERE id = 1;

--Insert a task for user 1: Insert task 100 titled 'Practice 1: Read SQL', with status Not started, assigned to user 1. Set created and updated to '2030-01-01'; leave other optional fields NULL.
INSERT INTO task(id, title,description, created, updated, due_date, status_id, user_id)
VALUES(100,'Practice 1: Read SQL',NULL,'2030-01-01', '2030-01-01',NULL, 1, 1);

--Insert a task with description: Insert task 100 titled 'Practice 2: Write queries', with description 'Practice SQL' and status Not started. Set created and updated to '2030-01-01'; leave other optional fields NULL.
INSERT INTO task(id, title,description, created, updated, due_date, status_id, user_id)
VALUES(100, 'Practice 2: Write queries','Practice SQL','2030-01-01', '2030-01-01',NULL, 1, NULL);

--Insert an in-progress task: Insert task 100 titled 'Practice 3: Review results', with status In progress, assigned to user 1. Set created and updated to '2030-01-01'; leave other optional fields NULL.
INSERT INTO task(id, title,description, created, updated, due_date, status_id, user_id)
VALUES(100, 'Practice 3: Review results',NULL,'2030-01-01', '2030-01-01',NULL, 2, 1);

--Insert a task with due date: Insert task 100 titled 'Practice 4: Plan a project', with status Not started and due date '2030-12-31'. Set created and updated to '2030-01-01'; leave other optional fields NULL.
INSERT INTO task(id, title,description, created, updated, due_date, status_id, user_id)
VALUES(100, 'Practice 4: Plan a project',NULL,'2030-01-01', '2030-01-01', '2030-12-31', 1, NULL);

--Insert a user: Insert user 100 named 'Practice User' with email 'practice@example.com' and no phone number.
INSERT INTO user (id , name, email, phone)
VALUES(100,'Practice User', 'practice@example.com', NULL);

--Insert a tag: Insert tag 100 named 'Practice'.
INSERT INTO tag (id, name)
VALUES (100, 'Practice');

--Delete a task: Delete task 23. Work on the fresh practice database; leave all other data unchanged.
DELETE FROM task WHERE id = 23;

--Delete a user: Delete user 11. Work on the fresh practice database; leave all other data unchanged.
DELETE FROM user WHERE id = 11;

--Delete a tag: Delete tag 5 from the fresh practice database. Its task associations will also be deleted. Leave all other data unchanged.
DELETE FROM tag where id = 5;

--Create a practice note table: Create practice_note with id INTEGER PRIMARY KEY, title TEXT NOT NULL, and optional details TEXT. Insert a note with id 1, title 'First note' and details 'Practising CREATE TABLE'.
CREATE TABLE practice_note (
  id INTEGER PRIMARY KEY, 
  title TEXT NOT NULL, 
  details TEXT
);
INSERT INTO practice_note (id, title, details)
VALUES(1, 'First note', 'Practising CREATE TABLE');

--Interactive CRUD practice: Insert task 100 titled 'Prepare presentation', created and updated '2030-01-01', status Not started and user 1; then change its status to In progress. Leave other optional fields NULL.
INSERT INTO task(id, title,description, created, updated, due_date, status_id, user_id)
VALUES (100, 'Prepare presentation', NULL,'2030-01-01','2030-01-01', NULL, 1, 1);
SELECT * FROM task WHERE id= 100;
UPDATE task SET status_id = 2 WHERE id = 100;

--Combine users and tasks: Insert user 100 named 'Practice User' with email 'practice@example.com' and no phone. Insert two tasks for that user: task 100 titled 'Read SQL' with status In progress, and task 101 titled 'Write SQL' with status Not started. Set both tasks' created and updated to '2030-01-01'; leave other optional fields NULL.
INSERT INTO user (id, name, email, phone)
VALUES (100, 'Practice User', 'practice@example.com' , NULL);
INSERT INTO task (id, title, description, created, updated, due_date, status_id, user_id)
VALUES(100, 'Read SQL', NULL, '2030-01-01', '2030-01-01', NULL, 2, 100);
INSERT INTO task (id, title, description, created, updated, due_date, status_id, user_id)
VALUES(101, 'Write SQL', NULL, '2030-01-01', '2030-01-01', NULL, 1, 100);

--Create a practice book table: Create practice_book with id INTEGER PRIMARY KEY, required title TEXT, and optional author TEXT. Insert a book with id 1, title 'SQL Practice' and author 'Practice User'.
CREATE TABLE practice_book(
  id INTEGER PRIMARY KEY, 
  title TEXT NOT NULL, 
  author TEXT
);
INSERT INTO practice_book(id, title, author)
VALUES(1, 'SQL Practice', 'Practice User');








