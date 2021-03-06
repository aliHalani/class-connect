-- authored by https://github.com/zaheenchoudhry

USE classconnect;

INSERT INTO users (user_id, email, password, type, first_name, last_name, average) VALUES
  (1, "adamsmith@peelschool.ca", "teacher", "teacher", "Adam", "Smith", NULL),
  (2, "johnwhite@gmail.com", "parent", "parent", "John", "White", NULL),
  (3, NULL, NULL, "student", "Abigayle", "White", 87),
  (4, NULL, NULL, "student", "Dale", "White", 73),
  (5, NULL, NULL, "student", "Delphine", "White", 83),
  (6, NULL, NULL, "student", "Matilde", "Monahan", 83),
  (7, NULL, NULL, "student", "Carlee", "Kris", 83),
  (8, NULL, NULL, "student", "Lou", "Bauch", 83),
  (9, NULL, NULL, "student", "Anabel", "Fadel", 83),
  (10, NULL, NULL, "student", "Rodrick", "Runte", 83),
  (11, NULL, NULL, "student", "Tatum", "Prosacco", 83),
  (12, NULL, NULL, "student", "Timmy", "Bartoletti", 83),
  (13, NULL, NULL, "student", "Kaylah", "Block", 83),
  (14, NULL, NULL, "student", "Blanche", "Gustav", 83),
  (15, NULL, NULL, "student", "Savannah", "Swaniawski", 83),
  (16, NULL, NULL, "student", "Pink", "Bahringer", 83),
  (17, NULL, NULL, "student", "Mallory", "Yundt", 83),
  (18, NULL, NULL, "student", "Ariel", "Hamill", 83),
  (19, NULL, NULL, "student", "Lupe", "Effertz", 83),
  (20, NULL, NULL, "student", "Paris", "Farrell", 83),
  (21, NULL, NULL, "student", "Estelle", "Von", 73),
  (22, NULL, NULL, "student", "Davin", "Paucek", 73),
  (23, NULL, NULL, "student", "Icie", "Bartoletti", 73),
  (24, NULL, NULL, "student", "Enid", "Little", 73),
  (25, NULL, NULL, "student", "Kaitlin", "Feeney", 73),
  (26, NULL, NULL, "student", "Oleta", "Runolfsdottir", 73),
  (27, NULL, NULL, "student", "Sedrick", "Conroy", 73),
  (28, NULL, NULL, "student", "Terrence", "Schuppe", 73),
  (29, NULL, NULL, "student", "Bethel", "Mertz", 73),
  (30, NULL, NULL, "student", "Daren", "Reichert", 73),
  (31, NULL, NULL, "student", "Javonte", "Balistreri", 73),
  (32, NULL, NULL, "student", "Nelda", "Gulgowski", 73),
  (33, NULL, NULL, "student", "Aracely", "Wisoky", 73),
  (34, NULL, NULL, "student", "Charlene", "Hickle", 73),
  (35, NULL, NULL, "student", "Jordy", "Koelpin", 73),
  (36, NULL, NULL, "student", "Anika", "Bashirian", 73),
  (37, NULL, NULL, "student", "Marisa", "Cronin", 73),
  (38, NULL, NULL, "student", "Marcia", "Block", 73),
  (39, NULL, NULL, "student", "Izaiah", "Rutherford", 73),
  (40, NULL, NULL, "student", "Ward", "Smith", 73);

INSERT INTO courses (course_id, teacher_id, name, size, class_average, description) VALUES
  (1, 1, "Advanced Business Analytics", 31, 62.0, "Gain practical skills in extracting and manipulating data using SQL code, executing statistical methods for descriptive, predictive, and prescriptive analysis, and effectively interpreting and presenting analytic results."),
  (2, 1, "General Life 101", 28, 83.0, "An introduction to the real life."),
  (3, 1, "Intro to Architecture", 27, 81.0, "Learn how to design!"),
  (4, 1, "Intro to Computer Science", 32, 76.0, "Become fluent in several programming languages and learn about data structures, algorithms, machine learning, data science, networks, and operating systems."),
  (5, 1, "Technical Design", 30, 79.0, "Put your techincal skills to work to design real structures.");

INSERT INTO parent_student_relations (parent_id, student_id) VALUES
  (2, 3), (2, 4), (2, 5); # John White's kids

INSERT INTO student_course_relations (student_id, course_id) VALUES
  (3, 1), (3, 2), (3, 3), (3, 4), (3, 5), # Abigayle
  (4, 1), (4, 2), (4, 3), (4, 4), (4, 5), # Dale
  (5, 1), (5, 2), (5, 3), (5, 4), (5, 5), # Delphine
  (6, 1), (6, 4),
  (7, 1), (7, 4),
  (8, 1), (8, 4),
  (9, 1), (9, 4),
  (10, 1), (10, 4),
  (11, 1), (11, 4),
  (12, 1), (12, 4),
  (13, 1), (13, 4),
  (14, 1), (14, 4),
  (15, 1), (15, 4),
  (16, 1), (16, 4),
  (17, 1), (17, 4),
  (18, 1), (18, 4),
  (19, 1), (19, 4),
  (20, 1), (20, 4),
  (21, 1), (21, 4),
  (22, 1), (22, 4),
  (23, 1), (23, 4),
  (24, 1), (24, 4),
  (25, 1), (25, 4),
  (26, 1), (26, 4),
  (27, 1), (27, 4),
  (28, 1), (28, 4),
  (29, 1), (29, 4),
  (30, 1), (30, 4),
  (31, 1), (31, 4),
  (32, 1), (32, 4),
  (33, 1), (33, 4),
  (34, 1), (34, 4),
  (35, 1), (35, 4),
  (36, 1), (36, 4),
  (37, 1), (37, 4),
  (38, 1), (38, 4),
  (39, 1), (39, 4),
  (40, 1), (40, 4);

INSERT INTO posts (course_id, title, post_date, content) values
  (1, "Class Google Doc", "2020-01-08", "Welcome to Advanced Business Analytics. Please bookmark this link: https://docs.google.com/document/d/19M3qGT9NBWViTRTG5xh7_lxLBWMog1Tr1CUf9nqoQz0/edit?usp=sharing. This Google doc will be used through the term for signup and in-class activities details."),
  (1, "Instructor Office Hour", "2020-01-09", "Wed: 10:30-1pm. Th: 2:30-3:30pm. Location: M3 2009."),
  (1, "Quiz 1", "2020-02-04", "Quiz 1 will take place in-class on Thursday and will cover chapter 1."),
  (1, "COVID-19 update: in-person course activity suspended", "2020-03-16", "Course delivery will continue on D2L. I will update the slides in the next couple days and add more information and comments on the slides so that students can continue to learn on their own."),
  (1, "Final Exam Cancelled", "2020-03-29", "Given the current situation surrounding COVID-19, we have decided to cancel the final exam and give all students a 100%."),
  (4, "Welcome to the course!", "2020-01-08", "Student's assignments this term will require Java, IntelliJ and specific libraries. I'd suggest for the students to install the toolchain on their own machines later this week. I wrote up a long blog post walking through the installation process that might be helpful."),
  (4, "Project Part III and IV", "2020-02-20", "Project Part III (integration) is cancelled and its weight added to Part IV. It is due by 12pm noon on April 2nd. Students are expected to read through the revised assignment requirements."),
  (4, "Online Take-home Final Exam", "2020-03-24", "A take-home final exam will be posted on Learn on April 9 at 11am and due by April 19 at 11am. Its weight is the same as the final exam, 25%. The assessment is open-book and in the format of Multiple Choices, True/False, and Fill in the Blank. Coverage: all instructor lectures (study questions will be provided) and all the tech-talks study questions."),
  (4, "CR/NCR vs. numeric grades", "2020-03-26", "Policy: (1) Instructors have the choice to provide a numeric grade or credit/no-credit (CR/NCR) grade when determining your grade for any course. We are supposed to provide numeric grades if we can do so fairly. (2) After final grades are posted, students will have the ability to choose to have their grade converted to a credit (CR). Students will have an online form to fill out where they provide the course that they want to convert and it will be done by the registrar's office."),
  (4, "Parent Course Perception Survey", "2020-03-30", "I would appreciate it if you could take a few minutes to fill out the 'Parent Course Perception Survey' at your earliest convenience. This course is still developing, and your feedback will help to make it better. The link will be available until Friday April 3, 11:59pm.");

INSERT INTO assignments (course_id, student_id, title, assignment_date, grade, comments, attachment_path) VALUES
  (1, 3, "Goodness of Fit", "2020-02-04", 84.0, "Great use of visual aids.", "images/1.png"),
  (1, 3, "Predictive Analytics Report", "2020-02-23", 78.0, "Good overall report, but could use some more detail.", "images/2.png"),
  (1, 3, "Classification in Stock Markets", "2020-03-15", 82.0, "Good choice to explore multiple classifiers.", "images/3.png"),
  (1, 4, "Dealing with Missing Data", "2020-02-05", 94.0, "Very well done. You went beyond expectations in your research and the writing is clear and concise throughout. Try including some graphics to engage the reader. Missing cover page.", "images/4.png"),
  (1, 4, "Pilgrim Bank Case", "2020-03-18", 67.0, "Lacks depth of analysis.", "images/5.png"),
  (4, 3, "Reverse Integer", "2020-01-29", 79.0, "Efficient algorithm but code styling and formatting needs to be worked on.", "images/6.png"),
  (4, 3, "Longest Palindromic Substring", "2020-02-13", 87.0, "Good job implementing the algorithm with an efficient runtime. Please add comments to your code.", "images/7.png"),
  (4, 3, "Dynamic Programming", "2020-03-04", 91.0, "Very well done. Good job explaining the dynamic programming algorithm and the runtime.", "images/8.png"),
  (4, 4, "Three Sum", "2020-02-09", 59.0, "Inefficient implementation of the code. Runtime is very slow. Please review notes.", "images/9.png"),
  (4, 4, "Depth First Search", "2020-03-02", 77.0, "The implementation has an efficient runtime but I would have prefered it to be written in a programming language rather than in pseudocode. Good job overall.", "images/10.png");
