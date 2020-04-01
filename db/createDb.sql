CREATE DATABASE classconnect;

USE classconnect;

CREATE TABLE users (
  user_id     INT unsigned NOT NULL AUTO_INCREMENT,
  email       VARCHAR(150),
  password    VARCHAR(150),
  type        VARCHAR(20) NOT NULL,
  first_name  VARCHAR(150) NOT NULL,
  last_name   VARCHAR(150) NOT NULL,
  average     FLOAT,
  PRIMARY KEY (user_id)
);

CREATE TABLE courses (
  course_id     INT unsigned NOT NULL AUTO_INCREMENT,
  teacher_id    INT unsigned NOT NULL,
  name          VARCHAR(150) NOT NULL,
  size          INT unsigned NOT NULL,
  class_average FLOAT NOT NULL,
  description   TEXT,
  PRIMARY KEY   (course_id),
  FOREIGN KEY   (teacher_id) REFERENCES users(user_id)
);

CREATE TABLE parent_student_relations (
  id          INT unsigned NOT NULL AUTO_INCREMENT,
  parent_id   INT unsigned NOT NULL,
  student_id  INT unsigned NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (parent_id) REFERENCES users(user_id),
  FOREIGN KEY (student_id) REFERENCES users(user_id)
);

CREATE TABLE student_course_relations (
  id          INT unsigned NOT NULL AUTO_INCREMENT,
  student_id  INT unsigned NOT NULL,
  course_id   INT unsigned NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (student_id) REFERENCES users(user_id),
  FOREIGN KEY (course_id) REFERENCES courses(course_id)
);

CREATE TABLE posts (
  id          INT unsigned NOT NULL AUTO_INCREMENT,
  course_id   INT unsigned NOT NULL,
  title       VARCHAR(250) NOT NULL,
  post_date   DATE NOT NULL,
  content     TEXT,
  PRIMARY KEY (id),
  FOREIGN KEY (course_id) REFERENCES courses(course_id)
);

CREATE TABLE assignments (
  id              INT unsigned NOT NULL AUTO_INCREMENT,
  course_id       INT unsigned NOT NULL,
  student_id      INT unsigned NOT NULL,
  title           VARCHAR(250) NOT NULL,
  assignment_date DATE NOT NULL,
  grade           FLOAT NOT NULL,
  comments        TEXT,
  attachment_path VARCHAR(500) NOT NULL,
  PRIMARY KEY     (id),
  FOREIGN KEY     (course_id) REFERENCES courses(course_id),
  FOREIGN KEY     (student_id) REFERENCES users(user_id)
);

CREATE TABLE messages (
  id                INT unsigned NOT NULL AUTO_INCREMENT,
  sender_id         INT unsigned NOT NULL,
  receiver_id       INT unsigned NOT NULL,
  message           TEXT NOT NULL,
  message_datetime  DATETIME NOT NULL,
  PRIMARY KEY       (id),
  FOREIGN KEY       (sender_id) REFERENCES users(user_id),
  FOREIGN KEY       (receiver_id) REFERENCES users(user_id)
);
