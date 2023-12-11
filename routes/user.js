const express = require('express');
const router = express.Router();
const user = require('../query/user');

router.post('/login', async function(req, res, next) {
  try {
    res.json(await user.login(req.body));
  } catch (err) {
    console.error(`Error`, err.message);
    next(err);
  }
});

router.post('/register', async function(req, res, next) {
  try {
    res.json(await user.register(req.body));
  } catch (err) {
    console.error(`Error`, err.message);
    next(err);
  }
});

router.post('/get', async function(req, res, next) {
  try {
    res.json(await user.get());
  } catch (err) {
    console.error(`Error`, err.message);
    next(err);
  }
});

router.post('/update', async function(req, res, next) {
  try {
    res.json(await user.update(req.body));
  } catch (err) {
    console.error(`Error`, err.message);
    next(err);
  }
});

router.post('/destroy', async function(req, res, next) {
  try {
    res.json(await user.destroy(req.body));
  } catch (err) {
    console.error(`Error`, err.message);
    next(err);
  }
});

module.exports = router;