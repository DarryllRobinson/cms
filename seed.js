const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database.sqlite');

db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='User'", (error, table) => {
  if (error) {
    throw new Error(error);
  }

  if (table) {
    db.serialize(function() {
      let userId;
      db.run("INSERT INTO user (username, f_irstname, s_urname, e_mail) " +
        "VALUES ('user 1', 'Darryll', 'Robinson', 'd@fcm.co.za')");
        db.run("INSERT INTO user (username, f_irstname, s_urname, e_mail) " +
          "VALUES ('user 2', 'Brendan', 'Ballantine', 'b@fcm.co.za')"), function(error) {
            if (error) {
              throw new Error(error);
            }
            userId = this.lastID;
          };

    });
  }
});
