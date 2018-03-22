const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database.sqlite');

db.serialize(function() {
  db.run('CREATE TABLE IF NOT EXISTS `User` ( ' +
           '`id` INTEGER NOT NULL, ' +
           '`username` TEXT NOT NULL, ' +
           '`password` TEXT NOT NULL, ' +
           '`firstname` TEXT NOT NULL, ' +
           '`surname` TEXT NOT NULL, ' +
           '`email` TEXT NOT NULL, ' +
           '`is_current_user` INTEGER NOT NULL DEFAULT 1, ' +
           'PRIMARY KEY(`id`) )');

  db.run('CREATE TABLE IF NOT EXISTS `Content` ( ' +
           '`id` INTEGER NOT NULL, ' +
           '`title` TEXT NOT NULL, ' +
           '`category` TEXT NOT NULL, ' +
           '`subcategory` TEXT NOT NULL, ' +
           '`placeholder` TEXT NOT NULL, ' +
           '`user_id` INTEGER NOT NULL, ' +
           'PRIMARY KEY(`id`), ' +
           'FOREIGN KEY(`user_id`) REFERENCES `User`(`id`) )');

  /*db.run('CREATE TABLE IF NOT EXISTS `Menu` ( ' +
           '`id` INTEGER NOT NULL, ' +
           '`title` TEXT NOT NULL, ' +
           'PRIMARY KEY(`id`) )');

  db.run('CREATE TABLE IF NOT EXISTS `MenuItem` ( ' +
           '`id` INTEGER NOT NULL, ' +
           '`name` TEXT NOT NULL, ' +
           '`description` TEXT, ' +
           '`inventory` INTEGER NOT NULL, ' +
           '`price` INTEGER NOT NULL, ' +
           '`menu_id` INTEGER NOT NULL, ' +
           'PRIMARY KEY(`id`), ' +
           'FOREIGN KEY(`menu_id`) REFERENCES `Menu`(`id`) )');*/
});
