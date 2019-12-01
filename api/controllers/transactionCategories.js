const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../middlewares/authentication');
const { TransactionCategory } = db;


router.get('/', (req,res) => {
  TransactionCategory.findAll({})
    .then(transactioncategories => res.json(transactioncategories));
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
    TransactionCategory.findByPk(id)
    .then(transactioncategory => {
      if(!transactioncategory) {
        return res.sendStatus(404);
      }

      res.json(transactioncategory);
    });
});


router.put('/:id',
  passport.isAuthenticated(),
  (req, res) => {
    const { id } = req.params;
    TransactionCategory.findByPk(id)
      .then(transactioncategory => {
        if(!transactioncategory) {
          return res.sendStatus(404);
        }

        //post.content = req.body.content;
        transactioncategory.save()
          .then(transactioncategory => {
            res.json(transactioncategory);
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
    TransactionCategory.findByPk(id)
      .then(transactioncategory => {
        if(!transactioncategory) {
          return res.sendStatus(404);
        }

        transactioncategory.destroy();
        res.sendStatus(204);
      });
  }
);


module.exports = router;