module.exports = {
    "up": "CREATE TABLE `users` (id int(11) NOT NULL AUTO_INCREMENT, email varchar(100) NOT NULL, name varchar(50) NOT NULL, surname varchar(50) NOT NULL, address varchar(100) DEFAULT NULL, phonenumber varchar(50) DEFAULT NULL, date datetime NOT NULL, password varchar(1000) NOT NULL, PRIMARY KEY (id)) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4;",
    "down": "DROP TABLE users"
}