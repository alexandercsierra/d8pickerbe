const router = require('express').Router();
const Templates = require('./templateModel');

// GET global posts
router.get('/:googleId', async (req, res) => {
  const googleId = req.params.googleId;
  Templates.findBy({googleId})
    .then(template=>res.status(200).json(template))
    .catch(err=>res.status(500).json({message: err.message}))
});

// POST to DB
router.post('/', async (req, res) => {
  const template = {
    summary: req.body.summary,
    description: req.body.description,
    starttime: req.body.starttime,
    endtime: req.body.endtime,
    googleId: req.body.googleId
  }
  
  Templates.add(template)
    .then(added => res.status(201).json(added))
    .catch(err=>res.status(500).json({message: err.message}))
});

// DELETE a specific post
router.delete('/:templateId', async (req, res) => {
    const id = req.params.templateId;
  Templates.remove(id)
    .then(removed=>res.status(200).json(removed))
    .catch(err=>res.status(500).json({message: err.message}))
});

module.exports = router;
