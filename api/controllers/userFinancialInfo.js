const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../middlewares/authentication');
const { UserFinanacialInfo } = db;


router.get('/', (req,res) => {
  UserFinanacialInfo.findAll({})
    .then(userfinanacialinfo => res.json(userfinanacialinfo));
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
    UserFinanacialInfo.findByPk(id)
    .then(userfinanacialinfo => {
      if(!userfinanacialinfo) {
        return res.sendStatus(404);
      }

      res.json(userfinanacialinfo);
    });
});


router.put('/:id',
  passport.isAuthenticated(),
  (req, res) => {
    const { id } = req.params;
    UserFinanacialInfo.findByPk(id)
      .then(userfinanacialinfo => {
        if(!userfinanacialinfo) {
          return res.sendStatus(404);
        }

        //post.content = req.body.content;
        userfinanacialinfo.save()
          .then(userfinanacialinfo => {
            res.json(userfinanacialinfo);
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
    UserFinanacialInfo.findByPk(id)
      .then(userfinanacialinfo => {
        if(!userfinanacialinfo) {
          return res.sendStatus(404);
        }

        userfinanacialinfo.destroy();
        res.sendStatus(204);
      });
  }
);


module.exports = router;