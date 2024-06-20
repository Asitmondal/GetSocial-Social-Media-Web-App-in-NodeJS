const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get("/dashboard", ensureAuthenticated, (req, res) =>
  
  {
    //console.log(req.user);
    if (req.user.userty == "user") {
      res.render("userdash", {
        user: req.user,
      });
    } else {
      res.render("agentdash", {
        agent: req.user,
      });
    }
  }
);

module.exports = router;
