const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../middlewares/authentication');
const { Income } = db;


router.get('/', (req,res) => {
  Income.findAll({})
    .then(incomes => res.json(incomes));
});


// router.post('/',
//   passport.isAuthenticated(),
//   (req, res) => {
//     //let { content } = req.body;
    
//     Income.create({ content })
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
    Income.findByPk(id)
    .then(income => {
      if(!income) {
        return res.sendStatus(404);
      }

      res.json(income);
    });
});


router.put('/:id',
  passport.isAuthenticated(),
  (req, res) => {
    const { id } = req.params;
    Income.findByPk(id)
      .then(income => {
        if(!income) {
          return res.sendStatus(404);
        }

        //post.content = req.body.content;
        income.save()
          .then(income => {
            res.json(income);
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
    Income.findByPk(id)
      .then(income => {
        if(!income) {
          return res.sendStatus(404);
        }

        income.destroy();
        res.sendStatus(204);
      });
  }
);


module.exports = router;