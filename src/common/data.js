let courseData = {
  14542: {
    courseName: "Intro to Architecture",
    numOfStudents: 31,
    classAverage: 83,
    courseLink: "https://www.apple.com",
    description: "This is a sample description for a course",
    id: 14542
  },
  38457: {
    courseName: "Intro to Computer Science",
    numOfStudents: 31,
    classAverage: 87,
    courseLink: "https://www.apple.com",
    description: "This is a sample description for a course",
    id: 38457
  },
  43852: {
    courseName: "Advanced Business Analytics",
    numOfStudents: 31,
    classAverage: 62,
    courseLink: "https://www.apple.com",
    description: "This is a sample description for a course",
    id: 43852
  },
  57329: {
    courseName: "General Life 101",
    numOfStudents: 31,
    classAverage: 45,
    courseLink: "https://www.apple.com",
    description: "This is a sample description for a course",
    id: 57329
  },
  91847: {
    courseName: "Technical Design",
    numOfStudents: 31,
    classAverage: 73,
    courseLink: "https://www.apple.com",
    description: "This is a sample description for a course",
    id: 91847
  }
};

let coursePosts = [{ "id": 1, "title": "Reduced bottom-line structure", "date": "6/25/2019", "content": "magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget" },
{ "id": 2, "title": "Synergized regional hierarchy", "date": "10/31/2019", "content": "aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo" },
{ "id": 3, "title": "Synergistic upward-trending hub", "date": "9/3/2019", "content": "luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin" },
{ "id": 4, "title": "Open-source bandwidth-monitored budgetary management", "date": "12/8/2019", "content": "donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae" },
{ "id": 5, "title": "Reduced optimizing hierarchy", "date": "9/1/2019", "content": "proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus" },
{ "id": 6, "title": "Synergistic zero tolerance local area network", "date": "9/1/2019", "content": "sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel" },
{ "id": 7, "title": "Switchable heuristic monitoring", "date": "4/14/2019", "content": "quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque" },
{ "id": 8, "title": "Advanced optimal ability", "date": "1/8/2020", "content": "lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper" },
{ "id": 9, "title": "Vision-oriented multi-state groupware", "date": "10/23/2019", "content": "morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus" },
{ "id": 10, "title": "Front-line asynchronous extranet", "date": "7/9/2019", "content": "ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis" },
{ "id": 11, "title": "Intuitive 5th generation flexibility", "date": "5/28/2019", "content": "feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor" },
{ "id": 12, "title": "Ergonomic hybrid capacity", "date": "6/28/2019", "content": "diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in" },
{ "id": 13, "title": "Automated static ability", "date": "11/30/2019", "content": "lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor" },
{ "id": 14, "title": "Self-enabling local process improvement", "date": "4/13/2019", "content": "lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in" },
{ "id": 15, "title": "Down-sized fresh-thinking support", "date": "3/5/2020", "content": "nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi" },
{ "id": 16, "title": "Re-engineered local implementation", "date": "12/21/2019", "content": "porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas" },
{ "id": 17, "title": "Networked motivating neural-net", "date": "4/23/2019", "content": "duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac" },
{ "id": 18, "title": "Optional actuating challenge", "date": "1/11/2020", "content": "mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non" },
{ "id": 19, "title": "Universal static synergy", "date": "3/12/2019", "content": "erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis" },
{ "id": 20, "title": "Reverse-engineered attitude-oriented internet solution", "date": "9/24/2019", "content": "felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada" }]

let studentData = [
  {
    "last": "Lockman",
    "id": 0,
    "first": "Delphine",
    "average": 83
  },
  {
    "last": "Smith",
    "id": 1,
    "first": "Dale",
    "average": 73
  },
  {
    "last": "Steuber",
    "id": 2,
    "first": "Abigayle",
    "average": 78
  },
  {
    "last": "Monahan",
    "id": 3,
    "first": "Matilde"
  },
  {
    "last": "Kris",
    "id": 4,
    "first": "Carlee"
  },
  {
    "last": "Bauch",
    "id": 5,
    "first": "Lou"
  },
  {
    "last": "Fadel",
    "id": 6,
    "first": "Anabel"
  },
  {
    "last": "Runte",
    "id": 7,
    "first": "Rodrick"
  },
  {
    "last": "Prosacco",
    "id": 8,
    "first": "Tatum"
  },
  {
    "last": "Bartoletti",
    "id": 9,
    "first": "Timmy"
  },
  {
    "last": "Block",
    "id": 10,
    "first": "Kaylah"
  },
  {
    "last": "Gustav",
    "id": 11,
    "first": "Blanche"
  },
  {
    "last": "Swaniawski",
    "id": 12,
    "first": "Savannah"
  },
  {
    "last": "Bahringer",
    "id": 13,
    "first": "Pink"
  },
  {
    "last": "Yundt",
    "id": 14,
    "first": "Mallory"
  },
  {
    "last": "Hamill",
    "id": 15,
    "first": "Ariel"
  },
  {
    "last": "Effertz",
    "id": 16,
    "first": "Lupe"
  },
  {
    "last": "Farrell",
    "id": 17,
    "first": "Paris"
  },
  {
    "last": "Von",
    "id": 18,
    "first": "Estelle"
  },
  {
    "last": "Paucek",
    "id": 19,
    "first": "Davin"
  },
  {
    "last": "Bartoletti",
    "id": 20,
    "first": "Icie"
  },
  {
    "last": "Little",
    "id": 21,
    "first": "Enid"
  },
  {
    "last": "Feeney",
    "id": 22,
    "first": "Kaitlin"
  },
  {
    "last": "Runolfsdottir",
    "id": 23,
    "first": "Oleta"
  },
  {
    "last": "Conroy",
    "id": 24,
    "first": "Sedrick"
  },
  {
    "last": "Schuppe",
    "id": 25,
    "first": "Terrence"
  },
  {
    "last": "Mertz",
    "id": 26,
    "first": "Bethel"
  },
  {
    "last": "Reichert",
    "id": 27,
    "first": "Daren"
  },
  {
    "last": "Balistreri",
    "id": 28,
    "first": "Javonte"
  },
  {
    "last": "Gulgowski",
    "id": 29,
    "first": "Nelda"
  },
  {
    "last": "Wisoky",
    "id": 30,
    "first": "Aracely"
  },
  {
    "last": "Hickle",
    "id": 31,
    "first": "Charlene"
  },
  {
    "last": "Koelpin",
    "id": 32,
    "first": "Jordy"
  },
  {
    "last": "Bashirian",
    "id": 33,
    "first": "Anika"
  },
  {
    "last": "Cronin",
    "id": 34,
    "first": "Marisa"
  },
  {
    "last": "Block",
    "id": 35,
    "first": "Marcia"
  },
  {
    "last": "Rutherford",
    "id": 36,
    "first": "Izaiah"
  },
  {
    "last": "Smith",
    "id": 37,
    "first": "Ward"
  }]


let assignmentData = {
  0: {
    "title": "Insect Assignment",
    "grade": 23,
    "attachments": [{
      "filename": "insect.jpg",
      "src": "../images/"
    }],
    "comments": "You did a good job, but I hate insects. Please ask for more clarification next time.",
    "date": "10/31/2019",
    "id": 0
  },
  1: {
    "title": "Bake-a-food Project",
    "grade": 73,
    "attachments": [{
      "filename": "cookies.jpg",
      "src": "../images/"
    }],
    "comments": "Is this vegan?",
    "date": "11/11/2019",
    "id": 1
  },
  2: {
    "title": "English Literature Essay",
    "grade": 93,
    "attachments": [],
    "comments": "Wow. Your writing is at a level well beyond your years. Keep it up!",
    "date": "12/04/2019",
    "id": 2
  }
}

let userData = {
  "adamsmith@peelschool.ca" : {
    "id" : 1,
    "email": "adamsmith@peelschool.ca",
    "password": "teacher",
    "type" : "teacher",
    "first_name" : "Adam",
    "last_name" : "Smith" 
  },
  "johnwhite@gmail.com" : {
    "id" : 6,
    "email" : "johnwhite@gmail.com",
    "password" : "parent",
    "type" : "parent",
    "first_name" : "John",
    "last_name" : "White"
  }
}

export { courseData, coursePosts, studentData, assignmentData, userData }