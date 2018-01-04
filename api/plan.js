const Plan = require('../model/plan');

/**
 * REST endpoints for Plan data
 */
const endpoints = {
  all: (req, res) => {
    Plan.find({})
      .then((plans) => {
        res.send(plans);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },

  load: (req, res) => {
    Plan.findOne({
      _id: req.query.planId
    })
      .then((plan) => {
        if(!plan) {
          return res.status(500).send('Plan not found');
        }

        res.send(plan);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },

  save: (req, res) => {
    Plan.findOneAndUpdate({ _id: req.body._id}, req.body, { new: true })
      .then((plan) => res.send(plan))
      .catch((err) => res.status(500).send(err));
  },
};

const init = (router) => {
  //Mounted on '/api/plan'
  router.get('/all', endpoints.all);
  router.get('/load', endpoints.load);
  router.post('/save', endpoints.save);
};

module.exports = {
  init: init
};

