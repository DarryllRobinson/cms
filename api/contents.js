const express = require('express');
const contentsRouter = express.Router();

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite');

contentsRouter.param('contentId', (req, res, next, contentId) => {
  const sql = 'SELECT * FROM content WHERE content.id = $contentId';
  const values = {$contentId: contentId};
  db.get(sql, values, (error, content) => {
    if (error) {
      next(error);
    } else if (content) {
      req.content = content;
      next();
    } else {
      res.sendStatus(404);
    }
  });
});

contentsRouter.get('/', (req, res, next) => {
  db.all('SELECT * FROM content',
    (err, contents) => {
      if (err) {
        next(err);
      } else {
        res.status(200).json({contents: contents});
      }
    });
});

contentsRouter.get('/:contentId', (req, res, next) => {
  res.status(200).json({content: req.content});
});

contentsRouter.post('/', (req, res, next) => {
  const title = req.body.content.title,
        category = req.body.content.category,
        subcategory = req.body.content.subcategory,
        placeholder = req.body.content.placeholder,
        user_id = req.body.content.user_id;
  if (!title || !category || !subcategory || !placeholder ||!user_id) {
    return res.sendStatus(400);
  }

  const sql = 'INSERT INTO content (title, category, subcategory, placeholder, user_id)' +
      'VALUES ($title, $category, $subcategory, $placeholder, $user_id)';
  const values = {
    $title: title,
    $category: category,
    $subcategory: subcategory,
    $placeholder: placeholder,
    $user_id: user_id
  };

  db.run(sql, values, function(error) {
    if (error) {
      next(error);
    } else {
      db.get(`SELECT * FROM content WHERE content.id = ${this.lastID}`,
        (error, content) => {
          res.status(201).json({content: content});
        });
    }
  });
});

contentsRouter.put('/:contentId', (req, res, next) => {
  const title = req.body.content.title,
        category = req.body.content.category,
        subcategory = req.body.content.subcategory,
        placeholder = req.body.content.placeholder,
        user_id = req.body.content.user_id;
  if (!title || !category || !subcategory || !placeholder ||!user_id) {
    return res.sendStatus(400);
  }

  const sql = 'UPDATE content SET title = $title, category = $category, subcategory = $subcategory, ' +
      'placeholder = $placeholder, user_id = $user_id ' +
      'WHERE content.id = $contentId';
      const values = {
        $title: title,
        $category: category,
        $subcategory: subcategory,
        $placeholder: placeholder,
        $user_id: user_id
      };

  db.run(sql, values, (error) => {
    if (error) {
      next(error);
    } else {
      db.get(`SELECT * FROM content WHERE content.id = ${req.params.contentId}`,
        (error, content) => {
          res.status(200).json({content: content});
        });
    }
  });
});

contentsRouter.delete('/:contentId', (req, res, next) => {
  const sql = 'DELETE from content WHERE content.id = $contentId';
  const values = {$contentId: req.params.contentId};

  db.run(sql, values, (error) => {
    if (error) {
      next(error);
    } else {
      db.get(`SELECT * FROM content WHERE content.id = ${req.params.contentId}`,
        (error, content) => {
          res.status(200).json({content: content});
        });
    }
  });
});

module.exports = contentsRouter;
