const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../middlewares/authentication');
const { Transaction } = db;


router.get('/', (req,res) => {
  Transaction.findAll({})
    .then(transactions => res.json(transactions));
});


// router.post('/',
//   passport.isAuthenticated(),
//   (req, res) => {
//     //let { content } = req.body;
    
//     Transaction.create({ content })
//       .then(post => {
//         res.status(201).json(income);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//   }
// );


router.get('/:id', (req, res) => {
  const { id } = req.params;
    Transaction.findByPk(id)
    .then(transaction => {
      if(!transaction) {
        return res.sendStatus(404);
      }

      res.json(transaction);
    });
});


router.put('/:id',
  passport.isAuthenticated(),
  (req, res) => {
    const { id } = req.params;
    Transaction.findByPk(id)
      .then(transaction => {
        if(!transaction) {
          return res.sendStatus(404);
        }

        //post.content = req.body.content;
        transaction.save()
          .then(transaction => {
            res.json(transaction);
          })
          .catch(err => {
            res.status(400).json(err);
          });
      });
  }
);


router.delete('/:id',
  passport.isAuthenticated(),
  (req, res) => {
    const { id } = req.params;
    Transaction.findByPk(id)
      .then(transaction => {
        if(!transaction) {
          return res.sendStatus(404);
        }

        transaction.destroy();
        res.sendStatus(204);
      });
  }
);


module.exports = router;