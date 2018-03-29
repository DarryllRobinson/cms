const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database.sqlite');

// Seed User table
db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='User'", (error, table) => {
  if (error) {
    throw new Error(error);
  }

  if (table) {
    db.serialize(function() {
      let userId;
      db.run("INSERT INTO user (username, password, firstname, surname, email) " +
        "VALUES ('user 1', 'pass1', 'Darryll', 'Robinson', 'd@fcm.co.za')");
        db.run("INSERT INTO user (username, password, firstname, surname, email) " +
          "VALUES ('user 2', 'pass2', 'Brendan', 'Ballantine', 'b@fcm.co.za')"), function(error) {
            if (error) {
              throw new Error(error);
            }
            userId = this.lastID;
          };

    });
  }
});

// Seed Content table
db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='Content'", (error, table) => {
  if (error) {
    throw new Error(error);
  }

  if (table) {
    db.serialize(function() {
      let contentId;
      db.run("INSERT INTO Content (title, category, subcategory, placeholder, user_id) " +
        "VALUES ('Title 1', 'Medical', 'Pharmaceutical', 'The content will go here', '2')");
        db.run("INSERT INTO Content (title, category, subcategory, placeholder, user_id) " +
          "VALUES ('Title 2', 'Retail', 'Clothing', 'Nice shoes, bru', '1')");
          db.run("INSERT INTO Content (title, category, subcategory, placeholder, user_id) " +
          "VALUES ('Title 3', 'Telecomms', 'Tune download', 'Party time!', '1')"), function(error) {
            if (error) {
              throw new Error(error);
            }
            contentId = this.lastID;
          };

    });
  }
});
