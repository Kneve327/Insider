USE photojenia_db;


INSERT INTO users (email, password, username, first_name, last_name)
VALUES ("steve@example.com", "babysnakes1", "smattis", "steve", "mattis");

INSERT INTO users (email, password, username, first_name, last_name)
VALUES ("cam@example.com", "babysnakes2", "thallmen", "cam", "hallmen");

INSERT INTO users (email, password, username, first_name, last_name)
VALUES ("kiara@example.com", "babysnakes3", "kneve327", "kiara", "perez");


INSERT INTO posts (post_header, post_body, giphy_URL, UserId)
VALUES ("Introduction", "Greetings to all!", "https://media.giphy.com/media/1108D2tVaUN3eo/giphy.gif", 1);

INSERT INTO posts (post_header, post_body, giphy_URL, UserId)
VALUES ("Hello", "Just wanted to say hello!", "https://media.giphy.com/media/l0HlSH2gsSrxJySnS/giphy.gif", 2);

INSERT INTO posts (post_header, post_body, giphy_URL, UserId)
VALUES ("Project 2", "BAAAAAABEEE SNAAAAAAAAKES!", "https://media.giphy.com/media/l3q30uBosqKse324U/giphy.gif", 3);


INSERT INTO comments (comment_body, PostID)
VALUES ("check", 1);

INSERT INTO comments (comment_body, PostID)
VALUES ("check2", 2);

INSERT INTO comments (comment_body, PostID)
VALUES ("check3", 3);