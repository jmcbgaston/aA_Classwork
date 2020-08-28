DROP TABLE IF EXISTS question_tags;
DROP TABLE IF EXISTS question_follows;
DROP TABLE IF EXISTS question_likes;
DROP TABLE IF EXISTS replies;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS tags;
DROP TABLE IF EXISTS users;

PRAGMA foreign_keys = ON;

CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    fname TEXT NOT NULL,
    lname TEXT NOT NULL
);
-- USERS
-- id fname lname
-- 1   tina  fey
-- 2   clark kent

CREATE TABLE questions (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    author_id INTEGER NOT NULL,

    FOREIGN KEY (author_id) REFERENCES users(id)
);
-- QUESTIONS 
-- id title           body      author_id
-- 1  who am i      dunno dude     1
-- 2  what are you  a dog          1

CREATE TABLE question_follows (
    id INTEGER PRIMARY KEY,
    questions_id INTEGER,
    user_id INTEGER,

    FOREIGN KEY (questions_id) REFERENCES questions(id)
    FOREIGN KEY (user_id) REFERENCES users(id),
);
-- QUESTION FOLLOWS
-- id  question_id  user_id
-- 1      1            1
-- 2      1            2
-- 3      2            1
-- 4      2            2

CREATE TABLE replies (
    id INTEGER PRIMARY KEY,
    question_id INTEGER,
    question_body TEXT NOT NULL,
    reply_id INTEGER,
    user_id INTEGER,

    FOREIGN KEY (question_id) REFERENCES questions(id),
    FOREIGN KEY (question_body) REFERENCES questions(body),
    FOREIGN KEY (reply_id) REFERENCES replies(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- REPLIES
-- id   question id   question_body  reply_id  user_id
-- 1          1        doing well      NULL      2
-- 2          1        great            1        1     

CREATE TABLE likes (
    id INTEGER PRIMARY KEY,
    question_id INTEGER,
    user_id INTEGER,
    
    FOREIGN KEY (question_id) REFERENCES questions(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
-- LIKES
-- id   user_id   question_id
-- 1      1           1
-- 2      1           1
-- 3      1           2

INSERT INTO
    users (fname, lname)
VALUES
    ('Jose', 'Gaston'),
    ('Juan', 'Cattaneo');

INSERT INTO
    questions (title, body)
VALUES
    -- ('Life', 'Who am I?', (SELECT id FROM users WHERE fname = 'Jose')),
    -- ('Body', 'What''s a BMI?', (SELECT id FROM users WHERE fname = 'Jose'));
    ('Life', 'Who am I?'),
    ('Body', 'What''s a BMI?');